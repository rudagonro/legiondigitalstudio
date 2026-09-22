import { createRemoteJWKSet, jwtVerify } from "jose";
import panel from "./panel.html";
import cliente from "./descarga.html";
import script from "./panel.js";
import css from "./panel.css";

type Release = {id:number;platform:string;version:string;filename:string;object_key:string;size:number;sha256:string;notes:string;created_at:number};
const MAX_FILE = 90 * 1024 * 1024;
const API = "/admin/sigcae/api";
class HttpError extends Error { constructor(public status:number,message:string){super(message);} }
const json=(value:unknown,status=200)=>Response.json(value,{status});
const now=()=>Math.floor(Date.now()/1000);
async function hash(value:string){return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(value))),b=>b.toString(16).padStart(2,"0")).join("");}
async function smallJson(request:Request):Promise<Record<string,unknown>> {
 if(!request.headers.get("content-type")?.startsWith("application/json"))throw new HttpError(415,"Se requiere JSON.");
 const reader=request.body?.getReader(); if(!reader)throw new HttpError(400,"Faltan datos.");
 const parts:Uint8Array[]=[];let size=0;
 for(;;){const {value,done}=await reader.read();if(done)break;size+=value.length;if(size>8192){await reader.cancel();throw new HttpError(413,"Solicitud demasiado grande.");}parts.push(value);}
 const bytes=new Uint8Array(size);let offset=0;for(const p of parts){bytes.set(p,offset);offset+=p.length;}
 try {const v=JSON.parse(new TextDecoder().decode(bytes));if(!v||typeof v!=="object"||Array.isArray(v))throw 0;return v;}catch{throw new HttpError(400,"Datos inválidos.");}
}
async function admin(request:Request,env:Env){
 if(!env.POLICY_AUD||String(env.POLICY_AUD)==="PENDIENTE_CONFIGURAR")throw new HttpError(503,"Acceso administrativo pendiente de configurar.");
 const token=request.headers.get("cf-access-jwt-assertion");if(!token)throw new HttpError(403,"Inicia sesión con el correo autorizado.");
 try {
  const keys=createRemoteJWKSet(new URL(env.TEAM_DOMAIN+"/cdn-cgi/access/certs"));
  const {payload}=await jwtVerify(token,keys,{issuer:env.TEAM_DOMAIN,audience:env.POLICY_AUD,algorithms:["RS256"],requiredClaims:["exp","iat","email"]});
  if(typeof payload.email!=="string"||payload.email.toLowerCase()!==env.ADMIN_EMAIL.toLowerCase())throw 0;
  return payload.email;
 }catch{throw new HttpError(403,"Sesión no válida para este panel.");}
}
function sameOrigin(request:Request,env:Env){if(request.headers.get("origin")!==env.PUBLIC_ORIGIN)throw new HttpError(403,"Origen no autorizado.");}
async function release(env:Env,id:number){return env.DB.prepare("SELECT * FROM releases WHERE id=? AND available=1").bind(id).first<Release>();}
async function deliver(env:Env,file:Release,actor:string,shareId:string|null){
 const object=await env.FILES.get(file.object_key);if(!object)throw new HttpError(404,"Archivo no disponible; solicita un enlace nuevo.");
 await env.DB.prepare("INSERT INTO downloads(release_id,share_id,actor,created_at) VALUES(?,?,?,?)").bind(file.id,shareId,actor,now()).run();
 return new Response(object.body,{headers:{"Content-Type":"application/octet-stream","Content-Disposition":`attachment; filename="${file.filename}"`,"Content-Length":String(object.size),"X-Checksum-SHA256":file.sha256}});
}
async function cleanup(env:Env,platform:string){
 await env.DB.prepare("UPDATE releases SET available=0 WHERE platform=? AND available=1 AND id NOT IN (SELECT id FROM releases WHERE platform=? AND available=1 ORDER BY id DESC LIMIT 3)").bind(platform,platform).run();
 const old=await env.DB.prepare("SELECT id,object_key FROM releases WHERE available=0 AND purged=0 LIMIT 100").all<{id:number;object_key:string}>();
 for(const row of old.results){await env.FILES.delete(row.object_key);await env.DB.prepare("UPDATE releases SET purged=1 WHERE id=?").bind(row.id).run();}
}
async function route(request:Request,env:Env){
 const url=new URL(request.url),p=url.pathname;
 // Only these routes are mounted. Never proxy a failure to a public origin.
 if(url.origin!==env.PUBLIC_ORIGIN)throw new HttpError(404,"No encontrado.");
 if(p==="/sigcae-descarga"&&request.method==="GET")return new Response(cliente,{headers:{"Content-Type":"text/html; charset=utf-8"}});
 if(p==="/sigcae-descarga/panel.js"&&request.method==="GET")return new Response(script,{headers:{"Content-Type":"text/javascript; charset=utf-8"}});
 if((p==="/sigcae-descarga/panel.css"||p==="/admin/panel.css")&&request.method==="GET")return new Response(css,{headers:{"Content-Type":"text/css; charset=utf-8"}});
 if(p==="/sigcae-descarga"&&request.method==="POST"){
  sameOrigin(request,env);const data=await smallJson(request);
  if(typeof data.token!=="string"||!/^[a-f0-9]{64}$/.test(data.token))throw new HttpError(410,"Enlace inválido, vencido o agotado.");
  // One atomic update enforces the cap even with simultaneous downloads.
  const share=await env.DB.prepare("UPDATE shares SET uses=uses+1 WHERE token_hash=? AND revoked=0 AND expires_at>? AND uses<max_uses AND release_id IN (SELECT id FROM releases WHERE available=1) RETURNING id,release_id").bind(await hash(data.token),now()).first<{id:string;release_id:number}>();
  if(!share)throw new HttpError(410,"Enlace inválido, vencido o agotado.");
  const file=await release(env,share.release_id);if(!file)throw new HttpError(410,"Versión retirada.");
  return deliver(env,file,"enlace autorizado",share.id);
 }
 if(p!=="/admin"&&!p.startsWith("/admin/"))throw new HttpError(404,"No encontrado.");
 const email=await admin(request,env);
 if(request.method!=="GET"&&request.method!=="HEAD")sameOrigin(request,env);
 if((p==="/admin"||p==="/admin/")&&request.method==="GET")return new Response(panel,{headers:{"Content-Type":"text/html; charset=utf-8"}});
 if(p==="/admin/panel.js"&&request.method==="GET")return new Response(script,{headers:{"Content-Type":"text/javascript; charset=utf-8"}});
 if(p===API+"/releases"&&request.method==="GET")return json((await env.DB.prepare("SELECT id,platform,version,filename,size,sha256,notes,created_at FROM releases WHERE available=1 ORDER BY id DESC").all()).results);
 if(p===API+"/history"&&request.method==="GET"){
  const page=Math.max(1,Math.min(100000,Number(url.searchParams.get("page"))||1));
  return json((await env.DB.prepare("SELECT d.id,d.actor,d.created_at,r.filename,r.version FROM downloads d JOIN releases r ON r.id=d.release_id ORDER BY d.id DESC LIMIT 20 OFFSET ?").bind((Math.floor(page)-1)*20).all()).results);
 }
 if(p===API+"/shares"&&request.method==="GET")return json((await env.DB.prepare("SELECT s.id,s.expires_at,s.max_uses,s.uses,s.revoked,r.filename,r.version FROM shares s JOIN releases r ON r.id=s.release_id ORDER BY s.created_at DESC LIMIT 100").all()).results);
 if(p===API+"/shares"&&request.method==="POST"){
  const data=await smallJson(request),id=Number(data.releaseId),uses=Number(data.maxUses??3);
  if(!Number.isSafeInteger(id)||!Number.isInteger(uses)||uses<1||uses>20)throw new HttpError(400,"Límite de descargas inválido.");
  if(!await release(env,id))throw new HttpError(404,"Versión no disponible.");
  const token=Array.from(crypto.getRandomValues(new Uint8Array(32)),b=>b.toString(16).padStart(2,"0")).join("");
  const shareId=crypto.randomUUID(),expires=now()+7*86400;
  await env.DB.prepare("INSERT INTO shares(id,token_hash,release_id,expires_at,max_uses,created_at) VALUES(?,?,?,?,?,?)").bind(shareId,await hash(token),id,expires,uses,now()).run();
  return json({id:shareId,url:env.PUBLIC_ORIGIN+"/sigcae-descarga#"+token,expiresAt:expires,maxUses:uses},201);
 }
 const revoke=p.match(/^\/admin\/sigcae\/api\/shares\/([a-f0-9-]{36})\/revoke$/);
 if(revoke&&request.method==="POST"){
  await env.DB.prepare("UPDATE shares SET revoked=1 WHERE id=?").bind(revoke[1]).run();return json({ok:true});
 }
 const download=p.match(/^\/admin\/sigcae\/api\/releases\/(\d+)\/download$/);
 if(download&&request.method==="GET"){
  const file=await release(env,Number(download[1]));if(!file)throw new HttpError(404,"Versión no disponible.");return deliver(env,file,email,null);
 }
 if(p===API+"/upload"&&request.method==="PUT"){
  const platform=request.headers.get("x-platform")??"",version=request.headers.get("x-version")??"",sha=request.headers.get("x-sha256")??"";
  const filename=request.headers.get("x-filename")??"",size=Number(request.headers.get("content-length"));
  let notes="";try{notes=decodeURIComponent(request.headers.get("x-notes")??"");}catch{throw new HttpError(400,"Notas inválidas.");}
  if(!["servidor","cliente","android"].includes(platform)||!/^\d+\.\d+\.\d+(?:[-+][a-zA-Z0-9.-]+)?$/.test(version)||version.length>60||!/^SIGCAE[a-zA-Z0-9._ -]*\.(exe|apk)$/.test(filename)||filename.length>150||!/^[a-f0-9]{64}$/.test(sha)||notes.length>2000)throw new HttpError(400,"Revisa plataforma, versión, nombre SIGCAE, hash y notas.");
  if((platform==="android")!==filename.endsWith(".apk"))throw new HttpError(400,"El tipo de archivo no corresponde a la plataforma.");
  if(!Number.isSafeInteger(size)||size<=0||size>MAX_FILE||!request.body)throw new HttpError(413,"Archivo vacío o mayor de 90 MiB.");
  const key=`${platform}/${crypto.randomUUID()}/${filename}`;
  const object=await env.FILES.put(key,request.body,{sha256:sha,httpMetadata:{contentType:"application/octet-stream"}});
  if(!object||object.size!==size){await env.FILES.delete(key);throw new HttpError(400,"Tamaño de archivo inconsistente.");}
  try{await env.DB.prepare("INSERT INTO releases(platform,version,filename,object_key,size,sha256,notes,created_at) VALUES(?,?,?,?,?,?,?,?)").bind(platform,version,filename,key,size,sha,notes,now()).run();}catch(error){await env.FILES.delete(key);throw error;}
  await cleanup(env,platform);return json({ok:true},201);
 }
 throw new HttpError(404,"No encontrado.");
}
export default {
 async fetch(request,env){
  let response:Response;
  try{response=await route(request,env);}catch(error){if(error instanceof HttpError)response=json({error:error.message},error.status);else{console.error(JSON.stringify({event:"download_service_error"}));response=json({error:"No se pudo completar la operación. Intenta de nuevo."},500);}}
  const headers=new Headers(response.headers);headers.set("Cache-Control","private, no-store");headers.set("X-Content-Type-Options","nosniff");headers.set("Referrer-Policy","no-referrer");headers.set("X-Frame-Options","DENY");headers.set("Content-Security-Policy","default-src 'none'; script-src 'self'; style-src 'self'; connect-src 'self'; img-src 'self'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'");
  return new Response(response.body,{status:response.status,headers});
 }
} satisfies ExportedHandler<Env>;
