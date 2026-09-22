"use strict";
const $=id=>document.getElementById(id);
const message=text=>{$("message").textContent=text;};
const api="/admin/sigcae/api";
const date=n=>new Date(n*1000).toLocaleString("es-CO",{timeZone:"America/Bogota"});
async function request(path,options={}){const r=await fetch(path,options);if(!r.ok){let text="No se pudo completar la operación.";try{text=(await r.json()).error||text;}catch{}throw new Error(text);}return r;}
function text(parent,tag,value,className){const el=document.createElement(tag);el.textContent=value;if(className)el.className=className;parent.append(el);return el;}
function button(parent,label,action){const b=text(parent,"button",label);b.type="button";b.addEventListener("click",async()=>{b.disabled=true;try{await action();}catch(e){message(e.message);}finally{b.disabled=false;}});return b;}
async function save(response){const blob=await response.blob();const name=response.headers.get("content-disposition")?.match(/filename="([^"]+)"/)?.[1]||"SIGCAE-instalador.exe";const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);}
if($("download")){
 const token=location.hash.slice(1);history.replaceState(null,"",location.pathname);
 $("download").addEventListener("click",async()=>{const b=$("download");b.disabled=true;message("Descargando; espera un momento…");try{await save(await request("/sigcae-descarga",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token})}));message("El navegador recibió el instalador. Revisa tus descargas.");}catch(e){message(e.message);b.disabled=false;}});
}else{
 let page=1;
 async function load(){
  const releases=await (await request(api+"/releases")).json();$("platforms").replaceChildren();
  for(const [platform,title] of [["servidor","Servidor Windows"],["cliente","Cliente Windows"],["android","Android / Tablet"]]){
   const card=document.createElement("article");$("platforms").append(card);text(card,"h2",title);const files=releases.filter(f=>f.platform===platform);
   if(!files.length){text(card,"p",platform==="android"?"Disponible mediante Chrome en la red del casino: abre la dirección y el QR de Configuración → Red y tablet. APK aún no publicado.":"Instalador aún no publicado.");continue;}
   for(const [i,file] of files.entries()){
    text(card,"h3",`${i===0?"Vigente":"Anterior"} · ${file.version}`);text(card,"p",`${date(file.created_at)} · ${(file.size/1048576).toFixed(1)} MiB`);text(card,"p",file.notes);text(card,"p","SHA-256: "+file.sha256,"hash");
    const actions=document.createElement("div");actions.className="actions";card.append(actions);
    button(actions,"Descargar",async()=>{await save(await request(api+`/releases/${file.id}/download`));await loadHistory();});
    button(actions,"Compartir 7 días",async()=>{const r=await (await request(api+"/shares",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({releaseId:file.id,maxUses:Number($("maxUses").value)})})).json();$("shareUrl").value=r.url;message(`Enlace creado. Vence ${date(r.expiresAt)}; máximo ${r.maxUses} descargas. Cópialo y envíalo solo al cliente autorizado.`);await loadShares();});
   }
  }
  await Promise.all([loadShares(),loadHistory()]);
 }
 async function loadShares(){const rows=await(await request(api+"/shares")).json();$("shares").replaceChildren();for(const row of rows){const box=document.createElement("div");box.className="row";$("shares").append(box);text(box,"p",`${row.filename} · ${row.uses}/${row.max_uses} usos · vence ${date(row.expires_at)}${row.revoked?" · Revocado":""}`);if(!row.revoked)button(box,"Revocar",async()=>{await request(api+`/shares/${row.id}/revoke`,{method:"POST"});await loadShares();});}if(!rows.length)text($("shares"),"p","No se han creado enlaces.");}
 async function loadHistory(){const rows=await(await request(api+"/history?page="+page)).json();$("history").replaceChildren();for(const row of rows){const box=document.createElement("div");box.className="row";$("history").append(box);text(box,"p",`${date(row.created_at)} · ${row.filename} · ${row.version} · ${row.actor}`);}if(!rows.length)text($("history"),"p","Sin entregas en esta página.");$("page").textContent="Página "+page;$("previous").disabled=page===1;$("next").disabled=rows.length<20;}
 $("previous").onclick=()=>{if(page>1){page--;loadHistory().catch(e=>message(e.message));}};$("next").onclick=()=>{page++;loadHistory().catch(e=>message(e.message));};
 $("copy").onclick=async()=>{try{if(!$("shareUrl").value)return;await navigator.clipboard.writeText($("shareUrl").value);message("Enlace copiado.");}catch{message("Selecciona el enlace y usa Copiar.");}};
 $("upload").addEventListener("submit",async event=>{event.preventDefault();const form=event.currentTarget,b=form.querySelector("button"),f=form.elements.file.files[0];b.disabled=true;try{if(!f||f.size>90*1048576)throw new Error("El archivo debe pesar como máximo 90 MiB.");message("Calculando SHA-256 y subiendo; no cierres esta página…");const sha=Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",await f.arrayBuffer())),b=>b.toString(16).padStart(2,"0")).join("");await request(api+"/upload",{method:"PUT",headers:{"Content-Type":"application/octet-stream","X-Platform":form.elements.platform.value,"X-Version":form.elements.version.value,"X-Filename":f.name,"X-Sha256":sha,"X-Notes":encodeURIComponent(form.elements.notes.value)},body:f});message("Versión publicada y hash verificado. Se conservan las dos versiones anteriores.");form.reset();await load();}catch(e){message(e.message);}finally{b.disabled=false;}});
 load().catch(e=>message(e.message));
}
