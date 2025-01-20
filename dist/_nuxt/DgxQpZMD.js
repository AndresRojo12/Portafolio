import{L as Y,r as S,M as X,N as Z,O as ee,P as te,H as se,Q as H,m as re,R as ae,S as I,K as ne,T as oe,c as ie,U as V,V as ce,W as le,_ as ue,l as de,X as fe,i as C,t as j,Y as A,A as D,x,z as b,B as P,Z as he,$ as pe,y as L,v as T,a0 as ye,a1 as me,C as _e,D as ge}from"./DuCAihEZ.js";import{_ as ve}from"./CLR-m-2S.js";const $=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function be(r,a){a?a={...$,...a}:a=$;const s=W(a);return s.dispatch(r),s.toString()}const we=Object.freeze(["prototype","__proto__","constructor"]);function W(r){let a="",s=new Map;const t=e=>{a+=e};return{toString(){return a},getContext(){return s},dispatch(e){return r.replacer&&(e=r.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const n=Object.prototype.toString.call(e);let c="";const p=n.length;p<10?c="unknown:["+n+"]":c=n.slice(8,p-1),c=c.toLowerCase();let u=null;if((u=s.get(e))===void 0)s.set(e,s.size);else return this.dispatch("[CIRCULAR:"+u+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(c!=="object"&&c!=="function"&&c!=="asyncfunction")this[c]?this[c](e):r.ignoreUnknown||this.unkown(e,c);else{let d=Object.keys(e);r.unorderedObjects&&(d=d.sort());let o=[];r.respectType!==!1&&!q(e)&&(o=we),r.excludeKeys&&(d=d.filter(l=>!r.excludeKeys(l)),o=o.filter(l=>!r.excludeKeys(l))),t("object:"+(d.length+o.length)+":");const y=l=>{this.dispatch(l),t(":"),r.excludeValues||this.dispatch(e[l]),t(",")};for(const l of d)y(l);for(const l of o)y(l)}},array(e,n){if(n=n===void 0?r.unorderedArrays!==!1:n,t("array:"+e.length+":"),!n||e.length<=1){for(const u of e)this.dispatch(u);return}const c=new Map,p=e.map(u=>{const d=W(r);d.dispatch(u);for(const[o,y]of d.getContext())c.set(o,y);return d.toString()});return s=c,p.sort(),this.array(p,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,n){if(t(n),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),q(e)?this.dispatch("[native]"):this.dispatch(e.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),r.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const n=[...e];return this.array(n,r.unorderedSets!==!1)},set(e){t("set:");const n=[...e];return this.array(n,r.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(r.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const G="[native code] }",Be=G.length;function q(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-Be)===G}var De=Object.defineProperty,Se=(r,a,s)=>a in r?De(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s,F=(r,a,s)=>(Se(r,typeof a!="symbol"?a+"":a,s),s);class k{constructor(a,s){F(this,"words"),F(this,"sigBytes"),a=this.words=a||[],this.sigBytes=s===void 0?a.length*4:s}toString(a){return(a||xe).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let s=0;s<a.sigBytes;s++){const t=a.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=t<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<a.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=a.words[s>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new k([...this.words])}}const xe={stringify(r){const a=[];for(let s=0;s<r.sigBytes;s++){const t=r.words[s>>>2]>>>24-s%4*8&255;a.push((t>>>4).toString(16),(t&15).toString(16))}return a.join("")}},Ce={stringify(r){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let t=0;t<r.sigBytes;t+=3){const e=r.words[t>>>2]>>>24-t%4*8&255,n=r.words[t+1>>>2]>>>24-(t+1)%4*8&255,c=r.words[t+2>>>2]>>>24-(t+2)%4*8&255,p=e<<16|n<<8|c;for(let u=0;u<4&&t*8+u*6<r.sigBytes*8;u++)s.push(a.charAt(p>>>6*(3-u)&63))}return s.join("")}},Pe={parse(r){const a=r.length,s=[];for(let t=0;t<a;t++)s[t>>>2]|=(r.charCodeAt(t)&255)<<24-t%4*8;return new k(s,a)}},ke={parse(r){return Pe.parse(unescape(encodeURIComponent(r)))}};class Oe{constructor(){F(this,"_data",new k),F(this,"_nDataBytes",0),F(this,"_minBufferSize",0),F(this,"blockSize",512/32)}reset(){this._data=new k,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=ke.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,s){}_process(a){let s,t=this._data.sigBytes/(this.blockSize*4);a?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,n=Math.min(e*4,this._data.sigBytes);if(e){for(let c=0;c<e;c+=this.blockSize)this._doProcessBlock(this._data.words,c);s=this._data.words.splice(0,e),this._data.sigBytes-=n}return new k(s,n)}}class Ve extends Oe{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}var ze=Object.defineProperty,Fe=(r,a,s)=>a in r?ze(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s,Ne=(r,a,s)=>(Fe(r,a+"",s),s);const K=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Ue=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],O=[];class Re extends Ve{constructor(){super(...arguments),Ne(this,"_hash",new k([...K]))}reset(){super.reset(),this._hash=new k([...K])}_doProcessBlock(a,s){const t=this._hash.words;let e=t[0],n=t[1],c=t[2],p=t[3],u=t[4],d=t[5],o=t[6],y=t[7];for(let l=0;l<64;l++){if(l<16)O[l]=a[s+l]|0;else{const h=O[l-15],z=(h<<25|h>>>7)^(h<<14|h>>>18)^h>>>3,g=O[l-2],U=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;O[l]=z+O[l-7]+U+O[l-16]}const B=u&d^~u&o,m=e&n^e&c^n&c,_=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),w=(u<<26|u>>>6)^(u<<21|u>>>11)^(u<<7|u>>>25),f=y+w+B+Ue[l]+O[l],i=_+m;y=o,o=d,d=u,u=p+f|0,p=c,c=n,n=e,e=f+i|0}t[0]=t[0]+e|0,t[1]=t[1]+n|0,t[2]=t[2]+c|0,t[3]=t[3]+p|0,t[4]=t[4]+u|0,t[5]=t[5]+d|0,t[6]=t[6]+o|0,t[7]=t[7]+y|0}finalize(a){super.finalize(a);const s=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(t+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Me(r){return new Re().finalize(r).toString(Ce)}function je(r,a={}){const s=typeof r=="string"?r:be(r,a);return Me(s).slice(0,10)}const Ee=r=>r==="defer"||r===!1;function He(...r){var m;const a=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(a);let[s,t,e={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=re(),c=t,p=()=>null,u=()=>n.isHydrating?n.payload.data[s]:n.static.data[s];e.server=e.server??!0,e.default=e.default??p,e.getCachedData=e.getCachedData??u,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??Y.deep,e.dedupe=e.dedupe??"cancel";const d=()=>e.getCachedData(s,n)!=null;if(!n._asyncData[s]||!e.immediate){(m=n.payload._errors)[s]??(m[s]=null);const _=e.deep?S:X;n._asyncData[s]={data:_(e.getCachedData(s,n)??e.default()),pending:S(!d()),error:Z(n.payload._errors,s),status:S("idle")}}const o={...n._asyncData[s]};o.refresh=o.execute=(_={})=>{if(n._asyncDataPromises[s]){if(Ee(_.dedupe??e.dedupe))return n._asyncDataPromises[s];n._asyncDataPromises[s].cancelled=!0}if((_._initial||n.isHydrating&&_._initial!==!1)&&d())return Promise.resolve(e.getCachedData(s,n));o.pending.value=!0,o.status.value="pending";const w=new Promise((f,i)=>{try{f(c(n))}catch(h){i(h)}}).then(async f=>{if(w.cancelled)return n._asyncDataPromises[s];let i=f;e.transform&&(i=await e.transform(f)),e.pick&&(i=Te(i,e.pick)),n.payload.data[s]=i,o.data.value=i,o.error.value=null,o.status.value="success"}).catch(f=>{if(w.cancelled)return n._asyncDataPromises[s];o.error.value=ae(f),o.data.value=I(e.default()),o.status.value="error"}).finally(()=>{w.cancelled||(o.pending.value=!1,delete n._asyncDataPromises[s])});return n._asyncDataPromises[s]=w,n._asyncDataPromises[s]},o.clear=()=>Le(n,s);const y=()=>o.refresh({_initial:!0}),l=e.server!==!1&&n.payload.serverRendered;{const _=ne();if(_&&!_._nuxtOnBeforeMountCbs){_._nuxtOnBeforeMountCbs=[];const i=_._nuxtOnBeforeMountCbs;ee(()=>{i.forEach(h=>{h()}),i.splice(0,i.length)}),te(()=>i.splice(0,i.length))}l&&n.isHydrating&&(o.error.value||d())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):_&&(n.payload.serverRendered&&n.isHydrating||e.lazy)&&e.immediate?_._nuxtOnBeforeMountCbs.push(y):e.immediate&&y();const w=oe();if(e.watch){const i=se(e.watch,()=>o.refresh());w&&H(i)}const f=n.hook("app:data:refresh",async i=>{(!i||i.includes(s))&&await o.refresh()});w&&H(f)}const B=Promise.resolve(n._asyncDataPromises[s]).then(()=>o);return Object.assign(B,o),B}function Le(r,a){a in r.payload.data&&(r.payload.data[a]=void 0),a in r.payload._errors&&(r.payload._errors[a]=null),r._asyncData[a]&&(r._asyncData[a].data.value=void 0,r._asyncData[a].error.value=null,r._asyncData[a].pending.value=!1,r._asyncData[a].status.value="idle"),a in r._asyncDataPromises&&(r._asyncDataPromises[a].cancelled=!0,r._asyncDataPromises[a]=void 0)}function Te(r,a){const s={};for(const t of a)s[t]=r[t];return s}function $e(r,a,s){const[t={},e]=typeof a=="string"?[{},a]:[a,s],n=ie(()=>V(r)),c=t.key||je([e,typeof n.value=="string"?n.value:"",...qe(t)]);if(!c||typeof c!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+c);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const p=c===e?"$f"+c:c;if(!t.baseURL&&typeof n.value=="string"&&n.value[0]==="/"&&n.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:u,lazy:d,default:o,transform:y,pick:l,watch:B,immediate:m,getCachedData:_,deep:w,dedupe:f,...i}=t,h=ce({...le,...i,cache:typeof t.cache=="boolean"?void 0:t.cache}),z={server:u,lazy:d,default:o,transform:y,pick:l,immediate:m,getCachedData:_,deep:w,dedupe:f,watch:B===!1?[]:[h,n,...B||[]]};let g;return He(p,()=>{var M;(M=g==null?void 0:g.abort)==null||M.call(g),g=typeof AbortController<"u"?new AbortController:{};const R=V(t.timeout);return R&&setTimeout(()=>g.abort(),R),(t.$fetch||globalThis.$fetch)(n.value,{signal:g.signal,...h})},z)}function qe(r){var s;const a=[((s=V(r.method))==null?void 0:s.toUpperCase())||"GET",V(r.baseURL)];for(const t of[r.params||r.query]){const e=V(t);if(!e)continue;const n={};for(const[c,p]of Object.entries(e))n[V(c)]=V(p);a.push(n)}return a}const N=r=>(_e("data-v-be56bf02"),r=r(),ge(),r),Ke={class:"navegation"},Ie={class:"nav-content"},Ae=N(()=>x("img",{src:ve,alt:"Logo",class:"logo"},null,-1)),We={class:"nav-buttons"},Ge=N(()=>x("h1",{style:{color:"white","align-items":"center"}},"Contacto",-1)),Je=N(()=>x("hr",{class:"separator"},null,-1)),Qe={class:"footer-top"},Ye=N(()=>x("strong",null,"Contacto",-1)),Xe=["href"],Ze={class:"footer-bottom"},et=N(()=>x("strong",null,"Andres Rojo",-1)),tt={__name:"ContactoVue",setup(r){const a=de().public,s=fe(),t=S([{name:"mdi-github",url:a.GIT_HUB},{name:"mdi-gmail",url:`mailto:${a.CORREO}`},{name:"mdi-linkedin",url:a.LINKEDIN}]),e=S("contacto"),n=f=>{e.value=f},c=()=>{s.push("/")},p=()=>{s.push("/servicio/servicio")},u=()=>{s.push("/proyectos/proyecto")},d=S(!1),o=S(""),y=S(""),l=S(""),B={required:f=>!!f||"Este campo es obligatorio",email:f=>/.+@.+\..+/.test(f)||"El correo no es válido"},m=S({visible:!1,message:"",timeout:3e3}),_=async()=>{var f;try{const{data:i,error:h}=await $e(`${a.public.API_BASE_URL}`,{method:"POST",body:{name:o.value,email:y.value,message:l.value}},"$FNjNQqqzGR");h.value?(m.value.message=h.value.message||"Hubo un error al enviar el mensaje",m.value.visible=!0):(m.value.message=((f=i.value)==null?void 0:f.success)||"Mensaje enviado con éxito",m.value.visible=!0,w())}catch{m.value.message="Hubo un error inesperado",m.value.visible=!0}},w=()=>{o.value="",y.value="",l.value="",d.value=!1};return(f,i)=>{const h=C("v-btn"),z=C("v-text-field"),g=C("v-textarea"),U=C("v-snackbar"),R=C("v-form"),E=C("v-container"),M=C("v-spacer"),J=C("v-footer"),Q=C("v-app");return j(),A(Q,{style:{"background-color":"black"}},{default:D(()=>[x("nav",Ke,[x("div",Ie,[Ae,x("div",We,[b(h,{onClick:c,variant:"text"},{default:D(()=>[P("Presentación")]),_:1}),b(h,{variant:"text",onClick:p},{default:D(()=>[P("Servicios")]),_:1}),b(h,{variant:"text",onClick:u},{default:D(()=>[P("Proyectos")]),_:1}),b(h,{variant:"text",class:he({active:e.value==="contacto"}),onClick:i[0]||(i[0]=v=>n("contacto"))},{default:D(()=>[P("Contacto")]),_:1},8,["class"])])])]),b(E,{class:"form"},{default:D(()=>[Ge,b(R,{class:"form1",modelValue:d.value,"onUpdate:modelValue":i[6]||(i[6]=v=>d.value=v),onSubmit:pe(_,["prevent"])},{default:D(()=>[b(z,{modelValue:o.value,"onUpdate:modelValue":i[1]||(i[1]=v=>o.value=v),label:"Nombre",rules:[B.required],required:""},null,8,["modelValue","rules"]),b(z,{modelValue:y.value,"onUpdate:modelValue":i[2]||(i[2]=v=>y.value=v),label:"Correo electrónico",rules:[B.required,B.email],required:""},null,8,["modelValue","rules"]),b(g,{modelValue:l.value,"onUpdate:modelValue":i[3]||(i[3]=v=>l.value=v),label:"Mensaje",rules:[B.required],required:""},null,8,["modelValue","rules"]),b(h,{style:{color:"aqua"},disabled:!d.value,type:"submit"},{default:D(()=>[P(" Enviar mensaje ")]),_:1},8,["disabled"]),b(U,{modelValue:m.value.visible,"onUpdate:modelValue":i[5]||(i[5]=v=>m.value.visible=v),timeout:m.value.timeout,top:""},{default:D(()=>[P(L(m.value.message)+" ",1),b(h,{color:"pink",text:"",onClick:i[4]||(i[4]=v=>m.value.visible=!1)},{default:D(()=>[P("Cerrar")]),_:1})]),_:1},8,["modelValue","timeout"])]),_:1},8,["modelValue"])]),_:1}),Je,b(J,{class:"footer"},{default:D(()=>[x("div",Qe,[Ye,b(M),(j(!0),T(me,null,ye(t.value,v=>(j(),T("a",{key:v.name,href:v.url,target:"_blank"},[b(h,{icon:v.name,class:"footer-icon"},null,8,["icon"])],8,Xe))),128))]),x("div",Ze,[P(L(new Date().getFullYear())+" — ",1),et])]),_:1})]),_:1})}}},st=ue(tt,[["__scopeId","data-v-be56bf02"]]),nt={__name:"contact",setup(r){return(a,s)=>(j(),A(I(st)))}};export{nt as default};
