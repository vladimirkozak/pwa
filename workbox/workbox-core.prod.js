this.workbox=this.workbox||{},this.workbox.core=function(e){"use strict";try{self["workbox:core:7.0.0"]&&_()}catch(e){}class t extends Error{constructor(e,t){super(((e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n})(e,t)),this.name=e,this.details=t}}const n=new Set,r={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},i=e=>[r.prefix,e,r.suffix].filter((e=>e&&e.length>0)).join("-"),o={updateDetails:e=>{(e=>{for(const t of Object.keys(r))e(t)})((t=>{"string"==typeof e[t]&&(r[t]=e[t])}))},getGoogleAnalyticsName:e=>e||i(r.googleAnalytics),getPrecacheName:e=>e||i(r.precache),getPrefix:()=>r.prefix,getRuntimeName:e=>e||i(r.runtime),getSuffix:()=>r.suffix};function s(e,t){const n=new URL(e);for(const e of t)n.searchParams.delete(e);return n.href}let a,c;function l(){if(void 0===c){const e=new Response("");if("body"in e)try{new Response(e.body),c=!0}catch(e){c=!1}c=!1}return c}function u(e){return new Promise((t=>setTimeout(t,e)))}var f=Object.freeze({__proto__:null,assert:null,cacheMatchIgnoreParams:async function(e,t,n,r){const i=s(t.url,n);if(t.url===i)return e.match(t,r);const o=Object.assign(Object.assign({},r),{ignoreSearch:!0}),a=await e.keys(t,o);for(const t of a)if(i===s(t.url,n))return e.match(t,r)},cacheNames:o,canConstructReadableStream:function(){if(void 0===a)try{new ReadableStream({start(){}}),a=!0}catch(e){a=!1}return a},canConstructResponseFromBodyStream:l,dontWaitFor:function(e){e.then((()=>{}))},Deferred:class{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}},executeQuotaErrorCallbacks:async function(){for(const e of n)await e()},getFriendlyURL:e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),""),logger:null,resultingClientExists:async function(e){if(!e)return;let t=await self.clients.matchAll({type:"window"});const n=new Set(t.map((e=>e.id)));let r;const i=performance.now();for(;performance.now()-i<2e3&&(t=await self.clients.matchAll({type:"window"}),r=t.find((t=>e?t.id===e:!n.has(t.id))),!r);)await u(100);return r},timeout:u,waitUntil:function(e,t){const n=t();return e.waitUntil(n),n},WorkboxError:t});const g={get googleAnalytics(){return o.getGoogleAnalyticsName()},get precache(){return o.getPrecacheName()},get prefix(){return o.getPrefix()},get runtime(){return o.getRuntimeName()},get suffix(){return o.getSuffix()}};return e._private=f,e.cacheNames=g,e.clientsClaim=function(){self.addEventListener("activate",(()=>self.clients.claim()))},e.copyResponse=async function(e,n){let r=null;if(e.url&&(r=new URL(e.url).origin),r!==self.location.origin)throw new t("cross-origin-copy-response",{origin:r});const i=e.clone(),o={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},s=n?n(o):o,a=l()?i.body:await i.blob();return new Response(a,s)},e.registerQuotaErrorCallback=function(e){n.add(e)},e.setCacheNameDetails=function(e){o.updateDetails(e)},e.skipWaiting=function(){self.skipWaiting()},e}({});