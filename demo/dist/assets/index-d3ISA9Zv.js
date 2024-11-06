var Z_=Object.defineProperty;var $_=(s,e,t)=>e in s?Z_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var le=(s,e,t)=>$_(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const J_=!1;var yd=Array.isArray,Sd=Array.from,ev=Object.defineProperty,lo=Object.getOwnPropertyDescriptor,tv=Object.getOwnPropertyDescriptors,nv=Object.prototype,iv=Array.prototype,mg=Object.getPrototypeOf;const co=()=>{};function sv(s){return s()}function Ju(s){for(var e=0;e<s.length;e++)s[e]()}const hs=2,gg=4,Xa=8,Ad=16,Ci=32,qa=64,Er=128,Zl=256,Ln=512,Ns=1024,Ya=2048,Li=4096,Qa=8192,rv=16384,Md=32768,ov=1<<18,_g=1<<19,uo=Symbol("$state");function vg(s){return s===this.v}function xg(s,e){return s!=s?e==e:s!==e||s!==null&&typeof s=="object"||typeof s=="function"}function av(s){return!xg(s,this.v)}function lv(s){throw new Error("effect_in_teardown")}function cv(){throw new Error("effect_in_unowned_derived")}function uv(s){throw new Error("effect_orphan")}function hv(){throw new Error("effect_update_depth_exceeded")}function dv(s){throw new Error("props_invalid_value")}function fv(){throw new Error("state_descriptors_fixed")}function pv(){throw new Error("state_prototype_fixed")}function mv(){throw new Error("state_unsafe_local_read")}function gv(){throw new Error("state_unsafe_mutation")}function wn(s){return{f:0,v:s,reactions:null,equals:vg,version:0}}function na(s){return yg(wn(s))}function Tc(s,e=!1){var n;const t=wn(s);return e||(t.equals=av),Ft!==null&&Ft.l!==null&&((n=Ft.l).s??(n.s=[])).push(t),t}function _v(s,e=!1){return yg(Tc(s,e))}function yg(s){return vt!==null&&vt.f&hs&&(Bi===null?Uv([s]):Bi.push(s)),s}function rn(s,e){return vt!==null&&Pd()&&vt.f&(hs|Ad)&&(Bi===null||!Bi.includes(s))&&gv(),Sg(s,e)}function Sg(s,e){return s.equals(e)||(s.v=e,s.version=Og(),Ag(s,Ns),Pd()&&rt!==null&&rt.f&Ln&&!(rt.f&Ci)&&(mn!==null&&mn.includes(s)?(zi(rt,Ns),bc(rt)):Ps===null?Ov([s]):Ps.push(s))),e}function Ag(s,e){var t=s.reactions;if(t!==null)for(var n=Pd(),i=t.length,r=0;r<i;r++){var o=t[r],a=o.f;a&Ns||!n&&o===rt||(zi(o,e),a&(Ln|Er)&&(a&hs?Ag(o,Ya):bc(o)))}}const vv=1,xv=2,yv=16,Sv=2,Av=1,Mv=2,On=Symbol();let Tv=!1;function si(s,e=null,t){if(typeof s!="object"||s===null||uo in s)return s;const n=mg(s);if(n!==nv&&n!==iv)return s;var i=new Map,r=yd(s),o=wn(0);r&&i.set("length",wn(s.length));var a;return new Proxy(s,{defineProperty(l,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&fv();var h=i.get(c);return h===void 0?(h=wn(u.value),i.set(c,h)):rn(h,si(u.value,a)),!0},deleteProperty(l,c){var u=i.get(c);if(u===void 0)c in l&&i.set(c,wn(On));else{if(r&&typeof c=="string"){var h=i.get("length"),d=Number(c);Number.isInteger(d)&&d<h.v&&rn(h,d)}rn(u,On),Hf(o)}return!0},get(l,c,u){var p;if(c===uo)return s;var h=i.get(c),d=c in l;if(h===void 0&&(!d||(p=lo(l,c))!=null&&p.writable)&&(h=wn(si(d?l[c]:On,a)),i.set(c,h)),h!==void 0){var f=et(h);return f===On?void 0:f}return Reflect.get(l,c,u)},getOwnPropertyDescriptor(l,c){var u=Reflect.getOwnPropertyDescriptor(l,c);if(u&&"value"in u){var h=i.get(c);h&&(u.value=et(h))}else if(u===void 0){var d=i.get(c),f=d==null?void 0:d.v;if(d!==void 0&&f!==On)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return u},has(l,c){var f;if(c===uo)return!0;var u=i.get(c),h=u!==void 0&&u.v!==On||Reflect.has(l,c);if(u!==void 0||rt!==null&&(!h||(f=lo(l,c))!=null&&f.writable)){u===void 0&&(u=wn(h?si(l[c],a):On),i.set(c,u));var d=et(u);if(d===On)return!1}return h},set(l,c,u,h){var v;var d=i.get(c),f=c in l;if(r&&c==="length")for(var p=u;p<d.v;p+=1){var _=i.get(p+"");_!==void 0?rn(_,On):p in l&&(_=wn(On),i.set(p+"",_))}d===void 0?(!f||(v=lo(l,c))!=null&&v.writable)&&(d=wn(void 0),rn(d,si(u,a)),i.set(c,d)):(f=d.v!==On,rn(d,si(u,a)));var m=Reflect.getOwnPropertyDescriptor(l,c);if(m!=null&&m.set&&m.set.call(h,u),!f){if(r&&typeof c=="string"){var g=i.get("length"),y=Number(c);Number.isInteger(y)&&y>=g.v&&rn(g,y+1)}Hf(o)}return!0},ownKeys(l){et(o);var c=Reflect.ownKeys(l).filter(d=>{var f=i.get(d);return f===void 0||f.v!==On});for(var[u,h]of i)h.v!==On&&!(u in l)&&c.push(u);return c},setPrototypeOf(){pv()}})}function Hf(s,e=1){rn(s,s.v+e)}var Vf,Mg,Tg;function Ev(){if(Vf===void 0){Vf=window;var s=Element.prototype,e=Node.prototype;Mg=lo(e,"firstChild").get,Tg=lo(e,"nextSibling").get,s.__click=void 0,s.__className="",s.__attributes=null,s.__styles=null,s.__e=void 0,Text.prototype.__t=void 0}}function Cv(s=""){return document.createTextNode(s)}function $l(s){return Mg.call(s)}function Ec(s){return Tg.call(s)}function bt(s,e){return $l(s)}function Td(s,e){{var t=$l(s);return t instanceof Comment&&t.data===""?Ec(t):t}}function Bt(s,e=1,t=!1){let n=s;for(;e--;)n=Ec(n);return n}function bv(s){s.textContent=""}function Ed(s){var e=hs|Ns;rt===null?e|=Er:rt.f|=_g;const t={children:null,ctx:Ft,deps:null,equals:vg,f:e,fn:s,reactions:null,v:null,version:0,parent:rt};if(vt!==null&&vt.f&hs){var n=vt;(n.children??(n.children=[])).push(t)}return t}function Eg(s){var e=s.children;if(e!==null){s.children=null;for(var t=0;t<e.length;t+=1){var n=e[t];n.f&hs?Cd(n):Cr(n)}}}function Cg(s){var e,t=rt;ks(s.parent);try{Eg(s),e=Ng(s)}finally{ks(t)}return e}function bg(s){var e=Cg(s),t=(Jr||s.f&Er)&&s.deps!==null?Ya:Ln;zi(s,t),s.equals(e)||(s.v=e,s.version=Og())}function Cd(s){Eg(s),Sa(s,0),zi(s,Qa),s.v=s.children=s.deps=s.ctx=s.reactions=null}function wg(s){rt===null&&vt===null&&uv(),vt!==null&&vt.f&Er&&cv(),Id&&lv()}function wv(s,e){var t=e.last;t===null?e.last=e.first=s:(t.next=s,s.prev=t,e.last=s)}function Oo(s,e,t,n=!0){var i=(s&qa)!==0,r=rt,o={ctx:Ft,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:s|Ns,first:null,fn:e,last:null,next:null,parent:i?null:r,prev:null,teardown:null,transitions:null,version:0};if(t){var a=ho;try{Gf(!0),Cc(o),o.f|=rv}catch(u){throw Cr(o),u}finally{Gf(a)}}else e!==null&&bc(o);var l=t&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&_g)===0;if(!l&&!i&&n&&(r!==null&&wv(o,r),vt!==null&&vt.f&hs)){var c=vt;(c.children??(c.children=[])).push(o)}return o}function Rv(s){const e=Oo(Xa,null,!1);return zi(e,Ln),e.teardown=s,e}function eh(s){wg();var e=rt!==null&&(rt.f&Ci)!==0&&Ft!==null&&!Ft.m;if(e){var t=Ft;(t.e??(t.e=[])).push({fn:s,effect:rt,reaction:vt})}else{var n=bd(s);return n}}function Iv(s){return wg(),Rg(s)}function Pv(s){const e=Oo(qa,s,!0);return()=>{Cr(e)}}function bd(s){return Oo(gg,s,!1)}function Rg(s){return Oo(Xa,s,!0)}function Jl(s){return wd(s)}function wd(s,e=0){return Oo(Xa|Ad|e,s,!0)}function ya(s,e=!0){return Oo(Xa|Ci,s,!0,e)}function Ig(s){var e=s.teardown;if(e!==null){const t=Id,n=vt;Wf(!0),So(null);try{e.call(null)}finally{Wf(t),So(n)}}}function Pg(s){var e=s.deriveds;if(e!==null){s.deriveds=null;for(var t=0;t<e.length;t+=1)Cd(e[t])}}function Dg(s,e=!1){var t=s.first;for(s.first=s.last=null;t!==null;){var n=t.next;Cr(t,e),t=n}}function Dv(s){for(var e=s.first;e!==null;){var t=e.next;e.f&Ci||Cr(e),e=t}}function Cr(s,e=!0){var t=!1;if((e||s.f&ov)&&s.nodes_start!==null){for(var n=s.nodes_start,i=s.nodes_end;n!==null;){var r=n===i?null:Ec(n);n.remove(),n=r}t=!0}Dg(s,e&&!t),Pg(s),Sa(s,0),zi(s,Qa);var o=s.transitions;if(o!==null)for(const l of o)l.stop();Ig(s);var a=s.parent;a!==null&&a.first!==null&&Fg(s),s.next=s.prev=s.teardown=s.ctx=s.deps=s.parent=s.fn=s.nodes_start=s.nodes_end=null}function Fg(s){var e=s.parent,t=s.prev,n=s.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===s&&(e.first=n),e.last===s&&(e.last=t))}function th(s,e){var t=[];Rd(s,t,!0),Lg(t,()=>{Cr(s),e&&e()})}function Lg(s,e){var t=s.length;if(t>0){var n=()=>--t||e();for(var i of s)i.out(n)}else e()}function Rd(s,e,t){if(!(s.f&Li)){if(s.f^=Li,s.transitions!==null)for(const o of s.transitions)(o.is_global||t)&&e.push(o);for(var n=s.first;n!==null;){var i=n.next,r=(n.f&Md)!==0||(n.f&Ci)!==0;Rd(n,e,r?t:!1),n=i}}}function ec(s){Bg(s,!0)}function Bg(s,e){if(s.f&Li){Ka(s)&&Cc(s),s.f^=Li;for(var t=s.first;t!==null;){var n=t.next,i=(t.f&Md)!==0||(t.f&Ci)!==0;Bg(t,i?e:!1),t=n}if(s.transitions!==null)for(const r of s.transitions)(r.is_global||e)&&r.in()}}let nh=!1,ih=[];function Fv(){nh=!1;const s=ih.slice();ih=[],Ju(s)}function Lv(s){nh||(nh=!0,queueMicrotask(Fv)),ih.push(s)}function Bv(s){throw new Error("lifecycle_outside_component")}let tc=!1,ho=!1,Id=!1;function Gf(s){ho=s}function Wf(s){Id=s}let sh=[],aa=0;let vt=null;function So(s){vt=s}let rt=null;function ks(s){rt=s}let Bi=null;function Uv(s){Bi=s}let mn=null,Hn=0,Ps=null;function Ov(s){Ps=s}let Ug=0,Jr=!1,Ft=null;function Og(){return++Ug}function Pd(){return Ft!==null&&Ft.l===null}function Ka(s){var o,a;var e=s.f;if(e&Ns)return!0;if(e&Ya){var t=s.deps,n=(e&Er)!==0;if(t!==null){var i;if(e&Zl){for(i=0;i<t.length;i++)((o=t[i]).reactions??(o.reactions=[])).push(s);s.f^=Zl}for(i=0;i<t.length;i++){var r=t[i];if(Ka(r)&&bg(r),n&&rt!==null&&!Jr&&!((a=r==null?void 0:r.reactions)!=null&&a.includes(s))&&(r.reactions??(r.reactions=[])).push(s),r.version>s.version)return!0}}n||zi(s,Ln)}return!1}function Nv(s,e,t){throw s}function Ng(s){var d;var e=mn,t=Hn,n=Ps,i=vt,r=Jr,o=Bi,a=Ft,l=s.f;mn=null,Hn=0,Ps=null,vt=l&(Ci|qa)?null:s,Jr=!ho&&(l&Er)!==0,Bi=null,Ft=s.ctx;try{var c=(0,s.fn)(),u=s.deps;if(mn!==null){var h;if(Sa(s,Hn),u!==null&&Hn>0)for(u.length=Hn+mn.length,h=0;h<mn.length;h++)u[Hn+h]=mn[h];else s.deps=u=mn;if(!Jr)for(h=Hn;h<u.length;h++)((d=u[h]).reactions??(d.reactions=[])).push(s)}else u!==null&&Hn<u.length&&(Sa(s,Hn),u.length=Hn);return c}finally{mn=e,Hn=t,Ps=n,vt=i,Jr=r,Bi=o,Ft=a}}function kv(s,e){let t=e.reactions;if(t!==null){var n=t.indexOf(s);if(n!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[n]=t[i],t.pop())}}t===null&&e.f&hs&&(mn===null||!mn.includes(e))&&(zi(e,Ya),e.f&(Er|Zl)||(e.f^=Zl),Sa(e,0))}function Sa(s,e){var t=s.deps;if(t!==null)for(var n=e;n<t.length;n++)kv(s,t[n])}function Cc(s){var e=s.f;if(!(e&Qa)){zi(s,Ln);var t=rt;rt=s;try{e&Ad?Dv(s):Dg(s),Pg(s),Ig(s);var n=Ng(s);s.teardown=typeof n=="function"?n:null,s.version=Ug}catch(i){Nv(i)}finally{rt=t}}}function zv(){aa>1e3&&(aa=0,hv()),aa++}function Hv(s){var e=s.length;if(e!==0){zv();var t=ho;ho=!0;try{for(var n=0;n<e;n++){var i=s[n];i.f&Ln||(i.f^=Ln);var r=[];kg(i,r),Vv(r)}}finally{ho=t}}}function Vv(s){var e=s.length;if(e!==0)for(var t=0;t<e;t++){var n=s[t];!(n.f&(Qa|Li))&&Ka(n)&&(Cc(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Fg(n):n.fn=null))}}function Gv(){if(tc=!1,aa>1001)return;const s=sh;sh=[],Hv(s),tc||(aa=0)}function bc(s){tc||(tc=!0,queueMicrotask(Gv));for(var e=s;e.parent!==null;){e=e.parent;var t=e.f;if(t&(qa|Ci)){if(!(t&Ln))return;e.f^=Ln}}sh.push(e)}function kg(s,e){var t=s.first,n=[];e:for(;t!==null;){var i=t.f,r=(i&Ci)!==0,o=r&&(i&Ln)!==0;if(!o&&!(i&Li))if(i&Xa){r?t.f^=Ln:Ka(t)&&Cc(t);var a=t.first;if(a!==null){t=a;continue}}else i&gg&&n.push(t);var l=t.next;if(l===null){let h=t.parent;for(;h!==null;){if(s===h)break e;var c=h.next;if(c!==null){t=c;continue e}h=h.parent}}t=l}for(var u=0;u<n.length;u++)a=n[u],e.push(a),kg(a,e)}function et(s){var a;var e=s.f,t=(e&hs)!==0;if(t&&e&Qa){var n=Cg(s);return Cd(s),n}if(vt!==null){Bi!==null&&Bi.includes(s)&&mv();var i=vt.deps;mn===null&&i!==null&&i[Hn]===s?Hn++:mn===null?mn=[s]:mn.push(s),Ps!==null&&rt!==null&&rt.f&Ln&&!(rt.f&Ci)&&Ps.includes(s)&&(zi(rt,Ns),bc(rt))}else if(t&&s.deps===null){var r=s,o=r.parent;o!==null&&!((a=o.deriveds)!=null&&a.includes(r))&&(o.deriveds??(o.deriveds=[])).push(r)}return t&&(r=s,Ka(r)&&bg(r)),s.v}function Rt(s){const e=vt;try{return vt=null,s()}finally{vt=e}}const Wv=~(Ns|Ya|Ln);function zi(s,e){s.f=s.f&Wv|e}function jn(s,e=!1,t){Ft={p:Ft,c:null,e:null,m:!1,s,x:null,l:null},e||(Ft.l={s:null,u:null,r1:[],r2:wn(!1)})}function Zn(s){const e=Ft;if(e!==null){const o=e.e;if(o!==null){var t=rt,n=vt;e.e=null;try{for(var i=0;i<o.length;i++){var r=o[i];ks(r.effect),So(r.reaction),bd(r.fn)}}finally{ks(t),So(n)}}Ft=e.p,e.m=!0}return{}}function Xv(s){if(!(typeof s!="object"||!s||s instanceof EventTarget)){if(uo in s)rh(s);else if(!Array.isArray(s))for(let e in s){const t=s[e];typeof t=="object"&&t&&uo in t&&rh(t)}}}function rh(s,e=new Set){if(typeof s=="object"&&s!==null&&!(s instanceof EventTarget)&&!e.has(s)){e.add(s),s instanceof Date&&s.getTime();for(let n in s)try{rh(s[n],e)}catch{}const t=mg(s);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=tv(t);for(let i in n){const r=n[i].get;if(r)try{r.call(s)}catch{}}}}}const zg=new Set,oh=new Set;function Hg(s){for(var e=0;e<s.length;e++)zg.add(s[e]);for(var t of oh)t(s)}function el(s){var y;var e=this,t=e.ownerDocument,n=s.type,i=((y=s.composedPath)==null?void 0:y.call(s))||[],r=i[0]||s.target,o=0,a=s.__root;if(a){var l=i.indexOf(a);if(l!==-1&&(e===document||e===window)){s.__root=e;return}var c=i.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(r=i[o]||s.target,r!==e){ev(s,"currentTarget",{configurable:!0,get(){return r||t}});var u=vt,h=rt;So(null),ks(null);try{for(var d,f=[];r!==null;){var p=r.assignedSlot||r.parentNode||r.host||null;try{var _=r["__"+n];if(_!==void 0&&!r.disabled)if(yd(_)){var[m,...g]=_;m.apply(r,[s,...g])}else _.call(r,s)}catch(v){d?f.push(v):d=v}if(s.cancelBubble||p===e||p===null)break;r=p}if(d){for(let v of f)queueMicrotask(()=>{throw v});throw d}}finally{s.__root=e,delete s.currentTarget,So(u),ks(h)}}}function qv(s){var e=document.createElement("template");return e.innerHTML=s,e.content}function Xf(s,e){var t=rt;t.nodes_start===null&&(t.nodes_start=s,t.nodes_end=e)}function pi(s,e){var t=(e&Av)!==0,n=(e&Mv)!==0,i,r=!s.startsWith("<!>");return()=>{i===void 0&&(i=qv(r?s:"<!>"+s),t||(i=$l(i)));var o=n?document.importNode(i,!0):i.cloneNode(!0);if(t){var a=$l(o),l=o.lastChild;Xf(a,l)}else Xf(o,o);return o}}function hi(s,e){s!==null&&s.before(e)}const Yv=["touchstart","touchmove"];function Qv(s){return Yv.includes(s)}function nc(s,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(s.__t??(s.__t=s.nodeValue))&&(s.__t=t,s.nodeValue=t==null?"":t+"")}function Kv(s,e){return jv(s,e)}const Rr=new Map;function jv(s,{target:e,anchor:t,props:n={},events:i,context:r,intro:o=!0}){Ev();var a=new Set,l=h=>{for(var d=0;d<h.length;d++){var f=h[d];if(!a.has(f)){a.add(f);var p=Qv(f);e.addEventListener(f,el,{passive:p});var _=Rr.get(f);_===void 0?(document.addEventListener(f,el,{passive:p}),Rr.set(f,1)):Rr.set(f,_+1)}}};l(Sd(zg)),oh.add(l);var c=void 0,u=Pv(()=>{var h=t??e.appendChild(Cv());return ya(()=>{if(r){jn({});var d=Ft;d.c=r}i&&(n.$$events=i),c=s(h,n)||{},r&&Zn()}),()=>{var p;for(var d of a){e.removeEventListener(d,el);var f=Rr.get(d);--f===0?(document.removeEventListener(d,el),Rr.delete(d)):Rr.set(d,f)}oh.delete(l),qf.delete(c),h!==t&&((p=h.parentNode)==null||p.removeChild(h))}});return qf.set(c,u),c}let qf=new WeakMap;function Vg(s,e,t,n=null,i=!1){var r=s,o=null,a=null,l=null,c=i?Md:0;wd(()=>{l!==(l=!!e())&&(l?(o?ec(o):o=ya(()=>t(r)),a&&th(a,()=>{a=null})):(a?ec(a):n&&(a=ya(()=>n(r))),o&&th(o,()=>{o=null})))},c)}let Wc=null;function Yf(s,e){return e}function Zv(s,e,t,n){for(var i=[],r=e.length,o=0;o<r;o++)Rd(e[o].e,i,!0);var a=r>0&&i.length===0&&t!==null;if(a){var l=t.parentNode;bv(l),l.append(t),n.clear(),Es(s,e[0].prev,e[r-1].next)}Lg(i,()=>{for(var c=0;c<r;c++){var u=e[c];a||(n.delete(u.k),Es(s,u.prev,u.next)),Cr(u.e,!a)}})}function Qf(s,e,t,n,i,r=null){var o=s,a={flags:e,items:new Map,first:null},l=null,c=!1;wd(()=>{var u=t(),h=yd(u)?u:u==null?[]:Sd(u),d=h.length;if(!(c&&d===0)){c=d===0;{var f=vt;$v(h,a,o,i,e,(f.f&Li)!==0,n)}r!==null&&(d===0?l?ec(l):l=ya(()=>r(o)):l!==null&&th(l,()=>{l=null})),t()}})}function $v(s,e,t,n,i,r,o){var a=s.length,l=e.items,c=e.first,u=c,h,d=null,f=[],p=[],_,m,g,y;for(y=0;y<a;y+=1){if(_=s[y],m=o(_,y),g=l.get(m),g===void 0){var v=u?u.e.nodes_start:t;d=ex(v,e,d,d===null?e.first:d.next,_,m,y,n,i),l.set(m,d),f=[],p=[],u=d.next;continue}if(Jv(g,_,y),g.e.f&Li&&ec(g.e),g!==u){if(h!==void 0&&h.has(g)){if(f.length<p.length){var x=p[0],E;d=x.prev;var T=f[0],A=f[f.length-1];for(E=0;E<f.length;E+=1)Kf(f[E],x,t);for(E=0;E<p.length;E+=1)h.delete(p[E]);Es(e,T.prev,A.next),Es(e,d,T),Es(e,A,x),u=x,d=A,y-=1,f=[],p=[]}else h.delete(g),Kf(g,u,t),Es(e,g.prev,g.next),Es(e,g,d===null?e.first:d.next),Es(e,d,g),d=g;continue}for(f=[],p=[];u!==null&&u.k!==m;)(r||!(u.e.f&Li))&&(h??(h=new Set)).add(u),p.push(u),u=u.next;if(u===null)continue;g=u}f.push(g),d=g,u=g.next}if(u!==null||h!==void 0){for(var C=h===void 0?[]:Sd(h);u!==null;)(r||!(u.e.f&Li))&&C.push(u),u=u.next;var S=C.length;if(S>0){var M=null;Zv(e,C,M,l)}}rt.first=e.first&&e.first.e,rt.last=d&&d.e}function Jv(s,e,t,n){Sg(s.v,e),s.i=t}function ex(s,e,t,n,i,r,o,a,l){var c=Wc;try{var u=(l&vv)!==0,h=(l&yv)===0,d=u?h?Tc(i):wn(i):i,f=l&xv?wn(o):o,p={i:f,v:d,k:r,a:null,e:null,prev:t,next:n};return Wc=p,p.e=ya(()=>a(s,d,f),Tv),p.e.prev=t&&t.e,p.e.next=n&&n.e,t===null?e.first=p:(t.next=p,t.e.next=p.e),n!==null&&(n.prev=p,n.e.prev=p.e),p}finally{Wc=c}}function Kf(s,e,t){for(var n=s.next?s.next.e.nodes_start:t,i=e?e.e.nodes_start:t,r=s.e.nodes_start;r!==n;){var o=Ec(r);i.before(r),r=o}}function Es(s,e,t){e===null?s.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function jf(s,e){return s===e||(s==null?void 0:s[uo])===e}function Gg(s={},e,t,n){return bd(()=>{var i,r;return Rg(()=>{i=r,r=[],Rt(()=>{s!==t(...r)&&(e(s,...r),i&&jf(t(...i),s)&&e(null,...i))})}),()=>{Lv(()=>{r&&jf(t(...r),s)&&e(null,...r)})}}),s}function Wg(s=!1){const e=Ft,t=e.l.u;if(!t)return;let n=()=>Xv(e.s);if(s){let i=0,r={};const o=Ed(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==r[c]&&(r[c]=l[c],a=!0);return a&&i++,i});n=()=>et(o)}t.b.length&&Iv(()=>{Zf(e,n),Ju(t.b)}),eh(()=>{const i=Rt(()=>t.m.map(sv));return()=>{for(const r of i)typeof r=="function"&&r()}}),t.a.length&&eh(()=>{Zf(e,n),Ju(t.a)})}function Zf(s,e){if(s.l.s)for(const t of s.l.s)et(t);e()}function tx(s){var e=wn(0);return function(){return arguments.length===1?(rn(e,et(e)+1),arguments[0]):(et(e),s())}}function nx(s,e,t){if(s==null)return e(void 0),co;const n=Rt(()=>s.subscribe(e,t));return n.unsubscribe?()=>n.unsubscribe():n}function kt(s,e,t){const n=t[e]??(t[e]={store:null,source:Tc(void 0),unsubscribe:co});if(n.store!==s)if(n.unsubscribe(),n.store=s??null,s==null)n.source.v=void 0,n.unsubscribe=co;else{var i=!0;n.unsubscribe=nx(s,r=>{i?n.source.v=r:rn(n.source,r)}),i=!1}return et(n.source)}function cs(s,e){return s.set(e),e}function Hi(){const s={};return Rv(()=>{for(var e in s)s[e].unsubscribe()}),s}function ts(s,e,t){return s.set(t),e}function ix(s){for(var e=rt,t=rt;e!==null&&!(e.f&(Ci|qa));)e=e.parent;try{return ks(e),s()}finally{ks(t)}}function sx(s,e,t,n){var y;var i=(t&Sv)!==0,r=!1,o;o=s[e];var a=(y=lo(s,e))==null?void 0:y.set,l=n,c=!0,u=!1,h=()=>(u=!0,c&&(c=!1,l=n),l);o===void 0&&n!==void 0&&(a&&i&&dv(),o=h(),a&&a(o));var d;if(d=()=>{var v=s[e];return v===void 0?h():(c=!0,u=!1,v)},a){var f=s.$$legacy;return function(v,x){return arguments.length>0?((!x||f||r)&&a(x?d():v),v):d()}}var p=!1,_=!1,m=Tc(o),g=ix(()=>Ed(()=>{var v=d(),x=et(m);return p?(p=!1,_=!0,x):(_=!1,m.v=v)}));return function(v,x){if(arguments.length>0){const E=x?et(g):v;return g.equals(E)||(p=!0,rn(m,E),u&&l!==void 0&&(l=E),Rt(()=>et(g))),v}return et(g)}}function Vi(s){Ft===null&&Bv(),Ft.l!==null?rx(Ft).m.push(s):eh(()=>{const e=Rt(s);if(typeof e=="function")return e})}function rx(s){var e=s.l;return e.u??(e.u={a:[],b:[],m:[]})}const ox="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ox);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dd="170",ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ax=0,$f=1,lx=2,Xg=1,cx=2,$i=3,Oi=0,Rn=1,ri=2,Ds=0,Fs=1,Jf=2,ep=3,tp=4,qg=5,or=100,ux=101,hx=102,dx=103,fx=104,px=200,mx=201,gx=202,_x=203,Aa=204,Ma=205,vx=206,xx=207,yx=208,Sx=209,Ax=210,Mx=211,Tx=212,Ex=213,Cx=214,ah=0,lh=1,ch=2,Ao=3,uh=4,hh=5,dh=6,fh=7,wc=0,bx=1,wx=2,Ls=0,Rx=1,Ix=2,Px=3,Dx=4,Fx=5,Lx=6,Bx=7,np="attached",Ux="detached",Yg=300,Mo=301,To=302,ic=303,ph=304,Rc=306,Ta=1e3,as=1001,mh=1002,qn=1003,Ox=1004,tl=1005,Pi=1006,Xc=1007,hr=1008,Ni=1009,Qg=1010,Kg=1011,Ea=1012,Fd=1013,ai=1014,li=1015,No=1016,Ld=1017,Bd=1018,Eo=1020,jg=35902,Zg=1021,$g=1022,vn=1023,Jg=1024,e0=1025,gr=1026,Co=1027,t0=1028,Ic=1029,Ud=1030,Od=1031,fo=1033,Nl=33776,kl=33777,zl=33778,Hl=33779,gh=35840,_h=35841,vh=35842,xh=35843,yh=36196,Sh=37492,Ah=37496,Mh=37808,Th=37809,Eh=37810,Ch=37811,bh=37812,wh=37813,Rh=37814,Ih=37815,Ph=37816,Dh=37817,Fh=37818,Lh=37819,Bh=37820,Uh=37821,Vl=36492,Oh=36494,Nh=36495,n0=36283,kh=36284,zh=36285,Hh=36286,sc=2300,Vh=2301,qc=2302,ip=2400,sp=2401,rp=2402,Nx=2500,kx=3200,zx=3201,Pc=0,Hx=1,bs="",Tt="srgb",ko="srgb-linear",Dc="linear",pt="srgb",Ir=7680,op=519,Vx=512,Gx=513,Wx=514,i0=515,Xx=516,qx=517,Yx=518,Qx=519,ap=35044,Kx=35048,lp="300 es",ls=2e3,rc=2001;class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cp=1234567;const la=Math.PI/180,bo=180/Math.PI;function Xs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[s&255]+un[s>>8&255]+un[s>>16&255]+un[s>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function Qt(s,e,t){return Math.max(e,Math.min(t,s))}function Nd(s,e){return(s%e+e)%e}function jx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Zx(s,e,t){return s!==e?(t-s)/(e-s):0}function ca(s,e,t){return(1-t)*s+t*e}function $x(s,e,t,n){return ca(s,e,1-Math.exp(-t*n))}function Jx(s,e=1){return e-Math.abs(Nd(s,e*2)-e)}function ey(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ty(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ny(s,e){return s+Math.floor(Math.random()*(e-s+1))}function iy(s,e){return s+Math.random()*(e-s)}function sy(s){return s*(.5-Math.random())}function ry(s){s!==void 0&&(cp=s);let e=cp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oy(s){return s*la}function ay(s){return s*bo}function ly(s){return(s&s-1)===0&&s!==0}function cy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function uy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hy(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const qt={DEG2RAD:la,RAD2DEG:bo,generateUUID:Xs,clamp:Qt,euclideanModulo:Nd,mapLinear:jx,inverseLerp:Zx,lerp:ca,damp:$x,pingpong:Jx,smoothstep:ey,smootherstep:ty,randInt:ny,randFloat:iy,randFloatSpread:sy,seededRandom:ry,degToRad:oy,radToDeg:ay,isPowerOfTwo:ly,ceilPowerOfTwo:cy,floorPowerOfTwo:uy,setQuaternionFromProperEuler:hy,normalize:An,denormalize:Zr};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,i,r,o,a,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],y=i[1],v=i[4],x=i[7],E=i[2],T=i[5],A=i[8];return r[0]=o*_+a*y+l*E,r[3]=o*m+a*v+l*T,r[6]=o*g+a*x+l*A,r[1]=c*_+u*y+h*E,r[4]=c*m+u*v+h*T,r[7]=c*g+u*x+h*A,r[2]=d*_+f*y+p*E,r[5]=d*m+f*v+p*T,r[8]=d*g+f*x+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=t*h+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yc.makeScale(e,t)),this}rotate(e){return this.premultiply(Yc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yc=new Ue;function s0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ca(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dy(){const s=Ca("canvas");return s.style.display="block",s}const up={};function ia(s){s in up||(up[s]=!0,console.warn(s))}function fy(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function py(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function my(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(s.r=po(s.r),s.g=po(s.g),s.b=po(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bs?Dc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function us(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function po(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const hp=[.64,.33,.3,.6,.15,.06],dp=[.2126,.7152,.0722],fp=[.3127,.329],pp=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mp=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[ko]:{primaries:hp,whitePoint:fp,transfer:Dc,toXYZ:pp,fromXYZ:mp,luminanceCoefficients:dp,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:hp,whitePoint:fp,transfer:pt,toXYZ:pp,fromXYZ:mp,luminanceCoefficients:dp,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}});let Pr;class gy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pr===void 0&&(Pr=Ca("canvas")),Pr.width=e.width,Pr.height=e.height;const n=Pr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ca("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=us(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(us(t[n]/255)*255):t[n]=us(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _y=0;class r0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Xs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Qc(i[o].image)):r.push(Qc(i[o]))}else r=Qc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Qc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vy=0;class ln extends Ws{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=as,i=as,r=Pi,o=hr,a=vn,l=Ni,c=ln.DEFAULT_ANISOTROPY,u=bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Xs(),this.name="",this.source=new r0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ta:e.x=e.x-Math.floor(e.x);break;case as:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ta:e.y=e.y-Math.floor(e.y);break;case as:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Yg;ln.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,i=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(f+1)/2,E=(g+1)/2,T=(u+d)/4,A=(h+_)/4,C=(p+m)/4;return v>x&&v>E?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=A/n):x>E?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=T/i,r=C/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=A/r,i=C/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xy extends Ws{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ln(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new r0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zs extends xy{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class o0 extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yy extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class st{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==p){let m=1-a;const g=l*d+c*f+u*p+h*_,y=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const E=Math.sqrt(v),T=Math.atan2(E,g*y);m=Math.sin(m*T)/E,a=Math.sin(a*T)/E}const x=a*y;if(l=l*m+d*x,c=c*m+f*x,u=u*m+p*x,h=h*m+_*x,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kc=new I,gp=new st;class Ti{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(r,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nl.copy(n.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),il.subVectors(this.max,Qo),Dr.subVectors(e.a,Qo),Fr.subVectors(e.b,Qo),Lr.subVectors(e.c,Qo),_s.subVectors(Fr,Dr),vs.subVectors(Lr,Fr),js.subVectors(Dr,Lr);let t=[0,-_s.z,_s.y,0,-vs.z,vs.y,0,-js.z,js.y,_s.z,0,-_s.x,vs.z,0,-vs.x,js.z,0,-js.x,-_s.y,_s.x,0,-vs.y,vs.x,0,-js.y,js.x,0];return!jc(t,Dr,Fr,Lr,il)||(t=[1,0,0,0,1,0,0,0,1],!jc(t,Dr,Fr,Lr,il))?!1:(sl.crossVectors(_s,vs),t=[sl.x,sl.y,sl.z],jc(t,Dr,Fr,Lr,il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qi=[new I,new I,new I,new I,new I,new I,new I,new I],_i=new I,nl=new Ti,Dr=new I,Fr=new I,Lr=new I,_s=new I,vs=new I,js=new I,Qo=new I,il=new I,sl=new I,Zs=new I;function jc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Zs.fromArray(s,r);const a=i.x*Math.abs(Zs.x)+i.y*Math.abs(Zs.y)+i.z*Math.abs(Zs.z),l=e.dot(Zs),c=t.dot(Zs),u=n.dot(Zs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Sy=new Ti,Ko=new I,Zc=new I;class zo{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sy.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const t=Ko.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ko,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(Zc)),this.expandByPoint(Ko.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new I,$c=new I,rl=new I,xs=new I,Jc=new I,ol=new I,eu=new I;let Ho=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$c.copy(e).add(t).multiplyScalar(.5),rl.copy(t).sub(e).normalize(),xs.copy(this.origin).sub($c);const r=e.distanceTo(t)*.5,o=-this.direction.dot(rl),a=xs.dot(this.direction),l=-xs.dot(rl),c=xs.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy($c).addScaledVector(rl,d),f}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);const n=Yi.dot(this.direction),i=Yi.dot(Yi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,n,i,r){Jc.subVectors(t,e),ol.subVectors(n,e),eu.crossVectors(Jc,ol);let o=this.direction.dot(eu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xs.subVectors(this.origin,e);const l=a*this.direction.dot(ol.crossVectors(xs,ol));if(l<0)return null;const c=a*this.direction.dot(Jc.cross(xs));if(c<0||l+c>o)return null;const u=-a*xs.dot(eu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ue{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,p,_,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,p,_,m)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Br.setFromMatrixColumn(e,0).length(),r=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ay,e,My)}lookAt(e,t,n){const i=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),ys.crossVectors(n,Nn),ys.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),ys.crossVectors(n,Nn)),ys.normalize(),al.crossVectors(Nn,ys),i[0]=ys.x,i[4]=al.x,i[8]=Nn.x,i[1]=ys.y,i[5]=al.y,i[9]=Nn.y,i[2]=ys.z,i[6]=al.z,i[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],y=n[3],v=n[7],x=n[11],E=n[15],T=i[0],A=i[4],C=i[8],S=i[12],M=i[1],w=i[5],L=i[9],P=i[13],F=i[2],B=i[6],O=i[10],H=i[14],N=i[3],j=i[7],ie=i[11],ae=i[15];return r[0]=o*T+a*M+l*F+c*N,r[4]=o*A+a*w+l*B+c*j,r[8]=o*C+a*L+l*O+c*ie,r[12]=o*S+a*P+l*H+c*ae,r[1]=u*T+h*M+d*F+f*N,r[5]=u*A+h*w+d*B+f*j,r[9]=u*C+h*L+d*O+f*ie,r[13]=u*S+h*P+d*H+f*ae,r[2]=p*T+_*M+m*F+g*N,r[6]=p*A+_*w+m*B+g*j,r[10]=p*C+_*L+m*O+g*ie,r[14]=p*S+_*P+m*H+g*ae,r[3]=y*T+v*M+x*F+E*N,r[7]=y*A+v*w+x*B+E*j,r[11]=y*C+v*L+x*O+E*ie,r[15]=y*S+v*P+x*H+E*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15];return p*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+g*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],y=h*m*c-_*d*c+_*l*f-a*m*f-h*l*g+a*d*g,v=p*d*c-u*m*c-p*l*f+o*m*f+u*l*g-o*d*g,x=u*_*c-p*h*c+p*a*f-o*_*f-u*a*g+o*h*g,E=p*h*l-u*_*l-p*a*d+o*_*d+u*a*m-o*h*m,T=t*y+n*v+i*x+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=y*A,e[1]=(_*d*r-h*m*r-_*i*f+n*m*f+h*i*g-n*d*g)*A,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*g+n*l*g)*A,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*A,e[4]=v*A,e[5]=(u*m*r-p*d*r+p*i*f-t*m*f-u*i*g+t*d*g)*A,e[6]=(p*l*r-o*m*r-p*i*c+t*m*c+o*i*g-t*l*g)*A,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*f+t*l*f)*A,e[8]=x*A,e[9]=(p*h*r-u*_*r-p*n*f+t*_*f+u*n*g-t*h*g)*A,e[10]=(o*_*r-p*a*r+p*n*c-t*_*c-o*n*g+t*a*g)*A,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*A,e[12]=E*A,e[13]=(u*_*i-p*h*i+p*n*d-t*_*d-u*n*m+t*h*m)*A,e[14]=(p*a*i-o*_*i-p*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,_=o*u,m=o*h,g=a*h,y=l*c,v=l*u,x=l*h,E=n.x,T=n.y,A=n.z;return i[0]=(1-(_+g))*E,i[1]=(f+x)*E,i[2]=(p-v)*E,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(d+g))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(p+v)*A,i[9]=(m-y)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Br.set(i[0],i[1],i[2]).length();const o=Br.set(i[4],i[5],i[6]).length(),a=Br.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],vi.copy(this);const c=1/r,u=1/o,h=1/a;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=h,vi.elements[9]*=h,vi.elements[10]*=h,t.setFromRotationMatrix(vi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ls){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,p;if(a===ls)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===rc)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ls){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*c,f=(n+i)*u;let p,_;if(a===ls)p=(o+r)*h,_=-2*h;else if(a===rc)p=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Br=new I,vi=new ue,Ay=new I(0,0,0),My=new I(1,1,1),ys=new I,al=new I,Nn=new I,_p=new ue,vp=new st;class Jt{constructor(e=0,t=0,n=0,i=Jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _p.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_p,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vp.setFromEuler(this),this.setFromQuaternion(vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jt.DEFAULT_ORDER="XYZ";class kd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ty=0;const xp=new I,Ur=new st,Qi=new ue,ll=new I,jo=new I,Ey=new I,Cy=new st,yp=new I(1,0,0),Sp=new I(0,1,0),Ap=new I(0,0,1),Mp={type:"added"},by={type:"removed"},Or={type:"childadded",child:null},tu={type:"childremoved",child:null};class ht extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new I,t=new Jt,n=new st,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ue}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(yp,e)}rotateY(e){return this.rotateOnAxis(Sp,e)}rotateZ(e){return this.rotateOnAxis(Ap,e)}translateOnAxis(e,t){return xp.copy(e).applyQuaternion(this.quaternion),this.position.add(xp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yp,e)}translateY(e){return this.translateOnAxis(Sp,e)}translateZ(e){return this.translateOnAxis(Ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ll.copy(e):ll.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(jo,ll,this.up):Qi.lookAt(ll,jo,this.up),this.quaternion.setFromRotationMatrix(Qi),i&&(Qi.extractRotation(i.matrixWorld),Ur.setFromRotationMatrix(Qi),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mp),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(by),tu.child=e,this.dispatchEvent(tu),tu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mp),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,Ey),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,Cy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DEFAULT_UP=new I(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new I,Ki=new I,nu=new I,ji=new I,Nr=new I,kr=new I,Tp=new I,iu=new I,su=new I,ru=new I,ou=new Ze,au=new Ze,lu=new Ze;class Mi{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){xi.subVectors(i,t),Ki.subVectors(n,t),nu.subVectors(e,t);const o=xi.dot(xi),a=xi.dot(Ki),l=xi.dot(nu),c=Ki.dot(Ki),u=Ki.dot(nu),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ji.x),l.addScaledVector(o,ji.y),l.addScaledVector(a,ji.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return ou.setScalar(0),au.setScalar(0),lu.setScalar(0),ou.fromBufferAttribute(e,t),au.fromBufferAttribute(e,n),lu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ou,r.x),o.addScaledVector(au,r.y),o.addScaledVector(lu,r.z),o}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),Ki.subVectors(e,t),xi.cross(Ki).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),xi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Mi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Nr.subVectors(i,n),kr.subVectors(r,n),iu.subVectors(e,n);const l=Nr.dot(iu),c=kr.dot(iu);if(l<=0&&c<=0)return t.copy(n);su.subVectors(e,i);const u=Nr.dot(su),h=kr.dot(su);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Nr,o);ru.subVectors(e,r);const f=Nr.dot(ru),p=kr.dot(ru);if(p>=0&&f<=p)return t.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(kr,a);const m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return Tp.subVectors(r,i),a=(h-u)/(h-u+(f-p)),t.copy(i).addScaledVector(Tp,a);const g=1/(m+_+d);return o=_*g,a=d*g,t.copy(n).addScaledVector(Nr,o).addScaledVector(kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const a0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},cl={h:0,s:0,l:0};function cu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=Nd(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=cu(o,r,e+1/3),this.g=cu(o,r,e),this.b=cu(o,r,e-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=a0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Ye.fromWorkingColorSpace(hn.copy(this),e),Math.round(Qt(hn.r*255,0,255))*65536+Math.round(Qt(hn.g*255,0,255))*256+Math.round(Qt(hn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(hn.copy(this),t);const n=hn.r,i=hn.g,r=hn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Tt){Ye.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,i=hn.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+t,Ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ss),e.getHSL(cl);const n=ca(Ss.h,cl.h,t),i=ca(Ss.s,cl.s,t),r=ca(Ss.l,cl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Ne;Ne.NAMES=a0;let wy=0;class qs extends Ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Xs(),this.name="",this.blending=Fs,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=Ma,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Aa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ma&&(n.blendDst=this.blendDst),this.blendEquation!==or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==op&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hs extends qs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const os=Ry();function Ry(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Iy(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Qt(s,-65504,65504),os.floatView[0]=s;const e=os.uint32View[0],t=e>>23&511;return os.baseTable[t]+((e&8388607)>>os.shiftTable[t])}function Py(s){const e=s>>10;return os.uint32View[0]=os.mantissaTable[os.offsetTable[e]+(s&1023)]+os.exponentTable[e],os.floatView[0]}const ba={toHalfFloat:Iy,fromHalfFloat:Py},Ht=new I,ul=new he;class di{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ap,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ul.fromBufferAttribute(this,t),ul.applyMatrix3(e),this.setXY(t,ul.x,ul.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array),i=An(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array),i=An(i,this.array),r=An(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ap&&(e.usage=this.usage),e}}class zd extends di{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class l0 extends di{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends di{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dy=0;const Jn=new ue,uu=new ht,zr=new I,kn=new Ti,Zo=new Ti,$t=new I;class xn extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s0(e)?l0:zd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return uu.lookAt(e),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Zo.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(kn.min,Zo.min),kn.expandByPoint($t),$t.addVectors(kn.max,Zo.max),kn.expandByPoint($t)):(kn.expandByPoint(Zo.min),kn.expandByPoint(Zo.max))}kn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared($t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$t.fromBufferAttribute(a,c),l&&(zr.fromBufferAttribute(e,c),$t.add(zr)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new I,l[C]=new I;const c=new I,u=new I,h=new I,d=new he,f=new he,p=new he,_=new I,m=new I;function g(C,S,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),p.sub(d);const w=1/(f.x*p.y-p.x*f.y);isFinite(w)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(w),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(w),a[C].add(_),a[S].add(_),a[M].add(_),l[C].add(m),l[S].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,S=y.length;C<S;++C){const M=y[C],w=M.start,L=M.count;for(let P=w,F=w+L;P<F;P+=3)g(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const v=new I,x=new I,E=new I,T=new I;function A(C){E.fromBufferAttribute(i,C),T.copy(E);const S=a[C];v.copy(S),v.sub(E.multiplyScalar(E.dot(S))).normalize(),x.crossVectors(T,S);const w=x.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,w)}for(let C=0,S=y.length;C<S;++C){const M=y[C],w=M.start,L=M.count;for(let P=w,F=w+L;P<F;P+=3)A(e.getX(P+0)),A(e.getX(P+1)),A(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new di(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let g=0;g<u;g++)d[p++]=c[f++]}return new di(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ep=new ue,$s=new Ho,hl=new zo,Cp=new I,dl=new I,fl=new I,pl=new I,hu=new I,ml=new I,bp=new I,gl=new I;class yt extends ht{constructor(e=new xn,t=new Hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ml.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(hu.fromBufferAttribute(h,e),o?ml.addScaledVector(hu,u):ml.addScaledVector(hu.sub(t),u))}t.add(ml)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(r),$s.copy(e.ray).recast(e.near),!(hl.containsPoint($s.origin)===!1&&($s.intersectSphere(hl,Cp)===null||$s.origin.distanceToSquared(Cp)>(e.far-e.near)**2))&&(Ep.copy(r).invert(),$s.copy(e.ray).applyMatrix4(Ep),!(n.boundingBox!==null&&$s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$s)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,E=v;x<E;x+=3){const T=a.getX(x),A=a.getX(x+1),C=a.getX(x+2);i=_l(this,g,e,n,c,u,h,T,A,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);i=_l(this,o,e,n,c,u,h,y,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,E=v;x<E;x+=3){const T=x,A=x+1,C=x+2;i=_l(this,g,e,n,c,u,h,T,A,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const y=m,v=m+1,x=m+2;i=_l(this,o,e,n,c,u,h,y,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Fy(s,e,t,n,i,r,o,a){let l;if(e.side===Rn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Oi,a),l===null)return null;gl.copy(a),gl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(gl);return c<t.near||c>t.far?null:{distance:c,point:gl.clone(),object:s}}function _l(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,dl),s.getVertexPosition(l,fl),s.getVertexPosition(c,pl);const u=Fy(s,e,t,n,dl,fl,pl,bp);if(u){const h=new I;Mi.getBarycoord(bp,dl,fl,pl,h),i&&(u.uv=Mi.getInterpolatedAttribute(i,a,l,c,h,new he)),r&&(u.uv1=Mi.getInterpolatedAttribute(r,a,l,c,h,new he)),o&&(u.normal=Mi.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};Mi.getNormal(dl,fl,pl,d.normal),u.face=d,u.barycoord=h}return u}class Ys extends xn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2));function p(_,m,g,y,v,x,E,T,A,C,S){const M=x/A,w=E/C,L=x/2,P=E/2,F=T/2,B=A+1,O=C+1;let H=0,N=0;const j=new I;for(let ie=0;ie<O;ie++){const ae=ie*w-P;for(let fe=0;fe<B;fe++){const Se=fe*M-L;j[_]=Se*y,j[m]=ae*v,j[g]=F,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[g]=T>0?1:-1,u.push(j.x,j.y,j.z),h.push(fe/A),h.push(1-ie/C),H+=1}}for(let ie=0;ie<C;ie++)for(let ae=0;ae<A;ae++){const fe=d+ae+B*ie,Se=d+ae+B*(ie+1),W=d+(ae+1)+B*(ie+1),K=d+(ae+1)+B*ie;l.push(fe,Se,K),l.push(Se,W,K),N+=6}a.addGroup(f,N,S),f+=N,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mn(s){const e={};for(let t=0;t<s.length;t++){const n=wo(s[t]);for(const i in n)e[i]=n[i]}return e}function Ly(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function c0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const By={clone:wo,merge:Mn};var Uy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends qs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uy,this.fragmentShader=Oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=Ly(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class u0 extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=ls}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const As=new I,wp=new he,Rp=new he;class gn extends u0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(As.x,As.y).multiplyScalar(-e/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(As.x,As.y).multiplyScalar(-e/As.z)}getViewSize(e,t){return this.getViewBounds(e,wp,Rp),t.subVectors(Rp,wp)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(la*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hr=-90,Vr=1;class Ny extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new gn(Hr,Vr,e,t);i.layers=this.layers,this.add(i);const r=new gn(Hr,Vr,e,t);r.layers=this.layers,this.add(r);const o=new gn(Hr,Vr,e,t);o.layers=this.layers,this.add(o);const a=new gn(Hr,Vr,e,t);a.layers=this.layers,this.add(a);const l=new gn(Hr,Vr,e,t);l.layers=this.layers,this.add(l);const c=new gn(Hr,Vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ls)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class h0 extends ln{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Mo,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ky extends zs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new h0(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ys(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:wo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:Ds});r.uniforms.tEquirect.value=t;const o=new yt(i,r),a=t.minFilter;return t.minFilter===hr&&(t.minFilter=Pi),new Ny(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const du=new I,zy=new I,Hy=new Ue;class ns{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=du.subVectors(n,t).cross(zy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(du),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hy.getNormalMatrix(e),i=this.coplanarPoint(du).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Js=new zo,vl=new I;class Hd{constructor(e=new ns,t=new ns,n=new ns,i=new ns,r=new ns,o=new ns){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ls){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],p=i[9],_=i[10],m=i[11],g=i[12],y=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,m-f,x-g).normalize(),n[1].setComponents(l+r,d+c,m+f,x+g).normalize(),n[2].setComponents(l+o,d+u,m+p,x+y).normalize(),n[3].setComponents(l-o,d-u,m-p,x-y).normalize(),n[4].setComponents(l-a,d-h,m-_,x-v).normalize(),t===ls)n[5].setComponents(l+a,d+h,m+_,x+v).normalize();else if(t===rc)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){return Js.center.set(0,0,0),Js.radius=.7071067811865476,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vl.x=i.normal.x>0?e.max.x:e.min.x,vl.y=i.normal.y>0?e.max.y:e.min.y,vl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function d0(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Vy(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],_=h[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const _=h[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Ro extends xn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const y=g*d-o;for(let v=0;v<c;v++){const x=v*h-r;p.push(x,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const v=y+c*g,x=y+c*(g+1),E=y+1+c*(g+1),T=y+1+c*g;f.push(v,x,T),f.push(x,E,T)}this.setIndex(f),this.setAttribute("position",new Gt(p,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ky=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_S=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xS="gl_FragColor = linearToOutputTexel( gl_FragColor );",yS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ES=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,US=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$S=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_A=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,EA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,NA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ZA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Gy,alphahash_pars_fragment:Wy,alphamap_fragment:Xy,alphamap_pars_fragment:qy,alphatest_fragment:Yy,alphatest_pars_fragment:Qy,aomap_fragment:Ky,aomap_pars_fragment:jy,batching_pars_vertex:Zy,batching_vertex:$y,begin_vertex:Jy,beginnormal_vertex:eS,bsdfs:tS,iridescence_fragment:nS,bumpmap_pars_fragment:iS,clipping_planes_fragment:sS,clipping_planes_pars_fragment:rS,clipping_planes_pars_vertex:oS,clipping_planes_vertex:aS,color_fragment:lS,color_pars_fragment:cS,color_pars_vertex:uS,color_vertex:hS,common:dS,cube_uv_reflection_fragment:fS,defaultnormal_vertex:pS,displacementmap_pars_vertex:mS,displacementmap_vertex:gS,emissivemap_fragment:_S,emissivemap_pars_fragment:vS,colorspace_fragment:xS,colorspace_pars_fragment:yS,envmap_fragment:SS,envmap_common_pars_fragment:AS,envmap_pars_fragment:MS,envmap_pars_vertex:TS,envmap_physical_pars_fragment:BS,envmap_vertex:ES,fog_vertex:CS,fog_pars_vertex:bS,fog_fragment:wS,fog_pars_fragment:RS,gradientmap_pars_fragment:IS,lightmap_pars_fragment:PS,lights_lambert_fragment:DS,lights_lambert_pars_fragment:FS,lights_pars_begin:LS,lights_toon_fragment:US,lights_toon_pars_fragment:OS,lights_phong_fragment:NS,lights_phong_pars_fragment:kS,lights_physical_fragment:zS,lights_physical_pars_fragment:HS,lights_fragment_begin:VS,lights_fragment_maps:GS,lights_fragment_end:WS,logdepthbuf_fragment:XS,logdepthbuf_pars_fragment:qS,logdepthbuf_pars_vertex:YS,logdepthbuf_vertex:QS,map_fragment:KS,map_pars_fragment:jS,map_particle_fragment:ZS,map_particle_pars_fragment:$S,metalnessmap_fragment:JS,metalnessmap_pars_fragment:eA,morphinstance_vertex:tA,morphcolor_vertex:nA,morphnormal_vertex:iA,morphtarget_pars_vertex:sA,morphtarget_vertex:rA,normal_fragment_begin:oA,normal_fragment_maps:aA,normal_pars_fragment:lA,normal_pars_vertex:cA,normal_vertex:uA,normalmap_pars_fragment:hA,clearcoat_normal_fragment_begin:dA,clearcoat_normal_fragment_maps:fA,clearcoat_pars_fragment:pA,iridescence_pars_fragment:mA,opaque_fragment:gA,packing:_A,premultiplied_alpha_fragment:vA,project_vertex:xA,dithering_fragment:yA,dithering_pars_fragment:SA,roughnessmap_fragment:AA,roughnessmap_pars_fragment:MA,shadowmap_pars_fragment:TA,shadowmap_pars_vertex:EA,shadowmap_vertex:CA,shadowmask_pars_fragment:bA,skinbase_vertex:wA,skinning_pars_vertex:RA,skinning_vertex:IA,skinnormal_vertex:PA,specularmap_fragment:DA,specularmap_pars_fragment:FA,tonemapping_fragment:LA,tonemapping_pars_fragment:BA,transmission_fragment:UA,transmission_pars_fragment:OA,uv_pars_fragment:NA,uv_pars_vertex:kA,uv_vertex:zA,worldpos_vertex:HA,background_vert:VA,background_frag:GA,backgroundCube_vert:WA,backgroundCube_frag:XA,cube_vert:qA,cube_frag:YA,depth_vert:QA,depth_frag:KA,distanceRGBA_vert:jA,distanceRGBA_frag:ZA,equirect_vert:$A,equirect_frag:JA,linedashed_vert:eM,linedashed_frag:tM,meshbasic_vert:nM,meshbasic_frag:iM,meshlambert_vert:sM,meshlambert_frag:rM,meshmatcap_vert:oM,meshmatcap_frag:aM,meshnormal_vert:lM,meshnormal_frag:cM,meshphong_vert:uM,meshphong_frag:hM,meshphysical_vert:dM,meshphysical_frag:fM,meshtoon_vert:pM,meshtoon_frag:mM,points_vert:gM,points_frag:_M,shadow_vert:vM,shadow_frag:xM,sprite_vert:yM,sprite_frag:SM},ge={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Ri={basic:{uniforms:Mn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Mn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Mn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Mn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Mn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Mn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Mn([ge.points,ge.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Mn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Mn([ge.common,ge.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Mn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Mn([ge.sprite,ge.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Mn([ge.common,ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Mn([ge.lights,ge.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Ri.physical={uniforms:Mn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const xl={r:0,b:0,g:0},er=new Jt,AM=new ue;function MM(s,e,t,n,i,r,o){const a=new Ne(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function p(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const x=p(y);x===null?g(a,l):x&&x.isColor&&(g(x,1),v=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){const x=p(v);x&&(x.isCubeTexture||x.mapping===Rc)?(u===void 0&&(u=new yt(new Ys(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:wo(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),er.copy(v.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(AM.makeRotationFromEuler(er)),u.material.toneMapped=Ye.getTransfer(x.colorSpace)!==pt,(h!==x||d!==x.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new yt(new Ro(2,2),new Yn({name:"BackgroundMaterial",uniforms:wo(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(x.colorSpace)!==pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,v){y.getRGB(xl,c0(s)),n.buffers.color.setClear(xl.r,xl.g,xl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,g(a,l)},render:_,addToRenderList:m}}function TM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,w,L,P,F){let B=!1;const O=h(P,L,w);r!==O&&(r=O,c(r.object)),B=f(M,P,L,F),B&&p(M,P,L,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(M,w,L,P),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,w,L){const P=L.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let B=F[w.id];B===void 0&&(B={},F[w.id]=B);let O=B[P];return O===void 0&&(O=d(l()),B[P]=O),O}function d(M){const w=[],L=[],P=[];for(let F=0;F<t;F++)w[F]=0,L[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:L,attributeDivisors:P,object:M,attributes:{},index:null}}function f(M,w,L,P){const F=r.attributes,B=w.attributes;let O=0;const H=L.getAttributes();for(const N in H)if(H[N].location>=0){const ie=F[N];let ae=B[N];if(ae===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ie===void 0||ie.attribute!==ae||ae&&ie.data!==ae.data)return!0;O++}return r.attributesNum!==O||r.index!==P}function p(M,w,L,P){const F={},B=w.attributes;let O=0;const H=L.getAttributes();for(const N in H)if(H[N].location>=0){let ie=B[N];ie===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));const ae={};ae.attribute=ie,ie&&ie.data&&(ae.data=ie.data),F[N]=ae,O++}r.attributes=F,r.attributesNum=O,r.index=P}function _(){const M=r.newAttributes;for(let w=0,L=M.length;w<L;w++)M[w]=0}function m(M){g(M,0)}function g(M,w){const L=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;L[M]=1,P[M]===0&&(s.enableVertexAttribArray(M),P[M]=1),F[M]!==w&&(s.vertexAttribDivisor(M,w),F[M]=w)}function y(){const M=r.newAttributes,w=r.enabledAttributes;for(let L=0,P=w.length;L<P;L++)w[L]!==M[L]&&(s.disableVertexAttribArray(L),w[L]=0)}function v(M,w,L,P,F,B,O){O===!0?s.vertexAttribIPointer(M,w,L,F,B):s.vertexAttribPointer(M,w,L,P,F,B)}function x(M,w,L,P){_();const F=P.attributes,B=L.getAttributes(),O=w.defaultAttributeValues;for(const H in B){const N=B[H];if(N.location>=0){let j=F[H];if(j===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),j!==void 0){const ie=j.normalized,ae=j.itemSize,fe=e.get(j);if(fe===void 0)continue;const Se=fe.buffer,W=fe.type,K=fe.bytesPerElement,oe=W===s.INT||W===s.UNSIGNED_INT||j.gpuType===Fd;if(j.isInterleavedBufferAttribute){const te=j.data,xe=te.stride,Ae=j.offset;if(te.isInstancedInterleavedBuffer){for(let be=0;be<N.locationSize;be++)g(N.location+be,te.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let be=0;be<N.locationSize;be++)m(N.location+be);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let be=0;be<N.locationSize;be++)v(N.location+be,ae/N.locationSize,W,ie,xe*K,(Ae+ae/N.locationSize*be)*K,oe)}else{if(j.isInstancedBufferAttribute){for(let te=0;te<N.locationSize;te++)g(N.location+te,j.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let te=0;te<N.locationSize;te++)m(N.location+te);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let te=0;te<N.locationSize;te++)v(N.location+te,ae/N.locationSize,W,ie,ae*K,ae/N.locationSize*te*K,oe)}}else if(O!==void 0){const ie=O[H];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(N.location,ie);break;case 3:s.vertexAttrib3fv(N.location,ie);break;case 4:s.vertexAttrib4fv(N.location,ie);break;default:s.vertexAttrib1fv(N.location,ie)}}}}y()}function E(){C();for(const M in n){const w=n[M];for(const L in w){const P=w[L];for(const F in P)u(P[F].object),delete P[F];delete w[L]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const L in w){const P=w[L];for(const F in P)u(P[F].object),delete P[F];delete w[L]}delete n[M.id]}function A(M){for(const w in n){const L=n[w];if(L[M.id]===void 0)continue;const P=L[M.id];for(const F in P)u(P[F].object),delete P[F];delete L[M.id]}}function C(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function EM(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_]*d[_];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function CM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==vn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===No&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ni&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==li&&!C)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:E,maxSamples:T}}function bM(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ns,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=s.get(h);if(!i||p===null||p.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,v=y*4;let x=g.clippingState||null;l.value=x,x=u(p,d,v,f);for(let E=0;E!==v;++E)x[E]=t[E];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function wM(s){let e=new WeakMap;function t(o,a){return a===ic?o.mapping=Mo:a===ph&&(o.mapping=To),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ic||a===ph)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ky(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Fc extends u0{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const eo=4,Ip=[.125,.215,.35,.446,.526,.582],ar=20,fu=new Fc,Pp=new Ne;let pu=null,mu=0,gu=0,_u=!1;const sr=(1+Math.sqrt(5))/2,Gr=1/sr,Dp=[new I(-sr,Gr,0),new I(sr,Gr,0),new I(-Gr,0,sr),new I(Gr,0,sr),new I(0,sr,-Gr),new I(0,sr,Gr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pu,mu,gu),this._renderer.xr.enabled=_u,e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mo||e.mapping===To?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:No,format:vn,colorSpace:ko,depthBuffer:!1},i=Lp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RM(r)),this._blurMaterial=IM(r,e,t)}return i}_compileMaterial(e){const t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,fu)}_sceneToCubeUV(e,t,n,i){const a=new gn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Pp),u.toneMapping=Ls,u.autoClear=!1;const f=new Hs({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),p=new yt(new Ys,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Pp),_=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):y===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const v=this._cubeSize;yl(i,y*v,g>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Mo||e.mapping===To;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bp());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;yl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,fu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dp[(i-r-1)%Dp.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new yt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ar-1),_=r/p,m=isFinite(r)?1+Math.floor(u*_):ar;m>ar&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ar}`);const g=[];let y=0;for(let A=0;A<ar;++A){const C=A/_,S=Math.exp(-C*C/2);g.push(S),A===0?y+=S:A<m&&(y+=2*S)}for(let A=0;A<g.length;A++)g[A]=g[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;const x=this._sizeLods[i],E=3*x*(i>v-eo?i-v+eo:0),T=4*(this._cubeSize-x);yl(t,E,T,3*x,2*x),l.setRenderTarget(t),l.render(h,fu)}}function RM(s){const e=[],t=[],n=[];let i=s;const r=s-eo+1+Ip.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-eo?l=Ip[o-s+eo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,_=3,m=2,g=1,y=new Float32Array(_*p*f),v=new Float32Array(m*p*f),x=new Float32Array(g*p*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,C=T>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(S,_*p*T),v.set(d,m*p*T);const M=[T,T,T,T,T,T];x.set(M,g*p*T)}const E=new xn;E.setAttribute("position",new di(y,_)),E.setAttribute("uv",new di(v,m)),E.setAttribute("faceIndex",new di(x,g)),e.push(E),i>eo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lp(s,e,t){const n=new zs(s,e,t);return n.texture.mapping=Rc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yl(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function IM(s,e,t){const n=new Float32Array(ar),i=new I(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function Bp(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function Up(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function Vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function PM(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ic||l===ph,u=l===Mo||l===To;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Fp(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Fp(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function DM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ia("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function FM(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);for(const p in d.morphAttributes){const _=d.morphAttributes[p];for(let m=0,g=_.length;m<g;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const p in f){const _=f[p];for(let m=0,g=_.length;m<g;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,p=h.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let v=0,x=y.length;v<x;v+=3){const E=y[v+0],T=y[v+1],A=y[v+2];d.push(E,T,T,A,A,E)}}else if(p!==void 0){const y=p.array;_=p.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const E=v+0,T=v+1,A=v+2;d.push(E,T,T,A,A,E)}}else return;const m=new(s0(d)?l0:zd)(d,1);m.version=_;const g=r.get(h);g&&e.remove(g),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function LM(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*o,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,n,1)}function h(d,f,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let g=0;for(let y=0;y<p;y++)g+=f[y]*_[y];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function BM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function UM(s,e,t){const n=new WeakMap,i=new Ze;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let E=a.attributes.position.count*x,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*T*4*h),C=new o0(A,E,T,h);C.type=li,C.needsUpdate=!0;const S=x*4;for(let w=0;w<h;w++){const L=g[w],P=y[w],F=v[w],B=E*T*4*w;for(let O=0;O<L.count;O++){const H=O*S;p===!0&&(i.fromBufferAttribute(L,O),A[B+H+0]=i.x,A[B+H+1]=i.y,A[B+H+2]=i.z,A[B+H+3]=0),_===!0&&(i.fromBufferAttribute(P,O),A[B+H+4]=i.x,A[B+H+5]=i.y,A[B+H+6]=i.z,A[B+H+7]=0),m===!0&&(i.fromBufferAttribute(F,O),A[B+H+8]=i.x,A[B+H+9]=i.y,A[B+H+10]=i.z,A[B+H+11]=F.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new he(E,T)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function OM(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Gd extends ln{constructor(e,t,n,i,r,o,a,l,c,u=gr){if(u!==gr&&u!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===gr&&(n=ai),n===void 0&&u===Co&&(n=Eo),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const f0=new ln,Op=new Gd(1,1),p0=new o0,m0=new yy,g0=new h0,Np=[],kp=[],zp=new Float32Array(16),Hp=new Float32Array(9),Vp=new Float32Array(4);function Vo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Np[i];if(r===void 0&&(r=new Float32Array(i),Np[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Kt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function jt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Lc(s,e){let t=kp[e];t===void 0&&(t=new Int32Array(e),kp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function NM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function kM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2fv(this.addr,e),jt(t,e)}}function zM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;s.uniform3fv(this.addr,e),jt(t,e)}}function HM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4fv(this.addr,e),jt(t,e)}}function VM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;Vp.set(n),s.uniformMatrix2fv(this.addr,!1,Vp),jt(t,n)}}function GM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;Hp.set(n),s.uniformMatrix3fv(this.addr,!1,Hp),jt(t,n)}}function WM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;zp.set(n),s.uniformMatrix4fv(this.addr,!1,zp),jt(t,n)}}function XM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function qM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2iv(this.addr,e),jt(t,e)}}function YM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3iv(this.addr,e),jt(t,e)}}function QM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4iv(this.addr,e),jt(t,e)}}function KM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function jM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2uiv(this.addr,e),jt(t,e)}}function ZM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3uiv(this.addr,e),jt(t,e)}}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4uiv(this.addr,e),jt(t,e)}}function JM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Op.compareFunction=i0,r=Op):r=f0,t.setTexture2D(e||r,i)}function eT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||m0,i)}function tT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||g0,i)}function nT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||p0,i)}function iT(s){switch(s){case 5126:return NM;case 35664:return kM;case 35665:return zM;case 35666:return HM;case 35674:return VM;case 35675:return GM;case 35676:return WM;case 5124:case 35670:return XM;case 35667:case 35671:return qM;case 35668:case 35672:return YM;case 35669:case 35673:return QM;case 5125:return KM;case 36294:return jM;case 36295:return ZM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return JM;case 35679:case 36299:case 36307:return eT;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return nT}}function sT(s,e){s.uniform1fv(this.addr,e)}function rT(s,e){const t=Vo(e,this.size,2);s.uniform2fv(this.addr,t)}function oT(s,e){const t=Vo(e,this.size,3);s.uniform3fv(this.addr,t)}function aT(s,e){const t=Vo(e,this.size,4);s.uniform4fv(this.addr,t)}function lT(s,e){const t=Vo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function cT(s,e){const t=Vo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function uT(s,e){const t=Vo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function hT(s,e){s.uniform1iv(this.addr,e)}function dT(s,e){s.uniform2iv(this.addr,e)}function fT(s,e){s.uniform3iv(this.addr,e)}function pT(s,e){s.uniform4iv(this.addr,e)}function mT(s,e){s.uniform1uiv(this.addr,e)}function gT(s,e){s.uniform2uiv(this.addr,e)}function _T(s,e){s.uniform3uiv(this.addr,e)}function vT(s,e){s.uniform4uiv(this.addr,e)}function xT(s,e,t){const n=this.cache,i=e.length,r=Lc(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||f0,r[o])}function yT(s,e,t){const n=this.cache,i=e.length,r=Lc(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||m0,r[o])}function ST(s,e,t){const n=this.cache,i=e.length,r=Lc(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||g0,r[o])}function AT(s,e,t){const n=this.cache,i=e.length,r=Lc(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||p0,r[o])}function MT(s){switch(s){case 5126:return sT;case 35664:return rT;case 35665:return oT;case 35666:return aT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return hT;case 35667:case 35671:return dT;case 35668:case 35672:return fT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return _T;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return AT}}class TT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iT(t.type)}}class ET{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=MT(t.type)}}class CT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const vu=/(\w+)(\])?(\[|\.)?/g;function Gp(s,e){s.seq.push(e),s.map[e.id]=e}function bT(s,e,t){const n=s.name,i=n.length;for(vu.lastIndex=0;;){const r=vu.exec(n),o=vu.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Gp(t,c===void 0?new TT(a,s,e):new ET(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new CT(a),Gp(t,h)),t=h}}}class Gl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);bT(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Wp(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const wT=37297;let RT=0;function IT(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Xp=new Ue;function PT(s){Ye._getMatrix(Xp,Ye.workingColorSpace,s);const e=`mat3( ${Xp.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(s)){case Dc:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function qp(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+IT(s.getShaderSource(e),o)}else return i}function DT(s,e){const t=PT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function FT(s,e){let t;switch(e){case Rx:t="Linear";break;case Ix:t="Reinhard";break;case Px:t="Cineon";break;case Dx:t="ACESFilmic";break;case Lx:t="AgX";break;case Bx:t="Neutral";break;case Fx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sl=new I;function LT(){Ye.getLuminanceCoefficients(Sl);const s=Sl.x.toFixed(4),e=Sl.y.toFixed(4),t=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function UT(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function OT(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function sa(s){return s!==""}function Yp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(s){return s.replace(NT,zT)}const kT=new Map;function zT(s,e){let t=Ke[e];if(t===void 0){const n=kT.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gh(t)}const HT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kp(s){return s.replace(HT,VT)}function VT(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function jp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===cx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function WT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mo:case To:e="ENVMAP_TYPE_CUBE";break;case Rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case To:e="ENVMAP_MODE_REFRACTION";break}return e}function qT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wc:e="ENVMAP_BLENDING_MULTIPLY";break;case bx:e="ENVMAP_BLENDING_MIX";break;case wx:e="ENVMAP_BLENDING_ADD";break}return e}function YT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function QT(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=GT(t),c=WT(t),u=XT(t),h=qT(t),d=YT(t),f=BT(t),p=UT(r),_=i.createProgram();let m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(sa).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(sa).join(`
`),g.length>0&&(g+=`
`)):(m=[jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),g=[jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ls?"#define TONE_MAPPING":"",t.toneMapping!==Ls?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ls?FT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,DT("linearToOutputTexel",t.outputColorSpace),LT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),o=Gh(o),o=Yp(o,t),o=Qp(o,t),a=Gh(a),a=Yp(a,t),a=Qp(a,t),o=Kp(o),a=Kp(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=y+m+o,x=y+g+a,E=Wp(i,i.VERTEX_SHADER,v),T=Wp(i,i.FRAGMENT_SHADER,x);i.attachShader(_,E),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(w){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(_).trim(),P=i.getShaderInfoLog(E).trim(),F=i.getShaderInfoLog(T).trim();let B=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,E,T);else{const H=qp(i,E,"vertex"),N=qp(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+L+`
`+H+`
`+N)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(P===""||F==="")&&(O=!1);O&&(w.diagnostics={runnable:B,programLog:L,vertexShader:{log:P,prefix:m},fragmentShader:{log:F,prefix:g}})}i.deleteShader(E),i.deleteShader(T),C=new Gl(i,_),S=OT(i,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,wT)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}let KT=0;class jT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ZT(e),t.set(e,n)),n}}class ZT{constructor(e){this.id=KT++,this.code=e,this.usedTimes=0}}function $T(s,e,t,n,i,r,o){const a=new kd,l=new jT,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,w,L,P){const F=L.fog,B=P.geometry,O=S.isMeshStandardMaterial?L.environment:null,H=(S.isMeshStandardMaterial?t:e).get(S.envMap||O),N=H&&H.mapping===Rc?H.image.height:null,j=p[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=ie!==void 0?ie.length:0;let fe=0;B.morphAttributes.position!==void 0&&(fe=1),B.morphAttributes.normal!==void 0&&(fe=2),B.morphAttributes.color!==void 0&&(fe=3);let Se,W,K,oe;if(j){const dt=Ri[j];Se=dt.vertexShader,W=dt.fragmentShader}else Se=S.vertexShader,W=S.fragmentShader,l.update(S),K=l.getVertexShaderID(S),oe=l.getFragmentShaderID(S);const te=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),Ae=P.isInstancedMesh===!0,be=P.isBatchedMesh===!0,Ve=!!S.map,Be=!!S.matcap,ke=!!H,k=!!S.aoMap,Qe=!!S.lightMap,Ge=!!S.bumpMap,We=!!S.normalMap,Ee=!!S.displacementMap,tt=!!S.emissiveMap,Fe=!!S.metalnessMap,D=!!S.roughnessMap,b=S.anisotropy>0,X=S.clearcoat>0,ee=S.dispersion>0,se=S.iridescence>0,J=S.sheen>0,we=S.transmission>0,ve=b&&!!S.anisotropyMap,Te=X&&!!S.clearcoatMap,Je=X&&!!S.clearcoatNormalMap,re=X&&!!S.clearcoatRoughnessMap,U=se&&!!S.iridescenceMap,ne=se&&!!S.iridescenceThicknessMap,Me=J&&!!S.sheenColorMap,de=J&&!!S.sheenRoughnessMap,Oe=!!S.specularMap,ze=!!S.specularColorMap,nt=!!S.specularIntensityMap,z=we&&!!S.transmissionMap,me=we&&!!S.thicknessMap,Q=!!S.gradientMap,$=!!S.alphaMap,_e=S.alphaTest>0,pe=!!S.alphaHash,He=!!S.extensions;let gt=Ls;S.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(gt=s.toneMapping);const cn={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:Se,fragmentShader:W,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:oe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:be,batchingColor:be&&P._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&P.instanceColor!==null,instancingMorph:Ae&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?s.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ko,alphaToCoverage:!!S.alphaToCoverage,map:Ve,matcap:Be,envMap:ke,envMapMode:ke&&H.mapping,envMapCubeUVHeight:N,aoMap:k,lightMap:Qe,bumpMap:Ge,normalMap:We,displacementMap:d&&Ee,emissiveMap:tt,normalMapObjectSpace:We&&S.normalMapType===Hx,normalMapTangentSpace:We&&S.normalMapType===Pc,metalnessMap:Fe,roughnessMap:D,anisotropy:b,anisotropyMap:ve,clearcoat:X,clearcoatMap:Te,clearcoatNormalMap:Je,clearcoatRoughnessMap:re,dispersion:ee,iridescence:se,iridescenceMap:U,iridescenceThicknessMap:ne,sheen:J,sheenColorMap:Me,sheenRoughnessMap:de,specularMap:Oe,specularColorMap:ze,specularIntensityMap:nt,transmission:we,transmissionMap:z,thicknessMap:me,gradientMap:Q,opaque:S.transparent===!1&&S.blending===Fs&&S.alphaToCoverage===!1,alphaMap:$,alphaTest:_e,alphaHash:pe,combine:S.combine,mapUv:Ve&&_(S.map.channel),aoMapUv:k&&_(S.aoMap.channel),lightMapUv:Qe&&_(S.lightMap.channel),bumpMapUv:Ge&&_(S.bumpMap.channel),normalMapUv:We&&_(S.normalMap.channel),displacementMapUv:Ee&&_(S.displacementMap.channel),emissiveMapUv:tt&&_(S.emissiveMap.channel),metalnessMapUv:Fe&&_(S.metalnessMap.channel),roughnessMapUv:D&&_(S.roughnessMap.channel),anisotropyMapUv:ve&&_(S.anisotropyMap.channel),clearcoatMapUv:Te&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Je&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:U&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(S.sheenRoughnessMap.channel),specularMapUv:Oe&&_(S.specularMap.channel),specularColorMapUv:ze&&_(S.specularColorMap.channel),specularIntensityMapUv:nt&&_(S.specularIntensityMap.channel),transmissionMapUv:z&&_(S.transmissionMap.channel),thicknessMapUv:me&&_(S.thicknessMap.channel),alphaMapUv:$&&_(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(We||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!B.attributes.uv&&(Ve||$),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:xe,skinning:P.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:gt,decodeVideoTexture:Ve&&S.map.isVideoTexture===!0&&Ye.getTransfer(S.map.colorSpace)===pt,decodeVideoTextureEmissive:tt&&S.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(S.emissiveMap.colorSpace)===pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ri,flipSided:S.side===Rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:He&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&S.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return cn.vertexUv1s=c.has(1),cn.vertexUv2s=c.has(2),cn.vertexUv3s=c.has(3),c.clear(),cn}function g(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)M.push(w),M.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(y(M,S),v(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=p[S.type];let w;if(M){const L=Ri[M];w=By.clone(L.uniforms)}else w=S.uniforms;return w}function E(S,M){let w;for(let L=0,P=u.length;L<P;L++){const F=u[L];if(F.cacheKey===M){w=F,++w.usedTimes;break}}return w===void 0&&(w=new QT(s,M,S,r),u.push(w)),w}function T(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:x,acquireProgram:E,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:C}}function JT(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function eE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $p(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,p,_,m){let g=s[e];return g===void 0?(g={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:_,group:m},s[e]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=f,g.groupOrder=p,g.renderOrder=h.renderOrder,g.z=_,g.group=m),e++,g}function a(h,d,f,p,_,m){const g=o(h,d,f,p,_,m);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):t.push(g)}function l(h,d,f,p,_,m){const g=o(h,d,f,p,_,m);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function c(h,d){t.length>1&&t.sort(h||eE),n.length>1&&n.sort(d||Zp),i.length>1&&i.sort(d||Zp)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function tE(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new $p,s.set(n,[o])):i>=r.length?(o=new $p,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function nE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ne};break;case"SpotLight":t={position:new I,direction:new I,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function iE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let sE=0;function rE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function oE(s){const e=new nE,t=iE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new ue,o=new ue;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,y=0,v=0,x=0,E=0,T=0,A=0;c.sort(rE);for(let S=0,M=c.length;S<M;S++){const w=c[S],L=w.color,P=w.intensity,F=w.distance,B=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=L.r*P,h+=L.g*P,d+=L.b*P;else if(w.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(w.sh.coefficients[O],P);A++}else if(w.isDirectionalLight){const O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const H=w.shadow,N=t.get(w);N.shadowIntensity=H.intensity,N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=w.shadow.matrix,y++}n.directional[f]=O,f++}else if(w.isSpotLight){const O=e.get(w);O.position.setFromMatrixPosition(w.matrixWorld),O.color.copy(L).multiplyScalar(P),O.distance=F,O.coneCos=Math.cos(w.angle),O.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),O.decay=w.decay,n.spot[_]=O;const H=w.shadow;if(w.map&&(n.spotLightMap[E]=w.map,E++,H.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[_]=H.matrix,w.castShadow){const N=t.get(w);N.shadowIntensity=H.intensity,N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=B,x++}_++}else if(w.isRectAreaLight){const O=e.get(w);O.color.copy(L).multiplyScalar(P),O.halfWidth.set(w.width*.5,0,0),O.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=O,m++}else if(w.isPointLight){const O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),O.distance=w.distance,O.decay=w.decay,w.castShadow){const H=w.shadow,N=t.get(w);N.shadowIntensity=H.intensity,N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,N.shadowCameraNear=H.camera.near,N.shadowCameraFar=H.camera.far,n.pointShadow[p]=N,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=w.shadow.matrix,v++}n.point[p]=O,p++}else if(w.isHemisphereLight){const O=e.get(w);O.skyColor.copy(w.color).multiplyScalar(P),O.groundColor.copy(w.groundColor).multiplyScalar(P),n.hemi[g]=O,g++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==p||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==g||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==E||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.directionalLength=f,C.pointLength=p,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=g,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=E,C.numLightProbes=A,n.version=sE++)}function l(c,u){let h=0,d=0,f=0,p=0,_=0;const m=u.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const v=c[g];if(v.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(v.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Jp(s){const e=new oE(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function aE(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Jp(s),e.set(i,[a])):r>=o.length?(a=new Jp(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class lE extends qs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cE extends qs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dE(s,e,t){let n=new Hd;const i=new he,r=new he,o=new Ze,a=new lE({depthPacking:zx}),l=new cE,c={},u=t.maxTextureSize,h={[Oi]:Rn,[Rn]:Oi,[ri]:ri},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:uE,fragmentShader:hE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new xn;p.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new yt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xg;let g=this.type;this.render=function(T,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ds),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const P=g!==$i&&this.type===$i,F=g===$i&&this.type!==$i;for(let B=0,O=T.length;B<O;B++){const H=T[B],N=H.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const j=N.getFrameExtents();if(i.multiply(j),r.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/j.x),i.x=r.x*j.x,N.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/j.y),i.y=r.y*j.y,N.mapSize.y=r.y)),N.map===null||P===!0||F===!0){const ae=this.type!==$i?{minFilter:qn,magFilter:qn}:{};N.map!==null&&N.map.dispose(),N.map=new zs(i.x,i.y,ae),N.map.texture.name=H.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();const ie=N.getViewportCount();for(let ae=0;ae<ie;ae++){const fe=N.getViewport(ae);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),L.viewport(o),N.updateMatrices(H,ae),n=N.getFrustum(),x(A,C,N.camera,H,this.type)}N.isPointLightShadow!==!0&&this.type===$i&&y(N,C),N.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,w)};function y(T,A){const C=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new zs(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,C,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,C,f,_,null)}function v(T,A,C,S){let M=null;const w=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)M=w;else if(M=C.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const L=M.uuid,P=A.uuid;let F=c[L];F===void 0&&(F={},c[L]=F);let B=F[P];B===void 0&&(B=M.clone(),F[P]=B,A.addEventListener("dispose",E)),M=B}if(M.visible=A.visible,M.wireframe=A.wireframe,S===$i?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=s.properties.get(M);L.light=C}return M}function x(T,A,C,S,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===$i)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const P=e.update(T),F=T.material;if(Array.isArray(F)){const B=P.groups;for(let O=0,H=B.length;O<H;O++){const N=B[O],j=F[N.materialIndex];if(j&&j.visible){const ie=v(T,j,S,M);T.onBeforeShadow(s,T,A,C,P,ie,N),s.renderBufferDirect(C,null,P,ie,T,N),T.onAfterShadow(s,T,A,C,P,ie,N)}}}else if(F.visible){const B=v(T,F,S,M);T.onBeforeShadow(s,T,A,C,P,B,null),s.renderBufferDirect(C,null,P,B,T,null),T.onAfterShadow(s,T,A,C,P,B,null)}}const L=T.children;for(let P=0,F=L.length;P<F;P++)x(L[P],A,C,S,M)}function E(T){T.target.removeEventListener("dispose",E);for(const C in c){const S=c[C],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const fE={[ah]:lh,[ch]:dh,[uh]:fh,[Ao]:hh,[lh]:ah,[dh]:ch,[fh]:uh,[hh]:Ao};function pE(s,e){function t(){let z=!1;const me=new Ze;let Q=null;const $=new Ze(0,0,0,0);return{setMask:function(_e){Q!==_e&&!z&&(s.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){z=_e},setClear:function(_e,pe,He,gt,cn){cn===!0&&(_e*=gt,pe*=gt,He*=gt),me.set(_e,pe,He,gt),$.equals(me)===!1&&(s.clearColor(_e,pe,He,gt),$.copy(me))},reset:function(){z=!1,Q=null,$.set(-1,0,0,0)}}}function n(){let z=!1,me=!1,Q=null,$=null,_e=null;return{setReversed:function(pe){if(me!==pe){const He=e.get("EXT_clip_control");me?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const gt=_e;_e=null,this.setClear(gt)}me=pe},getReversed:function(){return me},setTest:function(pe){pe?te(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(pe){Q!==pe&&!z&&(s.depthMask(pe),Q=pe)},setFunc:function(pe){if(me&&(pe=fE[pe]),$!==pe){switch(pe){case ah:s.depthFunc(s.NEVER);break;case lh:s.depthFunc(s.ALWAYS);break;case ch:s.depthFunc(s.LESS);break;case Ao:s.depthFunc(s.LEQUAL);break;case uh:s.depthFunc(s.EQUAL);break;case hh:s.depthFunc(s.GEQUAL);break;case dh:s.depthFunc(s.GREATER);break;case fh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=pe}},setLocked:function(pe){z=pe},setClear:function(pe){_e!==pe&&(me&&(pe=1-pe),s.clearDepth(pe),_e=pe)},reset:function(){z=!1,Q=null,$=null,_e=null,me=!1}}}function i(){let z=!1,me=null,Q=null,$=null,_e=null,pe=null,He=null,gt=null,cn=null;return{setTest:function(dt){z||(dt?te(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(dt){me!==dt&&!z&&(s.stencilMask(dt),me=dt)},setFunc:function(dt,mi,Wi){(Q!==dt||$!==mi||_e!==Wi)&&(s.stencilFunc(dt,mi,Wi),Q=dt,$=mi,_e=Wi)},setOp:function(dt,mi,Wi){(pe!==dt||He!==mi||gt!==Wi)&&(s.stencilOp(dt,mi,Wi),pe=dt,He=mi,gt=Wi)},setLocked:function(dt){z=dt},setClear:function(dt){cn!==dt&&(s.clearStencil(dt),cn=dt)},reset:function(){z=!1,me=null,Q=null,$=null,_e=null,pe=null,He=null,gt=null,cn=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],p=null,_=!1,m=null,g=null,y=null,v=null,x=null,E=null,T=null,A=new Ne(0,0,0),C=0,S=!1,M=null,w=null,L=null,P=null,F=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const N=s.getParameter(s.VERSION);N.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(N)[1]),O=H>=1):N.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),O=H>=2);let j=null,ie={};const ae=s.getParameter(s.SCISSOR_BOX),fe=s.getParameter(s.VIEWPORT),Se=new Ze().fromArray(ae),W=new Ze().fromArray(fe);function K(z,me,Q,$){const _e=new Uint8Array(4),pe=s.createTexture();s.bindTexture(z,pe),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<Q;He++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(me,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(me+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return pe}const oe={};oe[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(s.DEPTH_TEST),o.setFunc(Ao),Ge(!1),We($f),te(s.CULL_FACE),k(Ds);function te(z){u[z]!==!0&&(s.enable(z),u[z]=!0)}function xe(z){u[z]!==!1&&(s.disable(z),u[z]=!1)}function Ae(z,me){return h[z]!==me?(s.bindFramebuffer(z,me),h[z]=me,z===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=me),z===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=me),!0):!1}function be(z,me){let Q=f,$=!1;if(z){Q=d.get(me),Q===void 0&&(Q=[],d.set(me,Q));const _e=z.textures;if(Q.length!==_e.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,He=_e.length;pe<He;pe++)Q[pe]=s.COLOR_ATTACHMENT0+pe;Q.length=_e.length,$=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,$=!0);$&&s.drawBuffers(Q)}function Ve(z){return p!==z?(s.useProgram(z),p=z,!0):!1}const Be={[or]:s.FUNC_ADD,[ux]:s.FUNC_SUBTRACT,[hx]:s.FUNC_REVERSE_SUBTRACT};Be[dx]=s.MIN,Be[fx]=s.MAX;const ke={[px]:s.ZERO,[mx]:s.ONE,[gx]:s.SRC_COLOR,[Aa]:s.SRC_ALPHA,[Ax]:s.SRC_ALPHA_SATURATE,[yx]:s.DST_COLOR,[vx]:s.DST_ALPHA,[_x]:s.ONE_MINUS_SRC_COLOR,[Ma]:s.ONE_MINUS_SRC_ALPHA,[Sx]:s.ONE_MINUS_DST_COLOR,[xx]:s.ONE_MINUS_DST_ALPHA,[Mx]:s.CONSTANT_COLOR,[Tx]:s.ONE_MINUS_CONSTANT_COLOR,[Ex]:s.CONSTANT_ALPHA,[Cx]:s.ONE_MINUS_CONSTANT_ALPHA};function k(z,me,Q,$,_e,pe,He,gt,cn,dt){if(z===Ds){_===!0&&(xe(s.BLEND),_=!1);return}if(_===!1&&(te(s.BLEND),_=!0),z!==qg){if(z!==m||dt!==S){if((g!==or||x!==or)&&(s.blendEquation(s.FUNC_ADD),g=or,x=or),dt)switch(z){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jf:s.blendFunc(s.ONE,s.ONE);break;case ep:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ep:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,v=null,E=null,T=null,A.set(0,0,0),C=0,m=z,S=dt}return}_e=_e||me,pe=pe||Q,He=He||$,(me!==g||_e!==x)&&(s.blendEquationSeparate(Be[me],Be[_e]),g=me,x=_e),(Q!==y||$!==v||pe!==E||He!==T)&&(s.blendFuncSeparate(ke[Q],ke[$],ke[pe],ke[He]),y=Q,v=$,E=pe,T=He),(gt.equals(A)===!1||cn!==C)&&(s.blendColor(gt.r,gt.g,gt.b,cn),A.copy(gt),C=cn),m=z,S=!1}function Qe(z,me){z.side===ri?xe(s.CULL_FACE):te(s.CULL_FACE);let Q=z.side===Rn;me&&(Q=!Q),Ge(Q),z.blending===Fs&&z.transparent===!1?k(Ds):k(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const $=z.stencilWrite;a.setTest($),$&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),tt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?te(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(z){M!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),M=z)}function We(z){z!==ax?(te(s.CULL_FACE),z!==w&&(z===$f?s.cullFace(s.BACK):z===lx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),w=z}function Ee(z){z!==L&&(O&&s.lineWidth(z),L=z)}function tt(z,me,Q){z?(te(s.POLYGON_OFFSET_FILL),(P!==me||F!==Q)&&(s.polygonOffset(me,Q),P=me,F=Q)):xe(s.POLYGON_OFFSET_FILL)}function Fe(z){z?te(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function D(z){z===void 0&&(z=s.TEXTURE0+B-1),j!==z&&(s.activeTexture(z),j=z)}function b(z,me,Q){Q===void 0&&(j===null?Q=s.TEXTURE0+B-1:Q=j);let $=ie[Q];$===void 0&&($={type:void 0,texture:void 0},ie[Q]=$),($.type!==z||$.texture!==me)&&(j!==Q&&(s.activeTexture(Q),j=Q),s.bindTexture(z,me||oe[z]),$.type=z,$.texture=me)}function X(){const z=ie[j];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ee(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Je(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function U(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(z){Se.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Se.copy(z))}function de(z){W.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),W.copy(z))}function Oe(z,me){let Q=c.get(me);Q===void 0&&(Q=new WeakMap,c.set(me,Q));let $=Q.get(z);$===void 0&&($=s.getUniformBlockIndex(me,z.name),Q.set(z,$))}function ze(z,me){const $=c.get(me).get(z);l.get(me)!==$&&(s.uniformBlockBinding(me,$,z.__bindingPointIndex),l.set(me,$))}function nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},j=null,ie={},h={},d=new WeakMap,f=[],p=null,_=!1,m=null,g=null,y=null,v=null,x=null,E=null,T=null,A=new Ne(0,0,0),C=0,S=!1,M=null,w=null,L=null,P=null,F=null,Se.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:xe,bindFramebuffer:Ae,drawBuffers:be,useProgram:Ve,setBlending:k,setMaterial:Qe,setFlipSided:Ge,setCullFace:We,setLineWidth:Ee,setPolygonOffset:tt,setScissorTest:Fe,activeTexture:D,bindTexture:b,unbindTexture:X,compressedTexImage2D:ee,compressedTexImage3D:se,texImage2D:U,texImage3D:ne,updateUBOMapping:Oe,uniformBlockBinding:ze,texStorage2D:Je,texStorage3D:re,texSubImage2D:J,texSubImage3D:we,compressedTexSubImage2D:ve,compressedTexSubImage3D:Te,scissor:Me,viewport:de,reset:nt}}function em(s,e,t,n){const i=mE(n);switch(t){case Zg:return s*e;case Jg:return s*e;case e0:return s*e*2;case t0:return s*e/i.components*i.byteLength;case Ic:return s*e/i.components*i.byteLength;case Ud:return s*e*2/i.components*i.byteLength;case Od:return s*e*2/i.components*i.byteLength;case $g:return s*e*3/i.components*i.byteLength;case vn:return s*e*4/i.components*i.byteLength;case fo:return s*e*4/i.components*i.byteLength;case Nl:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zl:case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _h:case xh:return Math.max(s,16)*Math.max(e,8)/4;case gh:case vh:return Math.max(s,8)*Math.max(e,8)/2;case yh:case Sh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ah:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case wh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vl:case Oh:case Nh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case n0:case kh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case zh:case Hh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mE(s){switch(s){case Ni:case Qg:return{byteLength:1,components:1};case Ea:case Kg:case No:return{byteLength:2,components:1};case Ld:case Bd:return{byteLength:2,components:4};case ai:case Fd:case li:return{byteLength:4,components:1};case jg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function gE(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,b){return f?new OffscreenCanvas(D,b):Ca("canvas")}function _(D,b,X){let ee=1;const se=Fe(D);if((se.width>X||se.height>X)&&(ee=X/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const J=Math.floor(ee*se.width),we=Math.floor(ee*se.height);h===void 0&&(h=p(J,we));const ve=b?p(J,we):h;return ve.width=J,ve.height=we,ve.getContext("2d").drawImage(D,0,0,J,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+J+"x"+we+")."),ve}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),D;return D}function m(D){return D.generateMipmaps}function g(D){s.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(D,b,X,ee,se=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let J=b;if(b===s.RED&&(X===s.FLOAT&&(J=s.R32F),X===s.HALF_FLOAT&&(J=s.R16F),X===s.UNSIGNED_BYTE&&(J=s.R8)),b===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(J=s.R8UI),X===s.UNSIGNED_SHORT&&(J=s.R16UI),X===s.UNSIGNED_INT&&(J=s.R32UI),X===s.BYTE&&(J=s.R8I),X===s.SHORT&&(J=s.R16I),X===s.INT&&(J=s.R32I)),b===s.RG&&(X===s.FLOAT&&(J=s.RG32F),X===s.HALF_FLOAT&&(J=s.RG16F),X===s.UNSIGNED_BYTE&&(J=s.RG8)),b===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(J=s.RG8UI),X===s.UNSIGNED_SHORT&&(J=s.RG16UI),X===s.UNSIGNED_INT&&(J=s.RG32UI),X===s.BYTE&&(J=s.RG8I),X===s.SHORT&&(J=s.RG16I),X===s.INT&&(J=s.RG32I)),b===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(J=s.RGB8UI),X===s.UNSIGNED_SHORT&&(J=s.RGB16UI),X===s.UNSIGNED_INT&&(J=s.RGB32UI),X===s.BYTE&&(J=s.RGB8I),X===s.SHORT&&(J=s.RGB16I),X===s.INT&&(J=s.RGB32I)),b===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),X===s.UNSIGNED_INT&&(J=s.RGBA32UI),X===s.BYTE&&(J=s.RGBA8I),X===s.SHORT&&(J=s.RGBA16I),X===s.INT&&(J=s.RGBA32I)),b===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),b===s.RGBA){const we=se?Dc:Ye.getTransfer(ee);X===s.FLOAT&&(J=s.RGBA32F),X===s.HALF_FLOAT&&(J=s.RGBA16F),X===s.UNSIGNED_BYTE&&(J=we===pt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(D,b){let X;return D?b===null||b===ai||b===Eo?X=s.DEPTH24_STENCIL8:b===li?X=s.DEPTH32F_STENCIL8:b===Ea&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ai||b===Eo?X=s.DEPTH_COMPONENT24:b===li?X=s.DEPTH_COMPONENT32F:b===Ea&&(X=s.DEPTH_COMPONENT16),X}function E(D,b){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==qn&&D.minFilter!==Pi?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function T(D){const b=D.target;b.removeEventListener("dispose",T),C(b),b.isVideoTexture&&u.delete(b)}function A(D){const b=D.target;b.removeEventListener("dispose",A),M(b)}function C(D){const b=n.get(D);if(b.__webglInit===void 0)return;const X=D.source,ee=d.get(X);if(ee){const se=ee[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&S(D),Object.keys(ee).length===0&&d.delete(X)}n.remove(D)}function S(D){const b=n.get(D);s.deleteTexture(b.__webglTexture);const X=D.source,ee=d.get(X);delete ee[b.__cacheKey],o.memory.textures--}function M(D){const b=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let se=0;se<b.__webglFramebuffer[ee].length;se++)s.deleteFramebuffer(b.__webglFramebuffer[ee][se]);else s.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)s.deleteFramebuffer(b.__webglFramebuffer[ee]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=D.textures;for(let ee=0,se=X.length;ee<se;ee++){const J=n.get(X[ee]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(X[ee])}n.remove(D)}let w=0;function L(){w=0}function P(){const D=w;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),w+=1,D}function F(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function B(D,b){const X=n.get(D);if(D.isVideoTexture&&Ee(D),D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){const ee=D.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(X,D,b);return}}t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+b)}function O(D,b){const X=n.get(D);if(D.version>0&&X.__version!==D.version){W(X,D,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+b)}function H(D,b){const X=n.get(D);if(D.version>0&&X.__version!==D.version){W(X,D,b);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+b)}function N(D,b){const X=n.get(D);if(D.version>0&&X.__version!==D.version){K(X,D,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+b)}const j={[Ta]:s.REPEAT,[as]:s.CLAMP_TO_EDGE,[mh]:s.MIRRORED_REPEAT},ie={[qn]:s.NEAREST,[Ox]:s.NEAREST_MIPMAP_NEAREST,[tl]:s.NEAREST_MIPMAP_LINEAR,[Pi]:s.LINEAR,[Xc]:s.LINEAR_MIPMAP_NEAREST,[hr]:s.LINEAR_MIPMAP_LINEAR},ae={[Vx]:s.NEVER,[Qx]:s.ALWAYS,[Gx]:s.LESS,[i0]:s.LEQUAL,[Wx]:s.EQUAL,[Yx]:s.GEQUAL,[Xx]:s.GREATER,[qx]:s.NOTEQUAL};function fe(D,b){if(b.type===li&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Pi||b.magFilter===Xc||b.magFilter===tl||b.magFilter===hr||b.minFilter===Pi||b.minFilter===Xc||b.minFilter===tl||b.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,j[b.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,j[b.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,j[b.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ie[b.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ie[b.minFilter]),b.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qn||b.minFilter!==tl&&b.minFilter!==hr||b.type===li&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Se(D,b){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",T));const ee=b.source;let se=d.get(ee);se===void 0&&(se={},d.set(ee,se));const J=F(b);if(J!==D.__cacheKey){se[J]===void 0&&(se[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),se[J].usedTimes++;const we=se[D.__cacheKey];we!==void 0&&(se[D.__cacheKey].usedTimes--,we.usedTimes===0&&S(b)),D.__cacheKey=J,D.__webglTexture=se[J].texture}return X}function W(D,b,X){let ee=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=s.TEXTURE_3D);const se=Se(D,b),J=b.source;t.bindTexture(ee,D.__webglTexture,s.TEXTURE0+X);const we=n.get(J);if(J.version!==we.__version||se===!0){t.activeTexture(s.TEXTURE0+X);const ve=Ye.getPrimaries(Ye.workingColorSpace),Te=b.colorSpace===bs?null:Ye.getPrimaries(b.colorSpace),Je=b.colorSpace===bs||ve===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let re=_(b.image,!1,i.maxTextureSize);re=tt(b,re);const U=r.convert(b.format,b.colorSpace),ne=r.convert(b.type);let Me=v(b.internalFormat,U,ne,b.colorSpace,b.isVideoTexture);fe(ee,b);let de;const Oe=b.mipmaps,ze=b.isVideoTexture!==!0,nt=we.__version===void 0||se===!0,z=J.dataReady,me=E(b,re);if(b.isDepthTexture)Me=x(b.format===Co,b.type),nt&&(ze?t.texStorage2D(s.TEXTURE_2D,1,Me,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,Me,re.width,re.height,0,U,ne,null));else if(b.isDataTexture)if(Oe.length>0){ze&&nt&&t.texStorage2D(s.TEXTURE_2D,me,Me,Oe[0].width,Oe[0].height);for(let Q=0,$=Oe.length;Q<$;Q++)de=Oe[Q],ze?z&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,de.width,de.height,U,ne,de.data):t.texImage2D(s.TEXTURE_2D,Q,Me,de.width,de.height,0,U,ne,de.data);b.generateMipmaps=!1}else ze?(nt&&t.texStorage2D(s.TEXTURE_2D,me,Me,re.width,re.height),z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,U,ne,re.data)):t.texImage2D(s.TEXTURE_2D,0,Me,re.width,re.height,0,U,ne,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ze&&nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,Me,Oe[0].width,Oe[0].height,re.depth);for(let Q=0,$=Oe.length;Q<$;Q++)if(de=Oe[Q],b.format!==vn)if(U!==null)if(ze){if(z)if(b.layerUpdates.size>0){const _e=em(de.width,de.height,b.format,b.type);for(const pe of b.layerUpdates){const He=de.data.subarray(pe*_e/de.data.BYTES_PER_ELEMENT,(pe+1)*_e/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,pe,de.width,de.height,1,U,He)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,re.depth,U,de.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Me,de.width,de.height,re.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,re.depth,U,ne,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,Me,de.width,de.height,re.depth,0,U,ne,de.data)}else{ze&&nt&&t.texStorage2D(s.TEXTURE_2D,me,Me,Oe[0].width,Oe[0].height);for(let Q=0,$=Oe.length;Q<$;Q++)de=Oe[Q],b.format!==vn?U!==null?ze?z&&t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,de.width,de.height,U,de.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,Me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?z&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,de.width,de.height,U,ne,de.data):t.texImage2D(s.TEXTURE_2D,Q,Me,de.width,de.height,0,U,ne,de.data)}else if(b.isDataArrayTexture)if(ze){if(nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,Me,re.width,re.height,re.depth),z)if(b.layerUpdates.size>0){const Q=em(re.width,re.height,b.format,b.type);for(const $ of b.layerUpdates){const _e=re.data.subarray($*Q/re.data.BYTES_PER_ELEMENT,($+1)*Q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,re.width,re.height,1,U,ne,_e)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,U,ne,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Me,re.width,re.height,re.depth,0,U,ne,re.data);else if(b.isData3DTexture)ze?(nt&&t.texStorage3D(s.TEXTURE_3D,me,Me,re.width,re.height,re.depth),z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,U,ne,re.data)):t.texImage3D(s.TEXTURE_3D,0,Me,re.width,re.height,re.depth,0,U,ne,re.data);else if(b.isFramebufferTexture){if(nt)if(ze)t.texStorage2D(s.TEXTURE_2D,me,Me,re.width,re.height);else{let Q=re.width,$=re.height;for(let _e=0;_e<me;_e++)t.texImage2D(s.TEXTURE_2D,_e,Me,Q,$,0,U,ne,null),Q>>=1,$>>=1}}else if(Oe.length>0){if(ze&&nt){const Q=Fe(Oe[0]);t.texStorage2D(s.TEXTURE_2D,me,Me,Q.width,Q.height)}for(let Q=0,$=Oe.length;Q<$;Q++)de=Oe[Q],ze?z&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,U,ne,de):t.texImage2D(s.TEXTURE_2D,Q,Me,U,ne,de);b.generateMipmaps=!1}else if(ze){if(nt){const Q=Fe(re);t.texStorage2D(s.TEXTURE_2D,me,Me,Q.width,Q.height)}z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,U,ne,re)}else t.texImage2D(s.TEXTURE_2D,0,Me,U,ne,re);m(b)&&g(ee),we.__version=J.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function K(D,b,X){if(b.image.length!==6)return;const ee=Se(D,b),se=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+X);const J=n.get(se);if(se.version!==J.__version||ee===!0){t.activeTexture(s.TEXTURE0+X);const we=Ye.getPrimaries(Ye.workingColorSpace),ve=b.colorSpace===bs?null:Ye.getPrimaries(b.colorSpace),Te=b.colorSpace===bs||we===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Je=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,U=[];for(let $=0;$<6;$++)!Je&&!re?U[$]=_(b.image[$],!0,i.maxCubemapSize):U[$]=re?b.image[$].image:b.image[$],U[$]=tt(b,U[$]);const ne=U[0],Me=r.convert(b.format,b.colorSpace),de=r.convert(b.type),Oe=v(b.internalFormat,Me,de,b.colorSpace),ze=b.isVideoTexture!==!0,nt=J.__version===void 0||ee===!0,z=se.dataReady;let me=E(b,ne);fe(s.TEXTURE_CUBE_MAP,b);let Q;if(Je){ze&&nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,me,Oe,ne.width,ne.height);for(let $=0;$<6;$++){Q=U[$].mipmaps;for(let _e=0;_e<Q.length;_e++){const pe=Q[_e];b.format!==vn?Me!==null?ze?z&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,pe.width,pe.height,Me,pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,Oe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,pe.width,pe.height,Me,de,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,Oe,pe.width,pe.height,0,Me,de,pe.data)}}}else{if(Q=b.mipmaps,ze&&nt){Q.length>0&&me++;const $=Fe(U[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,me,Oe,$.width,$.height)}for(let $=0;$<6;$++)if(re){ze?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,U[$].width,U[$].height,Me,de,U[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,U[$].width,U[$].height,0,Me,de,U[$].data);for(let _e=0;_e<Q.length;_e++){const He=Q[_e].image[$].image;ze?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,He.width,He.height,Me,de,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,Oe,He.width,He.height,0,Me,de,He.data)}}else{ze?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Me,de,U[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,Me,de,U[$]);for(let _e=0;_e<Q.length;_e++){const pe=Q[_e];ze?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,Me,de,pe.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,Oe,Me,de,pe.image[$])}}}m(b)&&g(s.TEXTURE_CUBE_MAP),J.__version=se.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function oe(D,b,X,ee,se,J){const we=r.convert(X.format,X.colorSpace),ve=r.convert(X.type),Te=v(X.internalFormat,we,ve,X.colorSpace),Je=n.get(b),re=n.get(X);if(re.__renderTarget=b,!Je.__hasExternalTextures){const U=Math.max(1,b.width>>J),ne=Math.max(1,b.height>>J);se===s.TEXTURE_3D||se===s.TEXTURE_2D_ARRAY?t.texImage3D(se,J,Te,U,ne,b.depth,0,we,ve,null):t.texImage2D(se,J,Te,U,ne,0,we,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),We(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,se,re.__webglTexture,0,Ge(b)):(se===s.TEXTURE_2D||se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,se,re.__webglTexture,J),t.bindFramebuffer(s.FRAMEBUFFER,null)}function te(D,b,X){if(s.bindRenderbuffer(s.RENDERBUFFER,D),b.depthBuffer){const ee=b.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,J=x(b.stencilBuffer,se),we=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=Ge(b);We(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,J,b.width,b.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,J,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,J,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,D)}else{const ee=b.textures;for(let se=0;se<ee.length;se++){const J=ee[se],we=r.convert(J.format,J.colorSpace),ve=r.convert(J.type),Te=v(J.internalFormat,we,ve,J.colorSpace),Je=Ge(b);X&&We(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Te,b.width,b.height):We(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je,Te,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Te,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xe(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(b.depthTexture);ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);const se=ee.__webglTexture,J=Ge(b);if(b.depthTexture.format===gr)We(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0);else if(b.depthTexture.format===Co)We(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ae(D){const b=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const ee=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){const se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",se)};ee.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=ee}if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");xe(b.__webglFramebuffer,D)}else if(X){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=s.createRenderbuffer(),te(b.__webglDepthbuffer[ee],D,!1);else{const se=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,J)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),te(b.__webglDepthbuffer,D,!1);else{const ee=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,se)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(D,b,X){const ee=n.get(D);b!==void 0&&oe(ee.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Ae(D)}function Ve(D){const b=D.texture,X=n.get(D),ee=n.get(b);D.addEventListener("dispose",A);const se=D.textures,J=D.isWebGLCubeRenderTarget===!0,we=se.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=b.version,o.memory.textures++),J){X.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[ve]=[];for(let Te=0;Te<b.mipmaps.length;Te++)X.__webglFramebuffer[ve][Te]=s.createFramebuffer()}else X.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let ve=0;ve<b.mipmaps.length;ve++)X.__webglFramebuffer[ve]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(we)for(let ve=0,Te=se.length;ve<Te;ve++){const Je=n.get(se[ve]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&We(D)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ve=0;ve<se.length;ve++){const Te=se[ve];X.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[ve]);const Je=r.convert(Te.format,Te.colorSpace),re=r.convert(Te.type),U=v(Te.internalFormat,Je,re,Te.colorSpace,D.isXRRenderTarget===!0),ne=Ge(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,U,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,X.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),te(X.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),fe(s.TEXTURE_CUBE_MAP,b);for(let ve=0;ve<6;ve++)if(b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)oe(X.__webglFramebuffer[ve][Te],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te);else oe(X.__webglFramebuffer[ve],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(b)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ve=0,Te=se.length;ve<Te;ve++){const Je=se[ve],re=n.get(Je);t.bindTexture(s.TEXTURE_2D,re.__webglTexture),fe(s.TEXTURE_2D,Je),oe(X.__webglFramebuffer,D,Je,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,0),m(Je)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ve=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,ee.__webglTexture),fe(ve,b),b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)oe(X.__webglFramebuffer[Te],D,b,s.COLOR_ATTACHMENT0,ve,Te);else oe(X.__webglFramebuffer,D,b,s.COLOR_ATTACHMENT0,ve,0);m(b)&&g(ve),t.unbindTexture()}D.depthBuffer&&Ae(D)}function Be(D){const b=D.textures;for(let X=0,ee=b.length;X<ee;X++){const se=b[X];if(m(se)){const J=y(D),we=n.get(se).__webglTexture;t.bindTexture(J,we),g(J),t.unbindTexture()}}}const ke=[],k=[];function Qe(D){if(D.samples>0){if(We(D)===!1){const b=D.textures,X=D.width,ee=D.height;let se=s.COLOR_BUFFER_BIT;const J=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(D),ve=b.length>1;if(ve)for(let Te=0;Te<b.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(se|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(se|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[Te]);const Je=n.get(b[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,X,ee,0,0,X,ee,se,s.NEAREST),l===!0&&(ke.length=0,k.length=0,ke.push(s.COLOR_ATTACHMENT0+Te),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ke.push(J),k.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let Te=0;Te<b.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,we.__webglColorRenderbuffer[Te]);const Je=n.get(b[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const b=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ge(D){return Math.min(i.maxSamples,D.samples)}function We(D){const b=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ee(D){const b=o.render.frame;u.get(D)!==b&&(u.set(D,b),D.update())}function tt(D,b){const X=D.colorSpace,ee=D.format,se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==ko&&X!==bs&&(Ye.getTransfer(X)===pt?(ee!==vn||se!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function Fe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=N,this.rebindTextures=be,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=We}function _0(s,e){function t(n,i=bs){let r;const o=Ye.getTransfer(i);if(n===Ni)return s.UNSIGNED_BYTE;if(n===Ld)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Bd)return s.UNSIGNED_SHORT_5_5_5_1;if(n===jg)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Qg)return s.BYTE;if(n===Kg)return s.SHORT;if(n===Ea)return s.UNSIGNED_SHORT;if(n===Fd)return s.INT;if(n===ai)return s.UNSIGNED_INT;if(n===li)return s.FLOAT;if(n===No)return s.HALF_FLOAT;if(n===Zg)return s.ALPHA;if(n===$g)return s.RGB;if(n===vn)return s.RGBA;if(n===Jg)return s.LUMINANCE;if(n===e0)return s.LUMINANCE_ALPHA;if(n===gr)return s.DEPTH_COMPONENT;if(n===Co)return s.DEPTH_STENCIL;if(n===t0)return s.RED;if(n===Ic)return s.RED_INTEGER;if(n===Ud)return s.RG;if(n===Od)return s.RG_INTEGER;if(n===fo)return s.RGBA_INTEGER;if(n===Nl||n===kl||n===zl||n===Hl)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Nl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Nl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gh||n===_h||n===vh||n===xh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_h)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yh||n===Sh||n===Ah)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yh||n===Sh)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ah)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mh||n===Th||n===Eh||n===Ch||n===bh||n===wh||n===Rh||n===Ih||n===Ph||n===Dh||n===Fh||n===Lh||n===Bh||n===Uh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Th)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ch)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ih)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ph)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vl||n===Oh||n===Nh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Vl)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===n0||n===kh||n===zh||n===Hh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Eo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class _E extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dr extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vE={type:"move"};class xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vE)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new ln,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yn({vertexShader:xE,fragmentShader:yE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new Ro(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AE extends Ws{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null;const _=new SE,m=t.getContextAttributes();let g=null,y=null;const v=[],x=[],E=new he;let T=null;const A=new gn;A.viewport=new Ze;const C=new gn;C.viewport=new Ze;const S=[A,C],M=new _E;let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=v[W];return K===void 0&&(K=new xu,v[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=v[W];return K===void 0&&(K=new xu,v[W]=K),K.getGripSpace()},this.getHand=function(W){let K=v[W];return K===void 0&&(K=new xu,v[W]=K),K.getHandSpace()};function P(W){const K=x.indexOf(W.inputSource);if(K===-1)return;const oe=v[K];oe!==void 0&&(oe.update(W.inputSource,W.frame,c||o),oe.dispatchEvent({type:W.type,data:W.inputSource}))}function F(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",B);for(let W=0;W<v.length;W++){const K=x[W];K!==null&&(x[W]=null,v[W].disconnect(K))}w=null,L=null,_.reset(),e.setRenderTarget(g),f=null,d=null,h=null,i=null,y=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",F),i.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new zs(f.framebufferWidth,f.framebufferHeight,{format:vn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,oe=null,te=null;m.depth&&(te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=m.stencil?Co:gr,oe=m.stencil?Eo:ai);const xe={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(xe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new zs(d.textureWidth,d.textureHeight,{format:vn,type:Ni,depthTexture:new Gd(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(W){for(let K=0;K<W.removed.length;K++){const oe=W.removed[K],te=x.indexOf(oe);te>=0&&(x[te]=null,v[te].disconnect(oe))}for(let K=0;K<W.added.length;K++){const oe=W.added[K];let te=x.indexOf(oe);if(te===-1){for(let Ae=0;Ae<v.length;Ae++)if(Ae>=x.length){x.push(oe),te=Ae;break}else if(x[Ae]===null){x[Ae]=oe,te=Ae;break}if(te===-1)break}const xe=v[te];xe&&xe.connect(oe)}}const O=new I,H=new I;function N(W,K,oe){O.setFromMatrixPosition(K.matrixWorld),H.setFromMatrixPosition(oe.matrixWorld);const te=O.distanceTo(H),xe=K.projectionMatrix.elements,Ae=oe.projectionMatrix.elements,be=xe[14]/(xe[10]-1),Ve=xe[14]/(xe[10]+1),Be=(xe[9]+1)/xe[5],ke=(xe[9]-1)/xe[5],k=(xe[8]-1)/xe[0],Qe=(Ae[8]+1)/Ae[0],Ge=be*k,We=be*Qe,Ee=te/(-k+Qe),tt=Ee*-k;if(K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(tt),W.translateZ(Ee),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),xe[10]===-1)W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Fe=be+Ee,D=Ve+Ee,b=Ge-tt,X=We+(te-tt),ee=Be*Ve/D*Fe,se=ke*Ve/D*Fe;W.projectionMatrix.makePerspective(b,X,ee,se,Fe,D),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function j(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let K=W.near,oe=W.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(oe=_.depthFar)),M.near=C.near=A.near=K,M.far=C.far=A.far=oe,(w!==M.near||L!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,L=M.far),A.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;const te=W.parent,xe=M.cameras;j(M,te);for(let Ae=0;Ae<xe.length;Ae++)j(xe[Ae],te);xe.length===2?N(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),ie(W,M,te)};function ie(W,K,oe){oe===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(oe.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=bo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ae=null;function fe(W,K){if(u=K.getViewerPose(c||o),p=K,u!==null){const oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let te=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,te=!0);for(let Ae=0;Ae<oe.length;Ae++){const be=oe[Ae];let Ve=null;if(f!==null)Ve=f.getViewport(be);else{const ke=h.getViewSubImage(d,be);Ve=ke.viewport,Ae===0&&(e.setRenderTargetTextures(y,ke.colorTexture,d.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(y))}let Be=S[Ae];Be===void 0&&(Be=new gn,Be.layers.enable(Ae),Be.viewport=new Ze,S[Ae]=Be),Be.matrix.fromArray(be.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(be.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Ae===0&&(M.matrix.copy(Be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),te===!0&&M.cameras.push(Be)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")){const Ae=h.getDepthInformation(oe[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,i.renderState)}}for(let oe=0;oe<v.length;oe++){const te=x[oe],xe=v[oe];te!==null&&xe!==void 0&&xe.update(te,K,c||o)}ae&&ae(W,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),p=null}const Se=new d0;Se.setAnimationLoop(fe),this.setAnimationLoop=function(W){ae=W},this.dispose=function(){}}}const tr=new Jt,ME=new ue;function TE(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,c0(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,v,x){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Rn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Rn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=e.get(g),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,tr.copy(x),tr.x*=-1,tr.y*=-1,tr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),m.envMapRotation.value.setFromMatrix4(ME.makeRotationFromEuler(tr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=v*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Rn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function EE(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=i[y.id];x===void 0&&(p(y),x=u(y),i[y.id]=x,y.addEventListener("dispose",m));const E=v.program;n.updateUBOMapping(y,E);const T=e.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function u(y){const v=h();y.__bindingPointIndex=v;const x=s.createBuffer(),E=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,E,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],x=y.uniforms,E=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,A=x.length;T<A;T++){const C=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,M=C.length;S<M;S++){const w=C[S];if(f(w,T,S,E)===!0){const L=w.__offset,P=Array.isArray(w.value)?w.value:[w.value];let F=0;for(let B=0;B<P.length;B++){const O=P[B],H=_(O);typeof O=="number"||typeof O=="boolean"?(w.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,L+F,w.__data)):O.isMatrix3?(w.__data[0]=O.elements[0],w.__data[1]=O.elements[1],w.__data[2]=O.elements[2],w.__data[3]=0,w.__data[4]=O.elements[3],w.__data[5]=O.elements[4],w.__data[6]=O.elements[5],w.__data[7]=0,w.__data[8]=O.elements[6],w.__data[9]=O.elements[7],w.__data[10]=O.elements[8],w.__data[11]=0):(O.toArray(w.__data,F),F+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,v,x,E){const T=y.value,A=v+"_"+x;if(E[A]===void 0)return typeof T=="number"||typeof T=="boolean"?E[A]=T:E[A]=T.clone(),!0;{const C=E[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return E[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function p(y){const v=y.uniforms;let x=0;const E=16;for(let A=0,C=v.length;A<C;A++){const S=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,w=S.length;M<w;M++){const L=S[M],P=Array.isArray(L.value)?L.value:[L.value];for(let F=0,B=P.length;F<B;F++){const O=P[F],H=_(O),N=x%E,j=N%H.boundary,ie=N+j;x+=j,ie!==0&&E-ie<H.storage&&(x+=E-ie),L.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=H.storage}}}const T=x%E;return T>0&&(x+=E-T),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function g(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}class v0{constructor(e={}){const{canvas:t=dy(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let m=null,g=null;const y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=Ls,this.toneMappingExposure=1;const x=this;let E=!1,T=0,A=0,C=null,S=-1,M=null;const w=new Ze,L=new Ze;let P=null;const F=new Ne(0);let B=0,O=t.width,H=t.height,N=1,j=null,ie=null;const ae=new Ze(0,0,O,H),fe=new Ze(0,0,O,H);let Se=!1;const W=new Hd;let K=!1,oe=!1;const te=new ue,xe=new ue,Ae=new I,be=new Ze,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ke(){return C===null?N:1}let k=n;function Qe(R,V){return t.getContext(R,V)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dd}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",pe,!1),k===null){const V="webgl2";if(k=Qe(V,R),k===null)throw Qe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ge,We,Ee,tt,Fe,D,b,X,ee,se,J,we,ve,Te,Je,re,U,ne,Me,de,Oe,ze,nt,z;function me(){Ge=new DM(k),Ge.init(),ze=new _0(k,Ge),We=new CM(k,Ge,e,ze),Ee=new pE(k,Ge),We.reverseDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),tt=new BM(k),Fe=new JT,D=new gE(k,Ge,Ee,Fe,We,ze,tt),b=new wM(x),X=new PM(x),ee=new Vy(k),nt=new TM(k,ee),se=new FM(k,ee,tt,nt),J=new OM(k,se,ee,tt),Me=new UM(k,We,D),re=new bM(Fe),we=new $T(x,b,X,Ge,We,nt,re),ve=new TE(x,Fe),Te=new tE,Je=new aE(Ge),ne=new MM(x,b,X,Ee,J,f,l),U=new dE(x,J,We),z=new EE(k,tt,We,Ee),de=new EM(k,Ge,tt),Oe=new LM(k,Ge,tt),tt.programs=we.programs,x.capabilities=We,x.extensions=Ge,x.properties=Fe,x.renderLists=Te,x.shadowMap=U,x.state=Ee,x.info=tt}me();const Q=new AE(x,k);this.xr=Q,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=Ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(R){R!==void 0&&(N=R,this.setSize(O,H,!1))},this.getSize=function(R){return R.set(O,H)},this.setSize=function(R,V,q=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,H=V,t.width=Math.floor(R*N),t.height=Math.floor(V*N),q===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(O*N,H*N).floor()},this.setDrawingBufferSize=function(R,V,q){O=R,H=V,N=q,t.width=Math.floor(R*q),t.height=Math.floor(V*q),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(ae)},this.setViewport=function(R,V,q,Y){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,V,q,Y),Ee.viewport(w.copy(ae).multiplyScalar(N).round())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,V,q,Y){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,V,q,Y),Ee.scissor(L.copy(fe).multiplyScalar(N).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){Ee.setScissorTest(Se=R)},this.setOpaqueSort=function(R){j=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(R=!0,V=!0,q=!0){let Y=0;if(R){let G=!1;if(C!==null){const ce=C.texture.format;G=ce===fo||ce===Od||ce===Ic}if(G){const ce=C.texture.type,ye=ce===Ni||ce===ai||ce===Ea||ce===Eo||ce===Ld||ce===Bd,Re=ne.getClearColor(),Ie=ne.getClearAlpha(),Xe=Re.r,qe=Re.g,Pe=Re.b;ye?(p[0]=Xe,p[1]=qe,p[2]=Pe,p[3]=Ie,k.clearBufferuiv(k.COLOR,0,p)):(_[0]=Xe,_[1]=qe,_[2]=Pe,_[3]=Ie,k.clearBufferiv(k.COLOR,0,_))}else Y|=k.COLOR_BUFFER_BIT}V&&(Y|=k.DEPTH_BUFFER_BIT),q&&(Y|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Te.dispose(),Je.dispose(),Fe.dispose(),b.dispose(),X.dispose(),J.dispose(),nt.dispose(),z.dispose(),we.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Ff),Q.removeEventListener("sessionend",Lf),Ks.stop()};function $(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=tt.autoReset,V=U.enabled,q=U.autoUpdate,Y=U.needsUpdate,G=U.type;me(),tt.autoReset=R,U.enabled=V,U.autoUpdate=q,U.needsUpdate=Y,U.type=G}function pe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function He(R){const V=R.target;V.removeEventListener("dispose",He),gt(V)}function gt(R){cn(R),Fe.remove(R)}function cn(R){const V=Fe.get(R).programs;V!==void 0&&(V.forEach(function(q){we.releaseProgram(q)}),R.isShaderMaterial&&we.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,q,Y,G,ce){V===null&&(V=Ve);const ye=G.isMesh&&G.matrixWorld.determinant()<0,Re=Q_(R,V,q,Y,G);Ee.setMaterial(Y,ye);let Ie=q.index,Xe=1;if(Y.wireframe===!0){if(Ie=se.getWireframeAttribute(q),Ie===void 0)return;Xe=2}const qe=q.drawRange,Pe=q.attributes.position;let ot=qe.start*Xe,xt=(qe.start+qe.count)*Xe;ce!==null&&(ot=Math.max(ot,ce.start*Xe),xt=Math.min(xt,(ce.start+ce.count)*Xe)),Ie!==null?(ot=Math.max(ot,0),xt=Math.min(xt,Ie.count)):Pe!=null&&(ot=Math.max(ot,0),xt=Math.min(xt,Pe.count));const At=xt-ot;if(At<0||At===1/0)return;nt.setup(G,Y,Re,q,Ie);let Cn,lt=de;if(Ie!==null&&(Cn=ee.get(Ie),lt=Oe,lt.setIndex(Cn)),G.isMesh)Y.wireframe===!0?(Ee.setLineWidth(Y.wireframeLinewidth*ke()),lt.setMode(k.LINES)):lt.setMode(k.TRIANGLES);else if(G.isLine){let Le=Y.linewidth;Le===void 0&&(Le=1),Ee.setLineWidth(Le*ke()),G.isLineSegments?lt.setMode(k.LINES):G.isLineLoop?lt.setMode(k.LINE_LOOP):lt.setMode(k.LINE_STRIP)}else G.isPoints?lt.setMode(k.POINTS):G.isSprite&&lt.setMode(k.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)lt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Le=G._multiDrawStarts,Xi=G._multiDrawCounts,ct=G._multiDrawCount,gi=Ie?ee.get(Ie).bytesPerElement:1,wr=Fe.get(Y).currentProgram.getUniforms();for(let Un=0;Un<ct;Un++)wr.setValue(k,"_gl_DrawID",Un),lt.render(Le[Un]/gi,Xi[Un])}else if(G.isInstancedMesh)lt.renderInstances(ot,At,G.count);else if(q.isInstancedBufferGeometry){const Le=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Xi=Math.min(q.instanceCount,Le);lt.renderInstances(ot,At,Xi)}else lt.render(ot,At)};function dt(R,V,q){R.transparent===!0&&R.side===ri&&R.forceSinglePass===!1?(R.side=Rn,R.needsUpdate=!0,Ja(R,V,q),R.side=Oi,R.needsUpdate=!0,Ja(R,V,q),R.side=ri):Ja(R,V,q)}this.compile=function(R,V,q=null){q===null&&(q=R),g=Je.get(q),g.init(V),v.push(g),q.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),R!==q&&R.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();const Y=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ce=G.material;if(ce)if(Array.isArray(ce))for(let ye=0;ye<ce.length;ye++){const Re=ce[ye];dt(Re,q,G),Y.add(Re)}else dt(ce,q,G),Y.add(ce)}),v.pop(),g=null,Y},this.compileAsync=function(R,V,q=null){const Y=this.compile(R,V,q);return new Promise(G=>{function ce(){if(Y.forEach(function(ye){Fe.get(ye).currentProgram.isReady()&&Y.delete(ye)}),Y.size===0){G(R);return}setTimeout(ce,10)}Ge.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let mi=null;function Wi(R){mi&&mi(R)}function Ff(){Ks.stop()}function Lf(){Ks.start()}const Ks=new d0;Ks.setAnimationLoop(Wi),typeof self<"u"&&Ks.setContext(self),this.setAnimationLoop=function(R){mi=R,Q.setAnimationLoop(R),R===null?Ks.stop():Ks.start()},Q.addEventListener("sessionstart",Ff),Q.addEventListener("sessionend",Lf),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(V),V=Q.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,V,C),g=Je.get(R,v.length),g.init(V),v.push(g),xe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),W.setFromProjectionMatrix(xe),oe=this.localClippingEnabled,K=re.init(this.clippingPlanes,oe),m=Te.get(R,y.length),m.init(),y.push(m),Q.enabled===!0&&Q.isPresenting===!0){const ce=x.xr.getDepthSensingMesh();ce!==null&&Gc(ce,V,-1/0,x.sortObjects)}Gc(R,V,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(j,ie),Be=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Be&&ne.addToRenderList(m,R),this.info.render.frame++,K===!0&&re.beginShadows();const q=g.state.shadowsArray;U.render(q,R,V),K===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,G=m.transmissive;if(g.setupLights(),V.isArrayCamera){const ce=V.cameras;if(G.length>0)for(let ye=0,Re=ce.length;ye<Re;ye++){const Ie=ce[ye];Uf(Y,G,R,Ie)}Be&&ne.render(R);for(let ye=0,Re=ce.length;ye<Re;ye++){const Ie=ce[ye];Bf(m,R,Ie,Ie.viewport)}}else G.length>0&&Uf(Y,G,R,V),Be&&ne.render(R),Bf(m,R,V);C!==null&&(D.updateMultisampleRenderTarget(C),D.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(x,R,V),nt.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(g=v[v.length-1],K===!0&&re.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Gc(R,V,q,Y){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||W.intersectsSprite(R)){Y&&be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xe);const ye=J.update(R),Re=R.material;Re.visible&&m.push(R,ye,Re,q,be.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||W.intersectsObject(R))){const ye=J.update(R),Re=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),be.copy(R.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),be.copy(ye.boundingSphere.center)),be.applyMatrix4(R.matrixWorld).applyMatrix4(xe)),Array.isArray(Re)){const Ie=ye.groups;for(let Xe=0,qe=Ie.length;Xe<qe;Xe++){const Pe=Ie[Xe],ot=Re[Pe.materialIndex];ot&&ot.visible&&m.push(R,ye,ot,q,be.z,Pe)}}else Re.visible&&m.push(R,ye,Re,q,be.z,null)}}const ce=R.children;for(let ye=0,Re=ce.length;ye<Re;ye++)Gc(ce[ye],V,q,Y)}function Bf(R,V,q,Y){const G=R.opaque,ce=R.transmissive,ye=R.transparent;g.setupLightsView(q),K===!0&&re.setGlobalState(x.clippingPlanes,q),Y&&Ee.viewport(w.copy(Y)),G.length>0&&$a(G,V,q),ce.length>0&&$a(ce,V,q),ye.length>0&&$a(ye,V,q),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Uf(R,V,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new zs(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?No:Ni,minFilter:hr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const ce=g.state.transmissionRenderTarget[Y.id],ye=Y.viewport||w;ce.setSize(ye.z,ye.w);const Re=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(F),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),Be&&ne.render(q);const Ie=x.toneMapping;x.toneMapping=Ls;const Xe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),K===!0&&re.setGlobalState(x.clippingPlanes,Y),$a(R,q,Y),D.updateMultisampleRenderTarget(ce),D.updateRenderTargetMipmap(ce),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Pe=0,ot=V.length;Pe<ot;Pe++){const xt=V[Pe],At=xt.object,Cn=xt.geometry,lt=xt.material,Le=xt.group;if(lt.side===ri&&At.layers.test(Y.layers)){const Xi=lt.side;lt.side=Rn,lt.needsUpdate=!0,Of(At,q,Y,Cn,lt,Le),lt.side=Xi,lt.needsUpdate=!0,qe=!0}}qe===!0&&(D.updateMultisampleRenderTarget(ce),D.updateRenderTargetMipmap(ce))}x.setRenderTarget(Re),x.setClearColor(F,B),Xe!==void 0&&(Y.viewport=Xe),x.toneMapping=Ie}function $a(R,V,q){const Y=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ce=R.length;G<ce;G++){const ye=R[G],Re=ye.object,Ie=ye.geometry,Xe=Y===null?ye.material:Y,qe=ye.group;Re.layers.test(q.layers)&&Of(Re,V,q,Ie,Xe,qe)}}function Of(R,V,q,Y,G,ce){R.onBeforeRender(x,V,q,Y,G,ce),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(x,V,q,Y,R,ce),G.transparent===!0&&G.side===ri&&G.forceSinglePass===!1?(G.side=Rn,G.needsUpdate=!0,x.renderBufferDirect(q,V,Y,G,R,ce),G.side=Oi,G.needsUpdate=!0,x.renderBufferDirect(q,V,Y,G,R,ce),G.side=ri):x.renderBufferDirect(q,V,Y,G,R,ce),R.onAfterRender(x,V,q,Y,G,ce)}function Ja(R,V,q){V.isScene!==!0&&(V=Ve);const Y=Fe.get(R),G=g.state.lights,ce=g.state.shadowsArray,ye=G.state.version,Re=we.getParameters(R,G.state,ce,V,q),Ie=we.getProgramCacheKey(Re);let Xe=Y.programs;Y.environment=R.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(R.isMeshStandardMaterial?X:b).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",He),Xe=new Map,Y.programs=Xe);let qe=Xe.get(Ie);if(qe!==void 0){if(Y.currentProgram===qe&&Y.lightsStateVersion===ye)return kf(R,Re),qe}else Re.uniforms=we.getUniforms(R),R.onBeforeCompile(Re,x),qe=we.acquireProgram(Re,Ie),Xe.set(Ie,qe),Y.uniforms=Re.uniforms;const Pe=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Pe.clippingPlanes=re.uniform),kf(R,Re),Y.needsLights=j_(R),Y.lightsStateVersion=ye,Y.needsLights&&(Pe.ambientLightColor.value=G.state.ambient,Pe.lightProbe.value=G.state.probe,Pe.directionalLights.value=G.state.directional,Pe.directionalLightShadows.value=G.state.directionalShadow,Pe.spotLights.value=G.state.spot,Pe.spotLightShadows.value=G.state.spotShadow,Pe.rectAreaLights.value=G.state.rectArea,Pe.ltc_1.value=G.state.rectAreaLTC1,Pe.ltc_2.value=G.state.rectAreaLTC2,Pe.pointLights.value=G.state.point,Pe.pointLightShadows.value=G.state.pointShadow,Pe.hemisphereLights.value=G.state.hemi,Pe.directionalShadowMap.value=G.state.directionalShadowMap,Pe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pe.spotShadowMap.value=G.state.spotShadowMap,Pe.spotLightMatrix.value=G.state.spotLightMatrix,Pe.spotLightMap.value=G.state.spotLightMap,Pe.pointShadowMap.value=G.state.pointShadowMap,Pe.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=qe,Y.uniformsList=null,qe}function Nf(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Gl.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function kf(R,V){const q=Fe.get(R);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function Q_(R,V,q,Y,G){V.isScene!==!0&&(V=Ve),D.resetTextureUnits();const ce=V.fog,ye=Y.isMeshStandardMaterial?V.environment:null,Re=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ko,Ie=(Y.isMeshStandardMaterial?X:b).get(Y.envMap||ye),Xe=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,qe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pe=!!q.morphAttributes.position,ot=!!q.morphAttributes.normal,xt=!!q.morphAttributes.color;let At=Ls;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(At=x.toneMapping);const Cn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,lt=Cn!==void 0?Cn.length:0,Le=Fe.get(Y),Xi=g.state.lights;if(K===!0&&(oe===!0||R!==M)){const $n=R===M&&Y.id===S;re.setState(Y,R,$n)}let ct=!1;Y.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Xi.state.version||Le.outputColorSpace!==Re||G.isBatchedMesh&&Le.batching===!1||!G.isBatchedMesh&&Le.batching===!0||G.isBatchedMesh&&Le.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Le.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Le.instancing===!1||!G.isInstancedMesh&&Le.instancing===!0||G.isSkinnedMesh&&Le.skinning===!1||!G.isSkinnedMesh&&Le.skinning===!0||G.isInstancedMesh&&Le.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Le.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Le.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Le.instancingMorph===!1&&G.morphTexture!==null||Le.envMap!==Ie||Y.fog===!0&&Le.fog!==ce||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==re.numPlanes||Le.numIntersection!==re.numIntersection)||Le.vertexAlphas!==Xe||Le.vertexTangents!==qe||Le.morphTargets!==Pe||Le.morphNormals!==ot||Le.morphColors!==xt||Le.toneMapping!==At||Le.morphTargetsCount!==lt)&&(ct=!0):(ct=!0,Le.__version=Y.version);let gi=Le.currentProgram;ct===!0&&(gi=Ja(Y,V,G));let wr=!1,Un=!1,qo=!1;const Mt=gi.getUniforms(),bi=Le.uniforms;if(Ee.useProgram(gi.program)&&(wr=!0,Un=!0,qo=!0),Y.id!==S&&(S=Y.id,Un=!0),wr||M!==R){Ee.buffers.depth.getReversed()?(te.copy(R.projectionMatrix),py(te),my(te),Mt.setValue(k,"projectionMatrix",te)):Mt.setValue(k,"projectionMatrix",R.projectionMatrix),Mt.setValue(k,"viewMatrix",R.matrixWorldInverse);const ms=Mt.map.cameraPosition;ms!==void 0&&ms.setValue(k,Ae.setFromMatrixPosition(R.matrixWorld)),We.logarithmicDepthBuffer&&Mt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Mt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,Un=!0,qo=!0)}if(G.isSkinnedMesh){Mt.setOptional(k,G,"bindMatrix"),Mt.setOptional(k,G,"bindMatrixInverse");const $n=G.skeleton;$n&&($n.boneTexture===null&&$n.computeBoneTexture(),Mt.setValue(k,"boneTexture",$n.boneTexture,D))}G.isBatchedMesh&&(Mt.setOptional(k,G,"batchingTexture"),Mt.setValue(k,"batchingTexture",G._matricesTexture,D),Mt.setOptional(k,G,"batchingIdTexture"),Mt.setValue(k,"batchingIdTexture",G._indirectTexture,D),Mt.setOptional(k,G,"batchingColorTexture"),G._colorsTexture!==null&&Mt.setValue(k,"batchingColorTexture",G._colorsTexture,D));const Yo=q.morphAttributes;if((Yo.position!==void 0||Yo.normal!==void 0||Yo.color!==void 0)&&Me.update(G,q,gi),(Un||Le.receiveShadow!==G.receiveShadow)&&(Le.receiveShadow=G.receiveShadow,Mt.setValue(k,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(bi.envMap.value=Ie,bi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(bi.envMapIntensity.value=V.environmentIntensity),Un&&(Mt.setValue(k,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&K_(bi,qo),ce&&Y.fog===!0&&ve.refreshFogUniforms(bi,ce),ve.refreshMaterialUniforms(bi,Y,N,H,g.state.transmissionRenderTarget[R.id]),Gl.upload(k,Nf(Le),bi,D)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Gl.upload(k,Nf(Le),bi,D),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Mt.setValue(k,"center",G.center),Mt.setValue(k,"modelViewMatrix",G.modelViewMatrix),Mt.setValue(k,"normalMatrix",G.normalMatrix),Mt.setValue(k,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const $n=Y.uniformsGroups;for(let ms=0,gs=$n.length;ms<gs;ms++){const zf=$n[ms];z.update(zf,gi),z.bind(zf,gi)}}return gi}function K_(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function j_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,V,q){Fe.get(R.texture).__webglTexture=V,Fe.get(R.depthTexture).__webglTexture=q;const Y=Fe.get(R);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const q=Fe.get(R);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,q=0){C=R,T=V,A=q;let Y=!0,G=null,ce=!1,ye=!1;if(R){const Ie=Fe.get(R);if(Ie.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(k.FRAMEBUFFER,null),Y=!1;else if(Ie.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Ie.__hasExternalTextures)D.rebindTextures(R,Fe.get(R.texture).__webglTexture,Fe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Pe=R.depthTexture;if(Ie.__boundDepthTexture!==Pe){if(Pe!==null&&Fe.has(Pe)&&(R.width!==Pe.image.width||R.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ye=!0);const qe=Fe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[V])?G=qe[V][q]:G=qe[V],ce=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?G=Fe.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?G=qe[q]:G=qe,w.copy(R.viewport),L.copy(R.scissor),P=R.scissorTest}else w.copy(ae).multiplyScalar(N).floor(),L.copy(fe).multiplyScalar(N).floor(),P=Se;if(Ee.bindFramebuffer(k.FRAMEBUFFER,G)&&Y&&Ee.drawBuffers(R,G),Ee.viewport(w),Ee.scissor(L),Ee.setScissorTest(P),ce){const Ie=Fe.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ie.__webglTexture,q)}else if(ye){const Ie=Fe.get(R.texture),Xe=V||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ie.__webglTexture,q||0,Xe)}S=-1},this.readRenderTargetPixels=function(R,V,q,Y,G,ce,ye){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){Ee.bindFramebuffer(k.FRAMEBUFFER,Re);try{const Ie=R.texture,Xe=Ie.format,qe=Ie.type;if(!We.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-Y&&q>=0&&q<=R.height-G&&k.readPixels(V,q,Y,G,ze.convert(Xe),ze.convert(qe),ce)}finally{const Ie=C!==null?Fe.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(R,V,q,Y,G,ce,ye){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){const Ie=R.texture,Xe=Ie.format,qe=Ie.type;if(!We.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=R.width-Y&&q>=0&&q<=R.height-G){Ee.bindFramebuffer(k.FRAMEBUFFER,Re);const Pe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Pe),k.bufferData(k.PIXEL_PACK_BUFFER,ce.byteLength,k.STREAM_READ),k.readPixels(V,q,Y,G,ze.convert(Xe),ze.convert(qe),0);const ot=C!==null?Fe.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(k.FRAMEBUFFER,ot);const xt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await fy(k,xt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Pe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ce),k.deleteBuffer(Pe),k.deleteSync(xt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,V=null,q=0){R.isTexture!==!0&&(ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1]);const Y=Math.pow(2,-q),G=Math.floor(R.image.width*Y),ce=Math.floor(R.image.height*Y),ye=V!==null?V.x:0,Re=V!==null?V.y:0;D.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,ye,Re,G,ce),Ee.unbindTexture()},this.copyTextureToTexture=function(R,V,q=null,Y=null,G=0){R.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1],V=arguments[2],G=arguments[3]||0,q=null);let ce,ye,Re,Ie,Xe,qe,Pe,ot,xt;const At=R.isCompressedTexture?R.mipmaps[G]:R.image;q!==null?(ce=q.max.x-q.min.x,ye=q.max.y-q.min.y,Re=q.isBox3?q.max.z-q.min.z:1,Ie=q.min.x,Xe=q.min.y,qe=q.isBox3?q.min.z:0):(ce=At.width,ye=At.height,Re=At.depth||1,Ie=0,Xe=0,qe=0),Y!==null?(Pe=Y.x,ot=Y.y,xt=Y.z):(Pe=0,ot=0,xt=0);const Cn=ze.convert(V.format),lt=ze.convert(V.type);let Le;V.isData3DTexture?(D.setTexture3D(V,0),Le=k.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(D.setTexture2DArray(V,0),Le=k.TEXTURE_2D_ARRAY):(D.setTexture2D(V,0),Le=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);const Xi=k.getParameter(k.UNPACK_ROW_LENGTH),ct=k.getParameter(k.UNPACK_IMAGE_HEIGHT),gi=k.getParameter(k.UNPACK_SKIP_PIXELS),wr=k.getParameter(k.UNPACK_SKIP_ROWS),Un=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,At.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,At.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ie),k.pixelStorei(k.UNPACK_SKIP_ROWS,Xe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,qe);const qo=R.isDataArrayTexture||R.isData3DTexture,Mt=V.isDataArrayTexture||V.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const bi=Fe.get(R),Yo=Fe.get(V),$n=Fe.get(bi.__renderTarget),ms=Fe.get(Yo.__renderTarget);Ee.bindFramebuffer(k.READ_FRAMEBUFFER,$n.__webglFramebuffer),Ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let gs=0;gs<Re;gs++)qo&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.get(R).__webglTexture,G,qe+gs),R.isDepthTexture?(Mt&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.get(V).__webglTexture,G,xt+gs),k.blitFramebuffer(Ie,Xe,ce,ye,Pe,ot,ce,ye,k.DEPTH_BUFFER_BIT,k.NEAREST)):Mt?k.copyTexSubImage3D(Le,G,Pe,ot,xt+gs,Ie,Xe,ce,ye):k.copyTexSubImage2D(Le,G,Pe,ot,xt+gs,Ie,Xe,ce,ye);Ee.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Mt?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Le,G,Pe,ot,xt,ce,ye,Re,Cn,lt,At.data):V.isCompressedArrayTexture?k.compressedTexSubImage3D(Le,G,Pe,ot,xt,ce,ye,Re,Cn,At.data):k.texSubImage3D(Le,G,Pe,ot,xt,ce,ye,Re,Cn,lt,At):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,G,Pe,ot,ce,ye,Cn,lt,At.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,G,Pe,ot,At.width,At.height,Cn,At.data):k.texSubImage2D(k.TEXTURE_2D,G,Pe,ot,ce,ye,Cn,lt,At);k.pixelStorei(k.UNPACK_ROW_LENGTH,Xi),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ct),k.pixelStorei(k.UNPACK_SKIP_PIXELS,gi),k.pixelStorei(k.UNPACK_SKIP_ROWS,wr),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Un),G===0&&V.generateMipmaps&&k.generateMipmap(Le),Ee.unbindTexture()},this.copyTextureToTexture3D=function(R,V,q=null,Y=null,G=0){return R.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,R=arguments[2],V=arguments[3],G=arguments[4]||0),ia('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,V,q,Y,G)},this.initRenderTarget=function(R){Fe.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Ee.unbindTexture()},this.resetState=function(){T=0,A=0,C=null,Ee.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ls}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}let x0=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};const tm=new I,nm=new Ze,im=new Ze,CE=new I,sm=new ue,Al=new I,yu=new zo,rm=new ue,Su=new Ho;class bE extends yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=np,this.bindMatrix=new ue,this.bindMatrixInverse=new ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ti),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Al),this.boundingBox.expandByPoint(Al)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zo),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Al),this.boundingSphere.expandByPoint(Al)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yu.copy(this.boundingSphere),yu.applyMatrix4(i),e.ray.intersectsSphere(yu)!==!1&&(rm.copy(i).invert(),Su.copy(e.ray).applyMatrix4(rm),!(this.boundingBox!==null&&Su.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Su)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===np?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ux?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;nm.fromBufferAttribute(i.attributes.skinIndex,e),im.fromBufferAttribute(i.attributes.skinWeight,e),tm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=im.getComponent(r);if(o!==0){const a=nm.getComponent(r);sm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(CE.copy(tm).applyMatrix4(sm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Wh extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ji extends ln{constructor(e=null,t=1,n=1,i,r,o,a,l,c=qn,u=qn,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const om=new ue,wE=new ue;class Wd{constructor(e=[],t=[]){this.uuid=Xs(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:wE;om.multiplyMatrices(a,t[r]),om.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Wd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ji(t,e,e,vn,li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Wh),this.bones.push(o),this.boneInverses.push(new ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class RE extends di{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class y0 extends qs{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oc=new I,ac=new I,am=new ue,$o=new Ho,Ml=new zo,Au=new I,lm=new I;class IE extends ht{constructor(e=new xn,t=new y0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)oc.fromBufferAttribute(t,i-1),ac.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=oc.distanceTo(ac);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ml.copy(n.boundingSphere),Ml.applyMatrix4(i),Ml.radius+=r,e.ray.intersectsSphere(Ml)===!1)return;am.copy(i).invert(),$o.copy(e.ray).applyMatrix4(am);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){const g=u.getX(_),y=u.getX(_+1),v=Tl(this,e,$o,l,g,y);v&&t.push(v)}if(this.isLineLoop){const _=u.getX(p-1),m=u.getX(f),g=Tl(this,e,$o,l,_,m);g&&t.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){const g=Tl(this,e,$o,l,_,_+1);g&&t.push(g)}if(this.isLineLoop){const _=Tl(this,e,$o,l,p-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Tl(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(oc.fromBufferAttribute(o,i),ac.fromBufferAttribute(o,r),t.distanceSqToSegment(oc,ac,Au,lm)>n)return;Au.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Au);if(!(l<e.near||l>e.far))return{distance:l,point:lm.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class PE{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new he:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],r=[],o=[],a=new I,l=new ue;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Qt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Qt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wa extends xn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let p=0;const _=[],m=n/2;let g=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(f,2));function y(){const x=new I,E=new I;let T=0;const A=(t-e)/n;for(let C=0;C<=r;C++){const S=[],M=C/r,w=M*(t-e)+e;for(let L=0;L<=i;L++){const P=L/i,F=P*l+a,B=Math.sin(F),O=Math.cos(F);E.x=w*B,E.y=-M*n+m,E.z=w*O,h.push(E.x,E.y,E.z),x.set(B,A,O).normalize(),d.push(x.x,x.y,x.z),f.push(P,1-M),S.push(p++)}_.push(S)}for(let C=0;C<i;C++)for(let S=0;S<r;S++){const M=_[S][C],w=_[S+1][C],L=_[S+1][C+1],P=_[S][C+1];(e>0||S!==0)&&(u.push(M,w,P),T+=3),(t>0||S!==r-1)&&(u.push(w,L,P),T+=3)}c.addGroup(g,T,0),g+=T}function v(x){const E=p,T=new he,A=new I;let C=0;const S=x===!0?e:t,M=x===!0?1:-1;for(let L=1;L<=i;L++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),p++;const w=p;for(let L=0;L<=i;L++){const F=L/i*l+a,B=Math.cos(F),O=Math.sin(F);A.x=S*O,A.y=m*M,A.z=S*B,h.push(A.x,A.y,A.z),d.push(0,M,0),T.x=B*.5+.5,T.y=O*.5*M+.5,f.push(T.x,T.y),p++}for(let L=0;L<i;L++){const P=E+L,F=w+L;x===!0?u.push(F,F+1,P):u.push(F+1,F,P),C+=3}c.addGroup(g,C,x===!0?1:2),g+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xd extends wa{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Xd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const DE={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=S0(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=OE(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let p=t;p<i;p+=t)h=s[p],d=s[p+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return Ra(r,o,t,a,l,f,0),o}};function S0(s,e,t,n,i){let r,o;if(i===QE(s,e,t,n)>0)for(r=e;r<t;r+=n)o=cm(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=cm(r,s[r],s[r+1],o);return o&&Bc(o,o.next)&&(Pa(o),o=o.next),o}function Sr(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Bc(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Pa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ra(s,e,t,n,i,r,o){if(!s)return;!o&&r&&VE(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?LE(s,n,i,r):FE(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Pa(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=BE(Sr(s),e,t),Ra(s,e,t,n,i,r,2)):o===2&&UE(s,e,t,n,i,r):Ra(Sr(s),e,t,n,i,r,1);break}}}function FE(s){const e=s.prev,t=s,n=s.next;if(Pt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&to(i,a,r,l,o,c,p.x,p.y)&&Pt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function LE(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Pt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=u<h?u<d?u:d:h<d?h:d,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,g=Xh(f,p,e,t,n),y=Xh(_,m,e,t,n);let v=s.prevZ,x=s.nextZ;for(;v&&v.z>=g&&x&&x.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&to(a,u,l,h,c,d,v.x,v.y)&&Pt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&to(a,u,l,h,c,d,x.x,x.y)&&Pt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&to(a,u,l,h,c,d,v.x,v.y)&&Pt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&to(a,u,l,h,c,d,x.x,x.y)&&Pt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function BE(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Bc(i,r)&&A0(i,n,n.next,r)&&Ia(i,r)&&Ia(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Pa(n),Pa(n.next),n=s=r),n=n.next}while(n!==s);return Sr(n)}function UE(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&XE(o,a)){let l=M0(o,a);o=Sr(o,o.next),l=Sr(l,l.next),Ra(o,e,t,n,i,r,0),Ra(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function OE(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=S0(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(WE(c));for(i.sort(NE),r=0;r<i.length;r++)t=kE(i[r],t);return t}function NE(s,e){return s.x-e.x}function kE(s,e){const t=zE(s,e);if(!t)return e;const n=M0(t,s);return Sr(n,n.next),Sr(t,t.next)}function zE(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&to(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Ia(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&HE(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function HE(s,e){return Pt(s.prev,s,e.prev)<0&&Pt(e.next,s,s.next)<0}function VE(s,e,t,n){let i=s;do i.z===0&&(i.z=Xh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,GE(i)}function GE(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Xh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function WE(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function to(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function XE(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!qE(s,e)&&(Ia(s,e)&&Ia(e,s)&&YE(s,e)&&(Pt(s.prev,s,e.prev)||Pt(s,e.prev,e))||Bc(s,e)&&Pt(s.prev,s,s.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Bc(s,e){return s.x===e.x&&s.y===e.y}function A0(s,e,t,n){const i=Cl(Pt(s,e,t)),r=Cl(Pt(s,e,n)),o=Cl(Pt(t,n,s)),a=Cl(Pt(t,n,e));return!!(i!==r&&o!==a||i===0&&El(s,t,e)||r===0&&El(s,n,e)||o===0&&El(t,s,n)||a===0&&El(t,e,n))}function El(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Cl(s){return s>0?1:s<0?-1:0}function qE(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&A0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ia(s,e){return Pt(s.prev,s,s.next)<0?Pt(s,e,s.next)>=0&&Pt(s,s.prev,e)>=0:Pt(s,e,s.prev)<0||Pt(s,s.next,e)<0}function YE(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function M0(s,e){const t=new qh(s.i,s.x,s.y),n=new qh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function cm(s,e,t,n){const i=new qh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Pa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function qh(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function QE(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class qd{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return qd.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];um(e),hm(n,e);let o=e.length;t.forEach(um);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,hm(n,t[l]);const a=DE.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function um(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function hm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Da extends xn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,d=new I,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const y=[],v=g/n;let x=0;g===0&&o===0?x=.5/t:g===n&&l===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){const T=E/t;h.x=-e*Math.cos(i+T*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(i+T*r)*Math.sin(o+v*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(T+x,1-v),y.push(c++)}u.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){const v=u[g][y+1],x=u[g][y],E=u[g+1][y],T=u[g+1][y+1];(g!==0||o>0)&&f.push(v,x,T),(g!==n-1||l<Math.PI)&&f.push(x,E,T)}this.setIndex(f),this.setAttribute("position",new Gt(p,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mu extends qs{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class T0 extends qs{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class KE extends qs{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function bl(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function jE(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ZE(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function dm(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function E0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Uc{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $E extends Uc{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ip,endingEnd:ip}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case sp:r=e,a=2*t-n;break;case rp:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sp:o=e,l=2*n-t;break;case rp:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,v=(-1-f)*m+(1.5+f)*_+.5*p,x=f*m-f*_;for(let E=0;E!==a;++E)r[E]=g*o[u+E]+y*o[c+E]+v*o[l+E]+x*o[h+E];return r}}class JE extends Uc{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class eC extends Uc{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Gi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bl(t,this.TimeBufferType),this.values=bl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bl(e.times,Array),values:bl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new eC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new JE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $E(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case sc:t=this.InterpolantFactoryMethodDiscrete;break;case Vh:t=this.InterpolantFactoryMethodLinear;break;case qc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sc;case this.InterpolantFactoryMethodLinear:return Vh;case this.InterpolantFactoryMethodSmooth:return qc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&jE(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){const _=t[h+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Gi.prototype.TimeBufferType=Float32Array;Gi.prototype.ValueBufferType=Float32Array;Gi.prototype.DefaultInterpolation=Vh;class Go extends Gi{constructor(e,t,n){super(e,t,n)}}Go.prototype.ValueTypeName="bool";Go.prototype.ValueBufferType=Array;Go.prototype.DefaultInterpolation=sc;Go.prototype.InterpolantFactoryMethodLinear=void 0;Go.prototype.InterpolantFactoryMethodSmooth=void 0;class C0 extends Gi{}C0.prototype.ValueTypeName="color";class Fa extends Gi{}Fa.prototype.ValueTypeName="number";class tC extends Uc{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)st.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Io extends Gi{InterpolantFactoryMethodLinear(e){return new tC(this.times,this.values,this.getValueSize(),e)}}Io.prototype.ValueTypeName="quaternion";Io.prototype.InterpolantFactoryMethodSmooth=void 0;class Wo extends Gi{constructor(e,t,n){super(e,t,n)}}Wo.prototype.ValueTypeName="string";Wo.prototype.ValueBufferType=Array;Wo.prototype.DefaultInterpolation=sc;Wo.prototype.InterpolantFactoryMethodLinear=void 0;Wo.prototype.InterpolantFactoryMethodSmooth=void 0;class La extends Gi{}La.prototype.ValueTypeName="vector";class nC{constructor(e="",t=-1,n=[],i=Nx){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Xs(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(sC(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Gi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=ZE(l);l=dm(l,1,u),c=dm(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Fa(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,p,_){if(f.length!==0){const m=[],g=[];E0(f,m,g,p),m.length!==0&&_.push(new h(d,m,g))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const m=[],g=[];for(let y=0;y!==d[p].morphTargets.length;++y){const v=d[p];m.push(v.time),g.push(v.morphTarget===_?1:0)}i.push(new Fa(".morphTargetInfluence["+_+"]",m,g))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(La,f+".position",d,"pos",i),n(Io,f+".quaternion",d,"rot",i),n(La,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function iC(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fa;case"vector":case"vector2":case"vector3":case"vector4":return La;case"color":return C0;case"quaternion":return Io;case"bool":case"boolean":return Go;case"string":return Wo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function sC(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=iC(s.type);if(s.times===void 0){const t=[],n=[];E0(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const lc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class rC{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}}const oC=new rC;class Ar{constructor(e){this.manager=e!==void 0?e:oC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ar.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zi={};class aC extends Error{constructor(e,t){super(e),this.response=t}}class lC extends Ar{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=lc.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zi[e]!==void 0){Zi[e].push({onLoad:t,onProgress:n,onError:i});return}Zi[e]=[],Zi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Zi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const m=new ReadableStream({start(g){y();function y(){h.read().then(({done:v,value:x})=>{if(v)g.close();else{_+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let T=0,A=u.length;T<A;T++){const C=u[T];C.onProgress&&C.onProgress(E)}g.enqueue(x),y()}},v=>{g.error(v)})}}});return new Response(m)}else throw new aC(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{lc.add(e,c);const u=Zi[e];delete Zi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Zi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Zi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class cC extends Ar{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=lc.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ca("img");function l(){u(),lc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class uC extends Ar{constructor(e){super(e)}load(e,t,n,i){const r=new ln,o=new cC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Oc extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Tu=new ue,fm=new I,pm=new I;class Yd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hd,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fm.setFromMatrixPosition(e.matrixWorld),t.position.copy(fm),pm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pm),t.updateMatrixWorld(),Tu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hC extends Yd{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=bo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dC extends Oc{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new hC}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const mm=new ue,Jo=new I,Eu=new I;class fC extends Yd{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Jo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jo),Eu.copy(n.position),Eu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Eu),n.updateMatrixWorld(),i.makeTranslation(-Jo.x,-Jo.y,-Jo.z),mm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mm)}}class gm extends Oc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class pC extends Yd{constructor(){super(new Fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mC extends Oc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new pC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gC extends Oc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _C{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class vC extends xn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Qd="\\[\\]\\.:\\/",xC=new RegExp("["+Qd+"]","g"),Kd="[^"+Qd+"]",yC="[^"+Qd.replace("\\.","")+"]",SC=/((?:WC+[\/:])*)/.source.replace("WC",Kd),AC=/(WCOD+)?/.source.replace("WCOD",yC),MC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kd),TC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kd),EC=new RegExp("^"+SC+AC+MC+TC+"$"),CC=["material","materials","bones","map"];class bC{constructor(e,t,n){const i=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xC,"")}static parseTrackName(e){const t=EC.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);CC.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=bC;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const _m=new ue;let b0=class{constructor(e,t,n=0,i=1/0){this.ray=new Ho(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new kd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _m.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_m),this}intersectObject(e,t=!0,n=[]){return Yh(e,this,n,t),n.sort(vm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Yh(e[i],this,n,t);return n.sort(vm),n}};function vm(s,e){return s.distance-e.distance}function Yh(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Yh(r[o],e,t,!0)}}class cc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}let wC=class extends Ws{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dd);const fr=[{id:"sallskapsrum",name:"Sällskapsrum",targetPosition:{x:-.75,y:0,z:1.1},lookAtPosition:{x:3.89,y:-.98,z:-.46}},{id:"vardagsrum",name:"Vardagsrum",targetPosition:{x:-4.13,y:0,z:1.55},lookAtPosition:{x:-4.54,y:-.19,z:6.53}},{id:"hall",name:"Hall",targetPosition:{x:-3.39,y:0,z:.6},lookAtPosition:{x:-8.05,y:.07,z:-1.21}},{id:"tavla",name:"Tavla",targetPosition:{x:3.48,y:0,z:-.08},lookAtPosition:{x:4.07,y:-.12,z:4.89}}];function es(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function w0(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Po={duration:.5,overwrite:!1,delay:0},jd,yn,wt,ci=1e8,St=1/ci,Qh=Math.PI*2,RC=Qh/4,IC=0,R0=Math.sqrt,PC=Math.cos,DC=Math.sin,tn=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},ds=function(e){return typeof e=="number"},Zd=function(e){return typeof e>"u"},ki=function(e){return typeof e=="object"},In=function(e){return e!==!1},$d=function(){return typeof window<"u"},wl=function(e){return Ut(e)||tn(e)},I0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Sn=Array.isArray,Kh=/(?:-?\.?\d|\.)+/gi,P0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,no=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Cu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,D0=/[+-]=-?[.\d]+/,F0=/[^,'"\[\]\s]+/gi,FC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,It,wi,jh,Jd,Kn={},uc={},L0,B0=function(e){return(uc=Mr(e,Kn))&&Bn},ef=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ba=function(e,t){return!t&&console.warn(e)},U0=function(e,t){return e&&(Kn[e]=t)&&uc&&(uc[e]=t)||Kn},Ua=function(){return 0},LC={suppressEvents:!0,isStart:!0,kill:!1},Wl={suppressEvents:!0,kill:!1},BC={suppressEvents:!0},tf={},Bs=[],Zh={},O0,Gn={},bu={},xm=30,Xl=[],nf="",sf=function(e){var t=e[0],n,i;if(ki(t)||Ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Xl.length;i--&&!Xl[i].targetTest(t););n=Xl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new a_(e[i],n)))||e.splice(i,1);return e},_r=function(e){return e._gsap||sf(ui(e))[0]._gsap},N0=function(e,t,n){return(n=e[t])&&Ut(n)?e[t]():Zd(n)&&e.getAttribute&&e.getAttribute(t)||n},Pn=function(e,t){return(e=e.split(",")).forEach(t)||e},Nt=function(e){return Math.round(e*1e5)/1e5||0},en=function(e){return Math.round(e*1e7)/1e7||0},mo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},UC=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},hc=function(){var e=Bs.length,t=Bs.slice(0),n,i;for(Zh={},Bs.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},k0=function(e,t,n,i){Bs.length&&!yn&&hc(),e.render(t,n,yn&&t<0&&(e._initted||e._startAt)),Bs.length&&!yn&&hc()},z0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(F0).length<2?t:tn(e)?e.trim():e},H0=function(e){return e},fi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},OC=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Mr=function(e,t){for(var n in t)e[n]=t[n];return e},ym=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ki(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},dc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ua=function(e){var t=e.parent||It,n=e.keyframes?OC(Sn(e.keyframes)):fi;if(In(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},NC=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},V0=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Nc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Vs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},kC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},$h=function(e,t,n,i){return e._startAt&&(yn?e._startAt.revert(Wl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},zC=function s(e){return!e||e._ts&&s(e.parent)},Sm=function(e){return e._repeat?Do(e._tTime,e=e.duration()+e._rDelay)*e:0},Do=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},fc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},kc=function(e){return e._end=en(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},zc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=en(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),kc(e),n._dirty||vr(n,e)),e},G0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=fc(e.rawTime(),t),(!t._dur||ja(0,t.totalDuration(),n)-t._tTime>St)&&t.render(n,!0)),vr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-St}},Ii=function(e,t,n,i){return t.parent&&Vs(t),t._start=en((ds(n)?n:n||e!==It?ei(e,n,t):e._time)+t._delay),t._end=en(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),V0(e,t,"_first","_last",e._sort?"_start":0),Jh(t)||(e._recent=t),i||G0(e,t),e._ts<0&&zc(e,e._tTime),e},W0=function(e,t){return(Kn.ScrollTrigger||ef("scrollTrigger",t))&&Kn.ScrollTrigger.create(t,e)},X0=function(e,t,n,i,r){if(of(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&O0!==Wn.frame)return Bs.push(e),e._lazy=[r,i],1},HC=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Jh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},VC=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&HC(e)&&!(!e._initted&&Jh(e))||(e._ts<0||e._dp._ts<0)&&!Jh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=ja(0,e._tDur,t),u=Do(l,a),e._yoyo&&u&1&&(o=1-o),u!==Do(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||yn||i||e._zTime===St||!t&&e._zTime){if(!e._initted&&X0(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?St:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&$h(e,t,n,!0),e._onUpdate&&!n&&Xn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Xn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Vs(e,1),!n&&!yn&&(Xn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},GC=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Fo=function(e,t,n,i){var r=e._repeat,o=en(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:en(o*(r+1)+e._rDelay*r):o,a>0&&!i&&zc(e,e._tTime=e._tDur*a),e.parent&&kc(e),n||vr(e.parent,e),e},Am=function(e){return e instanceof En?vr(e):Fo(e,e._dur)},WC={_start:0,endTime:Ua,totalDuration:Ua},ei=function s(e,t,n){var i=e.labels,r=e._recent||WC,o=e.duration()>=ci?r.endTime(!1):e._dur,a,l,c;return tn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Sn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ha=function(e,t,n){var i=ds(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=In(l.vars.inherit)&&l.parent;o.immediateRender=In(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Vt(t[0],o,t[r+1])},Qs=function(e,t){return e||e===0?t(e):t},ja=function(e,t,n){return n<e?e:n>t?t:n},_n=function(e,t){return!tn(e)||!(t=FC.exec(e))?"":t[1]},XC=function(e,t,n){return Qs(n,function(i){return ja(e,t,i)})},ed=[].slice,q0=function(e,t){return e&&ki(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ki(e[0]))&&!e.nodeType&&e!==wi},qC=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return tn(i)&&!t||q0(i,1)?(r=n).push.apply(r,ui(i)):n.push(i)})||n},ui=function(e,t,n){return wt&&!t&&wt.selector?wt.selector(e):tn(e)&&!n&&(jh||!Lo())?ed.call((t||Jd).querySelectorAll(e),0):Sn(e)?qC(e,n):q0(e)?ed.call(e,0):e?[e]:[]},td=function(e){return e=ui(e)[0]||Ba("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ui(t,n.querySelectorAll?n:n===e?Ba("Invalid scope")||Jd.createElement("div"):e)}},Y0=function(e){return e.sort(function(){return .5-Math.random()})},Q0=function(e){if(Ut(e))return e;var t=ki(e)?e:{each:e},n=xr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return tn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,p){var _=(p||t).length,m=o[_],g,y,v,x,E,T,A,C,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,ci])[1],!S){for(A=-ci;A<(A=p[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],g=l?Math.min(S,_)*u-.5:i%S,y=S===ci?0:l?_*h/S-.5:i/S|0,A=0,C=ci,T=0;T<_;T++)v=T%S-g,x=y-(T/S|0),m[T]=E=c?Math.abs(c==="y"?x:v):R0(v*v+x*x),E>A&&(A=E),E<C&&(C=E);i==="random"&&Y0(m),m.max=A-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=_n(t.amount||t.each)||0,n=n&&_<0?s_(n):n}return _=(m[d]-m.min)/m.max||0,en(m.b+(n?n(_):_)*m.v)+m.u}},nd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=en(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ds(n)?0:_n(n))}},K0=function(e,t){var n=Sn(e),i,r;return!n&&ki(e)&&(i=n=e.radius||ci,e.values?(e=ui(e.values),(r=!ds(e[0]))&&(i*=i)):e=nd(e.increment)),Qs(t,n?Ut(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=ci,u=0,h=e.length,d,f;h--;)r?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,r||u===o||ds(o)?u:u+_n(o)}:nd(e))},j0=function(e,t,n,i){return Qs(Sn(e)?!t:n===!0?!!(n=0):!i,function(){return Sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},YC=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},QC=function(e,t){return function(n){return e(parseFloat(n))+(t||_n(n))}},KC=function(e,t,n){return $0(e,t,0,1,n)},Z0=function(e,t,n){return Qs(n,function(i){return e[~~t(i)]})},jC=function s(e,t,n){var i=t-e;return Sn(e)?Z0(e,s(0,e.length),t):Qs(n,function(r){return(i+(r-e)%i)%i+e})},ZC=function s(e,t,n){var i=t-e,r=i*2;return Sn(e)?Z0(e,s(0,e.length-1),t):Qs(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Oa=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?F0:Kh),n+=e.substr(t,i-t)+j0(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},$0=function(e,t,n,i,r){var o=t-e,a=i-n;return Qs(r,function(l){return n+((l-e)/o*a||0)})},$C=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=tn(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Sn(e)&&!Sn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(p){p*=h;var _=Math.min(d,~~p);return u[_](p-_)},n=t}else i||(e=Mr(Sn(e)?[]:{},e));if(!u){for(l in t)rf.call(a,e,l,"get",t[l]);r=function(p){return cf(p,a)||(o?e.p:e)}}}return Qs(n,r)},Mm=function(e,t,n){var i=e.labels,r=ci,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Xn=function(e,t,n){var i=e.vars,r=i[t],o=wt,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Bs.length&&hc(),a&&(wt=a),u=l?r.apply(c,l):r.call(c),wt=o,u},ra=function(e){return Vs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&Xn(e,"onInterrupt"),e},io,J0=[],e_=function(e){if(e)if(e=!e.name&&e.default||e,$d()||e.headless){var t=e.name,n=Ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ua,render:cf,add:rf,kill:pb,modifier:fb,rawVars:0},o={targetTest:0,get:0,getSetter:lf,aliases:{},register:0};if(Lo(),e!==i){if(Gn[t])return;fi(i,fi(dc(e,r),o)),Mr(i.prototype,Mr(r,dc(e,o))),Gn[i.prop=t]=i,e.targetTest&&(Xl.push(i),tf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}U0(t,i),e.register&&e.register(Bn,i,Dn)}else J0.push(e)},_t=255,oa={aqua:[0,_t,_t],lime:[0,_t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_t],navy:[0,0,128],white:[_t,_t,_t],olive:[128,128,0],yellow:[_t,_t,0],orange:[_t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_t,0,0],pink:[_t,192,203],cyan:[0,_t,_t],transparent:[_t,_t,_t,0]},wu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*_t+.5|0},t_=function(e,t,n){var i=e?ds(e)?[e>>16,e>>8&_t,e&_t]:0:oa.black,r,o,a,l,c,u,h,d,f,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),oa[e])i=oa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&_t,i&_t,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&_t,e&_t]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Kh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=wu(l+1/3,r,o),i[1]=wu(l,r,o),i[2]=wu(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(P0),n&&i.length<4&&(i[3]=1),i}else i=e.match(Kh)||oa.transparent;i=i.map(Number)}return t&&!p&&(r=i[0]/_t,o=i[1]/_t,a=i[2]/_t,h=Math.max(r,o,a),d=Math.min(r,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===r?(o-a)/f+(o<a?6:0):h===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},n_=function(e){var t=[],n=[],i=-1;return e.split(Us).forEach(function(r){var o=r.match(no)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Tm=function(e,t,n){var i="",r=(e+i).match(Us),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(d){return(d=t_(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=n_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Us,"1").split(no),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Us),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},Us=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in oa)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),JC=/hsl[a]?\(/,i_=function(e){var t=e.join(" "),n;if(Us.lastIndex=0,Us.test(t))return n=JC.test(t),e[1]=Tm(e[1],n),e[0]=Tm(e[0],n,n_(e[1])),!0},Na,Wn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,d,f,p=function _(m){var g=s()-i,y=m===!0,v,x,E,T;if((g>e||g<0)&&(n+=g-t),i+=g,E=i-n,v=E-o,(v>0||y)&&(T=++h.frame,d=E-h.time*1e3,h.time=E=E/1e3,o+=v+(v>=r?4:r-v),x=1),y||(l=c(_)),x)for(f=0;f<a.length;f++)a[f](E,d,T,m)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){L0&&(!jh&&$d()&&(wi=jh=window,Jd=wi.document||{},Kn.gsap=Bn,(wi.gsapVersions||(wi.gsapVersions=[])).push(Bn.version),B0(uc||wi.GreenSockGlobals||!wi.gsap&&wi||{}),J0.forEach(e_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Na=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Na=0,c=Ua},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){r=1e3/(m||240),o=h.time*1e3+r},add:function(m,g,y){var v=g?function(x,E,T,A){m(x,E,T,A),h.remove(v)}:m;return h.remove(m),a[y?"unshift":"push"](v),Lo(),v},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},h}(),Lo=function(){return!Na&&Wn.wake()},it={},eb=/^[\d.\-M][\d.\-,\s]/,tb=/["']/g,nb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(tb,"").trim():+c,i=l.substr(a+1).trim();return t},ib=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},sb=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[nb(t[1])]:ib(e).split(",").map(z0)):it._CE&&eb.test(e)?it._CE("",e):n},s_=function(e){return function(t){return 1-e(1-t)}},r_=function s(e,t){for(var n=e._first,i;n;)n instanceof En?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},xr=function(e,t){return e&&(Ut(e)?e:it[e]||sb(e))||t},br=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Pn(e,function(a){it[a]=Kn[a]=r,it[o=a.toLowerCase()]=n;for(var l in r)it[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[a+"."+l]=r[l]}),r},o_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ru=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Qh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*DC((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:o_(a);return r=Qh/r,l.config=function(c,u){return s(e,c,u)},l},Iu=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:o_(n);return i.config=function(r){return s(e,r)},i};Pn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;br(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;br("Elastic",Ru("in"),Ru("out"),Ru());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};br("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);br("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});br("Circ",function(s){return-(R0(1-s*s)-1)});br("Sine",function(s){return s===1?1:-PC(s*RC)+1});br("Back",Iu("in"),Iu("out"),Iu());it.SteppedEase=it.steps=Kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-St;return function(a){return((i*ja(0,o,a)|0)+r)*n}}};Po.ease=it["quad.out"];Pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return nf+=s+","+s+"Params,"});var a_=function(e,t){this.id=IC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:N0,this.set=t?t.getSetter:lf},ka=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Fo(this,+t.duration,1,1),this.data=t.data,wt&&(this._ctx=wt,wt.data.push(this)),Na||Wn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Fo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Lo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(zc(this,n),!r._dp||r.parent||G0(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===St||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),k0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Do(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?fc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-St?0:this._rts,this.totalTime(ja(-Math.abs(this._delay),this._tDur,r),i!==!1),kc(this),kC(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Lo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==St&&(this._tTime-=St)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ii(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(In(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=BC);var i=yn;return yn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),yn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Am(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Am(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ei(this,n),In(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,In(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-St)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=Ut(n)?n:H0,a=function(){var c=i.then;i.then=null,Ut(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ra(this)},s}();fi(ka.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var En=function(s){w0(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=In(n.sortChildren),It&&Ii(n.parent||It,es(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&W0(es(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return ha(0,arguments,this),this},t.from=function(i,r,o){return ha(1,arguments,this),this},t.fromTo=function(i,r,o,a){return ha(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,ua(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Vt(i,r,ei(this,o),1),this},t.call=function(i,r,o){return Ii(this,Vt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Vt(i,o,ei(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,ua(o).immediateRender=In(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,ua(a).immediateRender=In(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:en(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,p,_,m,g,y,v,x,E,T,A;if(this!==It&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,x=this._start,v=this._ts,g=!v,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=en(u%m),u===l?(_=this._repeat,d=c):(_=~~(u/m),_&&_===u/m&&(d=c,_--),d>c&&(d=c)),E=Do(this._tTime,m),!a&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),T&&_&1&&(d=c-d,A=1),_!==E&&!this._lock){var C=T&&E&1,S=C===(T&&_&1);if(_<E&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(A?0:en(_*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Xn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;r_(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=GC(this,en(a),en(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!_&&(Xn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!g){y=0,p&&(u+=this._zTime=-St);break}}f=p}else{f=this._last;for(var M=i<0?i:d;f;){if(p=f._prev,(f._act||M<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(M-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(M-f._start)*f._ts,r,o||yn&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!g){y=0,p&&(u+=this._zTime=M?-St:St);break}}f=p}}if(y&&!r&&(this.pause(),y.render(d>=a?0:-St)._zTime=d>=a?1:-1,this._ts))return this._start=x,kc(this),this.render(i,r,o);this._onUpdate&&!r&&Xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Vs(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(Xn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(ds(r)||(r=ei(this,r,i)),!(i instanceof ka)){if(Sn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(tn(i))return this.addLabel(i,r);if(Ut(i))i=Vt.delayedCall(0,i);else return this}return this!==i?Ii(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-ci);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Vt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return tn(i)?this.removeLabel(i):Ut(i)?this.killTweensOf(i):(Nc(this,i),i===this._recent&&(this._recent=this._last),vr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=en(Wn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=ei(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Vt.delayedCall(0,r||Ua,o);return a.data="isPause",this._hasPause=1,Ii(this,a,ei(this,i))},t.removePause=function(i){var r=this._first;for(i=ei(this,i);r;)r._start===i&&r.data==="isPause"&&Vs(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ws!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=ui(i),l=this._first,c=ds(r),u;l;)l instanceof Vt?UC(l._targets,a)&&(c?(!ws||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=ei(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,p=Vt.to(o,fi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||St,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&Fo(p,m,0,1).render(p._time,!0,!0),f=1}u&&u.apply(p,h||[])}},r));return d?p.render(0):p},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,fi({startAt:{time:ei(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Mm(this,ei(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Mm(this,ei(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return vr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),vr(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=ci,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ii(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Fo(o,o===It&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(It._ts&&(k0(It,fc(i,It)),O0=Wn.frame),Wn.frame>=xm){xm+=Qn.autoSleep||120;var r=It._first;if((!r||!r._ts)&&Qn.autoSleep&&Wn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Wn.sleep()}}},e}(ka);fi(En.prototype,{_lock:0,_hasPause:0,_forcing:0});var rb=function(e,t,n,i,r,o,a){var l=new Dn(this._pt,e,t,0,1,f_,null,r),c=0,u=0,h,d,f,p,_,m,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Oa(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),d=n.match(Cu)||[];h=Cu.exec(i);)p=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?mo(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=Cu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(D0.test(i)||g)&&(l.e=0),this._pt=l,l},rf=function(e,t,n,i,r,o,a,l,c,u){Ut(i)&&(i=i(r||0,e,o));var h=e[t],d=n!=="get"?n:Ut(h)?c?e[t.indexOf("set")||!Ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Ut(h)?c?ub:h_:af,p;if(tn(i)&&(~i.indexOf("random(")&&(i=Oa(i)),i.charAt(1)==="="&&(p=mo(d,i)+(_n(d)||0),(p||p===0)&&(i=p))),!u||d!==i||id)return!isNaN(d*i)&&i!==""?(p=new Dn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?db:d_,0,f),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!h&&!(t in e)&&ef(t,i),rb.call(this,e,t,d,i,f,l||Qn.stringFilter,c))},ob=function(e,t,n,i,r){if(Ut(e)&&(e=da(e,r,t,n,i)),!ki(e)||e.style&&e.nodeType||Sn(e)||I0(e))return tn(e)?da(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=da(e[a],r,t,n,i);return o},l_=function(e,t,n,i,r,o){var a,l,c,u;if(Gn[e]&&(a=new Gn[e]).init(r,a.rawVars?t[e]:ob(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Dn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==io))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ws,id,of=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,y=g&&g.data==="nested"?g.vars.targets:m,v=e._overwrite==="auto"&&!jd,x=e.timeline,E,T,A,C,S,M,w,L,P,F,B,O,H;if(x&&(!d||!r)&&(r="none"),e._ease=xr(r,Po.ease),e._yEase=h?s_(xr(h===!0?r:h,Po.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(L=m[0]?_r(m[0]).harness:0,O=L&&i[L.prop],E=dc(i,tf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&p?Wl:LC),_._lazy=0),o){if(Vs(e._startAt=Vt.set(m,fi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&In(l),startAt:null,delay:0,onUpdate:c&&function(){return Xn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!a&&!f)&&e._startAt.revert(Wl),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!_){if(t&&(a=!1),A=fi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&In(l),immediateRender:a,stagger:0,parent:g},E),O&&(A[L.prop]=O),Vs(e._startAt=Vt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(Wl):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&In(l)||l&&!p,T=0;T<m.length;T++){if(S=m[T],w=S._gsap||sf(m)[T]._gsap,e._ptLookup[T]=F={},Zh[w.id]&&Bs.length&&hc(),B=y===m?T:y.indexOf(S),L&&(P=new L).init(S,O||E,e,B,y)!==!1&&(e._pt=C=new Dn(e._pt,S,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(N){F[N]=C}),P.priority&&(M=1)),!L||O)for(A in E)Gn[A]&&(P=l_(A,E,e,B,S,y))?P.priority&&(M=1):F[A]=C=rf.call(e,S,A,"get",E[A],B,y,0,i.stringFilter);e._op&&e._op[T]&&e.kill(S,e._op[T]),v&&e._pt&&(ws=e,It.killTweensOf(S,F,e.globalTime(t)),H=!e.parent,ws=0),e._pt&&l&&(Zh[w.id]=1)}M&&p_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,d&&t<=0&&x.render(ci,!0,!0)},ab=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return id=1,e.vars[t]="+=0",of(e,a),id=0,l?Ba(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Nt(n)+_n(h.e)),h.b&&(h.b=u.s+_n(h.b))},lb=function(e,t){var n=e[0]?_r(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Mr({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},cb=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(Sn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},da=function(e,t,n,i,r){return Ut(e)?e.call(t,n,i,r):tn(e)&&~e.indexOf("random(")?Oa(e):e},c_=nf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",u_={};Pn(c_+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return u_[s]=1});var Vt=function(s){w0(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:ua(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,y=i.parent||It,v=(Sn(n)||I0(n)?ds(n[0]):"length"in i)?[n]:ui(n),x,E,T,A,C,S,M,w;if(a._targets=v.length?sf(v):Ba("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||d||wl(c)||wl(u)){if(i=a.vars,x=a.timeline=new En({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),x.kill(),x.parent=x._dp=es(a),x._start=0,d||wl(c)||wl(u)){if(A=v.length,M=d&&Q0(d),ki(d))for(C in d)~c_.indexOf(C)&&(w||(w={}),w[C]=d[C]);for(E=0;E<A;E++)T=dc(i,u_),T.stagger=0,g&&(T.yoyoEase=g),w&&Mr(T,w),S=v[E],T.duration=+da(c,es(a),E,S,v),T.delay=(+da(u,es(a),E,S,v)||0)-a._delay,!d&&A===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),x.to(S,T,M?M(E,S,v):0),x._ease=it.none;x.duration()?c=u=0:a.timeline=0}else if(p){ua(fi(x.vars.defaults,{ease:"none"})),x._ease=xr(p.ease||i.ease||"none");var L=0,P,F,B;if(Sn(p))p.forEach(function(O){return x.to(v,O,">")}),x.duration();else{T={};for(C in p)C==="ease"||C==="easeEach"||cb(C,p[C],T,p.easeEach);for(C in T)for(P=T[C].sort(function(O,H){return O.t-H.t}),L=0,E=0;E<P.length;E++)F=P[E],B={ease:F.e,duration:(F.t-(E?P[E-1].t:0))/100*c},B[C]=F.v,x.to(v,B,L),L+=B.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return f===!0&&!jd&&(ws=es(a),It.killTweensOf(v),ws=0),Ii(y,es(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!p&&a._start===en(y._time)&&In(h)&&zC(es(a))&&y.data!=="nested")&&(a._tTime=-St,a.render(Math.max(0,-u)||0)),m&&W0(es(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-St&&!u?l:i<St?0:i,d,f,p,_,m,g,y,v,x;if(!c)VC(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,o);if(d=en(h%_),h===l?(p=this._repeat,d=c):(p=~~(h/_),p&&p===en(h/_)&&(d=c,p--),d>c&&(d=c)),g=this._yoyo&&p&1,g&&(x=this._yEase,d=c-d),m=Do(this._tTime,_),d===a&&!o&&this._initted&&p===m)return this._tTime=h,this;p!==m&&(v&&this._yEase&&r_(v,g),this.vars.repeatRefresh&&!g&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(en(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(X0(this,u?i:d,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!a&&!r&&!p&&(Xn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&$h(this,i,r,o),Xn(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&Xn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&$h(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Vs(this,1),!r&&!(u&&!a)&&(h||a||g)&&(Xn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){Na||Wn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||of(this,c),u=this._ease(c/this._dur),ab(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(zc(this,0),this.parent||V0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ra(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ws&&ws.vars.overwrite!==!0)._first||ra(this),this.parent&&o!==this.timeline.totalDuration()&&Fo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ui(i):a,c=this._ptLookup,u=this._pt,h,d,f,p,_,m,g;if((!r||r==="all")&&NC(a,l))return r==="all"&&(this._pt=0),ra(this);for(h=this._op=this._op||[],r!=="all"&&(tn(r)&&(_={},Pn(r,function(y){return _[y]=1}),r=_),r=lb(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){d=c[g],r==="all"?(h[g]=r,p=d,f={}):(f=h[g]=h[g]||{},p=r);for(_ in p)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Nc(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&ra(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return ha(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return ha(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return It.killTweensOf(i,r,o)},e}(ka);fi(Vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pn("staggerTo,staggerFrom,staggerFromTo",function(s){Vt[s]=function(){var e=new En,t=ed.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var af=function(e,t,n){return e[t]=n},h_=function(e,t,n){return e[t](n)},ub=function(e,t,n,i){return e[t](i.fp,n)},hb=function(e,t,n){return e.setAttribute(t,n)},lf=function(e,t){return Ut(e[t])?h_:Zd(e[t])&&e.setAttribute?hb:af},d_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},db=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},f_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},cf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},fb=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},pb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Nc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},mb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},p_=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Dn=function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||d_,this.d=l||this,this.set=c||af,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=mb,this.m=n,this.mt=r,this.tween=i},s}();Pn(nf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return tf[s]=1});Kn.TweenMax=Kn.TweenLite=Vt;Kn.TimelineLite=Kn.TimelineMax=En;It=new En({sortChildren:!1,defaults:Po,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=i_;var yr=[],ql={},gb=[],Em=0,_b=0,Pu=function(e){return(ql[e]||gb).map(function(t){return t()})},sd=function(){var e=Date.now(),t=[];e-Em>2&&(Pu("matchMediaInit"),yr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=wi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Pu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Em=e,Pu("matchMedia"))},m_=function(){function s(t,n){this.selector=n&&td(n),this.data=[],this._r=[],this.isReverted=!1,this.id=_b++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Ut(n)&&(r=i,i=n,n=Ut);var o=this,a=function(){var c=wt,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=td(r)),wt=o,h=i.apply(o,arguments),Ut(h)&&o._r.push(h),wt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ut?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=wt;wt=null,n(this),wt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Vt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof En?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Vt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=yr.length;o--;)yr[o].id===this.id&&yr.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),vb=function(){function s(t){this.contexts=[],this.scope=t,wt&&wt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){ki(n)||(n={matches:n});var o=new m_(0,r||this.scope),a=o.conditions={},l,c,u;wt&&!o.selector&&(o.selector=wt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=wi.matchMedia(n[c]),l&&(yr.indexOf(o)<0&&yr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(sd):l.addEventListener("change",sd)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),pc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return e_(i)})},timeline:function(e){return new En(e)},getTweensOf:function(e,t){return It.getTweensOf(e,t)},getProperty:function(e,t,n,i){tn(e)&&(e=ui(e)[0]);var r=_r(e||{}).get,o=n?H0:z0;return n==="native"&&(n=""),e&&(t?o((Gn[t]&&Gn[t].get||r)(e,t,n,i)):function(a,l,c){return o((Gn[a]&&Gn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ui(e),e.length>1){var i=e.map(function(u){return Bn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=Gn[t],a=_r(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;io._pt=0,h.init(e,n?u+n:u,io,0,[e]),h.render(1,h),io._pt&&cf(1,io)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Bn.to(e,Mr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return It.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xr(e.ease,Po.ease)),ym(Po,e||{})},config:function(e){return ym(Qn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Gn[a]&&!Kn[a]&&Ba(t+" effect requires "+a+" plugin.")}),bu[t]=function(a,l,c){return n(ui(a),fi(l||{},r),c)},o&&(En.prototype[t]=function(a,l,c){return this.add(bu[t](a,ki(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=xr(t)},parseEase:function(e,t){return arguments.length?xr(e,t):it},getById:function(e){return It.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new En(e),i,r;for(n.smoothChildTiming=In(e.smoothChildTiming),It.remove(n),n._dp=0,n._time=n._tTime=It._time,i=It._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Vt&&i.vars.onComplete===i._targets[0]))&&Ii(n,i,i._start-i._delay),i=r;return Ii(It,n,0),n},context:function(e,t){return e?new m_(e,t):wt},matchMedia:function(e){return new vb(e)},matchMediaRefresh:function(){return yr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||sd()},addEventListener:function(e,t){var n=ql[e]||(ql[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ql[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:jC,wrapYoyo:ZC,distribute:Q0,random:j0,snap:K0,normalize:KC,getUnit:_n,clamp:XC,splitColor:t_,toArray:ui,selector:td,mapRange:$0,pipe:YC,unitize:QC,interpolate:$C,shuffle:Y0},install:B0,effects:bu,ticker:Wn,updateRoot:En.updateRoot,plugins:Gn,globalTimeline:It,core:{PropTween:Dn,globals:U0,Tween:Vt,Timeline:En,Animation:ka,getCache:_r,_removeLinkedListItem:Nc,reverting:function(){return yn},context:function(e){return e&&wt&&(wt.data.push(e),e._ctx=wt),wt},suppressOverwrites:function(e){return jd=e}}};Pn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return pc[s]=Vt[s]});Wn.add(En.updateRoot);io=pc.to({},{duration:0});var xb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},yb=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=xb(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Du=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(tn(r)&&(l={},Pn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}yb(a,r)}}}},Bn=pc.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)yn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Du("roundProps",nd),Du("modifiers"),Du("snap",K0))||pc;Vt.version=En.version=Bn.version="3.12.5";L0=1;$d()&&Lo();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Cm,Rs,go,uf,pr,bm,hf,Sb=function(){return typeof window<"u"},fs={},rr=180/Math.PI,_o=Math.PI/180,Wr=Math.atan2,wm=1e8,df=/([A-Z])/g,Ab=/(left|right|width|margin|padding|x)/i,Mb=/[\s,\(]\S/,Di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Tb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Eb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Cb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},g_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},__=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},bb=function(e,t,n){return e.style[t]=n},wb=function(e,t,n){return e.style.setProperty(t,n)},Rb=function(e,t,n){return e._gsap[t]=n},Ib=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Pb=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Db=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Dt="transform",Fn=Dt+"Origin",Fb=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in fs&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=is(i,a)}):this.tfm[e]=o.x?o[e]:is(i,e),e===Fn&&(this.tfm.zOrigin=o.zOrigin);else return Di.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Dt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Fn,t,"")),e=Dt}(r||t)&&this.props.push(e,t,r[e])},v_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Lb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(df,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=hf(),(!r||!r.isStart)&&!n[Dt]&&(v_(n),i.zOrigin&&n[Fn]&&(n[Fn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},x_=function(e,t){var n={target:e,props:[],revert:Lb,save:Fb};return e._gsap||Bn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},y_,od=function(e,t){var n=Rs.createElementNS?Rs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Rs.createElement(e);return n&&n.style?n:Rs.createElement(e)},Ui=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(df,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Bo(t)||t,1)||""},Rm="O,Moz,ms,Ms,Webkit".split(","),Bo=function(e,t,n){var i=t||pr,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Rm[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Rm[o]:"")+e},ad=function(){Sb()&&window.document&&(Cm=window,Rs=Cm.document,go=Rs.documentElement,pr=od("div")||{style:{}},od("div"),Dt=Bo(Dt),Fn=Dt+"Origin",pr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",y_=!!Bo("perspective"),hf=Bn.core.reverting,uf=1)},Fu=function s(e){var t=od("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(go.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),go.removeChild(t),this.style.cssText=r,o},Im=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},S_=function(e){var t;try{t=e.getBBox()}catch{t=Fu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Fu||(t=Fu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Im(e,["x","cx","x1"])||0,y:+Im(e,["y","cy","y1"])||0,width:0,height:0}:t},A_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&S_(e))},Tr=function(e,t){if(t){var n=e.style,i;t in fs&&t!==Fn&&(t=Dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(df,"-$1").toLowerCase())):n.removeAttribute(t)}},Is=function(e,t,n,i,r,o){var a=new Dn(e._pt,t,n,0,1,o?__:g_);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Pm={deg:1,rad:1,turn:1},Bb={grid:1,flex:1},Gs=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=pr.style,l=Ab.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",p,_,m,g;if(i===o||!r||Pm[i]||Pm[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),g=e.getCTM&&A_(e),(f||o==="%")&&(fs[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[u],Nt(f?r/p*h:r/100*p);if(a[l?"width":"height"]=h+(d?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Rs||!_.appendChild)&&(_=Rs.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Wn.time&&!m.uncache)return Nt(r/m.width*h);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+i,p=e[u],y?e.style[t]=y:Tr(e,t)}else(f||o==="%")&&!Bb[Ui(_,"display")]&&(a.position=Ui(e,"position")),_===e&&(a.position="static"),_.appendChild(pr),p=pr[u],_.removeChild(pr),a.position="absolute";return l&&f&&(m=_r(_),m.time=Wn.time,m.width=_[u]),Nt(d?p*r/h:p&&r?h/p*r:0)},is=function(e,t,n,i){var r;return uf||ad(),t in Di&&t!=="transform"&&(t=Di[t],~t.indexOf(",")&&(t=t.split(",")[0])),fs[t]&&t!=="transform"?(r=Ha(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:gc(Ui(e,Fn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=mc[t]&&mc[t](e,t,n)||Ui(e,t)||N0(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Gs(e,t,r,n)+n:r},Ub=function(e,t,n,i){if(!n||n==="none"){var r=Bo(t,e,1),o=r&&Ui(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Ui(e,"borderTopColor"))}var a=new Dn(this._pt,e.style,t,0,1,f_),l=0,c=0,u,h,d,f,p,_,m,g,y,v,x,E;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ui(e,t)||i,_?e.style[t]=_:Tr(e,t)),u=[n,i],i_(u),n=u[0],i=u[1],d=n.match(no)||[],E=i.match(no)||[],E.length){for(;h=no.exec(i);)m=h[0],y=i.substring(l,h.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=mo(f,m)+x),g=parseFloat(m),v=m.substr((g+"").length),l=no.lastIndex-v.length,v||(v=v||Qn.units[t]||x,l===i.length&&(i+=v,a.e+=v)),x!==v&&(f=Gs(e,t,_,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:f,c:g-f,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?__:g_;return D0.test(i)&&(a.e=0),this._pt=a,a},Dm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ob=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Dm[n]||n,t[1]=Dm[i]||i,t.join(" ")},Nb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],fs[a]&&(l=1,a=a==="transformOrigin"?Fn:Dt),Tr(n,a);l&&(Tr(n,Dt),o&&(o.svg&&n.removeAttribute("transform"),Ha(n,1),o.uncache=1,v_(i)))}},mc={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Dn(e._pt,t,n,0,0,Nb);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},za=[1,0,0,1,0,0],M_={},T_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Fm=function(e){var t=Ui(e,Dt);return T_(t)?za:t.substr(7).match(P0).map(Nt)},ff=function(e,t){var n=e._gsap||_r(e),i=e.style,r=Fm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?za:r):(r===za&&!e.offsetParent&&e!==go&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,go.appendChild(e)),r=Fm(e),l?i.display=l:Tr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):go.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ld=function(e,t,n,i,r,o){var a=e._gsap,l=r||ff(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],p=l[1],_=l[2],m=l[3],g=l[4],y=l[5],v=t.split(" "),x=parseFloat(v[0])||0,E=parseFloat(v[1])||0,T,A,C,S;n?l!==za&&(A=f*m-p*_)&&(C=x*(m/A)+E*(-_/A)+(_*y-m*g)/A,S=x*(-p/A)+E*(f/A)-(f*y-p*g)/A,x=C,E=S):(T=S_(e),x=T.x+(~v[0].indexOf("%")?x/100*T.width:x),E=T.y+(~(v[1]||v[0]).indexOf("%")?E/100*T.height:E)),i||i!==!1&&a.smooth?(g=x-c,y=E-u,a.xOffset=h+(g*f+y*_)-g,a.yOffset=d+(g*p+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Fn]="0px 0px",o&&(Is(o,a,"xOrigin",c,x),Is(o,a,"yOrigin",u,E),Is(o,a,"xOffset",h,a.xOffset),Is(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+E)},Ha=function(e,t){var n=e._gsap||new a_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ui(e,Fn)||"0",u,h,d,f,p,_,m,g,y,v,x,E,T,A,C,S,M,w,L,P,F,B,O,H,N,j,ie,ae,fe,Se,W,K;return u=h=d=_=m=g=y=v=x=0,f=p=1,n.svg=!!(e.getCTM&&A_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Dt]!=="none"?l[Dt]:"")),i.scale=i.rotate=i.translate="none"),A=ff(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+"px "+(n.yOrigin-N.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),ld(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,A)),E=n.xOrigin||0,T=n.yOrigin||0,A!==za&&(w=A[0],L=A[1],P=A[2],F=A[3],u=B=A[4],h=O=A[5],A.length===6?(f=Math.sqrt(w*w+L*L),p=Math.sqrt(F*F+P*P),_=w||L?Wr(L,w)*rr:0,y=P||F?Wr(P,F)*rr+_:0,y&&(p*=Math.abs(Math.cos(y*_o))),n.svg&&(u-=E-(E*w+T*P),h-=T-(E*L+T*F))):(K=A[6],Se=A[7],ie=A[8],ae=A[9],fe=A[10],W=A[11],u=A[12],h=A[13],d=A[14],C=Wr(K,fe),m=C*rr,C&&(S=Math.cos(-C),M=Math.sin(-C),H=B*S+ie*M,N=O*S+ae*M,j=K*S+fe*M,ie=B*-M+ie*S,ae=O*-M+ae*S,fe=K*-M+fe*S,W=Se*-M+W*S,B=H,O=N,K=j),C=Wr(-P,fe),g=C*rr,C&&(S=Math.cos(-C),M=Math.sin(-C),H=w*S-ie*M,N=L*S-ae*M,j=P*S-fe*M,W=F*M+W*S,w=H,L=N,P=j),C=Wr(L,w),_=C*rr,C&&(S=Math.cos(C),M=Math.sin(C),H=w*S+L*M,N=B*S+O*M,L=L*S-w*M,O=O*S-B*M,w=H,B=N),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),f=Nt(Math.sqrt(w*w+L*L+P*P)),p=Nt(Math.sqrt(O*O+K*K)),C=Wr(B,O),y=Math.abs(C)>2e-4?C*rr:0,x=W?1/(W<0?-W:W):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!T_(Ui(e,Dt)),H&&e.setAttribute("transform",H))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Nt(f),n.scaleY=Nt(p),n.rotation=Nt(_)+a,n.rotationX=Nt(m)+a,n.rotationY=Nt(g)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Fn]=gc(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?zb:y_?E_:kb,n.uncache=0,n},gc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Lu=function(e,t,n){var i=_n(t);return Nt(parseFloat(t)+parseFloat(Gs(e,"x",n+"px",i)))+i},kb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,E_(e,t)},nr="0deg",ea="0px",ir=") ",E_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,y=n.target,v=n.zOrigin,x="",E=g==="auto"&&e&&e!==1||g===!0;if(v&&(h!==nr||u!==nr)){var T=parseFloat(u)*_o,A=Math.sin(T),C=Math.cos(T),S;T=parseFloat(h)*_o,S=Math.cos(T),o=Lu(y,o,A*S*-v),a=Lu(y,a,-Math.sin(T)*-v),l=Lu(y,l,C*S*-v+v)}m!==ea&&(x+="perspective("+m+ir),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(E||o!==ea||a!==ea||l!==ea)&&(x+=l!==ea||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ir),c!==nr&&(x+="rotate("+c+ir),u!==nr&&(x+="rotateY("+u+ir),h!==nr&&(x+="rotateX("+h+ir),(d!==nr||f!==nr)&&(x+="skew("+d+", "+f+ir),(p!==1||_!==1)&&(x+="scale("+p+", "+_+ir),y.style[Dt]=x||"translate(0, 0)"},zb=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,y=n.forceCSS,v=parseFloat(o),x=parseFloat(a),E,T,A,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=_o,c*=_o,E=Math.cos(l)*h,T=Math.sin(l)*h,A=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=_o,S=Math.tan(c-u),S=Math.sqrt(1+S*S),A*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),E*=S,T*=S)),E=Nt(E),T=Nt(T),A=Nt(A),C=Nt(C)):(E=h,C=d,T=A=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=Gs(f,"x",o,"px"),x=Gs(f,"y",a,"px")),(p||_||m||g)&&(v=Nt(v+p-(p*E+_*A)+m),x=Nt(x+_-(p*T+_*C)+g)),(i||r)&&(S=f.getBBox(),v=Nt(v+i/100*S.width),x=Nt(x+r/100*S.height)),S="matrix("+E+","+T+","+A+","+C+","+v+","+x+")",f.setAttribute("transform",S),y&&(f.style[Dt]=S)},Hb=function(e,t,n,i,r){var o=360,a=tn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?rr:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*wm)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*wm)%o-~~(c/o)*o)),e._pt=d=new Dn(e._pt,t,n,i,c,Tb),d.e=u,d.u="deg",e._props.push(n),d},Lm=function(e,t){for(var n in t)e[n]=t[n];return e},Vb=function(e,t,n){var i=Lm({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Dt]=t,a=Ha(n,1),Tr(n,Dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Dt],o[Dt]=t,a=Ha(n,1),o[Dt]=c);for(l in fs)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(f=_n(c),p=_n(u),h=f!==p?Gs(n,l,c,p):parseFloat(c),d=parseFloat(u),e._pt=new Dn(e._pt,a,l,h,d-h,rd),e._pt.u=p||0,e._props.push(l));Lm(a,i)};Pn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});mc[e>1?"border"+s:s]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(p){return is(a,p,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(p,_){return f[p]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,h)}});var C_={name:"css",register:ad,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,p,_,m,g,y,v,x,E,T,A,C;uf||ad(),this.styles=this.styles||x_(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Gn[_]&&l_(_,t,n,i,e,r)))){if(f=typeof u,p=mc[_],f==="function"&&(u=u.call(n,i,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Oa(u)),p)p(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Us.lastIndex=0,Us.test(c)||(m=_n(c),g=_n(u)),g?m!==g&&(c=Gs(e,_,c,g)+g):m&&(u+=m),this.add(a,"setProperty",c,u,i,r,0,0,_),o.push(_),C.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],tn(c)&&~c.indexOf("random(")&&(c=Oa(c)),_n(c+"")||c==="auto"||(c+=Qn.units[_]||_n(is(e,_))||""),(c+"").charAt(1)==="="&&(c=is(e,_))):c=is(e,_),d=parseFloat(c),y=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in Di&&(_==="autoAlpha"&&(d===1&&is(e,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,a.visibility),Is(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Di[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in fs,v){if(this.styles.save(_),x||(E=e._gsap,E.renderTransform&&!t.parseTransform||Ha(e,t.parseTransform),T=t.smoothOrigin!==!1&&E.smooth,x=this._pt=new Dn(this._pt,a,Dt,0,1,E.renderTransform,E,0,-1),x.dep=1),_==="scale")this._pt=new Dn(this._pt,E,"scaleY",E.scaleY,(y?mo(E.scaleY,y+h):h)-E.scaleY||0,rd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Fn,0,a[Fn]),u=Ob(u),E.svg?ld(e,u,0,T,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==E.zOrigin&&Is(this,E,"zOrigin",E.zOrigin,g),Is(this,a,_,gc(c),gc(u)));continue}else if(_==="svgOrigin"){ld(e,u,1,T,0,this);continue}else if(_ in M_){Hb(this,E,_,d,y?mo(d,y+u):u);continue}else if(_==="smoothOrigin"){Is(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){Vb(this,u,e);continue}}else _ in a||(_=Bo(_)||_);if(v||(h||h===0)&&(d||d===0)&&!Mb.test(u)&&_ in a)m=(c+"").substr((d+"").length),h||(h=0),g=_n(u)||(_ in Qn.units?Qn.units[_]:m),m!==g&&(d=Gs(e,_,c,g)),this._pt=new Dn(this._pt,v?E:a,_,d,(y?mo(d,y+h):h)-d,!v&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?Cb:rd),this._pt.u=g||0,m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Eb);else if(_ in a)Ub.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,r);else if(_!=="parseTransform"){ef(_,u);continue}v||(_ in a?C.push(_,0,a[_]):C.push(_,1,c||e[_])),o.push(_)}}A&&p_(this)},render:function(e,t){if(t.tween._time||!hf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:is,aliases:Di,getSetter:function(e,t,n){var i=Di[t];return i&&i.indexOf(",")<0&&(t=i),t in fs&&t!==Fn&&(e._gsap.x||is(e,"x"))?n&&bm===n?t==="scale"?Ib:Rb:(bm=n||{})&&(t==="scale"?Pb:Db):e.style&&!Zd(e.style[t])?bb:~t.indexOf("-")?wb:lf(e,t)},core:{_removeProperty:Tr,_getMatrix:ff}};Bn.utils.checkPrefix=Bo;Bn.core.getStyleSaver=x_;(function(s,e,t,n){var i=Pn(s+","+e+","+t,function(r){fs[r]=1});Pn(e,function(r){Qn.units[r]="deg",M_[r]=1}),Di[i[13]]=s+","+e,Pn(n,function(r){var o=r.split(":");Di[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Qn.units[s]="px"});Bn.registerPlugin(C_);var cd=Bn.registerPlugin(C_)||Bn;cd.core.Tween;function Yl(s,e,t,n,i=2){const r={x:s.position.x,y:s.position.y,z:s.position.z},o=new I(t.x,t.y,t.z),a=s.position.clone().add(s.getWorldDirection(new I)),l=new I(n.x,n.y,n.z);e.enabled=!1;const c=new Promise(h=>{cd.to(r,{x:o.x,y:o.y,z:o.z,duration:i,ease:"power2.inOut",onUpdate:()=>{s.position.set(r.x,r.y,r.z)},onComplete:h})}),u=new Promise(h=>{cd.to(a,{x:l.x,y:l.y,z:l.z,duration:i,ease:"power2.inOut",onUpdate:()=>{s.lookAt(a)},onComplete:h})});Promise.all([c,u]).then(()=>{e.target.set(l.x,l.y,l.z),e.update(),e.enabled=!0})}const Xr=[];function Xo(s,e=co){let t=null;const n=new Set;function i(a){if(xg(s,a)&&(s=a,t)){const l=!Xr.length;for(const c of n)c[1](),Xr.push(c,s);if(l){for(let c=0;c<Xr.length;c+=2)Xr[c][0](Xr[c+1]);Xr.length=0}}}function r(a){i(a(s))}function o(a,l=co){const c=[a,l];return n.add(c),n.size===1&&(t=e(i,r)||co),a(s),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:o}}let zn=si({movement:{moveForward:!1,moveBackward:!1,moveLeft:!1,moveRight:!1}}),Si=Xo(),ii=Xo();const Bu={TARGET_OFFSET:{x:1e-6,y:1e-6,z:1e-6}};let Ql=Xo(!0),so=Xo(1);var Gb=pi('<div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-[55%] max-w-md p-4 bg-base-100 rounded-lg shadow-md opacity-90"><button class="btn">«</button> <span class="text-lg font-semibold"> </span> <button class="btn">»</button></div>');function Wb(s,e){jn(e,!0);const t=Hi(),n=()=>kt(so,"$currentPoiNumber",t),i=()=>kt(ii,"$camera",t),r=()=>kt(Si,"$orbitControls",t);let o=Ed(()=>fr[n()-1]);Vi(()=>{Yl(i(),r(),et(o).targetPosition,et(o).lookAtPosition)});function a(){let p=n()-1;p=(p+1)%fr.length,cs(so,p+1),Yl(i(),r(),et(o).targetPosition,et(o).lookAtPosition)}function l(){let p=n()-1;p==0?cs(so,si(fr.length)):(p=(p-1)%fr.length,cs(so,p+1)),Yl(i(),r(),et(o).targetPosition,et(o).lookAtPosition)}var c=Gb(),u=bt(c);u.__click=l;var h=Bt(u,2),d=bt(h),f=Bt(h,2);f.__click=a,Jl(()=>nc(d,et(o).name)),hi(s,c),Zn()}Hg(["click"]);var Xb=(s,e,t)=>e(et(t)),qb=pi('<li><button class="btn mr-5 text-lg"> </button></li>'),Yb=(s,e,t)=>e(et(t)),Qb=pi('<li><button class="btn mb-2"> </button></li>'),Kb=pi('<div class="navbar bg-base-100 absolute top-0 left-0 opacity-90"><div class="navbar-start"><a class="btn btn-ghost text-xl">Sällskapsrummet</a></div> <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1"><!> <li><details><summary>Settings</summary> <ul class="p-2"><div class="form-control"><label class="label cursor-pointer"><span class="label-text mr-3">Show FPS</span> <input type="checkbox" class="toggle" checked="checked"></label></div></ul></details></li></ul></div> <div class="navbar-end"><div class="dropdown dropdown-end"><div tabindex="0" role="button" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div> <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"><!> <li><a>Settings</a> <ul class="p-2"><li><div class="form-control"><label class="label cursor-pointer"><span class="label-text mr-3">Show FPS</span> <input type="checkbox" class="toggle" checked="checked"></label></div></li></ul></li></ul></div></div> <!></div>');function jb(s,e){jn(e,!1);const t=Hi(),n=()=>kt(so,"$currentPoiNumber",t),i=()=>kt(ii,"$camera",t),r=()=>kt(Si,"$orbitControls",t),o=()=>kt(Ql,"$showFps",t);function a(P){console.log("MOVEEE"),cs(so,fr.findIndex(F=>F.name===P.name)+1),console.log("current",n()),Yl(i(),r(),P.targetPosition,P.lookAtPosition)}Wg();var l=Kb(),c=Bt(bt(l),2),u=bt(c),h=bt(u);Qf(h,1,()=>fr,Yf,(P,F)=>{var B=qb(),O=bt(B);O.__click=[Xb,a,F];var H=bt(O);Jl(()=>nc(H,et(F).name)),hi(P,B)});var d=Bt(h,2),f=bt(d),p=Bt(bt(f),2),_=bt(p),m=bt(_),g=Bt(bt(m),2);g.__click=function(...P){var F;(F=cs(Ql,!o()))==null||F.apply(this,P)};var y=Bt(c,2),v=bt(y),x=Bt(bt(v),2),E=bt(x);Qf(E,1,()=>fr,Yf,(P,F)=>{var B=Qb(),O=bt(B);O.__click=[Yb,a,F];var H=bt(O);Jl(()=>nc(H,et(F).name)),hi(P,B)});var T=Bt(E,2),A=Bt(bt(T),2),C=bt(A),S=bt(C),M=bt(S),w=Bt(bt(M),2);w.__click=function(...P){var F;(F=cs(Ql,!o()))==null||F.apply(this,P)};var L=Bt(y,2);Wb(L,{}),hi(s,l),Zn()}Hg(["click"]);const Bm={type:"change"},pf={type:"start"},b_={type:"end"},Rl=new Ho,Um=new ns,Zb=Math.cos(70*qt.DEG2RAD),Wt=new I,bn=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Uu=1e-6;let $b=class extends wC{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ti.ROTATE,MIDDLE:ti.DOLLY,RIGHT:ti.PAN},this.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new st,this._lastTargetPosition=new I,this._quat=new st().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cc,this._sphericalDelta=new cc,this._scale=1,this._panOffset=new I,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new I,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ew.bind(this),this._onPointerDown=Jb.bind(this),this._onPointerUp=tw.bind(this),this._onContextMenu=lw.bind(this),this._onMouseWheel=sw.bind(this),this._onKeyDown=rw.bind(this),this._onTouchStart=ow.bind(this),this._onTouchMove=aw.bind(this),this._onMouseDown=nw.bind(this),this._onMouseMove=iw.bind(this),this._interceptControlDown=cw.bind(this),this._interceptControlUp=uw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bm),this.update(),this.state=mt.NONE}update(e=null){const t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=bn:n>Math.PI&&(n-=bn),i<-Math.PI?i+=bn:i>Math.PI&&(i-=bn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Wt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Rl.origin.copy(this.object.position),Rl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rl.direction))<Zb?this.object.lookAt(this.target):(Um.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rl.intersectPlane(Um,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Uu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Uu||this._lastTargetPosition.distanceToSquared(this.target)>Uu?(this.dispatchEvent(Bm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Wt.copy(i).sub(this.target);let r=Wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new he,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Jb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function ew(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function tw(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(b_),this.state=mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nw(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=mt.DOLLY;break;case ti.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=mt.ROTATE}break;case ti.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(pf)}function iw(s){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function sw(s){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(s.preventDefault(),this.dispatchEvent(pf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(b_))}function rw(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function ow(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ni.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=mt.TOUCH_ROTATE;break;case ni.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case ni.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=mt.TOUCH_DOLLY_PAN;break;case ni.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(pf)}function aw(s){switch(this._trackPointer(s),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=mt.NONE}}function lw(s){this.enabled!==!1&&s.preventDefault()}function cw(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uw(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hw(s,e){jn(e,!0);const t=Hi(),n=()=>kt(Si,"$orbitControls",t),i=()=>kt(ii,"$camera",t),r=new I(Bu.TARGET_OFFSET.x,Bu.TARGET_OFFSET.y,Bu.TARGET_OFFSET.z);Vi(()=>{cs(Si,si(o()))});function o(){cs(Si,si(new $b(i(),e.canvas)));const l=new I;i().getWorldDirection(l);const c=i().position.clone().add(l.clone().multiplyScalar(1)).add(r);n().target.copy(c),ts(Si,Rt(n).enableZoom=!1,Rt(n)),ts(Si,Rt(n).enablePan=!1,Rt(n)),ts(Si,Rt(n).enableDamping=!0,Rt(n)),ts(Si,Rt(n).dampingFactor=.1,Rt(n));const h=qt.degToRad(15);return ts(Si,Rt(n).minPolarAngle=Math.PI/2-h,Rt(n)),ts(Si,Rt(n).maxPolarAngle=Math.PI/2+h,Rt(n)),e.registerObject({update:a}),n()}function a(l){const c=new I;i().getWorldDirection(c);const u=i().position.clone().add(c.clone().multiplyScalar(1)).add(r);n().target.copy(u),n().enabled&&n().update()}Zn()}let mf=Xo([]),Hc=Xo([]);function dw(s,e){jn(e,!0);const t=Hi(),n=()=>kt(ii,"$camera",t),i=()=>kt(Hc,"$collisionObjects",t),r=new b0,o=1.5,a=new I,l=new I,c=new I,u=.7,h=.02;Vi(()=>{f(),e.registerObject({update:p})});function d(_){r.set(n().position,_);const m=r.intersectObjects(i());return m.length>0&&m[0].distance<o}function f(){const _=g=>{switch(g.code){case"KeyW":case"ArrowUp":zn.movement.moveForward=!0;break;case"KeyA":case"ArrowLeft":zn.movement.moveLeft=!0;break;case"KeyS":case"ArrowDown":zn.movement.moveBackward=!0;break;case"KeyD":case"ArrowRight":zn.movement.moveRight=!0;break}},m=g=>{switch(g.code){case"KeyW":case"ArrowUp":zn.movement.moveForward=!1;break;case"KeyA":case"ArrowLeft":zn.movement.moveLeft=!1;break;case"KeyS":case"ArrowDown":zn.movement.moveBackward=!1;break;case"KeyD":case"ArrowRight":zn.movement.moveRight=!1;break}};document.addEventListener("keydown",_),document.addEventListener("keyup",m)}function p(_){c.set(0,0,0),n().getWorldDirection(a);const m=new I(a.x,0,a.z).normalize(),g=m.clone().negate(),y=new I().crossVectors(m,n().up).normalize(),v=y.clone().negate();zn.movement.moveForward&&!d(m)&&c.add(m.multiplyScalar(h)),zn.movement.moveBackward&&!d(g)&&c.add(g.multiplyScalar(h)),zn.movement.moveRight&&!d(y)&&c.add(y.multiplyScalar(h)),zn.movement.moveLeft&&!d(v)&&c.add(v.multiplyScalar(h)),l.add(c),l.multiplyScalar(u),n().position.add(l)}Zn()}const Kl=(s,e)=>{const t=e.x-s.x,n=e.y-s.y;return Math.sqrt(t*t+n*n)},fw=(s,e)=>{const t=e.x-s.x,n=e.y-s.y;return mw(Math.atan2(n,t))},pw=(s,e,t)=>{const n={x:0,y:0};return t=ud(t),n.x=s.x-e*Math.cos(t),n.y=s.y-e*Math.sin(t),n},ud=s=>s*(Math.PI/180),mw=s=>s*(180/Math.PI),gw=s=>isNaN(s.buttons)?s.pressure!==0:s.buttons!==0,Ou=new Map,Om=s=>{Ou.has(s)&&clearTimeout(Ou.get(s)),Ou.set(s,setTimeout(s,100))},_c=(s,e,t)=>{const n=e.split(/[ ,]+/g);let i;for(let r=0;r<n.length;r+=1)i=n[r],s.addEventListener?s.addEventListener(i,t,!1):s.attachEvent&&s.attachEvent(i,t)},Nm=(s,e,t)=>{const n=e.split(/[ ,]+/g);let i;for(let r=0;r<n.length;r+=1)i=n[r],s.removeEventListener?s.removeEventListener(i,t):s.detachEvent&&s.detachEvent(i,t)},w_=s=>(s.preventDefault(),s.type.match(/^touch/)?s.changedTouches:s),km=()=>{const s=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:s,y:e}},zm=(s,e)=>{e.top||e.right||e.bottom||e.left?(s.style.top=e.top,s.style.right=e.right,s.style.bottom=e.bottom,s.style.left=e.left):(s.style.left=e.x+"px",s.style.top=e.y+"px")},gf=(s,e,t)=>{const n=R_(s);for(let i in n)if(n.hasOwnProperty(i))if(typeof e=="string")n[i]=e+" "+t;else{let r="";for(let o=0,a=e.length;o<a;o+=1)r+=e[o]+" "+t+", ";n[i]=r.slice(0,-2)}return n},_w=(s,e)=>{const t=R_(s);for(let n in t)t.hasOwnProperty(n)&&(t[n]=e);return t},R_=s=>{const e={};return e[s]="",["webkit","Moz","o"].forEach(function(n){e[n+s.charAt(0).toUpperCase()+s.slice(1)]=""}),e},Nu=(s,e)=>{for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s},vw=(s,e)=>{const t={};for(let n in s)s.hasOwnProperty(n)&&e.hasOwnProperty(n)?t[n]=e[n]:s.hasOwnProperty(n)&&(t[n]=s[n]);return t},hd=(s,e)=>{if(s.length)for(let t=0,n=s.length;t<n;t+=1)e(s[t]);else e(s)},xw=(s,e,t)=>({x:Math.min(Math.max(s.x,e.x-t),e.x+t),y:Math.min(Math.max(s.y,e.y-t),e.y+t)});var yw="ontouchstart"in window,Sw=!!window.PointerEvent,Aw=!!window.MSPointerEvent,ta={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},ro,Va={};Sw?ro=ta.pointer:Aw?ro=ta.MSPointer:yw?(ro=ta.touch,Va=ta.mouse):ro=ta.mouse;function ps(){}ps.prototype.on=function(s,e){var t=this,n=s.split(/[ ,]+/g),i;t._handlers_=t._handlers_||{};for(var r=0;r<n.length;r+=1)i=n[r],t._handlers_[i]=t._handlers_[i]||[],t._handlers_[i].push(e);return t};ps.prototype.off=function(s,e){var t=this;return t._handlers_=t._handlers_||{},s===void 0?t._handlers_={}:e===void 0?t._handlers_[s]=null:t._handlers_[s]&&t._handlers_[s].indexOf(e)>=0&&t._handlers_[s].splice(t._handlers_[s].indexOf(e),1),t};ps.prototype.trigger=function(s,e){var t=this,n=s.split(/[ ,]+/g),i;t._handlers_=t._handlers_||{};for(var r=0;r<n.length;r+=1)i=n[r],t._handlers_[i]&&t._handlers_[i].length&&t._handlers_[i].forEach(function(o){o.call(t,{type:i,target:t},e)})};ps.prototype.config=function(s){var e=this;e.options=e.defaults||{},s&&(e.options=vw(e.options,s))};ps.prototype.bindEvt=function(s,e){var t=this;return t._domHandlers_=t._domHandlers_||{},t._domHandlers_[e]=function(){typeof t["on"+e]=="function"?t["on"+e].apply(t,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},_c(s,ro[e],t._domHandlers_[e]),Va[e]&&_c(s,Va[e],t._domHandlers_[e]),t};ps.prototype.unbindEvt=function(s,e){var t=this;return t._domHandlers_=t._domHandlers_||{},Nm(s,ro[e],t._domHandlers_[e]),Va[e]&&Nm(s,Va[e],t._domHandlers_[e]),delete t._domHandlers_[e],this};function Zt(s,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=s,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=Zt.id,Zt.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}Zt.prototype=new ps;Zt.constructor=Zt;Zt.id=0;Zt.prototype.buildEl=function(s){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};Zt.prototype.stylize=function(){if(this.options.dataOnly)return this;var s=this.options.fadeTime+"ms",e=_w("borderRadius","50%"),t=gf("transition","opacity",s),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},Nu(n.el,t),this.options.shape==="circle"&&Nu(n.back,e),Nu(n.front,e),this.applyStyles(n),this};Zt.prototype.applyStyles=function(s){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var t in s[e])this.ui[e].style[t]=s[e][t];return this};Zt.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};Zt.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};Zt.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};Zt.prototype.show=function(s){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),typeof s=="function"&&s.call(this)},e.options.fadeTime)),e};Zt.prototype.hide=function(s){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var t=e.options.mode==="dynamic"?"none":"block";e.ui.el.style.display=t,typeof s=="function"&&s.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){const t=e.options.restJoystick,n={};n.x=t===!0||t.x!==!1?0:e.instance.frontPosition.x,n.y=t===!0||t.y!==!1?0:e.instance.frontPosition.y,e.setPosition(s,n)}return e};Zt.prototype.setPosition=function(s,e){var t=this;t.frontPosition={x:e.x,y:e.y};var n=t.options.fadeTime+"ms",i={};i.front=gf("transition",["transform"],n);var r={front:{}};r.front={transform:"translate("+t.frontPosition.x+"px,"+t.frontPosition.y+"px)"},t.applyStyles(i),t.applyStyles(r),t.restTimeout=setTimeout(function(){typeof s=="function"&&s.call(t),t.restCallback()},t.options.fadeTime)};Zt.prototype.restCallback=function(){var s=this,e={};e.front=gf("transition","none",""),s.applyStyles(e),s.trigger("rested",s.instance)};Zt.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};Zt.prototype.computeDirection=function(s){var e=s.angle.radian,t=Math.PI/4,n=Math.PI/2,i,r,o;if(e>t&&e<t*3&&!s.lockX?i="up":e>-t&&e<=t&&!s.lockY?i="left":e>-t*3&&e<=-t&&!s.lockX?i="down":s.lockY||(i="right"),s.lockY||(e>-n&&e<n?r="left":r="right"),s.lockX||(e>0?o="up":o="down"),s.force>this.options.threshold){var a={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(a[l]=this.direction[l]);var c={};this.direction={x:r,y:o,angle:i},s.direction=this.direction;for(l in a)a[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return s;(!c.x||!c.y)&&this.trigger("plain",s),c.x||this.trigger("plain:"+r,s),c.y||this.trigger("plain:"+o,s),c.angle||this.trigger("dir dir:"+i,s)}else this.resetDirection();return s};function zt(s,e){var t=this;t.nipples=[],t.idles=[],t.actives=[],t.ids=[],t.pressureIntervals={},t.manager=s,t.id=zt.id,zt.id+=1,t.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},t.config(e),(t.options.mode==="static"||t.options.mode==="semi")&&(t.options.multitouch=!1),t.options.multitouch||(t.options.maxNumberOfNipples=1);const n=getComputedStyle(t.options.zone.parentElement);return n&&n.display==="flex"&&(t.parentIsFlex=!0),t.updateBox(),t.prepareNipples(),t.bindings(),t.begin(),t.nipples}zt.prototype=new ps;zt.constructor=zt;zt.id=0;zt.prototype.prepareNipples=function(){var s=this,e=s.nipples;e.on=s.on.bind(s),e.off=s.off.bind(s),e.options=s.options,e.destroy=s.destroy.bind(s),e.ids=s.ids,e.id=s.id,e.processOnMove=s.processOnMove.bind(s),e.processOnEnd=s.processOnEnd.bind(s),e.get=function(t){if(t===void 0)return e[0];for(var n=0,i=e.length;n<i;n+=1)if(e[n].identifier===t)return e[n];return!1}};zt.prototype.bindings=function(){var s=this;s.bindEvt(s.options.zone,"start"),s.options.zone.style.touchAction="none",s.options.zone.style.msTouchAction="none"};zt.prototype.begin=function(){var s=this,e=s.options;if(e.mode==="static"){var t=s.createNipple(e.position,s.manager.getIdentifier());t.add(),s.idles.push(t)}};zt.prototype.createNipple=function(s,e){var t=this,n=t.manager.scroll,i={},r=t.options,o={x:t.parentIsFlex?n.x:n.x+t.box.left,y:t.parentIsFlex?n.y:n.y+t.box.top};if(s.x&&s.y)i={x:s.x-o.x,y:s.y-o.y};else if(s.top||s.right||s.bottom||s.left){var a=document.createElement("DIV");a.style.display="hidden",a.style.top=s.top,a.style.right=s.right,a.style.bottom=s.bottom,a.style.left=s.left,a.style.position="absolute",r.zone.appendChild(a);var l=a.getBoundingClientRect();r.zone.removeChild(a),i=s,s={x:l.left+n.x,y:l.top+n.y}}var c=new Zt(t,{color:r.color,size:r.size,threshold:r.threshold,fadeTime:r.fadeTime,dataOnly:r.dataOnly,restJoystick:r.restJoystick,restOpacity:r.restOpacity,mode:r.mode,identifier:e,position:s,zone:r.zone,frontPosition:{x:0,y:0},shape:r.shape});return r.dataOnly||(zm(c.ui.el,i),zm(c.ui.front,c.frontPosition)),t.nipples.push(c),t.trigger("added "+c.identifier+":added",c),t.manager.trigger("added "+c.identifier+":added",c),t.bindNipple(c),c};zt.prototype.updateBox=function(){var s=this;s.box=s.options.zone.getBoundingClientRect()};zt.prototype.bindNipple=function(s){var e=this,t,n=function(i,r){t=i.type+" "+r.id+":"+i.type,e.trigger(t,r)};s.on("destroyed",e.onDestroyed.bind(e)),s.on("shown hidden rested dir plain",n),s.on("dir:up dir:right dir:down dir:left",n),s.on("plain:up plain:right plain:down plain:left",n)};zt.prototype.pressureFn=function(s,e,t){var n=this,i=0;clearInterval(n.pressureIntervals[t]),n.pressureIntervals[t]=setInterval((function(){var r=s.force||s.pressure||s.webkitForce||0;r!==i&&(e.trigger("pressure",r),n.trigger("pressure "+e.identifier+":pressure",r),i=r)}).bind(n),100)};zt.prototype.onstart=function(s){var e=this,t=e.options,n=s;s=w_(s),e.updateBox();var i=function(r){e.actives.length<t.maxNumberOfNipples?e.processOnStart(r):n.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(o){if(Object.values(n.touches).findIndex(function(l){return l.identifier===o})<0){var a=[s[0]];a.identifier=o,e.processOnEnd(a)}}),e.actives.length<t.maxNumberOfNipples&&e.processOnStart(r))};return hd(s,i),e.manager.bindDocument(),!1};zt.prototype.processOnStart=function(s){var e=this,t=e.options,n,i=e.manager.getIdentifier(s),r=s.force||s.pressure||s.webkitForce||0,o={x:s.pageX,y:s.pageY},a=e.getOrCreate(i,o);a.identifier!==i&&e.manager.removeIdentifier(a.identifier),a.identifier=i;var l=function(u){u.trigger("start",u),e.trigger("start "+u.id+":start",u),u.show(),r>0&&e.pressureFn(s,u,u.identifier),e.processOnMove(s)};if((n=e.idles.indexOf(a))>=0&&e.idles.splice(n,1),e.actives.push(a),e.ids.push(a.identifier),t.mode!=="semi")l(a);else{var c=Kl(o,a.position);if(c<=t.catchDistance)l(a);else{a.destroy(),e.processOnStart(s);return}}return a};zt.prototype.getOrCreate=function(s,e){var t=this,n=t.options,i;return/(semi|static)/.test(n.mode)?(i=t.idles[0],i?(t.idles.splice(0,1),i):n.mode==="semi"?t.createNipple(e,s):(console.warn("Coudln't find the needed nipple."),!1)):(i=t.createNipple(e,s),i)};zt.prototype.processOnMove=function(s){var e=this,t=e.options,n=e.manager.getIdentifier(s),i=e.nipples.get(n),r=e.manager.scroll;if(!gw(s)){this.processOnEnd(s);return}if(!i){console.error("Found zombie joystick with ID "+n),e.manager.removeIdentifier(n);return}if(t.dynamicPage){var o=i.el.getBoundingClientRect();i.position={x:r.x+o.left,y:r.y+o.top}}i.identifier=n;var a=i.options.size/2,l={x:s.pageX,y:s.pageY};t.lockX&&(l.y=i.position.y),t.lockY&&(l.x=i.position.x);var c=Kl(l,i.position),u=fw(l,i.position),h=ud(u),d=c/a,f={distance:c,position:l},p,_;if(i.options.shape==="circle"?(p=Math.min(c,a),_=pw(i.position,p,u)):(_=xw(l,i.position,a),p=Kl(_,i.position)),t.follow){if(c>a){let v=l.x-_.x,x=l.y-_.y;i.position.x+=v,i.position.y+=x,i.el.style.top=i.position.y-(e.box.top+r.y)+"px",i.el.style.left=i.position.x-(e.box.left+r.x)+"px",c=Kl(l,i.position)}}else l=_,c=p;var m=l.x-i.position.x,g=l.y-i.position.y;i.frontPosition={x:m,y:g},t.dataOnly||(i.ui.front.style.transform="translate("+m+"px,"+g+"px)");var y={identifier:i.identifier,position:l,force:d,pressure:s.force||s.pressure||s.webkitForce||0,distance:c,angle:{radian:h,degree:u},vector:{x:m/a,y:-g/a},raw:f,instance:i,lockX:t.lockX,lockY:t.lockY};y=i.computeDirection(y),y.angle={radian:ud(180-u),degree:180-u},i.trigger("move",y),e.trigger("move "+i.id+":move",y)};zt.prototype.processOnEnd=function(s){var e=this,t=e.options,n=e.manager.getIdentifier(s),i=e.nipples.get(n),r=e.manager.removeIdentifier(i.identifier);i&&(t.dataOnly||i.hide(function(){t.mode==="dynamic"&&(i.trigger("removed",i),e.trigger("removed "+i.id+":removed",i),e.manager.trigger("removed "+i.id+":removed",i),i.destroy())}),clearInterval(e.pressureIntervals[i.identifier]),i.resetDirection(),i.trigger("end",i),e.trigger("end "+i.id+":end",i),e.ids.indexOf(i.identifier)>=0&&e.ids.splice(e.ids.indexOf(i.identifier),1),e.actives.indexOf(i)>=0&&e.actives.splice(e.actives.indexOf(i),1),/(semi|static)/.test(t.mode)?e.idles.push(i):e.nipples.indexOf(i)>=0&&e.nipples.splice(e.nipples.indexOf(i),1),e.manager.unbindDocument(),/(semi|static)/.test(t.mode)&&(e.manager.ids[r.id]=r.identifier))};zt.prototype.onDestroyed=function(s,e){var t=this;t.nipples.indexOf(e)>=0&&t.nipples.splice(t.nipples.indexOf(e),1),t.actives.indexOf(e)>=0&&t.actives.splice(t.actives.indexOf(e),1),t.idles.indexOf(e)>=0&&t.idles.splice(t.idles.indexOf(e),1),t.ids.indexOf(e.identifier)>=0&&t.ids.splice(t.ids.indexOf(e.identifier),1),t.manager.removeIdentifier(e.identifier),t.manager.unbindDocument()};zt.prototype.destroy=function(){var s=this;s.unbindEvt(s.options.zone,"start"),s.nipples.forEach(function(t){t.destroy()});for(var e in s.pressureIntervals)s.pressureIntervals.hasOwnProperty(e)&&clearInterval(s.pressureIntervals[e]);s.trigger("destroyed",s.nipples),s.manager.unbindDocument(),s.off()};function nn(s){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=km(),e.config(s),e.prepareCollections();var t=function(){var i;e.collections.forEach(function(r){r.forEach(function(o){i=o.el.getBoundingClientRect(),o.position={x:e.scroll.x+i.left,y:e.scroll.y+i.top}})})};_c(window,"resize",function(){Om(t)});var n=function(){e.scroll=km()};return _c(window,"scroll",function(){Om(n)}),e.collections}nn.prototype=new ps;nn.constructor=nn;nn.prototype.prepareCollections=function(){var s=this;s.collections.create=s.create.bind(s),s.collections.on=s.on.bind(s),s.collections.off=s.off.bind(s),s.collections.destroy=s.destroy.bind(s),s.collections.get=function(e){var t;return s.collections.every(function(n){return t=n.get(e),!t}),t}};nn.prototype.create=function(s){return this.createCollection(s)};nn.prototype.createCollection=function(s){var e=this,t=new zt(e,s);return e.bindCollection(t),e.collections.push(t),t};nn.prototype.bindCollection=function(s){var e=this,t,n=function(i,r){t=i.type+" "+r.id+":"+i.type,e.trigger(t,r)};s.on("destroyed",e.onDestroyed.bind(e)),s.on("shown hidden rested dir plain",n),s.on("dir:up dir:right dir:down dir:left",n),s.on("plain:up plain:right plain:down plain:left",n)};nn.prototype.bindDocument=function(){var s=this;s.binded||(s.bindEvt(document,"move").bindEvt(document,"end"),s.binded=!0)};nn.prototype.unbindDocument=function(s){var e=this;(!Object.keys(e.ids).length||s===!0)&&(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)};nn.prototype.getIdentifier=function(s){var e;return s?(e=s.identifier===void 0?s.pointerId:s.identifier,e===void 0&&(e=this.latest||0)):e=this.index,this.ids[e]===void 0&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]};nn.prototype.removeIdentifier=function(s){var e={};for(var t in this.ids)if(this.ids[t]===s){e.id=t,e.identifier=this.ids[t],delete this.ids[t];break}return e};nn.prototype.onmove=function(s){var e=this;return e.onAny("move",s),!1};nn.prototype.onend=function(s){var e=this;return e.onAny("end",s),!1};nn.prototype.oncancel=function(s){var e=this;return e.onAny("end",s),!1};nn.prototype.onAny=function(s,e){var t=this,n,i="processOn"+s.charAt(0).toUpperCase()+s.slice(1);e=w_(e);var r=function(a,l,c){c.ids.indexOf(l)>=0&&(c[i](a),a._found_=!0)},o=function(a){n=t.getIdentifier(a),hd(t.collections,r.bind(null,a,n)),a._found_||t.removeIdentifier(n)};return hd(e,o),!1};nn.prototype.destroy=function(){var s=this;s.unbindDocument(!0),s.ids={},s.index=0,s.collections.forEach(function(e){e.destroy()}),s.off()};nn.prototype.onDestroyed=function(s,e){var t=this;if(t.collections.indexOf(e)<0)return!1;t.collections.splice(t.collections.indexOf(e),1)};const Hm=new nn,Mw={create:function(s){return Hm.create(s)},factory:Hm};var dn=tx(()=>zn),Tw=pi("<div></div>");function Ew(s,e){jn(e,!1);let t=_v();function n(){const r=Mw.create({zone:et(t),mode:"static",position:{bottom:"200px",left:"100px"},size:120});r.on("move",(o,a)=>{const l=a.direction;l&&(dn(dn().movement.moveForward=l.y==="up"),dn(dn().movement.moveBackward=l.y==="down"),dn(dn().movement.moveLeft=l.x==="left"),dn(dn().movement.moveRight=l.x==="right"))}),r.on("end",()=>{dn(dn().movement.moveForward=!1),dn(dn().movement.moveBackward=!1),dn(dn().movement.moveLeft=!1),dn(dn().movement.moveRight=!1)})}Vi(()=>{n()}),Wg();var i=Tw();Gg(i,r=>rn(t,r),()=>et(t)),hi(s,i),Zn()}var Cw=pi("<!> <!> <!>",1);function bw(s,e){var t=Cw(),n=Td(t);dw(n,{get registerObject(){return e.registerObject}});var i=Bt(n,2);Ew(i,{});var r=Bt(i,2);hw(r,{get canvas(){return e.canvas},get registerObject(){return e.registerObject}}),hi(s,t)}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var oi=Uint8Array,oo=Uint16Array,ww=Int32Array,I_=new oi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),P_=new oi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Rw=new oi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),D_=function(s,e){for(var t=new oo(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new ww(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},F_=D_(I_,2),L_=F_.b,Iw=F_.r;L_[28]=258,Iw[258]=28;var Pw=D_(P_,0),Dw=Pw.b,dd=new oo(32768);for(var Et=0;Et<32768;++Et){var Ms=(Et&43690)>>1|(Et&21845)<<1;Ms=(Ms&52428)>>2|(Ms&13107)<<2,Ms=(Ms&61680)>>4|(Ms&3855)<<4,dd[Et]=((Ms&65280)>>8|(Ms&255)<<8)>>1}var fa=function(s,e,t){for(var n=s.length,i=0,r=new oo(e);i<n;++i)s[i]&&++r[s[i]-1];var o=new oo(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new oo(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],u=e-s[i],h=o[s[i]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)a[dd[h]>>l]=c}else for(a=new oo(n),i=0;i<n;++i)s[i]&&(a[i]=dd[o[s[i]-1]++]>>15-s[i]);return a},Za=new oi(288);for(var Et=0;Et<144;++Et)Za[Et]=8;for(var Et=144;Et<256;++Et)Za[Et]=9;for(var Et=256;Et<280;++Et)Za[Et]=7;for(var Et=280;Et<288;++Et)Za[Et]=8;var B_=new oi(32);for(var Et=0;Et<32;++Et)B_[Et]=5;var Fw=fa(Za,9,1),Lw=fa(B_,5,1),ku=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},yi=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},zu=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},Bw=function(s){return(s+7)/8|0},Uw=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new oi(s.subarray(e,t))},Ow=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ai=function(s,e,t){var n=new Error(e||Ow[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,Ai),!t)throw n;return n},Nw=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new oi(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new oi(i*3));var c=function(Ve){var Be=t.length;if(Ve>Be){var ke=new oi(Math.max(Be*2,Ve));ke.set(t),t=ke}},u=e.f||0,h=e.p||0,d=e.b||0,f=e.l,p=e.d,_=e.m,m=e.n,g=i*8;do{if(!f){u=yi(s,h,1);var y=yi(s,h+1,3);if(h+=3,y)if(y==1)f=Fw,p=Lw,_=9,m=5;else if(y==2){var T=yi(s,h,31)+257,A=yi(s,h+10,15)+4,C=T+yi(s,h+5,31)+1;h+=14;for(var S=new oi(C),M=new oi(19),w=0;w<A;++w)M[Rw[w]]=yi(s,h+w*3,7);h+=A*3;for(var L=ku(M),P=(1<<L)-1,F=fa(M,L,1),w=0;w<C;){var B=F[yi(s,h,P)];h+=B&15;var v=B>>4;if(v<16)S[w++]=v;else{var O=0,H=0;for(v==16?(H=3+yi(s,h,3),h+=2,O=S[w-1]):v==17?(H=3+yi(s,h,7),h+=3):v==18&&(H=11+yi(s,h,127),h+=7);H--;)S[w++]=O}}var N=S.subarray(0,T),j=S.subarray(T);_=ku(N),m=ku(j),f=fa(N,_,1),p=fa(j,m,1)}else Ai(1);else{var v=Bw(h)+4,x=s[v-4]|s[v-3]<<8,E=v+x;if(E>i){l&&Ai(0);break}a&&c(d+x),t.set(s.subarray(v,E),d),e.b=d+=x,e.p=h=E*8,e.f=u;continue}if(h>g){l&&Ai(0);break}}a&&c(d+131072);for(var ie=(1<<_)-1,ae=(1<<m)-1,fe=h;;fe=h){var O=f[zu(s,h)&ie],Se=O>>4;if(h+=O&15,h>g){l&&Ai(0);break}if(O||Ai(2),Se<256)t[d++]=Se;else if(Se==256){fe=h,f=null;break}else{var W=Se-254;if(Se>264){var w=Se-257,K=I_[w];W=yi(s,h,(1<<K)-1)+L_[w],h+=K}var oe=p[zu(s,h)&ae],te=oe>>4;oe||Ai(3),h+=oe&15;var j=Dw[te];if(te>3){var K=P_[te];j+=zu(s,h)&(1<<K)-1,h+=K}if(h>g){l&&Ai(0);break}a&&c(d+131072);var xe=d+W;if(d<j){var Ae=r-j,be=Math.min(j,xe);for(Ae+d<0&&Ai(3);d<be;++d)t[d]=n[Ae+d]}for(;d<xe;++d)t[d]=t[d-j]}}e.l=f,e.p=fe,e.b=d,e.f=u,f&&(u=1,e.m=_,e.d=p,e.n=m)}while(!u);return d!=t.length&&o?Uw(t,0,d):t.subarray(0,d)},kw=new oi(0),zw=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&Ai(6,"invalid zlib data"),(s[1]>>5&1)==+!e&&Ai(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function Hw(s,e){return Nw(s.subarray(zw(s,e),-4),{i:2},e,e)}var Vw=typeof TextDecoder<"u"&&new TextDecoder,Gw=0;try{Vw.decode(kw,{stream:!0}),Gw=1}catch{}function U_(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,o=Math.floor((i+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:i=o,o=Math.floor((i+r)/2);return o}function Ww(s,e,t,n){const i=[],r=[],o=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[s+1-a],o[a]=n[s+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],h=r[a-c],d=i[c]/(u+h);i[c]=l+u*d,l=h*d}i[a]=l}return i}function Xw(s,e,t,n){const i=U_(s,n,e),r=Ww(i,n,s,e),o=new Ze(0,0,0,0);for(let a=0;a<=s;++a){const l=t[i-s+a],c=r[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function qw(s,e,t,n,i){const r=[];for(let h=0;h<=t;++h)r[h]=0;const o=[];for(let h=0;h<=n;++h)o[h]=r.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=r.slice(0);a[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let h=1;h<=t;++h){l[h]=e-i[s+1-h],c[h]=i[s+h]-e;let d=0;for(let f=0;f<h;++f){const p=c[f+1],_=l[h-f];a[h][f]=p+_;const m=a[f][h-1]/a[h][f];a[f][h]=d+p*m,d=_*m}a[h][h]=d}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let d=0,f=1;const p=[];for(let _=0;_<=t;++_)p[_]=r.slice(0);p[0][0]=1;for(let _=1;_<=n;++_){let m=0;const g=h-_,y=t-_;h>=_&&(p[f][0]=p[d][0]/a[y+1][g],m=p[f][0]*a[g][y]);const v=g>=-1?1:-g,x=h-1<=y?_-1:t-h;for(let T=v;T<=x;++T)p[f][T]=(p[d][T]-p[d][T-1])/a[y+1][g+T],m+=p[f][T]*a[g+T][y];h<=y&&(p[f][_]=-p[d][_-1]/a[y+1][h],m+=p[f][_]*a[h][y]),o[_][h]=m;const E=d;d=f,f=E}}let u=t;for(let h=1;h<=n;++h){for(let d=0;d<=t;++d)o[h][d]*=u;u*=t-h}return o}function Yw(s,e,t,n,i){const r=i<s?i:s,o=[],a=U_(s,n,e),l=qw(a,n,s,r,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),d=h.w;h.x*=d,h.y*=d,h.z*=d,c[u]=h}for(let u=0;u<=r;++u){const h=c[a-s].clone().multiplyScalar(l[u][0]);for(let d=1;d<=s;++d)h.add(c[a-s+d].clone().multiplyScalar(l[u][d]));o[u]=h}for(let u=r+1;u<=i+1;++u)o[u]=new Ze(0,0,0);return o}function Qw(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function Kw(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const o=s[r];t[r]=new I(o.x,o.y,o.z),n[r]=o.w}const i=[];for(let r=0;r<e;++r){const o=t[r].clone();for(let a=1;a<=r;++a)o.sub(i[r-a].clone().multiplyScalar(Qw(r,a)*n[a]));i[r]=o.divideScalar(n[0])}return i}function jw(s,e,t,n,i){const r=Yw(s,e,t,n,i);return Kw(r)}class Zw extends PE{constructor(e,t,n,i,r){super();const o=t?t.length-1:0,a=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||o;for(let l=0;l<a;++l){const c=n[l];this.controlPoints[l]=new Ze(c.x,c.y,c.z,c.w)}}getPoint(e,t=new I){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=Xw(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new I){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=jw(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new Ze(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let je,Ot,Tn;class $w extends Ar{constructor(e){super(e)}load(e,t,n,i){const r=this,o=r.path===""?_C.extractUrlBase(e):r.path,a=new lC(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(s1(e))je=new i1().parse(e);else{const i=k_(e);if(!r1(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Gm(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Gm(i));je=new n1().parse(i)}const n=new uC(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Jw(n,this.manager).parse(je)}}class Jw{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Ot=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new e1().parse(i);return this.parseScene(i,r,n),Tn}parseConnections(){const e=new Map;return"Connections"in je&&je.Connections.connections.forEach(function(n){const i=n[0],r=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:r,relationship:o};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in je.Objects){const n=je.Objects.Video;for(const i in n){const r=n[i],o=parseInt(i);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){const a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in je.Objects){const n=je.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,o=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?Ta:as,n.wrapT=a===0?Ta:as,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){const n=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),i=e.FileName.split(".").pop().toLowerCase(),r=n.has(i)?this.manager.getHandler(`.${i}`):this.textureLoader;if(!r)return console.warn(`FBXLoader: ${i.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new ln;const o=r.path;o||r.setPath(this.textureLoader.path);const a=Ot.get(e.id).children;let l;a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(l=t[a[0].ID],(l.indexOf("blob:")===0||l.indexOf("data:")===0)&&r.setPath(void 0));const c=r.load(l);return r.setPath(o),c}parseMaterials(e){const t=new Map;if("Material"in je.Objects){const n=je.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!Ot.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(r.toLowerCase()){case"phong":a=new Mu;break;case"lambert":a=new KE;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new Mu;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=Ye.toWorkingColorSpace(new Ne().fromArray(e.Diffuse.value),Tt):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=Ye.toWorkingColorSpace(new Ne().fromArray(e.DiffuseColor.value),Tt)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=Ye.toWorkingColorSpace(new Ne().fromArray(e.Emissive.value),Tt):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=Ye.toWorkingColorSpace(new Ne().fromArray(e.EmissiveColor.value),Tt)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),i.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=e.Opacity?parseFloat(e.Opacity.value):null,i.opacity===null&&(i.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=Ye.toWorkingColorSpace(new Ne().fromArray(e.Specular.value),Tt):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=Ye.toWorkingColorSpace(new Ne().fromArray(e.SpecularColor.value),Tt));const r=this;return Ot.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=Tt);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=Tt);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=ic,i.envMap.colorSpace=Tt);break;case"SpecularColor":i.specularMap=r.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=Tt);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in je.Objects&&t in je.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Ot.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in je.Objects){const n=je.Objects.Deformer;for(const i in n){const r=n[i],o=Ot.get(parseInt(i));if(r.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new ue().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Ot.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){Tn=new dr;const i=this.parseModels(e.skeletons,t,n),r=je.Objects.Model,o=this;i.forEach(function(l){const c=r[l.ID];o.setLookAtProperties(l,c),Ot.get(l.ID).parents.forEach(function(h){const d=i.get(h.ID);d!==void 0&&d.add(l)}),l.parent===null&&Tn.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),Tn.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=N_(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new t1().parse();Tn.children.length===1&&Tn.children[0].isGroup&&(Tn.children[0].animations=a,Tn=Tn.children[0]),Tn.animations=a}parseModels(e,t,n){const i=new Map,r=je.Objects.Model;for(const o in r){const a=parseInt(o),l=r[o],c=Ot.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Wh;break;case"Null":default:u=new dr;break}u.name=l.attrName?at.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=a}this.getTransformData(u,l),i.set(a,u)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const h=r;r=new Wh,r.matrixWorld.copy(c.transformLink),r.name=i?at.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,l.bones[u]=r,h!==null&&r.add(h)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=je.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new ht;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new gn(u,c,r,o),h!==null&&t.setFocalLength(h);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new ht;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new ht;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=je.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new ht;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=Ye.toWorkingColorSpace(new Ne().fromArray(n.Color.value),Tt));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new gm(r,o,a,l);break;case 1:t=new mC(r,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=qt.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=qt.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new dC(r,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new gm(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Mu({name:Ar.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(i=new bE(r,o),i.normalizeSkinWeights()):i=new yt(r,o),i}createCurve(e,t){const n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),i=new y0({name:Ar.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new IE(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Ga(t.RotationOrder.value):n.eulerOrder=Ga(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Ot.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=je.Objects.Model[i.ID];if("Lcl_Translation"in r){const o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),Tn.add(e.target)):e.lookAt(new I().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const o=e[r];Ot.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;Ot.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new Wd(o.bones),i[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in je.Objects){const t=je.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new ue().fromArray(r.Matrix.a)}):e[i.Node]=new ue().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in je){if("AmbientColor"in je.GlobalSettings){const e=je.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new Ne().setRGB(t,n,i,Tt);Tn.add(new gC(r,1))}}"UnitScaleFactor"in je.GlobalSettings&&(Tn.userData.unitScaleFactor=je.GlobalSettings.UnitScaleFactor.value)}}}class e1{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in je.Objects){const n=je.Objects.Geometry;for(const i in n){const r=Ot.get(parseInt(i)),o=this.parseGeometry(r,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],o=e.parents.map(function(h){return je.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,d){return i[d.ID]!==void 0&&(h=i[d.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&r.push(n.morphTargets[h.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Ga(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=N_(c);return this.genGeometry(t,a,r,u)}genGeometry(e,t,n,i){const r=new xn;e.attrName&&(r.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Gt(a.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new Gt(a.colors,3)),t&&(r.setAttribute("skinIndex",new zd(a.weightsIndices,4)),r.setAttribute("skinWeight",new Gt(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){const c=new Ue().getNormalMatrix(i),u=new Gt(a.normal,3);u.applyNormalMatrix(c),r.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){const h=u===0?"uv":`uv${u}`;r.setAttribute(h,new Gt(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,d){h!==c&&(r.addGroup(u,d-u,c),c=h,u=d)}),r.groups.length>0){const h=r.groups[r.groups.length-1],d=h.start+h.count;d!==a.materialIndex.length&&r.addGroup(d,a.materialIndex.length-d,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,o=[],a=[],l=[],c=[],u=[],h=[];const d=this;return e.vertexIndices.forEach(function(f,p){let _,m=!1;f<0&&(f=f^-1,m=!0);let g=[],y=[];if(o.push(f*3,f*3+1,f*3+2),e.color){const v=Il(p,n,f,e.color);l.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(v){y.push(v.weight),g.push(v.id)}),y.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const v=[0,0,0,0],x=[0,0,0,0];y.forEach(function(E,T){let A=E,C=g[T];x.forEach(function(S,M,w){if(A>S){w[M]=A,A=S;const L=v[M];v[M]=C,C=L}})}),g=v,y=x}for(;y.length<4;)y.push(0),g.push(0);for(let v=0;v<4;++v)u.push(y[v]),h.push(g[v])}if(e.normal){const v=Il(p,n,f,e.normal);a.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=Il(p,n,f,e.material)[0],_<0&&(d.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(v,x){const E=Il(p,n,f,v);c[x]===void 0&&(c[x]=[]),c[x].push(E[0]),c[x].push(E[1])}),i++,m&&(d.genFace(t,e,o,_,a,l,c,u,h,i),n++,i=0,o=[],a=[],l=[],c=[],u=[],h=[])}),t}getNormalNewell(e){const t=new I(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],r=e[(n+1)%e.length];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new I(0,1,0):new I(0,0,1)).cross(t).normalize(),r=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:r}}flattenVertex(e,t,n){return new he(e.dot(t),e.dot(n))}genFace(e,t,n,i,r,o,a,l,c,u){let h;if(u>3){const d=[],f=t.baseVertexPositions||t.vertexPositions;for(let g=0;g<n.length;g+=3)d.push(new I(f[n[g]],f[n[g+1]],f[n[g+2]]));const{tangent:p,bitangent:_}=this.getNormalTangentAndBitangent(d),m=[];for(const g of d)m.push(this.flattenVertex(g,p,_));h=qd.triangulateShape(m,[])}else h=[[0,1,2]];for(const[d,f,p]of h)e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[p*3]]),e.vertex.push(t.vertexPositions[n[p*3+1]]),e.vertex.push(t.vertexPositions[n[p*3+2]]),t.skeleton&&(e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[p*4]),e.vertexWeights.push(l[p*4+1]),e.vertexWeights.push(l[p*4+2]),e.vertexWeights.push(l[p*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[p*4]),e.weightsIndices.push(c[p*4+1]),e.weightsIndices.push(c[p*4+2]),e.weightsIndices.push(c[p*4+3])),t.color&&(e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[p*3]),e.colors.push(o[p*3+1]),e.colors.push(o[p*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[p*3]),e.normal.push(r[p*3+1]),e.normal.push(r[p*3+2])),t.uv&&t.uv.forEach(function(_,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(a[m][d*2]),e.uvs[m].push(a[m][d*2+1]),e.uvs[m].push(a[m][f*2]),e.uvs[m].push(a[m][f*2+1]),e.uvs[m].push(a[m][p*2]),e.uvs[m].push(a[m][p*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=je.Objects.Geometry[a.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,r){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],u=e.attributes.position.count*3,h=new Float32Array(u);for(let _=0;_<c.length;_++){const m=c[_]*3;h[m]=l[_*3],h[m+1]=l[_*3+1],h[m+2]=l[_*3+2]}const d={vertexIndices:a,vertexPositions:h,baseVertexPositions:o},f=this.genBuffers(d),p=new Gt(f.vertex,3);p.name=r||n.attrName,p.applyMatrix4(i),e.morphAttributes.position.push(p)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new Ne;o<i.length;o+=4)a.fromArray(i,o),Ye.toWorkingColorSpace(a,Tt),a.toArray(i,o);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let o=0;o<i.length;++o)r.push(o);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new xn;const n=t-1,i=e.KnotVector.a,r=[],o=e.Points.a;for(let h=0,d=o.length;h<d;h+=4)r.push(new Ze().fromArray(o,h));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let h=0;h<n;++h)r.push(r[h])}const u=new Zw(n,i,r,a,l).getPoints(r.length*12);return new xn().setFromPoints(u)}}class t1{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(je.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=je.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=je.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(o1),values:t[n].KeyValueFloat.a},r=Ot.get(i.id);if(r!==void 0){const o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=je.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],o=Ot.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[c]===void 0){const h=Ot.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(h!==void 0){const d=je.Objects.Model[h.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:d.attrName?at.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Tn.traverse(function(p){p.ID===d.id&&(f.transform=p.matrix,p.userData.transformData&&(f.eulerOrder=p.userData.transformData.eulerOrder))}),f.transform||(f.transform=new ue),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),r[c]=f}}r[c]&&(r[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[c]===void 0){const h=Ot.get(l.ID).parents.filter(function(g){return g.relationship!==void 0})[0].ID,d=Ot.get(h).parents[0].ID,f=Ot.get(d).parents[0].ID,p=Ot.get(f).parents[0].ID,_=je.Objects.Model[p],m={modelName:_.attrName?at.sanitizeNodeName(_.attrName):"",morphName:je.Objects.Deformer[h].attrName};r[c]=m}r[c][u.attr]=u}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=je.Objects.AnimationStack,n={};for(const i in t){const r=Ot.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new nC(e.name,-1,t)}generateTracks(e){const t=[];let n=new I,i=new I;if(e.transform&&e.transform.decompose(n,new st,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new La(e+"."+i,r,o)}generateRotationTrack(e,t,n,i,r){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const d=this.interpolateRotations(t.x,t.y,t.z,r);o=d[0],a=d[1]}const l=Ga(0);n!==void 0&&(n=n.map(qt.degToRad),n.push(l),n=new Jt().fromArray(n),n=new st().setFromEuler(n)),i!==void 0&&(i=i.map(qt.degToRad),i.push(l),i=new Jt().fromArray(i),i=new st().setFromEuler(i).invert());const c=new st,u=new Jt,h=[];if(!a||!o)return new Io(e+".quaternion",[0],[0]);for(let d=0;d<a.length;d+=3)u.set(a[d],a[d+1],a[d+2],r),c.setFromEuler(u),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),d>2&&new st().fromArray(h,(d-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(h,d/3*4);return new Io(e+".quaternion",o,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=Tn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Fa(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const o=t[r];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];r.push(u),i[0]=u}else r.push(i[0]);if(a!==-1){const u=t.y.values[a];r.push(u),i[1]=u}else r.push(i[1]);if(l!==-1){const u=t.z.values[l];r.push(u),i[2]=u}else r.push(i[2])}),r}interpolateRotations(e,t,n,i){const r=[],o=[];r.push(e.times[0]),o.push(qt.degToRad(e.values[0])),o.push(qt.degToRad(t.values[0])),o.push(qt.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(qt.degToRad),u=[e.values[a],t.values[a],n.values[a]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;const h=u.map(qt.degToRad),d=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],f=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const _=Math.max(...f)/180,m=new Jt(...c,i),g=new Jt(...h,i),y=new st().setFromEuler(m),v=new st().setFromEuler(g);y.dot(v)&&v.set(-v.x,-v.y,-v.z,-v.w);const x=e.times[a-1],E=e.times[a]-x,T=new st,A=new Jt;for(let C=0;C<1;C+=1/_)T.copy(y.clone().slerp(v.clone(),C)),r.push(x+C*E),A.setFromQuaternion(T,i),o.push(A.x),o.push(A.y),o.push(A.z)}else r.push(e.times[a]),o.push(qt.degToRad(e.values[a])),o.push(qt.degToRad(t.values[a])),o.push(qt.degToRad(n.values[a]))}return[r,o]}}class n1{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new O_,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=r.split(",").slice(3);h=h.map(function(d){return d.trim().replace(/^"/,"")}),i="connections",r=[c,u],l1(r,h),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=r),i in o&&Array.isArray(o[i])?o[i].push(r):i!=="a"?o[i]=r:o.a=r,this.setCurrentProp(o,i),i==="a"&&r.slice(-1)!==","&&(o.a=Vu(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Vu(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Vu(c);break}this.getPrevNode()[r]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class i1{parse(e){const t=new Vm(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new O_;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let d=0;d<r;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(a,n,d)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,o){o!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=Hw(new Uint8Array(e.getArrayBuffer(o))),l=new Vm(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Vm{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class O_{add(e,t){this[e]=t}}function s1(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===k_(s,0,e.length)}function r1(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function Gm(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function o1(s){return s/46186158e3}const a1=[];function Il(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,o=r+n.dataSize;return c1(a1,n.buffer,r,o)}const Hu=new Jt,qr=new I;function N_(s){const e=new ue,t=new ue,n=new ue,i=new ue,r=new ue,o=new ue,a=new ue,l=new ue,c=new ue,u=new ue,h=new ue,d=new ue,f=s.inheritType?s.inheritType:0;s.translation&&e.setPosition(qr.fromArray(s.translation));const p=Ga(0);if(s.preRotation){const w=s.preRotation.map(qt.degToRad);w.push(p),t.makeRotationFromEuler(Hu.fromArray(w))}if(s.rotation){const w=s.rotation.map(qt.degToRad);w.push(s.eulerOrder||p),n.makeRotationFromEuler(Hu.fromArray(w))}if(s.postRotation){const w=s.postRotation.map(qt.degToRad);w.push(p),i.makeRotationFromEuler(Hu.fromArray(w)),i.invert()}s.scale&&r.scale(qr.fromArray(s.scale)),s.scalingOffset&&a.setPosition(qr.fromArray(s.scalingOffset)),s.scalingPivot&&o.setPosition(qr.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(qr.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(qr.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(h.copy(s.parentMatrix),u.copy(s.parentMatrixWorld));const _=t.clone().multiply(n).multiply(i),m=new ue;m.extractRotation(u);const g=new ue;g.copyPosition(u);const y=g.clone().invert().multiply(u),v=m.clone().invert().multiply(y),x=r,E=new ue;if(f===0)E.copy(m).multiply(_).multiply(v).multiply(x);else if(f===1)E.copy(m).multiply(v).multiply(_).multiply(x);else{const L=new ue().scale(new I().setFromMatrixScale(h)).clone().invert(),P=v.clone().multiply(L);E.copy(m).multiply(_).multiply(P).multiply(x)}const T=c.clone().invert(),A=o.clone().invert();let C=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(T).multiply(a).multiply(o).multiply(r).multiply(A);const S=new ue().copyPosition(C),M=u.clone().multiply(S);return d.copyPosition(M),C=d.clone().multiply(E),C.premultiply(u.invert()),C}function Ga(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function Vu(s){return s.split(",").map(function(t){return parseFloat(t)})}function k_(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function l1(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function c1(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}function u1(s,e){jn(e,!0);const t=Hi(),n=()=>kt(Hc,"$collisionObjects",t);new $w().load(e.path,function(i){e.scene.add(i),i.traverse(r=>{r.isMesh&&(r.visible=!1,n().push(r))})},function(i){console.log(i.loaded/i.total*100+"% loaded")},function(i){console.log("An error happened")}),Zn()}var h1=pi('<dialog id="cube_modal" class="modal"><div class="modal-box"><h3 class="font-bold text-lg">Cube</h3> <div class="py-4"><p>Det här är en fantastisk geometrisk figur!</p> <br> <img src="cube.png" width="300"></div> <div class="modal-action"><form method="dialog"><button class="btn">Close</button></form></div></div></dialog>');function d1(s,e){jn(e,!0);const t=Hi(),n=()=>kt(Hc,"$collisionObjects",t),i=()=>kt(mf,"$collisions",t);let r;Vi(()=>{const l=new Ys(.2,.2,.2),c=new T0;r=new yt(l,c),e.scene.add(r),n().push(r),i().push({object:r,function:()=>document.getElementById("cube_modal").showModal()}),e.registerObject({update:o})});function o(l){r&&(r.rotation.x=l/2e3,r.rotation.y=l/1e3)}var a=h1();hi(s,a),Zn()}var f1=pi('<dialog id="frame_modal" class="modal"><div class="modal-box"><h3 class="font-bold text-lg">Riktig fågel!</h3> <div class="py-4"><p>Detta är en riktig fågel från fågellandet.</p> <br> <img src="frame.png" width="300"></div> <div class="modal-action"><form method="dialog"><button class="btn">Close</button></form></div></div></dialog>');function p1(s,e){jn(e,!0);const t=Hi(),n=()=>kt(Hc,"$collisionObjects",t),i=()=>kt(mf,"$collisions",t);Vi(()=>{const o=new Ys(1,1.4,.2),a=new T0,l=new yt(o,a);l.visible=!1,l.position.set(3.8,.1,2),e.scene.add(l),n().push(l),i().push({object:l,function:()=>document.getElementById("frame_modal").showModal()})});var r=f1();hi(s,r),Zn()}const cr=class cr{constructor(e,t){let n,i;this.promise=new Promise((c,u)=>{n=c,i=u});const r=n.bind(this),o=i.bind(this),a=(...c)=>{r(...c)},l=c=>{o(c)};e(a.bind(this),l.bind(this)),this.abortHandler=t,this.id=cr.idGen++}then(e){return new cr((t,n)=>{this.promise=this.promise.then((...i)=>{const r=e(...i);r instanceof Promise||r instanceof cr?r.then((...o)=>{t(...o)}):t(r)}).catch(i=>{n(i)})},this.abortHandler)}catch(e){return new cr(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}};le(cr,"idGen",0);let Wa=cr;class jl extends Error{constructor(e){super(e)}}(function(){const s=new Float32Array(1),e=new Int32Array(s.buffer);return function(t){s[0]=t;const n=e[0];let i=n>>16&32768,r=n>>12&2047;const o=n>>23&255;return o<103?i:o>142?(i|=31744,i|=(o==255?0:1)&&n&8388607,i):o<113?(r|=2048,i|=(r>>114-o)+(r>>113-o&1),i):(i|=o-112<<10|r>>1,i+=r&1,i)}})();const Gu=function(){const s=new Float32Array(1),e=new Int32Array(s.buffer);return function(t){return s[0]=t,e[0]}}(),m1=function(s,e){return s[e]+(s[e+1]<<8)+(s[e+2]<<16)+(s[e+3]<<24)},_f=function(s,e,t=!0){const n=new AbortController,i=n.signal;let r=!1;const o=a=>{n.abort(new jl(a)),r=!0};return new Wa((a,l)=>{fetch(s,{signal:i}).then(async c=>{if(!c.ok){const _=await c.text();l(new Error(`Fetch failed: ${c.status} ${c.statusText} ${_}`));return}const u=c.body.getReader();let h=0,d=c.headers.get("Content-Length"),f=d?parseInt(d):void 0;const p=[];for(;!r;)try{const{value:_,done:m}=await u.read();if(m){if(e&&e(100,"100%",_,f),t){const v=new Blob(p).arrayBuffer();a(v)}else a();break}h+=_.length;let g,y;f!==void 0&&(g=h/f*100,y=`${g.toFixed(2)}%`),t&&p.push(_),e&&e(g,y,_,f)}catch(_){l(_);return}}).catch(c=>{l(c)})},o)},an=function(s,e,t){return Math.max(Math.min(s,t),e)},Yr=function(){return performance.now()/1e3},$r=s=>{if(s.geometry&&(s.geometry.dispose(),s.geometry=null),s.material&&(s.material.dispose(),s.material=null),s.children)for(let e of s.children)$r(e)},Ei=(s,e)=>new Promise(t=>{window.setTimeout(()=>{t(s())},e?1:50)}),vo=(s=0)=>{switch(s){case 1:return 9;case 2:return 24}return 0},vf=()=>{let s,e;return{promise:new Promise((n,i)=>{s=n,e=i}),resolve:s,reject:e}},Wu=s=>{let e,t;return s||(s=()=>{}),{promise:new Wa((i,r)=>{e=i,t=r},s),resolve:e,reject:t}};class g1{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function xf(){const s=navigator.userAgent;return s.indexOf("iPhone")>0||s.indexOf("iPad")>0}function z_(){if(xf()){const s=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new g1(parseInt(s[1]||0,10),parseInt(s[2]||0,10),parseInt(s[3]||0,10))}else return null}const _1=14,va=class va{constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=vo(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+_1,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let n=vo(e);for(let i=0;i<n;i++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=va.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,i,r,o,a,l,c,u,h,d,f,p,..._){const m=[e,t,n,i,r,o,a,l,c,u,h,d,f,p,...this.defaultSphericalHarmonics];for(let g=0;g<_.length&&g<this.sphericalHarmonicsCount;g++)m[g]=_[g];return this.addSplat(m),m}addSplatFromArray(e,t){const n=e.splats[t],i=va.createSplat(this.sphericalHarmonicsDegree);for(let r=0;r<this.componentCount&&r<n.length;r++)i[r]=n[r];this.addSplat(i)}};le(va,"OFFSET",{X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37});let Ce=va;class $e{}le($e,"DefaultSplatSortDistanceMapPrecision",16),le($e,"MemoryPageSize",65536),le($e,"BytesPerFloat",4),le($e,"BytesPerInt",4),le($e,"MaxScenes",32),le($e,"ProgressiveLoadSectionSize",262144),le($e,"ProgressiveLoadSectionDelayDuration",15),le($e,"SphericalHarmonics8BitCompressionRange",3);const v1=$e.SphericalHarmonics8BitCompressionRange,Ts=v1/2,Xt=ba.toHalfFloat.bind(ba),yf=ba.fromHalfFloat.bind(ba),Ct=(s,e,t=!1,n,i)=>{if(e===0)return s;if(e===1||e===2&&!t)return ba.fromHalfFloat(s);if(e===2)return Sf(s,n,i)},pa=(s,e,t)=>{s=an(s,e,t);const n=t-e;return an(Math.floor((s-e)/n*255),0,255)},Sf=(s,e,t)=>{const n=t-e;return s/255*n+e},H_=(s,e,t)=>pa(yf(s,e,t)),x1=(s,e,t)=>Xt(Sf(s,e,t)),ut=(s,e,t,n=!1)=>t===0?s.getFloat32(e*4,!0):t===1||t===2&&!n?s.getUint16(e*2,!0):s.getUint8(e,!0),y1=function(){const s=e=>e;return function(e,t,n,i=!1){if(t===n)return e;let r=s;return t===2&&i?n===1?r=x1:n==0&&(r=Sf):t===2||t===1?n===0?r=yf:n==2&&(i?r=H_:r=s):t===0&&(n===1?r=Xt:n==2&&(i?r=pa:r=Xt)),r(e)}}(),Qr=(s,e,t,n,i=0)=>{const r=new Uint8Array(s,e),o=new Uint8Array(t,n);for(let a=0;a<i;a++)o[a]=r[a]},Z=class Z{constructor(e,t=!0){le(this,"getSplatScaleAndRotation",function(){const e=new ue,t=new ue,n=new ue,i=new I,r=new I,o=new st;return function(a,l,c,u,h){const d=this.globalSplatIndexToSectionMap[a],f=this.sections[d],p=a-f.splatCountOffset,_=f.bytesPerSplat*p+Z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,f.dataBase+_);r.set(Ct(ut(m,0,this.compressionLevel),this.compressionLevel),Ct(ut(m,1,this.compressionLevel),this.compressionLevel),Ct(ut(m,2,this.compressionLevel),this.compressionLevel)),h&&(h.x!==void 0&&(r.x=h.x),h.y!==void 0&&(r.y=h.y),h.z!==void 0&&(r.z=h.z)),o.set(Ct(ut(m,4,this.compressionLevel),this.compressionLevel),Ct(ut(m,5,this.compressionLevel),this.compressionLevel),Ct(ut(m,6,this.compressionLevel),this.compressionLevel),Ct(ut(m,3,this.compressionLevel),this.compressionLevel)),u?(e.makeScale(r.x,r.y,r.z),t.makeRotationFromQuaternion(o),n.copy(e).multiply(t).multiply(u),n.decompose(i,c,l)):(l.copy(r),c.copy(o))}}());le(this,"fillSplatScaleRotationArray",function(){const e=new ue,t=new ue,n=new ue,i=new I,r=new st,o=new I,a=l=>{const c=l.w<0?-1:1;l.x*=c,l.y*=c,l.z*=c,l.w*=c};return function(l,c,u,h,d,f,p,_){const m=this.splatCount;h=h||0,d=d||m-1,f===void 0&&(f=h);const g=(y,v)=>y1(y,v,p);for(let y=h;y<=d;y++){const v=this.globalSplatIndexToSectionMap[y],x=this.sections[v],E=y-x.splatCountOffset,T=x.bytesPerSplat*E+Z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,A=(y-h+f)*Z.ScaleComponentCount,C=(y-h+f)*Z.RotationComponentCount,S=new DataView(this.bufferData,x.dataBase+T),M=_&&_.x!==void 0?_.x:ut(S,0,this.compressionLevel),w=_&&_.y!==void 0?_.y:ut(S,1,this.compressionLevel),L=_&&_.z!==void 0?_.z:ut(S,2,this.compressionLevel),P=ut(S,3,this.compressionLevel),F=ut(S,4,this.compressionLevel),B=ut(S,5,this.compressionLevel),O=ut(S,6,this.compressionLevel);i.set(Ct(M,this.compressionLevel),Ct(w,this.compressionLevel),Ct(L,this.compressionLevel)),r.set(Ct(F,this.compressionLevel),Ct(B,this.compressionLevel),Ct(O,this.compressionLevel),Ct(P,this.compressionLevel)).normalize(),u&&(o.set(0,0,0),e.makeScale(i.x,i.y,i.z),t.makeRotationFromQuaternion(r),n.identity().premultiply(e).premultiply(t),n.premultiply(u),n.decompose(o,r,i),r.normalize()),a(r),l&&(l[A]=g(i.x,0),l[A+1]=g(i.y,0),l[A+2]=g(i.z,0)),c&&(c[C]=g(r.x,0),c[C+1]=g(r.y,0),c[C+2]=g(r.z,0),c[C+3]=g(r.w,0))}}}());le(this,"fillSphericalHarmonicsArray",function(){for(let F=0;F<15;F++)new I;const e=new Ue,t=new ue,n=new I,i=new I,r=new st,o=[],a=[],l=[],c=[],u=[],h=[],d=[],f=[],p=[],_=[],m=[],g=[],y=[],v=[],x=[],E=[],T=[],A=[],C=F=>F,S=(F,B,O,H)=>{F[0]=B,F[1]=O,F[2]=H},M=(F,B,O,H,N)=>{F[0]=ut(B,H,N,!0),F[1]=ut(B,H+O,N,!0),F[2]=ut(B,H+O+O,N,!0)},w=(F,B)=>{B[0]=F[0],B[1]=F[1],B[2]=F[2]},L=(F,B,O,H)=>{B[O]=H(F[0]),B[O+1]=H(F[1]),B[O+2]=H(F[2])},P=(F,B,O,H,N)=>(B[0]=Ct(F[0],O,!0,H,N),B[1]=Ct(F[1],O,!0,H,N),B[2]=Ct(F[2],O,!0,H,N),B);return function(F,B,O,H,N,j,ie){const ae=this.splatCount;H=H||0,N=N||ae-1,j===void 0&&(j=H),O&&B>=1&&(t.copy(O),t.decompose(n,r,i),r.normalize(),t.makeRotationFromQuaternion(r),e.setFromMatrix4(t),S(o,e.elements[4],-e.elements[7],e.elements[1]),S(a,-e.elements[5],e.elements[8],-e.elements[2]),S(l,e.elements[3],-e.elements[6],e.elements[0]));const fe=W=>H_(W,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),Se=W=>pa(W,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let W=H;W<=N;W++){const K=this.globalSplatIndexToSectionMap[W],oe=this.sections[K];B=Math.min(B,oe.sphericalHarmonicsDegree);const te=vo(B),xe=W-oe.splatCountOffset,Ae=oe.bytesPerSplat*xe+Z.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,be=new DataView(this.bufferData,oe.dataBase+Ae),Ve=(W-H+j)*te;let Be=O?0:this.compressionLevel,ke=C;Be!==ie&&(Be===1?ie===0?ke=yf:ie==2&&(ke=fe):Be===0&&(ie===1?ke=Xt:ie==2&&(ke=Se)));const k=this.minSphericalHarmonicsCoeff,Qe=this.maxSphericalHarmonicsCoeff;B>=1&&(M(p,be,3,0,this.compressionLevel),M(_,be,3,1,this.compressionLevel),M(m,be,3,2,this.compressionLevel),O?(P(p,p,this.compressionLevel,k,Qe),P(_,_,this.compressionLevel,k,Qe),P(m,m,this.compressionLevel,k,Qe),Z.rotateSphericalHarmonics3(p,_,m,o,a,l,v,x,E)):(w(p,v),w(_,x),w(m,E)),L(v,F,Ve,ke),L(x,F,Ve+3,ke),L(E,F,Ve+6,ke),B>=2&&(M(p,be,5,9,this.compressionLevel),M(_,be,5,10,this.compressionLevel),M(m,be,5,11,this.compressionLevel),M(g,be,5,12,this.compressionLevel),M(y,be,5,13,this.compressionLevel),O?(P(p,p,this.compressionLevel,k,Qe),P(_,_,this.compressionLevel,k,Qe),P(m,m,this.compressionLevel,k,Qe),P(g,g,this.compressionLevel,k,Qe),P(y,y,this.compressionLevel,k,Qe),Z.rotateSphericalHarmonics5(p,_,m,g,y,o,a,l,c,u,h,d,f,v,x,E,T,A)):(w(p,v),w(_,x),w(m,E),w(g,T),w(y,A)),L(v,F,Ve+9,ke),L(x,F,Ve+12,ke),L(E,F,Ve+15,ke),L(T,F,Ve+18,ke),L(A,F,Ve+21,ke)))}}}());this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){const n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n;const i=e.fullBucketCount*e.bucketSize;if(t<i)n=Math.floor(t/e.bucketSize);else{let r=i;n=e.fullBucketCount;let o=0;for(;r<e.splatCount;){let a=e.partiallyFilledBucketLengths[o];if(t>=r&&t<r+a)break;r+=a,n++,o++}}return n}getSplatCenter(e,t,n){const i=this.globalSplatIndexToSectionMap[e],r=this.sections[i],o=e-r.splatCountOffset,a=r.bytesPerSplat*o,l=new DataView(this.bufferData,r.dataBase+a),c=ut(l,0,this.compressionLevel),u=ut(l,1,this.compressionLevel),h=ut(l,2,this.compressionLevel);if(this.compressionLevel>=1){const f=this.getBucketIndex(r,o)*Z.BucketStorageSizeFloats,p=r.compressionScaleFactor,_=r.compressionScaleRange;t.x=(c-_)*p+r.bucketArray[f],t.y=(u-_)*p+r.bucketArray[f+1],t.z=(h-_)*p+r.bucketArray[f+2]}else t.x=c,t.y=u,t.z=h;n&&t.applyMatrix4(n)}getSplatColor(e,t){const n=this.globalSplatIndexToSectionMap[e],i=this.sections[n],r=e-i.splatCountOffset,o=i.bytesPerSplat*r+Z.CompressionLevels[this.compressionLevel].ColorOffsetBytes,a=new Uint8Array(this.bufferData,i.dataBase+o,4);t.set(a[0],a[1],a[2],a[3])}fillSplatCenterArray(e,t,n,i,r){const o=this.splatCount;n=n||0,i=i||o-1,r===void 0&&(r=n);const a=new I;for(let l=n;l<=i;l++){const c=this.globalSplatIndexToSectionMap[l],u=this.sections[c],h=l-u.splatCountOffset,d=(l-n+r)*Z.CenterComponentCount,f=u.bytesPerSplat*h,p=new DataView(this.bufferData,u.dataBase+f),_=ut(p,0,this.compressionLevel),m=ut(p,1,this.compressionLevel),g=ut(p,2,this.compressionLevel);if(this.compressionLevel>=1){const v=this.getBucketIndex(u,h)*Z.BucketStorageSizeFloats,x=u.compressionScaleFactor,E=u.compressionScaleRange;a.x=(_-E)*x+u.bucketArray[v],a.y=(m-E)*x+u.bucketArray[v+1],a.z=(g-E)*x+u.bucketArray[v+2]}else a.x=_,a.y=m,a.z=g;t&&a.applyMatrix4(t),e[d]=a.x,e[d+1]=a.y,e[d+2]=a.z}}fillSplatCovarianceArray(e,t,n,i,r,o){const a=this.splatCount,l=new I,c=new st;n=n||0,i=i||a-1,r===void 0&&(r=n);for(let u=n;u<=i;u++){const h=this.globalSplatIndexToSectionMap[u],d=this.sections[h],f=u-d.splatCountOffset,p=(u-n+r)*Z.CovarianceComponentCount,_=d.bytesPerSplat*f+Z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,d.dataBase+_);l.set(Ct(ut(m,0,this.compressionLevel),this.compressionLevel),Ct(ut(m,1,this.compressionLevel),this.compressionLevel),Ct(ut(m,2,this.compressionLevel),this.compressionLevel)),c.set(Ct(ut(m,4,this.compressionLevel),this.compressionLevel),Ct(ut(m,5,this.compressionLevel),this.compressionLevel),Ct(ut(m,6,this.compressionLevel),this.compressionLevel),Ct(ut(m,3,this.compressionLevel),this.compressionLevel)),Z.computeCovariance(l,c,t,e,p,o)}}fillSplatColorArray(e,t,n,i,r){const o=this.splatCount;n=n||0,i=i||o-1,r===void 0&&(r=n);for(let a=n;a<=i;a++){const l=this.globalSplatIndexToSectionMap[a],c=this.sections[l],u=a-c.splatCountOffset,h=(a-n+r)*Z.ColorComponentCount,d=c.bytesPerSplat*u+Z.CompressionLevels[this.compressionLevel].ColorOffsetBytes,f=new Uint8Array(this.bufferData,c.dataBase+d);let p=f[3];p=p>=t?p:0,e[h]=f[0],e[h+1]=f[1],e[h+2]=f[2],e[h+3]=p}}static parseHeader(e){const t=new Uint8Array(e,0,Z.HeaderSizeBytes),n=new Uint16Array(e,0,Z.HeaderSizeBytes/2),i=new Uint32Array(e,0,Z.HeaderSizeBytes/4),r=new Float32Array(e,0,Z.HeaderSizeBytes/4),o=t[0],a=t[1],l=i[1],c=i[2],u=i[3],h=i[4],d=n[10],f=new I(r[6],r[7],r[8]),p=r[9]||-Ts,_=r[10]||Ts;return{versionMajor:o,versionMinor:a,maxSectionCount:l,sectionCount:c,maxSplatCount:u,splatCount:h,compressionLevel:d,sceneCenter:f,minSphericalHarmonicsCoeff:p,maxSphericalHarmonicsCoeff:_}}static writeHeaderCountsToBuffer(e,t,n){const i=new Uint32Array(n,0,Z.HeaderSizeBytes/4);i[2]=e,i[4]=t}static writeHeaderToBuffer(e,t){const n=new Uint8Array(t,0,Z.HeaderSizeBytes),i=new Uint16Array(t,0,Z.HeaderSizeBytes/2),r=new Uint32Array(t,0,Z.HeaderSizeBytes/4),o=new Float32Array(t,0,Z.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,r[1]=e.maxSectionCount,r[2]=e.sectionCount,r[3]=e.maxSplatCount,r[4]=e.splatCount,i[10]=e.compressionLevel,o[6]=e.sceneCenter.x,o[7]=e.sceneCenter.y,o[8]=e.sceneCenter.z,o[9]=e.minSphericalHarmonicsCoeff||-Ts,o[10]=e.maxSphericalHarmonicsCoeff||Ts}static parseSectionHeaders(e,t,n=0,i){const r=e.compressionLevel,o=e.maxSectionCount,a=new Uint16Array(t,n,o*Z.SectionHeaderSizeBytes/2),l=new Uint32Array(t,n,o*Z.SectionHeaderSizeBytes/4),c=new Float32Array(t,n,o*Z.SectionHeaderSizeBytes/4),u=[];let h=0,d=h/2,f=h/4,p=Z.HeaderSizeBytes+e.maxSectionCount*Z.SectionHeaderSizeBytes,_=0;for(let m=0;m<o;m++){const g=l[f+1],y=l[f+2],v=l[f+3],x=c[f+4],E=x/2,T=a[d+10],A=l[f+6]||Z.CompressionLevels[r].ScaleRange,C=l[f+8],S=l[f+9],M=S*4,w=T*v+M,L=a[d+20],{bytesPerSplat:P}=Z.calculateComponentStorage(r,L),F=P*g,B=F+w,O={bytesPerSplat:P,splatCountOffset:_,splatCount:i?g:0,maxSplatCount:g,bucketSize:y,bucketCount:v,bucketBlockSize:x,halfBucketBlockSize:E,bucketStorageSizeBytes:T,bucketsStorageSizeBytes:w,splatDataStorageSizeBytes:F,storageSizeBytes:B,compressionScaleRange:A,compressionScaleFactor:E/A,base:p,bucketsBase:p+M,dataBase:p+w,fullBucketCount:C,partiallyFilledBucketCount:S,sphericalHarmonicsDegree:L};u[m]=O,p+=B,h+=Z.SectionHeaderSizeBytes,d=h/2,f=h/4,_+=g}return u}static writeSectionHeaderToBuffer(e,t,n,i=0){const r=new Uint16Array(n,i,Z.SectionHeaderSizeBytes/2),o=new Uint32Array(n,i,Z.SectionHeaderSizeBytes/4),a=new Float32Array(n,i,Z.SectionHeaderSizeBytes/4);o[0]=e.splatCount,o[1]=e.maxSplatCount,o[2]=t>=1?e.bucketSize:0,o[3]=t>=1?e.bucketCount:0,a[4]=t>=1?e.bucketBlockSize:0,r[10]=t>=1?Z.BucketStorageSizeBytes:0,o[6]=t>=1?e.compressionScaleRange:0,o[7]=e.storageSizeBytes,o[8]=t>=1?e.fullBucketCount:0,o[9]=t>=1?e.partiallyFilledBucketCount:0,r[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){const i=new Uint32Array(t,n,Z.SectionHeaderSizeBytes/4);i[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const n=Z.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new I().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=Z.parseSectionHeaders(n,this.bufferData,Z.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){const n=Z.CompressionLevels[e].BytesPerCenter,i=Z.CompressionLevels[e].BytesPerScale,r=Z.CompressionLevels[e].BytesPerRotation,o=Z.CompressionLevels[e].BytesPerColor,a=vo(t),l=Z.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*a,c=n+i+r+o+l;return{bytesPerCenter:n,bytesPerScale:i,bytesPerRotation:r,bytesPerColor:o,sphericalHarmonicsComponentsPerSplat:a,sphericalHarmonicsBytesPerSplat:l,bytesPerSplat:c}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*Z.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){const n=this.sections[t];for(let i=0;i<n.maxSplatCount;i++){const r=e+i;this.globalSplatIndexToLocalSplatIndexMap[r]=i,this.globalSplatIndexToSectionMap[r]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){Z.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){const n=Z.HeaderSizeBytes+Z.SectionHeaderSizeBytes*e;Z.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static generateFromUncompressedSplatArrays(e,t,n,i,r,o,a=[]){let l=0;for(let E=0;E<e.length;E++){const T=e[E];l=Math.max(T.sphericalHarmonicsDegree,l)}let c,u;for(let E=0;E<e.length;E++){const T=e[E];for(let A=0;A<T.splats.length;A++){const C=T.splats[A];for(let S=Ce.OFFSET.FRC0;S<Ce.OFFSET.FRC23&&S<C.length;S++)(!c||C[S]<c)&&(c=C[S]),(!u||C[S]>u)&&(u=C[S])}}c=c||-Ts,u=u||Ts;const{bytesPerSplat:h}=Z.calculateComponentStorage(n,l),d=Z.CompressionLevels[n].ScaleRange,f=[],p=[];let _=0;for(let E=0;E<e.length;E++){const T=e[E],A=new Ce(l);for(let K=0;K<T.splatCount;K++){const oe=T.splats[K];(oe[Ce.OFFSET.OPACITY]||0)>=t&&A.addSplat(oe)}const C=a[E]||{},S=(C.blockSizeFactor||1)*(r||Z.BucketBlockSize),M=Math.ceil((C.bucketSizeFactor||1)*(o||Z.BucketSize)),w=Z.computeBucketsForUncompressedSplatArray(A,S,M),L=w.fullBuckets.length,P=w.partiallyFullBuckets.map(K=>K.splats.length),F=P.length,B=[...w.fullBuckets,...w.partiallyFullBuckets],O=A.splats.length*h,H=F*4,N=n>=1?B.length*Z.BucketStorageSizeBytes+H:0,j=O+N,ie=new ArrayBuffer(j),ae=d/(S*.5),fe=new I;let Se=0;for(let K=0;K<B.length;K++){const oe=B[K];fe.fromArray(oe.center);for(let te=0;te<oe.splats.length;te++){let xe=oe.splats[te];const Ae=A.splats[xe],be=N+Se*h;Z.writeSplatDataToSectionBuffer(Ae,ie,be,n,l,fe,ae,d,c,u),Se++}}if(_+=Se,n>=1){const K=new Uint32Array(ie,0,P.length*4);for(let te=0;te<P.length;te++)K[te]=P[te];const oe=new Float32Array(ie,H,B.length*Z.BucketStorageSizeFloats);for(let te=0;te<B.length;te++){const xe=B[te],Ae=te*3;oe[Ae]=xe.center[0],oe[Ae+1]=xe.center[1],oe[Ae+2]=xe.center[2]}}f.push(ie);const W=new ArrayBuffer(Z.SectionHeaderSizeBytes);Z.writeSectionHeaderToBuffer({maxSplatCount:Se,splatCount:Se,bucketSize:M,bucketCount:B.length,bucketBlockSize:S,compressionScaleRange:d,storageSizeBytes:j,fullBucketCount:L,partiallyFilledBucketCount:F,sphericalHarmonicsDegree:l},n,W,0),p.push(W)}let m=0;for(let E of f)m+=E.byteLength;const g=Z.HeaderSizeBytes+Z.SectionHeaderSizeBytes*f.length+m,y=new ArrayBuffer(g);Z.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:f.length,sectionCount:f.length,maxSplatCount:_,splatCount:_,compressionLevel:n,sceneCenter:i,minSphericalHarmonicsCoeff:c,maxSphericalHarmonicsCoeff:u},y);let v=Z.HeaderSizeBytes;for(let E of p)new Uint8Array(y,v,Z.SectionHeaderSizeBytes).set(new Uint8Array(E)),v+=Z.SectionHeaderSizeBytes;for(let E of f)new Uint8Array(y,v,E.byteLength).set(new Uint8Array(E)),v+=E.byteLength;return new Z(y)}static computeBucketsForUncompressedSplatArray(e,t,n){let i=e.splatCount;const r=t/2,o=new I,a=new I;for(let _=0;_<i;_++){const m=e.splats[_],g=[m[Ce.OFFSET.X],m[Ce.OFFSET.Y],m[Ce.OFFSET.Z]];(_===0||g[0]<o.x)&&(o.x=g[0]),(_===0||g[0]>a.x)&&(a.x=g[0]),(_===0||g[1]<o.y)&&(o.y=g[1]),(_===0||g[1]>a.y)&&(a.y=g[1]),(_===0||g[2]<o.z)&&(o.z=g[2]),(_===0||g[2]>a.z)&&(a.z=g[2])}const l=new I().copy(a).sub(o),c=Math.ceil(l.y/t),u=Math.ceil(l.z/t),h=new I,d=[],f={};for(let _=0;_<i;_++){const m=e.splats[_],g=[m[Ce.OFFSET.X],m[Ce.OFFSET.Y],m[Ce.OFFSET.Z]],y=Math.floor((g[0]-o.x)/t),v=Math.floor((g[1]-o.y)/t),x=Math.floor((g[2]-o.z)/t);h.x=y*t+o.x+r,h.y=v*t+o.y+r,h.z=x*t+o.z+r;const E=y*(c*u)+v*u+x;let T=f[E];T||(f[E]=T={splats:[],center:h.toArray()}),T.splats.push(_),T.splats.length>=n&&(d.push(T),f[E]=null)}const p=[];for(let _ in f)if(f.hasOwnProperty(_)){const m=f[_];m&&p.push(m)}return{fullBuckets:d,partiallyFullBuckets:p}}};le(Z,"CurrentMajorVersion",0),le(Z,"CurrentMinorVersion",1),le(Z,"CenterComponentCount",3),le(Z,"ScaleComponentCount",3),le(Z,"RotationComponentCount",4),le(Z,"ColorComponentCount",4),le(Z,"CovarianceComponentCount",6),le(Z,"SplatScaleOffsetFloat",3),le(Z,"SplatRotationOffsetFloat",6),le(Z,"CompressionLevels",{0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}}),le(Z,"CovarianceSizeFloats",6),le(Z,"HeaderSizeBytes",4096),le(Z,"SectionHeaderSizeBytes",1024),le(Z,"BucketStorageSizeBytes",12),le(Z,"BucketStorageSizeFloats",3),le(Z,"BucketBlockSize",5),le(Z,"BucketSize",256),le(Z,"computeCovariance",function(){const e=new ue,t=new Ue,n=new Ue,i=new Ue,r=new Ue,o=new Ue,a=new Ue;return function(l,c,u,h,d=0,f){e.makeScale(l.x,l.y,l.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(c),n.setFromMatrix4(e),i.copy(n).multiply(t),r.copy(i).transpose().premultiply(i),u&&(o.setFromMatrix4(u),a.copy(o).transpose(),r.multiply(a),r.premultiply(o)),f>=1?(h[d]=Xt(r.elements[0]),h[d+1]=Xt(r.elements[3]),h[d+2]=Xt(r.elements[6]),h[d+3]=Xt(r.elements[4]),h[d+4]=Xt(r.elements[7]),h[d+5]=Xt(r.elements[8])):(h[d]=r.elements[0],h[d+1]=r.elements[3],h[d+2]=r.elements[6],h[d+3]=r.elements[4],h[d+4]=r.elements[7],h[d+5]=r.elements[8])}}()),le(Z,"dot3",(e,t,n,i,r)=>{r[0]=r[1]=r[2]=0;const o=i[0],a=i[1],l=i[2];Z.addInto3(e[0]*o,e[1]*o,e[2]*o,r),Z.addInto3(t[0]*a,t[1]*a,t[2]*a,r),Z.addInto3(n[0]*l,n[1]*l,n[2]*l,r)}),le(Z,"addInto3",(e,t,n,i)=>{i[0]=i[0]+e,i[1]=i[1]+t,i[2]=i[2]+n}),le(Z,"dot5",(e,t,n,i,r,o,a)=>{a[0]=a[1]=a[2]=0;const l=o[0],c=o[1],u=o[2],h=o[3],d=o[4];Z.addInto3(e[0]*l,e[1]*l,e[2]*l,a),Z.addInto3(t[0]*c,t[1]*c,t[2]*c,a),Z.addInto3(n[0]*u,n[1]*u,n[2]*u,a),Z.addInto3(i[0]*h,i[1]*h,i[2]*h,a),Z.addInto3(r[0]*d,r[1]*d,r[2]*d,a)}),le(Z,"rotateSphericalHarmonics3",(e,t,n,i,r,o,a,l,c)=>{Z.dot3(e,t,n,i,a),Z.dot3(e,t,n,r,l),Z.dot3(e,t,n,o,c)}),le(Z,"rotateSphericalHarmonics5",(e,t,n,i,r,o,a,l,c,u,h,d,f,p,_,m,g,y)=>{const v=Math.sqrt(.25),x=Math.sqrt(3/4),E=Math.sqrt(1/3),T=Math.sqrt(4/3),A=Math.sqrt(1/12);c[0]=v*(l[2]*o[0]+l[0]*o[2]+(o[2]*l[0]+o[0]*l[2])),c[1]=l[1]*o[0]+o[1]*l[0],c[2]=x*(l[1]*o[1]+o[1]*l[1]),c[3]=l[1]*o[2]+o[1]*l[2],c[4]=v*(l[2]*o[2]-l[0]*o[0]+(o[2]*l[2]-o[0]*l[0])),Z.dot5(e,t,n,i,r,c,p),u[0]=v*(a[2]*o[0]+a[0]*o[2]+(o[2]*a[0]+o[0]*a[2])),u[1]=a[1]*o[0]+o[1]*a[0],u[2]=x*(a[1]*o[1]+o[1]*a[1]),u[3]=a[1]*o[2]+o[1]*a[2],u[4]=v*(a[2]*o[2]-a[0]*o[0]+(o[2]*a[2]-o[0]*a[0])),Z.dot5(e,t,n,i,r,u,_),h[0]=E*(a[2]*a[0]+a[0]*a[2])+-A*(l[2]*l[0]+l[0]*l[2]+(o[2]*o[0]+o[0]*o[2])),h[1]=T*a[1]*a[0]+-E*(l[1]*l[0]+o[1]*o[0]),h[2]=a[1]*a[1]+-v*(l[1]*l[1]+o[1]*o[1]),h[3]=T*a[1]*a[2]+-E*(l[1]*l[2]+o[1]*o[2]),h[4]=E*(a[2]*a[2]-a[0]*a[0])+-A*(l[2]*l[2]-l[0]*l[0]+(o[2]*o[2]-o[0]*o[0])),Z.dot5(e,t,n,i,r,h,m),d[0]=v*(a[2]*l[0]+a[0]*l[2]+(l[2]*a[0]+l[0]*a[2])),d[1]=a[1]*l[0]+l[1]*a[0],d[2]=x*(a[1]*l[1]+l[1]*a[1]),d[3]=a[1]*l[2]+l[1]*a[2],d[4]=v*(a[2]*l[2]-a[0]*l[0]+(l[2]*a[2]-l[0]*a[0])),Z.dot5(e,t,n,i,r,d,g),f[0]=v*(l[2]*l[0]+l[0]*l[2]-(o[2]*o[0]+o[0]*o[2])),f[1]=l[1]*l[0]-o[1]*o[0],f[2]=x*(l[1]*l[1]-o[1]*o[1]),f[3]=l[1]*l[2]-o[1]*o[2],f[4]=v*(l[2]*l[2]-l[0]*l[0]-(o[2]*o[2]-o[0]*o[0])),Z.dot5(e,t,n,i,r,f,y)}),le(Z,"writeSplatDataToSectionBuffer",function(){const e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),i=new ArrayBuffer(4),r=new ArrayBuffer(256),o=new st,a=new I,l=new I,{X:c,Y:u,Z:h,SCALE0:d,SCALE1:f,SCALE2:p,ROTATION0:_,ROTATION1:m,ROTATION2:g,ROTATION3:y,FDC0:v,FDC1:x,FDC2:E,OPACITY:T,FRC0:A,FRC9:C}=Ce.OFFSET,S=(M,w,L)=>{const P=L*2+1;return M=Math.round(M*w)+L,an(M,0,P)};return function(M,w,L,P,F,B,O,H,N=-Ts,j=Ts){const ie=vo(F),ae=Z.CompressionLevels[P].BytesPerCenter,fe=Z.CompressionLevels[P].BytesPerScale,Se=Z.CompressionLevels[P].BytesPerRotation,W=Z.CompressionLevels[P].BytesPerColor,K=L,oe=K+ae,te=oe+fe,xe=te+Se,Ae=xe+W;if(M[_]!==void 0?(o.set(M[_],M[m],M[g],M[y]),o.normalize()):o.set(1,0,0,0),M[d]!==void 0?a.set(M[d]||0,M[f]||0,M[p]||0):a.set(0,0,0),P===0){const Ve=new Float32Array(w,K,Z.CenterComponentCount),Be=new Float32Array(w,te,Z.RotationComponentCount),ke=new Float32Array(w,oe,Z.ScaleComponentCount);if(Be.set([o.x,o.y,o.z,o.w]),ke.set([a.x,a.y,a.z]),Ve.set([M[c],M[u],M[h]]),F>0){const k=new Float32Array(w,Ae,ie);if(F>=1){for(let Qe=0;Qe<9;Qe++)k[Qe]=M[A+Qe]||0;if(F>=2)for(let Qe=0;Qe<15;Qe++)k[Qe+9]=M[C+Qe]||0}}}else{const Ve=new Uint16Array(e,0,Z.CenterComponentCount),Be=new Uint16Array(n,0,Z.RotationComponentCount),ke=new Uint16Array(t,0,Z.ScaleComponentCount);if(Be.set([Xt(o.x),Xt(o.y),Xt(o.z),Xt(o.w)]),ke.set([Xt(a.x),Xt(a.y),Xt(a.z)]),l.set(M[c],M[u],M[h]).sub(B),l.x=S(l.x,O,H),l.y=S(l.y,O,H),l.z=S(l.z,O,H),Ve.set([l.x,l.y,l.z]),F>0){const k=P===1?Uint16Array:Uint8Array,Qe=P===1?2:1,Ge=new k(r,0,ie);if(F>=1){for(let Ee=0;Ee<9;Ee++){const tt=M[A+Ee]||0;Ge[Ee]=P===1?Xt(tt):pa(tt,N,j)}const We=9*Qe;if(Qr(Ge.buffer,0,w,Ae,We),F>=2){for(let Ee=0;Ee<15;Ee++){const tt=M[C+Ee]||0;Ge[Ee+9]=P===1?Xt(tt):pa(tt,N,j)}Qr(Ge.buffer,We,w,Ae+We,15*Qe)}}}Qr(Ve.buffer,0,w,K,6),Qr(ke.buffer,0,w,oe,6),Qr(Be.buffer,0,w,te,8)}const be=new Uint8ClampedArray(i,0,4);be.set([M[v]||0,M[x]||0,M[E]||0]),be[3]=M[T]||0,Qr(be.buffer,0,w,xe,4)}}());let De=Z;const Wm=new Uint8Array([112,108,121,10]),Xm=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),Xu="end_header",qu=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),Fi=(s,e)=>{const t=(1<<e)-1;return(s&t)/t},qm=(s,e)=>{s.x=Fi(e>>>21,11),s.y=Fi(e>>>11,10),s.z=Fi(e,11)},S1=(s,e)=>{s.x=Fi(e>>>24,8),s.y=Fi(e>>>16,8),s.z=Fi(e>>>8,8),s.w=Fi(e,8)},A1=(s,e)=>{const t=1/(Math.sqrt(2)*.5),n=(Fi(e>>>20,10)-.5)*t,i=(Fi(e>>>10,10)-.5)*t,r=(Fi(e,10)-.5)*t,o=Math.sqrt(1-(n*n+i*i+r*r));switch(e>>>30){case 0:s.set(o,n,i,r);break;case 1:s.set(n,o,i,r);break;case 2:s.set(n,i,o,r);break;case 3:s.set(n,i,r,o);break}},Kr=(s,e,t)=>s*(1-t)+e*t,fn=(s,e)=>{var t;return(t=s.properties.find(n=>n.name===e&&n.storage))==null?void 0:t.storage},pn=class pn{static decodeHeaderText(e){let t,n,i;const r=e.split(`
`).filter(l=>!l.startsWith("comment "));let o=0,a=!1;for(let l=1;l<r.length;++l){const c=r[l].split(" ");switch(c[0]){case"format":if(c[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:c[1],count:parseInt(c[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"&&(i=t);break;case"property":{if(!qu.has(c[1]))throw new Error(`Unrecognized property data type '${c[1]}' in ply header`);const u=qu.get(c[1]),h=u.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(o+=u.BYTES_PER_ELEMENT),t.properties.push({type:c[1],name:c[2],storage:null,byteSize:u.BYTES_PER_ELEMENT,storageSizeByes:h}),t.storageSizeBytes+=h;break}case Xu:a=!0;break;default:throw new Error(`Unrecognized header value '${c[0]}' in ply header`)}if(a)break}return{chunkElement:n,vertexElement:i,bytesPerSplat:o,headerSizeBytes:e.indexOf(Xu)+Xu.length+1,sphericalHarmonicsDegree:0}}static decodeHeader(e){const t=(u,h)=>{const d=u.length-h.length;let f,p;for(f=0;f<=d;++f){for(p=0;p<h.length&&u[f+p]===h[p];++p);if(p===h.length)return f}return-1},n=(u,h)=>{if(u.length<h.length)return!1;for(let d=0;d<h.length;++d)if(u[d]!==h[d])return!1;return!0};let i=new Uint8Array(e),r;if(i.length>=Wm.length&&!n(i,Wm))throw new Error("Invalid PLY header");if(r=t(i,Xm),r===-1)throw new Error("End of PLY header not found");const o=new TextDecoder("ascii").decode(i.slice(0,r)),{chunkElement:a,vertexElement:l,bytesPerSplat:c}=pn.decodeHeaderText(o);return{headerSizeBytes:r+Xm.length,bytesPerSplat:c,chunkElement:a,vertexElement:l}}static readElementData(e,t,n,i,r,o=null){let a=t instanceof DataView?t:new DataView(t);i=i||0,r=r||e.count-1;for(let l=i;l<=r;++l)for(let c=0;c<e.properties.length;++c){const u=e.properties[c],h=qu.get(u.type),d=h.BYTES_PER_ELEMENT*e.count;if((!u.storage||u.storage.byteLength<d)&&(!o||o(u.name))&&(u.storage=new h(e.count)),u.storage)switch(u.type){case"char":u.storage[l]=a.getInt8(n);break;case"uchar":u.storage[l]=a.getUint8(n);break;case"short":u.storage[l]=a.getInt16(n,!0);break;case"ushort":u.storage[l]=a.getUint16(n,!0);break;case"int":u.storage[l]=a.getInt32(n,!0);break;case"uint":u.storage[l]=a.getUint32(n,!0);break;case"float":u.storage[l]=a.getFloat32(n,!0);break;case"double":u.storage[l]=a.getFloat64(n,!0);break}n+=u.byteSize}return n}static readPly(e,t=null){const n=pn.decodeHeader(e);let i=pn.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return pn.readElementData(n.vertexElement,e,i,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement}}static getElementStorageArrays(e,t){const n=fn(e,"min_x"),i=fn(e,"min_y"),r=fn(e,"min_z"),o=fn(e,"max_x"),a=fn(e,"max_y"),l=fn(e,"max_z"),c=fn(e,"min_scale_x"),u=fn(e,"min_scale_y"),h=fn(e,"min_scale_z"),d=fn(e,"max_scale_x"),f=fn(e,"max_scale_y"),p=fn(e,"max_scale_z"),_=fn(t,"packed_position"),m=fn(t,"packed_rotation"),g=fn(t,"packed_scale"),y=fn(t,"packed_color");return{positionExtremes:{minX:n,maxX:o,minY:i,maxY:a,minZ:r,maxZ:l},scaleExtremes:{minScaleX:c,maxScaleX:d,minScaleY:u,maxScaleY:f,minScaleZ:h,maxScaleZ:p},position:_,rotation:m,scale:g,color:y}}static parseToUncompressedSplatBufferSection(e,t,n,i,r,o,a,l,c,u=null){pn.readElementData(t,o,a,n,i,u);const h=De.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:d,scaleExtremes:f,position:p,rotation:_,scale:m,color:g}=pn.getElementStorageArrays(e,t),y=Ce.createSplat();for(let v=n;v<=i;++v){pn.decompressSplat(v,r,p,d,m,f,_,g,y);const x=v*h+c;De.writeSplatDataToSectionBuffer(y,l,x,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,i,r,o,a,l,c=null){pn.readElementData(t,o,a,n,i,c);const{positionExtremes:u,scaleExtremes:h,position:d,rotation:f,scale:p,color:_}=pn.getElementStorageArrays(e,t);for(let m=n;m<=i;++m){const g=Ce.createSplat();pn.decompressSplat(m,r,d,u,p,h,f,_,g),l.addSplat(g)}}static parseToUncompressedSplatArray(e){const{chunkElement:t,vertexElement:n}=pn.readPly(e),i=new Ce,{positionExtremes:r,scaleExtremes:o,position:a,rotation:l,scale:c,color:u}=pn.getElementStorageArrays(t,n);for(let d=0;d<n.count;++d){i.addDefaultSplat();const f=i.getSplat(i.splatCount-1);pn.decompressSplat(d,0,a,r,c,o,l,u,f)}return new ue().identity(),i}};le(pn,"decompressSplat",function(){const e=new I,t=new st,n=new I,i=new Ze,r=Ce.OFFSET;return function(o,a,l,c,u,h,d,f,p){p=p||Ce.createSplat();const _=Math.floor((a+o)/256);return qm(e,l[o]),A1(t,d[o]),qm(n,u[o]),S1(i,f[o]),p[r.X]=Kr(c.minX[_],c.maxX[_],e.x),p[r.Y]=Kr(c.minY[_],c.maxY[_],e.y),p[r.Z]=Kr(c.minZ[_],c.maxZ[_],e.z),p[r.ROTATION0]=t.x,p[r.ROTATION1]=t.y,p[r.ROTATION2]=t.z,p[r.ROTATION3]=t.w,p[r.SCALE0]=Math.exp(Kr(h.minScaleX[_],h.maxScaleX[_],n.x)),p[r.SCALE1]=Math.exp(Kr(h.minScaleY[_],h.maxScaleY[_],n.y)),p[r.SCALE2]=Math.exp(Kr(h.minScaleZ[_],h.maxScaleZ[_],n.z)),p[r.FDC0]=an(Math.floor(i.x*255),0,255),p[r.FDC1]=an(Math.floor(i.y*255),0,255),p[r.FDC2]=an(Math.floor(i.z*255),0,255),p[r.OPACITY]=an(Math.floor(i.w*255),0,255),p}}());let mr=pn;const Os={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[V_,Af,Mf,Tf,Ef,Cf,bf]=[0,1,2,3,4,5,6],Ym={double:V_,int:Af,uint:Mf,float:Tf,short:Ef,ushort:Cf,uchar:bf},M1={[V_]:8,[Af]:4,[Mf]:4,[Tf]:4,[Ef]:2,[Cf]:2,[bf]:1},Vn=class Vn{constructor(){}decodeSectionHeader(e,t,n=0){const i=[];let r=!1,o=-1,a=0,l=!1,c=null;const u=[],h=[],d=[],f={};for(let g=n;g<e.length;g++){const y=e[g].trim();if(y.startsWith("element"))if(r){o--;break}else{r=!0,n=g,o=g;const v=y.split(" ");let x=0;for(let E of v){const T=E.trim();T.length>0&&(x++,x===2?c=T:x===3&&(a=parseInt(T)))}}else if(y.startsWith("property")){const v=y.match(/(\w+)\s+(\w+)\s+(\w+)/);if(v){const x=v[2],E=v[3];d.push(E);const T=t[E];f[E]=x;const A=Ym[x];T!==void 0&&(u.push(T),h[T]=A)}}if(y===Vn.HeaderEndToken){l=!0;break}r&&(i.push(y),o++)}const p=[];let _=0;for(let g of d){const y=f[g];if(f.hasOwnProperty(g)){const v=t[g];v!==void 0&&(p[v]=_)}_+=M1[Ym[y]]}const m=this.decodeSphericalHarmonicsFromSectionHeader(d,t);return{headerLines:i,headerStartLine:n,headerEndLine:o,fieldTypes:h,fieldIds:u,fieldOffsets:p,bytesPerVertex:_,vertexCount:a,dataSizeBytes:_*a,endOfHeader:l,sectionName:c,sphericalHarmonicsDegree:m.degree,sphericalHarmonicsCoefficientsPerChannel:m.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:m.degree1Fields,sphericalHarmonicsDegree2Fields:m.degree2Fields}}decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,i=0;for(let l of e)l.startsWith("f_rest")&&n++;i=n/3;let r=0;i>=3&&(r=1),i>=8&&(r=2);let o=[],a=[];for(let l=0;l<3;l++){if(r>=1)for(let c=0;c<3;c++)o.push(t["f_rest_"+(c+i*l)]);if(r>=2)for(let c=0;c<5;c++)a.push(t["f_rest_"+(c+i*l+3)])}return{degree:r,coefficientsPerChannel:i,degree1Fields:o,degree2Fields:a}}static getHeaderSectionNames(e){const t=[];for(let n of e)if(n.startsWith("element")){const i=n.split(" ");let r=0;for(let o of i){const a=o.trim();a.length>0&&(r++,r===2&&t.push(a))}}return t}static checkTextForEndHeader(e){return!!e.includes(Vn.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,i){const r=new Uint8Array(e,Math.max(0,t-n),n),o=i.decode(r);return Vn.checkTextForEndHeader(o)}static extractHeaderFromBufferToText(e){const t=new TextDecoder;let n=0,i="";const r=100;for(;;){if(n+r>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,n,r);if(i+=t.decode(o),n+=r,Vn.checkBufferForEndHeader(e,n,r*2,t))break}return i}readHeaderFromBuffer(e){const t=new TextDecoder;let n=0,i="";const r=100;for(;;){if(n+r>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,n,r);if(i+=t.decode(o),n+=r,Vn.checkBufferForEndHeader(e,n,r*2,t))break}return i}static convertHeaderTextToLines(e){const t=e.split(`
`),n=[];for(let i=0;i<t.length;i++){const r=t[i].trim();if(n.push(r),r===Vn.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){const t=Vn.convertHeaderTextToLines(e);let n=Os.INRIAV1;for(let i=0;i<t.length;i++){const r=t[i].trim();if(r.startsWith("element chunk")||r.match(/[A-Za-z]*packed_[A-Za-z]*/))n=Os.PlayCanvasCompressed;else if(r.startsWith("element codebook_centers"))n=Os.INRIAV2;else if(r===Vn.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){const t=Vn.extractHeaderFromBufferToText(e);return Vn.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,i,r,o,a=!0){const l=n*t.bytesPerVertex+i,c=t.fieldOffsets,u=t.fieldTypes;for(let h of r){const d=u[h];d===Tf?o[h]=e.getFloat32(l+c[h],!0):d===Ef?o[h]=e.getInt16(l+c[h],!0):d===Cf?o[h]=e.getUint16(l+c[h],!0):d===Af?o[h]=e.getInt32(l+c[h],!0):d===Mf?o[h]=e.getUint32(l+c[h],!0):d===bf&&(a?o[h]=e.getUint8(l+c[h])/255:o[h]=e.getUint8(l+c[h]))}}};le(Vn,"HeaderEndToken","end_header");let on=Vn;const G_=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],T1=G_.map((s,e)=>e),[Qm,E1,C1,b1,w1,R1,I1,P1,D1,F1,Km,L1,B1,jm,Zm,U1,O1,N1]=T1,ur=class ur{constructor(){this.plyParserutils=new on}decodeHeaderLines(e){let t=0;e.forEach(u=>{u.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let r=Array.from(Array(Math.max(n-1,0))).map((u,h)=>`f_rest_${h+1}`);const o=[...G_,...r],a=o.map((u,h)=>h),l=a.reduce((u,h)=>(u[o[h]]=h,u),{}),c=this.plyParserutils.decodeSectionHeader(e,l,0);return c.splatCount=c.vertexCount,c.bytesPerSplat=c.bytesPerVertex,c.fieldsToReadIndexes=a,c}decodeHeaderText(e){const t=on.convertHeaderTextToLines(e),n=this.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(on.HeaderEndToken)+on.HeaderEndToken.length+1,n}decodeHeaderFromBuffer(e){const t=this.plyParserutils.readHeaderFromBuffer(e);return this.decodeHeaderText(t)}findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}parseToUncompressedSplatBufferSection(e,t,n,i,r,o,a,l=0){l=Math.min(l,e.sphericalHarmonicsDegree);const c=De.CompressionLevels[0].SphericalHarmonicsDegrees[l].BytesPerSplat;for(let u=t;u<=n;u++){const h=ur.parseToUncompressedSplat(i,u,e,r,l),d=u*c+a;De.writeSplatDataToSectionBuffer(h,o,d,0,l)}}parseToUncompressedSplatArraySection(e,t,n,i,r,o,a=0){a=Math.min(a,e.sphericalHarmonicsDegree);for(let l=t;l<=n;l++){const c=ur.parseToUncompressedSplat(i,l,e,r,a);o.addSplat(c)}}decodeSectionSplatData(e,t,n,i){i=Math.min(i,n.sphericalHarmonicsDegree);const r=new Ce(i);for(let o=0;o<t;o++){const a=ur.parseToUncompressedSplat(e,o,n,0,i);r.addSplat(a)}return r}static readSplat(e,t,n,i,r){return on.readVertex(e,t,n,i,t.fieldsToReadIndexes,r,!0)}parseToUncompressedSplatArray(e,t=0){const n=this.decodeHeaderFromBuffer(e),i=n.splatCount,r=this.findSplatData(e,n);return this.decodeSectionSplatData(r,i,n,t)}};le(ur,"parseToUncompressedSplat",function(){let e=[];const t=new st,n=Ce.OFFSET.X,i=Ce.OFFSET.Y,r=Ce.OFFSET.Z,o=Ce.OFFSET.SCALE0,a=Ce.OFFSET.SCALE1,l=Ce.OFFSET.SCALE2,c=Ce.OFFSET.ROTATION0,u=Ce.OFFSET.ROTATION1,h=Ce.OFFSET.ROTATION2,d=Ce.OFFSET.ROTATION3,f=Ce.OFFSET.FDC0,p=Ce.OFFSET.FDC1,_=Ce.OFFSET.FDC2,m=Ce.OFFSET.OPACITY,g=[];for(let y=0;y<45;y++)g[y]=Ce.OFFSET.FRC0+y;return function(y,v,x,E=0,T=0){T=Math.min(T,x.sphericalHarmonicsDegree),ur.readSplat(y,x,v,E,e);const A=Ce.createSplat(T);if(e[Qm]!==void 0?(A[o]=Math.exp(e[Qm]),A[a]=Math.exp(e[E1]),A[l]=Math.exp(e[C1])):(A[o]=.01,A[a]=.01,A[l]=.01),e[Km]!==void 0){const C=.28209479177387814;A[f]=(.5+C*e[Km])*255,A[p]=(.5+C*e[L1])*255,A[_]=(.5+C*e[B1])*255}else e[Zm]!==void 0?(A[f]=e[Zm]*255,A[p]=e[U1]*255,A[_]=e[O1]*255):(A[f]=0,A[p]=0,A[_]=0);if(e[jm]!==void 0&&(A[m]=1/(1+Math.exp(-e[jm]))*255),A[f]=an(Math.floor(A[f]),0,255),A[p]=an(Math.floor(A[p]),0,255),A[_]=an(Math.floor(A[_]),0,255),A[m]=an(Math.floor(A[m]),0,255),T>=1&&e[N1]!==void 0){for(let C=0;C<9;C++)A[g[C]]=e[x.sphericalHarmonicsDegree1Fields[C]];if(T>=2)for(let C=0;C<15;C++)A[g[9+C]]=e[x.sphericalHarmonicsDegree2Fields[C]]}return t.set(e[b1],e[w1],e[R1],e[I1]),t.normalize(),A[c]=t.x,A[u]=t.y,A[h]=t.z,A[d]=t.w,A[n]=e[P1],A[i]=e[D1],A[r]=e[F1],A}}());let vc=ur;const W_=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],Pl=W_.map((s,e)=>e),[Dl,k1,z1,$m,Fl,H1,Yu]=[0,1,4,16,17,18,19],X_=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],fd=X_.map((s,e)=>e),[Jm,V1,G1,W1,X1,q1,Y1,Q1,K1,j1,pd,q_,Y_,eg]=fd,tg=pd,Z1=q_,$1=Y_,Ll=s=>{const e=(31744&s)>>10,t=1023&s;return(s>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)},xa=class xa{constructor(){this.plyParserutils=new on}decodeSectionHeadersFromHeaderLines(e){const t=fd.reduce((u,h)=>(u[X_[h]]=h,u),{}),n=Pl.reduce((u,h)=>(u[W_[h]]=h,u),{}),i=on.getHeaderSectionNames(e);let r;for(let u=0;u<i.length;u++)i[u]==="codebook_centers"&&(r=u);let o=0,a=!1;const l=[];let c=0;for(;!a;){let u;c===r?u=this.plyParserutils.decodeSectionHeader(e,n,o):u=this.plyParserutils.decodeSectionHeader(e,t,o),a=u.endOfHeader,o=u.headerEndLine+1,a||(u.splatCount=u.vertexCount,u.bytesPerSplat=u.bytesPerVertex),l.push(u),c++}return l}decodeSectionHeadersFromHeaderText(e){const t=on.convertHeaderTextToLines(e);return this.decodeSectionHeadersFromHeaderLines(t)}getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}decodeHeaderFromHeaderText(e){const t=e.indexOf(on.HeaderEndToken)+on.HeaderEndToken.length+1,n=this.decodeSectionHeadersFromHeaderText(e),i=this.getSplatCountFromSectionHeaders(n);return{headerSizeBytes:t,sectionHeaders:n,splatCount:i}}decodeHeaderFromBuffer(e){const t=this.plyParserutils.readHeaderFromBuffer(e);return this.decodeHeaderFromHeaderText(t)}findVertexData(e,t,n){let i=t.headerSizeBytes;for(let r=0;r<n&&r<t.sectionHeaders.length;r++){const o=t.sectionHeaders[r];i+=o.dataSizeBytes}return new DataView(e,i,t.sectionHeaders[n].dataSizeBytes)}decodeCodeBook(e,t){const n=[],i=[];for(let r=0;r<t.vertexCount;r++){on.readVertex(e,t,r,0,Pl,n);for(let o of Pl){const a=Pl[o];let l=i[a];l||(i[a]=l=[]),l.push(n[o])}}for(let r=0;r<i.length;r++){const o=i[r],a=.28209479177387814;for(let l=0;l<o.length;l++){const c=Ll(o[l]);r===$m?o[l]=Math.round(1/(1+Math.exp(-c))*255):r===Dl?o[l]=Math.round((.5+a*c)*255):r===Fl?o[l]=Math.exp(c):o[l]=c}}return i}decodeSectionSplatData(e,t,n,i,r){r=Math.min(r,n.sphericalHarmonicsDegree);const o=new Ce(r);for(let a=0;a<t;a++){const l=xa.parseToUncompressedSplat(e,a,n,i,0,r);o.addSplat(l)}return o}static readSplat(e,t,n,i,r){return on.readVertex(e,t,n,i,fd,r,!1)}parseToUncompressedSplatArray(e,t=0){const n=[],i=this.decodeHeaderFromBuffer(e,t);let r;for(let a=0;a<i.sectionHeaders.length;a++){const l=i.sectionHeaders[a];if(l.sectionName==="codebook_centers"){const c=this.findVertexData(e,i,a);r=this.decodeCodeBook(c,l)}}for(let a=0;a<i.sectionHeaders.length;a++){const l=i.sectionHeaders[a];if(l.sectionName!=="codebook_centers"){const c=l.vertexCount,u=this.findVertexData(e,i,a),h=this.decodeSectionSplatData(u,c,l,r,t);n.push(h)}}const o=new Ce(t);for(let a of n)for(let l of a.splats)o.addSplat(l);return o}};le(xa,"parseToUncompressedSplat",function(){let e=[];const t=new st,n=Ce.OFFSET.X,i=Ce.OFFSET.Y,r=Ce.OFFSET.Z,o=Ce.OFFSET.SCALE0,a=Ce.OFFSET.SCALE1,l=Ce.OFFSET.SCALE2,c=Ce.OFFSET.ROTATION0,u=Ce.OFFSET.ROTATION1,h=Ce.OFFSET.ROTATION2,d=Ce.OFFSET.ROTATION3,f=Ce.OFFSET.FDC0,p=Ce.OFFSET.FDC1,_=Ce.OFFSET.FDC2,m=Ce.OFFSET.OPACITY,g=[];for(let y=0;y<45;y++)g[y]=Ce.OFFSET.FRC0+y;return function(y,v,x,E,T=0,A=0){A=Math.min(A,x.sphericalHarmonicsDegree),xa.readSplat(y,x,v,T,e);const C=Ce.createSplat(A);if(e[Jm]!==void 0?(C[o]=E[Fl][e[Jm]],C[a]=E[Fl][e[V1]],C[l]=E[Fl][e[G1]]):(C[o]=.01,C[a]=.01,C[l]=.01),e[pd]!==void 0?(C[f]=E[Dl][e[pd]],C[p]=E[Dl][e[q_]],C[_]=E[Dl][e[Y_]]):e[tg]!==void 0?(C[f]=e[tg]*255,C[p]=e[Z1]*255,C[_]=e[$1]*255):(C[f]=0,C[p]=0,C[_]=0),e[eg]!==void 0&&(C[m]=E[$m][e[eg]]),C[f]=an(Math.floor(C[f]),0,255),C[p]=an(Math.floor(C[p]),0,255),C[_]=an(Math.floor(C[_]),0,255),C[m]=an(Math.floor(C[m]),0,255),A>=1&&x.sphericalHarmonicsDegree>=1){for(let P=0;P<9;P++){const F=E[k1+P%3];C[g[P]]=F[e[x.sphericalHarmonicsDegree1Fields[P]]]}if(A>=2&&x.sphericalHarmonicsDegree>=2)for(let P=0;P<15;P++){const F=E[z1+P%5];C[g[9+P]]=F[e[x.sphericalHarmonicsDegree2Fields[P]]]}}const S=E[H1][e[W1]],M=E[Yu][e[X1]],w=E[Yu][e[q1]],L=E[Yu][e[Y1]];return t.set(S,M,w,L),t.normalize(),C[c]=t.x,C[u]=t.y,C[h]=t.z,C[d]=t.w,C[n]=Ll(e[Q1]),C[i]=Ll(e[K1]),C[r]=Ll(e[j1]),C}}());let md=xa;class J1{static parseToUncompressedSplatArray(e,t=0){const n=on.determineHeaderFormatFromPlyBuffer(e);if(n===Os.PlayCanvasCompressed)return mr.parseToUncompressedSplatArray(e);if(n===Os.INRIAV1)return new vc().parseToUncompressedSplatArray(e,t);if(n===Os.INRIAV2)return new md().parseToUncompressedSplatArray(e,t)}}class wf{constructor(e,t,n,i){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=i}partitionUncompressedSplatArray(e){let t,n,i;if(this.partitionGenerator){const o=this.partitionGenerator(e);t=o.groupingParameters,n=o.sectionCount,i=o.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,i=this.sectionFilters;const r=[];for(let o=0;o<n;o++){const a=new Ce(e.sphericalHarmonicsDegree),l=i[o];for(let c=0;c<e.splatCount;c++)l(c)&&a.addSplat(e.splats[c]);r.push(a)}return{splatArrays:r,parameters:t}}static getStandardPartitioner(e=0,t=new I,n=De.BucketBlockSize,i=De.BucketSize){const r=o=>{const a=Ce.OFFSET.X,l=Ce.OFFSET.Y,c=Ce.OFFSET.Z;e<=0&&(e=o.splatCount);const u=new I,h=.5,d=g=>{g.x=Math.floor(g.x/h)*h,g.y=Math.floor(g.y/h)*h,g.z=Math.floor(g.z/h)*h};o.splats.forEach(g=>{u.set(g[a],g[l],g[c]).sub(t),d(u),g.centerDist=u.lengthSq()}),o.splats.sort((g,y)=>{let v=g.centerDist,x=y.centerDist;return v>x?1:-1});const f=[],p=[];e=Math.min(o.splatCount,e);const _=Math.ceil(o.splatCount/e);let m=0;for(let g=0;g<_;g++){let y=m;f.push(v=>v>=y&&v<y+e),p.push({blocksSize:n,bucketSize:i}),m+=e}return{sectionCount:f.length,sectionFilters:f,groupingParameters:p}};return new wf(void 0,void 0,void 0,r)}}class Vc{constructor(e,t,n,i,r,o,a){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=i,this.sceneCenter=r?new I().copy(r):void 0,this.blockSize=o,this.bucketSize=a}generateFromUncompressedSplatArray(e){const t=this.splatPartitioner.partitionUncompressedSplatArray(e);return De.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,i=new I,r=De.BucketBlockSize,o=De.BucketSize){const a=wf.getStandardPartitioner(n,i,r,o);return new Vc(a,e,t,n,i,r,o)}}const Yt={Downloading:0,Processing:1,Done:2};class Rf extends Error{constructor(e){super(e)}}const Lt={DirectToSplatBuffer:0,DirectToSplatArray:1,DownloadBeforeProcessing:2};function ng(s,e){let t=0;for(let i of s)t+=i.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let i of s)new Uint8Array(e,n,i.sizeBytes).set(i.data),n+=i.sizeBytes;return e}function ig(s,e,t,n,i,r,o,a){return e?Vc.getStandardGenerator(t,n,i,r,o,a).generateFromUncompressedSplatArray(s):De.generateFromUncompressedSplatArrays([s],t,0,new I)}class If{static loadFromURL(e,t,n,i,r,o,a=!0,l=0,c,u,h,d){let f=n?Lt.DirectToSplatBuffer:Lt.DirectToSplatArray;a&&(f=Lt.DirectToSplatArray);const p=$e.ProgressiveLoadSectionSize,_=De.HeaderSizeBytes+De.SectionHeaderSizeBytes,m=1;let g,y,v,x,E=0,T=0,A=!1,C=!1,S=!1;const M=vf();let w=0,L=0,P=0,F="",B=null,O=[],H;const N=new TextDecoder,j=new vc,ie=(ae,fe,Se)=>{const W=ae>=100;if(Se&&(O.push({data:Se,sizeBytes:Se.byteLength,startBytes:P,endBytes:P+Se.byteLength}),P+=Se.byteLength),f===Lt.DownloadBeforeProcessing)W&&M.resolve(O);else{if(A){if(S&&!C){const K=B.headerSizeBytes+B.chunkElement.storageSizeBytes;x=ng(O,x),x.byteLength>=K&&(mr.readElementData(B.chunkElement,x,B.headerSizeBytes),w=K,L=K,C=!0)}}else if(F+=N.decode(Se),on.checkTextForEndHeader(F)){const K=on.determineHeaderFormatFromHeaderText(F);if(K===Os.INRIAV1)B=j.decodeHeaderText(F),E=B.splatCount,C=!0,S=!1;else if(K===Os.PlayCanvasCompressed)B=mr.decodeHeaderText(F),E=B.vertexElement.count,S=!0;else{if(n)throw new Rf("PlyLoader.loadFromURL() -> Selected Ply format cannot be directly loaded.");f=Lt.DownloadBeforeProcessing;return}l=Math.min(l,B.sphericalHarmonicsDegree);const oe=De.CompressionLevels[0].SphericalHarmonicsDegrees[l],te=_+oe.BytesPerSplat*E;f===Lt.DirectToSplatBuffer?(y=new ArrayBuffer(te),De.writeHeaderToBuffer({versionMajor:De.CurrentMajorVersion,versionMinor:De.CurrentMinorVersion,maxSectionCount:m,sectionCount:m,maxSplatCount:E,splatCount:T,compressionLevel:0,sceneCenter:new I},y)):H=new Ce(l),w=B.headerSizeBytes,L=B.headerSizeBytes,A=!0}if(A&&C){if(O.length>0&&(g=ng(O,g),P-w>p||W)){const oe=P-L,te=Math.floor(oe/B.bytesPerSplat),xe=te*B.bytesPerSplat,Ae=oe-xe,be=T+te,Ve=L-O[0].startBytes,Be=new DataView(g,Ve,xe),ke=De.CompressionLevels[0].SphericalHarmonicsDegrees[l],k=T*ke.BytesPerSplat+_;if(f===Lt.DirectToSplatBuffer?S?mr.parseToUncompressedSplatBufferSection(B.chunkElement,B.vertexElement,0,te-1,T,Be,0,y,k):j.parseToUncompressedSplatBufferSection(B,0,te-1,Be,0,y,k,l):S?mr.parseToUncompressedSplatArraySection(B.chunkElement,B.vertexElement,0,te-1,T,Be,0,H):j.parseToUncompressedSplatArraySection(B,0,te-1,Be,0,H,l),T=be,f===Lt.DirectToSplatBuffer&&(v||(De.writeSectionHeaderToBuffer({maxSplatCount:E,splatCount:T,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:l},0,y,De.HeaderSizeBytes),v=new De(y,!1)),v.updateLoadedCounts(1,T),i&&i(v,W)),w+=p,L+=xe,Ae===0)O=[];else{let Qe=[],Ge=0;for(let We=O.length-1;We>=0;We--){const Ee=O[We];if(Ge+=Ee.sizeBytes,Qe.unshift(Ee),Ge>=Ae)break}O=Qe}}W&&(f===Lt.DirectToSplatBuffer?M.resolve(v):M.resolve(H))}}t&&t(ae,fe,Yt.Downloading)};return t&&t(0,"0%",Yt.Downloading),_f(e,ie,!1).then(()=>(t&&t(0,"0%",Yt.Processing),M.promise.then(ae=>{if(t&&t(100,"100%",Yt.Done),f===Lt.DownloadBeforeProcessing){const fe=O.map(Se=>Se.data);return new Blob(fe).arrayBuffer().then(Se=>If.loadFromFileData(Se,r,o,a,l,c,u,h,d))}else return f===Lt.DirectToSplatBuffer?ae:Ei(()=>ig(ae,a,r,o,c,u,h,d))})))}static loadFromFileData(e,t,n,i,r=0,o,a,l,c){return Ei(()=>J1.parseToUncompressedSplatArray(e,r)).then(u=>ig(u,i,t,n,o,a,l,c))}}const ft=class ft{static parseToUncompressedSplatBufferSection(e,t,n,i,r,o){const a=De.CompressionLevels[0].BytesPerCenter,l=De.CompressionLevels[0].BytesPerScale,c=De.CompressionLevels[0].BytesPerRotation,u=De.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let h=e;h<=t;h++){const d=h*ft.RowSizeBytes+i,f=new Float32Array(n,d,3),p=new Float32Array(n,d+ft.CenterSizeBytes,3),_=new Uint8Array(n,d+ft.CenterSizeBytes+ft.ScaleSizeBytes,4),m=new Uint8Array(n,d+ft.CenterSizeBytes+ft.ScaleSizeBytes+ft.RotationSizeBytes,4),g=new st((m[1]-128)/128,(m[2]-128)/128,(m[3]-128)/128,(m[0]-128)/128);g.normalize();const y=h*u+o,v=new Float32Array(r,y,3),x=new Float32Array(r,y+a,3),E=new Float32Array(r,y+a+l,4),T=new Uint8Array(r,y+a+l+c,4);v[0]=f[0],v[1]=f[1],v[2]=f[2],x[0]=p[0],x[1]=p[1],x[2]=p[2],E[0]=g.w,E[1]=g.x,E[2]=g.y,E[3]=g.z,T[0]=_[0],T[1]=_[1],T[2]=_[2],T[3]=_[3]}}static parseToUncompressedSplatArraySection(e,t,n,i,r){for(let o=e;o<=t;o++){const a=o*ft.RowSizeBytes+i,l=new Float32Array(n,a,3),c=new Float32Array(n,a+ft.CenterSizeBytes,3),u=new Uint8Array(n,a+ft.CenterSizeBytes+ft.ScaleSizeBytes,4),h=new Uint8Array(n,a+ft.CenterSizeBytes+ft.ScaleSizeBytes+ft.RotationSizeBytes,4),d=new st((h[1]-128)/128,(h[2]-128)/128,(h[3]-128)/128,(h[0]-128)/128);d.normalize(),r.addSplatFromComonents(l[0],l[1],l[2],c[0],c[1],c[2],d.w,d.x,d.y,d.z,u[0],u[1],u[2],u[3])}}static parseStandardSplatToUncompressedSplatArray(e){const t=e.byteLength/ft.RowSizeBytes,n=new Ce;for(let i=0;i<t;i++){const r=i*ft.RowSizeBytes,o=new Float32Array(e,r,3),a=new Float32Array(e,r+ft.CenterSizeBytes,3),l=new Uint8Array(e,r+ft.CenterSizeBytes+ft.ScaleSizeBytes,4),c=new Uint8Array(e,r+ft.CenterSizeBytes+ft.ScaleSizeBytes+ft.ColorSizeBytes,4),u=new st((c[1]-128)/128,(c[2]-128)/128,(c[3]-128)/128,(c[0]-128)/128);u.normalize(),n.addSplatFromComonents(o[0],o[1],o[2],a[0],a[1],a[2],u.w,u.x,u.y,u.z,l[0],l[1],l[2],l[3])}return n}};le(ft,"RowSizeBytes",32),le(ft,"CenterSizeBytes",12),le(ft,"ScaleSizeBytes",12),le(ft,"RotationSizeBytes",4),le(ft,"ColorSizeBytes",4);let lr=ft;function sg(s,e,t,n,i,r,o,a){return e?Vc.getStandardGenerator(t,n,i,r,o,a).generateFromUncompressedSplatArray(s):De.generateFromUncompressedSplatArrays([s],t,0,new I)}class Pf{static loadFromURL(e,t,n,i,r,o,a=!0,l,c,u,h){let d=n?Lt.DirectToSplatBuffer:Lt.DirectToSplatArray;a&&(d=Lt.DirectToSplatArray);const f=De.HeaderSizeBytes+De.SectionHeaderSizeBytes,p=$e.ProgressiveLoadSectionSize,_=1;let m,g,y,v=0,x=0,E;const T=vf();let A=0,C=0,S=[];const M=(w,L,P,F)=>{const B=w>=100;if(P&&S.push(P),d===Lt.DownloadBeforeProcessing){B&&T.resolve(S);return}if(!F){if(n)throw new Rf("Cannon directly load .splat because no file size info is available.");d=Lt.DownloadBeforeProcessing;return}if(!m){v=F/lr.RowSizeBytes,m=new ArrayBuffer(F);const O=De.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,H=f+O*v;d===Lt.DirectToSplatBuffer?(g=new ArrayBuffer(H),De.writeHeaderToBuffer({versionMajor:De.CurrentMajorVersion,versionMinor:De.CurrentMinorVersion,maxSectionCount:_,sectionCount:_,maxSplatCount:v,splatCount:x,compressionLevel:0,sceneCenter:new I},g)):E=new Ce(0)}if(P){new Uint8Array(m,C,P.byteLength).set(new Uint8Array(P)),C+=P.byteLength;const O=C-A;if(O>p||B){const N=(B?O:p)/lr.RowSizeBytes,j=x+N;d===Lt.DirectToSplatBuffer?lr.parseToUncompressedSplatBufferSection(x,j-1,m,0,g,f):lr.parseToUncompressedSplatArraySection(x,j-1,m,0,E),x=j,d===Lt.DirectToSplatBuffer&&(y||(De.writeSectionHeaderToBuffer({maxSplatCount:v,splatCount:x,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,g,De.HeaderSizeBytes),y=new De(g,!1)),y.updateLoadedCounts(1,x),i&&i(y,B)),A+=p}}B&&(d===Lt.DirectToSplatBuffer?T.resolve(y):T.resolve(E)),t&&t(w,L,Yt.Downloading)};return t&&t(0,"0%",Yt.Downloading),_f(e,M,!1).then(()=>(t&&t(0,"0%",Yt.Processing),T.promise.then(w=>(t&&t(100,"100%",Yt.Done),d===Lt.DownloadBeforeProcessing?new Blob(S).arrayBuffer().then(L=>Pf.loadFromFileData(L,r,o,a,l,c,u,h)):d===Lt.DirectToSplatBuffer?w:Ei(()=>sg(w,a,r,o,l,c,u,h))))))}static loadFromFileData(e,t,n,i,r,o,a,l){return Ei(()=>{const c=lr.parseStandardSplatToUncompressedSplatArray(e);return sg(c,i,t,n,r,o,a,l)})}}const ao=class ao{static checkVersion(e){const t=De.CurrentMajorVersion,n=De.CurrentMinorVersion,i=De.parseHeader(e);if(i.versionMajor===t&&i.versionMinor>=n||i.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${i.versionMajor}.${i.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,i){let r,o,a,l,c=!1,u=!1,h,d=[],f=!1,p=!1,_=0,m=0,g=0,y=!1,v=!1,x=!1,E=[];const T=vf(),A=()=>{!c&&!u&&_>=De.HeaderSizeBytes&&(u=!0,new Blob(E).arrayBuffer().then(F=>{a=new ArrayBuffer(De.HeaderSizeBytes),new Uint8Array(a).set(new Uint8Array(F,0,De.HeaderSizeBytes)),ao.checkVersion(a),u=!1,c=!0,l=De.parseHeader(a),window.setTimeout(()=>{M()},1)}))};let C=0;const S=()=>{C===0&&(C++,window.setTimeout(()=>{C--,w()},1))},M=()=>{const P=()=>{p=!0,new Blob(E).arrayBuffer().then(B=>{p=!1,f=!0,h=new ArrayBuffer(l.maxSectionCount*De.SectionHeaderSizeBytes),new Uint8Array(h).set(new Uint8Array(B,De.HeaderSizeBytes,l.maxSectionCount*De.SectionHeaderSizeBytes)),d=De.parseSectionHeaders(l,h,0,!1);let O=0;for(let N=0;N<l.maxSectionCount;N++)O+=d[N].storageSizeBytes;const H=De.HeaderSizeBytes+l.maxSectionCount*De.SectionHeaderSizeBytes+O;if(!r){r=new ArrayBuffer(H);let N=0;for(let j=0;j<E.length;j++){const ie=E[j];new Uint8Array(r,N,ie.byteLength).set(new Uint8Array(ie)),N+=ie.byteLength}}g=De.HeaderSizeBytes+De.SectionHeaderSizeBytes*l.maxSectionCount;for(let N=0;N<=d.length&&N<l.maxSectionCount;N++)g+=d[N].storageSizeBytes;S()})};!p&&!f&&c&&_>=De.HeaderSizeBytes+De.SectionHeaderSizeBytes*l.maxSectionCount&&P()},w=()=>{if(x)return;x=!0;const P=()=>{if(x=!1,f){if(v)return;if(y=_>=g,_-m>$e.ProgressiveLoadSectionSize||y){m+=$e.ProgressiveLoadSectionSize,v=m>=g,o||(o=new De(r,!1));const B=De.HeaderSizeBytes+De.SectionHeaderSizeBytes*l.maxSectionCount;let O=0,H=0,N=0;for(let ae=0;ae<l.maxSectionCount;ae++){const fe=d[ae],Se=O+fe.partiallyFilledBucketCount*4+fe.bucketStorageSizeBytes*fe.bucketCount,W=B+Se;if(m>=W){H++;const K=m-W,xe=De.CompressionLevels[l.compressionLevel].SphericalHarmonicsDegrees[fe.sphericalHarmonicsDegree].BytesPerSplat;let Ae=Math.floor(K/xe);Ae=Math.min(Ae,fe.maxSplatCount),N+=Ae,o.updateLoadedCounts(H,N),o.updateSectionLoadedCounts(ae,Ae)}else break;O+=fe.storageSizeBytes}i(o,v);const j=m/g*100,ie=j.toFixed(2)+"%";t&&t(j,ie,Yt.Downloading),v?T.resolve(o):w()}}};window.setTimeout(P,$e.ProgressiveLoadSectionDelayDuration)};return _f(e,(P,F,B)=>{B&&(E.push(B),r&&new Uint8Array(r,_,B.byteLength).set(new Uint8Array(B)),_+=B.byteLength),n?(A(),M(),w()):t&&t(P,F,Yt.Downloading)},!n).then(P=>(t&&t(0,"0%",Yt.Processing),(n?T.promise:ao.loadFromFileData(P)).then(B=>(t&&t(100,"100%",Yt.Done),B))))}static loadFromFileData(e){return Ei(()=>(ao.checkVersion(e),new De(e)))}};le(ao,"downloadFile",function(){let e;return function(t,n){const i=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(i),e.click()}}());let gd=ao;const ss={Splat:0,KSplat:1,Ply:2},rg=s=>s.endsWith(".ply")?ss.Ply:s.endsWith(".splat")?ss.Splat:s.endsWith(".ksplat")?ss.KSplat:null,og={type:"change"},Qu={type:"start"},ag={type:"end"},Bl=new Ho,lg=new ns,eR=Math.cos(70*qt.DEG2RAD);class Ul extends Ws{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:ti.ROTATE,MIDDLE:ti.DOLLY,RIGHT:ti.PAN},this.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",ee),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(og),n.update(),r=i.NONE},this.clearDampedRotation=function(){l.theta=0,l.phi=0},this.clearDampedPan=function(){u.set(0,0,0)},this.update=function(){const U=new I,ne=new st().setFromUnitVectors(e.up,new I(0,1,0)),Me=ne.clone().invert(),de=new I,Oe=new st,ze=new I,nt=2*Math.PI;return function(){ne.setFromUnitVectors(e.up,new I(0,1,0)),Me.copy(ne).invert();const me=n.object.position;U.copy(me).sub(n.target),U.applyQuaternion(ne),a.setFromVector3(U),n.autoRotate&&r===i.NONE&&w(S()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Q=n.minAzimuthAngle,$=n.maxAzimuthAngle;isFinite(Q)&&isFinite($)&&(Q<-Math.PI?Q+=nt:Q>Math.PI&&(Q-=nt),$<-Math.PI?$+=nt:$>Math.PI&&($-=nt),Q<=$?a.theta=Math.max(Q,Math.min($,a.theta)):a.theta=a.theta>(Q+$)/2?Math.max(Q,a.theta):Math.min($,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=j(a.radius):a.radius=j(a.radius*c),U.setFromSpherical(a),U.applyQuaternion(Me),me.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let _e=!1;if(n.zoomToCursor&&T){let pe=null;if(n.object.isPerspectiveCamera){const He=U.length();pe=j(He*c);const gt=He-pe;n.object.position.addScaledVector(x,gt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const He=new I(E.x,E.y,0);He.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),_e=!0;const gt=new I(E.x,E.y,0);gt.unproject(n.object),n.object.position.sub(gt).add(He),n.object.updateMatrixWorld(),pe=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;pe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(pe).add(n.object.position):(Bl.origin.copy(n.object.position),Bl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Bl.direction))<eR?e.lookAt(n.target):(lg.setFromNormalAndCoplanarPoint(n.object.up,n.target),Bl.intersectPlane(lg,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),_e=!0);return c=1,T=!1,_e||de.distanceToSquared(n.object.position)>o||8*(1-Oe.dot(n.object.quaternion))>o||ze.distanceToSquared(n.target)>0?(n.dispatchEvent(og),de.copy(n.object.position),Oe.copy(n.object.quaternion),ze.copy(n.target),_e=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",we),n.domElement.removeEventListener("pointerdown",Ee),n.domElement.removeEventListener("pointercancel",Fe),n.domElement.removeEventListener("wheel",X),n.domElement.removeEventListener("pointermove",tt),n.domElement.removeEventListener("pointerup",Fe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ee),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new cc,l=new cc;let c=1;const u=new I,h=new he,d=new he,f=new he,p=new he,_=new he,m=new he,g=new he,y=new he,v=new he,x=new I,E=new he;let T=!1;const A=[],C={};function S(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function w(U){l.theta-=U}function L(U){l.phi-=U}const P=function(){const U=new I;return function(Me,de){U.setFromMatrixColumn(de,0),U.multiplyScalar(-Me),u.add(U)}}(),F=function(){const U=new I;return function(Me,de){n.screenSpacePanning===!0?U.setFromMatrixColumn(de,1):(U.setFromMatrixColumn(de,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(Me),u.add(U)}}(),B=function(){const U=new I;return function(Me,de){const Oe=n.domElement;if(n.object.isPerspectiveCamera){const ze=n.object.position;U.copy(ze).sub(n.target);let nt=U.length();nt*=Math.tan(n.object.fov/2*Math.PI/180),P(2*Me*nt/Oe.clientHeight,n.object.matrix),F(2*de*nt/Oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(Me*(n.object.right-n.object.left)/n.object.zoom/Oe.clientWidth,n.object.matrix),F(de*(n.object.top-n.object.bottom)/n.object.zoom/Oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(U){if(!n.zoomToCursor)return;T=!0;const ne=n.domElement.getBoundingClientRect(),Me=U.clientX-ne.left,de=U.clientY-ne.top,Oe=ne.width,ze=ne.height;E.x=Me/Oe*2-1,E.y=-(de/ze)*2+1,x.set(E.x,E.y,1).unproject(e).sub(e.position).normalize()}function j(U){return Math.max(n.minDistance,Math.min(n.maxDistance,U))}function ie(U){h.set(U.clientX,U.clientY)}function ae(U){N(U),g.set(U.clientX,U.clientY)}function fe(U){p.set(U.clientX,U.clientY)}function Se(U){d.set(U.clientX,U.clientY),f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ne=n.domElement;w(2*Math.PI*f.x/ne.clientHeight),L(2*Math.PI*f.y/ne.clientHeight),h.copy(d),n.update()}function W(U){y.set(U.clientX,U.clientY),v.subVectors(y,g),v.y>0?O(M()):v.y<0&&H(M()),g.copy(y),n.update()}function K(U){_.set(U.clientX,U.clientY),m.subVectors(_,p).multiplyScalar(n.panSpeed),B(m.x,m.y),p.copy(_),n.update()}function oe(U){N(U),U.deltaY<0?H(M()):U.deltaY>0&&O(M()),n.update()}function te(U){let ne=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),ne=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),ne=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),ne=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),ne=!0;break}ne&&(U.preventDefault(),n.update())}function xe(){if(A.length===1)h.set(A[0].pageX,A[0].pageY);else{const U=.5*(A[0].pageX+A[1].pageX),ne=.5*(A[0].pageY+A[1].pageY);h.set(U,ne)}}function Ae(){if(A.length===1)p.set(A[0].pageX,A[0].pageY);else{const U=.5*(A[0].pageX+A[1].pageX),ne=.5*(A[0].pageY+A[1].pageY);p.set(U,ne)}}function be(){const U=A[0].pageX-A[1].pageX,ne=A[0].pageY-A[1].pageY,Me=Math.sqrt(U*U+ne*ne);g.set(0,Me)}function Ve(){n.enableZoom&&be(),n.enablePan&&Ae()}function Be(){n.enableZoom&&be(),n.enableRotate&&xe()}function ke(U){if(A.length==1)d.set(U.pageX,U.pageY);else{const Me=re(U),de=.5*(U.pageX+Me.x),Oe=.5*(U.pageY+Me.y);d.set(de,Oe)}f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ne=n.domElement;w(2*Math.PI*f.x/ne.clientHeight),L(2*Math.PI*f.y/ne.clientHeight),h.copy(d)}function k(U){if(A.length===1)_.set(U.pageX,U.pageY);else{const ne=re(U),Me=.5*(U.pageX+ne.x),de=.5*(U.pageY+ne.y);_.set(Me,de)}m.subVectors(_,p).multiplyScalar(n.panSpeed),B(m.x,m.y),p.copy(_)}function Qe(U){const ne=re(U),Me=U.pageX-ne.x,de=U.pageY-ne.y,Oe=Math.sqrt(Me*Me+de*de);y.set(0,Oe),v.set(0,Math.pow(y.y/g.y,n.zoomSpeed)),O(v.y),g.copy(y)}function Ge(U){n.enableZoom&&Qe(U),n.enablePan&&k(U)}function We(U){n.enableZoom&&Qe(U),n.enableRotate&&ke(U)}function Ee(U){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",tt),n.domElement.addEventListener("pointerup",Fe)),ve(U),U.pointerType==="touch"?se(U):D(U))}function tt(U){n.enabled!==!1&&(U.pointerType==="touch"?J(U):b(U))}function Fe(U){Te(U),A.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",tt),n.domElement.removeEventListener("pointerup",Fe)),n.dispatchEvent(ag),r=i.NONE}function D(U){let ne;switch(U.button){case 0:ne=n.mouseButtons.LEFT;break;case 1:ne=n.mouseButtons.MIDDLE;break;case 2:ne=n.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case ti.DOLLY:if(n.enableZoom===!1)return;ae(U),r=i.DOLLY;break;case ti.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;fe(U),r=i.PAN}else{if(n.enableRotate===!1)return;ie(U),r=i.ROTATE}break;case ti.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;ie(U),r=i.ROTATE}else{if(n.enablePan===!1)return;fe(U),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Qu)}function b(U){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Se(U);break;case i.DOLLY:if(n.enableZoom===!1)return;W(U);break;case i.PAN:if(n.enablePan===!1)return;K(U);break}}function X(U){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(U.preventDefault(),n.dispatchEvent(Qu),oe(U),n.dispatchEvent(ag))}function ee(U){n.enabled===!1||n.enablePan===!1||te(U)}function se(U){switch(Je(U),A.length){case 1:switch(n.touches.ONE){case ni.ROTATE:if(n.enableRotate===!1)return;xe(),r=i.TOUCH_ROTATE;break;case ni.PAN:if(n.enablePan===!1)return;Ae(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ni.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ve(),r=i.TOUCH_DOLLY_PAN;break;case ni.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Be(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Qu)}function J(U){switch(Je(U),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ke(U),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;k(U),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ge(U),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;We(U),n.update();break;default:r=i.NONE}}function we(U){n.enabled!==!1&&U.preventDefault()}function ve(U){A.push(U)}function Te(U){delete C[U.pointerId];for(let ne=0;ne<A.length;ne++)if(A[ne].pointerId==U.pointerId){A.splice(ne,1);return}}function Je(U){let ne=C[U.pointerId];ne===void 0&&(ne=new he,C[U.pointerId]=ne),ne.set(U.pageX,U.pageY)}function re(U){const ne=U.pointerId===A[0].pointerId?A[1]:A[0];return C[ne.pointerId]}n.domElement.addEventListener("contextmenu",we),n.domElement.addEventListener("pointerdown",Ee),n.domElement.addEventListener("pointercancel",Fe),n.domElement.addEventListener("wheel",X,{passive:!1}),this.update()}}const tR=(s,e,t,n,i)=>{const r=performance.now();let o=s.style.display==="none"?0:parseFloat(s.style.opacity);isNaN(o)&&(o=1);const a=window.setInterval(()=>{const c=performance.now()-r;let u=Math.min(c/n,1);u>.999&&(u=1);let h;e?(h=(1-u)*o,h<1e-4&&(h=0)):h=(1-o)*u+o,h>0?(s.style.display=t,s.style.opacity=h):s.style.display="none",u>=1&&(i&&i(),window.clearInterval(a))},16);return a},nR=500,Ac=class Ac{constructor(e,t){this.taskIDGen=0,this.elementID=Ac.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const n=document.createElement("style");n.innerHTML=`

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `,this.spinnerContainerOuter.appendChild(n),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let n of this.tasks){if(n.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let n of this.tasks)if(n.id===e){n.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){const n=(i,r,o,a,l)=>{o?i.style.display=r?a:"none":this.fadeTransitions[l]=tR(i,!r,a,nR,()=>{this.fadeTransitions[l]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}};le(Ac,"elementIDGen",0);let _d=Ac;class iR{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const t=document.createElement("style");t.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class sR{constructor(e){le(this,"update",function(e,t,n,i,r,o,a,l,c,u,h,d,f,p){const _=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==_&&(this.infoCells.cameraPosition.innerHTML=_),n){const g=n,y=`${g.x.toFixed(5)}, ${g.y.toFixed(5)}, ${g.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==y&&(this.infoCells.cameraLookAt.innerHTML=y)}const m=`${i.x.toFixed(5)}, ${i.y.toFixed(5)}, ${i.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==m&&(this.infoCells.cameraUp.innerHTML=m),this.infoCells.orthographicCamera.innerHTML=r?"Orthographic":"Perspective",o){const g=o,y=`${g.x.toFixed(5)}, ${g.y.toFixed(5)}, ${g.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=y}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=a,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${c} splats out of ${l} (${u.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${h.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${d.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${f.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${p}`});this.container=e||document.body,this.infoCells={};const t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const n=document.createElement("style");n.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const i=document.createElement("div");i.style.display="table";for(let r of t){const o=document.createElement("div");o.style.display="table-row",o.className="info-panel-row";const a=document.createElement("div");a.style.display="table-cell",a.innerHTML=`${r[0]}: `,a.classList.add("info-panel-cell","label-cell");const l=document.createElement("div");l.style.display="table-cell",l.style.width="10px",l.innerHTML=" ",l.className="info-panel-cell";const c=document.createElement("div");c.style.display="table-cell",c.innerHTML="",c.className="info-panel-cell",this.infoCells[r[1]]=c,o.appendChild(a),o.appendChild(l),o.appendChild(c),i.appendChild(o)}this.infoPanel.appendChild(i),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const cg=new I;class rR extends ht{constructor(e=new I(0,0,1),t=new I(0,0,0),n=1,i=.1,r=16776960,o=n*.2,a=o*.2){super(),this.type="ArrowHelper";const l=new wa(i,i,n,32);l.translate(0,n/2,0);const c=new wa(0,a,o,32);c.translate(0,n,0),this.position.copy(t),this.line=new yt(l,new Hs({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new yt(c,new Hs({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{cg.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(cg,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class ma{constructor(e){le(this,"updateFocusMarker",function(){const e=new I,t=new ue,n=new I;return function(i,r,o){t.copy(r.matrixWorld).invert(),e.copy(i).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(r.matrixWorld),n.copy(r.position).sub(i);const a=n.length();this.focusMarker.position.copy(i),this.focusMarker.scale.set(a,a,a),this.focusMarker.material.uniforms.realFocusPosition.value.copy(i),this.focusMarker.material.uniforms.viewport.value.copy(o),this.focusMarker.material.uniformsNeedUpdate=!0}}());le(this,"positionAndOrientControlPlane",function(){const e=new st,t=new I(0,1,0);return function(n,i){e.setFromUnitVectors(t,i),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}}());this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new zs(e,t,{format:vn,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new Gd(e,t),this.splatRenderTarget.depthTexture.format=gr,this.splatRenderTarget.depthTexture.type=ai}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new Yn({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:qg,blendSrc:Aa,blendSrcAlpha:Aa,blendDst:Ma,blendDstAlpha:Ma});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new yt(new Ro(2,2),t),this.renderTargetCopyCamera=new Fc(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&($r(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new Xd(.5,1.5,32),t=new Hs({color:16777215}),n=new yt(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);const i=new yt(e,t);i.position.set(0,-1,0);const r=new yt(e,t);r.rotation.set(0,0,Math.PI/2),r.position.set(1,0,0);const o=new yt(e,t);o.rotation.set(0,0,-Math.PI/2),o.position.set(-1,0,0),this.meshCursor=new ht,this.meshCursor.add(n),this.meshCursor.add(i),this.meshCursor.add(r),this.meshCursor.add(o),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&($r(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){const e=new Da(.5,32,32),t=ma.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new yt(e,t)}}destroyFocusMarker(){this.focusMarker&&($r(this.focusMarker),this.focusMarker=null)}setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new Ro(1,1);e.rotateX(-Math.PI/2);const t=new Hs({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=ri;const n=new yt(e,t),i=new I(0,1,0);i.normalize();const r=new I(0,0,0),o=.5,a=.01,l=56576,c=new rR(i,r,o,a,l,.1,.03);this.controlPlane=new ht,this.controlPlane.add(n),this.controlPlane.add(c)}}destroyControlPlane(){this.controlPlane&&($r(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&($r(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const t=new Da(1,32,32),n=new ht,i=(r,o)=>{let a=new yt(t,ma.buildDebugMaterial(r));a.renderOrder=e,n.add(a),a.position.fromArray(o)};return i(16711680,[-50,0,0]),i(16711680,[50,0,0]),i(65280,[0,0,-50]),i(65280,[0,0,50]),i(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){const t=new Ys(3,3,3),n=new ht;let i=12303291;const r=a=>{let l=new yt(t,ma.buildDebugMaterial(i));l.renderOrder=e,n.add(l),l.position.fromArray(a)};let o=10;return r([-o,0,-o]),r([-o,0,o]),r([o,0,-o]),r([o,0,o]),n}static buildDebugMaterial(e){const t=`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `,n=`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `,i={color:{type:"v3",value:new Ne(e)}},r=new Yn({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!1,depthTest:!0,depthWrite:!0,side:Oi});return r.extensions.fragDepth=!0,r}static buildFocusMarkerMaterial(e){const t=`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `,n=`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `,i={color:{type:"v3",value:new Ne(e)},realFocusPosition:{type:"v3",value:new I},viewport:{type:"v2",value:new he},opacity:{value:0}};return new Yn({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!0,depthTest:!1,depthWrite:!1,side:Oi})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const oR=new I(1,0,0),aR=new I(0,1,0),lR=new I(0,0,1);class Ku{constructor(e=new I,t=new I){le(this,"intersectBox",function(){const e=new I,t=[],n=[],i=[];return function(r,o){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,i[0]=this.direction.x,i[1]=this.direction.y,i[2]=this.direction.z,this.boxContainsPoint(r,this.origin,1e-4))return o&&(o.origin.copy(this.origin),o.normal.set(0,0,0),o.distance=-1),!0;for(let a=0;a<3;a++){if(i[a]==0)continue;const l=a==0?oR:a==1?aR:lR,c=i[a]<0?r.max:r.min;let u=-Math.sign(i[a]);t[0]=a==0?c.x:a==1?c.y:c.z;let h=t[0]-n[a];if(h*u<0){const d=(a+1)%3,f=(a+2)%3;if(t[2]=i[d]/i[a]*h+n[d],t[1]=i[f]/i[a]*h+n[f],e.set(t[a],t[f],t[d]),this.boxContainsPoint(r,e,1e-4))return o&&(o.origin.copy(e),o.normal.copy(l).multiplyScalar(u),o.distance=e.sub(this.origin).length()),!0}}return!1}}());le(this,"intersectSphere",function(){const e=new I;return function(t,n,i){e.copy(t).sub(this.origin);const r=e.dot(this.direction),o=r*r,l=e.dot(e)-o,c=n*n;if(l>c)return!1;const u=Math.sqrt(c-l),h=r-u,d=r+u;if(d<0)return!1;let f=h<0?d:h;return i&&(i.origin.copy(this.origin).addScaledVector(this.direction,f),i.normal.copy(i.origin).sub(t).normalize(),i.distance=f),!0}}());this.origin=new I,this.direction=new I,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}}class Df{constructor(){this.origin=new I,this.normal=new I,this.distance=0,this.splatIndex=0}set(e,t,n,i){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=i}clone(){const e=new Df;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const rs={ThreeD:0,TwoD:1};class cR{constructor(e,t,n=!1){le(this,"setFromCameraAndScreenPosition",function(){const e=new he;return function(t,n,i){if(e.x=n.x/i.x*2-1,e.y=(i.y-n.y)/i.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}}());le(this,"intersectSplatMesh",function(){const e=new ue,t=new ue,n=new ue,i=new Ku,r=new I;return function(o,a=[]){const l=o.getSplatTree();if(l){for(let c=0;c<l.subTrees.length;c++){const u=l.subTrees[c];t.copy(o.matrixWorld),o.dynamicMode&&(o.getSceneTransform(c,n),t.multiply(n)),e.copy(t).invert(),i.origin.copy(this.ray.origin).applyMatrix4(e),i.direction.copy(this.ray.origin).add(this.ray.direction),i.direction.applyMatrix4(e).sub(i.origin).normalize();const h=[];u.rootNode&&this.castRayAtSplatTreeNode(i,l,u.rootNode,h),h.forEach(d=>{d.origin.applyMatrix4(t),d.normal.applyMatrix4(t).normalize(),d.distance=r.copy(d.origin).sub(this.ray.origin).length()}),a.push(...h)}return a.sort((c,u)=>c.distance>u.distance?1:-1),a}}}());le(this,"castRayAtSplatTreeNode",function(){const e=new Ze,t=new I,n=new I,i=new st,r=new Df,o=1e-7,a=new I(0,0,0),l=new ue,c=new ue,u=new ue,h=new ue,d=new ue,f=new Ku;return function(p,_,m,g=[]){if(p.intersectBox(m.boundingBox)){if(m.data&&m.data.indexes&&m.data.indexes.length>0)for(let y=0;y<m.data.indexes.length;y++){const v=m.data.indexes[y],x=_.splatMesh.getSceneIndexForSplat(v);if(_.splatMesh.getScene(x).visible&&(_.splatMesh.getSplatColor(v,e),_.splatMesh.getSplatCenter(v,t),_.splatMesh.getSplatScaleAndRotation(v,n,i),!(n.x<=o||n.y<=o||_.splatMesh.splatRenderMode===rs.ThreeD&&n.z<=o)))if(this.raycastAgainstTrueSplatEllipsoid){c.makeScale(n.x,n.y,n.z),u.makeRotationFromQuaternion(i);const T=Math.log10(e.w)*2;if(l.makeScale(T,T,T),d.copy(l).multiply(u).multiply(c),h.copy(d).invert(),f.origin.copy(p.origin).sub(t).applyMatrix4(h),f.direction.copy(p.origin).add(p.direction).sub(t),f.direction.applyMatrix4(h).sub(f.origin).normalize(),f.intersectSphere(a,1,r)){const A=r.clone();A.splatIndex=v,A.origin.applyMatrix4(d).add(t),g.push(A)}}else{let T=n.x+n.y,A=2;if(_.splatMesh.splatRenderMode===rs.ThreeD&&(T+=n.z,A=3),T=T/A,p.intersectSphere(t,T,r)){const C=r.clone();C.splatIndex=v,g.push(C)}}}if(m.children&&m.children.length>0)for(let y of m.children)this.castRayAtSplatTreeNode(p,_,y,g);return g}}}());this.ray=new Ku(e,t),this.raycastAgainstTrueSplatEllipsoid=n}}class xo{static buildVertexShaderBase(e=!1,t=!1,n=0,i=""){let r=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;return t&&(r+=`
            uniform float sceneOpacity[${$e.MaxScenes}];
            uniform int sceneVisibility[${$e.MaxScenes}];
        `),e&&(r+=`
            uniform highp mat4 transforms[${$e.MaxScenes}];
        `),r+=`
        ${i}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${$e.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${$e.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `,t&&(r+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?r+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = modelViewMatrix * transform;
            `:r+="mat4 transformModelViewMatrix = modelViewMatrix;",r+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `,n>=1&&(r+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?r+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:r+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,r+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,n>=2&&(r+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),n===1?r+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `:n===2&&(r+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `),r+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,n>=2&&(r+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,n===2&&(r+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `),r+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `),r+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),r}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(e=!1,t=!1,n=0,i=1,r=!1){const o={sceneCenter:{type:"v3",value:new I},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new he},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new he},basisViewport:{type:"v2",value:new he},debugColor:{type:"v3",value:new Ne},centersColorsTextureSize:{type:"v2",value:new he(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new he(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:i},pointCloudModeEnabled:{type:"i",value:r?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new he(1024,1024)},sceneCount:{type:"i",value:1}};for(let a=0;a<$e.MaxScenes;a++)o.sphericalHarmonics8BitCompressionRangeMin.value.push(-$e.SphericalHarmonics8BitCompressionRange/2),o.sphericalHarmonics8BitCompressionRangeMax.value.push($e.SphericalHarmonics8BitCompressionRange/2);if(t){const a=[];for(let c=0;c<$e.MaxScenes;c++)a.push(1);o.sceneOpacity={type:"f",value:a};const l=[];for(let c=0;c<$e.MaxScenes;c++)l.push(1);o.sceneVisibility={type:"i",value:l}}if(e){const a=[];for(let l=0;l<$e.MaxScenes;l++)a.push(new ue);o.transforms={type:"mat4",value:a}}return o}}class xc{static build(e=!1,t=!1,n=!1,i=2048,r=1,o=!1,a=0){let c=xo.buildVertexShaderBase(e,t,a,`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `);c+=xc.buildVertexShaderProjection(n,t,i);const u=xc.buildFragmentShader(),h=xo.getUniforms(e,t,a,r,o);return h.covariancesTextureSize={type:"v2",value:new he(1024,1024)},h.covariancesTexture={type:"t",value:null},h.covariancesTextureHalfFloat={type:"t",value:null},h.covariancesAreHalfFloat={type:"i",value:0},new Yn({uniforms:h,vertexShader:c,fragmentShader:u,transparent:!0,alphaTest:1,blending:Fs,depthTest:!0,depthWrite:!1,side:ri})}static buildVertexShaderProjection(e,t,n){let i=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;return e?i+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += 0.3;
                cov2Dm[1][1] += 0.3;
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:i+=`
                cov2Dm[0][0] += 0.3;
                cov2Dm[1][1] += 0.3;
            `,i+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(n)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(n)}.0);
            `,t&&(i+=`
                vColor.a *= splatOpacityFromScene;
            `),i+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,i+=xo.getVertexShaderFadeIn(),i+="}",i}static buildFragmentShader(){let e=`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        `;return e+=`
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `,e}}class yc{static build(e=!1,t=!1,n=1,i=!1,r=0){let a=xo.buildVertexShaderBase(e,t,r,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);a+=yc.buildVertexShaderProjection();const l=yc.buildFragmentShader(),c=xo.getUniforms(e,t,r,n,i);return c.scaleRotationsTexture={type:"t",value:null},c.scaleRotationsTextureSize={type:"v2",value:new he(1024,1024)},new Yn({uniforms:c,vertexShader:a,fragmentShader:l,transparent:!0,alphaTest:1,blending:Fs,depthTest:!0,depthWrite:!1,side:ri})}static buildVertexShaderProjection(){let e=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;return e+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `,e+=xo.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `}}class uR{static build(e){const t=new xn;t.setIndex([0,1,2,0,2,3]);const n=new Float32Array(4*3),i=new di(n,3);t.setAttribute("position",i),i.setXYZ(0,-1,-1,0),i.setXYZ(1,-1,1,0),i.setXYZ(2,1,1,0),i.setXYZ(3,1,-1,0),i.needsUpdate=!0;const r=new vC().copy(t),o=new Uint32Array(e),a=new RE(o,1,!1);return a.setUsage(Kx),r.setAttribute("splatIndex",a),r.instanceCount=0,r}}class hR extends ht{constructor(e,t=new I,n=new st,i=new I(1,1,1),r=1,o=1,a=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(i),this.transform=new ue,this.minimumAlpha=r,this.opacity=o,this.visible=a}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}const Mc=class Mc{constructor(e,t,n,i){this.min=new I().copy(e),this.max=new I().copy(t),this.boundingBox=new Ti(this.min,this.max),this.center=new I().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=i||Mc.idGen++}};le(Mc,"idGen",0);let vd=Mc;class ga{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new I,this.sceneMin=new I,this.sceneMax=new I,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const t=new I().fromArray(e.min),n=new I().fromArray(e.max),i=new vd(t,n,e.depth,e.id);if(e.data.indexes){i.data={indexes:[]};for(let r of e.data.indexes)i.data.indexes.push(r)}if(e.children)for(let r of e.children)i.children.push(ga.convertWorkerSubTreeNode(r));return i}static convertWorkerSubTree(e,t){const n=new ga(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new I().fromArray(e.sceneMin),n.sceneMax=new I().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=ga.convertWorkerSubTreeNode(e.rootNode);const i=(r,o)=>{r.children.length===0&&o(r);for(let a of r.children)i(a,o)};return n.nodesWithIndexes=[],i(n.rootNode,r=>{r.data&&r.data.indexes&&r.data.indexes.length>0&&n.nodesWithIndexes.push(r)}),n}}function dR(s){let e=0;class t{constructor(l,c){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]]}containsPoint(l){return l[0]>=this.min[0]&&l[0]<=this.max[0]&&l[1]>=this.min[1]&&l[1]<=this.max[1]&&l[2]>=this.min[2]&&l[2]<=this.max[2]}}class n{constructor(l,c){this.maxDepth=l,this.maxCentersPerNode=c,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class i{constructor(l,c,u,h){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]],this.center=[(c[0]-l[0])*.5+l[0],(c[1]-l[1])*.5+l[1],(c[2]-l[2])*.5+l[2]],this.depth=u,this.children=[],this.data=null,this.id=h||e++}}processSplatTreeNode=function(a,l,c,u){const h=l.data.indexes.length;if(h<a.maxCentersPerNode||l.depth>a.maxDepth){const y=[];for(let v=0;v<l.data.indexes.length;v++)a.addedIndexes[l.data.indexes[v]]||(y.push(l.data.indexes[v]),a.addedIndexes[l.data.indexes[v]]=!0);l.data.indexes=y,l.data.indexes.sort((v,x)=>v>x?1:-1),a.nodesWithIndexes.push(l);return}const d=[l.max[0]-l.min[0],l.max[1]-l.min[1],l.max[2]-l.min[2]],f=[d[0]*.5,d[1]*.5,d[2]*.5],p=[l.min[0]+f[0],l.min[1]+f[1],l.min[2]+f[2]],_=[new t([p[0]-f[0],p[1],p[2]-f[2]],[p[0],p[1]+f[1],p[2]]),new t([p[0],p[1],p[2]-f[2]],[p[0]+f[0],p[1]+f[1],p[2]]),new t([p[0],p[1],p[2]],[p[0]+f[0],p[1]+f[1],p[2]+f[2]]),new t([p[0]-f[0],p[1],p[2]],[p[0],p[1]+f[1],p[2]+f[2]]),new t([p[0]-f[0],p[1]-f[1],p[2]-f[2]],[p[0],p[1],p[2]]),new t([p[0],p[1]-f[1],p[2]-f[2]],[p[0]+f[0],p[1],p[2]]),new t([p[0],p[1]-f[1],p[2]],[p[0]+f[0],p[1],p[2]+f[2]]),new t([p[0]-f[0],p[1]-f[1],p[2]],[p[0],p[1],p[2]+f[2]])],m=[];for(let y=0;y<_.length;y++)m[y]=[];const g=[0,0,0];for(let y=0;y<h;y++){const v=l.data.indexes[y],x=c[v];g[0]=u[x],g[1]=u[x+1],g[2]=u[x+2];for(let E=0;E<_.length;E++)_[E].containsPoint(g)&&m[E].push(v)}for(let y=0;y<_.length;y++){const v=new i(_[y].min,_[y].max,l.depth+1);v.data={indexes:m[y]},l.children.push(v)}l.data={};for(let y of l.children)processSplatTreeNode(a,y,c,u)};const r=(a,l,c)=>{const u=[0,0,0],h=[0,0,0],d=[],f=Math.floor(a.length/4);for(let _=0;_<f;_++){const m=_*4,g=a[m],y=a[m+1],v=a[m+2],x=Math.round(a[m+3]);(_===0||g<u[0])&&(u[0]=g),(_===0||g>h[0])&&(h[0]=g),(_===0||y<u[1])&&(u[1]=y),(_===0||y>h[1])&&(h[1]=y),(_===0||v<u[2])&&(u[2]=v),(_===0||v>h[2])&&(h[2]=v),d.push(x)}const p=new n(l,c);return p.sceneMin=u,p.sceneMax=h,p.rootNode=new i(p.sceneMin,p.sceneMax,0),p.rootNode.data={indexes:d},p};function o(a,l,c){const u=[];for(let d of a){const f=Math.floor(d.length/4);for(let p=0;p<f;p++){const _=p*4,m=Math.round(d[_+3]);u[m]=_}}const h=[];for(let d of a){const f=r(d,l,c);h.push(f),processSplatTreeNode(f,f.rootNode,u,d)}s.postMessage({subTrees:h})}s.onmessage=a=>{a.data.process&&o(a.data.process.centers,a.data.process.maxDepth,a.data.process.maxCentersPerNode)}}function fR(s,e,t,n,i){s.postMessage({process:{centers:e,maxDepth:n,maxCentersPerNode:i}},t)}function pR(){return new Worker(URL.createObjectURL(new Blob(["(",dR.toString(),")(self)"],{type:"application/javascript"})))}class mR{constructor(e,t){le(this,"processSplatMesh",function(e,t=()=>!0,n,i){this.splatTreeWorker||(this.splatTreeWorker=pR()),this.splatMesh=e,this.subTrees=[];const r=new I,o=(a,l)=>{const c=new Float32Array(l*4);let u=0;for(let h=0;h<l;h++){const d=h+a;if(t(d)){e.getSplatCenter(d,r);const f=u*4;c[f]=r.x,c[f+1]=r.y,c[f+2]=r.z,c[f+3]=d,u++}}return c};return new Promise(a=>{const l=()=>this.disposed?(this.diposeSplatTreeWorker(),a(),!0):!1;n&&n(!1),Ei(()=>{if(l())return;const c=[];if(e.dynamicMode){let u=0;for(let h=0;h<e.scenes.length;h++){const f=e.getScene(h).splatBuffer.getSplatCount(),p=o(u,f);c.push(p),u+=f}}else{const u=o(0,e.getSplatCount());c.push(u)}this.splatTreeWorker.onmessage=u=>{l()||u.data.subTrees&&(i&&i(!1),Ei(()=>{if(!l()){for(let h of u.data.subTrees){const d=ga.convertWorkerSubTree(h,e);this.subTrees.push(d)}this.diposeSplatTreeWorker(),i&&i(!0),Ei(()=>{a()})}}))},Ei(()=>{if(l())return;n&&n(!0);const u=c.map(h=>h.buffer);fR(this.splatTreeWorker,c,u,this.maxDepth,this.maxCentersPerNode)})})})});this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const t=(n,i)=>{n.children.length===0&&i(n);for(let r of n.children)t(r,i)};for(let n of this.subTrees)t(n.rootNode,e)}}function gR(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _R(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,x=o||e.has("OES_texture_float"),E=v&&x,T=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:T}}const _a={Default:0,Gradual:1,Instant:2},yo={None:0,Error:1,Warning:2,Info:3,Debug:4},ug=new xn,vR=new Hs,Ol=6,xR=4,yR=4,SR=4,AR=6,MR=8,ju=4,Zu=4,hg=1,TR=.012,ER=.003,dg=1,fg=16777216;class sn extends yt{constructor(t=rs.ThreeD,n=!1,i=!1,r=!1,o=1,a=!0,l=!1,c=!1,u=1024,h=yo.None,d=0,f=1){super(ug,vR);le(this,"buildSplatTree",function(t=[],n,i){return new Promise(r=>{this.disposeSplatTree(),this.baseSplatTree=new mR(8,1e3);const o=performance.now(),a=new Ze;this.baseSplatTree.processSplatMesh(this,l=>{this.getSplatColor(l,a);const c=this.getSceneIndexForSplat(l),u=t[c]||1;return a.w>=u},n,i).then(()=>{const l=performance.now()-o;if(this.logLevel>=yo.Info&&console.log("SplatTree build: "+l+" ms"),this.disposed)r();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let c=0,u=0,h=0;this.splatTree.visitLeaves(d=>{const f=d.data.indexes.length;f>0&&(u+=f,h++,c++)}),this.logLevel>=yo.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${c}`),u=u/h,console.log(`Avg splat count per node: ${u}`),console.log(`Total splat count: ${this.getSplatCount()}`)),r()}})})});le(this,"updateUniforms",function(){const t=new he;return function(n,i,r,o,a,l){if(this.getSplatCount()>0){if(t.set(n.x*this.devicePixelRatio,n.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(t),this.material.uniforms.basisViewport.value.set(1/t.x,1/t.y),this.material.uniforms.focal.value.set(i,r),this.material.uniforms.orthographicMode.value=o?1:0,this.material.uniforms.orthoZoom.value=a,this.material.uniforms.inverseFocalAdjustment.value=l,this.dynamicMode)for(let u=0;u<this.scenes.length;u++)this.material.uniforms.transforms.value[u].copy(this.getScene(u).transform);if(this.enableOptionalEffects)for(let u=0;u<this.scenes.length;u++)this.material.uniforms.sceneOpacity.value[u]=an(this.getScene(u).opacity,0,1),this.material.uniforms.sceneVisibility.value[u]=this.getScene(u).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}}());le(this,"setupDistancesComputationTransformFeedback",function(){let t;return function(){const n=this.getMaxSplatCount();if(!this.renderer)return;const i=this.lastRenderer!==this.renderer,r=t!==n;if(!i&&!r)return;i?this.disposeDistancesComputationGPUResources():r&&this.disposeDistancesComputationGPUBufferResources();const o=this.renderer.getContext(),a=(f,p,_)=>{const m=f.createShader(p);if(!m)return console.error("Fatal error: gl could not create a shader object."),null;if(f.shaderSource(m,_),f.compileShader(m),!f.getShaderParameter(m,f.COMPILE_STATUS)){let y="unknown";p===f.VERTEX_SHADER?y="vertex shader":p===f.FRAGMENT_SHADER&&(y="fragement shader");const v=f.getShaderInfoLog(m);return console.error("Failed to compile "+y+" with these errors:"+v),f.deleteShader(m),null}return m};let l;this.integerBasedDistancesComputation?(l=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?l+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${$e.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `:l+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `):(l=`#version 300 es
                in vec4 center;
                flat out float distance;`,this.dynamicMode?l+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${$e.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `:l+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `);const c=`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `,u=o.getParameter(o.VERTEX_ARRAY_BINDING),h=o.getParameter(o.CURRENT_PROGRAM),d=h?o.getProgramParameter(h,o.DELETE_STATUS):!1;if(i&&(this.distancesTransformFeedback.vao=o.createVertexArray()),o.bindVertexArray(this.distancesTransformFeedback.vao),i){const f=o.createProgram(),p=a(o,o.VERTEX_SHADER,l),_=a(o,o.FRAGMENT_SHADER,c);if(!p||!_)throw new Error("Could not compile shaders for distances computation on GPU.");if(o.attachShader(f,p),o.attachShader(f,_),o.transformFeedbackVaryings(f,["distance"],o.SEPARATE_ATTRIBS),o.linkProgram(f),!o.getProgramParameter(f,o.LINK_STATUS)){const g=o.getProgramInfoLog(f);throw console.error("Fatal error: Failed to link program: "+g),o.deleteProgram(f),o.deleteShader(_),o.deleteShader(p),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=f,this.distancesTransformFeedback.vertexShader=p,this.distancesTransformFeedback.vertexShader=_}if(o.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=o.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=o.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let f=0;f<this.scenes.length;f++)this.distancesTransformFeedback.transformsLocs[f]=o.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${f}]`)}else this.distancesTransformFeedback.modelViewProjLoc=o.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(i||r)&&(this.distancesTransformFeedback.centersBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?o.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,o.INT,0,0):o.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,o.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),o.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,o.UNSIGNED_INT,0,0))),(i||r)&&(this.distancesTransformFeedback.outDistancesBuffer=o.createBuffer()),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),o.bufferData(o.ARRAY_BUFFER,n*4,o.STATIC_READ),i&&(this.distancesTransformFeedback.id=o.createTransformFeedback()),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),h&&d!==!0&&o.useProgram(h),u&&o.bindVertexArray(u),this.lastRenderer=this.renderer,t=n}}());le(this,"fillTransformsArray",function(){const t=[];return function(n){t.length!==n.length&&(t.length=n.length);for(let i=0;i<this.scenes.length;i++){const o=this.getScene(i).transform.elements;for(let a=0;a<16;a++)t[i*16+a]=o[a]}n.set(t)}}());le(this,"computeDistancesOnGPU",function(){const t=new ue;return function(n,i){if(!this.renderer)return;const r=this.renderer.getContext(),o=r.getParameter(r.VERTEX_ARRAY_BINDING),a=r.getParameter(r.CURRENT_PROGRAM),l=a?r.getProgramParameter(a,r.DELETE_STATUS):!1;if(r.bindVertexArray(this.distancesTransformFeedback.vao),r.useProgram(this.distancesTransformFeedback.program),r.enable(r.RASTERIZER_DISCARD),this.dynamicMode)for(let h=0;h<this.scenes.length;h++)if(t.copy(this.getScene(h).transform),t.premultiply(n),this.integerBasedDistancesComputation){const d=sn.getIntegerMatrixArray(t),f=[d[2],d[6],d[10],d[14]];r.uniform4i(this.distancesTransformFeedback.transformsLocs[h],f[0],f[1],f[2],f[3])}else r.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[h],!1,t.elements);else if(this.integerBasedDistancesComputation){const h=sn.getIntegerMatrixArray(n),d=[h[2],h[6],h[10]];r.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,d[0],d[1],d[2])}else{const h=[n.elements[2],n.elements[6],n.elements[10]];r.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,h[0],h[1],h[2])}r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?r.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,r.INT,0,0):r.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,r.FLOAT,!1,0,0),this.dynamicMode&&(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),r.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,r.UNSIGNED_INT,0,0)),r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),r.beginTransformFeedback(r.POINTS),r.drawArrays(r.POINTS,0,this.getSplatCount()),r.endTransformFeedback(),r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,0,null),r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,null),r.disable(r.RASTERIZER_DISCARD);const c=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);r.flush();const u=new Promise(h=>{const d=()=>{if(this.disposed)h();else switch(r.clientWaitSync(c,0,0)){case r.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(d),this.computeDistancesOnGPUSyncTimeout;case r.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,r.deleteSync(c);const m=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),r.getBufferSubData(r.ARRAY_BUFFER,0,i),r.bindBuffer(r.ARRAY_BUFFER,null),m&&r.bindVertexArray(m),h()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(d)});return a&&l!==!0&&r.useProgram(a),o&&r.bindVertexArray(o),u}}());le(this,"getSplatCenter",function(){const t={};return function(n,i,r){this.getLocalSplatParameters(n,t,r),t.splatBuffer.getSplatCenter(t.localIndex,i,t.sceneTransform)}}());le(this,"getSplatScaleAndRotation",function(){const t={},n=new I;return function(i,r,o,a){this.getLocalSplatParameters(i,t,a),n.x=void 0,n.y=void 0,n.z=void 0,this.splatRenderMode===rs.TwoD&&(n.z=0),t.splatBuffer.getSplatScaleAndRotation(t.localIndex,r,o,t.sceneTransform,n)}}());le(this,"getSplatColor",function(){const t={};return function(n,i){this.getLocalSplatParameters(n,t),t.splatBuffer.getSplatColor(t.localIndex,i)}}());this.renderer=void 0,this.splatRenderMode=t,this.dynamicMode=n,this.enableOptionalEffects=i,this.halfPrecisionCovariancesOnGPU=r,this.devicePixelRatio=o,this.enableDistancesComputationOnGPU=a,this.integerBasedDistancesComputation=l,this.antialiased=c,this.maxScreenSpaceSplatSize=u,this.logLevel=h,this.sphericalHarmonicsDegree=d,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=f,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new Ti,this.calculatedSceneCenter=new I,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(t,n,i){const r=[];r.length=n.length;for(let o=0;o<n.length;o++){const a=n[o],l=i[o]||{};let c=l.position||[0,0,0],u=l.rotation||[0,0,0,1],h=l.scale||[1,1,1];const d=new I().fromArray(c),f=new st().fromArray(u),p=new I().fromArray(h),_=sn.createScene(a,d,f,p,l.splatAlphaRemovalThreshold||1,l.opacity,l.visible);t.add(_),r[o]=_}return r}static createScene(t,n,i,r,o,a=1,l=!0){return new hR(t,n,i,r,o,a,l)}static buildSplatIndexMaps(t){const n=[],i=[];let r=0;for(let o=0;o<t.length;o++){const l=t[o].getMaxSplatCount();for(let c=0;c<l;c++)n[r]=c,i[r]=o,r++}return{localSplatIndexMap:n,sceneIndexMap:i}}build(t,n,i=!0,r=!1,o,a,l=!0){this.sceneOptions=n,this.finalBuild=r;const c=sn.getTotalMaxSplatCountForSplatBuffers(t),u=sn.buildScenes(this,t,n);if(i)for(let m=0;m<this.scenes.length&&m<u.length;m++){const g=u[m],y=this.getScene(m);g.copyTransformData(y)}this.scenes=u;let h=3;for(let m of t){const g=m.getMinSphericalHarmonicsDegree();g<h&&(h=g)}this.minSphericalHarmonicsDegree=Math.min(h,this.sphericalHarmonicsDegree);let d=!1;if(t.length!==this.lastBuildScenes.length)d=!0;else for(let m=0;m<t.length;m++)if(t[m]!==this.lastBuildScenes[m].splatBuffer){d=!0;break}let f=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==c||d)&&(f=!1),!f){this.boundingBox=new Ti,l||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=uR.build(c),this.splatRenderMode===rs.ThreeD?this.material=xc.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree):this.material=yc.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const m=sn.buildSplatIndexMaps(t);this.globalSplatIndexToLocalSplatIndexMap=m.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=m.sceneIndexMap}const p=this.getSplatCount();this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const _=this.refreshGPUDataFromSplatBuffers(f);for(let m=0;m<this.scenes.length;m++)this.lastBuildScenes[m]=this.scenes[m];return this.lastBuildSplatCount=p,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,r&&this.scenes.length>0&&this.buildSplatTree(n.map(m=>m.splatAlphaRemovalThreshold||1),o,a).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,_}freeIntermediateSplatData(){const t=n=>{delete n.source.data,delete n.image,n.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{t(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{t(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{t(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(n=>{n.needsUpdate=!0,n.onUpdate=()=>{t(n)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{t(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new Ti,this.calculatedSceneCenter=new I,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==ug&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let t in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(t)){const n=this.splatDataTextures[t];n.texture&&(n.texture.dispose(),n.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(t){this.onSplatTreeReadyCallback=t}getDataForDistancesComputation(t,n){const i=this.integerBasedDistancesComputation?this.getIntegerCenters(t,n,!0):this.getFloatCenters(t,n,!0),r=this.getSceneIndexes(t,n);return{centers:i,sceneIndexes:r}}refreshGPUDataFromSplatBuffers(t){const n=this.getSplatCount();this.refreshDataTexturesFromSplatBuffers(t);const i=t?this.lastBuildSplatCount:0,{centers:r,sceneIndexes:o}=this.getDataForDistancesComputation(i,n-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(r,o,t),{from:i,to:n-1,count:n-i,centers:r,sceneIndexes:o}}refreshGPUBuffersForDistancesComputation(t,n,i=!1){const r=i?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(i,t,r),this.updateGPUTransformIndexesBufferForDistancesComputation(i,n,r)}refreshDataTexturesFromSplatBuffers(t){const n=this.getSplatCount(),i=this.lastBuildSplatCount,r=n-1;t?this.updateBaseDataFromSplatBuffers(i,r):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(i,r),this.updateVisibleRegion(t)}setupDataTextures(){const t=this.getMaxSplatCount(),n=this.getSplatCount();this.disposeTextures();const i=(C,S)=>{const M=new he(4096,1024);for(;M.x*M.y*C<t*S;)M.y*=2;return M},r=C=>C>=1?AR:yR,o=C=>{const S=r(C),M=i(S,6);return{elementsPerTexelStored:S,texSize:M}};let a=this.getTargetCovarianceCompressionLevel();const l=0,c=this.getTargetSphericalHarmonicsCompressionLevel();let u,h,d;if(this.splatRenderMode===rs.ThreeD){const C=o(a);C.texSize.x*C.texSize.y>fg&&a===0&&(a=1),u=new Float32Array(t*Ol)}else h=new Float32Array(t*3),d=new Float32Array(t*4);const f=new Float32Array(t*3),p=new Uint8Array(t*4);let _=Float32Array;c===1?_=Uint16Array:c===2&&(_=Uint8Array);const m=vo(this.minSphericalHarmonicsDegree),g=this.minSphericalHarmonicsDegree?new _(t*m):void 0,y=i(Zu,4),v=new Uint32Array(y.x*y.y*Zu);sn.updateCenterColorsPaddedData(0,n-1,f,p,v);const x=new Ji(v,y.x,y.y,fo,ai);if(x.internalFormat="RGBA32UI",x.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=x,this.material.uniforms.centersColorsTextureSize.value.copy(y),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:u,scales:h,rotations:d,centers:f,colors:p,sphericalHarmonics:g},centerColors:{data:v,texture:x,size:y}},this.splatRenderMode===rs.ThreeD){const C=o(a),S=C.elementsPerTexelStored,M=C.texSize;let w=a>=1?Uint32Array:Float32Array;const L=a>=1?MR:SR,P=new w(M.x*M.y*L);a===0?P.set(u):sn.updatePaddedCompressedCovariancesTextureData(u,P,0,0,u.length);let F;if(a>=1)F=new Ji(P,M.x,M.y,fo,ai),F.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=F;else{F=new Ji(P,M.x,M.y,vn,li),this.material.uniforms.covariancesTexture.value=F;const B=new Ji(new Uint32Array(32),2,2,fo,ai);B.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=B,B.needsUpdate=!0}F.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=a>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(M),this.splatDataTextures.covariances={data:P,texture:F,size:M,compressionLevel:a,elementsPerTexelStored:S,elementsPerTexelAllocated:L}}else{const S=i(ju,6);let M=Float32Array,w=li;const L=new M(S.x*S.y*ju);sn.updateScaleRotationsPaddedData(0,n-1,h,d,L);const P=new Ji(L,S.x,S.y,vn,w);P.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=P,this.material.uniforms.scaleRotationsTextureSize.value.copy(S),this.splatDataTextures.scaleRotations={data:L,texture:P,size:S,compressionLevel:l}}if(g){const C=c===2?Ni:No;let S=m;S%2!==0&&S++;const M=this.minSphericalHarmonicsDegree===2?4:2,w=M===4?vn:Ud;let L=i(M,S);if(L.x*L.y<=fg){const P=L.x*L.y*M,F=new _(P);for(let O=0;O<n;O++){const H=m*O,N=S*O;for(let j=0;j<m;j++)F[N+j]=g[H+j]}const B=new Ji(F,L.x,L.y,w,C);B.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=B,this.splatDataTextures.sphericalHarmonics={componentCount:m,paddedComponentCount:S,data:F,textureCount:1,texture:B,size:L,compressionLevel:c,elementsPerTexel:M}}else{const P=m/3;S=P,S%2!==0&&S++,L=i(M,S);const F=L.x*L.y*M,B=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],O=[],H=[];for(let N=0;N<3;N++){const j=new _(F);O.push(j);for(let ae=0;ae<n;ae++){const fe=m*ae,Se=S*ae;if(P>=3){for(let W=0;W<3;W++)j[Se+W]=g[fe+N*3+W];if(P>=8)for(let W=0;W<5;W++)j[Se+3+W]=g[fe+9+N*5+W]}}const ie=new Ji(j,L.x,L.y,w,C);H.push(ie),ie.needsUpdate=!0,B[N].value=ie}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:m,componentCountPerChannel:P,paddedComponentCount:S,data:O,textureCount:3,textures:H,size:L,compressionLevel:c,elementsPerTexel:M}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(L),this.material.uniforms.sphericalHarmonics8BitMode.value=c===2?1:0;for(let P=0;P<this.scenes.length;P++){const F=this.scenes[P].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[P]=F.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[P]=F.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const E=i(hg,4),T=new Uint32Array(E.x*E.y*hg);for(let C=0;C<n;C++)T[C]=this.globalSplatIndexToSceneIndexMap[C];const A=new Ji(T,E.x,E.y,Ic,ai);A.internalFormat="R32UI",A.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=A,this.material.uniforms.sceneIndexesTextureSize.value.copy(E),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:T,texture:A,size:E},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(t,n){const i=this.splatDataTextures.covariances,r=i?i.compressionLevel:void 0,o=this.splatDataTextures.scaleRotations,a=o?o.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,r,a,c,t,n,t)}updateDataTexturesFromBaseData(t,n){const i=this.splatDataTextures.covariances,r=i?i.compressionLevel:void 0,o=this.splatDataTextures.scaleRotations,a=o?o.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0,u=this.splatDataTextures.centerColors,h=u.data,d=u.texture;sn.updateCenterColorsPaddedData(t,n,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,h);const f=this.renderer?this.renderer.properties.get(d):null;if(!f||!f.__webglTexture?d.needsUpdate=!0:this.updateDataTexture(h,u.texture,u.size,f,Zu,xR,4,t,n),i){const v=i.texture,x=t*Ol,E=n*Ol;if(r===0)for(let A=x;A<=E;A++){const C=this.splatDataTextures.baseData.covariances[A];i.data[A]=C}else sn.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,i.data,t*i.elementsPerTexelAllocated,x,E);const T=this.renderer?this.renderer.properties.get(v):null;!T||!T.__webglTexture?v.needsUpdate=!0:r===0?this.updateDataTexture(i.data,i.texture,i.size,T,i.elementsPerTexelStored,Ol,4,t,n):this.updateDataTexture(i.data,i.texture,i.size,T,i.elementsPerTexelAllocated,i.elementsPerTexelAllocated,2,t,n)}if(o){const v=o.data,x=o.texture,E=6,T=a===0?4:2;sn.updateScaleRotationsPaddedData(t,n,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,v);const A=this.renderer?this.renderer.properties.get(x):null;!A||!A.__webglTexture?x.needsUpdate=!0:this.updateDataTexture(v,o.texture,o.size,A,ju,E,T,t,n)}const p=this.splatDataTextures.baseData.sphericalHarmonics;if(p){let v=4;c===1?v=2:c===2&&(v=1);const x=(A,C,S,M,w)=>{const L=this.renderer?this.renderer.properties.get(A):null;!L||!L.__webglTexture?A.needsUpdate=!0:this.updateDataTexture(M,A,C,L,S,w,v,t,n)},E=l.componentCount,T=l.paddedComponentCount;if(l.textureCount===1){const A=l.data;for(let C=t;C<=n;C++){const S=E*C,M=T*C;for(let w=0;w<E;w++)A[M+w]=p[S+w]}x(l.texture,l.size,l.elementsPerTexel,A,T)}else{const A=l.componentCountPerChannel;for(let C=0;C<3;C++){const S=l.data[C];for(let M=t;M<=n;M++){const w=E*M,L=T*M;if(A>=3){for(let P=0;P<3;P++)S[L+P]=p[w+C*3+P];if(A>=8)for(let P=0;P<5;P++)S[L+3+P]=p[w+9+C*5+P]}}x(l.textures[C],l.size,l.elementsPerTexel,S,T)}}}const _=this.splatDataTextures.sceneIndexes,m=_.data;for(let v=this.lastBuildSplatCount;v<=n;v++)m[v]=this.globalSplatIndexToSceneIndexMap[v];const g=_.texture,y=this.renderer?this.renderer.properties.get(g):null;!y||!y.__webglTexture?g.needsUpdate=!0:this.updateDataTexture(m,_.texture,_.size,y,1,1,1,this.lastBuildSplatCount,n)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const r=this.getScene(n).splatBuffer;(n===0||r.compressionLevel>t)&&(t=r.compressionLevel)}return t}getMinimumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const r=this.getScene(n).splatBuffer;(n===0||r.compressionLevel<t)&&(t=r.compressionLevel)}return t}static computeTextureUpdateRegion(t,n,i,r,o){const a=o/r,l=t*a,c=Math.floor(l/i),u=c*i*r,h=n*a,d=Math.floor(h/i),f=d*i*r+i*r;return{dataStart:u,dataEnd:f,startRow:c,endRow:d}}updateDataTexture(t,n,i,r,o,a,l,c,u){const h=this.renderer.getContext(),d=sn.computeTextureUpdateRegion(c,u,i.x,o,a),f=d.dataEnd-d.dataStart,p=new t.constructor(t.buffer,d.dataStart*l,f),_=d.endRow-d.startRow+1,m=this.webGLUtils.convert(n.type),g=this.webGLUtils.convert(n.format,n.colorSpace),y=h.getParameter(h.TEXTURE_BINDING_2D);h.bindTexture(h.TEXTURE_2D,r.__webglTexture),h.texSubImage2D(h.TEXTURE_2D,0,0,d.startRow,i.x,_,g,m,p),h.bindTexture(h.TEXTURE_2D,y)}static updatePaddedCompressedCovariancesTextureData(t,n,i,r,o){let a=new DataView(n.buffer),l=i,c=0;for(let u=r;u<=o;u+=2)a.setUint16(l*2,t[u],!0),a.setUint16(l*2+2,t[u+1],!0),l+=2,c++,c>=3&&(l+=2,c=0)}static updateCenterColorsPaddedData(t,n,i,r,o){for(let a=t;a<=n;a++){const l=a*4,c=a*3,u=a*4;o[u]=m1(r,l),o[u+1]=Gu(i[c]),o[u+2]=Gu(i[c+1]),o[u+3]=Gu(i[c+2])}}static updateScaleRotationsPaddedData(t,n,i,r,o){for(let l=t;l<=n;l++){const c=l*3,u=l*4,h=l*6;o[h]=i[c],o[h+1]=i[c+1],o[h+2]=i[c+2],o[h+3]=r[u],o[h+4]=r[u+1],o[h+5]=r[u+2]}}updateVisibleRegion(t){const n=this.getSplatCount(),i=new I;if(!t){const o=new I;this.scenes.forEach(a=>{o.add(a.splatBuffer.sceneCenter)}),o.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(o),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const r=t?this.lastBuildSplatCount:0;for(let o=r;o<n;o++){this.getSplatCenter(o,i,!0);const a=i.sub(this.calculatedSceneCenter).length();a>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=a)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>dg&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-dg,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(t=_a.Default){const n=TR*this.sceneFadeInRateMultiplier,i=ER*this.sceneFadeInRateMultiplier,r=this.finalBuild?n:i,o=t===_a.Default?r:i;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*o+this.visibleRegionFadeStartRadius;const l=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,c=l||t===_a.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=c,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!l}updateRenderIndexes(t,n){const i=this.geometry;i.attributes.splatIndex.set(t),i.attributes.splatIndex.needsUpdate=!0,n>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),i.instanceCount=n,i.setDrawRange(0,n)}updateTransforms(){for(let t=0;t<this.scenes.length;t++)this.getScene(t).updateTransform(this.dynamicMode)}setSplatScale(t=1){this.splatScale=t,this.material.uniforms.splatScale.value=t,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(t){this.pointCloudModeEnabled=t,this.material.uniforms.pointCloudModeEnabled.value=t?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(){return sn.getTotalSplatCountForScenes(this.scenes)}static getTotalSplatCountForScenes(t){let n=0;for(let i of t)i&&i.splatBuffer&&(n+=i.splatBuffer.getSplatCount());return n}static getTotalSplatCountForSplatBuffers(t){let n=0;for(let i of t)n+=i.getSplatCount();return n}getMaxSplatCount(){return sn.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(t){let n=0;for(let i of t)i&&i.splatBuffer&&(n+=i.splatBuffer.getMaxSplatCount());return n}static getTotalMaxSplatCountForSplatBuffers(t){let n=0;for(let i of t)n+=i.getMaxSplatCount();return n}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.vao&&(t.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(t.deleteProgram(this.distancesTransformFeedback.program),t.deleteShader(this.distancesTransformFeedback.vertexShader),t.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(t.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,t.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(t.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(t){if(t!==this.renderer){this.renderer=t;const n=this.renderer.getContext(),i=new gR(n),r=new _R(n,i,{});if(i.init(r),this.webGLUtils=new _0(n,i),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:o,sceneIndexes:a}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(o,a)}}}updateGPUCentersBufferForDistancesComputation(t,n,i){if(!this.renderer)return;const r=this.renderer.getContext(),o=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao);const a=this.integerBasedDistancesComputation?Uint32Array:Float32Array,l=16,c=i*l;if(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),t)r.bufferSubData(r.ARRAY_BUFFER,c,n);else{const u=new a(this.getMaxSplatCount()*l);u.set(n),r.bufferData(r.ARRAY_BUFFER,u,r.STATIC_DRAW)}r.bindBuffer(r.ARRAY_BUFFER,null),o&&r.bindVertexArray(o)}updateGPUTransformIndexesBufferForDistancesComputation(t,n,i){if(!this.renderer||!this.dynamicMode)return;const r=this.renderer.getContext(),o=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao);const a=i*4;if(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),t)r.bufferSubData(r.ARRAY_BUFFER,a,n);else{const l=new Uint32Array(this.getMaxSplatCount()*4);l.set(n),r.bufferData(r.ARRAY_BUFFER,l,r.STATIC_DRAW)}r.bindBuffer(r.ARRAY_BUFFER,null),o&&r.bindVertexArray(o)}getSceneIndexes(t,n){let i;const r=n-t+1;i=new Uint32Array(r);for(let o=t;o<=n;o++)i[o]=this.globalSplatIndexToSceneIndexMap[o];return i}getLocalSplatParameters(t,n,i){i==null&&(i=!this.dynamicMode),n.splatBuffer=this.getSplatBufferForSplat(t),n.localIndex=this.getSplatLocalIndex(t),n.sceneTransform=i?this.getSceneTransformForSplat(t):null}fillSplatDataArrays(t,n,i,r,o,a,l,c=0,u=0,h=1,d,f,p=0,_){const m=new I;m.x=void 0,m.y=void 0,this.splatRenderMode===rs.ThreeD?m.z=void 0:m.z=1;const g=new ue;let y=0,v=this.scenes.length-1;_!=null&&_>=0&&_<=this.scenes.length&&(y=_,v=_);for(let x=y;x<=v;x++){l==null&&(l=!this.dynamicMode);const E=this.getScene(x),T=E.splatBuffer;let A;if(l&&(this.getSceneTransform(x,g),A=g),t&&T.fillSplatCovarianceArray(t,A,d,f,p,c),n||i){if(!n||!i)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');T.fillSplatScaleRotationArray(n,i,A,d,f,p,u,m)}r&&T.fillSplatCenterArray(r,A,d,f,p),o&&T.fillSplatColorArray(o,E.minimumAlpha,d,f,p),a&&T.fillSphericalHarmonicsArray(a,this.minSphericalHarmonicsDegree,A,d,f,p,h),p+=T.getSplatCount()}}getIntegerCenters(t,n,i=!1){const r=n-t+1,o=new Float32Array(r*3);this.fillSplatDataArrays(null,null,null,o,null,null,void 0,void 0,void 0,void 0,t);let a,l=i?4:3;a=new Int32Array(r*l);for(let c=0;c<r;c++){for(let u=0;u<3;u++)a[c*l+u]=Math.round(o[c*3+u]*1e3);i&&(a[c*l+3]=1e3)}return a}getFloatCenters(t,n,i=!1){const r=n-t+1,o=new Float32Array(r*3);if(this.fillSplatDataArrays(null,null,null,o,null,null,void 0,void 0,void 0,void 0,t),!i)return o;let a=new Float32Array(r*4);for(let l=0;l<r;l++){for(let c=0;c<3;c++)a[l*4+c]=o[l*3+c];a[l*4+3]=1}return a}getSceneTransform(t,n){const i=this.getScene(t);i.updateTransform(this.dynamicMode),n.copy(i.transform)}getScene(t){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[t]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).splatBuffer}getSceneIndexForSplat(t){return this.globalSplatIndexToSceneIndexMap[t]}getSceneTransformForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).transform}getSplatLocalIndex(t){return this.globalSplatIndexToLocalSplatIndexMap[t]}static getIntegerMatrixArray(t){const n=t.elements,i=[];for(let r=0;r<16;r++)i[r]=Math.round(n[r]*1e3);return i}computeBoundingBox(t=!1,n){let i=this.getSplatCount();if(n!=null){if(n<0||n>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");i=this.scenes[n].splatBuffer.getSplatCount()}const r=new Float32Array(i*3);this.fillSplatDataArrays(null,null,null,r,null,null,t,void 0,void 0,void 0,void 0,n);const o=new I,a=new I;for(let l=0;l<i;l++){const c=l*3,u=r[c],h=r[c+1],d=r[c+2];(l===0||u<o.x)&&(o.x=u),(l===0||h<o.y)&&(o.y=h),(l===0||d<o.z)&&(o.z=d),(l===0||u>a.x)&&(a.x=u),(l===0||h>a.y)&&(a.y=h),(l===0||d>a.z)&&(a.z=d)}return new Ti(o,a)}}var CR="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",pg="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",bR="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",wR="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function RR(s){let e,t,n,i,r,o,a,l,c,u,h,d,f,p,_,m,g,y,v,x;function E(T,A,C,S,M,w,L){const P=performance.now();if(!n&&(new Uint32Array(t,a,M.byteLength/x.BytesPerInt).set(M),new Float32Array(t,u,L.byteLength/x.BytesPerFloat).set(L),S)){let N;i?N=new Int32Array(t,h,w.byteLength/x.BytesPerInt):N=new Float32Array(t,h,w.byteLength/x.BytesPerFloat),N.set(w)}m||(m=new Uint32Array(y)),new Float32Array(t,_,16).set(C),new Uint32Array(t,f,y).set(m),e.exports.sortIndexes(a,p,h,d,f,_,l,c,u,y,T,A,o,S,i,r);const F={sortDone:!0,splatSortCount:T,splatRenderCount:A,sortTime:0};if(!n){const O=new Uint32Array(t,l,A);(!g||g.length<A)&&(g=new Uint32Array(A)),g.set(O),F.sortedIndexes=g}const B=performance.now();F.sortTime=B-P,s.postMessage(F)}s.onmessage=T=>{if(T.data.centers)centers=T.data.centers,sceneIndexes=T.data.sceneIndexes,i?new Int32Array(t,p+T.data.range.from*x.BytesPerInt*4,T.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,p+T.data.range.from*x.BytesPerFloat*4,T.data.range.count*4).set(new Float32Array(centers)),r&&new Uint32Array(t,c+T.data.range.from*4,T.data.range.count).set(new Uint32Array(sceneIndexes)),v=T.data.range.from+T.data.range.count;else if(T.data.sort){const A=Math.min(T.data.sort.splatRenderCount||0,v),C=Math.min(T.data.sort.splatSortCount||0,v),S=T.data.sort.usePrecomputedDistances;let M,w,L;n||(M=T.data.sort.indexesToSort,L=T.data.sort.transforms,S&&(w=T.data.sort.precomputedDistances)),E(C,A,T.data.sort.modelViewProj,S,M,w,L)}else if(T.data.init){x=T.data.init.Constants,o=T.data.init.splatCount,n=T.data.init.useSharedMemory,i=T.data.init.integerBasedSort,r=T.data.init.dynamicMode,y=T.data.init.distanceMapRange,v=0;const A=i?x.BytesPerInt*4:x.BytesPerFloat*4,C=new Uint8Array(T.data.init.sorterWasmBytes),S=16*x.BytesPerFloat,M=o*x.BytesPerInt,w=o*A,L=S,P=i?o*x.BytesPerInt:o*x.BytesPerFloat,F=o*x.BytesPerInt,B=o*x.BytesPerInt,O=i?y*x.BytesPerInt*2:y*x.BytesPerFloat*2,H=r?o*x.BytesPerInt:0,N=r?x.MaxScenes*S:0,j=x.MemoryPageSize*32,ie=M+w+L+P+F+O+B+H+N+j,ae=Math.floor(ie/x.MemoryPageSize)+1,fe={module:{},env:{memory:new WebAssembly.Memory({initial:ae,maximum:ae,shared:!0})}};WebAssembly.compile(C).then(Se=>WebAssembly.instantiate(Se,fe)).then(Se=>{e=Se,a=0,p=a+M,_=p+w,h=_+L,d=h+P,f=d+F,l=f+O,c=l+B,u=c+H,t=fe.env.memory.buffer,n?s.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:a,sortedIndexesBuffer:t,sortedIndexesOffset:l,precomputedDistancesBuffer:t,precomputedDistancesOffset:h,transformsBuffer:t,transformsOffset:u}):s.postMessage({sortSetupPhase1Complete:!0})})}}}function IR(s,e,t,n,i,r=$e.DefaultSplatSortDistanceMapPrecision){const o=new Worker(URL.createObjectURL(new Blob(["(",RR.toString(),")(self)"],{type:"application/javascript"})));let a=CR;const l=xf()?z_():null;!t&&!e?(a=pg,l&&l.major<=16&&l.minor<4&&(a=wR)):t?e||l&&l.major<=16&&l.minor<4&&(a=bR):a=pg;const c=atob(a),u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h);return o.postMessage({init:{sorterWasmBytes:u.buffer,splatCount:s,useSharedMemory:e,integerBasedSort:n,dynamicMode:i,distanceMapRange:1<<r,Constants:{BytesPerFloat:$e.BytesPerFloat,BytesPerInt:$e.BytesPerInt,MemoryPageSize:$e.MemoryPageSize,MaxScenes:$e.MaxScenes}}}),o}const jr={None:0,VR:1,AR:2};class Uo{static createButton(e,t={}){const n=document.createElement("button");function i(){let c=null;async function u(f){f.addEventListener("end",h),await e.xr.setSession(f),n.textContent="EXIT VR",c=f}function h(){c.removeEventListener("end",h),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const d={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",d).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(u).catch(f=>{console.warn(f)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(u).catch(f=>{console.warn(f)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){r(),n.textContent="VR NOT SUPPORTED"}function a(c){r(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():o(),c&&Uo.xrSessionIsGranted&&n.click()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Uo.xrSessionIsGranted=!0})}}}Uo.xrSessionIsGranted=!1;Uo.registerSessionGrantedListener();class PR{static createButton(e,t={}){const n=document.createElement("button");function i(){if(t.domOverlay===void 0){const d=document.createElement("div");d.style.display="none",document.body.appendChild(d);const f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("width",38),f.setAttribute("height",38),f.style.position="absolute",f.style.right="20px",f.style.top="20px",f.addEventListener("click",function(){c.end()}),d.appendChild(f);const p=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),p.setAttribute("stroke","#fff"),p.setAttribute("stroke-width",2),f.appendChild(p),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:d}}let c=null;async function u(d){d.addEventListener("end",h),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(d),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=d}function h(){c.removeEventListener("end",h),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(d=>{console.warn(d)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){r(),n.textContent="AR NOT SUPPORTED"}function a(c){r(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?i():o()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const $u={Always:0,OnChange:1,Never:2},DR=50,FR=.75,LR=15e5,BR=10,UR=2.5,OR=60,Cs=class Cs{constructor(e={}){le(this,"onKeyDown",function(){const e=new I,t=new ue,n=new ue;return function(i){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),t.makeRotationAxis(e,Math.PI/128),n.makeRotationAxis(e,-Math.PI/128),i.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(t);break;case"ArrowRight":this.camera.up.transformDirection(n);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}}());le(this,"onMouseUp",function(){const e=new he;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),Yr()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}}());le(this,"checkForFocalPointChange",function(){const e=new he,t=new I,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){const r=n[0].origin;t.copy(r).sub(this.camera.position),t.length()>FR&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(r),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=Yr())}}}());le(this,"updateSplatMesh",function(){const e=new he;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const n=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,i=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,r=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,o=this.focalAdjustment*r,a=1/o;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,n*o,i*o,this.camera.isOrthographicCamera,this.camera.zoom||1,a)}}}());le(this,"addSplatBuffers",function(){return function(e,t=[],n=!0,i=!0,r=!0,o=!1,a=!1,l=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let c=null;const u=()=>{c!==null&&(this.loadingSpinner.removeTask(c),c=null)};return new Promise(h=>{i&&(c=this.loadingSpinner.addTask("Processing splats...")),Ei(()=>{if(this.isDisposingOrDisposed())h();else{const d=this.addSplatBuffersToMesh(e,t,n,r,o,l);this.gpuAcceleratedSort||this.preSortPosts.push({centers:d.centers.buffer,sceneIndexes:d.sceneIndexes.buffer,range:{from:d.from,to:d.to,count:d.count}});const f=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==f&&this.disposeSortWorker(),(!this.sortWorker&&f>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||(this.sortWorker&&(this.sortRunning?n&&this.sortPromise.then(()=>{this.runSplatSort(!0,!0)}):this.runSplatSort(!0,!0)),this.splatRenderReady=!0,u(),h())})}},!0)})}}());le(this,"addSplatBuffersToMesh",function(){let e;return function(t,n,i=!0,r=!1,o=!1,a=!0){if(this.isDisposingOrDisposed())return;let l=[],c=[];o||(l=this.splatMesh.scenes.map(f=>f.splatBuffer)||[],c=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(f=>f):[]),l.push(...t),c.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);const u=f=>{if(this.isDisposingOrDisposed())return;const p=this.splatMesh.getSplatCount();r&&p>=LR&&!f&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},h=f=>{this.isDisposingOrDisposed()||f&&e&&(this.loadingSpinner.removeTask(e),e=null)},d=this.splatMesh.build(l,c,!0,i,u,h,a);return i&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),d}}());le(this,"shouldRender",function(){let e=0;const t=new I,n=new st,i=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let r=!1,o=!1;if(this.camera){const a=this.camera.position,l=this.camera.quaternion;o=Math.abs(a.x-t.x)>i||Math.abs(a.y-t.y)>i||Math.abs(a.z-t.z)>i||Math.abs(l.x-n.x)>i||Math.abs(l.y-n.y)>i||Math.abs(l.z-n.z)>i||Math.abs(l.w-n.w)>i}return r=this.renderMode!==$u.Never&&(e===0||this.splatMesh.visibleRegionChanging||o||this.renderMode===$u.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,r}}());le(this,"render",function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=n=>{for(let i of n.children)if(i.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}}());le(this,"updateFPS",function(){let e=Yr(),t=0;return function(){if(this.consecutiveRenderFrames>OR){const n=Yr();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}}());le(this,"updateForRendererSizeChanges",function(){const e=new he,t=new he;let n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(n===void 0||n!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}}());le(this,"timingSensitiveUpdates",function(){let e;return function(){const t=Yr();e||(e=t);const n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}}());le(this,"updateCameraTransition",function(){let e=new I,t=new I,n=new I;return function(i){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const r=Math.acos(t.dot(n)),a=(r/(Math.PI/3)*.65+.3)/r*(i-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,a),this.camera.lookAt(e),this.controls.target.copy(e),a>=1&&(this.transitioningCameraTarget=!1)}}}());le(this,"updateFocusMarker",function(){const e=new he;let t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const i=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let r=Math.min(i+BR*n,1);this.sceneHelper.setFocusMarkerOpacity(r),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let i;if(t?i=1:i=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),i>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let r=Math.max(i-UR*n,0);this.sceneHelper.setFocusMarkerOpacity(r),r===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}i>0&&this.forceRenderNextFrame(),t=!1}}}());le(this,"updateMeshCursor",function(){const e=[],t=new he;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}}());le(this,"updateInfoPanel",function(){const e=new he;return function(){if(!this.showInfo)return;const t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const n=this.controls?this.controls.target:null,i=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,r=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,i,this.currentFPS||"N/A",t,this.splatRenderCount,r,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}}());le(this,"runSplatSort",function(){const e=new ue,t=[],n=new I(0,0,-1),i=new I(0,0,-1),r=new I,o=new I,a=[],l=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(c=!1,u=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let h=0,d=0,f=!1,p=!1;if(i.set(0,0,-1).applyQuaternion(this.camera.quaternion),h=i.dot(n),d=o.copy(this.camera.position).sub(r).length(),!c&&!this.splatMesh.dynamicMode&&a.length===0&&(h<=.99&&(f=!0),d>=1&&(p=!0),!f&&!p))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:_,shouldSortAll:m}=this.gatherSceneNodesForSort();m=m||u,this.splatRenderCount=_,e.copy(this.camera.matrixWorld).invert();const g=this.perspectiveCamera||this.camera;e.premultiply(g.projectionMatrix),e.multiply(this.splatMesh.matrixWorld);let y=Promise.resolve(!0);return this.gpuAcceleratedSort&&(a.length<=1||a.length%2===0)&&(y=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),y.then(()=>{if(a.length===0)if(this.splatMesh.dynamicMode||m)a.push(this.splatRenderCount);else{for(let E of l)if(h<E.angleThreshold){for(let T of E.sortFractions)a.push(Math.floor(this.splatRenderCount*T));break}a.push(this.splatRenderCount)}let v=Math.min(a.shift(),this.splatRenderCount);this.splatSortCount=v,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;const x={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:v,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(x.indexesToSort=this.sortWorkerIndexesToSort,x.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(x.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(E=>{this.sortPromiseResolver=E}),this.preSortPosts.length>0&&(this.preSortPosts.forEach(E=>{this.sortWorker.postMessage(E)}),this.preSortPosts=[]),this.sortWorker.postMessage({sort:x}),a.length===0&&(r.copy(this.camera.position),n.copy(i)),!0}),y}}());le(this,"gatherSceneNodesForSort",function(){const e=[];let t=null;const n=new I,i=new I,r=new I,o=new ue,a=new ue,l=new ue,c=new I,u=new I(0,0,-1),h=new I,d=f=>h.copy(f.max).sub(f.min).length();return function(f=!1){this.getRenderDimensions(c);const p=c.y/2/Math.tan(this.camera.fov/2*qt.DEG2RAD),_=Math.atan(c.x/2/p),m=Math.atan(c.y/2/p),g=Math.cos(_),y=Math.cos(m),v=this.splatMesh.getSplatTree();if(v){a.copy(this.camera.matrixWorld).invert(),a.multiply(this.splatMesh.matrixWorld);let x=0,E=0;for(let A=0;A<v.subTrees.length;A++){const C=v.subTrees[A];o.copy(a),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(A,l),o.multiply(l));const S=C.nodesWithIndexes.length;for(let M=0;M<S;M++){const w=C.nodesWithIndexes[M];if(!w.data||!w.data.indexes||w.data.indexes.length===0)continue;r.copy(w.center).applyMatrix4(o);const L=r.length();r.normalize(),n.copy(r).setX(0).normalize(),i.copy(r).setY(0).normalize();const P=u.dot(i),F=u.dot(n),B=d(w),O=F<y-.6,H=P<g-.6;!f&&(H||O)&&L>B||(E+=w.data.indexes.length,e[x]=w,w.data.distanceToNode=L,x++)}}e.length=x,e.sort((A,C)=>A.data.distanceToNode<C.data.distanceToNode?-1:1);let T=E*$e.BytesPerInt;for(let A=0;A<x;A++){const C=e[A],S=C.data.indexes.length,M=S*$e.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,T-M,S).set(C.data.indexes),T-=M}return{splatRenderCount:E,shouldSortAll:!1}}else{const x=this.splatMesh.getSplatCount();if(!t||t.length!==x){t=new Uint32Array(x);for(let E=0;E<x;E++)t[E]=E}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:x,shouldSortAll:!0}}}}());if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new I().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new I().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new I().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.webXRMode=e.webXRMode||jr.None,this.webXRMode!==jr.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||$u.Always,this.sceneRevealMode=e.sceneRevealMode||_a.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||yo.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,xf()){const n=z_();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=rs.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||$e.DefaultSplatSortDistanceMapPrecision;const t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=an(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortPosts=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new cR,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new I,this.nextCameraTarget=new I,this.mousePosition=new he,this.mouseDownPosition=new he,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new _d(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new iR(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new sR(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new sn(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement.parentElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new x0,this.sceneHelper=new ma(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new he;this.getRenderDimensions(e),this.perspectiveCamera=new gn(DR,e.x/e.y,.1,1e3),this.orthographicCamera=new Fc(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new he;this.getRenderDimensions(e),this.renderer=new v0({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new Ne(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===jr.VR?this.rootElement.appendChild(Uo.createButton(this.renderer,e)):this.webXRMode===jr.AR&&this.rootElement.appendChild(PR.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===jr.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new Ul(this.camera,this.renderer.domElement):this.perspectiveControls=new Ul(this.camera,this.renderer.domElement):(this.perspectiveControls=new Ul(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new Ul(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===jr.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=Yr()}onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){const i=a=>{a.saveState(),a.reset()},r=this.controls,o=e?this.orthographicControls:this.perspectiveControls;i(o),i(r),o.target.copy(r.target),e?Cs.setCameraZoomFromPosition(n,t,r):Cs.setCameraPositionFromZoom(n,t,o),this.controls=o,this.camera.lookAt(this.controls.target)}}adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const n=this.renderer.xr.getCamera().projectionMatrix.elements[0],i=this.camera.projectionMatrix.elements[0];e.x*=i/n}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);const n=t.format!==void 0&&t.format!==null?t.format:rg(e),i=Cs.isProgressivelyLoadable(n)&&t.progressiveLoad,r=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0;let o=null;r&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const a=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},l=(_,m,g)=>{if(r)if(g===Yt.Downloading)if(_==100)this.loadingSpinner.setMessageForTask(o,"Download complete!");else if(i)this.loadingSpinner.setMessageForTask(o,"Downloading splats...");else{const y=m?`: ${m}`:"...";this.loadingSpinner.setMessageForTask(o,`Downloading${y}`)}else g===Yt.Processing&&this.loadingSpinner.setMessageForTask(o,"Processing splats...")};let c=!1,u=0;const h=(_,m)=>{r&&((_&&i||m&&!i)&&(this.loadingSpinner.removeTask(o),!m&&!c&&this.loadingProgressBar.show()),i&&(m?(c=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(u)))},d=(_,m,g)=>{u=_,l(_,m,g),t.onProgress&&t.onProgress(_,m,g)},f=(_,m,g)=>{!i&&t.onProgress&&t.onProgress(0,"0%",Yt.Processing);const y={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([_],[y],g,m&&r,r,i,i).then(()=>{!i&&t.onProgress&&t.onProgress(100,"100%",Yt.Processing),h(m,g)})};return(i?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,f.bind(this),d,a.bind(this))}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,i,r,o){const a=this.downloadSplatSceneToSplatBuffer(e,n,r,!1,void 0,t),l=Wu(a.abortHandler);return a.then(c=>(this.removeSplatSceneDownloadPromise(a),i(c,!0,!0).then(()=>{l.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(c=>{o&&o(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(a);const u=c instanceof jl?c:new Error(`Viewer::addSplatScene -> Could not load file ${e}`);l.reject(u)}),this.addSplatSceneDownloadPromise(a),this.setSplatSceneDownloadAndBuildPromise(l.promise),l.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,i,r,o){let a=0,l=!1;const c=[],u=()=>{if(c.length>0&&!l&&!this.isDisposingOrDisposed()){l=!0;const _=c.shift();i(_.splatBuffer,_.firstBuild,_.finalBuild).then(()=>{l=!1,_.firstBuild?f.resolve():_.finalBuild&&(p.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),c.length>0&&Ei(()=>u())})}},h=(_,m)=>{this.isDisposingOrDisposed()||(m||c.length===0||_.getSplatCount()>c[0].splatBuffer.getSplatCount())&&(c.push({splatBuffer:_,firstBuild:a===0,finalBuild:m}),a++,u())},d=this.downloadSplatSceneToSplatBuffer(e,n,r,!0,h,t),f=Wu(d.abortHandler),p=Wu();return this.addSplatSceneDownloadPromise(d),this.setSplatSceneDownloadAndBuildPromise(p.promise),d.then(()=>{this.removeSplatSceneDownloadPromise(d)}).catch(_=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(d);const m=_ instanceof jl?_:new Error("Viewer::addSplatScene -> Could not load one or more scenes");f.reject(m),o&&o(m)}),f.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const i=e.length,r=[];let o;t&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const a=(h,d,f,p)=>{r[h]=d;let _=0;for(let m=0;m<i;m++)_+=r[m]||0;_=_/i,f=`${_.toFixed(2)}%`,t&&p===Yt.Downloading&&this.loadingSpinner.setMessageForTask(o,_==100?"Download complete!":`Downloading: ${f}`),n&&n(_,f,p)},l=[],c=[];for(let h=0;h<e.length;h++){const d=e[h],f=d.format!==void 0&&d.format!==null?d.format:rg(d.path),p=this.downloadSplatSceneToSplatBuffer(d.path,d.splatAlphaRemovalThreshold,a.bind(this,h),!1,void 0,f);l.push(p),c.push(p.promise)}const u=new Wa((h,d)=>{Promise.all(c).then(f=>{t&&this.loadingSpinner.removeTask(o),n&&n(0,"0%",Yt.Processing),this.addSplatBuffers(f,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",Yt.Processing),this.clearSplatSceneDownloadAndBuildPromise(),h()})}).catch(f=>{t&&this.loadingSpinner.removeTask(o),this.clearSplatSceneDownloadAndBuildPromise();const p=f instanceof jl?f:new Error("Viewer::addSplatScenes -> Could not load one or more splat scenes.");d(p)}).finally(()=>{this.removeSplatSceneDownloadPromise(u)})},h=>{for(let d of l)d.abort(h)});return this.addSplatSceneDownloadPromise(u),this.setSplatSceneDownloadAndBuildPromise(u),u}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,i=!1,r=void 0,o){const a=i?!1:this.optimizeSplatData;try{if(o===ss.Splat)return Pf.loadFromURL(e,n,i,r,t,this.inMemoryCompressionLevel,a);if(o===ss.KSplat)return gd.loadFromURL(e,n,i,r);if(o===ss.Ply)return If.loadFromURL(e,n,i,r,t,this.inMemoryCompressionLevel,a,this.sphericalHarmonicsDegree)}catch(l){throw l instanceof Rf?new Error("File type or server does not support progressive loading."):l}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===ss.Splat||e===ss.KSplat||e===ss.Ply}setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{const n=this.integerBasedSort?Int32Array:Float32Array,i=e.getSplatCount(),r=e.getMaxSplatCount();this.sortWorker=IR(r,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=o=>{if(o.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,o.data.splatRenderCount);else{const a=new Uint32Array(o.data.sortedIndexes.buffer,0,o.data.splatRenderCount);this.splatMesh.updateRenderIndexes(a,o.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=o.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(a=>{a()}),this.runAfterNextSort.length=0)}else if(o.data.sortCanceled)this.sortRunning=!1;else if(o.data.sortSetupPhase1Complete){this.logLevel>=yo.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(o.data.sortedIndexesBuffer,o.data.sortedIndexesOffset,r),this.sortWorkerIndexesToSort=new Uint32Array(o.data.indexesToSortBuffer,o.data.indexesToSortOffset,r),this.sortWorkerPrecomputedDistances=new n(o.data.precomputedDistancesBuffer,o.data.precomputedDistancesOffset,r),this.sortWorkerTransforms=new Float32Array(o.data.transformsBuffer,o.data.transformsOffset,$e.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(r),this.sortWorkerPrecomputedDistances=new n(r),this.sortWorkerTransforms=new Float32Array($e.MaxScenes*16));for(let a=0;a<i;a++)this.sortWorkerIndexesToSort[a]=a;if(this.sortWorker.maxSplatCount=r,this.logLevel>=yo.Info){console.log("Sorting web worker ready.");const a=this.splatMesh.getSplatDataTextures(),l=a.covariances.size,c=a.centerColors.size;console.log("Covariances texture size: "+l.x+" x "+l.y),console.log("Centers/colors texture size: "+c.x+" x "+c.y)}t()}}})}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((i,r)=>{let o;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),o=this.loadingSpinner.addTask("Removing splat scene..."));const a=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(o))},l=u=>{a(),this.splatSceneRemovalPromise=null,u?r(u):i()},c=()=>this.isDisposingOrDisposed()?(l(),!0):!1;n=this.sortPromise||Promise.resolve(),n.then(()=>{if(c())return;const u=[],h=[],d=[];for(let f=0;f<this.splatMesh.scenes.length;f++){let p=!1;for(let _ of e)if(_===f){p=!0;break}if(!p){const _=this.splatMesh.scenes[f];u.push(_.splatBuffer),h.push(this.splatMesh.sceneOptions[f]),d.push({position:_.position.clone(),quaternion:_.quaternion.clone(),scale:_.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=_a.Instant,this.createSplatMesh(),this.addSplatBuffers(u,h,!0,!1,!0).then(()=>{c()||(a(),this.splatMesh.scenes.forEach((f,p)=>{f.position.copy(d[p].position),f.quaternion.copy(d[p].quaternion),f.scale.copy(d[p].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(c()){this.splatRenderReady=!0;return}n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,l()})}))}).catch(f=>{l(f)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){const i=this.splatSceneDownloadPromises[n];t.push(i),e.push(i.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&Cs.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}};le(Cs,"setCameraPositionFromZoom",function(){const e=new I;return function(t,n,i){const r=1/(n.zoom*.001);e.copy(i.target).sub(t.position).normalize().multiplyScalar(r).negate(),t.position.copy(i.target).add(e)}}()),le(Cs,"setCameraZoomFromPosition",function(){const e=new I;return function(t,n,i){const r=e.copy(i.target).sub(n.position).length();t.zoom=1/(r*.001)}}());let xd=Cs;class Sc extends dr{constructor(e={}){super(),e.selfDrivenMode=!1,e.useBuiltInControls=!1,e.rootElement=null,e.ignoreDevicePixelRatio=!1,e.dropInMode=!0,e.camera=void 0,e.renderer=void 0,this.viewer=new xd(e),this.splatMesh=null,this.updateSplatMesh(),this.callbackMesh=Sc.createCallbackMesh(),this.add(this.callbackMesh),this.callbackMesh.onBeforeRender=Sc.onBeforeRender.bind(this,this.viewer),this.viewer.onSplatMeshChanged(()=>{this.updateSplatMesh()})}updateSplatMesh(){this.splatMesh!==this.viewer.splatMesh&&(this.splatMesh&&this.remove(this.splatMesh),this.splatMesh=this.viewer.splatMesh,this.add(this.viewer.splatMesh))}addSplatScene(e,t={}){return t.showLoadingUI!==!1&&(t.showLoadingUI=!0),this.viewer.addSplatScene(e,t)}addSplatScenes(e,t){return t!==!1&&(t=!0),this.viewer.addSplatScenes(e,t)}getSplatScene(e){return this.viewer.getSplatScene(e)}removeSplatScene(e,t=!0){return this.viewer.removeSplatScene(e,t)}removeSplatScenes(e,t=!0){return this.viewer.removeSplatScenes(e,t)}getSceneCount(){return this.viewer.getSceneCount()}setActiveSphericalHarmonicsDegrees(e){this.viewer.setActiveSphericalHarmonicsDegrees(e)}async dispose(){return await this.viewer.dispose()}static onBeforeRender(e,t,n,i){e.update(t,i)}static createCallbackMesh(){const e=new Da(1,8,8),t=new Hs;t.colorWrite=!1,t.depthWrite=!1;const n=new yt(e,t);return n.frustumCulled=!1,n}}function NR(s,e){jn(e,!0),Vi(()=>{const t=new Sc({});t.addSplatScene(e.path,{showLoadingUI:!1,progressiveLoad:!0,rotation:[1,0,0,0],scale:[1,1,1]}),e.scene.add(t)}),Zn()}function kR(s,e){jn(e,!0);const t=Hi(),n=()=>kt(ii,"$camera",t),i=()=>kt(mf,"$collisions",t);let r=sx(e,"canvas",7);const o=new b0;function a(c){o.setFromCamera(c,n()),i().forEach(u=>{o.intersectObject(u.object).length>0&&u.function()})}function l(){r().addEventListener("click",c=>{console.log(c.target.width,window.innerWidth,c),c.button===0&&a(new he(c.clientX/c.target.offsetWidth*2-1,-(c.clientY/c.target.offsetHeight)*2+1))}),r().addEventListener("mousemove",c=>{const u=new he;u.x=c.clientX/c.target.offsetWidth*2-1,u.y=-(c.clientY/c.target.offsetHeight)*2+1,o.setFromCamera(u,n());const h=i().some(d=>o.intersectObject(d.object).length>0);r().style.cursor=h?"pointer":"default"})}Vi(()=>{l()}),Zn()}var zR=pi('<div class="absolute top-0 left-0"> </div>'),HR=pi("<!> <!> <!> <!> <!> <!> <!> <!>",1);function VR(s,e){jn(e,!0);const t=Hi(),n=()=>kt(ii,"$camera",t),i=()=>kt(Ql,"$showFps",t);let r=[],o=0,a=na(0);Vi(()=>{e.renderer.setAnimationLoop(v=>{r.forEach(x=>x.update(v)),c(v),e.renderer.render(e.scene,n())})});function l(v){r.push(v)}function c(v){const x=v-o;o=v,rn(a,1e3/x)}var u=HR(),h=Td(u);Vg(h,i,v=>{var x=zR(),E=bt(x);Jl(()=>nc(E,`FPS: ${et(a)??""}`)),hi(v,x)});var d=Bt(h,2);bw(d,{get canvas(){return e.canvas},registerObject:l});var f=Bt(d,2);jb(f,{});var p=Bt(f,2);u1(p,{get scene(){return e.scene},path:"https://3dscanning.blob.core.windows.net/boundaries/sr2.fbx"});var _=Bt(p,2);NR(_,{get scene(){return e.scene},path:"https://3dscanning.blob.core.windows.net/splats/sallskapsrum.splat"});var m=Bt(_,2);d1(m,{get scene(){return e.scene},registerObject:l});var g=Bt(m,2);p1(g,{get scene(){return e.scene}});var y=Bt(g,2);kR(y,{get canvas(){return e.canvas}}),hi(s,u),Zn()}var GR=pi('<!> <canvas class="svelte-528uny"></canvas>',1);function WR(s,e){jn(e,!0);const t=Hi(),n=()=>kt(ii,"$camera",t);let i=na(null),r=na(null),o=na(null),a=na(!1);Vi(()=>{const f=window.innerWidth,p=window.innerHeight,_=f/p,m=c(_);cs(ii,si(new gn(m,_,.1,100))),ts(ii,Rt(n).position.z=1,Rt(n)),rn(r,si(new x0)),rn(o,si(new v0({antialias:!1,canvas:et(i)}))),et(o).setSize(f,p),et(o).setPixelRatio(Math.min(window.devicePixelRatio,1)),window.addEventListener("resize",l,!1),rn(a,!0)});function l(){const f=window.innerWidth,p=window.innerHeight,_=f/p;ts(ii,Rt(n).aspect=_,Rt(n)),ts(ii,Rt(n).fov=c(_),Rt(n)),n().updateProjectionMatrix(),et(o).setSize(f,p)}function c(f){return 75*(f<1?1.3:1)}var u=GR(),h=Td(u);Vg(h,()=>et(a),f=>{VR(f,{get scene(){return et(r)},get renderer(){return et(o)},camera:ii,get canvas(){return et(i)}})});var d=Bt(h,2);Gg(d,f=>rn(i,f),()=>et(i)),hi(s,u),Zn()}var XR=pi("<main><!></main>");function qR(s){var e=XR(),t=bt(e);WR(t,{}),hi(s,e)}Kv(qR,{target:document.getElementById("app")});
