import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { Miniflare, convertV4MiniflareOptions } from "miniflare";
import { generateKeyPair, exportJWK, SignJWT } from "jose";
import { createHash } from "node:crypto";
let mf,db,privateKey,adminToken;
const origin="https://legiondigitalstudio.com",issuer="https://rudagonro.cloudflareaccess.com",api="/admin/sigcae/api";
async function jwt(email="rudagonro@gmail.com",aud="test-audience",expires="1h"){return new SignJWT({email}).setProtectedHeader({alg:"RS256",kid:"local-test"}).setIssuer(issuer).setAudience(aud).setIssuedAt().setExpirationTime(expires).sign(privateKey);}
function call(path,options={}){return mf.dispatchFetch(origin+path,options);}
function auth(extra={}){return {"cf-access-jwt-assertion":adminToken,origin,...extra};}
async function share(id,maxUses=1){const r=await call(api+"/shares",{method:"POST",headers:auth({"content-type":"application/json"}),body:JSON.stringify({releaseId:id,maxUses})});assert.equal(r.status,201,await r.clone().text());return r.json();}
function download(token){return call("/sigcae-descarga",{method:"POST",headers:{origin,"content-type":"application/json"},body:JSON.stringify({token})});}
async function upload(version="0.4.0",sha){const body="Instalador ficticio para pruebas, no ejecutable "+version;const r=await call(api+"/upload",{method:"PUT",headers:auth({"content-type":"application/octet-stream","content-length":String(Buffer.byteLength(body)),"x-platform":"servidor","x-version":version,"x-filename":"SIGCAE-servidor.exe","x-sha256":sha??createHash("sha256").update(body).digest("hex"),"x-notes":"Prueba local"}),body});return r;}
before(async()=>{
 const keys=await generateKeyPair("RS256");privateKey=keys.privateKey;const key={...await exportJWK(keys.publicKey),kid:"local-test",alg:"RS256",use:"sig"};
 mf=new Miniflare(convertV4MiniflareOptions({modules:[{type:"ESModule",path:"dist/worker.js"},...(await readdir("dist")).filter(f=>/\.(html|css)$|-panel\.js$/.test(f)).map(f=>({type:"Text",path:"dist/"+f}))],compatibilityDate:"2026-09-21",r2Buckets:["FILES"],d1Databases:["DB"],bindings:{TEAM_DOMAIN:issuer,POLICY_AUD:"test-audience",ADMIN_EMAIL:"rudagonro@gmail.com",PUBLIC_ORIGIN:origin},outboundService:async req=>{assert.equal(req.url,issuer+"/cdn-cgi/access/certs");return Response.json({keys:[key]});}}));
 db=await mf.getD1Database("DB");const sql=await readFile("migrations/0001_descargas.sql","utf8");for(const statement of sql.split(";").filter(x=>x.trim()))await db.prepare(statement).run();
 adminToken=await jwt();
});
after(async()=>{await mf?.dispose();});
test("panel y API exigen firma, audiencia, vigencia y correo autorizado",async()=>{
 for(const path of ["/admin",api+"/releases",api+"/history"]){assert.equal((await call(path)).status,403);}
 for(const token of ["falso",await jwt("otro@example.test"),await jwt("rudagonro@gmail.com","otra-app"),await jwt("rudagonro@gmail.com","test-audience","-1s")])assert.equal((await call(api+"/releases",{headers:{"cf-access-jwt-assertion":token}})).status,403);
 const r=await call("/admin",{headers:auth()});assert.equal(r.status,200);assert.match(await r.text(),/Descargas privadas/);assert.equal(r.headers.get("cache-control"),"private, no-store");
});
test("rechaza escritura desde otro origen y rutas ajenas",async()=>{
 assert.equal((await call(api+"/shares",{method:"POST",headers:auth({origin:"https://ajeno.test","content-type":"application/json"}),body:"{}"})).status,403);
 assert.equal((await call("/otra-pagina")).status,404);
});
test("publica por streaming y verifica SHA-256 sin aceptar corrupción",async()=>{
 assert.equal((await upload()).status,201);
 assert.equal((await upload("0.4.1","0".repeat(64))).status,500);
 const files=await(await call(api+"/releases",{headers:auth()})).json();assert.equal(files.length,1);assert.equal(files[0].version,"0.4.0");assert.ok(files[0].sha256);
});
test("límite atómico: diez solicitudes simultáneas consumen solo dos usos",async()=>{
 const s=await share(1,2),token=s.url.split("#")[1];assert.ok(s.expiresAt> Date.now()/1000+6.99*86400);
 const rs=await Promise.all(Array.from({length:10},()=>download(token)));assert.equal(rs.filter(r=>r.status===200).length,2);assert.equal(rs.filter(r=>r.status===410).length,8);
 for(const r of rs)await r.arrayBuffer();
 const row=await db.prepare("SELECT uses,token_hash FROM shares WHERE id=?").bind(s.id).first();assert.equal(row.uses,2);assert.notEqual(row.token_hash,token);
});
test("caducidad y revocación impiden entregar archivos",async()=>{
 const expired=await share(1);await db.prepare("UPDATE shares SET expires_at=0 WHERE id=?").bind(expired.id).run();assert.equal((await download(expired.url.split("#")[1])).status,410);
 const revoked=await share(1);assert.equal((await call(api+`/shares/${revoked.id}/revoke`,{method:"POST",headers:auth()})).status,200);assert.equal((await download(revoked.url.split("#")[1])).status,410);
});
test("conserva tres versiones y retira archivos y enlaces anteriores",async()=>{
 const s=await share(1);for(const v of ["0.4.2","0.4.3","0.4.4"])assert.equal((await upload(v)).status,201);
 const files=await(await call(api+"/releases",{headers:auth()})).json();assert.equal(files.length,3);assert.equal(files[0].version,"0.4.4");assert.equal((await download(s.url.split("#")[1])).status,410);
 const old=await db.prepare("SELECT object_key,purged FROM releases WHERE id=1").first();assert.equal(old.purged,1);assert.equal(await(await mf.getR2Bucket("FILES")).get(old.object_key),null);
});
test("historial conserva archivo/versión y entrega directa requiere administrador",async()=>{
 const r=await call(api+"/releases/4/download",{headers:auth()});assert.equal(r.status,200);assert.match(r.headers.get("content-disposition"),/SIGCAE/);assert.ok(r.headers.get("x-checksum-sha256"));await r.arrayBuffer();
 const rows=await(await call(api+"/history",{headers:auth()})).json();assert.equal(rows.length,3);assert.equal(rows[0].version,"0.4.4");
 assert.equal((await call(api+"/releases/4/download")).status,403);
});
