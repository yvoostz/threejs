var j_=Object.defineProperty;var Z_=(r,e,t)=>e in r?j_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var le=(r,e,t)=>Z_(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const $_=!1;var Mf=Array.isArray,Tf=Array.from,J_=Object.defineProperty,oo=Object.getOwnPropertyDescriptor,pg=Object.getOwnPropertyDescriptors,ev=Object.prototype,tv=Array.prototype,jl=Object.getPrototypeOf;const us=()=>{};function nv(r){return r()}function Ju(r){for(var e=0;e<r.length;e++)r[e]()}const nr=2,mg=4,Xa=8,Ef=16,Si=32,qa=64,ys=128,Zl=256,On=512,Pr=1024,Ya=2048,Ii=4096,Qa=8192,iv=16384,Mc=32768,rv=65536,sv=1<<18,gg=1<<19,ao=Symbol("$state");function _g(r){return r===this.v}function vg(r,e){return r!=r?e==e:r!==e||r!==null&&typeof r=="object"||typeof r=="function"}function Cf(r){return!vg(r,this.v)}function ov(r){throw new Error("effect_in_teardown")}function av(){throw new Error("effect_in_unowned_derived")}function lv(r){throw new Error("effect_orphan")}function cv(){throw new Error("effect_update_depth_exceeded")}function uv(r){throw new Error("props_invalid_value")}function hv(){throw new Error("state_descriptors_fixed")}function fv(){throw new Error("state_prototype_fixed")}function dv(){throw new Error("state_unsafe_local_read")}function pv(){throw new Error("state_unsafe_mutation")}function Pn(r){return{f:0,v:r,reactions:null,equals:_g,version:0}}function ea(r){return xg(Pn(r))}function Tc(r,e=!1){var n;const t=Pn(r);return e||(t.equals=Cf),Dt!==null&&Dt.l!==null&&((n=Dt.l).s??(n.s=[])).push(t),t}function mv(r,e=!1){return xg(Tc(r,e))}function xg(r){return xt!==null&&xt.f&nr&&(Pi===null?Nv([r]):Pi.push(r)),r}function nn(r,e){return xt!==null&&Pf()&&xt.f&(nr|Ef)&&(Pi===null||!Pi.includes(r))&&pv(),yg(r,e)}function yg(r,e){return r.equals(e)||(r.v=e,r.version=Og(),Sg(r,Pr),Pf()&&rt!==null&&rt.f&On&&!(rt.f&Si)&&(pn!==null&&pn.includes(r)?(Ui(rt,Pr),wc(rt)):Tr===null?kv([r]):Tr.push(r))),e}function Sg(r,e){var t=r.reactions;if(t!==null)for(var n=Pf(),i=t.length,s=0;s<i;s++){var o=t[s],a=o.f;a&Pr||!n&&o===rt||(Ui(o,e),a&(On|ys)&&(a&nr?Sg(o,Ya):wc(o)))}}const gv=1,_v=2,vv=16,xv=1,yv=2,Sv=4,Av=8,Mv=16,Tv=1,Ev=2,zn=Symbol();let Cv=!1;function _i(r,e=null,t){if(typeof r!="object"||r===null||ao in r)return r;const n=jl(r);if(n!==ev&&n!==tv)return r;var i=new Map,s=Mf(r),o=Pn(0);s&&i.set("length",Pn(r.length));var a;return new Proxy(r,{defineProperty(l,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&hv();var h=i.get(c);return h===void 0?(h=Pn(u.value),i.set(c,h)):nn(h,_i(u.value,a)),!0},deleteProperty(l,c){var u=i.get(c);if(u===void 0)c in l&&i.set(c,Pn(zn));else{if(s&&typeof c=="string"){var h=i.get("length"),f=Number(c);Number.isInteger(f)&&f<h.v&&nn(h,f)}nn(u,zn),zd(o)}return!0},get(l,c,u){var p;if(c===ao)return r;var h=i.get(c),f=c in l;if(h===void 0&&(!f||(p=oo(l,c))!=null&&p.writable)&&(h=Pn(_i(f?l[c]:zn,a)),i.set(c,h)),h!==void 0){var d=Qe(h);return d===zn?void 0:d}return Reflect.get(l,c,u)},getOwnPropertyDescriptor(l,c){var u=Reflect.getOwnPropertyDescriptor(l,c);if(u&&"value"in u){var h=i.get(c);h&&(u.value=Qe(h))}else if(u===void 0){var f=i.get(c),d=f==null?void 0:f.v;if(f!==void 0&&d!==zn)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return u},has(l,c){var d;if(c===ao)return!0;var u=i.get(c),h=u!==void 0&&u.v!==zn||Reflect.has(l,c);if(u!==void 0||rt!==null&&(!h||(d=oo(l,c))!=null&&d.writable)){u===void 0&&(u=Pn(h?_i(l[c],a):zn),i.set(c,u));var f=Qe(u);if(f===zn)return!1}return h},set(l,c,u,h){var v;var f=i.get(c),d=c in l;if(s&&c==="length")for(var p=u;p<f.v;p+=1){var m=i.get(p+"");m!==void 0?nn(m,zn):p in l&&(m=Pn(zn),i.set(p+"",m))}f===void 0?(!d||(v=oo(l,c))!=null&&v.writable)&&(f=Pn(void 0),nn(f,_i(u,a)),i.set(c,f)):(d=f.v!==zn,nn(f,_i(u,a)));var g=Reflect.getOwnPropertyDescriptor(l,c);if(g!=null&&g.set&&g.set.call(h,u),!d){if(s&&typeof c=="string"){var _=i.get("length"),y=Number(c);Number.isInteger(y)&&y>=_.v&&nn(_,y+1)}zd(o)}return!0},ownKeys(l){Qe(o);var c=Reflect.ownKeys(l).filter(f=>{var d=i.get(f);return d===void 0||d.v!==zn});for(var[u,h]of i)h.v!==zn&&!(u in l)&&c.push(u);return c},setPrototypeOf(){fv()}})}function zd(r,e=1){nn(r,r.v+e)}var Hd,Ag,Mg;function bv(){if(Hd===void 0){Hd=window;var r=Element.prototype,e=Node.prototype;Ag=oo(e,"firstChild").get,Mg=oo(e,"nextSibling").get,r.__click=void 0,r.__className="",r.__attributes=null,r.__styles=null,r.__e=void 0,Text.prototype.__t=void 0}}function Tg(r=""){return document.createTextNode(r)}function $l(r){return Ag.call(r)}function Ec(r){return Mg.call(r)}function ht(r,e){return $l(r)}function xa(r,e){{var t=$l(r);return t instanceof Comment&&t.data===""?Ec(t):t}}function mt(r,e=1,t=!1){let n=r;for(;e--;)n=Ec(n);return n}function wv(r){r.textContent=""}function ya(r){var e=nr|Pr;rt===null?e|=ys:rt.f|=gg;const t={children:null,ctx:Dt,deps:null,equals:_g,f:e,fn:r,reactions:null,v:null,version:0,parent:rt};if(xt!==null&&xt.f&nr){var n=xt;(n.children??(n.children=[])).push(t)}return t}function Rv(r){const e=ya(r);return e.equals=Cf,e}function Eg(r){var e=r.children;if(e!==null){r.children=null;for(var t=0;t<e.length;t+=1){var n=e[t];n.f&nr?bf(n):Or(n)}}}function Cg(r){var e,t=rt;Dr(r.parent);try{Eg(r),e=Ng(r)}finally{Dr(t)}return e}function bg(r){var e=Cg(r),t=(Zs||r.f&ys)&&r.deps!==null?Ya:On;Ui(r,t),r.equals(e)||(r.v=e,r.version=Og())}function bf(r){Eg(r),Sa(r,0),Ui(r,Qa),r.v=r.children=r.deps=r.ctx=r.reactions=null}function wg(r){rt===null&&xt===null&&lv(),xt!==null&&xt.f&ys&&av(),If&&ov()}function Iv(r,e){var t=e.last;t===null?e.last=e.first=r:(t.next=r,r.prev=t,e.last=r)}function Bo(r,e,t,n=!0){var i=(r&qa)!==0,s=rt,o={ctx:Dt,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:r|Pr,first:null,fn:e,last:null,next:null,parent:i?null:s,prev:null,teardown:null,transitions:null,version:0};if(t){var a=lo;try{Vd(!0),bc(o),o.f|=iv}catch(u){throw Or(o),u}finally{Vd(a)}}else e!==null&&wc(o);var l=t&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&gg)===0;if(!l&&!i&&n&&(s!==null&&Iv(o,s),xt!==null&&xt.f&nr)){var c=xt;(c.children??(c.children=[])).push(o)}return o}function Pv(r){const e=Bo(Xa,null,!1);return Ui(e,On),e.teardown=r,e}function eh(r){wg();var e=rt!==null&&(rt.f&Si)!==0&&Dt!==null&&!Dt.m;if(e){var t=Dt;(t.e??(t.e=[])).push({fn:r,effect:rt,reaction:xt})}else{var n=wf(r);return n}}function Dv(r){return wg(),Rg(r)}function Fv(r){const e=Bo(qa,r,!0);return()=>{Or(e)}}function wf(r){return Bo(mg,r,!1)}function Rg(r){return Bo(Xa,r,!0)}function Jl(r){return Cc(r)}function Cc(r,e=0){return Bo(Xa|Ef|e,r,!0)}function vo(r,e=!0){return Bo(Xa|Si,r,!0,e)}function Ig(r){var e=r.teardown;if(e!==null){const t=If,n=xt;Gd(!0),xo(null);try{e.call(null)}finally{Gd(t),xo(n)}}}function Pg(r){var e=r.deriveds;if(e!==null){r.deriveds=null;for(var t=0;t<e.length;t+=1)bf(e[t])}}function Dg(r,e=!1){var t=r.first;for(r.first=r.last=null;t!==null;){var n=t.next;Or(t,e),t=n}}function Lv(r){for(var e=r.first;e!==null;){var t=e.next;e.f&Si||Or(e),e=t}}function Or(r,e=!0){var t=!1;if((e||r.f&sv)&&r.nodes_start!==null){for(var n=r.nodes_start,i=r.nodes_end;n!==null;){var s=n===i?null:Ec(n);n.remove(),n=s}t=!0}Dg(r,e&&!t),Pg(r),Sa(r,0),Ui(r,Qa);var o=r.transitions;if(o!==null)for(const l of o)l.stop();Ig(r);var a=r.parent;a!==null&&a.first!==null&&Fg(r),r.next=r.prev=r.teardown=r.ctx=r.deps=r.parent=r.fn=r.nodes_start=r.nodes_end=null}function Fg(r){var e=r.parent,t=r.prev,n=r.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===r&&(e.first=n),e.last===r&&(e.last=t))}function th(r,e){var t=[];Rf(r,t,!0),Lg(t,()=>{Or(r),e&&e()})}function Lg(r,e){var t=r.length;if(t>0){var n=()=>--t||e();for(var i of r)i.out(n)}else e()}function Rf(r,e,t){if(!(r.f&Ii)){if(r.f^=Ii,r.transitions!==null)for(const o of r.transitions)(o.is_global||t)&&e.push(o);for(var n=r.first;n!==null;){var i=n.next,s=(n.f&Mc)!==0||(n.f&Si)!==0;Rf(n,e,s?t:!1),n=i}}}function ec(r){Bg(r,!0)}function Bg(r,e){if(r.f&Ii){Ka(r)&&bc(r),r.f^=Ii;for(var t=r.first;t!==null;){var n=t.next,i=(t.f&Mc)!==0||(t.f&Si)!==0;Bg(t,i?e:!1),t=n}if(r.transitions!==null)for(const s of r.transitions)(s.is_global||e)&&s.in()}}let nh=!1,ih=[];function Bv(){nh=!1;const r=ih.slice();ih=[],Ju(r)}function Uv(r){nh||(nh=!0,queueMicrotask(Bv)),ih.push(r)}function Ov(r){throw new Error("lifecycle_outside_component")}let tc=!1,lo=!1,If=!1;function Vd(r){lo=r}function Gd(r){If=r}let rh=[],oa=0;let xt=null;function xo(r){xt=r}let rt=null;function Dr(r){rt=r}let Pi=null;function Nv(r){Pi=r}let pn=null,Gn=0,Tr=null;function kv(r){Tr=r}let Ug=0,Zs=!1,Dt=null;function Og(){return++Ug}function Pf(){return Dt!==null&&Dt.l===null}function Ka(r){var o,a;var e=r.f;if(e&Pr)return!0;if(e&Ya){var t=r.deps,n=(e&ys)!==0;if(t!==null){var i;if(e&Zl){for(i=0;i<t.length;i++)((o=t[i]).reactions??(o.reactions=[])).push(r);r.f^=Zl}for(i=0;i<t.length;i++){var s=t[i];if(Ka(s)&&bg(s),n&&rt!==null&&!Zs&&!((a=s==null?void 0:s.reactions)!=null&&a.includes(r))&&(s.reactions??(s.reactions=[])).push(r),s.version>r.version)return!0}}n||Ui(r,On)}return!1}function zv(r,e,t){throw r}function Ng(r){var f;var e=pn,t=Gn,n=Tr,i=xt,s=Zs,o=Pi,a=Dt,l=r.f;pn=null,Gn=0,Tr=null,xt=l&(Si|qa)?null:r,Zs=!lo&&(l&ys)!==0,Pi=null,Dt=r.ctx;try{var c=(0,r.fn)(),u=r.deps;if(pn!==null){var h;if(Sa(r,Gn),u!==null&&Gn>0)for(u.length=Gn+pn.length,h=0;h<pn.length;h++)u[Gn+h]=pn[h];else r.deps=u=pn;if(!Zs)for(h=Gn;h<u.length;h++)((f=u[h]).reactions??(f.reactions=[])).push(r)}else u!==null&&Gn<u.length&&(Sa(r,Gn),u.length=Gn);return c}finally{pn=e,Gn=t,Tr=n,xt=i,Zs=s,Pi=o,Dt=a}}function Hv(r,e){let t=e.reactions;if(t!==null){var n=t.indexOf(r);if(n!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[n]=t[i],t.pop())}}t===null&&e.f&nr&&(pn===null||!pn.includes(e))&&(Ui(e,Ya),e.f&(ys|Zl)||(e.f^=Zl),Sa(e,0))}function Sa(r,e){var t=r.deps;if(t!==null)for(var n=e;n<t.length;n++)Hv(r,t[n])}function bc(r){var e=r.f;if(!(e&Qa)){Ui(r,On);var t=rt;rt=r;try{e&Ef?Lv(r):Dg(r),Pg(r),Ig(r);var n=Ng(r);r.teardown=typeof n=="function"?n:null,r.version=Ug}catch(i){zv(i)}finally{rt=t}}}function Vv(){oa>1e3&&(oa=0,cv()),oa++}function Gv(r){var e=r.length;if(e!==0){Vv();var t=lo;lo=!0;try{for(var n=0;n<e;n++){var i=r[n];i.f&On||(i.f^=On);var s=[];kg(i,s),Wv(s)}}finally{lo=t}}}function Wv(r){var e=r.length;if(e!==0)for(var t=0;t<e;t++){var n=r[t];!(n.f&(Qa|Ii))&&Ka(n)&&(bc(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Fg(n):n.fn=null))}}function Xv(){if(tc=!1,oa>1001)return;const r=rh;rh=[],Gv(r),tc||(oa=0)}function wc(r){tc||(tc=!0,queueMicrotask(Xv));for(var e=r;e.parent!==null;){e=e.parent;var t=e.f;if(t&(qa|Si)){if(!(t&On))return;e.f^=On}}rh.push(e)}function kg(r,e){var t=r.first,n=[];e:for(;t!==null;){var i=t.f,s=(i&Si)!==0,o=s&&(i&On)!==0;if(!o&&!(i&Ii))if(i&Xa){s?t.f^=On:Ka(t)&&bc(t);var a=t.first;if(a!==null){t=a;continue}}else i&mg&&n.push(t);var l=t.next;if(l===null){let h=t.parent;for(;h!==null;){if(r===h)break e;var c=h.next;if(c!==null){t=c;continue e}h=h.parent}}t=l}for(var u=0;u<n.length;u++)a=n[u],e.push(a),kg(a,e)}function Qe(r){var a;var e=r.f,t=(e&nr)!==0;if(t&&e&Qa){var n=Cg(r);return bf(r),n}if(xt!==null){Pi!==null&&Pi.includes(r)&&dv();var i=xt.deps;pn===null&&i!==null&&i[Gn]===r?Gn++:pn===null?pn=[r]:pn.push(r),Tr!==null&&rt!==null&&rt.f&On&&!(rt.f&Si)&&Tr.includes(r)&&(Ui(rt,Pr),wc(rt))}else if(t&&r.deps===null){var s=r,o=s.parent;o!==null&&!((a=o.deriveds)!=null&&a.includes(s))&&(o.deriveds??(o.deriveds=[])).push(s)}return t&&(s=r,Ka(s)&&bg(s)),r.v}function zt(r){const e=xt;try{return xt=null,r()}finally{xt=e}}const qv=~(Pr|Ya|On);function Ui(r,e){r.f=r.f&qv|e}function wn(r,e=!1,t){Dt={p:Dt,c:null,e:null,m:!1,s:r,x:null,l:null},e||(Dt.l={s:null,u:null,r1:[],r2:Pn(!1)})}function Rn(r){const e=Dt;if(e!==null){const o=e.e;if(o!==null){var t=rt,n=xt;e.e=null;try{for(var i=0;i<o.length;i++){var s=o[i];Dr(s.effect),xo(s.reaction),wf(s.fn)}}finally{Dr(t),xo(n)}}Dt=e.p,e.m=!0}return{}}function Yv(r){if(!(typeof r!="object"||!r||r instanceof EventTarget)){if(ao in r)sh(r);else if(!Array.isArray(r))for(let e in r){const t=r[e];typeof t=="object"&&t&&ao in t&&sh(t)}}}function sh(r,e=new Set){if(typeof r=="object"&&r!==null&&!(r instanceof EventTarget)&&!e.has(r)){e.add(r),r instanceof Date&&r.getTime();for(let n in r)try{sh(r[n],e)}catch{}const t=jl(r);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=pg(t);for(let i in n){const s=n[i].get;if(s)try{s.call(r)}catch{}}}}}const zg=new Set,oh=new Set;function Qv(r){for(var e=0;e<r.length;e++)zg.add(r[e]);for(var t of oh)t(r)}function tl(r){var y;var e=this,t=e.ownerDocument,n=r.type,i=((y=r.composedPath)==null?void 0:y.call(r))||[],s=i[0]||r.target,o=0,a=r.__root;if(a){var l=i.indexOf(a);if(l!==-1&&(e===document||e===window)){r.__root=e;return}var c=i.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(s=i[o]||r.target,s!==e){J_(r,"currentTarget",{configurable:!0,get(){return s||t}});var u=xt,h=rt;xo(null),Dr(null);try{for(var f,d=[];s!==null;){var p=s.assignedSlot||s.parentNode||s.host||null;try{var m=s["__"+n];if(m!==void 0&&!s.disabled)if(Mf(m)){var[g,..._]=m;g.apply(s,[r,..._])}else m.call(s,r)}catch(v){f?d.push(v):f=v}if(r.cancelBubble||p===e||p===null)break;s=p}if(f){for(let v of d)queueMicrotask(()=>{throw v});throw f}}finally{r.__root=e,delete r.currentTarget,xo(u),Dr(h)}}}function Kv(r){var e=document.createElement("template");return e.innerHTML=r,e.content}function Wd(r,e){var t=rt;t.nodes_start===null&&(t.nodes_start=r,t.nodes_end=e)}function Mn(r,e){var t=(e&Tv)!==0,n=(e&Ev)!==0,i,s=!r.startsWith("<!>");return()=>{i===void 0&&(i=Kv(s?r:"<!>"+r),t||(i=$l(i)));var o=n?document.importNode(i,!0):i.cloneNode(!0);if(t){var a=$l(o),l=o.lastChild;Wd(a,l)}else Wd(o,o);return o}}function mn(r,e){r!==null&&r.before(e)}const jv=["touchstart","touchmove"];function Zv(r){return jv.includes(r)}function nc(r,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=t,r.nodeValue=t==null?"":t+"")}function $v(r,e){return Jv(r,e)}const Ts=new Map;function Jv(r,{target:e,anchor:t,props:n={},events:i,context:s,intro:o=!0}){bv();var a=new Set,l=h=>{for(var f=0;f<h.length;f++){var d=h[f];if(!a.has(d)){a.add(d);var p=Zv(d);e.addEventListener(d,tl,{passive:p});var m=Ts.get(d);m===void 0?(document.addEventListener(d,tl,{passive:p}),Ts.set(d,1)):Ts.set(d,m+1)}}};l(Tf(zg)),oh.add(l);var c=void 0,u=Fv(()=>{var h=t??e.appendChild(Tg());return vo(()=>{if(s){wn({});var f=Dt;f.c=s}i&&(n.$$events=i),c=r(h,n)||{},s&&Rn()}),()=>{var p;for(var f of a){e.removeEventListener(f,tl);var d=Ts.get(f);--d===0?(document.removeEventListener(f,tl),Ts.delete(f)):Ts.set(f,d)}oh.delete(l),Xd.delete(c),h!==t&&((p=h.parentNode)==null||p.removeChild(h))}});return Xd.set(c,u),c}let Xd=new WeakMap;function Hg(r,e,t,n=null,i=!1){var s=r,o=null,a=null,l=null,c=i?Mc:0;Cc(()=>{l!==(l=!!e())&&(l?(o?ec(o):o=vo(()=>t(s)),a&&th(a,()=>{a=null})):(a?ec(a):n&&(a=vo(()=>n(s))),o&&th(o,()=>{o=null})))},c)}let Xc=null;function ex(r,e){return e}function tx(r,e,t,n){for(var i=[],s=e.length,o=0;o<s;o++)Rf(e[o].e,i,!0);var a=s>0&&i.length===0&&t!==null;if(a){var l=t.parentNode;wv(l),l.append(t),n.clear(),gr(r,e[0].prev,e[s-1].next)}Lg(i,()=>{for(var c=0;c<s;c++){var u=e[c];a||(n.delete(u.k),gr(r,u.prev,u.next)),Or(u.e,!a)}})}function nx(r,e,t,n,i,s=null){var o=r,a={flags:e,items:new Map,first:null};{var l=r;o=l.appendChild(Tg())}var c=null,u=!1;Cc(()=>{var h=t(),f=Mf(h)?h:h==null?[]:Tf(h),d=f.length;if(!(u&&d===0)){u=d===0;{var p=xt;ix(f,a,o,i,e,(p.f&Ii)!==0,n)}s!==null&&(d===0?c?ec(c):c=vo(()=>s(o)):c!==null&&th(c,()=>{c=null}))}})}function ix(r,e,t,n,i,s,o){var a=r.length,l=e.items,c=e.first,u=c,h,f=null,d=[],p=[],m,g,_,y;for(y=0;y<a;y+=1){if(m=r[y],g=o(m,y),_=l.get(g),_===void 0){var v=u?u.e.nodes_start:t;f=sx(v,e,f,f===null?e.first:f.next,m,g,y,n,i),l.set(g,f),d=[],p=[],u=f.next;continue}if(rx(_,m,y),_.e.f&Ii&&ec(_.e),_!==u){if(h!==void 0&&h.has(_)){if(d.length<p.length){var x=p[0],T;f=x.prev;var E=d[0],S=d[d.length-1];for(T=0;T<d.length;T+=1)qd(d[T],x,t);for(T=0;T<p.length;T+=1)h.delete(p[T]);gr(e,E.prev,S.next),gr(e,f,E),gr(e,S,x),u=x,f=S,y-=1,d=[],p=[]}else h.delete(_),qd(_,u,t),gr(e,_.prev,_.next),gr(e,_,f===null?e.first:f.next),gr(e,f,_),f=_;continue}for(d=[],p=[];u!==null&&u.k!==g;)(s||!(u.e.f&Ii))&&(h??(h=new Set)).add(u),p.push(u),u=u.next;if(u===null)continue;_=u}d.push(_),f=_,u=_.next}if(u!==null||h!==void 0){for(var C=h===void 0?[]:Tf(h);u!==null;)(s||!(u.e.f&Ii))&&C.push(u),u=u.next;var A=C.length;if(A>0){var M=a===0?t:null;tx(e,C,M,l)}}rt.first=e.first&&e.first.e,rt.last=f&&f.e}function rx(r,e,t,n){yg(r.v,e),r.i=t}function sx(r,e,t,n,i,s,o,a,l){var c=Xc;try{var u=(l&gv)!==0,h=(l&vv)===0,f=u?h?Tc(i):Pn(i):i,d=l&_v?Pn(o):o,p={i:d,v:f,k:s,a:null,e:null,prev:t,next:n};return Xc=p,p.e=vo(()=>a(r,f,d),Cv),p.e.prev=t&&t.e,p.e.next=n&&n.e,t===null?e.first=p:(t.next=p,t.e.next=p.e),n!==null&&(n.prev=p,n.e.prev=p.e),p}finally{Xc=c}}function qd(r,e,t){for(var n=r.next?r.next.e.nodes_start:t,i=e?e.e.nodes_start:t,s=r.e.nodes_start;s!==n;){var o=Ec(s);i.before(s),s=o}}function gr(r,e,t){e===null?r.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function ox(r,e,...t){var n=r,i=us,s;Cc(()=>{i!==(i=e())&&(s&&(Or(s),s=null),s=vo(()=>i(n,...t)))},Mc)}function ax(r,e,t,n){var i=r.__attributes??(r.__attributes={});i[e]!==(i[e]=t)&&(t==null?r.removeAttribute(e):typeof t!="string"&&lx(r).includes(e)?r[e]=t:r.setAttribute(e,t))}var Yd=new Map;function lx(r){var e=Yd.get(r.nodeName);if(e)return e;Yd.set(r.nodeName,e=[]);for(var t,n=jl(r),i=Element.prototype;i!==n;){t=pg(n);for(var s in t)t[s].set&&e.push(s);n=jl(n)}return e}function Qd(r,e){return r===e||(r==null?void 0:r[ao])===e}function Vg(r={},e,t,n){return wf(()=>{var i,s;return Rg(()=>{i=s,s=[],zt(()=>{r!==t(...s)&&(e(r,...s),i&&Qd(t(...i),r)&&e(null,...i))})}),()=>{Uv(()=>{s&&Qd(t(...s),r)&&e(null,...s)})}}),r}function Gg(r=!1){const e=Dt,t=e.l.u;if(!t)return;let n=()=>Yv(e.s);if(r){let i=0,s={};const o=ya(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],a=!0);return a&&i++,i});n=()=>Qe(o)}t.b.length&&Dv(()=>{Kd(e,n),Ju(t.b)}),eh(()=>{const i=zt(()=>t.m.map(nv));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&eh(()=>{Kd(e,n),Ju(t.a)})}function Kd(r,e){if(r.l.s)for(const t of r.l.s)Qe(t);e()}function Wg(r){var e=Pn(0);return function(){return arguments.length===1?(nn(e,Qe(e)+1),arguments[0]):(Qe(e),r())}}function cx(r,e,t){if(r==null)return e(void 0),us;const n=zt(()=>r.subscribe(e,t));return n.unsubscribe?()=>n.unsubscribe():n}let nl=!1;function an(r,e,t){const n=t[e]??(t[e]={store:null,source:Tc(void 0),unsubscribe:us});if(n.store!==r)if(n.unsubscribe(),n.store=r??null,r==null)n.source.v=void 0,n.unsubscribe=us;else{var i=!0;n.unsubscribe=cx(r,s=>{i?n.source.v=s:nn(n.source,s)}),i=!1}return Qe(n.source)}function rs(r,e){return r.set(e),e}function Ai(){const r={};return Pv(()=>{for(var e in r)r[e].unsubscribe()}),r}function ss(r,e,t){return r.set(t),e}function ux(r){var e=nl;try{return nl=!1,[r(),nl]}finally{nl=e}}function jd(r){for(var e=rt,t=rt;e!==null&&!(e.f&(Si|qa));)e=e.parent;try{return Dr(e),r()}finally{Dr(t)}}function ta(r,e,t,n){var E;var i=(t&xv)!==0,s=(t&yv)!==0,o=(t&Av)!==0,a=(t&Mv)!==0,l=!1,c;o?[c,l]=ux(()=>r[e]):c=r[e];var u=(E=oo(r,e))==null?void 0:E.set,h=n,f=!0,d=!1,p=()=>(d=!0,f&&(f=!1,a?h=zt(n):h=n),h);c===void 0&&n!==void 0&&(u&&s&&uv(),c=p(),u&&u(c));var m;if(s)m=()=>{var S=r[e];return S===void 0?p():(f=!0,d=!1,S)};else{var g=jd(()=>(i?ya:Rv)(()=>r[e]));g.f|=rv,m=()=>{var S=Qe(g);return S!==void 0&&(h=void 0),S===void 0?h:S}}if(!(t&Sv))return m;if(u){var _=r.$$legacy;return function(S,C){return arguments.length>0?((!s||!C||_||l)&&u(C?m():S),S):m()}}var y=!1,v=!1,x=Tc(c),T=jd(()=>ya(()=>{var S=m(),C=Qe(x);return y?(y=!1,v=!0,C):(v=!1,x.v=S)}));return i||(T.equals=Cf),function(S,C){if(arguments.length>0){const A=C?Qe(T):s&&o?_i(S):S;return T.equals(A)||(y=!0,nn(x,A),d&&h!==void 0&&(h=A),zt(()=>Qe(T))),S}return Qe(T)}}function ci(r){Dt===null&&Ov(),Dt.l!==null?hx(Dt).m.push(r):eh(()=>{const e=zt(r);if(typeof e=="function")return e})}function hx(r){var e=r.l;return e.u??(e.u={a:[],b:[],m:[]})}const fx="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fx);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Df="170",Es={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dx=0,Zd=1,px=2,Xg=1,mx=2,qi=3,Fi=0,Dn=1,ti=2,Er=0,Cr=1,$d=2,Jd=3,ep=4,qg=5,Jr=100,gx=101,_x=102,vx=103,xx=104,yx=200,Sx=201,Ax=202,Mx=203,Aa=204,Ma=205,Tx=206,Ex=207,Cx=208,bx=209,wx=210,Rx=211,Ix=212,Px=213,Dx=214,ah=0,lh=1,ch=2,yo=3,uh=4,hh=5,fh=6,dh=7,Rc=0,Fx=1,Lx=2,br=0,Bx=1,Ux=2,Ox=3,Nx=4,kx=5,zx=6,Hx=7,tp="attached",Vx="detached",Yg=300,So=301,Ao=302,ic=303,ph=304,Ic=306,Ta=1e3,Ji=1001,mh=1002,Qn=1003,Gx=1004,il=1005,bi=1006,qc=1007,os=1008,Li=1009,Qg=1010,Kg=1011,Ea=1012,Ff=1013,ii=1014,ri=1015,Uo=1016,Lf=1017,Bf=1018,Mo=1020,jg=35902,Zg=1021,$g=1022,xn=1023,Jg=1024,e0=1025,hs=1026,To=1027,t0=1028,Pc=1029,Uf=1030,Of=1031,co=1033,kl=33776,zl=33777,Hl=33778,Vl=33779,gh=35840,_h=35841,vh=35842,xh=35843,yh=36196,Sh=37492,Ah=37496,Mh=37808,Th=37809,Eh=37810,Ch=37811,bh=37812,wh=37813,Rh=37814,Ih=37815,Ph=37816,Dh=37817,Fh=37818,Lh=37819,Bh=37820,Uh=37821,Gl=36492,Oh=36494,Nh=36495,n0=36283,kh=36284,zh=36285,Hh=36286,rc=2300,Vh=2301,Yc=2302,np=2400,ip=2401,rp=2402,Wx=2500,Xx=3200,qx=3201,Dc=0,Yx=1,yr="",Et="srgb",Oo="srgb-linear",Fc="linear",gt="srgb",bs=7680,sp=519,Qx=512,Kx=513,jx=514,i0=515,Zx=516,$x=517,Jx=518,ey=519,op=35044,ty=35048,ap="300 es",er=2e3,sc=2001;class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lp=1234567;const aa=Math.PI/180,Eo=180/Math.PI;function Nr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function Xt(r,e,t){return Math.max(e,Math.min(t,r))}function Nf(r,e){return(r%e+e)%e}function ny(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function iy(r,e,t){return r!==e?(t-r)/(e-r):0}function la(r,e,t){return(1-t)*r+t*e}function ry(r,e,t,n){return la(r,e,1-Math.exp(-t*n))}function sy(r,e=1){return e-Math.abs(Nf(r,e*2)-e)}function oy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ay(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ly(r,e){return r+Math.floor(Math.random()*(e-r+1))}function cy(r,e){return r+Math.random()*(e-r)}function uy(r){return r*(.5-Math.random())}function hy(r){r!==void 0&&(lp=r);let e=lp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fy(r){return r*aa}function dy(r){return r*Eo}function py(r){return(r&r-1)===0&&r!==0}function my(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function gy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function _y(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ks(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const jt={DEG2RAD:aa,RAD2DEG:Eo,generateUUID:Nr,clamp:Xt,euclideanModulo:Nf,mapLinear:ny,inverseLerp:iy,lerp:la,damp:ry,pingpong:sy,smoothstep:oy,smootherstep:ay,randInt:ly,randFloat:cy,randFloatSpread:uy,seededRandom:hy,degToRad:fy,radToDeg:dy,isPowerOfTwo:py,ceilPowerOfTwo:my,floorPowerOfTwo:gy,setQuaternionFromProperEuler:_y,normalize:Tn,denormalize:Ks};class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],m=i[0],g=i[3],_=i[6],y=i[1],v=i[4],x=i[7],T=i[2],E=i[5],S=i[8];return s[0]=o*m+a*y+l*T,s[3]=o*g+a*v+l*E,s[6]=o*_+a*x+l*S,s[1]=c*m+u*y+h*T,s[4]=c*g+u*v+h*E,s[7]=c*_+u*x+h*S,s[2]=f*m+d*y+p*T,s[5]=f*g+d*v+p*E,s[8]=f*_+d*x+p*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,p=t*h+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return e[0]=h*m,e[1]=(i*c-u*n)*m,e[2]=(a*n-i*o)*m,e[3]=f*m,e[4]=(u*t-i*l)*m,e[5]=(i*s-a*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qc.makeScale(e,t)),this}rotate(e){return this.premultiply(Qc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qc=new ke;function r0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ca(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function vy(){const r=Ca("canvas");return r.style.display="block",r}const cp={};function na(r){r in cp||(cp[r]=!0,console.warn(r))}function xy(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function yy(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Sy(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:Oo,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===gt&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===gt&&(r.r=uo(r.r),r.g=uo(r.g),r.b=uo(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yr?Fc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function uo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const up=[.64,.33,.3,.6,.15,.06],hp=[.2126,.7152,.0722],fp=[.3127,.329],dp=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pp=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[Oo]:{primaries:up,whitePoint:fp,transfer:Fc,toXYZ:dp,fromXYZ:pp,luminanceCoefficients:hp,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:up,whitePoint:fp,transfer:gt,toXYZ:dp,fromXYZ:pp,luminanceCoefficients:hp,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}});let ws;class Ay{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ws===void 0&&(ws=Ca("canvas")),ws.width=e.width,ws.height=e.height;const n=ws.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ca("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=tr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(tr(t[n]/255)*255):t[n]=tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let My=0;class s0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Nr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Kc(i[o].image)):s.push(Kc(i[o]))}else s=Kc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Kc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ay.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ty=0;class on extends Ss{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=Ji,i=Ji,s=bi,o=os,a=xn,l=Li,c=on.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Nr(),this.name="",this.source=new s0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ta:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ta:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Yg;on.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],m=l[2],g=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(d+1)/2,T=(_+1)/2,E=(u+f)/4,S=(h+m)/4,C=(p+g)/4;return v>x&&v>T?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=E/n,s=S/n):x>T?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=C/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=S/s,i=C/s),this.set(n,i,s,t),this}let y=Math.sqrt((g-p)*(g-p)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(h-m)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ey extends Ss{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new on(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new s0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends Ey{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class o0 extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cy extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class at{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],p=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=m;return}if(h!==m||l!==f||c!==d||u!==p){let g=1-a;const _=l*f+c*d+u*p+h*m,y=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const T=Math.sqrt(v),E=Math.atan2(T,_*y);g=Math.sin(g*E)/T,a=Math.sin(a*E)/T}const x=a*y;if(l=l*g+f*x,c=c*g+d*x,u=u*g+p*x,h=h*g+m*x,g===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return e[t]=a*p+u*h+l*d-c*f,e[t+1]=l*p+u*f+c*h-a*d,e[t+2]=c*p+u*d+a*f-l*h,e[t+3]=u*p-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jc=new I,mp=new at;class xi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fi):fi.fromBufferAttribute(s,o),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rl.copy(n.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),sl.subVectors(this.max,Xo),Rs.subVectors(e.a,Xo),Is.subVectors(e.b,Xo),Ps.subVectors(e.c,Xo),lr.subVectors(Is,Rs),cr.subVectors(Ps,Is),Gr.subVectors(Rs,Ps);let t=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Gr.z,Gr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Gr.z,0,-Gr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Gr.y,Gr.x,0];return!Zc(t,Rs,Is,Ps,sl)||(t=[1,0,0,0,1,0,0,0,1],!Zc(t,Rs,Is,Ps,sl))?!1:(ol.crossVectors(lr,cr),t=[ol.x,ol.y,ol.z],Zc(t,Rs,Is,Ps,sl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zi=[new I,new I,new I,new I,new I,new I,new I,new I],fi=new I,rl=new xi,Rs=new I,Is=new I,Ps=new I,lr=new I,cr=new I,Gr=new I,Xo=new I,sl=new I,ol=new I,Wr=new I;function Zc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Wr.fromArray(r,s);const a=i.x*Math.abs(Wr.x)+i.y*Math.abs(Wr.y)+i.z*Math.abs(Wr.z),l=e.dot(Wr),c=t.dot(Wr),u=n.dot(Wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const by=new xi,qo=new I,$c=new I;class No{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):by.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const t=qo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(qo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add($c)),this.expandByPoint(qo.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new I,Jc=new I,al=new I,ur=new I,eu=new I,ll=new I,tu=new I;let ja=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Jc.copy(e).add(t).multiplyScalar(.5),al.copy(t).sub(e).normalize(),ur.copy(this.origin).sub(Jc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(al),a=ur.dot(this.direction),l=-ur.dot(al),c=ur.lengthSq(),u=Math.abs(1-o*o);let h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=s*u,h>=0)if(f>=-p)if(f<=p){const m=1/u;h*=m,f*=m,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Jc).addScaledVector(al,f),d}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const n=Hi.dot(this.direction),i=Hi.dot(Hi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,i,s){eu.subVectors(t,e),ll.subVectors(n,e),tu.crossVectors(eu,ll);let o=this.direction.dot(tu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ur.subVectors(this.origin,e);const l=a*this.direction.dot(ll.crossVectors(ur,ll));if(l<0)return null;const c=a*this.direction.dot(eu.cross(ur));if(c<0||l+c>o)return null;const u=-a*ur.dot(tu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ue{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,p,m,g){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,p,m,g)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,p,m,g){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=p,_[11]=m,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ds.setFromMatrixColumn(e,0).length(),s=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,p=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+p*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,p=c*u,m=c*h;t[0]=f+m*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,p=c*u,m=c*h;t[0]=f-m*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,p=a*u,m=a*h;t[0]=l*u,t[4]=p*c-d,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,p=a*l,m=a*c;t[0]=l*u,t[4]=m-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+p,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*l,d=o*c,p=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wy,e,Ry)}lookAt(e,t,n){const i=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),hr.crossVectors(n,Hn),hr.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),hr.crossVectors(n,Hn)),hr.normalize(),cl.crossVectors(Hn,hr),i[0]=hr.x,i[4]=cl.x,i[8]=Hn.x,i[1]=hr.y,i[5]=cl.y,i[9]=Hn.y,i[2]=hr.z,i[6]=cl.z,i[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],m=n[6],g=n[10],_=n[14],y=n[3],v=n[7],x=n[11],T=n[15],E=i[0],S=i[4],C=i[8],A=i[12],M=i[1],w=i[5],F=i[9],P=i[13],L=i[2],B=i[6],O=i[10],H=i[14],k=i[3],j=i[7],ne=i[11],oe=i[15];return s[0]=o*E+a*M+l*L+c*k,s[4]=o*S+a*w+l*B+c*j,s[8]=o*C+a*F+l*O+c*ne,s[12]=o*A+a*P+l*H+c*oe,s[1]=u*E+h*M+f*L+d*k,s[5]=u*S+h*w+f*B+d*j,s[9]=u*C+h*F+f*O+d*ne,s[13]=u*A+h*P+f*H+d*oe,s[2]=p*E+m*M+g*L+_*k,s[6]=p*S+m*w+g*B+_*j,s[10]=p*C+m*F+g*O+_*ne,s[14]=p*A+m*P+g*H+_*oe,s[3]=y*E+v*M+x*L+T*k,s[7]=y*S+v*w+x*B+T*j,s[11]=y*C+v*F+x*O+T*ne,s[15]=y*A+v*P+x*H+T*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],m=e[7],g=e[11],_=e[15];return p*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+m*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+g*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+_*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],m=e[13],g=e[14],_=e[15],y=h*g*c-m*f*c+m*l*d-a*g*d-h*l*_+a*f*_,v=p*f*c-u*g*c-p*l*d+o*g*d+u*l*_-o*f*_,x=u*m*c-p*h*c+p*a*d-o*m*d-u*a*_+o*h*_,T=p*h*l-u*m*l-p*a*f+o*m*f+u*a*g-o*h*g,E=t*y+n*v+i*x+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/E;return e[0]=y*S,e[1]=(m*f*s-h*g*s-m*i*d+n*g*d+h*i*_-n*f*_)*S,e[2]=(a*g*s-m*l*s+m*i*c-n*g*c-a*i*_+n*l*_)*S,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*S,e[4]=v*S,e[5]=(u*g*s-p*f*s+p*i*d-t*g*d-u*i*_+t*f*_)*S,e[6]=(p*l*s-o*g*s-p*i*c+t*g*c+o*i*_-t*l*_)*S,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*S,e[8]=x*S,e[9]=(p*h*s-u*m*s-p*n*d+t*m*d+u*n*_-t*h*_)*S,e[10]=(o*m*s-p*a*s+p*n*c-t*m*c-o*n*_+t*a*_)*S,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*S,e[12]=T*S,e[13]=(u*m*i-p*h*i+p*n*f-t*m*f-u*n*g+t*h*g)*S,e[14]=(p*a*i-o*m*i-p*n*l+t*m*l+o*n*g-t*a*g)*S,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,p=s*h,m=o*u,g=o*h,_=a*h,y=l*c,v=l*u,x=l*h,T=n.x,E=n.y,S=n.z;return i[0]=(1-(m+_))*T,i[1]=(d+x)*T,i[2]=(p-v)*T,i[3]=0,i[4]=(d-x)*E,i[5]=(1-(f+_))*E,i[6]=(g+y)*E,i[7]=0,i[8]=(p+v)*S,i[9]=(g-y)*S,i[10]=(1-(f+m))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ds.set(i[0],i[1],i[2]).length();const o=Ds.set(i[4],i[5],i[6]).length(),a=Ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],di.copy(this);const c=1/s,u=1/o,h=1/a;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=h,di.elements[9]*=h,di.elements[10]*=h,t.setFromRotationMatrix(di),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=er){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,p;if(a===er)d=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===sc)d=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=er){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let p,m;if(a===er)p=(o+s)*h,m=-2*h;else if(a===sc)p=s*h,m=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=m,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ds=new I,di=new ue,wy=new I(0,0,0),Ry=new I(1,1,1),hr=new I,cl=new I,Hn=new I,gp=new ue,_p=new at;class Zt{constructor(e=0,t=0,n=0,i=Zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _p.setFromEuler(this),this.setFromQuaternion(_p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zt.DEFAULT_ORDER="XYZ";class kf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Iy=0;const vp=new I,Fs=new at,Vi=new ue,ul=new I,Yo=new I,Py=new I,Dy=new at,xp=new I(1,0,0),yp=new I(0,1,0),Sp=new I(0,0,1),Ap={type:"added"},Fy={type:"removed"},Ls={type:"childadded",child:null},nu={type:"childremoved",child:null};class ft extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new I,t=new Zt,n=new at,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new ke}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(xp,e)}rotateY(e){return this.rotateOnAxis(yp,e)}rotateZ(e){return this.rotateOnAxis(Sp,e)}translateOnAxis(e,t){return vp.copy(e).applyQuaternion(this.quaternion),this.position.add(vp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xp,e)}translateY(e){return this.translateOnAxis(yp,e)}translateZ(e){return this.translateOnAxis(Sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ul.copy(e):ul.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Yo,ul,this.up):Vi.lookAt(ul,Yo,this.up),this.quaternion.setFromRotationMatrix(Vi),i&&(Vi.extractRotation(i.matrixWorld),Fs.setFromRotationMatrix(Vi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ap),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fy),nu.child=e,this.dispatchEvent(nu),nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ap),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,Py),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,Dy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new I(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new I,Gi=new I,iu=new I,Wi=new I,Bs=new I,Us=new I,Mp=new I,ru=new I,su=new I,ou=new I,au=new $e,lu=new $e,cu=new $e;class vi{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pi.subVectors(e,t),i.cross(pi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){pi.subVectors(i,t),Gi.subVectors(n,t),iu.subVectors(e,t);const o=pi.dot(pi),a=pi.dot(Gi),l=pi.dot(iu),c=Gi.dot(Gi),u=Gi.dot(iu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wi.x),l.addScaledVector(o,Wi.y),l.addScaledVector(a,Wi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return au.setScalar(0),lu.setScalar(0),cu.setScalar(0),au.fromBufferAttribute(e,t),lu.fromBufferAttribute(e,n),cu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(au,s.x),o.addScaledVector(lu,s.y),o.addScaledVector(cu,s.z),o}static isFrontFacing(e,t,n,i){return pi.subVectors(n,t),Gi.subVectors(e,t),pi.cross(Gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),pi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return vi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Bs.subVectors(i,n),Us.subVectors(s,n),ru.subVectors(e,n);const l=Bs.dot(ru),c=Us.dot(ru);if(l<=0&&c<=0)return t.copy(n);su.subVectors(e,i);const u=Bs.dot(su),h=Us.dot(su);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Bs,o);ou.subVectors(e,s);const d=Bs.dot(ou),p=Us.dot(ou);if(p>=0&&d<=p)return t.copy(s);const m=d*c-l*p;if(m<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Us,a);const g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return Mp.subVectors(s,i),a=(h-u)/(h-u+(d-p)),t.copy(i).addScaledVector(Mp,a);const _=1/(g+m+f);return o=m*_,a=f*_,t.copy(n).addScaledVector(Bs,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const a0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},hl={h:0,s:0,l:0};function uu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Nf(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=uu(o,s,e+1/3),this.g=uu(o,s,e),this.b=uu(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=Et){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=a0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Ke.fromWorkingColorSpace(un.copy(this),e),Math.round(Xt(un.r*255,0,255))*65536+Math.round(Xt(un.g*255,0,255))*256+Math.round(Xt(un.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(un.copy(this),t);const n=un.r,i=un.g,s=un.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Et){Ke.fromWorkingColorSpace(un.copy(this),e);const t=un.r,n=un.g,i=un.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+t,fr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fr),e.getHSL(hl);const n=la(fr.h,hl.h,t),i=la(fr.s,hl.s,t),s=la(fr.l,hl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new ze;ze.NAMES=a0;let Ly=0;class kr extends Ss{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=Nr(),this.name="",this.blending=Cr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=Ma,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==Fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Aa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ma&&(n.blendDst=this.blendDst),this.blendEquation!==Jr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lr extends kr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $i=By();function By(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Uy(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Xt(r,-65504,65504),$i.floatView[0]=r;const e=$i.uint32View[0],t=e>>23&511;return $i.baseTable[t]+((e&8388607)>>$i.shiftTable[t])}function Oy(r){const e=r>>10;return $i.uint32View[0]=$i.mantissaTable[$i.offsetTable[e]+(r&1023)]+$i.exponentTable[e],$i.floatView[0]}const ba={toHalfFloat:Uy,fromHalfFloat:Oy},kt=new I,fl=new ve;class ai{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=op,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fl.fromBufferAttribute(this,t),fl.applyMatrix3(e),this.setXY(t,fl.x,fl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ks(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array),i=Tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array),i=Tn(i,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==op&&(e.usage=this.usage),e}}class zf extends ai{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class l0 extends ai{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vt extends ai{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ny=0;const Jn=new ue,hu=new ft,Os=new I,Vn=new xi,Qo=new xi,Kt=new I;class yn extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r0(e)?l0:zf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return hu.lookAt(e),hu.updateMatrix(),this.applyMatrix4(hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new No);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qo.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(Vn.min,Qo.min),Vn.expandByPoint(Kt),Kt.addVectors(Vn.max,Qo.max),Vn.expandByPoint(Kt)):(Vn.expandByPoint(Qo.min),Vn.expandByPoint(Qo.max))}Vn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Kt.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(e,c),Kt.add(Os)),i=Math.max(i,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new I,l[C]=new I;const c=new I,u=new I,h=new I,f=new ve,d=new ve,p=new ve,m=new I,g=new I;function _(C,A,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,A),p.fromBufferAttribute(s,M),u.sub(c),h.sub(c),d.sub(f),p.sub(f);const w=1/(d.x*p.y-p.x*d.y);isFinite(w)&&(m.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(w),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(w),a[C].add(m),a[A].add(m),a[M].add(m),l[C].add(g),l[A].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,A=y.length;C<A;++C){const M=y[C],w=M.start,F=M.count;for(let P=w,L=w+F;P<L;P+=3)_(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const v=new I,x=new I,T=new I,E=new I;function S(C){T.fromBufferAttribute(i,C),E.copy(T);const A=a[C];v.copy(A),v.sub(T.multiplyScalar(T.dot(A))).normalize(),x.crossVectors(E,A);const w=x.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,w)}for(let C=0,A=y.length;C<A;++C){const M=y[C],w=M.start,F=M.count;for(let P=w,L=w+F;P<L;P+=3)S(e.getX(P+0)),S(e.getX(P+1)),S(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),m=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,p=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*u;for(let _=0;_<u;_++)f[p++]=c[d++]}return new ai(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tp=new ue,Xr=new ja,dl=new No,Ep=new I,pl=new I,ml=new I,gl=new I,fu=new I,_l=new I,Cp=new I,vl=new I;class St extends ft{constructor(e=new yn,t=new Lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){_l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(fu.fromBufferAttribute(h,e),o?_l.addScaledVector(fu,u):_l.addScaledVector(fu.sub(t),u))}t.add(_l)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(s),Xr.copy(e.ray).recast(e.near),!(dl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(dl,Ep)===null||Xr.origin.distanceToSquared(Ep)>(e.far-e.near)**2))&&(Tp.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(Tp),!(n.boundingBox!==null&&Xr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,m=f.length;p<m;p++){const g=f[p],_=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,T=v;x<T;x+=3){const E=a.getX(x),S=a.getX(x+1),C=a.getX(x+2);i=xl(this,_,e,n,c,u,h,E,S,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let g=p,_=m;g<_;g+=3){const y=a.getX(g),v=a.getX(g+1),x=a.getX(g+2);i=xl(this,o,e,n,c,u,h,y,v,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,m=f.length;p<m;p++){const g=f[p],_=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,T=v;x<T;x+=3){const E=x,S=x+1,C=x+2;i=xl(this,_,e,n,c,u,h,E,S,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let g=p,_=m;g<_;g+=3){const y=g,v=g+1,x=g+2;i=xl(this,o,e,n,c,u,h,y,v,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function ky(r,e,t,n,i,s,o,a){let l;if(e.side===Dn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Fi,a),l===null)return null;vl.copy(a),vl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(vl);return c<t.near||c>t.far?null:{distance:c,point:vl.clone(),object:r}}function xl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,pl),r.getVertexPosition(l,ml),r.getVertexPosition(c,gl);const u=ky(r,e,t,n,pl,ml,gl,Cp);if(u){const h=new I;vi.getBarycoord(Cp,pl,ml,gl,h),i&&(u.uv=vi.getInterpolatedAttribute(i,a,l,c,h,new ve)),s&&(u.uv1=vi.getInterpolatedAttribute(s,a,l,c,h,new ve)),o&&(u.normal=vi.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};vi.getNormal(pl,ml,gl,f.normal),u.face=f,u.barycoord=h}return u}class zr extends yn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(h,2));function p(m,g,_,y,v,x,T,E,S,C,A){const M=x/S,w=T/C,F=x/2,P=T/2,L=E/2,B=S+1,O=C+1;let H=0,k=0;const j=new I;for(let ne=0;ne<O;ne++){const oe=ne*w-P;for(let fe=0;fe<B;fe++){const xe=fe*M-F;j[m]=xe*y,j[g]=oe*v,j[_]=L,c.push(j.x,j.y,j.z),j[m]=0,j[g]=0,j[_]=E>0?1:-1,u.push(j.x,j.y,j.z),h.push(fe/S),h.push(1-ne/C),H+=1}}for(let ne=0;ne<C;ne++)for(let oe=0;oe<S;oe++){const fe=f+oe+B*ne,xe=f+oe+B*(ne+1),W=f+(oe+1)+B*(ne+1),K=f+(oe+1)+B*ne;l.push(fe,xe,K),l.push(xe,W,K),k+=6}a.addGroup(d,k,A),d+=k,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Co(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function En(r){const e={};for(let t=0;t<r.length;t++){const n=Co(r[t]);for(const i in n)e[i]=n[i]}return e}function zy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function c0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Hy={clone:Co,merge:En};var Vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends kr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vy,this.fragmentShader=Gy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=zy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class u0 extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=er}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new I,bp=new ve,wp=new ve;class _n extends u0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,t){return this.getViewBounds(e,bp,wp),t.subVectors(wp,bp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(aa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ns=-90,ks=1;class Wy extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new _n(Ns,ks,e,t);i.layers=this.layers,this.add(i);const s=new _n(Ns,ks,e,t);s.layers=this.layers,this.add(s);const o=new _n(Ns,ks,e,t);o.layers=this.layers,this.add(o);const a=new _n(Ns,ks,e,t);a.layers=this.layers,this.add(a);const l=new _n(Ns,ks,e,t);l.layers=this.layers,this.add(l);const c=new _n(Ns,ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===er)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class h0 extends on{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:So,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xy extends Fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new h0(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zr(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:Co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:Er});s.uniforms.tEquirect.value=t;const o=new St(i,s),a=t.minFilter;return t.minFilter===os&&(t.minFilter=bi),new Wy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const du=new I,qy=new I,Yy=new ke;class _r{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=du.subVectors(n,t).cross(qy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(du),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yy.getNormalMatrix(e),i=this.coplanarPoint(du).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new No,yl=new I;class Hf{constructor(e=new _r,t=new _r,n=new _r,i=new _r,s=new _r,o=new _r){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=er){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],p=i[9],m=i[10],g=i[11],_=i[12],y=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-s,f-c,g-d,x-_).normalize(),n[1].setComponents(l+s,f+c,g+d,x+_).normalize(),n[2].setComponents(l+o,f+u,g+p,x+y).normalize(),n[3].setComponents(l-o,f-u,g-p,x-y).normalize(),n[4].setComponents(l-a,f-h,g-m,x-v).normalize(),t===er)n[5].setComponents(l+a,f+h,g+m,x+v).normalize();else if(t===sc)n[5].setComponents(a,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(yl.x=i.normal.x>0?e.max.x:e.min.x,yl.y=i.normal.y>0?e.max.y:e.min.y,yl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function f0(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Qy(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){const p=h[f],m=h[d];m.start<=p.start+p.count+1?p.count=Math.max(p.count,m.start+m.count-p.start):(++f,h[f]=m)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){const m=h[d];r.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class bo extends yn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],p=[],m=[],g=[];for(let _=0;_<u;_++){const y=_*f-o;for(let v=0;v<c;v++){const x=v*h-s;p.push(x,-y,0),m.push(0,0,1),g.push(v/a),g.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){const v=y+c*_,x=y+c*(_+1),T=y+1+c*(_+1),E=y+1+c*_;d.push(v,x,E),d.push(x,T,E)}this.setIndex(d),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(m,3)),this.setAttribute("uv",new Vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jy=`#ifdef USE_ALPHAHASH
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
#endif`,Zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tS=`#ifdef USE_AOMAP
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
#endif`,nS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iS=`#ifdef USE_BATCHING
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
#endif`,rS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lS=`#ifdef USE_IRIDESCENCE
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
#endif`,cS=`#ifdef USE_BUMPMAP
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
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_S=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vS=`#define PI 3.141592653589793
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
} // validated`,xS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yS=`vec3 transformedNormal = objectNormal;
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
#endif`,SS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ES="gl_FragColor = linearToOutputTexel( gl_FragColor );",CS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bS=`#ifdef USE_ENVMAP
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
#endif`,wS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RS=`#ifdef USE_ENVMAP
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
#endif`,IS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PS=`#ifdef USE_ENVMAP
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
#endif`,DS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,US=`#ifdef USE_GRADIENTMAP
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
}`,OS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zS=`uniform bool receiveShadow;
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
#endif`,HS=`#ifdef USE_ENVMAP
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
#endif`,VS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qS=`PhysicalMaterial material;
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
#endif`,YS=`struct PhysicalMaterial {
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
}`,QS=`
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
#endif`,KS=`#if defined( RE_IndirectDiffuse )
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
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$S=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rA=`#if defined( USE_POINTS_UV )
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
#endif`,sA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uA=`#ifdef USE_MORPHTARGETS
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
#endif`,hA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_A=`#ifdef USE_NORMALMAP
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
#endif`,vA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FA=`float getShadowMask() {
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
}`,LA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BA=`#ifdef USE_SKINNING
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
#endif`,UA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OA=`#ifdef USE_SKINNING
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
#endif`,NA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VA=`#ifdef USE_TRANSMISSION
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
#endif`,GA=`#ifdef USE_TRANSMISSION
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
#endif`,WA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KA=`uniform sampler2D t2D;
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
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`#include <common>
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
}`,tM=`#if DEPTH_PACKING == 3200
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
}`,nM=`#define DISTANCE
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
}`,iM=`#define DISTANCE
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`uniform float scale;
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
}`,aM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,cM=`uniform vec3 diffuse;
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
}`,uM=`#define LAMBERT
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
}`,hM=`#define LAMBERT
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
}`,fM=`#define MATCAP
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
}`,dM=`#define MATCAP
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
}`,pM=`#define NORMAL
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
}`,mM=`#define NORMAL
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
}`,gM=`#define PHONG
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
}`,_M=`#define PHONG
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
}`,vM=`#define STANDARD
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
}`,xM=`#define STANDARD
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
}`,yM=`#define TOON
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
}`,SM=`#define TOON
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
}`,AM=`uniform float size;
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
}`,MM=`uniform vec3 diffuse;
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
}`,TM=`#include <common>
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
}`,EM=`uniform vec3 color;
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
}`,CM=`uniform float rotation;
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
}`,bM=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Ky,alphahash_pars_fragment:jy,alphamap_fragment:Zy,alphamap_pars_fragment:$y,alphatest_fragment:Jy,alphatest_pars_fragment:eS,aomap_fragment:tS,aomap_pars_fragment:nS,batching_pars_vertex:iS,batching_vertex:rS,begin_vertex:sS,beginnormal_vertex:oS,bsdfs:aS,iridescence_fragment:lS,bumpmap_pars_fragment:cS,clipping_planes_fragment:uS,clipping_planes_pars_fragment:hS,clipping_planes_pars_vertex:fS,clipping_planes_vertex:dS,color_fragment:pS,color_pars_fragment:mS,color_pars_vertex:gS,color_vertex:_S,common:vS,cube_uv_reflection_fragment:xS,defaultnormal_vertex:yS,displacementmap_pars_vertex:SS,displacementmap_vertex:AS,emissivemap_fragment:MS,emissivemap_pars_fragment:TS,colorspace_fragment:ES,colorspace_pars_fragment:CS,envmap_fragment:bS,envmap_common_pars_fragment:wS,envmap_pars_fragment:RS,envmap_pars_vertex:IS,envmap_physical_pars_fragment:HS,envmap_vertex:PS,fog_vertex:DS,fog_pars_vertex:FS,fog_fragment:LS,fog_pars_fragment:BS,gradientmap_pars_fragment:US,lightmap_pars_fragment:OS,lights_lambert_fragment:NS,lights_lambert_pars_fragment:kS,lights_pars_begin:zS,lights_toon_fragment:VS,lights_toon_pars_fragment:GS,lights_phong_fragment:WS,lights_phong_pars_fragment:XS,lights_physical_fragment:qS,lights_physical_pars_fragment:YS,lights_fragment_begin:QS,lights_fragment_maps:KS,lights_fragment_end:jS,logdepthbuf_fragment:ZS,logdepthbuf_pars_fragment:$S,logdepthbuf_pars_vertex:JS,logdepthbuf_vertex:eA,map_fragment:tA,map_pars_fragment:nA,map_particle_fragment:iA,map_particle_pars_fragment:rA,metalnessmap_fragment:sA,metalnessmap_pars_fragment:oA,morphinstance_vertex:aA,morphcolor_vertex:lA,morphnormal_vertex:cA,morphtarget_pars_vertex:uA,morphtarget_vertex:hA,normal_fragment_begin:fA,normal_fragment_maps:dA,normal_pars_fragment:pA,normal_pars_vertex:mA,normal_vertex:gA,normalmap_pars_fragment:_A,clearcoat_normal_fragment_begin:vA,clearcoat_normal_fragment_maps:xA,clearcoat_pars_fragment:yA,iridescence_pars_fragment:SA,opaque_fragment:AA,packing:MA,premultiplied_alpha_fragment:TA,project_vertex:EA,dithering_fragment:CA,dithering_pars_fragment:bA,roughnessmap_fragment:wA,roughnessmap_pars_fragment:RA,shadowmap_pars_fragment:IA,shadowmap_pars_vertex:PA,shadowmap_vertex:DA,shadowmask_pars_fragment:FA,skinbase_vertex:LA,skinning_pars_vertex:BA,skinning_vertex:UA,skinnormal_vertex:OA,specularmap_fragment:NA,specularmap_pars_fragment:kA,tonemapping_fragment:zA,tonemapping_pars_fragment:HA,transmission_fragment:VA,transmission_pars_fragment:GA,uv_pars_fragment:WA,uv_pars_vertex:XA,uv_vertex:qA,worldpos_vertex:YA,background_vert:QA,background_frag:KA,backgroundCube_vert:jA,backgroundCube_frag:ZA,cube_vert:$A,cube_frag:JA,depth_vert:eM,depth_frag:tM,distanceRGBA_vert:nM,distanceRGBA_frag:iM,equirect_vert:rM,equirect_frag:sM,linedashed_vert:oM,linedashed_frag:aM,meshbasic_vert:lM,meshbasic_frag:cM,meshlambert_vert:uM,meshlambert_frag:hM,meshmatcap_vert:fM,meshmatcap_frag:dM,meshnormal_vert:pM,meshnormal_frag:mM,meshphong_vert:gM,meshphong_frag:_M,meshphysical_vert:vM,meshphysical_frag:xM,meshtoon_vert:yM,meshtoon_frag:SM,points_vert:AM,points_frag:MM,shadow_vert:TM,shadow_frag:EM,sprite_vert:CM,sprite_frag:bM},me={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Ei={basic:{uniforms:En([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:En([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:En([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:En([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:En([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ze(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:En([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:En([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:En([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:En([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:En([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:En([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:En([me.common,me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:En([me.lights,me.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Ei.physical={uniforms:En([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Sl={r:0,b:0,g:0},Yr=new Zt,wM=new ue;function RM(r,e,t,n,i,s,o){const a=new ze(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function p(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function m(y){let v=!1;const x=p(y);x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,v){const x=p(v);x&&(x.isCubeTexture||x.mapping===Ic)?(u===void 0&&(u=new St(new zr(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Co(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Yr.copy(v.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wM.makeRotationFromEuler(Yr)),u.material.toneMapped=Ke.getTransfer(x.colorSpace)!==gt,(h!==x||f!==x.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new St(new bo(2,2),new Kn({name:"BackgroundMaterial",uniforms:Co(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(x.colorSpace)!==gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function _(y,v){y.getRGB(Sl,c0(r)),n.buffers.color.setClear(Sl.r,Sl.g,Sl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,_(a,l)},render:m,addToRenderList:g}}function IM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(M,w,F,P,L){let B=!1;const O=h(P,F,w);s!==O&&(s=O,c(s.object)),B=d(M,P,F,L),B&&p(M,P,F,L),L!==null&&e.update(L,r.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(M,w,F,P),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function u(M){return r.deleteVertexArray(M)}function h(M,w,F){const P=F.wireframe===!0;let L=n[M.id];L===void 0&&(L={},n[M.id]=L);let B=L[w.id];B===void 0&&(B={},L[w.id]=B);let O=B[P];return O===void 0&&(O=f(l()),B[P]=O),O}function f(M){const w=[],F=[],P=[];for(let L=0;L<t;L++)w[L]=0,F[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:F,attributeDivisors:P,object:M,attributes:{},index:null}}function d(M,w,F,P){const L=s.attributes,B=w.attributes;let O=0;const H=F.getAttributes();for(const k in H)if(H[k].location>=0){const ne=L[k];let oe=B[k];if(oe===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),ne===void 0||ne.attribute!==oe||oe&&ne.data!==oe.data)return!0;O++}return s.attributesNum!==O||s.index!==P}function p(M,w,F,P){const L={},B=w.attributes;let O=0;const H=F.getAttributes();for(const k in H)if(H[k].location>=0){let ne=B[k];ne===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor));const oe={};oe.attribute=ne,ne&&ne.data&&(oe.data=ne.data),L[k]=oe,O++}s.attributes=L,s.attributesNum=O,s.index=P}function m(){const M=s.newAttributes;for(let w=0,F=M.length;w<F;w++)M[w]=0}function g(M){_(M,0)}function _(M,w){const F=s.newAttributes,P=s.enabledAttributes,L=s.attributeDivisors;F[M]=1,P[M]===0&&(r.enableVertexAttribArray(M),P[M]=1),L[M]!==w&&(r.vertexAttribDivisor(M,w),L[M]=w)}function y(){const M=s.newAttributes,w=s.enabledAttributes;for(let F=0,P=w.length;F<P;F++)w[F]!==M[F]&&(r.disableVertexAttribArray(F),w[F]=0)}function v(M,w,F,P,L,B,O){O===!0?r.vertexAttribIPointer(M,w,F,L,B):r.vertexAttribPointer(M,w,F,P,L,B)}function x(M,w,F,P){m();const L=P.attributes,B=F.getAttributes(),O=w.defaultAttributeValues;for(const H in B){const k=B[H];if(k.location>=0){let j=L[H];if(j===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),j!==void 0){const ne=j.normalized,oe=j.itemSize,fe=e.get(j);if(fe===void 0)continue;const xe=fe.buffer,W=fe.type,K=fe.bytesPerElement,se=W===r.INT||W===r.UNSIGNED_INT||j.gpuType===Ff;if(j.isInterleavedBufferAttribute){const te=j.data,ye=te.stride,Ae=j.offset;if(te.isInstancedInterleavedBuffer){for(let be=0;be<k.locationSize;be++)_(k.location+be,te.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let be=0;be<k.locationSize;be++)g(k.location+be);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let be=0;be<k.locationSize;be++)v(k.location+be,oe/k.locationSize,W,ne,ye*K,(Ae+oe/k.locationSize*be)*K,se)}else{if(j.isInstancedBufferAttribute){for(let te=0;te<k.locationSize;te++)_(k.location+te,j.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let te=0;te<k.locationSize;te++)g(k.location+te);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let te=0;te<k.locationSize;te++)v(k.location+te,oe/k.locationSize,W,ne,oe*K,oe/k.locationSize*te*K,se)}}else if(O!==void 0){const ne=O[H];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(k.location,ne);break;case 3:r.vertexAttrib3fv(k.location,ne);break;case 4:r.vertexAttrib4fv(k.location,ne);break;default:r.vertexAttrib1fv(k.location,ne)}}}}y()}function T(){C();for(const M in n){const w=n[M];for(const F in w){const P=w[F];for(const L in P)u(P[L].object),delete P[L];delete w[F]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const F in w){const P=w[F];for(const L in P)u(P[L].object),delete P[L];delete w[F]}delete n[M.id]}function S(M){for(const w in n){const F=n[w];if(F[M.id]===void 0)continue;const P=F[M.id];for(const L in P)u(P[L].object),delete P[L];delete F[M.id]}}function C(){A(),o=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:m,enableAttribute:g,disableUnusedAttributes:y}}function PM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m]*f[m];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function DM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==xn&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const C=S===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Li&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==ri&&!C)}function l(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:T,maxSamples:E}}function FM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new _r,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const p=h.clippingPlanes,m=h.clipIntersection,g=h.clipShadows,_=r.get(h);if(!i||p===null||p.length===0||s&&!g)s?u(null):c();else{const y=s?0:n,v=y*4;let x=_.clippingState||null;l.value=x,x=u(p,f,v,d);for(let T=0;T!==v;++T)x[T]=t[T];_.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,p){const m=h!==null?h.length:0;let g=null;if(m!==0){if(g=l.value,p!==!0||g===null){const _=d+m*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<_)&&(g=new Float32Array(_));for(let v=0,x=d;v!==m;++v,x+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function LM(r){let e=new WeakMap;function t(o,a){return a===ic?o.mapping=So:a===ph&&(o.mapping=Ao),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ic||a===ph)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xy(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Lc extends u0{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $s=4,Rp=[.125,.215,.35,.446,.526,.582],es=20,pu=new Lc,Ip=new ze;let mu=null,gu=0,_u=0,vu=!1;const Zr=(1+Math.sqrt(5))/2,zs=1/Zr,Pp=[new I(-Zr,zs,0),new I(Zr,zs,0),new I(-zs,0,Zr),new I(zs,0,Zr),new I(0,Zr,-zs),new I(0,Zr,zs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Dp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mu,gu,_u),this._renderer.xr.enabled=vu,e.scissorTest=!1,Al(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===So||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Uo,format:xn,colorSpace:Oo,depthBuffer:!1},i=Fp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BM(s)),this._blurMaterial=UM(s,e,t)}return i}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,pu)}_sceneToCubeUV(e,t,n,i){const a=new _n(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ip),u.toneMapping=br,u.autoClear=!1;const d=new Lr({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),p=new St(new zr,d);let m=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,m=!0):(d.color.copy(Ip),m=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):y===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const v=this._cubeSize;Al(i,y*v,_>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===So||e.mapping===Ao;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Al(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,pu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Pp[(i-s-1)%Pp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new St(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*es-1),m=s/p,g=isFinite(s)?1+Math.floor(u*m):es;g>es&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${es}`);const _=[];let y=0;for(let S=0;S<es;++S){const C=S/m,A=Math.exp(-C*C/2);_.push(A),S===0?y+=A:S<g&&(y+=2*A)}for(let S=0;S<_.length;S++)_[S]=_[S]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;const x=this._sizeLods[i],T=3*x*(i>v-$s?i-v+$s:0),E=4*(this._cubeSize-x);Al(t,T,E,3*x,2*x),l.setRenderTarget(t),l.render(h,pu)}}function BM(r){const e=[],t=[],n=[];let i=r;const s=r-$s+1+Rp.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-$s?l=Rp[o-r+$s-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,m=3,g=2,_=1,y=new Float32Array(m*p*d),v=new Float32Array(g*p*d),x=new Float32Array(_*p*d);for(let E=0;E<d;E++){const S=E%3*2/3-1,C=E>2?0:-1,A=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];y.set(A,m*p*E),v.set(f,g*p*E);const M=[E,E,E,E,E,E];x.set(M,_*p*E)}const T=new yn;T.setAttribute("position",new ai(y,m)),T.setAttribute("uv",new ai(v,g)),T.setAttribute("faceIndex",new ai(x,_)),e.push(T),i>$s&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fp(r,e,t){const n=new Fr(r,e,t);return n.texture.mapping=Ic,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Al(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function UM(r,e,t){const n=new Float32Array(es),i=new I(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vf(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Lp(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vf(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Bp(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Vf(){return`

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
	`}function OM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ic||l===ph,u=l===So||l===Ao;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Dp(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Dp(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function NM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&na("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kM(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);for(const p in f.morphAttributes){const m=f.morphAttributes[p];for(let g=0,_=m.length;g<_;g++)e.remove(m[g])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const p in d){const m=d[p];for(let g=0,_=m.length;g<_;g++)e.update(m[g],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,p=h.attributes.position;let m=0;if(d!==null){const y=d.array;m=d.version;for(let v=0,x=y.length;v<x;v+=3){const T=y[v+0],E=y[v+1],S=y[v+2];f.push(T,E,E,S,S,T)}}else if(p!==void 0){const y=p.array;m=p.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const T=v+0,E=v+1,S=v+2;f.push(T,E,E,S,S,T)}}else return;const g=new(r0(f)?l0:zf)(f,1);g.version=m;const _=s.get(h);_&&e.remove(_),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function zM(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,p){p!==0&&(r.drawElementsInstanced(n,d,s,f*o,p),t.update(d,n,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,p);let g=0;for(let _=0;_<p;_++)g+=d[_];t.update(g,n,1)}function h(f,d,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<f.length;_++)c(f[_]/o,d[_],m[_]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,m,0,p);let _=0;for(let y=0;y<p;y++)_+=d[y]*m[y];t.update(_,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function HM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function VM(r,e,t){const n=new WeakMap,i=new $e;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),m===!0&&(x=2),g===!0&&(x=3);let T=a.attributes.position.count*x,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const S=new Float32Array(T*E*4*h),C=new o0(S,T,E,h);C.type=ri,C.needsUpdate=!0;const A=x*4;for(let w=0;w<h;w++){const F=_[w],P=y[w],L=v[w],B=T*E*4*w;for(let O=0;O<F.count;O++){const H=O*A;p===!0&&(i.fromBufferAttribute(F,O),S[B+H+0]=i.x,S[B+H+1]=i.y,S[B+H+2]=i.z,S[B+H+3]=0),m===!0&&(i.fromBufferAttribute(P,O),S[B+H+4]=i.x,S[B+H+5]=i.y,S[B+H+6]=i.z,S[B+H+7]=0),g===!0&&(i.fromBufferAttribute(L,O),S[B+H+8]=i.x,S[B+H+9]=i.y,S[B+H+10]=i.z,S[B+H+11]=L.itemSize===4?i.w:1)}}f={count:h,texture:C,size:new ve(T,E)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function GM(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Gf extends on{constructor(e,t,n,i,s,o,a,l,c,u=hs){if(u!==hs&&u!==To)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hs&&(n=ii),n===void 0&&u===To&&(n=Mo),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qn,this.minFilter=l!==void 0?l:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const d0=new on,Up=new Gf(1,1),p0=new o0,m0=new Cy,g0=new h0,Op=[],Np=[],kp=new Float32Array(16),zp=new Float32Array(9),Hp=new Float32Array(4);function ko(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Op[i];if(s===void 0&&(s=new Float32Array(i),Op[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Yt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Bc(r,e){let t=Np[e];t===void 0&&(t=new Int32Array(e),Np[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function WM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function XM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2fv(this.addr,e),Yt(t,e)}}function qM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;r.uniform3fv(this.addr,e),Yt(t,e)}}function YM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4fv(this.addr,e),Yt(t,e)}}function QM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Hp.set(n),r.uniformMatrix2fv(this.addr,!1,Hp),Yt(t,n)}}function KM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;zp.set(n),r.uniformMatrix3fv(this.addr,!1,zp),Yt(t,n)}}function jM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;kp.set(n),r.uniformMatrix4fv(this.addr,!1,kp),Yt(t,n)}}function ZM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function $M(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2iv(this.addr,e),Yt(t,e)}}function JM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;r.uniform3iv(this.addr,e),Yt(t,e)}}function eT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4iv(this.addr,e),Yt(t,e)}}function tT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function nT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2uiv(this.addr,e),Yt(t,e)}}function iT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;r.uniform3uiv(this.addr,e),Yt(t,e)}}function rT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4uiv(this.addr,e),Yt(t,e)}}function sT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Up.compareFunction=i0,s=Up):s=d0,t.setTexture2D(e||s,i)}function oT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||m0,i)}function aT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||g0,i)}function lT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||p0,i)}function cT(r){switch(r){case 5126:return WM;case 35664:return XM;case 35665:return qM;case 35666:return YM;case 35674:return QM;case 35675:return KM;case 35676:return jM;case 5124:case 35670:return ZM;case 35667:case 35671:return $M;case 35668:case 35672:return JM;case 35669:case 35673:return eT;case 5125:return tT;case 36294:return nT;case 36295:return iT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return lT}}function uT(r,e){r.uniform1fv(this.addr,e)}function hT(r,e){const t=ko(e,this.size,2);r.uniform2fv(this.addr,t)}function fT(r,e){const t=ko(e,this.size,3);r.uniform3fv(this.addr,t)}function dT(r,e){const t=ko(e,this.size,4);r.uniform4fv(this.addr,t)}function pT(r,e){const t=ko(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function mT(r,e){const t=ko(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gT(r,e){const t=ko(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _T(r,e){r.uniform1iv(this.addr,e)}function vT(r,e){r.uniform2iv(this.addr,e)}function xT(r,e){r.uniform3iv(this.addr,e)}function yT(r,e){r.uniform4iv(this.addr,e)}function ST(r,e){r.uniform1uiv(this.addr,e)}function AT(r,e){r.uniform2uiv(this.addr,e)}function MT(r,e){r.uniform3uiv(this.addr,e)}function TT(r,e){r.uniform4uiv(this.addr,e)}function ET(r,e,t){const n=this.cache,i=e.length,s=Bc(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||d0,s[o])}function CT(r,e,t){const n=this.cache,i=e.length,s=Bc(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||m0,s[o])}function bT(r,e,t){const n=this.cache,i=e.length,s=Bc(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||g0,s[o])}function wT(r,e,t){const n=this.cache,i=e.length,s=Bc(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||p0,s[o])}function RT(r){switch(r){case 5126:return uT;case 35664:return hT;case 35665:return fT;case 35666:return dT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return _T;case 35667:case 35671:return vT;case 35668:case 35672:return xT;case 35669:case 35673:return yT;case 5125:return ST;case 36294:return AT;case 36295:return MT;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return wT}}class IT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cT(t.type)}}class PT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RT(t.type)}}class DT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const xu=/(\w+)(\])?(\[|\.)?/g;function Vp(r,e){r.seq.push(e),r.map[e.id]=e}function FT(r,e,t){const n=r.name,i=n.length;for(xu.lastIndex=0;;){const s=xu.exec(n),o=xu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Vp(t,c===void 0?new IT(a,r,e):new PT(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new DT(a),Vp(t,h)),t=h}}}class Wl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);FT(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Gp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const LT=37297;let BT=0;function UT(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Wp=new ke;function OT(r){Ke._getMatrix(Wp,Ke.workingColorSpace,r);const e=`mat3( ${Wp.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(r)){case Fc:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Xp(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+UT(r.getShaderSource(e),o)}else return i}function NT(r,e){const t=OT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kT(r,e){let t;switch(e){case Bx:t="Linear";break;case Ux:t="Reinhard";break;case Ox:t="Cineon";break;case Nx:t="ACESFilmic";break;case zx:t="AgX";break;case Hx:t="Neutral";break;case kx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ml=new I;function zT(){Ke.getLuminanceCoefficients(Ml);const r=Ml.x.toFixed(4),e=Ml.y.toFixed(4),t=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function VT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function GT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ia(r){return r!==""}function qp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(r){return r.replace(WT,qT)}const XT=new Map;function qT(r,e){let t=je[e];if(t===void 0){const n=XT.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gh(t)}const YT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qp(r){return r.replace(YT,QT)}function QT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Kp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===mx?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function jT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case So:case Ao:e="ENVMAP_TYPE_CUBE";break;case Ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ao:e="ENVMAP_MODE_REFRACTION";break}return e}function $T(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Rc:e="ENVMAP_BLENDING_MULTIPLY";break;case Fx:e="ENVMAP_BLENDING_MIX";break;case Lx:e="ENVMAP_BLENDING_ADD";break}return e}function JT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function eE(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=KT(t),c=jT(t),u=ZT(t),h=$T(t),f=JT(t),d=HT(t),p=VT(s),m=i.createProgram();let g,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ia).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ia).join(`
`),_.length>0&&(_+=`
`)):(g=[Kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),_=[Kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==br?"#define TONE_MAPPING":"",t.toneMapping!==br?je.tonemapping_pars_fragment:"",t.toneMapping!==br?kT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,NT("linearToOutputTexel",t.outputColorSpace),zT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),o=Gh(o),o=qp(o,t),o=Yp(o,t),a=Gh(a),a=qp(a,t),a=Yp(a,t),o=Qp(o),a=Qp(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",t.glslVersion===ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=y+g+o,x=y+_+a,T=Gp(i,i.VERTEX_SHADER,v),E=Gp(i,i.FRAGMENT_SHADER,x);i.attachShader(m,T),i.attachShader(m,E),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function S(w){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(T).trim(),L=i.getShaderInfoLog(E).trim();let B=!0,O=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,T,E);else{const H=Xp(i,T,"vertex"),k=Xp(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+H+`
`+k)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(P===""||L==="")&&(O=!1);O&&(w.diagnostics={runnable:B,programLog:F,vertexShader:{log:P,prefix:g},fragmentShader:{log:L,prefix:_}})}i.deleteShader(T),i.deleteShader(E),C=new Wl(i,m),A=GT(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let A;this.getAttributes=function(){return A===void 0&&S(this),A};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(m,LT)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=E,this}let tE=0;class nE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new iE(e),t.set(e,n)),n}}class iE{constructor(e){this.id=tE++,this.code=e,this.usedTimes=0}}function rE(r,e,t,n,i,s,o){const a=new kf,l=new nE,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(A){return c.add(A),A===0?"uv":`uv${A}`}function g(A,M,w,F,P){const L=F.fog,B=P.geometry,O=A.isMeshStandardMaterial?F.environment:null,H=(A.isMeshStandardMaterial?t:e).get(A.envMap||O),k=H&&H.mapping===Ic?H.image.height:null,j=p[A.type];A.precision!==null&&(d=i.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));const ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,oe=ne!==void 0?ne.length:0;let fe=0;B.morphAttributes.position!==void 0&&(fe=1),B.morphAttributes.normal!==void 0&&(fe=2),B.morphAttributes.color!==void 0&&(fe=3);let xe,W,K,se;if(j){const dt=Ei[j];xe=dt.vertexShader,W=dt.fragmentShader}else xe=A.vertexShader,W=A.fragmentShader,l.update(A),K=l.getVertexShaderID(A),se=l.getFragmentShaderID(A);const te=r.getRenderTarget(),ye=r.state.buffers.depth.getReversed(),Ae=P.isInstancedMesh===!0,be=P.isBatchedMesh===!0,Ve=!!A.map,Ue=!!A.matcap,Se=!!H,N=!!A.aoMap,Xe=!!A.lightMap,Oe=!!A.bumpMap,Ne=!!A.normalMap,Te=!!A.displacementMap,Je=!!A.emissiveMap,Ie=!!A.metalnessMap,D=!!A.roughnessMap,b=A.anisotropy>0,X=A.clearcoat>0,ee=A.dispersion>0,re=A.iridescence>0,J=A.sheen>0,Re=A.transmission>0,_e=b&&!!A.anisotropyMap,Ce=X&&!!A.clearcoatMap,tt=X&&!!A.clearcoatNormalMap,ae=X&&!!A.clearcoatRoughnessMap,U=re&&!!A.iridescenceMap,ie=re&&!!A.iridescenceThicknessMap,Ee=J&&!!A.sheenColorMap,he=J&&!!A.sheenRoughnessMap,He=!!A.specularMap,Ge=!!A.specularColorMap,nt=!!A.specularIntensityMap,z=Re&&!!A.transmissionMap,pe=Re&&!!A.thicknessMap,Q=!!A.gradientMap,$=!!A.alphaMap,ge=A.alphaTest>0,de=!!A.alphaHash,We=!!A.extensions;let _t=br;A.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(_t=r.toneMapping);const ln={shaderID:j,shaderType:A.type,shaderName:A.name,vertexShader:xe,fragmentShader:W,defines:A.defines,customVertexShaderID:K,customFragmentShaderID:se,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:be,batchingColor:be&&P._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&P.instanceColor!==null,instancingMorph:Ae&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Oo,alphaToCoverage:!!A.alphaToCoverage,map:Ve,matcap:Ue,envMap:Se,envMapMode:Se&&H.mapping,envMapCubeUVHeight:k,aoMap:N,lightMap:Xe,bumpMap:Oe,normalMap:Ne,displacementMap:f&&Te,emissiveMap:Je,normalMapObjectSpace:Ne&&A.normalMapType===Yx,normalMapTangentSpace:Ne&&A.normalMapType===Dc,metalnessMap:Ie,roughnessMap:D,anisotropy:b,anisotropyMap:_e,clearcoat:X,clearcoatMap:Ce,clearcoatNormalMap:tt,clearcoatRoughnessMap:ae,dispersion:ee,iridescence:re,iridescenceMap:U,iridescenceThicknessMap:ie,sheen:J,sheenColorMap:Ee,sheenRoughnessMap:he,specularMap:He,specularColorMap:Ge,specularIntensityMap:nt,transmission:Re,transmissionMap:z,thicknessMap:pe,gradientMap:Q,opaque:A.transparent===!1&&A.blending===Cr&&A.alphaToCoverage===!1,alphaMap:$,alphaTest:ge,alphaHash:de,combine:A.combine,mapUv:Ve&&m(A.map.channel),aoMapUv:N&&m(A.aoMap.channel),lightMapUv:Xe&&m(A.lightMap.channel),bumpMapUv:Oe&&m(A.bumpMap.channel),normalMapUv:Ne&&m(A.normalMap.channel),displacementMapUv:Te&&m(A.displacementMap.channel),emissiveMapUv:Je&&m(A.emissiveMap.channel),metalnessMapUv:Ie&&m(A.metalnessMap.channel),roughnessMapUv:D&&m(A.roughnessMap.channel),anisotropyMapUv:_e&&m(A.anisotropyMap.channel),clearcoatMapUv:Ce&&m(A.clearcoatMap.channel),clearcoatNormalMapUv:tt&&m(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&m(A.clearcoatRoughnessMap.channel),iridescenceMapUv:U&&m(A.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&m(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(A.sheenColorMap.channel),sheenRoughnessMapUv:he&&m(A.sheenRoughnessMap.channel),specularMapUv:He&&m(A.specularMap.channel),specularColorMapUv:Ge&&m(A.specularColorMap.channel),specularIntensityMapUv:nt&&m(A.specularIntensityMap.channel),transmissionMapUv:z&&m(A.transmissionMap.channel),thicknessMapUv:pe&&m(A.thicknessMap.channel),alphaMapUv:$&&m(A.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ne||b),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!B.attributes.uv&&(Ve||$),fog:!!L,useFog:A.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ye,skinning:P.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&w.length>0,shadowMapType:r.shadowMap.type,toneMapping:_t,decodeVideoTexture:Ve&&A.map.isVideoTexture===!0&&Ke.getTransfer(A.map.colorSpace)===gt,decodeVideoTextureEmissive:Je&&A.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(A.emissiveMap.colorSpace)===gt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ti,flipSided:A.side===Dn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:We&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&A.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ln.vertexUv1s=c.has(1),ln.vertexUv2s=c.has(2),ln.vertexUv3s=c.has(3),c.clear(),ln}function _(A){const M=[];if(A.shaderID?M.push(A.shaderID):(M.push(A.customVertexShaderID),M.push(A.customFragmentShaderID)),A.defines!==void 0)for(const w in A.defines)M.push(w),M.push(A.defines[w]);return A.isRawShaderMaterial===!1&&(y(M,A),v(M,A),M.push(r.outputColorSpace)),M.push(A.customProgramCacheKey),M.join()}function y(A,M){A.push(M.precision),A.push(M.outputColorSpace),A.push(M.envMapMode),A.push(M.envMapCubeUVHeight),A.push(M.mapUv),A.push(M.alphaMapUv),A.push(M.lightMapUv),A.push(M.aoMapUv),A.push(M.bumpMapUv),A.push(M.normalMapUv),A.push(M.displacementMapUv),A.push(M.emissiveMapUv),A.push(M.metalnessMapUv),A.push(M.roughnessMapUv),A.push(M.anisotropyMapUv),A.push(M.clearcoatMapUv),A.push(M.clearcoatNormalMapUv),A.push(M.clearcoatRoughnessMapUv),A.push(M.iridescenceMapUv),A.push(M.iridescenceThicknessMapUv),A.push(M.sheenColorMapUv),A.push(M.sheenRoughnessMapUv),A.push(M.specularMapUv),A.push(M.specularColorMapUv),A.push(M.specularIntensityMapUv),A.push(M.transmissionMapUv),A.push(M.thicknessMapUv),A.push(M.combine),A.push(M.fogExp2),A.push(M.sizeAttenuation),A.push(M.morphTargetsCount),A.push(M.morphAttributeCount),A.push(M.numDirLights),A.push(M.numPointLights),A.push(M.numSpotLights),A.push(M.numSpotLightMaps),A.push(M.numHemiLights),A.push(M.numRectAreaLights),A.push(M.numDirLightShadows),A.push(M.numPointLightShadows),A.push(M.numSpotLightShadows),A.push(M.numSpotLightShadowsWithMaps),A.push(M.numLightProbes),A.push(M.shadowMapType),A.push(M.toneMapping),A.push(M.numClippingPlanes),A.push(M.numClipIntersection),A.push(M.depthPacking)}function v(A,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),A.push(a.mask)}function x(A){const M=p[A.type];let w;if(M){const F=Ei[M];w=Hy.clone(F.uniforms)}else w=A.uniforms;return w}function T(A,M){let w;for(let F=0,P=u.length;F<P;F++){const L=u[F];if(L.cacheKey===M){w=L,++w.usedTimes;break}}return w===void 0&&(w=new eE(r,M,A,s),u.push(w)),w}function E(A){if(--A.usedTimes===0){const M=u.indexOf(A);u[M]=u[u.length-1],u.pop(),A.destroy()}}function S(A){l.remove(A)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:x,acquireProgram:T,releaseProgram:E,releaseShaderCache:S,programs:u,dispose:C}}function sE(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function oE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function jp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Zp(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,p,m,g){let _=r[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:m,group:g},r[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=p,_.renderOrder=h.renderOrder,_.z=m,_.group=g),e++,_}function a(h,f,d,p,m,g){const _=o(h,f,d,p,m,g);d.transmission>0?n.push(_):d.transparent===!0?i.push(_):t.push(_)}function l(h,f,d,p,m,g){const _=o(h,f,d,p,m,g);d.transmission>0?n.unshift(_):d.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||oE),n.length>1&&n.sort(f||jp),i.length>1&&i.sort(f||jp)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function aE(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Zp,r.set(n,[o])):i>=s.length?(o=new Zp,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function lE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ze};break;case"SpotLight":t={position:new I,direction:new I,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function cE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let uE=0;function hE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function fE(r){const e=new lE,t=cE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new ue,o=new ue;function a(c){let u=0,h=0,f=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let d=0,p=0,m=0,g=0,_=0,y=0,v=0,x=0,T=0,E=0,S=0;c.sort(hE);for(let A=0,M=c.length;A<M;A++){const w=c[A],F=w.color,P=w.intensity,L=w.distance,B=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=F.r*P,h+=F.g*P,f+=F.b*P;else if(w.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(w.sh.coefficients[O],P);S++}else if(w.isDirectionalLight){const O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const H=w.shadow,k=t.get(w);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=w.shadow.matrix,y++}n.directional[d]=O,d++}else if(w.isSpotLight){const O=e.get(w);O.position.setFromMatrixPosition(w.matrixWorld),O.color.copy(F).multiplyScalar(P),O.distance=L,O.coneCos=Math.cos(w.angle),O.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),O.decay=w.decay,n.spot[m]=O;const H=w.shadow;if(w.map&&(n.spotLightMap[T]=w.map,T++,H.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[m]=H.matrix,w.castShadow){const k=t.get(w);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.spotShadow[m]=k,n.spotShadowMap[m]=B,x++}m++}else if(w.isRectAreaLight){const O=e.get(w);O.color.copy(F).multiplyScalar(P),O.halfWidth.set(w.width*.5,0,0),O.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=O,g++}else if(w.isPointLight){const O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),O.distance=w.distance,O.decay=w.decay,w.castShadow){const H=w.shadow,k=t.get(w);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,n.pointShadow[p]=k,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=w.shadow.matrix,v++}n.point[p]=O,p++}else if(w.isHemisphereLight){const O=e.get(w);O.skyColor.copy(w.color).multiplyScalar(P),O.groundColor.copy(w.groundColor).multiplyScalar(P),n.hemi[_]=O,_++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==p||C.spotLength!==m||C.rectAreaLength!==g||C.hemiLength!==_||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==T||C.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=m,n.rectArea.length=g,n.point.length=p,n.hemi.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,C.directionalLength=d,C.pointLength=p,C.spotLength=m,C.rectAreaLength=g,C.hemiLength=_,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=T,C.numLightProbes=S,n.version=uE++)}function l(c,u){let h=0,f=0,d=0,p=0,m=0;const g=u.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){const v=c[_];if(v.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),h++}else if(v.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),d++}else if(v.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const x=n.hemi[m];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function $p(r){const e=new fE(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function dE(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new $p(r),e.set(i,[a])):s>=o.length?(a=new $p(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class pE extends kr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mE extends kr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_E=`uniform sampler2D shadow_pass;
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
}`;function vE(r,e,t){let n=new Hf;const i=new ve,s=new ve,o=new $e,a=new pE({depthPacking:qx}),l=new mE,c={},u=t.maxTextureSize,h={[Fi]:Dn,[Dn]:Fi,[ti]:ti},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:gE,fragmentShader:_E}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new yn;p.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new St(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xg;let _=this.type;this.render=function(E,S,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const A=r.getRenderTarget(),M=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Er),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const P=_!==qi&&this.type===qi,L=_===qi&&this.type!==qi;for(let B=0,O=E.length;B<O;B++){const H=E[B],k=H.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const j=k.getFrameExtents();if(i.multiply(j),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,k.mapSize.y=s.y)),k.map===null||P===!0||L===!0){const oe=this.type!==qi?{minFilter:Qn,magFilter:Qn}:{};k.map!==null&&k.map.dispose(),k.map=new Fr(i.x,i.y,oe),k.map.texture.name=H.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const ne=k.getViewportCount();for(let oe=0;oe<ne;oe++){const fe=k.getViewport(oe);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),F.viewport(o),k.updateMatrices(H,oe),n=k.getFrustum(),x(S,C,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===qi&&y(k,C),k.needsUpdate=!1}_=this.type,g.needsUpdate=!1,r.setRenderTarget(A,M,w)};function y(E,S){const C=e.update(m);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Fr(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(S,null,C,f,m,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(S,null,C,d,m,null)}function v(E,S,C,A){let M=null;const w=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)M=w;else if(M=C.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const F=M.uuid,P=S.uuid;let L=c[F];L===void 0&&(L={},c[F]=L);let B=L[P];B===void 0&&(B=M.clone(),L[P]=B,S.addEventListener("dispose",T)),M=B}if(M.visible=S.visible,M.wireframe=S.wireframe,A===qi?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:h[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=r.properties.get(M);F.light=C}return M}function x(E,S,C,A,M){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===qi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const P=e.update(E),L=E.material;if(Array.isArray(L)){const B=P.groups;for(let O=0,H=B.length;O<H;O++){const k=B[O],j=L[k.materialIndex];if(j&&j.visible){const ne=v(E,j,A,M);E.onBeforeShadow(r,E,S,C,P,ne,k),r.renderBufferDirect(C,null,P,ne,E,k),E.onAfterShadow(r,E,S,C,P,ne,k)}}}else if(L.visible){const B=v(E,L,A,M);E.onBeforeShadow(r,E,S,C,P,B,null),r.renderBufferDirect(C,null,P,B,E,null),E.onAfterShadow(r,E,S,C,P,B,null)}}const F=E.children;for(let P=0,L=F.length;P<L;P++)x(F[P],S,C,A,M)}function T(E){E.target.removeEventListener("dispose",T);for(const C in c){const A=c[C],M=E.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}const xE={[ah]:lh,[ch]:fh,[uh]:dh,[yo]:hh,[lh]:ah,[fh]:ch,[dh]:uh,[hh]:yo};function yE(r,e){function t(){let z=!1;const pe=new $e;let Q=null;const $=new $e(0,0,0,0);return{setMask:function(ge){Q!==ge&&!z&&(r.colorMask(ge,ge,ge,ge),Q=ge)},setLocked:function(ge){z=ge},setClear:function(ge,de,We,_t,ln){ln===!0&&(ge*=_t,de*=_t,We*=_t),pe.set(ge,de,We,_t),$.equals(pe)===!1&&(r.clearColor(ge,de,We,_t),$.copy(pe))},reset:function(){z=!1,Q=null,$.set(-1,0,0,0)}}}function n(){let z=!1,pe=!1,Q=null,$=null,ge=null;return{setReversed:function(de){if(pe!==de){const We=e.get("EXT_clip_control");pe?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const _t=ge;ge=null,this.setClear(_t)}pe=de},getReversed:function(){return pe},setTest:function(de){de?te(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(de){Q!==de&&!z&&(r.depthMask(de),Q=de)},setFunc:function(de){if(pe&&(de=xE[de]),$!==de){switch(de){case ah:r.depthFunc(r.NEVER);break;case lh:r.depthFunc(r.ALWAYS);break;case ch:r.depthFunc(r.LESS);break;case yo:r.depthFunc(r.LEQUAL);break;case uh:r.depthFunc(r.EQUAL);break;case hh:r.depthFunc(r.GEQUAL);break;case fh:r.depthFunc(r.GREATER);break;case dh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}$=de}},setLocked:function(de){z=de},setClear:function(de){ge!==de&&(pe&&(de=1-de),r.clearDepth(de),ge=de)},reset:function(){z=!1,Q=null,$=null,ge=null,pe=!1}}}function i(){let z=!1,pe=null,Q=null,$=null,ge=null,de=null,We=null,_t=null,ln=null;return{setTest:function(dt){z||(dt?te(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(dt){pe!==dt&&!z&&(r.stencilMask(dt),pe=dt)},setFunc:function(dt,ui,Ni){(Q!==dt||$!==ui||ge!==Ni)&&(r.stencilFunc(dt,ui,Ni),Q=dt,$=ui,ge=Ni)},setOp:function(dt,ui,Ni){(de!==dt||We!==ui||_t!==Ni)&&(r.stencilOp(dt,ui,Ni),de=dt,We=ui,_t=Ni)},setLocked:function(dt){z=dt},setClear:function(dt){ln!==dt&&(r.clearStencil(dt),ln=dt)},reset:function(){z=!1,pe=null,Q=null,$=null,ge=null,de=null,We=null,_t=null,ln=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],p=null,m=!1,g=null,_=null,y=null,v=null,x=null,T=null,E=null,S=new ze(0,0,0),C=0,A=!1,M=null,w=null,F=null,P=null,L=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=H>=1):k.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=H>=2);let j=null,ne={};const oe=r.getParameter(r.SCISSOR_BOX),fe=r.getParameter(r.VIEWPORT),xe=new $e().fromArray(oe),W=new $e().fromArray(fe);function K(z,pe,Q,$){const ge=new Uint8Array(4),de=r.createTexture();r.bindTexture(z,de),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let We=0;We<Q;We++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(pe,0,r.RGBA,1,1,$,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(pe+We,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return de}const se={};se[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(r.DEPTH_TEST),o.setFunc(yo),Oe(!1),Ne(Zd),te(r.CULL_FACE),N(Er);function te(z){u[z]!==!0&&(r.enable(z),u[z]=!0)}function ye(z){u[z]!==!1&&(r.disable(z),u[z]=!1)}function Ae(z,pe){return h[z]!==pe?(r.bindFramebuffer(z,pe),h[z]=pe,z===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=pe),z===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=pe),!0):!1}function be(z,pe){let Q=d,$=!1;if(z){Q=f.get(pe),Q===void 0&&(Q=[],f.set(pe,Q));const ge=z.textures;if(Q.length!==ge.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let de=0,We=ge.length;de<We;de++)Q[de]=r.COLOR_ATTACHMENT0+de;Q.length=ge.length,$=!0}}else Q[0]!==r.BACK&&(Q[0]=r.BACK,$=!0);$&&r.drawBuffers(Q)}function Ve(z){return p!==z?(r.useProgram(z),p=z,!0):!1}const Ue={[Jr]:r.FUNC_ADD,[gx]:r.FUNC_SUBTRACT,[_x]:r.FUNC_REVERSE_SUBTRACT};Ue[vx]=r.MIN,Ue[xx]=r.MAX;const Se={[yx]:r.ZERO,[Sx]:r.ONE,[Ax]:r.SRC_COLOR,[Aa]:r.SRC_ALPHA,[wx]:r.SRC_ALPHA_SATURATE,[Cx]:r.DST_COLOR,[Tx]:r.DST_ALPHA,[Mx]:r.ONE_MINUS_SRC_COLOR,[Ma]:r.ONE_MINUS_SRC_ALPHA,[bx]:r.ONE_MINUS_DST_COLOR,[Ex]:r.ONE_MINUS_DST_ALPHA,[Rx]:r.CONSTANT_COLOR,[Ix]:r.ONE_MINUS_CONSTANT_COLOR,[Px]:r.CONSTANT_ALPHA,[Dx]:r.ONE_MINUS_CONSTANT_ALPHA};function N(z,pe,Q,$,ge,de,We,_t,ln,dt){if(z===Er){m===!0&&(ye(r.BLEND),m=!1);return}if(m===!1&&(te(r.BLEND),m=!0),z!==qg){if(z!==g||dt!==A){if((_!==Jr||x!==Jr)&&(r.blendEquation(r.FUNC_ADD),_=Jr,x=Jr),dt)switch(z){case Cr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $d:r.blendFunc(r.ONE,r.ONE);break;case Jd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ep:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Cr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $d:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Jd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ep:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,v=null,T=null,E=null,S.set(0,0,0),C=0,g=z,A=dt}return}ge=ge||pe,de=de||Q,We=We||$,(pe!==_||ge!==x)&&(r.blendEquationSeparate(Ue[pe],Ue[ge]),_=pe,x=ge),(Q!==y||$!==v||de!==T||We!==E)&&(r.blendFuncSeparate(Se[Q],Se[$],Se[de],Se[We]),y=Q,v=$,T=de,E=We),(_t.equals(S)===!1||ln!==C)&&(r.blendColor(_t.r,_t.g,_t.b,ln),S.copy(_t),C=ln),g=z,A=!1}function Xe(z,pe){z.side===ti?ye(r.CULL_FACE):te(r.CULL_FACE);let Q=z.side===Dn;pe&&(Q=!Q),Oe(Q),z.blending===Cr&&z.transparent===!1?N(Er):N(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const $=z.stencilWrite;a.setTest($),$&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Je(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(z){M!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),M=z)}function Ne(z){z!==dx?(te(r.CULL_FACE),z!==w&&(z===Zd?r.cullFace(r.BACK):z===px?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),w=z}function Te(z){z!==F&&(O&&r.lineWidth(z),F=z)}function Je(z,pe,Q){z?(te(r.POLYGON_OFFSET_FILL),(P!==pe||L!==Q)&&(r.polygonOffset(pe,Q),P=pe,L=Q)):ye(r.POLYGON_OFFSET_FILL)}function Ie(z){z?te(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)}function D(z){z===void 0&&(z=r.TEXTURE0+B-1),j!==z&&(r.activeTexture(z),j=z)}function b(z,pe,Q){Q===void 0&&(j===null?Q=r.TEXTURE0+B-1:Q=j);let $=ne[Q];$===void 0&&($={type:void 0,texture:void 0},ne[Q]=$),($.type!==z||$.texture!==pe)&&(j!==Q&&(r.activeTexture(Q),j=Q),r.bindTexture(z,pe||se[z]),$.type=z,$.texture=pe)}function X(){const z=ne[j];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ee(){try{r.compressedTexImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{r.compressedTexImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{r.texSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{r.texStorage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{r.texStorage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function U(){try{r.texImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{r.texImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(z){xe.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),xe.copy(z))}function he(z){W.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),W.copy(z))}function He(z,pe){let Q=c.get(pe);Q===void 0&&(Q=new WeakMap,c.set(pe,Q));let $=Q.get(z);$===void 0&&($=r.getUniformBlockIndex(pe,z.name),Q.set(z,$))}function Ge(z,pe){const $=c.get(pe).get(z);l.get(pe)!==$&&(r.uniformBlockBinding(pe,$,z.__bindingPointIndex),l.set(pe,$))}function nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},j=null,ne={},h={},f=new WeakMap,d=[],p=null,m=!1,g=null,_=null,y=null,v=null,x=null,T=null,E=null,S=new ze(0,0,0),C=0,A=!1,M=null,w=null,F=null,P=null,L=null,xe.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:ye,bindFramebuffer:Ae,drawBuffers:be,useProgram:Ve,setBlending:N,setMaterial:Xe,setFlipSided:Oe,setCullFace:Ne,setLineWidth:Te,setPolygonOffset:Je,setScissorTest:Ie,activeTexture:D,bindTexture:b,unbindTexture:X,compressedTexImage2D:ee,compressedTexImage3D:re,texImage2D:U,texImage3D:ie,updateUBOMapping:He,uniformBlockBinding:Ge,texStorage2D:tt,texStorage3D:ae,texSubImage2D:J,texSubImage3D:Re,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ce,scissor:Ee,viewport:he,reset:nt}}function Jp(r,e,t,n){const i=SE(n);switch(t){case Zg:return r*e;case Jg:return r*e;case e0:return r*e*2;case t0:return r*e/i.components*i.byteLength;case Pc:return r*e/i.components*i.byteLength;case Uf:return r*e*2/i.components*i.byteLength;case Of:return r*e*2/i.components*i.byteLength;case $g:return r*e*3/i.components*i.byteLength;case xn:return r*e*4/i.components*i.byteLength;case co:return r*e*4/i.components*i.byteLength;case kl:case zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Vl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _h:case xh:return Math.max(r,16)*Math.max(e,8)/4;case gh:case vh:return Math.max(r,8)*Math.max(e,8)/2;case yh:case Sh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ah:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case wh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Gl:case Oh:case Nh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case n0:case kh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case zh:case Hh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function SE(r){switch(r){case Li:case Qg:return{byteLength:1,components:1};case Ea:case Kg:case Uo:return{byteLength:2,components:1};case Lf:case Bf:return{byteLength:2,components:4};case ii:case Ff:case ri:return{byteLength:4,components:1};case jg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function AE(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,b){return d?new OffscreenCanvas(D,b):Ca("canvas")}function m(D,b,X){let ee=1;const re=Ie(D);if((re.width>X||re.height>X)&&(ee=X/Math.max(re.width,re.height)),ee<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const J=Math.floor(ee*re.width),Re=Math.floor(ee*re.height);h===void 0&&(h=p(J,Re));const _e=b?p(J,Re):h;return _e.width=J,_e.height=Re,_e.getContext("2d").drawImage(D,0,0,J,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+J+"x"+Re+")."),_e}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),D;return D}function g(D){return D.generateMipmaps}function _(D){r.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(D,b,X,ee,re=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let J=b;if(b===r.RED&&(X===r.FLOAT&&(J=r.R32F),X===r.HALF_FLOAT&&(J=r.R16F),X===r.UNSIGNED_BYTE&&(J=r.R8)),b===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(J=r.R8UI),X===r.UNSIGNED_SHORT&&(J=r.R16UI),X===r.UNSIGNED_INT&&(J=r.R32UI),X===r.BYTE&&(J=r.R8I),X===r.SHORT&&(J=r.R16I),X===r.INT&&(J=r.R32I)),b===r.RG&&(X===r.FLOAT&&(J=r.RG32F),X===r.HALF_FLOAT&&(J=r.RG16F),X===r.UNSIGNED_BYTE&&(J=r.RG8)),b===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(J=r.RG8UI),X===r.UNSIGNED_SHORT&&(J=r.RG16UI),X===r.UNSIGNED_INT&&(J=r.RG32UI),X===r.BYTE&&(J=r.RG8I),X===r.SHORT&&(J=r.RG16I),X===r.INT&&(J=r.RG32I)),b===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(J=r.RGB8UI),X===r.UNSIGNED_SHORT&&(J=r.RGB16UI),X===r.UNSIGNED_INT&&(J=r.RGB32UI),X===r.BYTE&&(J=r.RGB8I),X===r.SHORT&&(J=r.RGB16I),X===r.INT&&(J=r.RGB32I)),b===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),X===r.UNSIGNED_INT&&(J=r.RGBA32UI),X===r.BYTE&&(J=r.RGBA8I),X===r.SHORT&&(J=r.RGBA16I),X===r.INT&&(J=r.RGBA32I)),b===r.RGB&&X===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),b===r.RGBA){const Re=re?Fc:Ke.getTransfer(ee);X===r.FLOAT&&(J=r.RGBA32F),X===r.HALF_FLOAT&&(J=r.RGBA16F),X===r.UNSIGNED_BYTE&&(J=Re===gt?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(D,b){let X;return D?b===null||b===ii||b===Mo?X=r.DEPTH24_STENCIL8:b===ri?X=r.DEPTH32F_STENCIL8:b===Ea&&(X=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ii||b===Mo?X=r.DEPTH_COMPONENT24:b===ri?X=r.DEPTH_COMPONENT32F:b===Ea&&(X=r.DEPTH_COMPONENT16),X}function T(D,b){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Qn&&D.minFilter!==bi?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function E(D){const b=D.target;b.removeEventListener("dispose",E),C(b),b.isVideoTexture&&u.delete(b)}function S(D){const b=D.target;b.removeEventListener("dispose",S),M(b)}function C(D){const b=n.get(D);if(b.__webglInit===void 0)return;const X=D.source,ee=f.get(X);if(ee){const re=ee[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&A(D),Object.keys(ee).length===0&&f.delete(X)}n.remove(D)}function A(D){const b=n.get(D);r.deleteTexture(b.__webglTexture);const X=D.source,ee=f.get(X);delete ee[b.__cacheKey],o.memory.textures--}function M(D){const b=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let re=0;re<b.__webglFramebuffer[ee].length;re++)r.deleteFramebuffer(b.__webglFramebuffer[ee][re]);else r.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)r.deleteFramebuffer(b.__webglFramebuffer[ee]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=D.textures;for(let ee=0,re=X.length;ee<re;ee++){const J=n.get(X[ee]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(X[ee])}n.remove(D)}let w=0;function F(){w=0}function P(){const D=w;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),w+=1,D}function L(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function B(D,b){const X=n.get(D);if(D.isVideoTexture&&Te(D),D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){const ee=D.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(X,D,b);return}}t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+b)}function O(D,b){const X=n.get(D);if(D.version>0&&X.__version!==D.version){W(X,D,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+b)}function H(D,b){const X=n.get(D);if(D.version>0&&X.__version!==D.version){W(X,D,b);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+b)}function k(D,b){const X=n.get(D);if(D.version>0&&X.__version!==D.version){K(X,D,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+b)}const j={[Ta]:r.REPEAT,[Ji]:r.CLAMP_TO_EDGE,[mh]:r.MIRRORED_REPEAT},ne={[Qn]:r.NEAREST,[Gx]:r.NEAREST_MIPMAP_NEAREST,[il]:r.NEAREST_MIPMAP_LINEAR,[bi]:r.LINEAR,[qc]:r.LINEAR_MIPMAP_NEAREST,[os]:r.LINEAR_MIPMAP_LINEAR},oe={[Qx]:r.NEVER,[ey]:r.ALWAYS,[Kx]:r.LESS,[i0]:r.LEQUAL,[jx]:r.EQUAL,[Jx]:r.GEQUAL,[Zx]:r.GREATER,[$x]:r.NOTEQUAL};function fe(D,b){if(b.type===ri&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===bi||b.magFilter===qc||b.magFilter===il||b.magFilter===os||b.minFilter===bi||b.minFilter===qc||b.minFilter===il||b.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,j[b.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,j[b.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,j[b.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,ne[b.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,ne[b.minFilter]),b.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,oe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qn||b.minFilter!==il&&b.minFilter!==os||b.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function xe(D,b){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",E));const ee=b.source;let re=f.get(ee);re===void 0&&(re={},f.set(ee,re));const J=L(b);if(J!==D.__cacheKey){re[J]===void 0&&(re[J]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[J].usedTimes++;const Re=re[D.__cacheKey];Re!==void 0&&(re[D.__cacheKey].usedTimes--,Re.usedTimes===0&&A(b)),D.__cacheKey=J,D.__webglTexture=re[J].texture}return X}function W(D,b,X){let ee=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=r.TEXTURE_3D);const re=xe(D,b),J=b.source;t.bindTexture(ee,D.__webglTexture,r.TEXTURE0+X);const Re=n.get(J);if(J.version!==Re.__version||re===!0){t.activeTexture(r.TEXTURE0+X);const _e=Ke.getPrimaries(Ke.workingColorSpace),Ce=b.colorSpace===yr?null:Ke.getPrimaries(b.colorSpace),tt=b.colorSpace===yr||_e===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ae=m(b.image,!1,i.maxTextureSize);ae=Je(b,ae);const U=s.convert(b.format,b.colorSpace),ie=s.convert(b.type);let Ee=v(b.internalFormat,U,ie,b.colorSpace,b.isVideoTexture);fe(ee,b);let he;const He=b.mipmaps,Ge=b.isVideoTexture!==!0,nt=Re.__version===void 0||re===!0,z=J.dataReady,pe=T(b,ae);if(b.isDepthTexture)Ee=x(b.format===To,b.type),nt&&(Ge?t.texStorage2D(r.TEXTURE_2D,1,Ee,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,Ee,ae.width,ae.height,0,U,ie,null));else if(b.isDataTexture)if(He.length>0){Ge&&nt&&t.texStorage2D(r.TEXTURE_2D,pe,Ee,He[0].width,He[0].height);for(let Q=0,$=He.length;Q<$;Q++)he=He[Q],Ge?z&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,he.width,he.height,U,ie,he.data):t.texImage2D(r.TEXTURE_2D,Q,Ee,he.width,he.height,0,U,ie,he.data);b.generateMipmaps=!1}else Ge?(nt&&t.texStorage2D(r.TEXTURE_2D,pe,Ee,ae.width,ae.height),z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae.width,ae.height,U,ie,ae.data)):t.texImage2D(r.TEXTURE_2D,0,Ee,ae.width,ae.height,0,U,ie,ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ge&&nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,Ee,He[0].width,He[0].height,ae.depth);for(let Q=0,$=He.length;Q<$;Q++)if(he=He[Q],b.format!==xn)if(U!==null)if(Ge){if(z)if(b.layerUpdates.size>0){const ge=Jp(he.width,he.height,b.format,b.type);for(const de of b.layerUpdates){const We=he.data.subarray(de*ge/he.data.BYTES_PER_ELEMENT,(de+1)*ge/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,de,he.width,he.height,1,U,We)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,ae.depth,U,he.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,Ee,he.width,he.height,ae.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?z&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,ae.depth,U,ie,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Q,Ee,he.width,he.height,ae.depth,0,U,ie,he.data)}else{Ge&&nt&&t.texStorage2D(r.TEXTURE_2D,pe,Ee,He[0].width,He[0].height);for(let Q=0,$=He.length;Q<$;Q++)he=He[Q],b.format!==xn?U!==null?Ge?z&&t.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,he.width,he.height,U,he.data):t.compressedTexImage2D(r.TEXTURE_2D,Q,Ee,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?z&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,he.width,he.height,U,ie,he.data):t.texImage2D(r.TEXTURE_2D,Q,Ee,he.width,he.height,0,U,ie,he.data)}else if(b.isDataArrayTexture)if(Ge){if(nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,Ee,ae.width,ae.height,ae.depth),z)if(b.layerUpdates.size>0){const Q=Jp(ae.width,ae.height,b.format,b.type);for(const $ of b.layerUpdates){const ge=ae.data.subarray($*Q/ae.data.BYTES_PER_ELEMENT,($+1)*Q/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,ae.width,ae.height,1,U,ie,ge)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,U,ie,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ee,ae.width,ae.height,ae.depth,0,U,ie,ae.data);else if(b.isData3DTexture)Ge?(nt&&t.texStorage3D(r.TEXTURE_3D,pe,Ee,ae.width,ae.height,ae.depth),z&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,U,ie,ae.data)):t.texImage3D(r.TEXTURE_3D,0,Ee,ae.width,ae.height,ae.depth,0,U,ie,ae.data);else if(b.isFramebufferTexture){if(nt)if(Ge)t.texStorage2D(r.TEXTURE_2D,pe,Ee,ae.width,ae.height);else{let Q=ae.width,$=ae.height;for(let ge=0;ge<pe;ge++)t.texImage2D(r.TEXTURE_2D,ge,Ee,Q,$,0,U,ie,null),Q>>=1,$>>=1}}else if(He.length>0){if(Ge&&nt){const Q=Ie(He[0]);t.texStorage2D(r.TEXTURE_2D,pe,Ee,Q.width,Q.height)}for(let Q=0,$=He.length;Q<$;Q++)he=He[Q],Ge?z&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,U,ie,he):t.texImage2D(r.TEXTURE_2D,Q,Ee,U,ie,he);b.generateMipmaps=!1}else if(Ge){if(nt){const Q=Ie(ae);t.texStorage2D(r.TEXTURE_2D,pe,Ee,Q.width,Q.height)}z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,U,ie,ae)}else t.texImage2D(r.TEXTURE_2D,0,Ee,U,ie,ae);g(b)&&_(ee),Re.__version=J.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function K(D,b,X){if(b.image.length!==6)return;const ee=xe(D,b),re=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+X);const J=n.get(re);if(re.version!==J.__version||ee===!0){t.activeTexture(r.TEXTURE0+X);const Re=Ke.getPrimaries(Ke.workingColorSpace),_e=b.colorSpace===yr?null:Ke.getPrimaries(b.colorSpace),Ce=b.colorSpace===yr||Re===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const tt=b.isCompressedTexture||b.image[0].isCompressedTexture,ae=b.image[0]&&b.image[0].isDataTexture,U=[];for(let $=0;$<6;$++)!tt&&!ae?U[$]=m(b.image[$],!0,i.maxCubemapSize):U[$]=ae?b.image[$].image:b.image[$],U[$]=Je(b,U[$]);const ie=U[0],Ee=s.convert(b.format,b.colorSpace),he=s.convert(b.type),He=v(b.internalFormat,Ee,he,b.colorSpace),Ge=b.isVideoTexture!==!0,nt=J.__version===void 0||ee===!0,z=re.dataReady;let pe=T(b,ie);fe(r.TEXTURE_CUBE_MAP,b);let Q;if(tt){Ge&&nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,He,ie.width,ie.height);for(let $=0;$<6;$++){Q=U[$].mipmaps;for(let ge=0;ge<Q.length;ge++){const de=Q[ge];b.format!==xn?Ee!==null?Ge?z&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,0,0,de.width,de.height,Ee,de.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,He,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,0,0,de.width,de.height,Ee,he,de.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,He,de.width,de.height,0,Ee,he,de.data)}}}else{if(Q=b.mipmaps,Ge&&nt){Q.length>0&&pe++;const $=Ie(U[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,He,$.width,$.height)}for(let $=0;$<6;$++)if(ae){Ge?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,U[$].width,U[$].height,Ee,he,U[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,U[$].width,U[$].height,0,Ee,he,U[$].data);for(let ge=0;ge<Q.length;ge++){const We=Q[ge].image[$].image;Ge?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,0,0,We.width,We.height,Ee,he,We.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,He,We.width,We.height,0,Ee,he,We.data)}}else{Ge?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ee,he,U[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,Ee,he,U[$]);for(let ge=0;ge<Q.length;ge++){const de=Q[ge];Ge?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,0,0,Ee,he,de.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,He,Ee,he,de.image[$])}}}g(b)&&_(r.TEXTURE_CUBE_MAP),J.__version=re.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function se(D,b,X,ee,re,J){const Re=s.convert(X.format,X.colorSpace),_e=s.convert(X.type),Ce=v(X.internalFormat,Re,_e,X.colorSpace),tt=n.get(b),ae=n.get(X);if(ae.__renderTarget=b,!tt.__hasExternalTextures){const U=Math.max(1,b.width>>J),ie=Math.max(1,b.height>>J);re===r.TEXTURE_3D||re===r.TEXTURE_2D_ARRAY?t.texImage3D(re,J,Ce,U,ie,b.depth,0,Re,_e,null):t.texImage2D(re,J,Ce,U,ie,0,Re,_e,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),Ne(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,re,ae.__webglTexture,0,Oe(b)):(re===r.TEXTURE_2D||re>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,re,ae.__webglTexture,J),t.bindFramebuffer(r.FRAMEBUFFER,null)}function te(D,b,X){if(r.bindRenderbuffer(r.RENDERBUFFER,D),b.depthBuffer){const ee=b.depthTexture,re=ee&&ee.isDepthTexture?ee.type:null,J=x(b.stencilBuffer,re),Re=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=Oe(b);Ne(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,J,b.width,b.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,J,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,J,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Re,r.RENDERBUFFER,D)}else{const ee=b.textures;for(let re=0;re<ee.length;re++){const J=ee[re],Re=s.convert(J.format,J.colorSpace),_e=s.convert(J.type),Ce=v(J.internalFormat,Re,_e,J.colorSpace),tt=Oe(b);X&&Ne(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Ce,b.width,b.height):Ne(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,Ce,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ye(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(b.depthTexture);ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);const re=ee.__webglTexture,J=Oe(b);if(b.depthTexture.format===hs)Ne(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0);else if(b.depthTexture.format===To)Ne(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ae(D){const b=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const ee=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){const re=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",re)};ee.addEventListener("dispose",re),b.__depthDisposeCallback=re}b.__boundDepthTexture=ee}if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ye(b.__webglFramebuffer,D)}else if(X){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=r.createRenderbuffer(),te(b.__webglDepthbuffer[ee],D,!1);else{const re=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,J)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),te(b.__webglDepthbuffer,D,!1);else{const ee=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,re)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function be(D,b,X){const ee=n.get(D);b!==void 0&&se(ee.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Ae(D)}function Ve(D){const b=D.texture,X=n.get(D),ee=n.get(b);D.addEventListener("dispose",S);const re=D.textures,J=D.isWebGLCubeRenderTarget===!0,Re=re.length>1;if(Re||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=b.version,o.memory.textures++),J){X.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[_e]=[];for(let Ce=0;Ce<b.mipmaps.length;Ce++)X.__webglFramebuffer[_e][Ce]=r.createFramebuffer()}else X.__webglFramebuffer[_e]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let _e=0;_e<b.mipmaps.length;_e++)X.__webglFramebuffer[_e]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(Re)for(let _e=0,Ce=re.length;_e<Ce;_e++){const tt=n.get(re[_e]);tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&Ne(D)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let _e=0;_e<re.length;_e++){const Ce=re[_e];X.__webglColorRenderbuffer[_e]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[_e]);const tt=s.convert(Ce.format,Ce.colorSpace),ae=s.convert(Ce.type),U=v(Ce.internalFormat,tt,ae,Ce.colorSpace,D.isXRRenderTarget===!0),ie=Oe(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,U,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,X.__webglColorRenderbuffer[_e])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),te(X.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),fe(r.TEXTURE_CUBE_MAP,b);for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ce=0;Ce<b.mipmaps.length;Ce++)se(X.__webglFramebuffer[_e][Ce],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce);else se(X.__webglFramebuffer[_e],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);g(b)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let _e=0,Ce=re.length;_e<Ce;_e++){const tt=re[_e],ae=n.get(tt);t.bindTexture(r.TEXTURE_2D,ae.__webglTexture),fe(r.TEXTURE_2D,tt),se(X.__webglFramebuffer,D,tt,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,0),g(tt)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let _e=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_e=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(_e,ee.__webglTexture),fe(_e,b),b.mipmaps&&b.mipmaps.length>0)for(let Ce=0;Ce<b.mipmaps.length;Ce++)se(X.__webglFramebuffer[Ce],D,b,r.COLOR_ATTACHMENT0,_e,Ce);else se(X.__webglFramebuffer,D,b,r.COLOR_ATTACHMENT0,_e,0);g(b)&&_(_e),t.unbindTexture()}D.depthBuffer&&Ae(D)}function Ue(D){const b=D.textures;for(let X=0,ee=b.length;X<ee;X++){const re=b[X];if(g(re)){const J=y(D),Re=n.get(re).__webglTexture;t.bindTexture(J,Re),_(J),t.unbindTexture()}}}const Se=[],N=[];function Xe(D){if(D.samples>0){if(Ne(D)===!1){const b=D.textures,X=D.width,ee=D.height;let re=r.COLOR_BUFFER_BIT;const J=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=n.get(D),_e=b.length>1;if(_e)for(let Ce=0;Ce<b.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(re|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(re|=r.STENCIL_BUFFER_BIT)),_e){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);const tt=n.get(b[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,tt,0)}r.blitFramebuffer(0,0,X,ee,0,0,X,ee,re,r.NEAREST),l===!0&&(Se.length=0,N.length=0,Se.push(r.COLOR_ATTACHMENT0+Ce),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Se.push(J),N.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),_e)for(let Ce=0;Ce<b.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);const tt=n.get(b[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,tt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const b=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Oe(D){return Math.min(i.maxSamples,D.samples)}function Ne(D){const b=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Te(D){const b=o.render.frame;u.get(D)!==b&&(u.set(D,b),D.update())}function Je(D,b){const X=D.colorSpace,ee=D.format,re=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==Oo&&X!==yr&&(Ke.getTransfer(X)===gt?(ee!==xn||re!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function Ie(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=F,this.setTexture2D=B,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=k,this.rebindTextures=be,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Ne}function _0(r,e){function t(n,i=yr){let s;const o=Ke.getTransfer(i);if(n===Li)return r.UNSIGNED_BYTE;if(n===Lf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Bf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===jg)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Qg)return r.BYTE;if(n===Kg)return r.SHORT;if(n===Ea)return r.UNSIGNED_SHORT;if(n===Ff)return r.INT;if(n===ii)return r.UNSIGNED_INT;if(n===ri)return r.FLOAT;if(n===Uo)return r.HALF_FLOAT;if(n===Zg)return r.ALPHA;if(n===$g)return r.RGB;if(n===xn)return r.RGBA;if(n===Jg)return r.LUMINANCE;if(n===e0)return r.LUMINANCE_ALPHA;if(n===hs)return r.DEPTH_COMPONENT;if(n===To)return r.DEPTH_STENCIL;if(n===t0)return r.RED;if(n===Pc)return r.RED_INTEGER;if(n===Uf)return r.RG;if(n===Of)return r.RG_INTEGER;if(n===co)return r.RGBA_INTEGER;if(n===kl||n===zl||n===Hl||n===Vl)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===kl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===kl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gh||n===_h||n===vh||n===xh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_h)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yh||n===Sh||n===Ah)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yh||n===Sh)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ah)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mh||n===Th||n===Eh||n===Ch||n===bh||n===wh||n===Rh||n===Ih||n===Ph||n===Dh||n===Fh||n===Lh||n===Bh||n===Uh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Mh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Th)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ch)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ih)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ph)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gl||n===Oh||n===Nh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Gl)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===n0||n===kh||n===zh||n===Hh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Gl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===kh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class ME extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class as extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TE={type:"move"};class yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new as,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new as,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new as,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,n),_=this._getHandJoint(c,m);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TE)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new as;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const EE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CE=`
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

}`;class bE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new on,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kn({vertexShader:EE,fragmentShader:CE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new bo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wE extends Ss{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null;const m=new bE,g=t.getContextAttributes();let _=null,y=null;const v=[],x=[],T=new ve;let E=null;const S=new _n;S.viewport=new $e;const C=new _n;C.viewport=new $e;const A=[S,C],M=new ME;let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=v[W];return K===void 0&&(K=new yu,v[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=v[W];return K===void 0&&(K=new yu,v[W]=K),K.getGripSpace()},this.getHand=function(W){let K=v[W];return K===void 0&&(K=new yu,v[W]=K),K.getHandSpace()};function P(W){const K=x.indexOf(W.inputSource);if(K===-1)return;const se=v[K];se!==void 0&&(se.update(W.inputSource,W.frame,c||o),se.dispatchEvent({type:W.type,data:W.inputSource}))}function L(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",B);for(let W=0;W<v.length;W++){const K=x[W];K!==null&&(x[W]=null,v[W].disconnect(K))}w=null,F=null,m.reset(),e.setRenderTarget(_),d=null,f=null,h=null,i=null,y=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",L),i.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0){const K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Fr(d.framebufferWidth,d.framebufferHeight,{format:xn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,se=null,te=null;g.depth&&(te=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?To:hs,se=g.stencil?Mo:ii);const ye={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(ye),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Fr(f.textureWidth,f.textureHeight,{format:xn,type:Li,depthTexture:new Gf(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),xe.setContext(i),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(W){for(let K=0;K<W.removed.length;K++){const se=W.removed[K],te=x.indexOf(se);te>=0&&(x[te]=null,v[te].disconnect(se))}for(let K=0;K<W.added.length;K++){const se=W.added[K];let te=x.indexOf(se);if(te===-1){for(let Ae=0;Ae<v.length;Ae++)if(Ae>=x.length){x.push(se),te=Ae;break}else if(x[Ae]===null){x[Ae]=se,te=Ae;break}if(te===-1)break}const ye=v[te];ye&&ye.connect(se)}}const O=new I,H=new I;function k(W,K,se){O.setFromMatrixPosition(K.matrixWorld),H.setFromMatrixPosition(se.matrixWorld);const te=O.distanceTo(H),ye=K.projectionMatrix.elements,Ae=se.projectionMatrix.elements,be=ye[14]/(ye[10]-1),Ve=ye[14]/(ye[10]+1),Ue=(ye[9]+1)/ye[5],Se=(ye[9]-1)/ye[5],N=(ye[8]-1)/ye[0],Xe=(Ae[8]+1)/Ae[0],Oe=be*N,Ne=be*Xe,Te=te/(-N+Xe),Je=Te*-N;if(K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Je),W.translateZ(Te),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ye[10]===-1)W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ie=be+Te,D=Ve+Te,b=Oe-Je,X=Ne+(te-Je),ee=Ue*Ve/D*Ie,re=Se*Ve/D*Ie;W.projectionMatrix.makePerspective(b,X,ee,re,Ie,D),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function j(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let K=W.near,se=W.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(se=m.depthFar)),M.near=C.near=S.near=K,M.far=C.far=S.far=se,(w!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,F=M.far),S.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,M.layers.mask=S.layers.mask|C.layers.mask;const te=W.parent,ye=M.cameras;j(M,te);for(let Ae=0;Ae<ye.length;Ae++)j(ye[Ae],te);ye.length===2?k(M,S,C):M.projectionMatrix.copy(S.projectionMatrix),ne(W,M,te)};function ne(W,K,se){se===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(se.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Eo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(M)};let oe=null;function fe(W,K){if(u=K.getViewerPose(c||o),p=K,u!==null){const se=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let te=!1;se.length!==M.cameras.length&&(M.cameras.length=0,te=!0);for(let Ae=0;Ae<se.length;Ae++){const be=se[Ae];let Ve=null;if(d!==null)Ve=d.getViewport(be);else{const Se=h.getViewSubImage(f,be);Ve=Se.viewport,Ae===0&&(e.setRenderTargetTextures(y,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(y))}let Ue=A[Ae];Ue===void 0&&(Ue=new _n,Ue.layers.enable(Ae),Ue.viewport=new $e,A[Ae]=Ue),Ue.matrix.fromArray(be.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(be.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Ae===0&&(M.matrix.copy(Ue.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),te===!0&&M.cameras.push(Ue)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const Ae=h.getDepthInformation(se[0]);Ae&&Ae.isValid&&Ae.texture&&m.init(e,Ae,i.renderState)}}for(let se=0;se<v.length;se++){const te=x[se],ye=v[se];te!==null&&ye!==void 0&&ye.update(te,K,c||o)}oe&&oe(W,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),p=null}const xe=new f0;xe.setAnimationLoop(fe),this.setAnimationLoop=function(W){oe=W},this.dispose=function(){}}}const Qr=new Zt,RE=new ue;function IE(r,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function n(g,_){_.color.getRGB(g.fogColor.value,c0(r)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function i(g,_,y,v,x){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(g,_):_.isMeshToonMaterial?(s(g,_),h(g,_)):_.isMeshPhongMaterial?(s(g,_),u(g,_)):_.isMeshStandardMaterial?(s(g,_),f(g,_),_.isMeshPhysicalMaterial&&d(g,_,x)):_.isMeshMatcapMaterial?(s(g,_),p(g,_)):_.isMeshDepthMaterial?s(g,_):_.isMeshDistanceMaterial?(s(g,_),m(g,_)):_.isMeshNormalMaterial?s(g,_):_.isLineBasicMaterial?(o(g,_),_.isLineDashedMaterial&&a(g,_)):_.isPointsMaterial?l(g,_,y,v):_.isSpriteMaterial?c(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===Dn&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===Dn&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const y=e.get(_),v=y.envMap,x=y.envMapRotation;v&&(g.envMap.value=v,Qr.copy(x),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),g.envMapRotation.value.setFromMatrix4(RE.makeRotationFromEuler(Qr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function o(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function a(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function l(g,_,y,v){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*y,g.scale.value=v*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function c(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function u(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function h(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function f(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function d(g,_,y){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Dn&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,_){_.matcap&&(g.matcap.value=_.matcap)}function m(g,_){const y=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function PE(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=i[y.id];x===void 0&&(p(y),x=u(y),i[y.id]=x,y.addEventListener("dispose",g));const T=v.program;n.updateUBOMapping(y,T);const E=e.render.frame;s[y.id]!==E&&(f(y),s[y.id]=E)}function u(y){const v=h();y.__bindingPointIndex=v;const x=r.createBuffer(),T=y.__size,E=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,T,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=i[y.id],x=y.uniforms,T=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let E=0,S=x.length;E<S;E++){const C=Array.isArray(x[E])?x[E]:[x[E]];for(let A=0,M=C.length;A<M;A++){const w=C[A];if(d(w,E,A,T)===!0){const F=w.__offset,P=Array.isArray(w.value)?w.value:[w.value];let L=0;for(let B=0;B<P.length;B++){const O=P[B],H=m(O);typeof O=="number"||typeof O=="boolean"?(w.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,F+L,w.__data)):O.isMatrix3?(w.__data[0]=O.elements[0],w.__data[1]=O.elements[1],w.__data[2]=O.elements[2],w.__data[3]=0,w.__data[4]=O.elements[3],w.__data[5]=O.elements[4],w.__data[6]=O.elements[5],w.__data[7]=0,w.__data[8]=O.elements[6],w.__data[9]=O.elements[7],w.__data[10]=O.elements[8],w.__data[11]=0):(O.toArray(w.__data,L),L+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,v,x,T){const E=y.value,S=v+"_"+x;if(T[S]===void 0)return typeof E=="number"||typeof E=="boolean"?T[S]=E:T[S]=E.clone(),!0;{const C=T[S];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return T[S]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function p(y){const v=y.uniforms;let x=0;const T=16;for(let S=0,C=v.length;S<C;S++){const A=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,w=A.length;M<w;M++){const F=A[M],P=Array.isArray(F.value)?F.value:[F.value];for(let L=0,B=P.length;L<B;L++){const O=P[L],H=m(O),k=x%T,j=k%H.boundary,ne=k+j;x+=j,ne!==0&&T-ne<H.storage&&(x+=T-ne),F.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=H.storage}}}const E=x%T;return E>0&&(x+=T-E),y.__size=x,y.__cache={},this}function m(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){const v=y.target;v.removeEventListener("dispose",g);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function _(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}class v0{constructor(e={}){const{canvas:t=vy(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),m=new Int32Array(4);let g=null,_=null;const y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=br,this.toneMappingExposure=1;const x=this;let T=!1,E=0,S=0,C=null,A=-1,M=null;const w=new $e,F=new $e;let P=null;const L=new ze(0);let B=0,O=t.width,H=t.height,k=1,j=null,ne=null;const oe=new $e(0,0,O,H),fe=new $e(0,0,O,H);let xe=!1;const W=new Hf;let K=!1,se=!1;const te=new ue,ye=new ue,Ae=new I,be=new $e,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function Se(){return C===null?k:1}let N=n;function Xe(R,V){return t.getContext(R,V)}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Df}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",de,!1),N===null){const V="webgl2";if(N=Xe(V,R),N===null)throw Xe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Oe,Ne,Te,Je,Ie,D,b,X,ee,re,J,Re,_e,Ce,tt,ae,U,ie,Ee,he,He,Ge,nt,z;function pe(){Oe=new NM(N),Oe.init(),Ge=new _0(N,Oe),Ne=new DM(N,Oe,e,Ge),Te=new yE(N,Oe),Ne.reverseDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),Je=new HM(N),Ie=new sE,D=new AE(N,Oe,Te,Ie,Ne,Ge,Je),b=new LM(x),X=new OM(x),ee=new Qy(N),nt=new IM(N,ee),re=new kM(N,ee,Je,nt),J=new GM(N,re,ee,Je),Ee=new VM(N,Ne,D),ae=new FM(Ie),Re=new rE(x,b,X,Oe,Ne,nt,ae),_e=new IE(x,Ie),Ce=new aE,tt=new dE(Oe),ie=new RM(x,b,X,Te,J,d,l),U=new vE(x,J,Ne),z=new PE(N,Je,Ne,Te),he=new PM(N,Oe,Je),He=new zM(N,Oe,Je),Je.programs=Re.programs,x.capabilities=Ne,x.extensions=Oe,x.properties=Ie,x.renderLists=Ce,x.shadowMap=U,x.state=Te,x.info=Je}pe();const Q=new wE(x,N);this.xr=Q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=Oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize(O,H,!1))},this.getSize=function(R){return R.set(O,H)},this.setSize=function(R,V,q=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,H=V,t.width=Math.floor(R*k),t.height=Math.floor(V*k),q===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(O*k,H*k).floor()},this.setDrawingBufferSize=function(R,V,q){O=R,H=V,k=q,t.width=Math.floor(R*q),t.height=Math.floor(V*q),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(oe)},this.setViewport=function(R,V,q,Y){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,V,q,Y),Te.viewport(w.copy(oe).multiplyScalar(k).round())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,V,q,Y){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,V,q,Y),Te.scissor(F.copy(fe).multiplyScalar(k).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(R){Te.setScissorTest(xe=R)},this.setOpaqueSort=function(R){j=R},this.setTransparentSort=function(R){ne=R},this.getClearColor=function(R){return R.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(R=!0,V=!0,q=!0){let Y=0;if(R){let G=!1;if(C!==null){const ce=C.texture.format;G=ce===co||ce===Of||ce===Pc}if(G){const ce=C.texture.type,Me=ce===Li||ce===ii||ce===Ea||ce===Mo||ce===Lf||ce===Bf,Pe=ie.getClearColor(),De=ie.getClearAlpha(),qe=Pe.r,Ye=Pe.g,Fe=Pe.b;Me?(p[0]=qe,p[1]=Ye,p[2]=Fe,p[3]=De,N.clearBufferuiv(N.COLOR,0,p)):(m[0]=qe,m[1]=Ye,m[2]=Fe,m[3]=De,N.clearBufferiv(N.COLOR,0,m))}else Y|=N.COLOR_BUFFER_BIT}V&&(Y|=N.DEPTH_BUFFER_BIT),q&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ce.dispose(),tt.dispose(),Ie.dispose(),b.dispose(),X.dispose(),J.dispose(),nt.dispose(),z.dispose(),Re.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Dd),Q.removeEventListener("sessionend",Fd),Vr.stop()};function $(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=Je.autoReset,V=U.enabled,q=U.autoUpdate,Y=U.needsUpdate,G=U.type;pe(),Je.autoReset=R,U.enabled=V,U.autoUpdate=q,U.needsUpdate=Y,U.type=G}function de(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function We(R){const V=R.target;V.removeEventListener("dispose",We),_t(V)}function _t(R){ln(R),Ie.remove(R)}function ln(R){const V=Ie.get(R).programs;V!==void 0&&(V.forEach(function(q){Re.releaseProgram(q)}),R.isShaderMaterial&&Re.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,q,Y,G,ce){V===null&&(V=Ve);const Me=G.isMesh&&G.matrixWorld.determinant()<0,Pe=Y_(R,V,q,Y,G);Te.setMaterial(Y,Me);let De=q.index,qe=1;if(Y.wireframe===!0){if(De=re.getWireframeAttribute(q),De===void 0)return;qe=2}const Ye=q.drawRange,Fe=q.attributes.position;let st=Ye.start*qe,yt=(Ye.start+Ye.count)*qe;ce!==null&&(st=Math.max(st,ce.start*qe),yt=Math.min(yt,(ce.start+ce.count)*qe)),De!==null?(st=Math.max(st,0),yt=Math.min(yt,De.count)):Fe!=null&&(st=Math.max(st,0),yt=Math.min(yt,Fe.count));const Mt=yt-st;if(Mt<0||Mt===1/0)return;nt.setup(G,Y,Pe,q,De);let In,lt=he;if(De!==null&&(In=ee.get(De),lt=He,lt.setIndex(In)),G.isMesh)Y.wireframe===!0?(Te.setLineWidth(Y.wireframeLinewidth*Se()),lt.setMode(N.LINES)):lt.setMode(N.TRIANGLES);else if(G.isLine){let Be=Y.linewidth;Be===void 0&&(Be=1),Te.setLineWidth(Be*Se()),G.isLineSegments?lt.setMode(N.LINES):G.isLineLoop?lt.setMode(N.LINE_LOOP):lt.setMode(N.LINE_STRIP)}else G.isPoints?lt.setMode(N.POINTS):G.isSprite&&lt.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)lt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Be=G._multiDrawStarts,ki=G._multiDrawCounts,ct=G._multiDrawCount,hi=De?ee.get(De).bytesPerElement:1,Ms=Ie.get(Y).currentProgram.getUniforms();for(let kn=0;kn<ct;kn++)Ms.setValue(N,"_gl_DrawID",kn),lt.render(Be[kn]/hi,ki[kn])}else if(G.isInstancedMesh)lt.renderInstances(st,Mt,G.count);else if(q.isInstancedBufferGeometry){const Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ki=Math.min(q.instanceCount,Be);lt.renderInstances(st,Mt,ki)}else lt.render(st,Mt)};function dt(R,V,q){R.transparent===!0&&R.side===ti&&R.forceSinglePass===!1?(R.side=Dn,R.needsUpdate=!0,el(R,V,q),R.side=Fi,R.needsUpdate=!0,el(R,V,q),R.side=ti):el(R,V,q)}this.compile=function(R,V,q=null){q===null&&(q=R),_=tt.get(q),_.init(V),v.push(_),q.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),R!==q&&R.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights();const Y=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ce=G.material;if(ce)if(Array.isArray(ce))for(let Me=0;Me<ce.length;Me++){const Pe=ce[Me];dt(Pe,q,G),Y.add(Pe)}else dt(ce,q,G),Y.add(ce)}),v.pop(),_=null,Y},this.compileAsync=function(R,V,q=null){const Y=this.compile(R,V,q);return new Promise(G=>{function ce(){if(Y.forEach(function(Me){Ie.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){G(R);return}setTimeout(ce,10)}Oe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ui=null;function Ni(R){ui&&ui(R)}function Dd(){Vr.stop()}function Fd(){Vr.start()}const Vr=new f0;Vr.setAnimationLoop(Ni),typeof self<"u"&&Vr.setContext(self),this.setAnimationLoop=function(R){ui=R,Q.setAnimationLoop(R),R===null?Vr.stop():Vr.start()},Q.addEventListener("sessionstart",Dd),Q.addEventListener("sessionend",Fd),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(V),V=Q.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,V,C),_=tt.get(R,v.length),_.init(V),v.push(_),ye.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),W.setFromProjectionMatrix(ye),se=this.localClippingEnabled,K=ae.init(this.clippingPlanes,se),g=Ce.get(R,y.length),g.init(),y.push(g),Q.enabled===!0&&Q.isPresenting===!0){const ce=x.xr.getDepthSensingMesh();ce!==null&&Wc(ce,V,-1/0,x.sortObjects)}Wc(R,V,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(j,ne),Ue=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Ue&&ie.addToRenderList(g,R),this.info.render.frame++,K===!0&&ae.beginShadows();const q=_.state.shadowsArray;U.render(q,R,V),K===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,G=g.transmissive;if(_.setupLights(),V.isArrayCamera){const ce=V.cameras;if(G.length>0)for(let Me=0,Pe=ce.length;Me<Pe;Me++){const De=ce[Me];Bd(Y,G,R,De)}Ue&&ie.render(R);for(let Me=0,Pe=ce.length;Me<Pe;Me++){const De=ce[Me];Ld(g,R,De,De.viewport)}}else G.length>0&&Bd(Y,G,R,V),Ue&&ie.render(R),Ld(g,R,V);C!==null&&(D.updateMultisampleRenderTarget(C),D.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(x,R,V),nt.resetDefaultState(),A=-1,M=null,v.pop(),v.length>0?(_=v[v.length-1],K===!0&&ae.setGlobalState(x.clippingPlanes,_.state.camera)):_=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Wc(R,V,q,Y){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||W.intersectsSprite(R)){Y&&be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ye);const Me=J.update(R),Pe=R.material;Pe.visible&&g.push(R,Me,Pe,q,be.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||W.intersectsObject(R))){const Me=J.update(R),Pe=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),be.copy(R.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),be.copy(Me.boundingSphere.center)),be.applyMatrix4(R.matrixWorld).applyMatrix4(ye)),Array.isArray(Pe)){const De=Me.groups;for(let qe=0,Ye=De.length;qe<Ye;qe++){const Fe=De[qe],st=Pe[Fe.materialIndex];st&&st.visible&&g.push(R,Me,st,q,be.z,Fe)}}else Pe.visible&&g.push(R,Me,Pe,q,be.z,null)}}const ce=R.children;for(let Me=0,Pe=ce.length;Me<Pe;Me++)Wc(ce[Me],V,q,Y)}function Ld(R,V,q,Y){const G=R.opaque,ce=R.transmissive,Me=R.transparent;_.setupLightsView(q),K===!0&&ae.setGlobalState(x.clippingPlanes,q),Y&&Te.viewport(w.copy(Y)),G.length>0&&Ja(G,V,q),ce.length>0&&Ja(ce,V,q),Me.length>0&&Ja(Me,V,q),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Bd(R,V,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Y.id]===void 0&&(_.state.transmissionRenderTarget[Y.id]=new Fr(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Uo:Li,minFilter:os,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ce=_.state.transmissionRenderTarget[Y.id],Me=Y.viewport||w;ce.setSize(Me.z,Me.w);const Pe=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(L),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),Ue&&ie.render(q);const De=x.toneMapping;x.toneMapping=br;const qe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),_.setupLightsView(Y),K===!0&&ae.setGlobalState(x.clippingPlanes,Y),Ja(R,q,Y),D.updateMultisampleRenderTarget(ce),D.updateRenderTargetMipmap(ce),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Fe=0,st=V.length;Fe<st;Fe++){const yt=V[Fe],Mt=yt.object,In=yt.geometry,lt=yt.material,Be=yt.group;if(lt.side===ti&&Mt.layers.test(Y.layers)){const ki=lt.side;lt.side=Dn,lt.needsUpdate=!0,Ud(Mt,q,Y,In,lt,Be),lt.side=ki,lt.needsUpdate=!0,Ye=!0}}Ye===!0&&(D.updateMultisampleRenderTarget(ce),D.updateRenderTargetMipmap(ce))}x.setRenderTarget(Pe),x.setClearColor(L,B),qe!==void 0&&(Y.viewport=qe),x.toneMapping=De}function Ja(R,V,q){const Y=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ce=R.length;G<ce;G++){const Me=R[G],Pe=Me.object,De=Me.geometry,qe=Y===null?Me.material:Y,Ye=Me.group;Pe.layers.test(q.layers)&&Ud(Pe,V,q,De,qe,Ye)}}function Ud(R,V,q,Y,G,ce){R.onBeforeRender(x,V,q,Y,G,ce),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(x,V,q,Y,R,ce),G.transparent===!0&&G.side===ti&&G.forceSinglePass===!1?(G.side=Dn,G.needsUpdate=!0,x.renderBufferDirect(q,V,Y,G,R,ce),G.side=Fi,G.needsUpdate=!0,x.renderBufferDirect(q,V,Y,G,R,ce),G.side=ti):x.renderBufferDirect(q,V,Y,G,R,ce),R.onAfterRender(x,V,q,Y,G,ce)}function el(R,V,q){V.isScene!==!0&&(V=Ve);const Y=Ie.get(R),G=_.state.lights,ce=_.state.shadowsArray,Me=G.state.version,Pe=Re.getParameters(R,G.state,ce,V,q),De=Re.getProgramCacheKey(Pe);let qe=Y.programs;Y.environment=R.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(R.isMeshStandardMaterial?X:b).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",We),qe=new Map,Y.programs=qe);let Ye=qe.get(De);if(Ye!==void 0){if(Y.currentProgram===Ye&&Y.lightsStateVersion===Me)return Nd(R,Pe),Ye}else Pe.uniforms=Re.getUniforms(R),R.onBeforeCompile(Pe,x),Ye=Re.acquireProgram(Pe,De),qe.set(De,Ye),Y.uniforms=Pe.uniforms;const Fe=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Fe.clippingPlanes=ae.uniform),Nd(R,Pe),Y.needsLights=K_(R),Y.lightsStateVersion=Me,Y.needsLights&&(Fe.ambientLightColor.value=G.state.ambient,Fe.lightProbe.value=G.state.probe,Fe.directionalLights.value=G.state.directional,Fe.directionalLightShadows.value=G.state.directionalShadow,Fe.spotLights.value=G.state.spot,Fe.spotLightShadows.value=G.state.spotShadow,Fe.rectAreaLights.value=G.state.rectArea,Fe.ltc_1.value=G.state.rectAreaLTC1,Fe.ltc_2.value=G.state.rectAreaLTC2,Fe.pointLights.value=G.state.point,Fe.pointLightShadows.value=G.state.pointShadow,Fe.hemisphereLights.value=G.state.hemi,Fe.directionalShadowMap.value=G.state.directionalShadowMap,Fe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Fe.spotShadowMap.value=G.state.spotShadowMap,Fe.spotLightMatrix.value=G.state.spotLightMatrix,Fe.spotLightMap.value=G.state.spotLightMap,Fe.pointShadowMap.value=G.state.pointShadowMap,Fe.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Ye,Y.uniformsList=null,Ye}function Od(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Wl.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Nd(R,V){const q=Ie.get(R);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function Y_(R,V,q,Y,G){V.isScene!==!0&&(V=Ve),D.resetTextureUnits();const ce=V.fog,Me=Y.isMeshStandardMaterial?V.environment:null,Pe=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Oo,De=(Y.isMeshStandardMaterial?X:b).get(Y.envMap||Me),qe=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Fe=!!q.morphAttributes.position,st=!!q.morphAttributes.normal,yt=!!q.morphAttributes.color;let Mt=br;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Mt=x.toneMapping);const In=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,lt=In!==void 0?In.length:0,Be=Ie.get(Y),ki=_.state.lights;if(K===!0&&(se===!0||R!==M)){const $n=R===M&&Y.id===A;ae.setState(Y,R,$n)}let ct=!1;Y.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ki.state.version||Be.outputColorSpace!==Pe||G.isBatchedMesh&&Be.batching===!1||!G.isBatchedMesh&&Be.batching===!0||G.isBatchedMesh&&Be.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Be.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Be.instancing===!1||!G.isInstancedMesh&&Be.instancing===!0||G.isSkinnedMesh&&Be.skinning===!1||!G.isSkinnedMesh&&Be.skinning===!0||G.isInstancedMesh&&Be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Be.instancingMorph===!1&&G.morphTexture!==null||Be.envMap!==De||Y.fog===!0&&Be.fog!==ce||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ae.numPlanes||Be.numIntersection!==ae.numIntersection)||Be.vertexAlphas!==qe||Be.vertexTangents!==Ye||Be.morphTargets!==Fe||Be.morphNormals!==st||Be.morphColors!==yt||Be.toneMapping!==Mt||Be.morphTargetsCount!==lt)&&(ct=!0):(ct=!0,Be.__version=Y.version);let hi=Be.currentProgram;ct===!0&&(hi=el(Y,V,G));let Ms=!1,kn=!1,Go=!1;const Tt=hi.getUniforms(),Mi=Be.uniforms;if(Te.useProgram(hi.program)&&(Ms=!0,kn=!0,Go=!0),Y.id!==A&&(A=Y.id,kn=!0),Ms||M!==R){Te.buffers.depth.getReversed()?(te.copy(R.projectionMatrix),yy(te),Sy(te),Tt.setValue(N,"projectionMatrix",te)):Tt.setValue(N,"projectionMatrix",R.projectionMatrix),Tt.setValue(N,"viewMatrix",R.matrixWorldInverse);const or=Tt.map.cameraPosition;or!==void 0&&or.setValue(N,Ae.setFromMatrixPosition(R.matrixWorld)),Ne.logarithmicDepthBuffer&&Tt.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Tt.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,kn=!0,Go=!0)}if(G.isSkinnedMesh){Tt.setOptional(N,G,"bindMatrix"),Tt.setOptional(N,G,"bindMatrixInverse");const $n=G.skeleton;$n&&($n.boneTexture===null&&$n.computeBoneTexture(),Tt.setValue(N,"boneTexture",$n.boneTexture,D))}G.isBatchedMesh&&(Tt.setOptional(N,G,"batchingTexture"),Tt.setValue(N,"batchingTexture",G._matricesTexture,D),Tt.setOptional(N,G,"batchingIdTexture"),Tt.setValue(N,"batchingIdTexture",G._indirectTexture,D),Tt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&Tt.setValue(N,"batchingColorTexture",G._colorsTexture,D));const Wo=q.morphAttributes;if((Wo.position!==void 0||Wo.normal!==void 0||Wo.color!==void 0)&&Ee.update(G,q,hi),(kn||Be.receiveShadow!==G.receiveShadow)&&(Be.receiveShadow=G.receiveShadow,Tt.setValue(N,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Mi.envMap.value=De,Mi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(Mi.envMapIntensity.value=V.environmentIntensity),kn&&(Tt.setValue(N,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&Q_(Mi,Go),ce&&Y.fog===!0&&_e.refreshFogUniforms(Mi,ce),_e.refreshMaterialUniforms(Mi,Y,k,H,_.state.transmissionRenderTarget[R.id]),Wl.upload(N,Od(Be),Mi,D)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Wl.upload(N,Od(Be),Mi,D),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Tt.setValue(N,"center",G.center),Tt.setValue(N,"modelViewMatrix",G.modelViewMatrix),Tt.setValue(N,"normalMatrix",G.normalMatrix),Tt.setValue(N,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const $n=Y.uniformsGroups;for(let or=0,ar=$n.length;or<ar;or++){const kd=$n[or];z.update(kd,hi),z.bind(kd,hi)}}return hi}function Q_(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function K_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,V,q){Ie.get(R.texture).__webglTexture=V,Ie.get(R.depthTexture).__webglTexture=q;const Y=Ie.get(R);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const q=Ie.get(R);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,q=0){C=R,E=V,S=q;let Y=!0,G=null,ce=!1,Me=!1;if(R){const De=Ie.get(R);if(De.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1;else if(De.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(De.__hasExternalTextures)D.rebindTextures(R,Ie.get(R.texture).__webglTexture,Ie.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Fe=R.depthTexture;if(De.__boundDepthTexture!==Fe){if(Fe!==null&&Ie.has(Fe)&&(R.width!==Fe.image.width||R.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Me=!0);const Ye=Ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[V])?G=Ye[V][q]:G=Ye[V],ce=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?G=Ie.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?G=Ye[q]:G=Ye,w.copy(R.viewport),F.copy(R.scissor),P=R.scissorTest}else w.copy(oe).multiplyScalar(k).floor(),F.copy(fe).multiplyScalar(k).floor(),P=xe;if(Te.bindFramebuffer(N.FRAMEBUFFER,G)&&Y&&Te.drawBuffers(R,G),Te.viewport(w),Te.scissor(F),Te.setScissorTest(P),ce){const De=Ie.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,De.__webglTexture,q)}else if(Me){const De=Ie.get(R.texture),qe=V||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.__webglTexture,q||0,qe)}A=-1},this.readRenderTargetPixels=function(R,V,q,Y,G,ce,Me){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe){Te.bindFramebuffer(N.FRAMEBUFFER,Pe);try{const De=R.texture,qe=De.format,Ye=De.type;if(!Ne.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-Y&&q>=0&&q<=R.height-G&&N.readPixels(V,q,Y,G,Ge.convert(qe),Ge.convert(Ye),ce)}finally{const De=C!==null?Ie.get(C).__webglFramebuffer:null;Te.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(R,V,q,Y,G,ce,Me){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe){const De=R.texture,qe=De.format,Ye=De.type;if(!Ne.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=R.width-Y&&q>=0&&q<=R.height-G){Te.bindFramebuffer(N.FRAMEBUFFER,Pe);const Fe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.bufferData(N.PIXEL_PACK_BUFFER,ce.byteLength,N.STREAM_READ),N.readPixels(V,q,Y,G,Ge.convert(qe),Ge.convert(Ye),0);const st=C!==null?Ie.get(C).__webglFramebuffer:null;Te.bindFramebuffer(N.FRAMEBUFFER,st);const yt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await xy(N,yt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ce),N.deleteBuffer(Fe),N.deleteSync(yt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,V=null,q=0){R.isTexture!==!0&&(na("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1]);const Y=Math.pow(2,-q),G=Math.floor(R.image.width*Y),ce=Math.floor(R.image.height*Y),Me=V!==null?V.x:0,Pe=V!==null?V.y:0;D.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Me,Pe,G,ce),Te.unbindTexture()},this.copyTextureToTexture=function(R,V,q=null,Y=null,G=0){R.isTexture!==!0&&(na("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1],V=arguments[2],G=arguments[3]||0,q=null);let ce,Me,Pe,De,qe,Ye,Fe,st,yt;const Mt=R.isCompressedTexture?R.mipmaps[G]:R.image;q!==null?(ce=q.max.x-q.min.x,Me=q.max.y-q.min.y,Pe=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,qe=q.min.y,Ye=q.isBox3?q.min.z:0):(ce=Mt.width,Me=Mt.height,Pe=Mt.depth||1,De=0,qe=0,Ye=0),Y!==null?(Fe=Y.x,st=Y.y,yt=Y.z):(Fe=0,st=0,yt=0);const In=Ge.convert(V.format),lt=Ge.convert(V.type);let Be;V.isData3DTexture?(D.setTexture3D(V,0),Be=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(D.setTexture2DArray(V,0),Be=N.TEXTURE_2D_ARRAY):(D.setTexture2D(V,0),Be=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);const ki=N.getParameter(N.UNPACK_ROW_LENGTH),ct=N.getParameter(N.UNPACK_IMAGE_HEIGHT),hi=N.getParameter(N.UNPACK_SKIP_PIXELS),Ms=N.getParameter(N.UNPACK_SKIP_ROWS),kn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,De),N.pixelStorei(N.UNPACK_SKIP_ROWS,qe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ye);const Go=R.isDataArrayTexture||R.isData3DTexture,Tt=V.isDataArrayTexture||V.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Mi=Ie.get(R),Wo=Ie.get(V),$n=Ie.get(Mi.__renderTarget),or=Ie.get(Wo.__renderTarget);Te.bindFramebuffer(N.READ_FRAMEBUFFER,$n.__webglFramebuffer),Te.bindFramebuffer(N.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let ar=0;ar<Pe;ar++)Go&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ie.get(R).__webglTexture,G,Ye+ar),R.isDepthTexture?(Tt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ie.get(V).__webglTexture,G,yt+ar),N.blitFramebuffer(De,qe,ce,Me,Fe,st,ce,Me,N.DEPTH_BUFFER_BIT,N.NEAREST)):Tt?N.copyTexSubImage3D(Be,G,Fe,st,yt+ar,De,qe,ce,Me):N.copyTexSubImage2D(Be,G,Fe,st,yt+ar,De,qe,ce,Me);Te.bindFramebuffer(N.READ_FRAMEBUFFER,null),Te.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Tt?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(Be,G,Fe,st,yt,ce,Me,Pe,In,lt,Mt.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(Be,G,Fe,st,yt,ce,Me,Pe,In,Mt.data):N.texSubImage3D(Be,G,Fe,st,yt,ce,Me,Pe,In,lt,Mt):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,G,Fe,st,ce,Me,In,lt,Mt.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,G,Fe,st,Mt.width,Mt.height,In,Mt.data):N.texSubImage2D(N.TEXTURE_2D,G,Fe,st,ce,Me,In,lt,Mt);N.pixelStorei(N.UNPACK_ROW_LENGTH,ki),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct),N.pixelStorei(N.UNPACK_SKIP_PIXELS,hi),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ms),N.pixelStorei(N.UNPACK_SKIP_IMAGES,kn),G===0&&V.generateMipmaps&&N.generateMipmap(Be),Te.unbindTexture()},this.copyTextureToTexture3D=function(R,V,q=null,Y=null,G=0){return R.isTexture!==!0&&(na("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,R=arguments[2],V=arguments[3],G=arguments[4]||0),na('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,V,q,Y,G)},this.initRenderTarget=function(R){Ie.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Te.unbindTexture()},this.resetState=function(){E=0,S=0,C=null,Te.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}let x0=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};const em=new I,tm=new $e,nm=new $e,DE=new I,im=new ue,Tl=new I,Su=new No,rm=new ue,Au=new ja;class FE extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tp,this.bindMatrix=new ue,this.bindMatrixInverse=new ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tl),this.boundingBox.expandByPoint(Tl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new No),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tl),this.boundingSphere.expandByPoint(Tl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Su.copy(this.boundingSphere),Su.applyMatrix4(i),e.ray.intersectsSphere(Su)!==!1&&(rm.copy(i).invert(),Au.copy(e.ray).applyMatrix4(rm),!(this.boundingBox!==null&&Au.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Au)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;tm.fromBufferAttribute(i.attributes.skinIndex,e),nm.fromBufferAttribute(i.attributes.skinWeight,e),em.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=nm.getComponent(s);if(o!==0){const a=tm.getComponent(s);im.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(DE.copy(em).applyMatrix4(im),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Wh extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yi extends on{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Qn,u=Qn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sm=new ue,LE=new ue;class Wf{constructor(e=[],t=[]){this.uuid=Nr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:LE;sm.multiplyMatrices(a,t[s]),sm.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Wf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Yi(t,e,e,xn,ri);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Wh),this.bones.push(o),this.boneInverses.push(new ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class BE extends ai{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class y0 extends kr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oc=new I,ac=new I,om=new ue,Ko=new ja,El=new No,Mu=new I,am=new I;class UE extends ft{constructor(e=new yn,t=new y0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)oc.fromBufferAttribute(t,i-1),ac.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=oc.distanceTo(ac);e.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),El.copy(n.boundingSphere),El.applyMatrix4(i),El.radius+=s,e.ray.intersectsSphere(El)===!1)return;om.copy(i).invert(),Ko.copy(e.ray).applyMatrix4(om);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=d,g=p-1;m<g;m+=c){const _=u.getX(m),y=u.getX(m+1),v=Cl(this,e,Ko,l,_,y);v&&t.push(v)}if(this.isLineLoop){const m=u.getX(p-1),g=u.getX(d),_=Cl(this,e,Ko,l,m,g);_&&t.push(_)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let m=d,g=p-1;m<g;m+=c){const _=Cl(this,e,Ko,l,m,m+1);_&&t.push(_)}if(this.isLineLoop){const m=Cl(this,e,Ko,l,p-1,d);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cl(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(oc.fromBufferAttribute(o,i),ac.fromBufferAttribute(o,s),t.distanceSqToSegment(oc,ac,Mu,am)>n)return;Mu.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Mu);if(!(l<e.near||l>e.far))return{distance:l,point:am.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}class OE{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ve:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],s=[],o=[],a=new I,l=new ue;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Xt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Xt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wa extends yn{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let p=0;const m=[],g=n/2;let _=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function y(){const x=new I,T=new I;let E=0;const S=(t-e)/n;for(let C=0;C<=s;C++){const A=[],M=C/s,w=M*(t-e)+e;for(let F=0;F<=i;F++){const P=F/i,L=P*l+a,B=Math.sin(L),O=Math.cos(L);T.x=w*B,T.y=-M*n+g,T.z=w*O,h.push(T.x,T.y,T.z),x.set(B,S,O).normalize(),f.push(x.x,x.y,x.z),d.push(P,1-M),A.push(p++)}m.push(A)}for(let C=0;C<i;C++)for(let A=0;A<s;A++){const M=m[A][C],w=m[A+1][C],F=m[A+1][C+1],P=m[A][C+1];(e>0||A!==0)&&(u.push(M,w,P),E+=3),(t>0||A!==s-1)&&(u.push(w,F,P),E+=3)}c.addGroup(_,E,0),_+=E}function v(x){const T=p,E=new ve,S=new I;let C=0;const A=x===!0?e:t,M=x===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),p++;const w=p;for(let F=0;F<=i;F++){const L=F/i*l+a,B=Math.cos(L),O=Math.sin(L);S.x=A*O,S.y=g*M,S.z=A*B,h.push(S.x,S.y,S.z),f.push(0,M,0),E.x=B*.5+.5,E.y=O*.5*M+.5,d.push(E.x,E.y),p++}for(let F=0;F<i;F++){const P=T+F,L=w+F;x===!0?u.push(L,L+1,P):u.push(L+1,L,P),C+=3}c.addGroup(_,C,x===!0?1:2),_+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xf extends wa{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Xf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const NE={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=S0(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(n&&(s=GE(r,e,s,t)),r.length>80*t){a=c=r[0],l=u=r[1];for(let p=t;p<i;p+=t)h=r[p],f=r[p+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Ra(s,o,t,a,l,d,0),o}};function S0(r,e,t,n,i){let s,o;if(i===eC(r,e,t,n)>0)for(s=e;s<t;s+=n)o=lm(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=lm(s,r[s],r[s+1],o);return o&&Uc(o,o.next)&&(Pa(o),o=o.next),o}function gs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Uc(t,t.next)||It(t.prev,t,t.next)===0)){if(Pa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ra(r,e,t,n,i,s,o){if(!r)return;!o&&s&&QE(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?zE(r,n,i,s):kE(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Pa(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=HE(gs(r),e,t),Ra(r,e,t,n,i,s,2)):o===2&&VE(r,e,t,n,i,s):Ra(gs(r),e,t,n,i,s,1);break}}}function kE(r){const e=r.prev,t=r,n=r.next;if(It(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&Js(i,a,s,l,o,c,p.x,p.y)&&It(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function zE(r,e,t,n){const i=r.prev,s=r,o=r.next;if(It(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,p=u<h?u<f?u:f:h<f?h:f,m=a>l?a>c?a:c:l>c?l:c,g=u>h?u>f?u:f:h>f?h:f,_=Xh(d,p,e,t,n),y=Xh(m,g,e,t,n);let v=r.prevZ,x=r.nextZ;for(;v&&v.z>=_&&x&&x.z<=y;){if(v.x>=d&&v.x<=m&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Js(a,u,l,h,c,f,v.x,v.y)&&It(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=m&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Js(a,u,l,h,c,f,x.x,x.y)&&It(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=_;){if(v.x>=d&&v.x<=m&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Js(a,u,l,h,c,f,v.x,v.y)&&It(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=m&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Js(a,u,l,h,c,f,x.x,x.y)&&It(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function HE(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Uc(i,s)&&A0(i,n,n.next,s)&&Ia(i,s)&&Ia(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Pa(n),Pa(n.next),n=r=s),n=n.next}while(n!==r);return gs(n)}function VE(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ZE(o,a)){let l=M0(o,a);o=gs(o,o.next),l=gs(l,l.next),Ra(o,e,t,n,i,s,0),Ra(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function GE(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=S0(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(jE(c));for(i.sort(WE),s=0;s<i.length;s++)t=XE(i[s],t);return t}function WE(r,e){return r.x-e.x}function XE(r,e){const t=qE(r,e);if(!t)return e;const n=M0(t,r);return gs(n,n.next),gs(t,t.next)}function qE(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&Js(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Ia(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&YE(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function YE(r,e){return It(r.prev,r,e.prev)<0&&It(e.next,r,r.next)<0}function QE(r,e,t,n){let i=r;do i.z===0&&(i.z=Xh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,KE(i)}function KE(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function Xh(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function jE(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Js(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function ZE(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!$E(r,e)&&(Ia(r,e)&&Ia(e,r)&&JE(r,e)&&(It(r.prev,r,e.prev)||It(r,e.prev,e))||Uc(r,e)&&It(r.prev,r,r.next)>0&&It(e.prev,e,e.next)>0)}function It(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Uc(r,e){return r.x===e.x&&r.y===e.y}function A0(r,e,t,n){const i=wl(It(r,e,t)),s=wl(It(r,e,n)),o=wl(It(t,n,r)),a=wl(It(t,n,e));return!!(i!==s&&o!==a||i===0&&bl(r,t,e)||s===0&&bl(r,n,e)||o===0&&bl(t,r,n)||a===0&&bl(t,e,n))}function bl(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function wl(r){return r>0?1:r<0?-1:0}function $E(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&A0(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ia(r,e){return It(r.prev,r,r.next)<0?It(r,e,r.next)>=0&&It(r,r.prev,e)>=0:It(r,e,r.prev)<0||It(r,r.next,e)<0}function JE(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function M0(r,e){const t=new qh(r.i,r.x,r.y),n=new qh(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function lm(r,e,t,n){const i=new qh(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Pa(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function qh(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eC(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class qf{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return qf.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];cm(e),um(n,e);let o=e.length;t.forEach(cm);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,um(n,t[l]);const a=NE.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function cm(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function um(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Da extends yn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,f=new I,d=[],p=[],m=[],g=[];for(let _=0;_<=n;_++){const y=[],v=_/n;let x=0;_===0&&o===0?x=.5/t:_===n&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const E=T/t;h.x=-e*Math.cos(i+E*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(i+E*s)*Math.sin(o+v*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),m.push(f.x,f.y,f.z),g.push(E+x,1-v),y.push(c++)}u.push(y)}for(let _=0;_<n;_++)for(let y=0;y<t;y++){const v=u[_][y+1],x=u[_][y],T=u[_+1][y],E=u[_+1][y+1];(_!==0||o>0)&&d.push(v,x,E),(_!==n-1||l<Math.PI)&&d.push(x,T,E)}this.setIndex(d),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(m,3)),this.setAttribute("uv",new Vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tu extends kr{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class T0 extends kr{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class tC extends kr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Rl(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function nC(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function iC(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function hm(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function E0(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Oc{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class rC extends Oc{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:np,endingEnd:np}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ip:s=e,a=2*t-n;break;case rp:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ip:o=e,l=2*n-t;break;case rp:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),m=p*p,g=m*p,_=-f*g+2*f*m-f*p,y=(1+f)*g+(-1.5-2*f)*m+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*m+.5*p,x=d*g-d*m;for(let T=0;T!==a;++T)s[T]=_*o[u+T]+y*o[c+T]+v*o[l+T]+x*o[h+T];return s}}class sC extends Oc{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class oC extends Oc{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Oi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rl(t,this.TimeBufferType),this.values=Rl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rl(e.times,Array),values:Rl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rc:t=this.InterpolantFactoryMethodDiscrete;break;case Vh:t=this.InterpolantFactoryMethodLinear;break;case Yc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rc;case this.InterpolantFactoryMethodLinear:return Vh;case this.InterpolantFactoryMethodSmooth:return Yc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&nC(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Yc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){const m=t[h+p];if(m!==t[f+p]||m!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Oi.prototype.TimeBufferType=Float32Array;Oi.prototype.ValueBufferType=Float32Array;Oi.prototype.DefaultInterpolation=Vh;class zo extends Oi{constructor(e,t,n){super(e,t,n)}}zo.prototype.ValueTypeName="bool";zo.prototype.ValueBufferType=Array;zo.prototype.DefaultInterpolation=rc;zo.prototype.InterpolantFactoryMethodLinear=void 0;zo.prototype.InterpolantFactoryMethodSmooth=void 0;class C0 extends Oi{}C0.prototype.ValueTypeName="color";class Fa extends Oi{}Fa.prototype.ValueTypeName="number";class aC extends Oc{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)at.slerpFlat(s,0,o,c-a,o,c,l);return s}}class wo extends Oi{InterpolantFactoryMethodLinear(e){return new aC(this.times,this.values,this.getValueSize(),e)}}wo.prototype.ValueTypeName="quaternion";wo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ho extends Oi{constructor(e,t,n){super(e,t,n)}}Ho.prototype.ValueTypeName="string";Ho.prototype.ValueBufferType=Array;Ho.prototype.DefaultInterpolation=rc;Ho.prototype.InterpolantFactoryMethodLinear=void 0;Ho.prototype.InterpolantFactoryMethodSmooth=void 0;class La extends Oi{}La.prototype.ValueTypeName="vector";class lC{constructor(e="",t=-1,n=[],i=Wx){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Nr(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(uC(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Oi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=iC(l);l=hm(l,1,u),c=hm(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Fa(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,p,m){if(d.length!==0){const g=[],_=[];E0(d,g,_,p),g.length!==0&&m.push(new h(f,g,_))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let m=0;m<f[p].morphTargets.length;m++)d[f[p].morphTargets[m]]=-1;for(const m in d){const g=[],_=[];for(let y=0;y!==f[p].morphTargets.length;++y){const v=f[p];g.push(v.time),_.push(v.morphTarget===m?1:0)}i.push(new Fa(".morphTargetInfluence["+m+"]",g,_))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(La,d+".position",f,"pos",i),n(wo,d+".quaternion",f,"rot",i),n(La,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function cC(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fa;case"vector":case"vector2":case"vector3":case"vector4":return La;case"color":return C0;case"quaternion":return wo;case"bool":case"boolean":return zo;case"string":return Ho}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function uC(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=cC(r.type);if(r.times===void 0){const t=[],n=[];E0(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const lc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class hC{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null}}}const fC=new hC;class _s{constructor(e){this.manager=e!==void 0?e:fC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_s.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xi={};class dC extends Error{constructor(e,t){super(e),this.response=t}}class pC extends _s{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=lc.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Xi[e]!==void 0){Xi[e].push({onLoad:t,onProgress:n,onError:i});return}Xi[e]=[],Xi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Xi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let m=0;const g=new ReadableStream({start(_){y();function y(){h.read().then(({done:v,value:x})=>{if(v)_.close();else{m+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:p,loaded:m,total:d});for(let E=0,S=u.length;E<S;E++){const C=u[E];C.onProgress&&C.onProgress(T)}_.enqueue(x),y()}},v=>{_.error(v)})}}});return new Response(g)}else throw new dC(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{lc.add(e,c);const u=Xi[e];delete Xi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Xi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Xi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class mC extends _s{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=lc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ca("img");function l(){u(),lc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class gC extends _s{constructor(e){super(e)}load(e,t,n,i){const s=new on,o=new mC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Nc extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Eu=new ue,fm=new I,dm=new I;class Yf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hf,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fm.setFromMatrixPosition(e.matrixWorld),t.position.copy(fm),dm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dm),t.updateMatrixWorld(),Eu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _C extends Yf{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Eo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class vC extends Nc{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new _C}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const pm=new ue,jo=new I,Cu=new I;class xC extends Yf{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),jo.setFromMatrixPosition(e.matrixWorld),n.position.copy(jo),Cu.copy(n.position),Cu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Cu),n.updateMatrixWorld(),i.makeTranslation(-jo.x,-jo.y,-jo.z),pm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pm)}}class mm extends Nc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yC extends Yf{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class SC extends Nc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new yC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class AC extends Nc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class MC{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class TC extends yn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Qf="\\[\\]\\.:\\/",EC=new RegExp("["+Qf+"]","g"),Kf="[^"+Qf+"]",CC="[^"+Qf.replace("\\.","")+"]",bC=/((?:WC+[\/:])*)/.source.replace("WC",Kf),wC=/(WCOD+)?/.source.replace("WCOD",CC),RC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kf),IC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kf),PC=new RegExp("^"+bC+wC+RC+IC+"$"),DC=["material","materials","bones","map"];class FC{constructor(e,t,n){const i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(EC,"")}static parseTrackName(e){const t=PC.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);DC.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=FC;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const gm=new ue;let b0=class{constructor(e,t,n=0,i=1/0){this.ray=new ja(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new kf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gm),this}intersectObject(e,t=!0,n=[]){return Yh(e,this,n,t),n.sort(_m),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Yh(e[i],this,n,t);return n.sort(_m),n}};function _m(r,e){return r.distance-e.distance}function Yh(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Yh(s[o],e,t,!0)}}class vm{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Df}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Df);const Hs=[{id:"kok",name:"Kök",targetPosition:{x:-2.95,y:0,z:.35},lookAtPosition:{x:29.9,y:3.85,z:-94.01}},{id:"matbord",name:"Matbord",targetPosition:{x:1.3,y:0,z:-1.56},lookAtPosition:{x:-23.78,y:-.31,z:95.24}},{id:"kok2",name:"Kök 2",targetPosition:{x:-1.21,y:0,z:-3.48},lookAtPosition:{x:-54.51,y:1.06,z:81.12}},{id:"vardagsrum",name:"Vardagsrum",targetPosition:{x:1.6,y:0,z:-1.81},lookAtPosition:{x:-20.68,y:-2.31,z:-99.27}},{id:"hall",name:"Hall",targetPosition:{x:-6.73,y:0,z:-4.88},lookAtPosition:{x:90.83,y:-1.79,z:16.95}},{id:"hall2",name:"Hall 2",targetPosition:{x:-5.27,y:0,z:-6.49},lookAtPosition:{x:-30.68,y:-.39,z:-103.2}},{id:"hall3",name:"Hall 3",targetPosition:{x:-6.73,y:0,z:-4.88},lookAtPosition:{x:42.03,y:3.47,z:82.35}}];function Qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function w0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ro={duration:.5,overwrite:!1,delay:0},jf,Sn,wt,si=1e8,At=1/si,Qh=Math.PI*2,LC=Qh/4,BC=0,R0=Math.sqrt,UC=Math.cos,OC=Math.sin,Jt=function(e){return typeof e=="string"},Lt=function(e){return typeof e=="function"},ir=function(e){return typeof e=="number"},Zf=function(e){return typeof e>"u"},Bi=function(e){return typeof e=="object"},Fn=function(e){return e!==!1},$f=function(){return typeof window<"u"},Il=function(e){return Lt(e)||Jt(e)},I0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,Kh=/(?:-?\.?\d|\.)+/gi,P0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,eo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,D0=/[+-]=-?[.\d]+/,F0=/[^,'"\[\]\s]+/gi,NC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rt,Ti,jh,Jf,Zn={},cc={},L0,B0=function(e){return(cc=vs(e,Zn))&&Nn},ed=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ba=function(e,t){return!t&&console.warn(e)},U0=function(e,t){return e&&(Zn[e]=t)&&cc&&(cc[e]=t)||Zn},Ua=function(){return 0},kC={suppressEvents:!0,isStart:!0,kill:!1},Xl={suppressEvents:!0,kill:!1},zC={suppressEvents:!0},td={},wr=[],Zh={},O0,Xn={},wu={},xm=30,ql=[],nd="",id=function(e){var t=e[0],n,i;if(Bi(t)||Lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ql.length;i--&&!ql[i].targetTest(t););n=ql[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new a_(e[i],n)))||e.splice(i,1);return e},fs=function(e){return e._gsap||id(oi(e))[0]._gsap},N0=function(e,t,n){return(n=e[t])&&Lt(n)?e[t]():Zf(n)&&e.getAttribute&&e.getAttribute(t)||n},Ln=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},$t=function(e){return Math.round(e*1e7)/1e7||0},ho=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},HC=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},uc=function(){var e=wr.length,t=wr.slice(0),n,i;for(Zh={},wr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},k0=function(e,t,n,i){wr.length&&!Sn&&uc(),e.render(t,n,Sn&&t<0&&(e._initted||e._startAt)),wr.length&&!Sn&&uc()},z0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(F0).length<2?t:Jt(e)?e.trim():e},H0=function(e){return e},li=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},VC=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},vs=function(e,t){for(var n in t)e[n]=t[n];return e},ym=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Bi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},hc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ca=function(e){var t=e.parent||Rt,n=e.keyframes?VC(An(e.keyframes)):li;if(Fn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},GC=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},V0=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},kc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Br=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ds=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},WC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},$h=function(e,t,n,i){return e._startAt&&(Sn?e._startAt.revert(Xl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},XC=function r(e){return!e||e._ts&&r(e.parent)},Sm=function(e){return e._repeat?Io(e._tTime,e=e.duration()+e._rDelay)*e:0},Io=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},fc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},zc=function(e){return e._end=$t(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},Hc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=$t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),zc(e),n._dirty||ds(n,e)),e},G0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=fc(e.rawTime(),t),(!t._dur||Za(0,t.totalDuration(),n)-t._tTime>At)&&t.render(n,!0)),ds(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-At}},Ci=function(e,t,n,i){return t.parent&&Br(t),t._start=$t((ir(n)?n:n||e!==Rt?ei(e,n,t):e._time)+t._delay),t._end=$t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),V0(e,t,"_first","_last",e._sort?"_start":0),Jh(t)||(e._recent=t),i||G0(e,t),e._ts<0&&Hc(e,e._tTime),e},W0=function(e,t){return(Zn.ScrollTrigger||ed("scrollTrigger",t))&&Zn.ScrollTrigger.create(t,e)},X0=function(e,t,n,i,s){if(sd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&O0!==qn.frame)return wr.push(e),e._lazy=[s,i],1},qC=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Jh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},YC=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&qC(e)&&!(!e._initted&&Jh(e))||(e._ts<0||e._dp._ts<0)&&!Jh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Za(0,e._tDur,t),u=Io(l,a),e._yoyo&&u&1&&(o=1-o),u!==Io(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Sn||i||e._zTime===At||!t&&e._zTime){if(!e._initted&&X0(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?At:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&$h(e,t,n,!0),e._onUpdate&&!n&&Yn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Yn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Br(e,1),!n&&!Sn&&(Yn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},QC=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Po=function(e,t,n,i){var s=e._repeat,o=$t(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:$t(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Hc(e,e._tTime=e._tDur*a),e.parent&&zc(e),n||ds(e.parent,e),e},Am=function(e){return e instanceof bn?ds(e):Po(e,e._dur)},KC={_start:0,endTime:Ua,totalDuration:Ua},ei=function r(e,t,n){var i=e.labels,s=e._recent||KC,o=e.duration()>=si?s.endTime(!1):e._dur,a,l,c;return Jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ua=function(e,t,n){var i=ir(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Fn(l.vars.inherit)&&l.parent;o.immediateRender=Fn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ht(t[0],o,t[s+1])},Hr=function(e,t){return e||e===0?t(e):t},Za=function(e,t,n){return n<e?e:n>t?t:n},vn=function(e,t){return!Jt(e)||!(t=NC.exec(e))?"":t[1]},jC=function(e,t,n){return Hr(n,function(i){return Za(e,t,i)})},ef=[].slice,q0=function(e,t){return e&&Bi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Bi(e[0]))&&!e.nodeType&&e!==Ti},ZC=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Jt(i)&&!t||q0(i,1)?(s=n).push.apply(s,oi(i)):n.push(i)})||n},oi=function(e,t,n){return wt&&!t&&wt.selector?wt.selector(e):Jt(e)&&!n&&(jh||!Do())?ef.call((t||Jf).querySelectorAll(e),0):An(e)?ZC(e,n):q0(e)?ef.call(e,0):e?[e]:[]},tf=function(e){return e=oi(e)[0]||Ba("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return oi(t,n.querySelectorAll?n:n===e?Ba("Invalid scope")||Jf.createElement("div"):e)}},Y0=function(e){return e.sort(function(){return .5-Math.random()})},Q0=function(e){if(Lt(e))return e;var t=Bi(e)?e:{each:e},n=ps(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Jt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,p){var m=(p||t).length,g=o[m],_,y,v,x,T,E,S,C,A;if(!g){if(A=t.grid==="auto"?0:(t.grid||[1,si])[1],!A){for(S=-si;S<(S=p[A++].getBoundingClientRect().left)&&A<m;);A<m&&A--}for(g=o[m]=[],_=l?Math.min(A,m)*u-.5:i%A,y=A===si?0:l?m*h/A-.5:i/A|0,S=0,C=si,E=0;E<m;E++)v=E%A-_,x=y-(E/A|0),g[E]=T=c?Math.abs(c==="y"?x:v):R0(v*v+x*x),T>S&&(S=T),T<C&&(C=T);i==="random"&&Y0(g),g.max=S-C,g.min=C,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(A>m?m-1:c?c==="y"?m/A:A:Math.max(A,m/A))||0)*(i==="edges"?-1:1),g.b=m<0?s-m:s,g.u=vn(t.amount||t.each)||0,n=n&&m<0?r_(n):n}return m=(g[f]-g.min)/g.max||0,$t(g.b+(n?n(m):m)*g.v)+g.u}},nf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=$t(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ir(n)?0:vn(n))}},K0=function(e,t){var n=An(e),i,s;return!n&&Bi(e)&&(i=n=e.radius||si,e.values?(e=oi(e.values),(s=!ir(e[0]))&&(i*=i)):e=nf(e.increment)),Hr(t,n?Lt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=si,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||ir(o)?u:u+vn(o)}:nf(e))},j0=function(e,t,n,i){return Hr(An(e)?!t:n===!0?!!(n=0):!i,function(){return An(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},$C=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},JC=function(e,t){return function(n){return e(parseFloat(n))+(t||vn(n))}},eb=function(e,t,n){return $0(e,t,0,1,n)},Z0=function(e,t,n){return Hr(n,function(i){return e[~~t(i)]})},tb=function r(e,t,n){var i=t-e;return An(e)?Z0(e,r(0,e.length),t):Hr(n,function(s){return(i+(s-e)%i)%i+e})},nb=function r(e,t,n){var i=t-e,s=i*2;return An(e)?Z0(e,r(0,e.length-1),t):Hr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Oa=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?F0:Kh),n+=e.substr(t,i-t)+j0(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},$0=function(e,t,n,i,s){var o=t-e,a=i-n;return Hr(s,function(l){return n+((l-e)/o*a||0)})},ib=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Jt(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(An(e)&&!An(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(p){p*=h;var m=Math.min(f,~~p);return u[m](p-m)},n=t}else i||(e=vs(An(e)?[]:{},e));if(!u){for(l in t)rd.call(a,e,l,"get",t[l]);s=function(p){return ld(p,a)||(o?e.p:e)}}}return Hr(n,s)},Mm=function(e,t,n){var i=e.labels,s=si,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Yn=function(e,t,n){var i=e.vars,s=i[t],o=wt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&wr.length&&uc(),a&&(wt=a),u=l?s.apply(c,l):s.call(c),wt=o,u},ra=function(e){return Br(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Sn),e.progress()<1&&Yn(e,"onInterrupt"),e},to,J0=[],e_=function(e){if(e)if(e=!e.name&&e.default||e,$f()||e.headless){var t=e.name,n=Lt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ua,render:ld,add:rd,kill:xb,modifier:vb,rawVars:0},o={targetTest:0,get:0,getSetter:ad,aliases:{},register:0};if(Do(),e!==i){if(Xn[t])return;li(i,li(hc(e,s),o)),vs(i.prototype,vs(s,hc(e,o))),Xn[i.prop=t]=i,e.targetTest&&(ql.push(i),td[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}U0(t,i),e.register&&e.register(Nn,i,Bn)}else J0.push(e)},vt=255,sa={aqua:[0,vt,vt],lime:[0,vt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vt],navy:[0,0,128],white:[vt,vt,vt],olive:[128,128,0],yellow:[vt,vt,0],orange:[vt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vt,0,0],pink:[vt,192,203],cyan:[0,vt,vt],transparent:[vt,vt,vt,0]},Ru=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*vt+.5|0},t_=function(e,t,n){var i=e?ir(e)?[e>>16,e>>8&vt,e&vt]:0:sa.black,s,o,a,l,c,u,h,f,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),sa[e])i=sa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&vt,i&vt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&vt,e&vt]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Kh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ru(l+1/3,s,o),i[1]=Ru(l,s,o),i[2]=Ru(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(P0),n&&i.length<4&&(i[3]=1),i}else i=e.match(Kh)||sa.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/vt,o=i[1]/vt,a=i[2]/vt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},n_=function(e){var t=[],n=[],i=-1;return e.split(Rr).forEach(function(s){var o=s.match(eo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Tm=function(e,t,n){var i="",s=(e+i).match(Rr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=t_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=n_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Rr,"1").split(eo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Rr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Rr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in sa)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),rb=/hsl[a]?\(/,i_=function(e){var t=e.join(" "),n;if(Rr.lastIndex=0,Rr.test(t))return n=rb.test(t),e[1]=Tm(e[1],n),e[0]=Tm(e[0],n,n_(e[1])),!0},Na,qn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,p=function m(g){var _=r()-i,y=g===!0,v,x,T,E;if((_>e||_<0)&&(n+=_-t),i+=_,T=i-n,v=T-o,(v>0||y)&&(E=++h.frame,f=T-h.time*1e3,h.time=T=T/1e3,o+=v+(v>=s?4:s-v),x=1),y||(l=c(m)),x)for(d=0;d<a.length;d++)a[d](T,f,E,g)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){L0&&(!jh&&$f()&&(Ti=jh=window,Jf=Ti.document||{},Zn.gsap=Nn,(Ti.gsapVersions||(Ti.gsapVersions=[])).push(Nn.version),B0(cc||Ti.GreenSockGlobals||!Ti.gsap&&Ti||{}),J0.forEach(e_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Na=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Na=0,c=Ua},lagSmoothing:function(g,_){e=g||1/0,t=Math.min(_||33,e)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,_,y){var v=_?function(x,T,E,S){g(x,T,E,S),h.remove(v)}:g;return h.remove(g),a[y?"unshift":"push"](v),Do(),v},remove:function(g,_){~(_=a.indexOf(g))&&a.splice(_,1)&&d>=_&&d--},_listeners:a},h}(),Do=function(){return!Na&&qn.wake()},it={},sb=/^[\d.\-M][\d.\-,\s]/,ob=/["']/g,ab=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(ob,"").trim():+c,i=l.substr(a+1).trim();return t},lb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},cb=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ab(t[1])]:lb(e).split(",").map(z0)):it._CE&&sb.test(e)?it._CE("",e):n},r_=function(e){return function(t){return 1-e(1-t)}},s_=function r(e,t){for(var n=e._first,i;n;)n instanceof bn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ps=function(e,t){return e&&(Lt(e)?e:it[e]||cb(e))||t},As=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Ln(e,function(a){it[a]=Zn[a]=s,it[o=a.toLowerCase()]=n;for(var l in s)it[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[a+"."+l]=s[l]}),s},o_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Iu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Qh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*OC((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:o_(a);return s=Qh/s,l.config=function(c,u){return r(e,c,u)},l},Pu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:o_(n);return i.config=function(s){return r(e,s)},i};Ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;As(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;As("Elastic",Iu("in"),Iu("out"),Iu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};As("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);As("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});As("Circ",function(r){return-(R0(1-r*r)-1)});As("Sine",function(r){return r===1?1:-UC(r*LC)+1});As("Back",Pu("in"),Pu("out"),Pu());it.SteppedEase=it.steps=Zn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-At;return function(a){return((i*Za(0,o,a)|0)+s)*n}}};Ro.ease=it["quad.out"];Ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return nd+=r+","+r+"Params,"});var a_=function(e,t){this.id=BC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:N0,this.set=t?t.getSetter:ad},ka=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Po(this,+t.duration,1,1),this.data=t.data,wt&&(this._ctx=wt,wt.data.push(this)),Na||qn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Po(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Do(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Hc(this,n),!s._dp||s.parent||G0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ci(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===At||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),k0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Io(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?fc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-At?0:this._rts,this.totalTime(Za(-Math.abs(this._delay),this._tDur,s),i!==!1),zc(this),WC(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Do(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ci(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Fn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=zC);var i=Sn;return Sn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Sn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Am(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Am(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ei(this,n),Fn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Fn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-At)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Lt(n)?n:H0,a=function(){var c=i.then;i.then=null,Lt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ra(this)},r}();li(ka.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var bn=function(r){w0(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Fn(n.sortChildren),Rt&&Ci(n.parent||Rt,Qi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&W0(Qi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ua(0,arguments,this),this},t.from=function(i,s,o){return ua(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ua(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ca(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ht(i,s,ei(this,o),1),this},t.call=function(i,s,o){return Ci(this,Ht.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ht(i,o,ei(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ca(o).immediateRender=Fn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ca(a).immediateRender=Fn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:$t(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,p,m,g,_,y,v,x,T,E,S;if(this!==Rt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,x=this._start,v=this._ts,_=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(f=$t(u%g),u===l?(m=this._repeat,f=c):(m=~~(u/g),m&&m===u/g&&(f=c,m--),f>c&&(f=c)),T=Io(this._tTime,g),!a&&this._tTime&&T!==m&&this._tTime-T*g-this._dur<=0&&(T=m),E&&m&1&&(f=c-f,S=1),m!==T&&!this._lock){var C=E&&T&1,A=C===(E&&m&1);if(m<T&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(S?0:$t(m*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Yn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,A&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;s_(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=QC(this,$t(a),$t(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!m&&(Yn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!_){y=0,p&&(u+=this._zTime=-At);break}}d=p}else{d=this._last;for(var M=i<0?i:f;d;){if(p=d._prev,(d._act||M<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,o||Sn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!_){y=0,p&&(u+=this._zTime=M?-At:At);break}}d=p}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-At)._zTime=f>=a?1:-1,this._ts))return this._start=x,zc(this),this.render(i,s,o);this._onUpdate&&!s&&Yn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Br(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Yn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(ir(s)||(s=ei(this,s,i)),!(i instanceof ka)){if(An(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Jt(i))return this.addLabel(i,s);if(Lt(i))i=Ht.delayedCall(0,i);else return this}return this!==i?Ci(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-si);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ht?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Jt(i)?this.removeLabel(i):Lt(i)?this.killTweensOf(i):(kc(this,i),i===this._recent&&(this._recent=this._last),ds(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$t(qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ei(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ht.delayedCall(0,s||Ua,o);return a.data="isPause",this._hasPause=1,Ci(this,a,ei(this,i))},t.removePause=function(i){var s=this._first;for(i=ei(this,i);s;)s._start===i&&s.data==="isPause"&&Br(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Sr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=oi(i),l=this._first,c=ir(s),u;l;)l instanceof Ht?HC(l._targets,a)&&(c?(!Sr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ei(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,p=Ht.to(o,li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||At,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==g&&Po(p,g,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,h||[])}},s));return f?p.render(0):p},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,li({startAt:{time:ei(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Mm(this,ei(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Mm(this,ei(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ds(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ds(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=si,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ci(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Po(o,o===Rt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Rt._ts&&(k0(Rt,fc(i,Rt)),O0=qn.frame),qn.frame>=xm){xm+=jn.autoSleep||120;var s=Rt._first;if((!s||!s._ts)&&jn.autoSleep&&qn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||qn.sleep()}}},e}(ka);li(bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ub=function(e,t,n,i,s,o,a){var l=new Bn(this._pt,e,t,0,1,d_,null,s),c=0,u=0,h,f,d,p,m,g,_,y;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Oa(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(bu)||[];h=bu.exec(i);)p=h[0],m=i.substring(c,h.index),d?d=(d+1)%5:m.substr(-5)==="rgba("&&(d=1),p!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:g,c:p.charAt(1)==="="?ho(g,p)-g:parseFloat(p)-g,m:d&&d<4?Math.round:0},c=bu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(D0.test(i)||_)&&(l.e=0),this._pt=l,l},rd=function(e,t,n,i,s,o,a,l,c,u){Lt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Lt(h)?c?e[t.indexOf("set")||!Lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Lt(h)?c?mb:h_:od,p;if(Jt(i)&&(~i.indexOf("random(")&&(i=Oa(i)),i.charAt(1)==="="&&(p=ho(f,i)+(vn(f)||0),(p||p===0)&&(i=p))),!u||f!==i||rf)return!isNaN(f*i)&&i!==""?(p=new Bn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?_b:f_,0,d),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!h&&!(t in e)&&ed(t,i),ub.call(this,e,t,f,i,d,l||jn.stringFilter,c))},hb=function(e,t,n,i,s){if(Lt(e)&&(e=ha(e,s,t,n,i)),!Bi(e)||e.style&&e.nodeType||An(e)||I0(e))return Jt(e)?ha(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ha(e[a],s,t,n,i);return o},l_=function(e,t,n,i,s,o){var a,l,c,u;if(Xn[e]&&(a=new Xn[e]).init(s,a.rawVars?t[e]:hb(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Bn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==to))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Sr,rf,sd=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,p=e._dur,m=e._startAt,g=e._targets,_=e.parent,y=_&&_.data==="nested"?_.vars.targets:g,v=e._overwrite==="auto"&&!jf,x=e.timeline,T,E,S,C,A,M,w,F,P,L,B,O,H;if(x&&(!f||!s)&&(s="none"),e._ease=ps(s,Ro.ease),e._yEase=h?r_(ps(h===!0?s:h,Ro.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(F=g[0]?fs(g[0]).harness:0,O=F&&i[F.prop],T=hc(i,td),m&&(m._zTime<0&&m.progress(1),t<0&&u&&a&&!d?m.render(-1,!0):m.revert(u&&p?Xl:kC),m._lazy=0),o){if(Br(e._startAt=Ht.set(g,li({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!m&&Fn(l),startAt:null,delay:0,onUpdate:c&&function(){return Yn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn||!a&&!d)&&e._startAt.revert(Xl),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!m){if(t&&(a=!1),S=li({overwrite:!1,data:"isFromStart",lazy:a&&!m&&Fn(l),immediateRender:a,stagger:0,parent:_},T),O&&(S[F.prop]=O),Br(e._startAt=Ht.set(g,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn?e._startAt.revert(Xl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Fn(l)||l&&!p,E=0;E<g.length;E++){if(A=g[E],w=A._gsap||id(g)[E]._gsap,e._ptLookup[E]=L={},Zh[w.id]&&wr.length&&uc(),B=y===g?E:y.indexOf(A),F&&(P=new F).init(A,O||T,e,B,y)!==!1&&(e._pt=C=new Bn(e._pt,A,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(k){L[k]=C}),P.priority&&(M=1)),!F||O)for(S in T)Xn[S]&&(P=l_(S,T,e,B,A,y))?P.priority&&(M=1):L[S]=C=rd.call(e,A,S,"get",T[S],B,y,0,i.stringFilter);e._op&&e._op[E]&&e.kill(A,e._op[E]),v&&e._pt&&(Sr=e,Rt.killTweensOf(A,L,e.globalTime(t)),H=!e.parent,Sr=0),e._pt&&l&&(Zh[w.id]=1)}M&&p_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,f&&t<=0&&x.render(si,!0,!0)},fb=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return rf=1,e.vars[t]="+=0",sd(e,a),rf=0,l?Ba(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ot(n)+vn(h.e)),h.b&&(h.b=u.s+vn(h.b))},db=function(e,t){var n=e[0]?fs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=vs({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},pb=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(An(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ha=function(e,t,n,i,s){return Lt(e)?e.call(t,n,i,s):Jt(e)&&~e.indexOf("random(")?Oa(e):e},c_=nd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",u_={};Ln(c_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return u_[r]=1});var Ht=function(r){w0(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ca(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,p=l.keyframes,m=l.defaults,g=l.scrollTrigger,_=l.yoyoEase,y=i.parent||Rt,v=(An(n)||I0(n)?ir(n[0]):"length"in i)?[n]:oi(n),x,T,E,S,C,A,M,w;if(a._targets=v.length?id(v):Ba("GSAP target "+n+" not found. https://gsap.com",!jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||f||Il(c)||Il(u)){if(i=a.vars,x=a.timeline=new bn({data:"nested",defaults:m||{},targets:y&&y.data==="nested"?y.vars.targets:v}),x.kill(),x.parent=x._dp=Qi(a),x._start=0,f||Il(c)||Il(u)){if(S=v.length,M=f&&Q0(f),Bi(f))for(C in f)~c_.indexOf(C)&&(w||(w={}),w[C]=f[C]);for(T=0;T<S;T++)E=hc(i,u_),E.stagger=0,_&&(E.yoyoEase=_),w&&vs(E,w),A=v[T],E.duration=+ha(c,Qi(a),T,A,v),E.delay=(+ha(u,Qi(a),T,A,v)||0)-a._delay,!f&&S===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),x.to(A,E,M?M(T,A,v):0),x._ease=it.none;x.duration()?c=u=0:a.timeline=0}else if(p){ca(li(x.vars.defaults,{ease:"none"})),x._ease=ps(p.ease||i.ease||"none");var F=0,P,L,B;if(An(p))p.forEach(function(O){return x.to(v,O,">")}),x.duration();else{E={};for(C in p)C==="ease"||C==="easeEach"||pb(C,p[C],E,p.easeEach);for(C in E)for(P=E[C].sort(function(O,H){return O.t-H.t}),F=0,T=0;T<P.length;T++)L=P[T],B={ease:L.e,duration:(L.t-(T?P[T-1].t:0))/100*c},B[C]=L.v,x.to(v,B,F),F+=B.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!jf&&(Sr=Qi(a),Rt.killTweensOf(v),Sr=0),Ci(y,Qi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!p&&a._start===$t(y._time)&&Fn(h)&&XC(Qi(a))&&y.data!=="nested")&&(a._tTime=-At,a.render(Math.max(0,-u)||0)),g&&W0(Qi(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-At&&!u?l:i<At?0:i,f,d,p,m,g,_,y,v,x;if(!c)YC(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,s,o);if(f=$t(h%m),h===l?(p=this._repeat,f=c):(p=~~(h/m),p&&p===$t(h/m)&&(f=c,p--),f>c&&(f=c)),_=this._yoyo&&p&1,_&&(x=this._yEase,f=c-f),g=Io(this._tTime,m),f===a&&!o&&this._initted&&p===g)return this._tTime=h,this;p!==g&&(v&&this._yEase&&s_(v,_),this.vars.repeatRefresh&&!_&&!this._lock&&this._time!==m&&this._initted&&(this._lock=o=1,this.render($t(m*p),!0).invalidate()._lock=0))}if(!this._initted){if(X0(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!a&&!s&&!p&&(Yn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&$h(this,i,s,o),Yn(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&Yn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&$h(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Br(this,1),!s&&!(u&&!a)&&(h||a||_)&&(Yn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Na||qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||sd(this,c),u=this._ease(c/this._dur),fb(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Hc(this,0),this.parent||V0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ra(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Sr&&Sr.vars.overwrite!==!0)._first||ra(this),this.parent&&o!==this.timeline.totalDuration()&&Po(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?oi(i):a,c=this._ptLookup,u=this._pt,h,f,d,p,m,g,_;if((!s||s==="all")&&GC(a,l))return s==="all"&&(this._pt=0),ra(this);for(h=this._op=this._op||[],s!=="all"&&(Jt(s)&&(m={},Ln(s,function(y){return m[y]=1}),s=m),s=db(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],s==="all"?(h[_]=s,p=f,d={}):(d=h[_]=h[_]||{},p=s);for(m in p)g=f&&f[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&kc(this,g,"_pt"),delete f[m]),d!=="all"&&(d[m]=1)}return this._initted&&!this._pt&&u&&ra(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ua(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ua(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Rt.killTweensOf(i,s,o)},e}(ka);li(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ln("staggerTo,staggerFrom,staggerFromTo",function(r){Ht[r]=function(){var e=new bn,t=ef.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var od=function(e,t,n){return e[t]=n},h_=function(e,t,n){return e[t](n)},mb=function(e,t,n,i){return e[t](i.fp,n)},gb=function(e,t,n){return e.setAttribute(t,n)},ad=function(e,t){return Lt(e[t])?h_:Zf(e[t])&&e.setAttribute?gb:od},f_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},_b=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},d_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ld=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},vb=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},xb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?kc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},yb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},p_=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Bn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||f_,this.d=l||this,this.set=c||od,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=yb,this.m=n,this.mt=s,this.tween=i},r}();Ln(nd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return td[r]=1});Zn.TweenMax=Zn.TweenLite=Ht;Zn.TimelineLite=Zn.TimelineMax=bn;Rt=new bn({sortChildren:!1,defaults:Ro,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jn.stringFilter=i_;var ms=[],Yl={},Sb=[],Em=0,Ab=0,Du=function(e){return(Yl[e]||Sb).map(function(t){return t()})},sf=function(){var e=Date.now(),t=[];e-Em>2&&(Du("matchMediaInit"),ms.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ti.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Du("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Em=e,Du("matchMedia"))},m_=function(){function r(t,n){this.selector=n&&tf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ab++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Lt(n)&&(s=i,i=n,n=Lt);var o=this,a=function(){var c=wt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=tf(s)),wt=o,h=i.apply(o,arguments),Lt(h)&&o._r.push(h),wt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Lt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=wt;wt=null,n(this),wt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ht&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof bn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ht)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ms.length;o--;)ms[o].id===this.id&&ms.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),Mb=function(){function r(t){this.contexts=[],this.scope=t,wt&&wt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Bi(n)||(n={matches:n});var o=new m_(0,s||this.scope),a=o.conditions={},l,c,u;wt&&!o.selector&&(o.selector=wt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ti.matchMedia(n[c]),l&&(ms.indexOf(o)<0&&ms.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(sf):l.addEventListener("change",sf)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),dc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return e_(i)})},timeline:function(e){return new bn(e)},getTweensOf:function(e,t){return Rt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Jt(e)&&(e=oi(e)[0]);var s=fs(e||{}).get,o=n?H0:z0;return n==="native"&&(n=""),e&&(t?o((Xn[t]&&Xn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Xn[a]&&Xn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=oi(e),e.length>1){var i=e.map(function(u){return Nn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Xn[t],a=fs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;to._pt=0,h.init(e,n?u+n:u,to,0,[e]),h.render(1,h),to._pt&&ld(1,to)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Nn.to(e,vs((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ps(e.ease,Ro.ease)),ym(Ro,e||{})},config:function(e){return ym(jn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Xn[a]&&!Zn[a]&&Ba(t+" effect requires "+a+" plugin.")}),wu[t]=function(a,l,c){return n(oi(a),li(l||{},s),c)},o&&(bn.prototype[t]=function(a,l,c){return this.add(wu[t](a,Bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=ps(t)},parseEase:function(e,t){return arguments.length?ps(e,t):it},getById:function(e){return Rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new bn(e),i,s;for(n.smoothChildTiming=Fn(e.smoothChildTiming),Rt.remove(n),n._dp=0,n._time=n._tTime=Rt._time,i=Rt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ht&&i.vars.onComplete===i._targets[0]))&&Ci(n,i,i._start-i._delay),i=s;return Ci(Rt,n,0),n},context:function(e,t){return e?new m_(e,t):wt},matchMedia:function(e){return new Mb(e)},matchMediaRefresh:function(){return ms.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||sf()},addEventListener:function(e,t){var n=Yl[e]||(Yl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Yl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:tb,wrapYoyo:nb,distribute:Q0,random:j0,snap:K0,normalize:eb,getUnit:vn,clamp:jC,splitColor:t_,toArray:oi,selector:tf,mapRange:$0,pipe:$C,unitize:JC,interpolate:ib,shuffle:Y0},install:B0,effects:wu,ticker:qn,updateRoot:bn.updateRoot,plugins:Xn,globalTimeline:Rt,core:{PropTween:Bn,globals:U0,Tween:Ht,Timeline:bn,Animation:ka,getCache:fs,_removeLinkedListItem:kc,reverting:function(){return Sn},context:function(e){return e&&wt&&(wt.data.push(e),e._ctx=wt),wt},suppressOverwrites:function(e){return jf=e}}};Ln("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return dc[r]=Ht[r]});qn.add(bn.updateRoot);to=dc.to({},{duration:0});var Tb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Eb=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Tb(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Fu=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Jt(s)&&(l={},Ln(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Eb(a,s)}}}},Nn=dc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Fu("roundProps",nf),Fu("modifiers"),Fu("snap",K0))||dc;Ht.version=bn.version=Nn.version="3.12.5";L0=1;$f()&&Do();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Cm,Ar,fo,cd,ls,bm,ud,Cb=function(){return typeof window<"u"},rr={},$r=180/Math.PI,po=Math.PI/180,Vs=Math.atan2,wm=1e8,hd=/([A-Z])/g,bb=/(left|right|width|margin|padding|x)/i,wb=/[\s,\(]\S/,wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},of=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Rb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ib=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Pb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},g_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},__=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Db=function(e,t,n){return e.style[t]=n},Fb=function(e,t,n){return e.style.setProperty(t,n)},Lb=function(e,t,n){return e._gsap[t]=n},Bb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ub=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Ob=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Pt="transform",Un=Pt+"Origin",Nb=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in rr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ki(i,a)}):this.tfm[e]=o.x?o[e]:Ki(i,e),e===Un&&(this.tfm.zOrigin=o.zOrigin);else return wi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Pt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Un,t,"")),e=Pt}(s||t)&&this.props.push(e,t,s[e])},v_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},kb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(hd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ud(),(!s||!s.isStart)&&!n[Pt]&&(v_(n),i.zOrigin&&n[Un]&&(n[Un]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},x_=function(e,t){var n={target:e,props:[],revert:kb,save:Nb};return e._gsap||Nn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},y_,af=function(e,t){var n=Ar.createElementNS?Ar.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ar.createElement(e);return n&&n.style?n:Ar.createElement(e)},Di=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(hd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Fo(t)||t,1)||""},Rm="O,Moz,ms,Ms,Webkit".split(","),Fo=function(e,t,n){var i=t||ls,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Rm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Rm[o]:"")+e},lf=function(){Cb()&&window.document&&(Cm=window,Ar=Cm.document,fo=Ar.documentElement,ls=af("div")||{style:{}},af("div"),Pt=Fo(Pt),Un=Pt+"Origin",ls.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",y_=!!Fo("perspective"),ud=Nn.core.reverting,cd=1)},Lu=function r(e){var t=af("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(fo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),fo.removeChild(t),this.style.cssText=s,o},Im=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},S_=function(e){var t;try{t=e.getBBox()}catch{t=Lu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Lu||(t=Lu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Im(e,["x","cx","x1"])||0,y:+Im(e,["y","cy","y1"])||0,width:0,height:0}:t},A_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&S_(e))},xs=function(e,t){if(t){var n=e.style,i;t in rr&&t!==Un&&(t=Pt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(hd,"-$1").toLowerCase())):n.removeAttribute(t)}},Mr=function(e,t,n,i,s,o){var a=new Bn(e._pt,t,n,0,1,o?__:g_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Pm={deg:1,rad:1,turn:1},zb={grid:1,flex:1},Ur=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ls.style,l=bb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",p,m,g,_;if(i===o||!s||Pm[i]||Pm[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),_=e.getCTM&&A_(e),(d||o==="%")&&(rr[t]||~t.indexOf("adius")))return p=_?e.getBBox()[l?"width":"height"]:e[u],Ot(d?s/p*h:s/100*p);if(a[l?"width":"height"]=h+(f?o:i),m=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Ar||!m.appendChild)&&(m=Ar.body),g=m._gsap,g&&d&&g.width&&l&&g.time===qn.time&&!g.uncache)return Ot(s/g.width*h);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+i,p=e[u],y?e.style[t]=y:xs(e,t)}else(d||o==="%")&&!zb[Di(m,"display")]&&(a.position=Di(e,"position")),m===e&&(a.position="static"),m.appendChild(ls),p=ls[u],m.removeChild(ls),a.position="absolute";return l&&d&&(g=fs(m),g.time=qn.time,g.width=m[u]),Ot(f?p*s/h:p&&s?h/p*s:0)},Ki=function(e,t,n,i){var s;return cd||lf(),t in wi&&t!=="transform"&&(t=wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),rr[t]&&t!=="transform"?(s=Ha(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:mc(Di(e,Un))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=pc[t]&&pc[t](e,t,n)||Di(e,t)||N0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ur(e,t,s,n)+n:s},Hb=function(e,t,n,i){if(!n||n==="none"){var s=Fo(t,e,1),o=s&&Di(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Di(e,"borderTopColor"))}var a=new Bn(this._pt,e.style,t,0,1,d_),l=0,c=0,u,h,f,d,p,m,g,_,y,v,x,T;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(m=e.style[t],e.style[t]=i,i=Di(e,t)||i,m?e.style[t]=m:xs(e,t)),u=[n,i],i_(u),n=u[0],i=u[1],f=n.match(eo)||[],T=i.match(eo)||[],T.length){for(;h=eo.exec(i);)g=h[0],y=i.substring(l,h.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),g!==(m=f[c++]||"")&&(d=parseFloat(m)||0,x=m.substr((d+"").length),g.charAt(1)==="="&&(g=ho(d,g)+x),_=parseFloat(g),v=g.substr((_+"").length),l=eo.lastIndex-v.length,v||(v=v||jn.units[t]||x,l===i.length&&(i+=v,a.e+=v)),x!==v&&(d=Ur(e,t,m,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:_-d,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?__:g_;return D0.test(i)&&(a.e=0),this._pt=a,a},Dm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Vb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Dm[n]||n,t[1]=Dm[i]||i,t.join(" ")},Gb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],rr[a]&&(l=1,a=a==="transformOrigin"?Un:Pt),xs(n,a);l&&(xs(n,Pt),o&&(o.svg&&n.removeAttribute("transform"),Ha(n,1),o.uncache=1,v_(i)))}},pc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Bn(e._pt,t,n,0,0,Gb);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},za=[1,0,0,1,0,0],M_={},T_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Fm=function(e){var t=Di(e,Pt);return T_(t)?za:t.substr(7).match(P0).map(Ot)},fd=function(e,t){var n=e._gsap||fs(e),i=e.style,s=Fm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?za:s):(s===za&&!e.offsetParent&&e!==fo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,fo.appendChild(e)),s=Fm(e),l?i.display=l:xs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):fo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},cf=function(e,t,n,i,s,o){var a=e._gsap,l=s||fd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],p=l[1],m=l[2],g=l[3],_=l[4],y=l[5],v=t.split(" "),x=parseFloat(v[0])||0,T=parseFloat(v[1])||0,E,S,C,A;n?l!==za&&(S=d*g-p*m)&&(C=x*(g/S)+T*(-m/S)+(m*y-g*_)/S,A=x*(-p/S)+T*(d/S)-(d*y-p*_)/S,x=C,T=A):(E=S_(e),x=E.x+(~v[0].indexOf("%")?x/100*E.width:x),T=E.y+(~(v[1]||v[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&a.smooth?(_=x-c,y=T-u,a.xOffset=h+(_*d+y*m)-_,a.yOffset=f+(_*p+y*g)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Un]="0px 0px",o&&(Mr(o,a,"xOrigin",c,x),Mr(o,a,"yOrigin",u,T),Mr(o,a,"xOffset",h,a.xOffset),Mr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+T)},Ha=function(e,t){var n=e._gsap||new a_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Di(e,Un)||"0",u,h,f,d,p,m,g,_,y,v,x,T,E,S,C,A,M,w,F,P,L,B,O,H,k,j,ne,oe,fe,xe,W,K;return u=h=f=m=g=_=y=v=x=0,d=p=1,n.svg=!!(e.getCTM&&A_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pt]!=="none"?l[Pt]:"")),i.scale=i.rotate=i.translate="none"),S=fd(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),cf(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,S)),T=n.xOrigin||0,E=n.yOrigin||0,S!==za&&(w=S[0],F=S[1],P=S[2],L=S[3],u=B=S[4],h=O=S[5],S.length===6?(d=Math.sqrt(w*w+F*F),p=Math.sqrt(L*L+P*P),m=w||F?Vs(F,w)*$r:0,y=P||L?Vs(P,L)*$r+m:0,y&&(p*=Math.abs(Math.cos(y*po))),n.svg&&(u-=T-(T*w+E*P),h-=E-(T*F+E*L))):(K=S[6],xe=S[7],ne=S[8],oe=S[9],fe=S[10],W=S[11],u=S[12],h=S[13],f=S[14],C=Vs(K,fe),g=C*$r,C&&(A=Math.cos(-C),M=Math.sin(-C),H=B*A+ne*M,k=O*A+oe*M,j=K*A+fe*M,ne=B*-M+ne*A,oe=O*-M+oe*A,fe=K*-M+fe*A,W=xe*-M+W*A,B=H,O=k,K=j),C=Vs(-P,fe),_=C*$r,C&&(A=Math.cos(-C),M=Math.sin(-C),H=w*A-ne*M,k=F*A-oe*M,j=P*A-fe*M,W=L*M+W*A,w=H,F=k,P=j),C=Vs(F,w),m=C*$r,C&&(A=Math.cos(C),M=Math.sin(C),H=w*A+F*M,k=B*A+O*M,F=F*A-w*M,O=O*A-B*M,w=H,B=k),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,_=180-_),d=Ot(Math.sqrt(w*w+F*F+P*P)),p=Ot(Math.sqrt(O*O+K*K)),C=Vs(B,O),y=Math.abs(C)>2e-4?C*$r:0,x=W?1/(W<0?-W:W):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!T_(Di(e,Pt)),H&&e.setAttribute("transform",H))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ot(d),n.scaleY=Ot(p),n.rotation=Ot(m)+a,n.rotationX=Ot(g)+a,n.rotationY=Ot(_)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Un]=mc(c)),n.xOffset=n.yOffset=0,n.force3D=jn.force3D,n.renderTransform=n.svg?Xb:y_?E_:Wb,n.uncache=0,n},mc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Bu=function(e,t,n){var i=vn(t);return Ot(parseFloat(t)+parseFloat(Ur(e,"x",n+"px",i)))+i},Wb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,E_(e,t)},Kr="0deg",Zo="0px",jr=") ",E_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,p=n.scaleX,m=n.scaleY,g=n.transformPerspective,_=n.force3D,y=n.target,v=n.zOrigin,x="",T=_==="auto"&&e&&e!==1||_===!0;if(v&&(h!==Kr||u!==Kr)){var E=parseFloat(u)*po,S=Math.sin(E),C=Math.cos(E),A;E=parseFloat(h)*po,A=Math.cos(E),o=Bu(y,o,S*A*-v),a=Bu(y,a,-Math.sin(E)*-v),l=Bu(y,l,C*A*-v+v)}g!==Zo&&(x+="perspective("+g+jr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(T||o!==Zo||a!==Zo||l!==Zo)&&(x+=l!==Zo||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+jr),c!==Kr&&(x+="rotate("+c+jr),u!==Kr&&(x+="rotateY("+u+jr),h!==Kr&&(x+="rotateX("+h+jr),(f!==Kr||d!==Kr)&&(x+="skew("+f+", "+d+jr),(p!==1||m!==1)&&(x+="scale("+p+", "+m+jr),y.style[Pt]=x||"translate(0, 0)"},Xb=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,p=n.xOrigin,m=n.yOrigin,g=n.xOffset,_=n.yOffset,y=n.forceCSS,v=parseFloat(o),x=parseFloat(a),T,E,S,C,A;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=po,c*=po,T=Math.cos(l)*h,E=Math.sin(l)*h,S=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=po,A=Math.tan(c-u),A=Math.sqrt(1+A*A),S*=A,C*=A,u&&(A=Math.tan(u),A=Math.sqrt(1+A*A),T*=A,E*=A)),T=Ot(T),E=Ot(E),S=Ot(S),C=Ot(C)):(T=h,C=f,E=S=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=Ur(d,"x",o,"px"),x=Ur(d,"y",a,"px")),(p||m||g||_)&&(v=Ot(v+p-(p*T+m*S)+g),x=Ot(x+m-(p*E+m*C)+_)),(i||s)&&(A=d.getBBox(),v=Ot(v+i/100*A.width),x=Ot(x+s/100*A.height)),A="matrix("+T+","+E+","+S+","+C+","+v+","+x+")",d.setAttribute("transform",A),y&&(d.style[Pt]=A)},qb=function(e,t,n,i,s){var o=360,a=Jt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?$r:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*wm)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*wm)%o-~~(c/o)*o)),e._pt=f=new Bn(e._pt,t,n,i,c,Rb),f.e=u,f.u="deg",e._props.push(n),f},Lm=function(e,t){for(var n in t)e[n]=t[n];return e},Yb=function(e,t,n){var i=Lm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Pt]=t,a=Ha(n,1),xs(n,Pt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pt],o[Pt]=t,a=Ha(n,1),o[Pt]=c);for(l in rr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=vn(c),p=vn(u),h=d!==p?Ur(n,l,c,p):parseFloat(c),f=parseFloat(u),e._pt=new Bn(e._pt,a,l,h,f-h,of),e._pt.u=p||0,e._props.push(l));Lm(a,i)};Ln("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});pc[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(p){return Ki(a,p,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(p,m){return d[p]=f[m]=f[m]||f[(m-1)/2|0]}),a.init(l,d,h)}});var C_={name:"css",register:lf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,p,m,g,_,y,v,x,T,E,S,C;cd||lf(),this.styles=this.styles||x_(e),C=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(u=t[m],!(Xn[m]&&l_(m,t,n,i,e,s)))){if(d=typeof u,p=pc[m],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Oa(u)),p)p(this,e,m,u,n)&&(S=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Rr.lastIndex=0,Rr.test(c)||(g=vn(c),_=vn(u)),_?g!==_&&(c=Ur(e,m,c,_)+_):g&&(u+=g),this.add(a,"setProperty",c,u,i,s,0,0,m),o.push(m),C.push(m,0,a[m]);else if(d!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,i,e,s):l[m],Jt(c)&&~c.indexOf("random(")&&(c=Oa(c)),vn(c+"")||c==="auto"||(c+=jn.units[m]||vn(Ki(e,m))||""),(c+"").charAt(1)==="="&&(c=Ki(e,m))):c=Ki(e,m),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),m in wi&&(m==="autoAlpha"&&(f===1&&Ki(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),Mr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=wi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in rr,v){if(this.styles.save(m),x||(T=e._gsap,T.renderTransform&&!t.parseTransform||Ha(e,t.parseTransform),E=t.smoothOrigin!==!1&&T.smooth,x=this._pt=new Bn(this._pt,a,Pt,0,1,T.renderTransform,T,0,-1),x.dep=1),m==="scale")this._pt=new Bn(this._pt,T,"scaleY",T.scaleY,(y?ho(T.scaleY,y+h):h)-T.scaleY||0,of),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){C.push(Un,0,a[Un]),u=Vb(u),T.svg?cf(e,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==T.zOrigin&&Mr(this,T,"zOrigin",T.zOrigin,_),Mr(this,a,m,mc(c),mc(u)));continue}else if(m==="svgOrigin"){cf(e,u,1,E,0,this);continue}else if(m in M_){qb(this,T,m,f,y?ho(f,y+u):u);continue}else if(m==="smoothOrigin"){Mr(this,T,"smooth",T.smooth,u);continue}else if(m==="force3D"){T[m]=u;continue}else if(m==="transform"){Yb(this,u,e);continue}}else m in a||(m=Fo(m)||m);if(v||(h||h===0)&&(f||f===0)&&!wb.test(u)&&m in a)g=(c+"").substr((f+"").length),h||(h=0),_=vn(u)||(m in jn.units?jn.units[m]:g),g!==_&&(f=Ur(e,m,c,_)),this._pt=new Bn(this._pt,v?T:a,m,f,(y?ho(f,y+h):h)-f,!v&&(_==="px"||m==="zIndex")&&t.autoRound!==!1?Pb:of),this._pt.u=_||0,g!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Ib);else if(m in a)Hb.call(this,e,m,c,y?y+u:u);else if(m in e)this.add(e,m,c||e[m],y?y+u:u,i,s);else if(m!=="parseTransform"){ed(m,u);continue}v||(m in a?C.push(m,0,a[m]):C.push(m,1,c||e[m])),o.push(m)}}S&&p_(this)},render:function(e,t){if(t.tween._time||!ud())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ki,aliases:wi,getSetter:function(e,t,n){var i=wi[t];return i&&i.indexOf(",")<0&&(t=i),t in rr&&t!==Un&&(e._gsap.x||Ki(e,"x"))?n&&bm===n?t==="scale"?Bb:Lb:(bm=n||{})&&(t==="scale"?Ub:Ob):e.style&&!Zf(e.style[t])?Db:~t.indexOf("-")?Fb:ad(e,t)},core:{_removeProperty:xs,_getMatrix:fd}};Nn.utils.checkPrefix=Fo;Nn.core.getStyleSaver=x_;(function(r,e,t,n){var i=Ln(r+","+e+","+t,function(s){rr[s]=1});Ln(e,function(s){jn.units[s]="deg",M_[s]=1}),wi[i[13]]=r+","+e,Ln(n,function(s){var o=s.split(":");wi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){jn.units[r]="px"});Nn.registerPlugin(C_);var uf=Nn.registerPlugin(C_)||Nn;uf.core.Tween;function Uu(r,e,t,n=.5){const i={x:r.position.x,y:r.position.y,z:r.position.z},s=new I(e.x,e.y,e.z),o=r.position.clone().add(r.getWorldDirection(new I)),a=new I(t.x,t.y,t.z),l=new Promise(u=>{uf.to(i,{x:s.x,y:s.y,z:s.z,duration:n,ease:"power1.inOut",onUpdate:()=>{r.position.set(i.x,i.y,i.z)},onComplete:u})}),c=new Promise(u=>{uf.to(o,{x:a.x,y:a.y,z:a.z,duration:.75,ease:"power4.in",onUpdate:()=>{r.lookAt(o)},onComplete:u})});Promise.all([c,l]).then(()=>{})}const Gs=[];function Vo(r,e=us){let t=null;const n=new Set;function i(a){if(vg(r,a)&&(r=a,t)){const l=!Gs.length;for(const c of n)c[1](),Gs.push(c,r);if(l){for(let c=0;c<Gs.length;c+=2)Gs[c][0](Gs[c+1]);Gs.length=0}}}function s(a){i(a(r))}function o(a,l=us){const c=[a,l];return n.add(c),n.size===1&&(t=e(i,s)||us),a(r),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}let vr=_i({movement:{moveForward:!1,moveBackward:!1,moveLeft:!1,moveRight:!1},acceleration:0,accelerationFactor:.4}),gn=Vo(),Qb=Vo(!1),$o=Vo(1),hf=Vo(!1),dd=class ff{static createButton(e,t={}){const n=document.createElement("button");function i(){let c=null;async function u(d){d.addEventListener("end",h),await e.xr.setSession(d),n.textContent="EXIT VR",c=d}function h(){c.removeEventListener("end",h),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const f={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",f).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(u).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(u).catch(d=>{console.warn(d)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="VR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():o(),c&&ff.xrSessionIsGranted&&n.click()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{ff.xrSessionIsGranted=!0})}}};dd.xrSessionIsGranted=!1;dd.registerSessionGrantedListener();function Bm(r,e){wn(e,!0),ci(()=>{const t=dd.createButton(e.renderer);t.style.position="static",document.querySelector(`#${e.id}`).append(t)}),Rn()}var Kb=Mn('<dialog class="modal"><div class="modal-box"><h3 class="font-bold text-lg"> </h3> <div class="py-4"><!></div> <div class="modal-action"><form method="dialog"><button class="btn">Close</button></form></div></div></dialog>');function no(r,e){wn(e,!0);var t=Kb(),n=ht(t),i=ht(n),s=ht(i),o=mt(i,2),a=ht(o);ox(a,()=>e.content),Jl(()=>{ax(t,"id",e.id),nc(s,e.title)}),mn(r,t),Rn()}var jb=()=>document.getElementById("omLokalen_modal").showModal(),Zb=()=>document.getElementById("omFastigheten_modal").showModal(),$b=()=>document.getElementById("liknanadeLokaler_modal").showModal(),Jb=()=>document.getElementById("kontaktUppgifter_modal").showModal(),ew=Mn('<li><a class="uppercase font-bold">Lokalen</a></li> <li><a class="uppercase font-bold">Fastigheten</a></li> <li><a class="uppercase font-bold">Liknande lokaler</a></li> <li><a class="uppercase font-bold">Kontakt</a></li>',1),tw=Mn("<p>Content här</p>"),nw=Mn("<p>Content här</p>"),iw=Mn("<p>Content här</p>"),rw=Mn("<p>Content här</p>"),sw=(r,e,t)=>e(Qe(t)),ow=Mn("<li><a> </a></li>"),aw=Mn('<div class="navbar bg-base-100 absolute top-0 left-0 opacity-90"><div class="navbar-start"><a class="btn btn-ghost text-xl"><span class="border-2 border-base-content px-2 py-1">SR</span>Demovisning</a></div> <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1"><!> <li><details><summary>&nbsp;</summary> <ul class="p-2"><li><div id="VR" class="mr-5"><!></div></li></ul></details></li></ul></div> <div class="navbar-end"><div class="dropdown dropdown-end"><div tabindex="0" role="button" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div> <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"><!> <div class="w-full my-2 px-2"><hr class="border-gray-300"></div> <ul class="p-2"><li><div id="VR2" class="mr-5"><!></div></li></ul></ul></div></div> <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-[85%] max-w-md p-0 bg-base-100 rounded-lg shadow-md opacity-90"><button class="btn text-lg">⇦</button> <div class="dropdown dropdown-hover dropdown-top z-100"><div tabindex="0" role="button"><span class="text-lg font-semibold"> </span></div> <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow left-1/2 transform -translate-x-1/2"></ul></div> <button class="btn text-lg">⇨</button></div></div>   <!> <!> <!> <!>',1);function lw(r,e){wn(e,!0);const t=Ai(),n=()=>an($o,"$currentPoiNumber",t),i=()=>an(gn,"$camera",t),s=Se=>{var N=ew(),Xe=xa(N),Oe=ht(Xe);Oe.__click=[jb];var Ne=mt(Xe,2),Te=ht(Ne);Te.__click=[Zb];var Je=mt(Ne,2),Ie=ht(Je);Ie.__click=[$b];var D=mt(Je,2),b=ht(D);b.__click=[Jb],mn(Se,N)},o=Se=>{var N=tw();mn(Se,N)},a=Se=>{var N=nw();mn(Se,N)},l=Se=>{var N=iw();mn(Se,N)},c=Se=>{var N=rw();mn(Se,N)},u="omLokalen_modal",h="omFastigheten_modal",f="liknanadeLokaler_modal",d="kontaktUppgifter_modal";function p(Se){console.log("MOVEEE"),rs($o,Hs.findIndex(N=>N.name===Se.name)+1),console.log("current",n()),Uu(i(),Se.targetPosition,Se.lookAtPosition)}let m=ya(()=>Hs[n()-1]);ci(()=>{i().position.set(Qe(m).targetPosition.x,Qe(m).targetPosition.y,Qe(m).targetPosition.z),i().lookAt(Qe(m).lookAtPosition.x,Qe(m).lookAtPosition.y,Qe(m).lookAtPosition.z)});function g(){let Se=n()-1;Se=(Se+1)%Hs.length,rs($o,Se+1),Uu(i(),Qe(m).targetPosition,Qe(m).lookAtPosition)}function _(){let Se=n()-1;Se==0?rs($o,_i(Hs.length)):(Se=(Se-1)%Hs.length,rs($o,Se+1)),Uu(i(),Qe(m).targetPosition,Qe(m).lookAtPosition)}var y=aw(),v=xa(y),x=mt(ht(v),2),T=ht(x),E=ht(T);s(E);var S=mt(E,2),C=ht(S),A=mt(ht(C),2),M=ht(A),w=ht(M),F=ht(w);Bm(F,{get renderer(){return e.renderer},id:"VR"});var P=mt(x,2),L=ht(P),B=mt(ht(L),2),O=ht(B);s(O);var H=mt(O,4),k=ht(H),j=ht(k),ne=ht(j);Bm(ne,{get renderer(){return e.renderer},id:"VR2"});var oe=mt(P,2),fe=ht(oe);fe.__click=_;var xe=mt(fe,2),W=ht(xe),K=ht(W),se=ht(K),te=mt(W,2);nx(te,21,()=>Hs,ex,(Se,N)=>{var Xe=ow(),Oe=ht(Xe);Oe.__click=[sw,p,N];var Ne=ht(Oe);Jl(()=>nc(Ne,Qe(N).name)),mn(Se,Xe)});var ye=mt(xe,2);ye.__click=g;var Ae=mt(v,2);no(Ae,{id:u,title:"Om lokalen",content:o});var be=mt(Ae,2);no(be,{id:h,title:"Om fastigheten",content:a});var Ve=mt(be,2);no(Ve,{id:f,title:"Liknanade lokaler",content:l});var Ue=mt(Ve,2);no(Ue,{id:d,title:"Kontaktuppgifter",content:c}),Jl(()=>nc(se,Qe(m).name)),mn(r,y),Rn()}Qv(["click"]);var hn=Wg(()=>vr);function cw(r,e){wn(e,!1);const t=Ai(),n=()=>an(gn,"$camera",t);ci(()=>{i()});function i(){const s=a=>{switch(a.code){case"KeyW":case"ArrowUp":hn(hn().movement.moveForward=!0);break;case"KeyA":case"ArrowLeft":hn(hn().movement.moveLeft=!0);break;case"KeyS":case"ArrowDown":hn(hn().movement.moveBackward=!0);break;case"KeyD":case"ArrowRight":hn(hn().movement.moveRight=!0);break}},o=a=>{switch(a.code){case"KeyP":const l=new I;n().getWorldDirection(l);const u=new I().copy(n().position).add(l.multiplyScalar(100));console.log(n().position.x+", "+n().position.y+", "+n().position.z,u.x+", "+u.y+", "+u.z);break;case"KeyW":case"ArrowUp":hn(hn().movement.moveForward=!1);break;case"KeyA":case"ArrowLeft":hn(hn().movement.moveLeft=!1);break;case"KeyS":case"ArrowDown":hn(hn().movement.moveBackward=!1);break;case"KeyD":case"ArrowRight":hn(hn().movement.moveRight=!1);break}};document.addEventListener("keydown",s),document.addEventListener("keyup",o)}Gg(),Rn()}const Ql=(r,e)=>{const t=e.x-r.x,n=e.y-r.y;return Math.sqrt(t*t+n*n)},uw=(r,e)=>{const t=e.x-r.x,n=e.y-r.y;return fw(Math.atan2(n,t))},hw=(r,e,t)=>{const n={x:0,y:0};return t=df(t),n.x=r.x-e*Math.cos(t),n.y=r.y-e*Math.sin(t),n},df=r=>r*(Math.PI/180),fw=r=>r*(180/Math.PI),dw=r=>isNaN(r.buttons)?r.pressure!==0:r.buttons!==0,Ou=new Map,Um=r=>{Ou.has(r)&&clearTimeout(Ou.get(r)),Ou.set(r,setTimeout(r,100))},gc=(r,e,t)=>{const n=e.split(/[ ,]+/g);let i;for(let s=0;s<n.length;s+=1)i=n[s],r.addEventListener?r.addEventListener(i,t,!1):r.attachEvent&&r.attachEvent(i,t)},Om=(r,e,t)=>{const n=e.split(/[ ,]+/g);let i;for(let s=0;s<n.length;s+=1)i=n[s],r.removeEventListener?r.removeEventListener(i,t):r.detachEvent&&r.detachEvent(i,t)},b_=r=>(r.preventDefault(),r.type.match(/^touch/)?r.changedTouches:r),Nm=()=>{const r=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:r,y:e}},km=(r,e)=>{e.top||e.right||e.bottom||e.left?(r.style.top=e.top,r.style.right=e.right,r.style.bottom=e.bottom,r.style.left=e.left):(r.style.left=e.x+"px",r.style.top=e.y+"px")},pd=(r,e,t)=>{const n=w_(r);for(let i in n)if(n.hasOwnProperty(i))if(typeof e=="string")n[i]=e+" "+t;else{let s="";for(let o=0,a=e.length;o<a;o+=1)s+=e[o]+" "+t+", ";n[i]=s.slice(0,-2)}return n},pw=(r,e)=>{const t=w_(r);for(let n in t)t.hasOwnProperty(n)&&(t[n]=e);return t},w_=r=>{const e={};return e[r]="",["webkit","Moz","o"].forEach(function(n){e[n+r.charAt(0).toUpperCase()+r.slice(1)]=""}),e},Nu=(r,e)=>{for(let t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);return r},mw=(r,e)=>{const t={};for(let n in r)r.hasOwnProperty(n)&&e.hasOwnProperty(n)?t[n]=e[n]:r.hasOwnProperty(n)&&(t[n]=r[n]);return t},pf=(r,e)=>{if(r.length)for(let t=0,n=r.length;t<n;t+=1)e(r[t]);else e(r)},gw=(r,e,t)=>({x:Math.min(Math.max(r.x,e.x-t),e.x+t),y:Math.min(Math.max(r.y,e.y-t),e.y+t)});var _w="ontouchstart"in window,vw=!!window.PointerEvent,xw=!!window.MSPointerEvent,Jo={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},io,Va={};vw?io=Jo.pointer:xw?io=Jo.MSPointer:_w?(io=Jo.touch,Va=Jo.mouse):io=Jo.mouse;function sr(){}sr.prototype.on=function(r,e){var t=this,n=r.split(/[ ,]+/g),i;t._handlers_=t._handlers_||{};for(var s=0;s<n.length;s+=1)i=n[s],t._handlers_[i]=t._handlers_[i]||[],t._handlers_[i].push(e);return t};sr.prototype.off=function(r,e){var t=this;return t._handlers_=t._handlers_||{},r===void 0?t._handlers_={}:e===void 0?t._handlers_[r]=null:t._handlers_[r]&&t._handlers_[r].indexOf(e)>=0&&t._handlers_[r].splice(t._handlers_[r].indexOf(e),1),t};sr.prototype.trigger=function(r,e){var t=this,n=r.split(/[ ,]+/g),i;t._handlers_=t._handlers_||{};for(var s=0;s<n.length;s+=1)i=n[s],t._handlers_[i]&&t._handlers_[i].length&&t._handlers_[i].forEach(function(o){o.call(t,{type:i,target:t},e)})};sr.prototype.config=function(r){var e=this;e.options=e.defaults||{},r&&(e.options=mw(e.options,r))};sr.prototype.bindEvt=function(r,e){var t=this;return t._domHandlers_=t._domHandlers_||{},t._domHandlers_[e]=function(){typeof t["on"+e]=="function"?t["on"+e].apply(t,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},gc(r,io[e],t._domHandlers_[e]),Va[e]&&gc(r,Va[e],t._domHandlers_[e]),t};sr.prototype.unbindEvt=function(r,e){var t=this;return t._domHandlers_=t._domHandlers_||{},Om(r,io[e],t._domHandlers_[e]),Va[e]&&Om(r,Va[e],t._domHandlers_[e]),delete t._domHandlers_[e],this};function Qt(r,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=r,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=Qt.id,Qt.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}Qt.prototype=new sr;Qt.constructor=Qt;Qt.id=0;Qt.prototype.buildEl=function(r){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};Qt.prototype.stylize=function(){if(this.options.dataOnly)return this;var r=this.options.fadeTime+"ms",e=pw("borderRadius","50%"),t=pd("transition","opacity",r),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},Nu(n.el,t),this.options.shape==="circle"&&Nu(n.back,e),Nu(n.front,e),this.applyStyles(n),this};Qt.prototype.applyStyles=function(r){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var t in r[e])this.ui[e].style[t]=r[e][t];return this};Qt.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};Qt.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};Qt.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};Qt.prototype.show=function(r){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),typeof r=="function"&&r.call(this)},e.options.fadeTime)),e};Qt.prototype.hide=function(r){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var t=e.options.mode==="dynamic"?"none":"block";e.ui.el.style.display=t,typeof r=="function"&&r.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){const t=e.options.restJoystick,n={};n.x=t===!0||t.x!==!1?0:e.instance.frontPosition.x,n.y=t===!0||t.y!==!1?0:e.instance.frontPosition.y,e.setPosition(r,n)}return e};Qt.prototype.setPosition=function(r,e){var t=this;t.frontPosition={x:e.x,y:e.y};var n=t.options.fadeTime+"ms",i={};i.front=pd("transition",["transform"],n);var s={front:{}};s.front={transform:"translate("+t.frontPosition.x+"px,"+t.frontPosition.y+"px)"},t.applyStyles(i),t.applyStyles(s),t.restTimeout=setTimeout(function(){typeof r=="function"&&r.call(t),t.restCallback()},t.options.fadeTime)};Qt.prototype.restCallback=function(){var r=this,e={};e.front=pd("transition","none",""),r.applyStyles(e),r.trigger("rested",r.instance)};Qt.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};Qt.prototype.computeDirection=function(r){var e=r.angle.radian,t=Math.PI/4,n=Math.PI/2,i,s,o;if(e>t&&e<t*3&&!r.lockX?i="up":e>-t&&e<=t&&!r.lockY?i="left":e>-t*3&&e<=-t&&!r.lockX?i="down":r.lockY||(i="right"),r.lockY||(e>-n&&e<n?s="left":s="right"),r.lockX||(e>0?o="up":o="down"),r.force>this.options.threshold){var a={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(a[l]=this.direction[l]);var c={};this.direction={x:s,y:o,angle:i},r.direction=this.direction;for(l in a)a[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return r;(!c.x||!c.y)&&this.trigger("plain",r),c.x||this.trigger("plain:"+s,r),c.y||this.trigger("plain:"+o,r),c.angle||this.trigger("dir dir:"+i,r)}else this.resetDirection();return r};function Nt(r,e){var t=this;t.nipples=[],t.idles=[],t.actives=[],t.ids=[],t.pressureIntervals={},t.manager=r,t.id=Nt.id,Nt.id+=1,t.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},t.config(e),(t.options.mode==="static"||t.options.mode==="semi")&&(t.options.multitouch=!1),t.options.multitouch||(t.options.maxNumberOfNipples=1);const n=getComputedStyle(t.options.zone.parentElement);return n&&n.display==="flex"&&(t.parentIsFlex=!0),t.updateBox(),t.prepareNipples(),t.bindings(),t.begin(),t.nipples}Nt.prototype=new sr;Nt.constructor=Nt;Nt.id=0;Nt.prototype.prepareNipples=function(){var r=this,e=r.nipples;e.on=r.on.bind(r),e.off=r.off.bind(r),e.options=r.options,e.destroy=r.destroy.bind(r),e.ids=r.ids,e.id=r.id,e.processOnMove=r.processOnMove.bind(r),e.processOnEnd=r.processOnEnd.bind(r),e.get=function(t){if(t===void 0)return e[0];for(var n=0,i=e.length;n<i;n+=1)if(e[n].identifier===t)return e[n];return!1}};Nt.prototype.bindings=function(){var r=this;r.bindEvt(r.options.zone,"start"),r.options.zone.style.touchAction="none",r.options.zone.style.msTouchAction="none"};Nt.prototype.begin=function(){var r=this,e=r.options;if(e.mode==="static"){var t=r.createNipple(e.position,r.manager.getIdentifier());t.add(),r.idles.push(t)}};Nt.prototype.createNipple=function(r,e){var t=this,n=t.manager.scroll,i={},s=t.options,o={x:t.parentIsFlex?n.x:n.x+t.box.left,y:t.parentIsFlex?n.y:n.y+t.box.top};if(r.x&&r.y)i={x:r.x-o.x,y:r.y-o.y};else if(r.top||r.right||r.bottom||r.left){var a=document.createElement("DIV");a.style.display="hidden",a.style.top=r.top,a.style.right=r.right,a.style.bottom=r.bottom,a.style.left=r.left,a.style.position="absolute",s.zone.appendChild(a);var l=a.getBoundingClientRect();s.zone.removeChild(a),i=r,r={x:l.left+n.x,y:l.top+n.y}}var c=new Qt(t,{color:s.color,size:s.size,threshold:s.threshold,fadeTime:s.fadeTime,dataOnly:s.dataOnly,restJoystick:s.restJoystick,restOpacity:s.restOpacity,mode:s.mode,identifier:e,position:r,zone:s.zone,frontPosition:{x:0,y:0},shape:s.shape});return s.dataOnly||(km(c.ui.el,i),km(c.ui.front,c.frontPosition)),t.nipples.push(c),t.trigger("added "+c.identifier+":added",c),t.manager.trigger("added "+c.identifier+":added",c),t.bindNipple(c),c};Nt.prototype.updateBox=function(){var r=this;r.box=r.options.zone.getBoundingClientRect()};Nt.prototype.bindNipple=function(r){var e=this,t,n=function(i,s){t=i.type+" "+s.id+":"+i.type,e.trigger(t,s)};r.on("destroyed",e.onDestroyed.bind(e)),r.on("shown hidden rested dir plain",n),r.on("dir:up dir:right dir:down dir:left",n),r.on("plain:up plain:right plain:down plain:left",n)};Nt.prototype.pressureFn=function(r,e,t){var n=this,i=0;clearInterval(n.pressureIntervals[t]),n.pressureIntervals[t]=setInterval((function(){var s=r.force||r.pressure||r.webkitForce||0;s!==i&&(e.trigger("pressure",s),n.trigger("pressure "+e.identifier+":pressure",s),i=s)}).bind(n),100)};Nt.prototype.onstart=function(r){var e=this,t=e.options,n=r;r=b_(r),e.updateBox();var i=function(s){e.actives.length<t.maxNumberOfNipples?e.processOnStart(s):n.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(o){if(Object.values(n.touches).findIndex(function(l){return l.identifier===o})<0){var a=[r[0]];a.identifier=o,e.processOnEnd(a)}}),e.actives.length<t.maxNumberOfNipples&&e.processOnStart(s))};return pf(r,i),e.manager.bindDocument(),!1};Nt.prototype.processOnStart=function(r){var e=this,t=e.options,n,i=e.manager.getIdentifier(r),s=r.force||r.pressure||r.webkitForce||0,o={x:r.pageX,y:r.pageY},a=e.getOrCreate(i,o);a.identifier!==i&&e.manager.removeIdentifier(a.identifier),a.identifier=i;var l=function(u){u.trigger("start",u),e.trigger("start "+u.id+":start",u),u.show(),s>0&&e.pressureFn(r,u,u.identifier),e.processOnMove(r)};if((n=e.idles.indexOf(a))>=0&&e.idles.splice(n,1),e.actives.push(a),e.ids.push(a.identifier),t.mode!=="semi")l(a);else{var c=Ql(o,a.position);if(c<=t.catchDistance)l(a);else{a.destroy(),e.processOnStart(r);return}}return a};Nt.prototype.getOrCreate=function(r,e){var t=this,n=t.options,i;return/(semi|static)/.test(n.mode)?(i=t.idles[0],i?(t.idles.splice(0,1),i):n.mode==="semi"?t.createNipple(e,r):(console.warn("Coudln't find the needed nipple."),!1)):(i=t.createNipple(e,r),i)};Nt.prototype.processOnMove=function(r){var e=this,t=e.options,n=e.manager.getIdentifier(r),i=e.nipples.get(n),s=e.manager.scroll;if(!dw(r)){this.processOnEnd(r);return}if(!i){console.error("Found zombie joystick with ID "+n),e.manager.removeIdentifier(n);return}if(t.dynamicPage){var o=i.el.getBoundingClientRect();i.position={x:s.x+o.left,y:s.y+o.top}}i.identifier=n;var a=i.options.size/2,l={x:r.pageX,y:r.pageY};t.lockX&&(l.y=i.position.y),t.lockY&&(l.x=i.position.x);var c=Ql(l,i.position),u=uw(l,i.position),h=df(u),f=c/a,d={distance:c,position:l},p,m;if(i.options.shape==="circle"?(p=Math.min(c,a),m=hw(i.position,p,u)):(m=gw(l,i.position,a),p=Ql(m,i.position)),t.follow){if(c>a){let v=l.x-m.x,x=l.y-m.y;i.position.x+=v,i.position.y+=x,i.el.style.top=i.position.y-(e.box.top+s.y)+"px",i.el.style.left=i.position.x-(e.box.left+s.x)+"px",c=Ql(l,i.position)}}else l=m,c=p;var g=l.x-i.position.x,_=l.y-i.position.y;i.frontPosition={x:g,y:_},t.dataOnly||(i.ui.front.style.transform="translate("+g+"px,"+_+"px)");var y={identifier:i.identifier,position:l,force:f,pressure:r.force||r.pressure||r.webkitForce||0,distance:c,angle:{radian:h,degree:u},vector:{x:g/a,y:-_/a},raw:d,instance:i,lockX:t.lockX,lockY:t.lockY};y=i.computeDirection(y),y.angle={radian:df(180-u),degree:180-u},i.trigger("move",y),e.trigger("move "+i.id+":move",y)};Nt.prototype.processOnEnd=function(r){var e=this,t=e.options,n=e.manager.getIdentifier(r),i=e.nipples.get(n),s=e.manager.removeIdentifier(i.identifier);i&&(t.dataOnly||i.hide(function(){t.mode==="dynamic"&&(i.trigger("removed",i),e.trigger("removed "+i.id+":removed",i),e.manager.trigger("removed "+i.id+":removed",i),i.destroy())}),clearInterval(e.pressureIntervals[i.identifier]),i.resetDirection(),i.trigger("end",i),e.trigger("end "+i.id+":end",i),e.ids.indexOf(i.identifier)>=0&&e.ids.splice(e.ids.indexOf(i.identifier),1),e.actives.indexOf(i)>=0&&e.actives.splice(e.actives.indexOf(i),1),/(semi|static)/.test(t.mode)?e.idles.push(i):e.nipples.indexOf(i)>=0&&e.nipples.splice(e.nipples.indexOf(i),1),e.manager.unbindDocument(),/(semi|static)/.test(t.mode)&&(e.manager.ids[s.id]=s.identifier))};Nt.prototype.onDestroyed=function(r,e){var t=this;t.nipples.indexOf(e)>=0&&t.nipples.splice(t.nipples.indexOf(e),1),t.actives.indexOf(e)>=0&&t.actives.splice(t.actives.indexOf(e),1),t.idles.indexOf(e)>=0&&t.idles.splice(t.idles.indexOf(e),1),t.ids.indexOf(e.identifier)>=0&&t.ids.splice(t.ids.indexOf(e.identifier),1),t.manager.removeIdentifier(e.identifier),t.manager.unbindDocument()};Nt.prototype.destroy=function(){var r=this;r.unbindEvt(r.options.zone,"start"),r.nipples.forEach(function(t){t.destroy()});for(var e in r.pressureIntervals)r.pressureIntervals.hasOwnProperty(e)&&clearInterval(r.pressureIntervals[e]);r.trigger("destroyed",r.nipples),r.manager.unbindDocument(),r.off()};function en(r){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=Nm(),e.config(r),e.prepareCollections();var t=function(){var i;e.collections.forEach(function(s){s.forEach(function(o){i=o.el.getBoundingClientRect(),o.position={x:e.scroll.x+i.left,y:e.scroll.y+i.top}})})};gc(window,"resize",function(){Um(t)});var n=function(){e.scroll=Nm()};return gc(window,"scroll",function(){Um(n)}),e.collections}en.prototype=new sr;en.constructor=en;en.prototype.prepareCollections=function(){var r=this;r.collections.create=r.create.bind(r),r.collections.on=r.on.bind(r),r.collections.off=r.off.bind(r),r.collections.destroy=r.destroy.bind(r),r.collections.get=function(e){var t;return r.collections.every(function(n){return t=n.get(e),!t}),t}};en.prototype.create=function(r){return this.createCollection(r)};en.prototype.createCollection=function(r){var e=this,t=new Nt(e,r);return e.bindCollection(t),e.collections.push(t),t};en.prototype.bindCollection=function(r){var e=this,t,n=function(i,s){t=i.type+" "+s.id+":"+i.type,e.trigger(t,s)};r.on("destroyed",e.onDestroyed.bind(e)),r.on("shown hidden rested dir plain",n),r.on("dir:up dir:right dir:down dir:left",n),r.on("plain:up plain:right plain:down plain:left",n)};en.prototype.bindDocument=function(){var r=this;r.binded||(r.bindEvt(document,"move").bindEvt(document,"end"),r.binded=!0)};en.prototype.unbindDocument=function(r){var e=this;(!Object.keys(e.ids).length||r===!0)&&(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)};en.prototype.getIdentifier=function(r){var e;return r?(e=r.identifier===void 0?r.pointerId:r.identifier,e===void 0&&(e=this.latest||0)):e=this.index,this.ids[e]===void 0&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]};en.prototype.removeIdentifier=function(r){var e={};for(var t in this.ids)if(this.ids[t]===r){e.id=t,e.identifier=this.ids[t],delete this.ids[t];break}return e};en.prototype.onmove=function(r){var e=this;return e.onAny("move",r),!1};en.prototype.onend=function(r){var e=this;return e.onAny("end",r),!1};en.prototype.oncancel=function(r){var e=this;return e.onAny("end",r),!1};en.prototype.onAny=function(r,e){var t=this,n,i="processOn"+r.charAt(0).toUpperCase()+r.slice(1);e=b_(e);var s=function(a,l,c){c.ids.indexOf(l)>=0&&(c[i](a),a._found_=!0)},o=function(a){n=t.getIdentifier(a),pf(t.collections,s.bind(null,a,n)),a._found_||t.removeIdentifier(n)};return pf(e,o),!1};en.prototype.destroy=function(){var r=this;r.unbindDocument(!0),r.ids={},r.index=0,r.collections.forEach(function(e){e.destroy()}),r.off()};en.prototype.onDestroyed=function(r,e){var t=this;if(t.collections.indexOf(e)<0)return!1;t.collections.splice(t.collections.indexOf(e),1)};const zm=new en,yw={create:function(r){return zm.create(r)},factory:zm};var Bt=Wg(()=>vr),Sw=Mn("<div></div>");function Aw(r,e){wn(e,!1),Ai();let t=mv();function n(){const s=yw.create({zone:Qe(t),mode:"static",position:{bottom:"200px",left:"100px"},size:120,color:"#024244",restOpacity:.65});s.get(0).el.style.zIndex="0",s.on("move",(o,a)=>{const l=a.direction,c=a.distance,u=1.8;Bt(Bt().acceleration=Math.min(c/100,1)*Bt().accelerationFactor*u),l&&(Bt(Bt().movement.moveForward=l.y==="up"),Bt(Bt().movement.moveBackward=l.y==="down"),Bt(Bt().movement.moveLeft=l.x==="left"),Bt(Bt().movement.moveRight=l.x==="right"))}),s.on("start",()=>{rs(hf,!0)}),s.on("end",()=>{rs(hf,!1),Bt(Bt().movement.moveForward=!1),Bt(Bt().movement.moveBackward=!1),Bt(Bt().movement.moveLeft=!1),Bt(Bt().movement.moveRight=!1),Bt(Bt().acceleration=0)})}ci(()=>{n()}),Gg();var i=Sw();Vg(i,s=>nn(t,s),()=>Qe(t)),mn(r,i),Rn()}let md=Vo([]),Vc=Vo([]);function Mw(r,e){wn(e,!0);const t=Ai(),n=()=>an(hf,"$isJoystickInUse",t),i=()=>an(gn,"$camera",t);let s=!1,o={x:0,y:0},a={x:0,y:0},l=!1,c=.3,u=.15,h={x:0,y:0};const f=T=>{s=!0,o={x:T.clientX,y:T.clientY}},d=T=>{s=!1},p=T=>{if(!s)return;const E=T.clientX-o.x,S=T.clientY-o.y,C=E*c,A=S*c;h.x=C,h.y=A,o={x:T.clientX,y:T.clientY}},m=T=>{if(l=!0,T.touches.length>=1){let E=n()?1:0;a={x:T.touches[E].clientX,y:T.touches[E].clientY}}},g=()=>{l=!1},_=T=>{if(console.log(n()),T.preventDefault(),!l||T.touches.length===0)return;let E=n()?1:0;const S=T.touches[E],C=S.clientX-a.x,A=S.clientY-a.y,M=C*c,w=A*c;h.x=M,h.y=w,a={x:S.clientX,y:S.clientY}};let y=0;const v=T=>{let E=(T-y)/1e3;ss(gn,zt(i).rotation.y-=h.x*E,zt(i)),ss(gn,zt(i).rotation.x-=h.y*E,zt(i)),h.x*=1-u,h.y*=1-u;const C=jt.degToRad(15);ss(gn,zt(i).rotation.x=Math.max(Math.min(i().rotation.x,C),-C),zt(i)),y=T};function x(T){v(T)}ci(()=>{e.registerObject({update:x}),e.canvas.addEventListener("mousedown",f),e.canvas.addEventListener("mouseup",d),document.addEventListener("mouseup",d),e.canvas.addEventListener("mousemove",p),e.canvas.addEventListener("touchstart",m,{passive:!1}),e.canvas.addEventListener("touchend",g),e.canvas.addEventListener("touchmove",_,{passive:!1})}),Rn()}var Tw=Mn("<!> <!> <!> <!>",1);function Ew(r,e){wn(e,!0);const t=Ai(),n=()=>an(gn,"$camera",t),i=()=>an(Vc,"$collisionObjects",t),s=new b0;s.layers.set(1);const o=.8,a=new I,l=new I,c=new I,u=.7;ci(()=>{e.registerObject({update:d})});function h(v){s.set(n().position,v);const x=s.intersectObjects(i());return x.length>0&&x[0].distance<o}let f=0;function d(v){let x=(v-f)/1e3;c.set(0,0,0),n().getWorldDirection(a);const T=new I(a.x,0,a.z).normalize(),E=T.clone().negate(),S=new I().crossVectors(T,n().up).normalize(),C=S.clone().negate(),A=vr.acceleration||vr.accelerationFactor;vr.movement.moveForward&&!h(T)&&c.add(T.multiplyScalar(A)),vr.movement.moveBackward&&!h(E)&&c.add(E.multiplyScalar(A)),vr.movement.moveRight&&!h(S)&&c.add(S.multiplyScalar(A)),vr.movement.moveLeft&&!h(C)&&c.add(C.multiplyScalar(A)),l.add(c.multiplyScalar(x)),l.multiplyScalar(u),n().position.add(l),f=v}var p=Tw(),m=xa(p);cw(m,{});var g=mt(m,2);Aw(g,{});var _=mt(g,2),y=mt(_,2);Mw(y,{get canvas(){return e.canvas},get registerObject(){return e.registerObject}}),mn(r,p),Rn()}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var ni=Uint8Array,ro=Uint16Array,Cw=Int32Array,R_=new ni([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),I_=new ni([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),bw=new ni([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),P_=function(r,e){for(var t=new ro(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new Cw(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},D_=P_(R_,2),F_=D_.b,ww=D_.r;F_[28]=258,ww[258]=28;var Rw=P_(I_,0),Iw=Rw.b,mf=new ro(32768);for(var Ct=0;Ct<32768;++Ct){var pr=(Ct&43690)>>1|(Ct&21845)<<1;pr=(pr&52428)>>2|(pr&13107)<<2,pr=(pr&61680)>>4|(pr&3855)<<4,mf[Ct]=((pr&65280)>>8|(pr&255)<<8)>>1}var fa=function(r,e,t){for(var n=r.length,i=0,s=new ro(e);i<n;++i)r[i]&&++s[r[i]-1];var o=new ro(e);for(i=1;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(t){a=new ro(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],u=e-r[i],h=o[r[i]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[mf[h]>>l]=c}else for(a=new ro(n),i=0;i<n;++i)r[i]&&(a[i]=mf[o[r[i]-1]++]>>15-r[i]);return a},$a=new ni(288);for(var Ct=0;Ct<144;++Ct)$a[Ct]=8;for(var Ct=144;Ct<256;++Ct)$a[Ct]=9;for(var Ct=256;Ct<280;++Ct)$a[Ct]=7;for(var Ct=280;Ct<288;++Ct)$a[Ct]=8;var L_=new ni(32);for(var Ct=0;Ct<32;++Ct)L_[Ct]=5;var Pw=fa($a,9,1),Dw=fa(L_,5,1),ku=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},mi=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},zu=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},Fw=function(r){return(r+7)/8|0},Lw=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new ni(r.subarray(e,t))},Bw=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],gi=function(r,e,t){var n=new Error(e||Bw[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,gi),!t)throw n;return n},Uw=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new ni(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new ni(i*3));var c=function(Ve){var Ue=t.length;if(Ve>Ue){var Se=new ni(Math.max(Ue*2,Ve));Se.set(t),t=Se}},u=e.f||0,h=e.p||0,f=e.b||0,d=e.l,p=e.d,m=e.m,g=e.n,_=i*8;do{if(!d){u=mi(r,h,1);var y=mi(r,h+1,3);if(h+=3,y)if(y==1)d=Pw,p=Dw,m=9,g=5;else if(y==2){var E=mi(r,h,31)+257,S=mi(r,h+10,15)+4,C=E+mi(r,h+5,31)+1;h+=14;for(var A=new ni(C),M=new ni(19),w=0;w<S;++w)M[bw[w]]=mi(r,h+w*3,7);h+=S*3;for(var F=ku(M),P=(1<<F)-1,L=fa(M,F,1),w=0;w<C;){var B=L[mi(r,h,P)];h+=B&15;var v=B>>4;if(v<16)A[w++]=v;else{var O=0,H=0;for(v==16?(H=3+mi(r,h,3),h+=2,O=A[w-1]):v==17?(H=3+mi(r,h,7),h+=3):v==18&&(H=11+mi(r,h,127),h+=7);H--;)A[w++]=O}}var k=A.subarray(0,E),j=A.subarray(E);m=ku(k),g=ku(j),d=fa(k,m,1),p=fa(j,g,1)}else gi(1);else{var v=Fw(h)+4,x=r[v-4]|r[v-3]<<8,T=v+x;if(T>i){l&&gi(0);break}a&&c(f+x),t.set(r.subarray(v,T),f),e.b=f+=x,e.p=h=T*8,e.f=u;continue}if(h>_){l&&gi(0);break}}a&&c(f+131072);for(var ne=(1<<m)-1,oe=(1<<g)-1,fe=h;;fe=h){var O=d[zu(r,h)&ne],xe=O>>4;if(h+=O&15,h>_){l&&gi(0);break}if(O||gi(2),xe<256)t[f++]=xe;else if(xe==256){fe=h,d=null;break}else{var W=xe-254;if(xe>264){var w=xe-257,K=R_[w];W=mi(r,h,(1<<K)-1)+F_[w],h+=K}var se=p[zu(r,h)&oe],te=se>>4;se||gi(3),h+=se&15;var j=Iw[te];if(te>3){var K=I_[te];j+=zu(r,h)&(1<<K)-1,h+=K}if(h>_){l&&gi(0);break}a&&c(f+131072);var ye=f+W;if(f<j){var Ae=s-j,be=Math.min(j,ye);for(Ae+f<0&&gi(3);f<be;++f)t[f]=n[Ae+f]}for(;f<ye;++f)t[f]=t[f-j]}}e.l=d,e.p=fe,e.b=f,e.f=u,d&&(u=1,e.m=m,e.d=p,e.n=g)}while(!u);return f!=t.length&&o?Lw(t,0,f):t.subarray(0,f)},Ow=new ni(0),Nw=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&gi(6,"invalid zlib data"),(r[1]>>5&1)==+!e&&gi(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function kw(r,e){return Uw(r.subarray(Nw(r,e),-4),{i:2},e,e)}var zw=typeof TextDecoder<"u"&&new TextDecoder,Hw=0;try{zw.decode(Ow,{stream:!0}),Hw=1}catch{}function B_(r,e,t){const n=t.length-r-1;if(e>=t[n])return n-1;if(e<=t[r])return r;let i=r,s=n,o=Math.floor((i+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:i=o,o=Math.floor((i+s)/2);return o}function Vw(r,e,t,n){const i=[],s=[],o=[];i[0]=1;for(let a=1;a<=t;++a){s[a]=e-n[r+1-a],o[a]=n[r+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],h=s[a-c],f=i[c]/(u+h);i[c]=l+u*f,l=h*f}i[a]=l}return i}function Gw(r,e,t,n){const i=B_(r,n,e),s=Vw(i,n,r,e),o=new $e(0,0,0,0);for(let a=0;a<=r;++a){const l=t[i-r+a],c=s[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function Ww(r,e,t,n,i){const s=[];for(let h=0;h<=t;++h)s[h]=0;const o=[];for(let h=0;h<=n;++h)o[h]=s.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let h=1;h<=t;++h){l[h]=e-i[r+1-h],c[h]=i[r+h]-e;let f=0;for(let d=0;d<h;++d){const p=c[d+1],m=l[h-d];a[h][d]=p+m;const g=a[d][h-1]/a[h][d];a[d][h]=f+p*g,f=m*g}a[h][h]=f}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let f=0,d=1;const p=[];for(let m=0;m<=t;++m)p[m]=s.slice(0);p[0][0]=1;for(let m=1;m<=n;++m){let g=0;const _=h-m,y=t-m;h>=m&&(p[d][0]=p[f][0]/a[y+1][_],g=p[d][0]*a[_][y]);const v=_>=-1?1:-_,x=h-1<=y?m-1:t-h;for(let E=v;E<=x;++E)p[d][E]=(p[f][E]-p[f][E-1])/a[y+1][_+E],g+=p[d][E]*a[_+E][y];h<=y&&(p[d][m]=-p[f][m-1]/a[y+1][h],g+=p[d][m]*a[h][y]),o[m][h]=g;const T=f;f=d,d=T}}let u=t;for(let h=1;h<=n;++h){for(let f=0;f<=t;++f)o[h][f]*=u;u*=t-h}return o}function Xw(r,e,t,n,i){const s=i<r?i:r,o=[],a=B_(r,n,e),l=Ww(a,n,r,s,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,c[u]=h}for(let u=0;u<=s;++u){const h=c[a-r].clone().multiplyScalar(l[u][0]);for(let f=1;f<=r;++f)h.add(c[a-r+f].clone().multiplyScalar(l[u][f]));o[u]=h}for(let u=s+1;u<=i+1;++u)o[u]=new $e(0,0,0);return o}function qw(r,e){let t=1;for(let i=2;i<=r;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=r-e;++i)n*=i;return t/n}function Yw(r){const e=r.length,t=[],n=[];for(let s=0;s<e;++s){const o=r[s];t[s]=new I(o.x,o.y,o.z),n[s]=o.w}const i=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(i[s-a].clone().multiplyScalar(qw(s,a)*n[a]));i[s]=o.divideScalar(n[0])}return i}function Qw(r,e,t,n,i){const s=Xw(r,e,t,n,i);return Yw(s)}class Kw extends OE{constructor(e,t,n,i,s){super();const o=t?t.length-1:0,a=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||o;for(let l=0;l<a;++l){const c=n[l];this.controlPoints[l]=new $e(c.x,c.y,c.z,c.w)}}getPoint(e,t=new I){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=Gw(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new I){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=Qw(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new $e(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let Ze,Ut,Cn;class jw extends _s{constructor(e){super(e)}load(e,t,n,i){const s=this,o=s.path===""?MC.extractUrlBase(e):s.path,a=new pC(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e,t){if(n1(e))Ze=new t1().parse(e);else{const i=N_(e);if(!i1(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Vm(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Vm(i));Ze=new e1().parse(i)}const n=new gC(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Zw(n,this.manager).parse(Ze)}}class Zw{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Ut=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),s=new $w().parse(i);return this.parseScene(i,s,n),Cn}parseConnections(){const e=new Map;return"Connections"in Ze&&Ze.Connections.connections.forEach(function(n){const i=n[0],s=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(i).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Ze.Objects){const n=Ze.Objects.Video;for(const i in n){const s=n[i],o=parseInt(i);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in Ze.Objects){const n=Ze.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],e);t.set(parseInt(i),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,s=e.WrapModeV,o=i!==void 0?i.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?Ta:Ji,n.wrapT=a===0?Ta:Ji,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){const n=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),i=e.FileName.split(".").pop().toLowerCase(),s=n.has(i)?this.manager.getHandler(`.${i}`):this.textureLoader;if(!s)return console.warn(`FBXLoader: ${i.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new on;const o=s.path;o||s.setPath(this.textureLoader.path);const a=Ut.get(e.id).children;let l;a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(l=t[a[0].ID],(l.indexOf("blob:")===0||l.indexOf("data:")===0)&&s.setPath(void 0));const c=s.load(l);return s.setPath(o),c}parseMaterials(e){const t=new Map;if("Material"in Ze.Objects){const n=Ze.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],e);s!==null&&t.set(parseInt(i),s)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!Ut.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(s.toLowerCase()){case"phong":a=new Tu;break;case"lambert":a=new tC;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new Tu;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=Ke.toWorkingColorSpace(new ze().fromArray(e.Diffuse.value),Et):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=Ke.toWorkingColorSpace(new ze().fromArray(e.DiffuseColor.value),Et)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=Ke.toWorkingColorSpace(new ze().fromArray(e.Emissive.value),Et):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=Ke.toWorkingColorSpace(new ze().fromArray(e.EmissiveColor.value),Et)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),i.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=e.Opacity?parseFloat(e.Opacity.value):null,i.opacity===null&&(i.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=Ke.toWorkingColorSpace(new ze().fromArray(e.Specular.value),Et):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=Ke.toWorkingColorSpace(new ze().fromArray(e.SpecularColor.value),Et));const s=this;return Ut.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=Et);break;case"DisplacementColor":i.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=Et);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=s.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=ic,i.envMap.colorSpace=Et);break;case"SpecularColor":i.specularMap=s.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=Et);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in Ze.Objects&&t in Ze.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Ut.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ze.Objects){const n=Ze.Objects.Deformer;for(const i in n){const s=n[i],o=Ut.get(parseInt(i));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(s.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const s=t[i.ID];if(s.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new ue().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const s=e.children[i],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Ut.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){Cn=new as;const i=this.parseModels(e.skeletons,t,n),s=Ze.Objects.Model,o=this;i.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),Ut.get(l.ID).parents.forEach(function(h){const f=i.get(h.ID);f!==void 0&&f.add(l)}),l.parent===null&&Cn.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),Cn.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=O_(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new Jw().parse();Cn.children.length===1&&Cn.children[0].isGroup&&(Cn.children[0].animations=a,Cn=Cn.children[0]),Cn.animations=a}parseModels(e,t,n){const i=new Map,s=Ze.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=Ut.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Wh;break;case"Null":default:u=new as;break}u.name=l.attrName?ot.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=a}this.getTransformData(u,l),i.set(a,u)}return i}buildSkeleton(e,t,n,i){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const h=s;s=new Wh,s.matrixWorld.copy(c.transformLink),s.name=i?ot.sanitizeNodeName(i):"",s.userData.originalName=i,s.ID=n,l.bones[u]=s,h!==null&&s.add(h)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(i){const s=Ze.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new ft;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new _n(u,c,s,o),h!==null&&t.setFocalLength(h);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new ft;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new ft;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const s=Ze.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new ft;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=Ke.toWorkingColorSpace(new ze().fromArray(n.Color.value),Et));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new mm(s,o,a,l);break;case 1:t=new SC(s,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=jt.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=jt.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new vC(s,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new mm(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Tu({name:_s.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(i=new FE(s,o),i.normalizeSkinWeights()):i=new St(s,o),i}createCurve(e,t){const n=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),i=new y0({name:_s.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new UE(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Ga(t.RotationOrder.value):n.eulerOrder=Ga(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Ut.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=Ze.Objects.Model[i.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),Cn.add(e.target)):e.lookAt(new I().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const s in e){const o=e[s];Ut.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;Ut.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new Wf(o.bones),i[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ze.Objects){const t=Ze.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(s){e[s.Node]=new ue().fromArray(s.Matrix.a)}):e[i.Node]=new ue().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in Ze){if("AmbientColor"in Ze.GlobalSettings){const e=Ze.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const s=new ze().setRGB(t,n,i,Et);Cn.add(new AC(s,1))}}"UnitScaleFactor"in Ze.GlobalSettings&&(Cn.userData.unitScaleFactor=Ze.GlobalSettings.UnitScaleFactor.value)}}}class $w{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Ze.Objects){const n=Ze.Objects.Geometry;for(const i in n){const s=Ut.get(parseInt(i)),o=this.parseGeometry(s,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,s=[],o=e.parents.map(function(h){return Ze.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,f){return i[f.ID]!==void 0&&(h=i[f.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&s.push(n.morphTargets[h.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Ga(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=O_(c);return this.genGeometry(t,a,s,u)}genGeometry(e,t,n,i){const s=new yn;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Vt(a.vertex,3);if(l.applyMatrix4(i),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new Vt(a.colors,3)),t&&(s.setAttribute("skinIndex",new zf(a.weightsIndices,4)),s.setAttribute("skinWeight",new Vt(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new ke().getNormalMatrix(i),u=new Vt(a.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){const h=u===0?"uv":`uv${u}`;s.setAttribute(h,new Vt(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,f){h!==c&&(s.addGroup(u,f-u,c),c=h,u=f)}),s.groups.length>0){const h=s.groups[s.groups.length-1],f=h.start+h.count;f!==a.materialIndex.length&&s.addGroup(f,a.materialIndex.length-f,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,n,i),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,s){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,o=[],a=[],l=[],c=[],u=[],h=[];const f=this;return e.vertexIndices.forEach(function(d,p){let m,g=!1;d<0&&(d=d^-1,g=!0);let _=[],y=[];if(o.push(d*3,d*3+1,d*3+2),e.color){const v=Pl(p,n,d,e.color);l.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(v){y.push(v.weight),_.push(v.id)}),y.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const v=[0,0,0,0],x=[0,0,0,0];y.forEach(function(T,E){let S=T,C=_[E];x.forEach(function(A,M,w){if(S>A){w[M]=S,S=A;const F=v[M];v[M]=C,C=F}})}),_=v,y=x}for(;y.length<4;)y.push(0),_.push(0);for(let v=0;v<4;++v)u.push(y[v]),h.push(_[v])}if(e.normal){const v=Pl(p,n,d,e.normal);a.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(m=Pl(p,n,d,e.material)[0],m<0&&(f.negativeMaterialIndices=!0,m=0)),e.uv&&e.uv.forEach(function(v,x){const T=Pl(p,n,d,v);c[x]===void 0&&(c[x]=[]),c[x].push(T[0]),c[x].push(T[1])}),i++,g&&(f.genFace(t,e,o,m,a,l,c,u,h,i),n++,i=0,o=[],a=[],l=[],c=[],u=[],h=[])}),t}getNormalNewell(e){const t=new I(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],s=e[(n+1)%e.length];t.x+=(i.y-s.y)*(i.z+s.z),t.y+=(i.z-s.z)*(i.x+s.x),t.z+=(i.x-s.x)*(i.y+s.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new I(0,1,0):new I(0,0,1)).cross(t).normalize(),s=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:s}}flattenVertex(e,t,n){return new ve(e.dot(t),e.dot(n))}genFace(e,t,n,i,s,o,a,l,c,u){let h;if(u>3){const f=[],d=t.baseVertexPositions||t.vertexPositions;for(let _=0;_<n.length;_+=3)f.push(new I(d[n[_]],d[n[_+1]],d[n[_+2]]));const{tangent:p,bitangent:m}=this.getNormalTangentAndBitangent(f),g=[];for(const _ of f)g.push(this.flattenVertex(_,p,m));h=qf.triangulateShape(g,[])}else h=[[0,1,2]];for(const[f,d,p]of h)e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[p*3]]),e.vertex.push(t.vertexPositions[n[p*3+1]]),e.vertex.push(t.vertexPositions[n[p*3+2]]),t.skeleton&&(e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[p*4]),e.vertexWeights.push(l[p*4+1]),e.vertexWeights.push(l[p*4+2]),e.vertexWeights.push(l[p*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[p*4]),e.weightsIndices.push(c[p*4+1]),e.weightsIndices.push(c[p*4+2]),e.weightsIndices.push(c[p*4+3])),t.color&&(e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[p*3]),e.colors.push(o[p*3+1]),e.colors.push(o[p*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(s[f*3]),e.normal.push(s[f*3+1]),e.normal.push(s[f*3+2]),e.normal.push(s[d*3]),e.normal.push(s[d*3+1]),e.normal.push(s[d*3+2]),e.normal.push(s[p*3]),e.normal.push(s[p*3+1]),e.normal.push(s[p*3+2])),t.uv&&t.uv.forEach(function(m,g){e.uvs[g]===void 0&&(e.uvs[g]=[]),e.uvs[g].push(a[g][f*2]),e.uvs[g].push(a[g][f*2+1]),e.uvs[g].push(a[g][d*2]),e.uvs[g].push(a[g][d*2+1]),e.uvs[g].push(a[g][p*2]),e.uvs[g].push(a[g][p*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=Ze.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,s){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],u=e.attributes.position.count*3,h=new Float32Array(u);for(let m=0;m<c.length;m++){const g=c[m]*3;h[g]=l[m*3],h[g+1]=l[m*3+1],h[g+2]=l[m*3+2]}const f={vertexIndices:a,vertexPositions:h,baseVertexPositions:o},d=this.genBuffers(f),p=new Vt(d.vertex,3);p.name=s||n.attrName,p.applyMatrix4(i),e.morphAttributes.position.push(p)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let s=[];n==="IndexToDirect"&&(s=e.ColorIndex.a);for(let o=0,a=new ze;o<i.length;o+=4)a.fromArray(i,o),Ke.toWorkingColorSpace(a,Et),a.toArray(i,o);return{dataSize:4,buffer:i,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,s=[];for(let o=0;o<i.length;++o)s.push(o);return{dataSize:1,buffer:i,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new yn;const n=t-1,i=e.KnotVector.a,s=[],o=e.Points.a;for(let h=0,f=o.length;h<f;h+=4)s.push(new $e().fromArray(o,h));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let h=0;h<n;++h)s.push(s[h])}const u=new Kw(n,i,s,a,l).getPoints(s.length*12);return new yn().setFromPoints(u)}}class Jw{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],s=this.addClip(i);e.push(s)}return e}parseClips(){if(Ze.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ze.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=Ze.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(r1),values:t[n].KeyValueFloat.a},s=Ut.get(i.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=Ze.Objects.AnimationLayer,n=new Map;for(const i in t){const s=[],o=Ut.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const h=Ut.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(h!==void 0){const f=Ze.Objects.Model[h.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:f.attrName?ot.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Cn.traverse(function(p){p.ID===f.id&&(d.transform=p.matrix,p.userData.transformData&&(d.eulerOrder=p.userData.transformData.eulerOrder))}),d.transform||(d.transform=new ue),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),s[c]=d}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const h=Ut.get(l.ID).parents.filter(function(_){return _.relationship!==void 0})[0].ID,f=Ut.get(h).parents[0].ID,d=Ut.get(f).parents[0].ID,p=Ut.get(d).parents[0].ID,m=Ze.Objects.Model[p],g={modelName:m.attrName?ot.sanitizeNodeName(m.attrName):"",morphName:Ze.Objects.Deformer[h].attrName};s[c]=g}s[c][u.attr]=u}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(e){const t=Ze.Objects.AnimationStack,n={};for(const i in t){const s=Ut.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new lC(e.name,-1,t)}generateTracks(e){const t=[];let n=new I,i=new I;if(e.transform&&e.transform.decompose(n,new at,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const s=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){const s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,n,i){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,n);return new La(e+"."+i,s,o)}generateRotationTrack(e,t,n,i,s){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const f=this.interpolateRotations(t.x,t.y,t.z,s);o=f[0],a=f[1]}const l=Ga(0);n!==void 0&&(n=n.map(jt.degToRad),n.push(l),n=new Zt().fromArray(n),n=new at().setFromEuler(n)),i!==void 0&&(i=i.map(jt.degToRad),i.push(l),i=new Zt().fromArray(i),i=new at().setFromEuler(i).invert());const c=new at,u=new Zt,h=[];if(!a||!o)return new wo(e+".quaternion",[0],[0]);for(let f=0;f<a.length;f+=3)u.set(a[f],a[f+1],a[f+2],s),c.setFromEuler(u),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),f>2&&new at().fromArray(h,(f-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(h,f/3*4);return new wo(e+".quaternion",o,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),i=Cn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Fa(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];s.push(u),i[0]=u}else s.push(i[0]);if(a!==-1){const u=t.y.values[a];s.push(u),i[1]=u}else s.push(i[1]);if(l!==-1){const u=t.z.values[l];s.push(u),i[2]=u}else s.push(i[2])}),s}interpolateRotations(e,t,n,i){const s=[],o=[];s.push(e.times[0]),o.push(jt.degToRad(e.values[0])),o.push(jt.degToRad(t.values[0])),o.push(jt.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(jt.degToRad),u=[e.values[a],t.values[a],n.values[a]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;const h=u.map(jt.degToRad),f=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],d=[Math.abs(f[0]),Math.abs(f[1]),Math.abs(f[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){const m=Math.max(...d)/180,g=new Zt(...c,i),_=new Zt(...h,i),y=new at().setFromEuler(g),v=new at().setFromEuler(_);y.dot(v)&&v.set(-v.x,-v.y,-v.z,-v.w);const x=e.times[a-1],T=e.times[a]-x,E=new at,S=new Zt;for(let C=0;C<1;C+=1/m)E.copy(y.clone().slerp(v.clone(),C)),s.push(x+C*T),S.setFromQuaternion(E,i),o.push(S.x),o.push(S.y),o.push(S.z)}else s.push(e.times[a]),o.push(jt.degToRad(e.values[a])),o.push(jt.degToRad(t.values[a])),o.push(jt.degToRad(n.values[a]))}return[s,o]}}class e1{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new U_,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,s){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++s]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,s);return}if(i==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=s.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",s=[c,u],o1(s,h),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=s),i in o&&Array.isArray(o[i])?o[i].push(s):i!=="a"?o[i]=s:o.a=s,this.setCurrentProp(o,i),i==="a"&&s.slice(-1)!==","&&(o.a=Vu(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Vu(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Vu(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class t1{parse(e){const t=new Hm(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new U_;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&i.add(s.name,s)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let f=0;f<s;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===i;i>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,o){o!==0&&i.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:s,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=kw(new Uint8Array(e.getArrayBuffer(o))),l=new Hm(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Hm{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class U_{add(e,t){this[e]=t}}function n1(r){const e="Kaydara FBX Binary  \0";return r.byteLength>=e.length&&e===N_(r,0,e.length)}function i1(r){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const s=r[i-1];return r=r.slice(t+i),t++,s}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function Vm(r){const e=/FBXVersion: (\d+)/,t=r.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function r1(r){return r/46186158e3}const s1=[];function Pl(r,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=r;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,o=s+n.dataSize;return a1(s1,n.buffer,s,o)}const Hu=new Zt,Ws=new I;function O_(r){const e=new ue,t=new ue,n=new ue,i=new ue,s=new ue,o=new ue,a=new ue,l=new ue,c=new ue,u=new ue,h=new ue,f=new ue,d=r.inheritType?r.inheritType:0;r.translation&&e.setPosition(Ws.fromArray(r.translation));const p=Ga(0);if(r.preRotation){const w=r.preRotation.map(jt.degToRad);w.push(p),t.makeRotationFromEuler(Hu.fromArray(w))}if(r.rotation){const w=r.rotation.map(jt.degToRad);w.push(r.eulerOrder||p),n.makeRotationFromEuler(Hu.fromArray(w))}if(r.postRotation){const w=r.postRotation.map(jt.degToRad);w.push(p),i.makeRotationFromEuler(Hu.fromArray(w)),i.invert()}r.scale&&s.scale(Ws.fromArray(r.scale)),r.scalingOffset&&a.setPosition(Ws.fromArray(r.scalingOffset)),r.scalingPivot&&o.setPosition(Ws.fromArray(r.scalingPivot)),r.rotationOffset&&l.setPosition(Ws.fromArray(r.rotationOffset)),r.rotationPivot&&c.setPosition(Ws.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(h.copy(r.parentMatrix),u.copy(r.parentMatrixWorld));const m=t.clone().multiply(n).multiply(i),g=new ue;g.extractRotation(u);const _=new ue;_.copyPosition(u);const y=_.clone().invert().multiply(u),v=g.clone().invert().multiply(y),x=s,T=new ue;if(d===0)T.copy(g).multiply(m).multiply(v).multiply(x);else if(d===1)T.copy(g).multiply(v).multiply(m).multiply(x);else{const F=new ue().scale(new I().setFromMatrixScale(h)).clone().invert(),P=v.clone().multiply(F);T.copy(g).multiply(m).multiply(P).multiply(x)}const E=c.clone().invert(),S=o.clone().invert();let C=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(E).multiply(a).multiply(o).multiply(s).multiply(S);const A=new ue().copyPosition(C),M=u.clone().multiply(A);return f.copyPosition(M),C=f.clone().multiply(T),C.premultiply(u.invert()),C}function Ga(r){r=r||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[r]}function Vu(r){return r.split(",").map(function(t){return parseFloat(t)})}function N_(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=r.byteLength),new TextDecoder().decode(new Uint8Array(r,e,t))}function o1(r,e){for(let t=0,n=r.length,i=e.length;t<i;t++,n++)r[n]=e[t]}function a1(r,e,t,n){for(let i=t,s=0;i<n;i++,s++)r[s]=e[i];return r}function l1(r,e){wn(e,!0);const t=Ai(),n=()=>an(Vc,"$collisionObjects",t);let i=ta(e,"position",19,()=>[]),s=ta(e,"scale",19,()=>[]),o=ta(e,"rotation",19,()=>[]),a=ta(e,"visible",3,!1);new jw().load(e.path,function(l){e.scene.add(l),l.traverse(c=>{c.isMesh&&(c.visible=a(),c.layers.set(1),n().push(c),i().length==3&&c.position.set(i()[0],i()[1],i()[2]),s().length==3&&c.scale.set(s()[0],s()[1],s()[2]),o().length==3&&c.rotation.set(o()[0],o()[1],o()[2]))})},function(l){console.log(l.loaded/l.total*100+"% loaded")},function(l){console.log("An error happened")}),Rn()}var c1=Mn('<p>Det här är en elefant.</p> <br> <img src="elephant.png" width="300">',1);function u1(r,e){wn(e,!0);const t=Ai(),n=()=>an(Vc,"$collisionObjects",t),i=()=>an(md,"$collisions",t),s=a=>{var l=c1();mn(a,l)},o="frame_modal";ci(()=>{const a=new zr(1.4,1,.2),l=new T0,c=new St(a,l);c.visible=!1,c.position.set(-1.85,.8,-7.45),c.rotation.y=.5,e.scene.add(c),n().push(c),i().push({object:c,function:()=>document.getElementById(o).showModal()})}),no(r,{id:o,title:"Riktig elefant",content:s}),Rn()}const ns=class ns{constructor(e,t){let n,i;this.promise=new Promise((c,u)=>{n=c,i=u});const s=n.bind(this),o=i.bind(this),a=(...c)=>{s(...c)},l=c=>{o(c)};e(a.bind(this),l.bind(this)),this.abortHandler=t,this.id=ns.idGen++}then(e){return new ns((t,n)=>{this.promise=this.promise.then((...i)=>{const s=e(...i);s instanceof Promise||s instanceof ns?s.then((...o)=>{t(...o)}):t(s)}).catch(i=>{n(i)})},this.abortHandler)}catch(e){return new ns(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}};le(ns,"idGen",0);let Wa=ns;class Kl extends Error{constructor(e){super(e)}}(function(){const r=new Float32Array(1),e=new Int32Array(r.buffer);return function(t){r[0]=t;const n=e[0];let i=n>>16&32768,s=n>>12&2047;const o=n>>23&255;return o<103?i:o>142?(i|=31744,i|=(o==255?0:1)&&n&8388607,i):o<113?(s|=2048,i|=(s>>114-o)+(s>>113-o&1),i):(i|=o-112<<10|s>>1,i+=s&1,i)}})();const Gu=function(){const r=new Float32Array(1),e=new Int32Array(r.buffer);return function(t){return r[0]=t,e[0]}}(),h1=function(r,e){return r[e]+(r[e+1]<<8)+(r[e+2]<<16)+(r[e+3]<<24)},gd=function(r,e,t=!0){const n=new AbortController,i=n.signal;let s=!1;const o=a=>{n.abort(new Kl(a)),s=!0};return new Wa((a,l)=>{fetch(r,{signal:i}).then(async c=>{if(!c.ok){const m=await c.text();l(new Error(`Fetch failed: ${c.status} ${c.statusText} ${m}`));return}const u=c.body.getReader();let h=0,f=c.headers.get("Content-Length"),d=f?parseInt(f):void 0;const p=[];for(;!s;)try{const{value:m,done:g}=await u.read();if(g){if(e&&e(100,"100%",m,d),t){const v=new Blob(p).arrayBuffer();a(v)}else a();break}h+=m.length;let _,y;d!==void 0&&(_=h/d*100,y=`${_.toFixed(2)}%`),t&&p.push(m),e&&e(_,y,m,d)}catch(m){l(m);return}}).catch(c=>{l(c)})},o)},sn=function(r,e,t){return Math.max(Math.min(r,t),e)},Xs=function(){return performance.now()/1e3},js=r=>{if(r.geometry&&(r.geometry.dispose(),r.geometry=null),r.material&&(r.material.dispose(),r.material=null),r.children)for(let e of r.children)js(e)},yi=(r,e)=>new Promise(t=>{window.setTimeout(()=>{t(r())},e?1:50)}),mo=(r=0)=>{switch(r){case 1:return 9;case 2:return 24}return 0},_d=()=>{let r,e;return{promise:new Promise((n,i)=>{r=n,e=i}),resolve:r,reject:e}},Wu=r=>{let e,t;return r||(r=()=>{}),{promise:new Wa((i,s)=>{e=i,t=s},r),resolve:e,reject:t}};class f1{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function vd(){const r=navigator.userAgent;return r.indexOf("iPhone")>0||r.indexOf("iPad")>0}function k_(){if(vd()){const r=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new f1(parseInt(r[1]||0,10),parseInt(r[2]||0,10),parseInt(r[3]||0,10))}else return null}const d1=14,_a=class _a{constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=mo(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+d1,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let n=mo(e);for(let i=0;i<n;i++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=_a.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,i,s,o,a,l,c,u,h,f,d,p,...m){const g=[e,t,n,i,s,o,a,l,c,u,h,f,d,p,...this.defaultSphericalHarmonics];for(let _=0;_<m.length&&_<this.sphericalHarmonicsCount;_++)g[_]=m[_];return this.addSplat(g),g}addSplatFromArray(e,t){const n=e.splats[t],i=_a.createSplat(this.sphericalHarmonicsDegree);for(let s=0;s<this.componentCount&&s<n.length;s++)i[s]=n[s];this.addSplat(i)}};le(_a,"OFFSET",{X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37});let we=_a;class et{}le(et,"DefaultSplatSortDistanceMapPrecision",16),le(et,"MemoryPageSize",65536),le(et,"BytesPerFloat",4),le(et,"BytesPerInt",4),le(et,"MaxScenes",32),le(et,"ProgressiveLoadSectionSize",262144),le(et,"ProgressiveLoadSectionDelayDuration",15),le(et,"SphericalHarmonics8BitCompressionRange",3);const p1=et.SphericalHarmonics8BitCompressionRange,mr=p1/2,Gt=ba.toHalfFloat.bind(ba),xd=ba.fromHalfFloat.bind(ba),bt=(r,e,t=!1,n,i)=>{if(e===0)return r;if(e===1||e===2&&!t)return ba.fromHalfFloat(r);if(e===2)return yd(r,n,i)},da=(r,e,t)=>{r=sn(r,e,t);const n=t-e;return sn(Math.floor((r-e)/n*255),0,255)},yd=(r,e,t)=>{const n=t-e;return r/255*n+e},z_=(r,e,t)=>da(xd(r,e,t)),m1=(r,e,t)=>Gt(yd(r,e,t)),ut=(r,e,t,n=!1)=>t===0?r.getFloat32(e*4,!0):t===1||t===2&&!n?r.getUint16(e*2,!0):r.getUint8(e,!0),g1=function(){const r=e=>e;return function(e,t,n,i=!1){if(t===n)return e;let s=r;return t===2&&i?n===1?s=m1:n==0&&(s=yd):t===2||t===1?n===0?s=xd:n==2&&(i?s=z_:s=r):t===0&&(n===1?s=Gt:n==2&&(i?s=da:s=Gt)),s(e)}}(),qs=(r,e,t,n,i=0)=>{const s=new Uint8Array(r,e),o=new Uint8Array(t,n);for(let a=0;a<i;a++)o[a]=s[a]},Z=class Z{constructor(e,t=!0){le(this,"getSplatScaleAndRotation",function(){const e=new ue,t=new ue,n=new ue,i=new I,s=new I,o=new at;return function(a,l,c,u,h){const f=this.globalSplatIndexToSectionMap[a],d=this.sections[f],p=a-d.splatCountOffset,m=d.bytesPerSplat*p+Z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,g=new DataView(this.bufferData,d.dataBase+m);s.set(bt(ut(g,0,this.compressionLevel),this.compressionLevel),bt(ut(g,1,this.compressionLevel),this.compressionLevel),bt(ut(g,2,this.compressionLevel),this.compressionLevel)),h&&(h.x!==void 0&&(s.x=h.x),h.y!==void 0&&(s.y=h.y),h.z!==void 0&&(s.z=h.z)),o.set(bt(ut(g,4,this.compressionLevel),this.compressionLevel),bt(ut(g,5,this.compressionLevel),this.compressionLevel),bt(ut(g,6,this.compressionLevel),this.compressionLevel),bt(ut(g,3,this.compressionLevel),this.compressionLevel)),u?(e.makeScale(s.x,s.y,s.z),t.makeRotationFromQuaternion(o),n.copy(e).multiply(t).multiply(u),n.decompose(i,c,l)):(l.copy(s),c.copy(o))}}());le(this,"fillSplatScaleRotationArray",function(){const e=new ue,t=new ue,n=new ue,i=new I,s=new at,o=new I,a=l=>{const c=l.w<0?-1:1;l.x*=c,l.y*=c,l.z*=c,l.w*=c};return function(l,c,u,h,f,d,p,m){const g=this.splatCount;h=h||0,f=f||g-1,d===void 0&&(d=h);const _=(y,v)=>g1(y,v,p);for(let y=h;y<=f;y++){const v=this.globalSplatIndexToSectionMap[y],x=this.sections[v],T=y-x.splatCountOffset,E=x.bytesPerSplat*T+Z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,S=(y-h+d)*Z.ScaleComponentCount,C=(y-h+d)*Z.RotationComponentCount,A=new DataView(this.bufferData,x.dataBase+E),M=m&&m.x!==void 0?m.x:ut(A,0,this.compressionLevel),w=m&&m.y!==void 0?m.y:ut(A,1,this.compressionLevel),F=m&&m.z!==void 0?m.z:ut(A,2,this.compressionLevel),P=ut(A,3,this.compressionLevel),L=ut(A,4,this.compressionLevel),B=ut(A,5,this.compressionLevel),O=ut(A,6,this.compressionLevel);i.set(bt(M,this.compressionLevel),bt(w,this.compressionLevel),bt(F,this.compressionLevel)),s.set(bt(L,this.compressionLevel),bt(B,this.compressionLevel),bt(O,this.compressionLevel),bt(P,this.compressionLevel)).normalize(),u&&(o.set(0,0,0),e.makeScale(i.x,i.y,i.z),t.makeRotationFromQuaternion(s),n.identity().premultiply(e).premultiply(t),n.premultiply(u),n.decompose(o,s,i),s.normalize()),a(s),l&&(l[S]=_(i.x,0),l[S+1]=_(i.y,0),l[S+2]=_(i.z,0)),c&&(c[C]=_(s.x,0),c[C+1]=_(s.y,0),c[C+2]=_(s.z,0),c[C+3]=_(s.w,0))}}}());le(this,"fillSphericalHarmonicsArray",function(){for(let L=0;L<15;L++)new I;const e=new ke,t=new ue,n=new I,i=new I,s=new at,o=[],a=[],l=[],c=[],u=[],h=[],f=[],d=[],p=[],m=[],g=[],_=[],y=[],v=[],x=[],T=[],E=[],S=[],C=L=>L,A=(L,B,O,H)=>{L[0]=B,L[1]=O,L[2]=H},M=(L,B,O,H,k)=>{L[0]=ut(B,H,k,!0),L[1]=ut(B,H+O,k,!0),L[2]=ut(B,H+O+O,k,!0)},w=(L,B)=>{B[0]=L[0],B[1]=L[1],B[2]=L[2]},F=(L,B,O,H)=>{B[O]=H(L[0]),B[O+1]=H(L[1]),B[O+2]=H(L[2])},P=(L,B,O,H,k)=>(B[0]=bt(L[0],O,!0,H,k),B[1]=bt(L[1],O,!0,H,k),B[2]=bt(L[2],O,!0,H,k),B);return function(L,B,O,H,k,j,ne){const oe=this.splatCount;H=H||0,k=k||oe-1,j===void 0&&(j=H),O&&B>=1&&(t.copy(O),t.decompose(n,s,i),s.normalize(),t.makeRotationFromQuaternion(s),e.setFromMatrix4(t),A(o,e.elements[4],-e.elements[7],e.elements[1]),A(a,-e.elements[5],e.elements[8],-e.elements[2]),A(l,e.elements[3],-e.elements[6],e.elements[0]));const fe=W=>z_(W,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),xe=W=>da(W,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let W=H;W<=k;W++){const K=this.globalSplatIndexToSectionMap[W],se=this.sections[K];B=Math.min(B,se.sphericalHarmonicsDegree);const te=mo(B),ye=W-se.splatCountOffset,Ae=se.bytesPerSplat*ye+Z.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,be=new DataView(this.bufferData,se.dataBase+Ae),Ve=(W-H+j)*te;let Ue=O?0:this.compressionLevel,Se=C;Ue!==ne&&(Ue===1?ne===0?Se=xd:ne==2&&(Se=fe):Ue===0&&(ne===1?Se=Gt:ne==2&&(Se=xe)));const N=this.minSphericalHarmonicsCoeff,Xe=this.maxSphericalHarmonicsCoeff;B>=1&&(M(p,be,3,0,this.compressionLevel),M(m,be,3,1,this.compressionLevel),M(g,be,3,2,this.compressionLevel),O?(P(p,p,this.compressionLevel,N,Xe),P(m,m,this.compressionLevel,N,Xe),P(g,g,this.compressionLevel,N,Xe),Z.rotateSphericalHarmonics3(p,m,g,o,a,l,v,x,T)):(w(p,v),w(m,x),w(g,T)),F(v,L,Ve,Se),F(x,L,Ve+3,Se),F(T,L,Ve+6,Se),B>=2&&(M(p,be,5,9,this.compressionLevel),M(m,be,5,10,this.compressionLevel),M(g,be,5,11,this.compressionLevel),M(_,be,5,12,this.compressionLevel),M(y,be,5,13,this.compressionLevel),O?(P(p,p,this.compressionLevel,N,Xe),P(m,m,this.compressionLevel,N,Xe),P(g,g,this.compressionLevel,N,Xe),P(_,_,this.compressionLevel,N,Xe),P(y,y,this.compressionLevel,N,Xe),Z.rotateSphericalHarmonics5(p,m,g,_,y,o,a,l,c,u,h,f,d,v,x,T,E,S)):(w(p,v),w(m,x),w(g,T),w(_,E),w(y,S)),F(v,L,Ve+9,Se),F(x,L,Ve+12,Se),F(T,L,Ve+15,Se),F(E,L,Ve+18,Se),F(S,L,Ve+21,Se)))}}}());this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){const n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n;const i=e.fullBucketCount*e.bucketSize;if(t<i)n=Math.floor(t/e.bucketSize);else{let s=i;n=e.fullBucketCount;let o=0;for(;s<e.splatCount;){let a=e.partiallyFilledBucketLengths[o];if(t>=s&&t<s+a)break;s+=a,n++,o++}}return n}getSplatCenter(e,t,n){const i=this.globalSplatIndexToSectionMap[e],s=this.sections[i],o=e-s.splatCountOffset,a=s.bytesPerSplat*o,l=new DataView(this.bufferData,s.dataBase+a),c=ut(l,0,this.compressionLevel),u=ut(l,1,this.compressionLevel),h=ut(l,2,this.compressionLevel);if(this.compressionLevel>=1){const d=this.getBucketIndex(s,o)*Z.BucketStorageSizeFloats,p=s.compressionScaleFactor,m=s.compressionScaleRange;t.x=(c-m)*p+s.bucketArray[d],t.y=(u-m)*p+s.bucketArray[d+1],t.z=(h-m)*p+s.bucketArray[d+2]}else t.x=c,t.y=u,t.z=h;n&&t.applyMatrix4(n)}getSplatColor(e,t){const n=this.globalSplatIndexToSectionMap[e],i=this.sections[n],s=e-i.splatCountOffset,o=i.bytesPerSplat*s+Z.CompressionLevels[this.compressionLevel].ColorOffsetBytes,a=new Uint8Array(this.bufferData,i.dataBase+o,4);t.set(a[0],a[1],a[2],a[3])}fillSplatCenterArray(e,t,n,i,s){const o=this.splatCount;n=n||0,i=i||o-1,s===void 0&&(s=n);const a=new I;for(let l=n;l<=i;l++){const c=this.globalSplatIndexToSectionMap[l],u=this.sections[c],h=l-u.splatCountOffset,f=(l-n+s)*Z.CenterComponentCount,d=u.bytesPerSplat*h,p=new DataView(this.bufferData,u.dataBase+d),m=ut(p,0,this.compressionLevel),g=ut(p,1,this.compressionLevel),_=ut(p,2,this.compressionLevel);if(this.compressionLevel>=1){const v=this.getBucketIndex(u,h)*Z.BucketStorageSizeFloats,x=u.compressionScaleFactor,T=u.compressionScaleRange;a.x=(m-T)*x+u.bucketArray[v],a.y=(g-T)*x+u.bucketArray[v+1],a.z=(_-T)*x+u.bucketArray[v+2]}else a.x=m,a.y=g,a.z=_;t&&a.applyMatrix4(t),e[f]=a.x,e[f+1]=a.y,e[f+2]=a.z}}fillSplatCovarianceArray(e,t,n,i,s,o){const a=this.splatCount,l=new I,c=new at;n=n||0,i=i||a-1,s===void 0&&(s=n);for(let u=n;u<=i;u++){const h=this.globalSplatIndexToSectionMap[u],f=this.sections[h],d=u-f.splatCountOffset,p=(u-n+s)*Z.CovarianceComponentCount,m=f.bytesPerSplat*d+Z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,g=new DataView(this.bufferData,f.dataBase+m);l.set(bt(ut(g,0,this.compressionLevel),this.compressionLevel),bt(ut(g,1,this.compressionLevel),this.compressionLevel),bt(ut(g,2,this.compressionLevel),this.compressionLevel)),c.set(bt(ut(g,4,this.compressionLevel),this.compressionLevel),bt(ut(g,5,this.compressionLevel),this.compressionLevel),bt(ut(g,6,this.compressionLevel),this.compressionLevel),bt(ut(g,3,this.compressionLevel),this.compressionLevel)),Z.computeCovariance(l,c,t,e,p,o)}}fillSplatColorArray(e,t,n,i,s){const o=this.splatCount;n=n||0,i=i||o-1,s===void 0&&(s=n);for(let a=n;a<=i;a++){const l=this.globalSplatIndexToSectionMap[a],c=this.sections[l],u=a-c.splatCountOffset,h=(a-n+s)*Z.ColorComponentCount,f=c.bytesPerSplat*u+Z.CompressionLevels[this.compressionLevel].ColorOffsetBytes,d=new Uint8Array(this.bufferData,c.dataBase+f);let p=d[3];p=p>=t?p:0,e[h]=d[0],e[h+1]=d[1],e[h+2]=d[2],e[h+3]=p}}static parseHeader(e){const t=new Uint8Array(e,0,Z.HeaderSizeBytes),n=new Uint16Array(e,0,Z.HeaderSizeBytes/2),i=new Uint32Array(e,0,Z.HeaderSizeBytes/4),s=new Float32Array(e,0,Z.HeaderSizeBytes/4),o=t[0],a=t[1],l=i[1],c=i[2],u=i[3],h=i[4],f=n[10],d=new I(s[6],s[7],s[8]),p=s[9]||-mr,m=s[10]||mr;return{versionMajor:o,versionMinor:a,maxSectionCount:l,sectionCount:c,maxSplatCount:u,splatCount:h,compressionLevel:f,sceneCenter:d,minSphericalHarmonicsCoeff:p,maxSphericalHarmonicsCoeff:m}}static writeHeaderCountsToBuffer(e,t,n){const i=new Uint32Array(n,0,Z.HeaderSizeBytes/4);i[2]=e,i[4]=t}static writeHeaderToBuffer(e,t){const n=new Uint8Array(t,0,Z.HeaderSizeBytes),i=new Uint16Array(t,0,Z.HeaderSizeBytes/2),s=new Uint32Array(t,0,Z.HeaderSizeBytes/4),o=new Float32Array(t,0,Z.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,s[1]=e.maxSectionCount,s[2]=e.sectionCount,s[3]=e.maxSplatCount,s[4]=e.splatCount,i[10]=e.compressionLevel,o[6]=e.sceneCenter.x,o[7]=e.sceneCenter.y,o[8]=e.sceneCenter.z,o[9]=e.minSphericalHarmonicsCoeff||-mr,o[10]=e.maxSphericalHarmonicsCoeff||mr}static parseSectionHeaders(e,t,n=0,i){const s=e.compressionLevel,o=e.maxSectionCount,a=new Uint16Array(t,n,o*Z.SectionHeaderSizeBytes/2),l=new Uint32Array(t,n,o*Z.SectionHeaderSizeBytes/4),c=new Float32Array(t,n,o*Z.SectionHeaderSizeBytes/4),u=[];let h=0,f=h/2,d=h/4,p=Z.HeaderSizeBytes+e.maxSectionCount*Z.SectionHeaderSizeBytes,m=0;for(let g=0;g<o;g++){const _=l[d+1],y=l[d+2],v=l[d+3],x=c[d+4],T=x/2,E=a[f+10],S=l[d+6]||Z.CompressionLevels[s].ScaleRange,C=l[d+8],A=l[d+9],M=A*4,w=E*v+M,F=a[f+20],{bytesPerSplat:P}=Z.calculateComponentStorage(s,F),L=P*_,B=L+w,O={bytesPerSplat:P,splatCountOffset:m,splatCount:i?_:0,maxSplatCount:_,bucketSize:y,bucketCount:v,bucketBlockSize:x,halfBucketBlockSize:T,bucketStorageSizeBytes:E,bucketsStorageSizeBytes:w,splatDataStorageSizeBytes:L,storageSizeBytes:B,compressionScaleRange:S,compressionScaleFactor:T/S,base:p,bucketsBase:p+M,dataBase:p+w,fullBucketCount:C,partiallyFilledBucketCount:A,sphericalHarmonicsDegree:F};u[g]=O,p+=B,h+=Z.SectionHeaderSizeBytes,f=h/2,d=h/4,m+=_}return u}static writeSectionHeaderToBuffer(e,t,n,i=0){const s=new Uint16Array(n,i,Z.SectionHeaderSizeBytes/2),o=new Uint32Array(n,i,Z.SectionHeaderSizeBytes/4),a=new Float32Array(n,i,Z.SectionHeaderSizeBytes/4);o[0]=e.splatCount,o[1]=e.maxSplatCount,o[2]=t>=1?e.bucketSize:0,o[3]=t>=1?e.bucketCount:0,a[4]=t>=1?e.bucketBlockSize:0,s[10]=t>=1?Z.BucketStorageSizeBytes:0,o[6]=t>=1?e.compressionScaleRange:0,o[7]=e.storageSizeBytes,o[8]=t>=1?e.fullBucketCount:0,o[9]=t>=1?e.partiallyFilledBucketCount:0,s[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){const i=new Uint32Array(t,n,Z.SectionHeaderSizeBytes/4);i[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const n=Z.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new I().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=Z.parseSectionHeaders(n,this.bufferData,Z.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){const n=Z.CompressionLevels[e].BytesPerCenter,i=Z.CompressionLevels[e].BytesPerScale,s=Z.CompressionLevels[e].BytesPerRotation,o=Z.CompressionLevels[e].BytesPerColor,a=mo(t),l=Z.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*a,c=n+i+s+o+l;return{bytesPerCenter:n,bytesPerScale:i,bytesPerRotation:s,bytesPerColor:o,sphericalHarmonicsComponentsPerSplat:a,sphericalHarmonicsBytesPerSplat:l,bytesPerSplat:c}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*Z.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){const n=this.sections[t];for(let i=0;i<n.maxSplatCount;i++){const s=e+i;this.globalSplatIndexToLocalSplatIndexMap[s]=i,this.globalSplatIndexToSectionMap[s]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){Z.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){const n=Z.HeaderSizeBytes+Z.SectionHeaderSizeBytes*e;Z.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static generateFromUncompressedSplatArrays(e,t,n,i,s,o,a=[]){let l=0;for(let T=0;T<e.length;T++){const E=e[T];l=Math.max(E.sphericalHarmonicsDegree,l)}let c,u;for(let T=0;T<e.length;T++){const E=e[T];for(let S=0;S<E.splats.length;S++){const C=E.splats[S];for(let A=we.OFFSET.FRC0;A<we.OFFSET.FRC23&&A<C.length;A++)(!c||C[A]<c)&&(c=C[A]),(!u||C[A]>u)&&(u=C[A])}}c=c||-mr,u=u||mr;const{bytesPerSplat:h}=Z.calculateComponentStorage(n,l),f=Z.CompressionLevels[n].ScaleRange,d=[],p=[];let m=0;for(let T=0;T<e.length;T++){const E=e[T],S=new we(l);for(let K=0;K<E.splatCount;K++){const se=E.splats[K];(se[we.OFFSET.OPACITY]||0)>=t&&S.addSplat(se)}const C=a[T]||{},A=(C.blockSizeFactor||1)*(s||Z.BucketBlockSize),M=Math.ceil((C.bucketSizeFactor||1)*(o||Z.BucketSize)),w=Z.computeBucketsForUncompressedSplatArray(S,A,M),F=w.fullBuckets.length,P=w.partiallyFullBuckets.map(K=>K.splats.length),L=P.length,B=[...w.fullBuckets,...w.partiallyFullBuckets],O=S.splats.length*h,H=L*4,k=n>=1?B.length*Z.BucketStorageSizeBytes+H:0,j=O+k,ne=new ArrayBuffer(j),oe=f/(A*.5),fe=new I;let xe=0;for(let K=0;K<B.length;K++){const se=B[K];fe.fromArray(se.center);for(let te=0;te<se.splats.length;te++){let ye=se.splats[te];const Ae=S.splats[ye],be=k+xe*h;Z.writeSplatDataToSectionBuffer(Ae,ne,be,n,l,fe,oe,f,c,u),xe++}}if(m+=xe,n>=1){const K=new Uint32Array(ne,0,P.length*4);for(let te=0;te<P.length;te++)K[te]=P[te];const se=new Float32Array(ne,H,B.length*Z.BucketStorageSizeFloats);for(let te=0;te<B.length;te++){const ye=B[te],Ae=te*3;se[Ae]=ye.center[0],se[Ae+1]=ye.center[1],se[Ae+2]=ye.center[2]}}d.push(ne);const W=new ArrayBuffer(Z.SectionHeaderSizeBytes);Z.writeSectionHeaderToBuffer({maxSplatCount:xe,splatCount:xe,bucketSize:M,bucketCount:B.length,bucketBlockSize:A,compressionScaleRange:f,storageSizeBytes:j,fullBucketCount:F,partiallyFilledBucketCount:L,sphericalHarmonicsDegree:l},n,W,0),p.push(W)}let g=0;for(let T of d)g+=T.byteLength;const _=Z.HeaderSizeBytes+Z.SectionHeaderSizeBytes*d.length+g,y=new ArrayBuffer(_);Z.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:d.length,sectionCount:d.length,maxSplatCount:m,splatCount:m,compressionLevel:n,sceneCenter:i,minSphericalHarmonicsCoeff:c,maxSphericalHarmonicsCoeff:u},y);let v=Z.HeaderSizeBytes;for(let T of p)new Uint8Array(y,v,Z.SectionHeaderSizeBytes).set(new Uint8Array(T)),v+=Z.SectionHeaderSizeBytes;for(let T of d)new Uint8Array(y,v,T.byteLength).set(new Uint8Array(T)),v+=T.byteLength;return new Z(y)}static computeBucketsForUncompressedSplatArray(e,t,n){let i=e.splatCount;const s=t/2,o=new I,a=new I;for(let m=0;m<i;m++){const g=e.splats[m],_=[g[we.OFFSET.X],g[we.OFFSET.Y],g[we.OFFSET.Z]];(m===0||_[0]<o.x)&&(o.x=_[0]),(m===0||_[0]>a.x)&&(a.x=_[0]),(m===0||_[1]<o.y)&&(o.y=_[1]),(m===0||_[1]>a.y)&&(a.y=_[1]),(m===0||_[2]<o.z)&&(o.z=_[2]),(m===0||_[2]>a.z)&&(a.z=_[2])}const l=new I().copy(a).sub(o),c=Math.ceil(l.y/t),u=Math.ceil(l.z/t),h=new I,f=[],d={};for(let m=0;m<i;m++){const g=e.splats[m],_=[g[we.OFFSET.X],g[we.OFFSET.Y],g[we.OFFSET.Z]],y=Math.floor((_[0]-o.x)/t),v=Math.floor((_[1]-o.y)/t),x=Math.floor((_[2]-o.z)/t);h.x=y*t+o.x+s,h.y=v*t+o.y+s,h.z=x*t+o.z+s;const T=y*(c*u)+v*u+x;let E=d[T];E||(d[T]=E={splats:[],center:h.toArray()}),E.splats.push(m),E.splats.length>=n&&(f.push(E),d[T]=null)}const p=[];for(let m in d)if(d.hasOwnProperty(m)){const g=d[m];g&&p.push(g)}return{fullBuckets:f,partiallyFullBuckets:p}}};le(Z,"CurrentMajorVersion",0),le(Z,"CurrentMinorVersion",1),le(Z,"CenterComponentCount",3),le(Z,"ScaleComponentCount",3),le(Z,"RotationComponentCount",4),le(Z,"ColorComponentCount",4),le(Z,"CovarianceComponentCount",6),le(Z,"SplatScaleOffsetFloat",3),le(Z,"SplatRotationOffsetFloat",6),le(Z,"CompressionLevels",{0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}}),le(Z,"CovarianceSizeFloats",6),le(Z,"HeaderSizeBytes",4096),le(Z,"SectionHeaderSizeBytes",1024),le(Z,"BucketStorageSizeBytes",12),le(Z,"BucketStorageSizeFloats",3),le(Z,"BucketBlockSize",5),le(Z,"BucketSize",256),le(Z,"computeCovariance",function(){const e=new ue,t=new ke,n=new ke,i=new ke,s=new ke,o=new ke,a=new ke;return function(l,c,u,h,f=0,d){e.makeScale(l.x,l.y,l.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(c),n.setFromMatrix4(e),i.copy(n).multiply(t),s.copy(i).transpose().premultiply(i),u&&(o.setFromMatrix4(u),a.copy(o).transpose(),s.multiply(a),s.premultiply(o)),d>=1?(h[f]=Gt(s.elements[0]),h[f+1]=Gt(s.elements[3]),h[f+2]=Gt(s.elements[6]),h[f+3]=Gt(s.elements[4]),h[f+4]=Gt(s.elements[7]),h[f+5]=Gt(s.elements[8])):(h[f]=s.elements[0],h[f+1]=s.elements[3],h[f+2]=s.elements[6],h[f+3]=s.elements[4],h[f+4]=s.elements[7],h[f+5]=s.elements[8])}}()),le(Z,"dot3",(e,t,n,i,s)=>{s[0]=s[1]=s[2]=0;const o=i[0],a=i[1],l=i[2];Z.addInto3(e[0]*o,e[1]*o,e[2]*o,s),Z.addInto3(t[0]*a,t[1]*a,t[2]*a,s),Z.addInto3(n[0]*l,n[1]*l,n[2]*l,s)}),le(Z,"addInto3",(e,t,n,i)=>{i[0]=i[0]+e,i[1]=i[1]+t,i[2]=i[2]+n}),le(Z,"dot5",(e,t,n,i,s,o,a)=>{a[0]=a[1]=a[2]=0;const l=o[0],c=o[1],u=o[2],h=o[3],f=o[4];Z.addInto3(e[0]*l,e[1]*l,e[2]*l,a),Z.addInto3(t[0]*c,t[1]*c,t[2]*c,a),Z.addInto3(n[0]*u,n[1]*u,n[2]*u,a),Z.addInto3(i[0]*h,i[1]*h,i[2]*h,a),Z.addInto3(s[0]*f,s[1]*f,s[2]*f,a)}),le(Z,"rotateSphericalHarmonics3",(e,t,n,i,s,o,a,l,c)=>{Z.dot3(e,t,n,i,a),Z.dot3(e,t,n,s,l),Z.dot3(e,t,n,o,c)}),le(Z,"rotateSphericalHarmonics5",(e,t,n,i,s,o,a,l,c,u,h,f,d,p,m,g,_,y)=>{const v=Math.sqrt(.25),x=Math.sqrt(3/4),T=Math.sqrt(1/3),E=Math.sqrt(4/3),S=Math.sqrt(1/12);c[0]=v*(l[2]*o[0]+l[0]*o[2]+(o[2]*l[0]+o[0]*l[2])),c[1]=l[1]*o[0]+o[1]*l[0],c[2]=x*(l[1]*o[1]+o[1]*l[1]),c[3]=l[1]*o[2]+o[1]*l[2],c[4]=v*(l[2]*o[2]-l[0]*o[0]+(o[2]*l[2]-o[0]*l[0])),Z.dot5(e,t,n,i,s,c,p),u[0]=v*(a[2]*o[0]+a[0]*o[2]+(o[2]*a[0]+o[0]*a[2])),u[1]=a[1]*o[0]+o[1]*a[0],u[2]=x*(a[1]*o[1]+o[1]*a[1]),u[3]=a[1]*o[2]+o[1]*a[2],u[4]=v*(a[2]*o[2]-a[0]*o[0]+(o[2]*a[2]-o[0]*a[0])),Z.dot5(e,t,n,i,s,u,m),h[0]=T*(a[2]*a[0]+a[0]*a[2])+-S*(l[2]*l[0]+l[0]*l[2]+(o[2]*o[0]+o[0]*o[2])),h[1]=E*a[1]*a[0]+-T*(l[1]*l[0]+o[1]*o[0]),h[2]=a[1]*a[1]+-v*(l[1]*l[1]+o[1]*o[1]),h[3]=E*a[1]*a[2]+-T*(l[1]*l[2]+o[1]*o[2]),h[4]=T*(a[2]*a[2]-a[0]*a[0])+-S*(l[2]*l[2]-l[0]*l[0]+(o[2]*o[2]-o[0]*o[0])),Z.dot5(e,t,n,i,s,h,g),f[0]=v*(a[2]*l[0]+a[0]*l[2]+(l[2]*a[0]+l[0]*a[2])),f[1]=a[1]*l[0]+l[1]*a[0],f[2]=x*(a[1]*l[1]+l[1]*a[1]),f[3]=a[1]*l[2]+l[1]*a[2],f[4]=v*(a[2]*l[2]-a[0]*l[0]+(l[2]*a[2]-l[0]*a[0])),Z.dot5(e,t,n,i,s,f,_),d[0]=v*(l[2]*l[0]+l[0]*l[2]-(o[2]*o[0]+o[0]*o[2])),d[1]=l[1]*l[0]-o[1]*o[0],d[2]=x*(l[1]*l[1]-o[1]*o[1]),d[3]=l[1]*l[2]-o[1]*o[2],d[4]=v*(l[2]*l[2]-l[0]*l[0]-(o[2]*o[2]-o[0]*o[0])),Z.dot5(e,t,n,i,s,d,y)}),le(Z,"writeSplatDataToSectionBuffer",function(){const e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),i=new ArrayBuffer(4),s=new ArrayBuffer(256),o=new at,a=new I,l=new I,{X:c,Y:u,Z:h,SCALE0:f,SCALE1:d,SCALE2:p,ROTATION0:m,ROTATION1:g,ROTATION2:_,ROTATION3:y,FDC0:v,FDC1:x,FDC2:T,OPACITY:E,FRC0:S,FRC9:C}=we.OFFSET,A=(M,w,F)=>{const P=F*2+1;return M=Math.round(M*w)+F,sn(M,0,P)};return function(M,w,F,P,L,B,O,H,k=-mr,j=mr){const ne=mo(L),oe=Z.CompressionLevels[P].BytesPerCenter,fe=Z.CompressionLevels[P].BytesPerScale,xe=Z.CompressionLevels[P].BytesPerRotation,W=Z.CompressionLevels[P].BytesPerColor,K=F,se=K+oe,te=se+fe,ye=te+xe,Ae=ye+W;if(M[m]!==void 0?(o.set(M[m],M[g],M[_],M[y]),o.normalize()):o.set(1,0,0,0),M[f]!==void 0?a.set(M[f]||0,M[d]||0,M[p]||0):a.set(0,0,0),P===0){const Ve=new Float32Array(w,K,Z.CenterComponentCount),Ue=new Float32Array(w,te,Z.RotationComponentCount),Se=new Float32Array(w,se,Z.ScaleComponentCount);if(Ue.set([o.x,o.y,o.z,o.w]),Se.set([a.x,a.y,a.z]),Ve.set([M[c],M[u],M[h]]),L>0){const N=new Float32Array(w,Ae,ne);if(L>=1){for(let Xe=0;Xe<9;Xe++)N[Xe]=M[S+Xe]||0;if(L>=2)for(let Xe=0;Xe<15;Xe++)N[Xe+9]=M[C+Xe]||0}}}else{const Ve=new Uint16Array(e,0,Z.CenterComponentCount),Ue=new Uint16Array(n,0,Z.RotationComponentCount),Se=new Uint16Array(t,0,Z.ScaleComponentCount);if(Ue.set([Gt(o.x),Gt(o.y),Gt(o.z),Gt(o.w)]),Se.set([Gt(a.x),Gt(a.y),Gt(a.z)]),l.set(M[c],M[u],M[h]).sub(B),l.x=A(l.x,O,H),l.y=A(l.y,O,H),l.z=A(l.z,O,H),Ve.set([l.x,l.y,l.z]),L>0){const N=P===1?Uint16Array:Uint8Array,Xe=P===1?2:1,Oe=new N(s,0,ne);if(L>=1){for(let Te=0;Te<9;Te++){const Je=M[S+Te]||0;Oe[Te]=P===1?Gt(Je):da(Je,k,j)}const Ne=9*Xe;if(qs(Oe.buffer,0,w,Ae,Ne),L>=2){for(let Te=0;Te<15;Te++){const Je=M[C+Te]||0;Oe[Te+9]=P===1?Gt(Je):da(Je,k,j)}qs(Oe.buffer,Ne,w,Ae+Ne,15*Xe)}}}qs(Ve.buffer,0,w,K,6),qs(Se.buffer,0,w,se,6),qs(Ue.buffer,0,w,te,8)}const be=new Uint8ClampedArray(i,0,4);be.set([M[v]||0,M[x]||0,M[T]||0]),be[3]=M[E]||0,qs(be.buffer,0,w,ye,4)}}());let Le=Z;const Gm=new Uint8Array([112,108,121,10]),Wm=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),Xu="end_header",qu=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),Ri=(r,e)=>{const t=(1<<e)-1;return(r&t)/t},Xm=(r,e)=>{r.x=Ri(e>>>21,11),r.y=Ri(e>>>11,10),r.z=Ri(e,11)},_1=(r,e)=>{r.x=Ri(e>>>24,8),r.y=Ri(e>>>16,8),r.z=Ri(e>>>8,8),r.w=Ri(e,8)},v1=(r,e)=>{const t=1/(Math.sqrt(2)*.5),n=(Ri(e>>>20,10)-.5)*t,i=(Ri(e>>>10,10)-.5)*t,s=(Ri(e,10)-.5)*t,o=Math.sqrt(1-(n*n+i*i+s*s));switch(e>>>30){case 0:r.set(o,n,i,s);break;case 1:r.set(n,o,i,s);break;case 2:r.set(n,i,o,s);break;case 3:r.set(n,i,s,o);break}},Ys=(r,e,t)=>r*(1-t)+e*t,fn=(r,e)=>{var t;return(t=r.properties.find(n=>n.name===e&&n.storage))==null?void 0:t.storage},dn=class dn{static decodeHeaderText(e){let t,n,i;const s=e.split(`
`).filter(l=>!l.startsWith("comment "));let o=0,a=!1;for(let l=1;l<s.length;++l){const c=s[l].split(" ");switch(c[0]){case"format":if(c[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:c[1],count:parseInt(c[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"&&(i=t);break;case"property":{if(!qu.has(c[1]))throw new Error(`Unrecognized property data type '${c[1]}' in ply header`);const u=qu.get(c[1]),h=u.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(o+=u.BYTES_PER_ELEMENT),t.properties.push({type:c[1],name:c[2],storage:null,byteSize:u.BYTES_PER_ELEMENT,storageSizeByes:h}),t.storageSizeBytes+=h;break}case Xu:a=!0;break;default:throw new Error(`Unrecognized header value '${c[0]}' in ply header`)}if(a)break}return{chunkElement:n,vertexElement:i,bytesPerSplat:o,headerSizeBytes:e.indexOf(Xu)+Xu.length+1,sphericalHarmonicsDegree:0}}static decodeHeader(e){const t=(u,h)=>{const f=u.length-h.length;let d,p;for(d=0;d<=f;++d){for(p=0;p<h.length&&u[d+p]===h[p];++p);if(p===h.length)return d}return-1},n=(u,h)=>{if(u.length<h.length)return!1;for(let f=0;f<h.length;++f)if(u[f]!==h[f])return!1;return!0};let i=new Uint8Array(e),s;if(i.length>=Gm.length&&!n(i,Gm))throw new Error("Invalid PLY header");if(s=t(i,Wm),s===-1)throw new Error("End of PLY header not found");const o=new TextDecoder("ascii").decode(i.slice(0,s)),{chunkElement:a,vertexElement:l,bytesPerSplat:c}=dn.decodeHeaderText(o);return{headerSizeBytes:s+Wm.length,bytesPerSplat:c,chunkElement:a,vertexElement:l}}static readElementData(e,t,n,i,s,o=null){let a=t instanceof DataView?t:new DataView(t);i=i||0,s=s||e.count-1;for(let l=i;l<=s;++l)for(let c=0;c<e.properties.length;++c){const u=e.properties[c],h=qu.get(u.type),f=h.BYTES_PER_ELEMENT*e.count;if((!u.storage||u.storage.byteLength<f)&&(!o||o(u.name))&&(u.storage=new h(e.count)),u.storage)switch(u.type){case"char":u.storage[l]=a.getInt8(n);break;case"uchar":u.storage[l]=a.getUint8(n);break;case"short":u.storage[l]=a.getInt16(n,!0);break;case"ushort":u.storage[l]=a.getUint16(n,!0);break;case"int":u.storage[l]=a.getInt32(n,!0);break;case"uint":u.storage[l]=a.getUint32(n,!0);break;case"float":u.storage[l]=a.getFloat32(n,!0);break;case"double":u.storage[l]=a.getFloat64(n,!0);break}n+=u.byteSize}return n}static readPly(e,t=null){const n=dn.decodeHeader(e);let i=dn.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return dn.readElementData(n.vertexElement,e,i,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement}}static getElementStorageArrays(e,t){const n=fn(e,"min_x"),i=fn(e,"min_y"),s=fn(e,"min_z"),o=fn(e,"max_x"),a=fn(e,"max_y"),l=fn(e,"max_z"),c=fn(e,"min_scale_x"),u=fn(e,"min_scale_y"),h=fn(e,"min_scale_z"),f=fn(e,"max_scale_x"),d=fn(e,"max_scale_y"),p=fn(e,"max_scale_z"),m=fn(t,"packed_position"),g=fn(t,"packed_rotation"),_=fn(t,"packed_scale"),y=fn(t,"packed_color");return{positionExtremes:{minX:n,maxX:o,minY:i,maxY:a,minZ:s,maxZ:l},scaleExtremes:{minScaleX:c,maxScaleX:f,minScaleY:u,maxScaleY:d,minScaleZ:h,maxScaleZ:p},position:m,rotation:g,scale:_,color:y}}static parseToUncompressedSplatBufferSection(e,t,n,i,s,o,a,l,c,u=null){dn.readElementData(t,o,a,n,i,u);const h=Le.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:f,scaleExtremes:d,position:p,rotation:m,scale:g,color:_}=dn.getElementStorageArrays(e,t),y=we.createSplat();for(let v=n;v<=i;++v){dn.decompressSplat(v,s,p,f,g,d,m,_,y);const x=v*h+c;Le.writeSplatDataToSectionBuffer(y,l,x,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,i,s,o,a,l,c=null){dn.readElementData(t,o,a,n,i,c);const{positionExtremes:u,scaleExtremes:h,position:f,rotation:d,scale:p,color:m}=dn.getElementStorageArrays(e,t);for(let g=n;g<=i;++g){const _=we.createSplat();dn.decompressSplat(g,s,f,u,p,h,d,m,_),l.addSplat(_)}}static parseToUncompressedSplatArray(e){const{chunkElement:t,vertexElement:n}=dn.readPly(e),i=new we,{positionExtremes:s,scaleExtremes:o,position:a,rotation:l,scale:c,color:u}=dn.getElementStorageArrays(t,n);for(let f=0;f<n.count;++f){i.addDefaultSplat();const d=i.getSplat(i.splatCount-1);dn.decompressSplat(f,0,a,s,c,o,l,u,d)}return new ue().identity(),i}};le(dn,"decompressSplat",function(){const e=new I,t=new at,n=new I,i=new $e,s=we.OFFSET;return function(o,a,l,c,u,h,f,d,p){p=p||we.createSplat();const m=Math.floor((a+o)/256);return Xm(e,l[o]),v1(t,f[o]),Xm(n,u[o]),_1(i,d[o]),p[s.X]=Ys(c.minX[m],c.maxX[m],e.x),p[s.Y]=Ys(c.minY[m],c.maxY[m],e.y),p[s.Z]=Ys(c.minZ[m],c.maxZ[m],e.z),p[s.ROTATION0]=t.x,p[s.ROTATION1]=t.y,p[s.ROTATION2]=t.z,p[s.ROTATION3]=t.w,p[s.SCALE0]=Math.exp(Ys(h.minScaleX[m],h.maxScaleX[m],n.x)),p[s.SCALE1]=Math.exp(Ys(h.minScaleY[m],h.maxScaleY[m],n.y)),p[s.SCALE2]=Math.exp(Ys(h.minScaleZ[m],h.maxScaleZ[m],n.z)),p[s.FDC0]=sn(Math.floor(i.x*255),0,255),p[s.FDC1]=sn(Math.floor(i.y*255),0,255),p[s.FDC2]=sn(Math.floor(i.z*255),0,255),p[s.OPACITY]=sn(Math.floor(i.w*255),0,255),p}}());let cs=dn;const Ir={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[H_,Sd,Ad,Md,Td,Ed,Cd]=[0,1,2,3,4,5,6],qm={double:H_,int:Sd,uint:Ad,float:Md,short:Td,ushort:Ed,uchar:Cd},x1={[H_]:8,[Sd]:4,[Ad]:4,[Md]:4,[Td]:2,[Ed]:2,[Cd]:1},Wn=class Wn{constructor(){}decodeSectionHeader(e,t,n=0){const i=[];let s=!1,o=-1,a=0,l=!1,c=null;const u=[],h=[],f=[],d={};for(let _=n;_<e.length;_++){const y=e[_].trim();if(y.startsWith("element"))if(s){o--;break}else{s=!0,n=_,o=_;const v=y.split(" ");let x=0;for(let T of v){const E=T.trim();E.length>0&&(x++,x===2?c=E:x===3&&(a=parseInt(E)))}}else if(y.startsWith("property")){const v=y.match(/(\w+)\s+(\w+)\s+(\w+)/);if(v){const x=v[2],T=v[3];f.push(T);const E=t[T];d[T]=x;const S=qm[x];E!==void 0&&(u.push(E),h[E]=S)}}if(y===Wn.HeaderEndToken){l=!0;break}s&&(i.push(y),o++)}const p=[];let m=0;for(let _ of f){const y=d[_];if(d.hasOwnProperty(_)){const v=t[_];v!==void 0&&(p[v]=m)}m+=x1[qm[y]]}const g=this.decodeSphericalHarmonicsFromSectionHeader(f,t);return{headerLines:i,headerStartLine:n,headerEndLine:o,fieldTypes:h,fieldIds:u,fieldOffsets:p,bytesPerVertex:m,vertexCount:a,dataSizeBytes:m*a,endOfHeader:l,sectionName:c,sphericalHarmonicsDegree:g.degree,sphericalHarmonicsCoefficientsPerChannel:g.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:g.degree1Fields,sphericalHarmonicsDegree2Fields:g.degree2Fields}}decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,i=0;for(let l of e)l.startsWith("f_rest")&&n++;i=n/3;let s=0;i>=3&&(s=1),i>=8&&(s=2);let o=[],a=[];for(let l=0;l<3;l++){if(s>=1)for(let c=0;c<3;c++)o.push(t["f_rest_"+(c+i*l)]);if(s>=2)for(let c=0;c<5;c++)a.push(t["f_rest_"+(c+i*l+3)])}return{degree:s,coefficientsPerChannel:i,degree1Fields:o,degree2Fields:a}}static getHeaderSectionNames(e){const t=[];for(let n of e)if(n.startsWith("element")){const i=n.split(" ");let s=0;for(let o of i){const a=o.trim();a.length>0&&(s++,s===2&&t.push(a))}}return t}static checkTextForEndHeader(e){return!!e.includes(Wn.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,i){const s=new Uint8Array(e,Math.max(0,t-n),n),o=i.decode(s);return Wn.checkTextForEndHeader(o)}static extractHeaderFromBufferToText(e){const t=new TextDecoder;let n=0,i="";const s=100;for(;;){if(n+s>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,n,s);if(i+=t.decode(o),n+=s,Wn.checkBufferForEndHeader(e,n,s*2,t))break}return i}readHeaderFromBuffer(e){const t=new TextDecoder;let n=0,i="";const s=100;for(;;){if(n+s>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,n,s);if(i+=t.decode(o),n+=s,Wn.checkBufferForEndHeader(e,n,s*2,t))break}return i}static convertHeaderTextToLines(e){const t=e.split(`
`),n=[];for(let i=0;i<t.length;i++){const s=t[i].trim();if(n.push(s),s===Wn.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){const t=Wn.convertHeaderTextToLines(e);let n=Ir.INRIAV1;for(let i=0;i<t.length;i++){const s=t[i].trim();if(s.startsWith("element chunk")||s.match(/[A-Za-z]*packed_[A-Za-z]*/))n=Ir.PlayCanvasCompressed;else if(s.startsWith("element codebook_centers"))n=Ir.INRIAV2;else if(s===Wn.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){const t=Wn.extractHeaderFromBufferToText(e);return Wn.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,i,s,o,a=!0){const l=n*t.bytesPerVertex+i,c=t.fieldOffsets,u=t.fieldTypes;for(let h of s){const f=u[h];f===Md?o[h]=e.getFloat32(l+c[h],!0):f===Td?o[h]=e.getInt16(l+c[h],!0):f===Ed?o[h]=e.getUint16(l+c[h],!0):f===Sd?o[h]=e.getInt32(l+c[h],!0):f===Ad?o[h]=e.getUint32(l+c[h],!0):f===Cd&&(a?o[h]=e.getUint8(l+c[h])/255:o[h]=e.getUint8(l+c[h]))}}};le(Wn,"HeaderEndToken","end_header");let rn=Wn;const V_=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],y1=V_.map((r,e)=>e),[Ym,S1,A1,M1,T1,E1,C1,b1,w1,R1,Qm,I1,P1,Km,jm,D1,F1,L1]=y1,is=class is{constructor(){this.plyParserutils=new rn}decodeHeaderLines(e){let t=0;e.forEach(u=>{u.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let s=Array.from(Array(Math.max(n-1,0))).map((u,h)=>`f_rest_${h+1}`);const o=[...V_,...s],a=o.map((u,h)=>h),l=a.reduce((u,h)=>(u[o[h]]=h,u),{}),c=this.plyParserutils.decodeSectionHeader(e,l,0);return c.splatCount=c.vertexCount,c.bytesPerSplat=c.bytesPerVertex,c.fieldsToReadIndexes=a,c}decodeHeaderText(e){const t=rn.convertHeaderTextToLines(e),n=this.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(rn.HeaderEndToken)+rn.HeaderEndToken.length+1,n}decodeHeaderFromBuffer(e){const t=this.plyParserutils.readHeaderFromBuffer(e);return this.decodeHeaderText(t)}findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}parseToUncompressedSplatBufferSection(e,t,n,i,s,o,a,l=0){l=Math.min(l,e.sphericalHarmonicsDegree);const c=Le.CompressionLevels[0].SphericalHarmonicsDegrees[l].BytesPerSplat;for(let u=t;u<=n;u++){const h=is.parseToUncompressedSplat(i,u,e,s,l),f=u*c+a;Le.writeSplatDataToSectionBuffer(h,o,f,0,l)}}parseToUncompressedSplatArraySection(e,t,n,i,s,o,a=0){a=Math.min(a,e.sphericalHarmonicsDegree);for(let l=t;l<=n;l++){const c=is.parseToUncompressedSplat(i,l,e,s,a);o.addSplat(c)}}decodeSectionSplatData(e,t,n,i){i=Math.min(i,n.sphericalHarmonicsDegree);const s=new we(i);for(let o=0;o<t;o++){const a=is.parseToUncompressedSplat(e,o,n,0,i);s.addSplat(a)}return s}static readSplat(e,t,n,i,s){return rn.readVertex(e,t,n,i,t.fieldsToReadIndexes,s,!0)}parseToUncompressedSplatArray(e,t=0){const n=this.decodeHeaderFromBuffer(e),i=n.splatCount,s=this.findSplatData(e,n);return this.decodeSectionSplatData(s,i,n,t)}};le(is,"parseToUncompressedSplat",function(){let e=[];const t=new at,n=we.OFFSET.X,i=we.OFFSET.Y,s=we.OFFSET.Z,o=we.OFFSET.SCALE0,a=we.OFFSET.SCALE1,l=we.OFFSET.SCALE2,c=we.OFFSET.ROTATION0,u=we.OFFSET.ROTATION1,h=we.OFFSET.ROTATION2,f=we.OFFSET.ROTATION3,d=we.OFFSET.FDC0,p=we.OFFSET.FDC1,m=we.OFFSET.FDC2,g=we.OFFSET.OPACITY,_=[];for(let y=0;y<45;y++)_[y]=we.OFFSET.FRC0+y;return function(y,v,x,T=0,E=0){E=Math.min(E,x.sphericalHarmonicsDegree),is.readSplat(y,x,v,T,e);const S=we.createSplat(E);if(e[Ym]!==void 0?(S[o]=Math.exp(e[Ym]),S[a]=Math.exp(e[S1]),S[l]=Math.exp(e[A1])):(S[o]=.01,S[a]=.01,S[l]=.01),e[Qm]!==void 0){const C=.28209479177387814;S[d]=(.5+C*e[Qm])*255,S[p]=(.5+C*e[I1])*255,S[m]=(.5+C*e[P1])*255}else e[jm]!==void 0?(S[d]=e[jm]*255,S[p]=e[D1]*255,S[m]=e[F1]*255):(S[d]=0,S[p]=0,S[m]=0);if(e[Km]!==void 0&&(S[g]=1/(1+Math.exp(-e[Km]))*255),S[d]=sn(Math.floor(S[d]),0,255),S[p]=sn(Math.floor(S[p]),0,255),S[m]=sn(Math.floor(S[m]),0,255),S[g]=sn(Math.floor(S[g]),0,255),E>=1&&e[L1]!==void 0){for(let C=0;C<9;C++)S[_[C]]=e[x.sphericalHarmonicsDegree1Fields[C]];if(E>=2)for(let C=0;C<15;C++)S[_[9+C]]=e[x.sphericalHarmonicsDegree2Fields[C]]}return t.set(e[M1],e[T1],e[E1],e[C1]),t.normalize(),S[c]=t.x,S[u]=t.y,S[h]=t.z,S[f]=t.w,S[n]=e[b1],S[i]=e[w1],S[s]=e[R1],S}}());let _c=is;const G_=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],Dl=G_.map((r,e)=>e),[Fl,B1,U1,Zm,Ll,O1,Yu]=[0,1,4,16,17,18,19],W_=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],gf=W_.map((r,e)=>e),[$m,N1,k1,z1,H1,V1,G1,W1,X1,q1,_f,X_,q_,Jm]=gf,eg=_f,Y1=X_,Q1=q_,Bl=r=>{const e=(31744&r)>>10,t=1023&r;return(r>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)},va=class va{constructor(){this.plyParserutils=new rn}decodeSectionHeadersFromHeaderLines(e){const t=gf.reduce((u,h)=>(u[W_[h]]=h,u),{}),n=Dl.reduce((u,h)=>(u[G_[h]]=h,u),{}),i=rn.getHeaderSectionNames(e);let s;for(let u=0;u<i.length;u++)i[u]==="codebook_centers"&&(s=u);let o=0,a=!1;const l=[];let c=0;for(;!a;){let u;c===s?u=this.plyParserutils.decodeSectionHeader(e,n,o):u=this.plyParserutils.decodeSectionHeader(e,t,o),a=u.endOfHeader,o=u.headerEndLine+1,a||(u.splatCount=u.vertexCount,u.bytesPerSplat=u.bytesPerVertex),l.push(u),c++}return l}decodeSectionHeadersFromHeaderText(e){const t=rn.convertHeaderTextToLines(e);return this.decodeSectionHeadersFromHeaderLines(t)}getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}decodeHeaderFromHeaderText(e){const t=e.indexOf(rn.HeaderEndToken)+rn.HeaderEndToken.length+1,n=this.decodeSectionHeadersFromHeaderText(e),i=this.getSplatCountFromSectionHeaders(n);return{headerSizeBytes:t,sectionHeaders:n,splatCount:i}}decodeHeaderFromBuffer(e){const t=this.plyParserutils.readHeaderFromBuffer(e);return this.decodeHeaderFromHeaderText(t)}findVertexData(e,t,n){let i=t.headerSizeBytes;for(let s=0;s<n&&s<t.sectionHeaders.length;s++){const o=t.sectionHeaders[s];i+=o.dataSizeBytes}return new DataView(e,i,t.sectionHeaders[n].dataSizeBytes)}decodeCodeBook(e,t){const n=[],i=[];for(let s=0;s<t.vertexCount;s++){rn.readVertex(e,t,s,0,Dl,n);for(let o of Dl){const a=Dl[o];let l=i[a];l||(i[a]=l=[]),l.push(n[o])}}for(let s=0;s<i.length;s++){const o=i[s],a=.28209479177387814;for(let l=0;l<o.length;l++){const c=Bl(o[l]);s===Zm?o[l]=Math.round(1/(1+Math.exp(-c))*255):s===Fl?o[l]=Math.round((.5+a*c)*255):s===Ll?o[l]=Math.exp(c):o[l]=c}}return i}decodeSectionSplatData(e,t,n,i,s){s=Math.min(s,n.sphericalHarmonicsDegree);const o=new we(s);for(let a=0;a<t;a++){const l=va.parseToUncompressedSplat(e,a,n,i,0,s);o.addSplat(l)}return o}static readSplat(e,t,n,i,s){return rn.readVertex(e,t,n,i,gf,s,!1)}parseToUncompressedSplatArray(e,t=0){const n=[],i=this.decodeHeaderFromBuffer(e,t);let s;for(let a=0;a<i.sectionHeaders.length;a++){const l=i.sectionHeaders[a];if(l.sectionName==="codebook_centers"){const c=this.findVertexData(e,i,a);s=this.decodeCodeBook(c,l)}}for(let a=0;a<i.sectionHeaders.length;a++){const l=i.sectionHeaders[a];if(l.sectionName!=="codebook_centers"){const c=l.vertexCount,u=this.findVertexData(e,i,a),h=this.decodeSectionSplatData(u,c,l,s,t);n.push(h)}}const o=new we(t);for(let a of n)for(let l of a.splats)o.addSplat(l);return o}};le(va,"parseToUncompressedSplat",function(){let e=[];const t=new at,n=we.OFFSET.X,i=we.OFFSET.Y,s=we.OFFSET.Z,o=we.OFFSET.SCALE0,a=we.OFFSET.SCALE1,l=we.OFFSET.SCALE2,c=we.OFFSET.ROTATION0,u=we.OFFSET.ROTATION1,h=we.OFFSET.ROTATION2,f=we.OFFSET.ROTATION3,d=we.OFFSET.FDC0,p=we.OFFSET.FDC1,m=we.OFFSET.FDC2,g=we.OFFSET.OPACITY,_=[];for(let y=0;y<45;y++)_[y]=we.OFFSET.FRC0+y;return function(y,v,x,T,E=0,S=0){S=Math.min(S,x.sphericalHarmonicsDegree),va.readSplat(y,x,v,E,e);const C=we.createSplat(S);if(e[$m]!==void 0?(C[o]=T[Ll][e[$m]],C[a]=T[Ll][e[N1]],C[l]=T[Ll][e[k1]]):(C[o]=.01,C[a]=.01,C[l]=.01),e[_f]!==void 0?(C[d]=T[Fl][e[_f]],C[p]=T[Fl][e[X_]],C[m]=T[Fl][e[q_]]):e[eg]!==void 0?(C[d]=e[eg]*255,C[p]=e[Y1]*255,C[m]=e[Q1]*255):(C[d]=0,C[p]=0,C[m]=0),e[Jm]!==void 0&&(C[g]=T[Zm][e[Jm]]),C[d]=sn(Math.floor(C[d]),0,255),C[p]=sn(Math.floor(C[p]),0,255),C[m]=sn(Math.floor(C[m]),0,255),C[g]=sn(Math.floor(C[g]),0,255),S>=1&&x.sphericalHarmonicsDegree>=1){for(let P=0;P<9;P++){const L=T[B1+P%3];C[_[P]]=L[e[x.sphericalHarmonicsDegree1Fields[P]]]}if(S>=2&&x.sphericalHarmonicsDegree>=2)for(let P=0;P<15;P++){const L=T[U1+P%5];C[_[9+P]]=L[e[x.sphericalHarmonicsDegree2Fields[P]]]}}const A=T[O1][e[z1]],M=T[Yu][e[H1]],w=T[Yu][e[V1]],F=T[Yu][e[G1]];return t.set(A,M,w,F),t.normalize(),C[c]=t.x,C[u]=t.y,C[h]=t.z,C[f]=t.w,C[n]=Bl(e[W1]),C[i]=Bl(e[X1]),C[s]=Bl(e[q1]),C}}());let vf=va;class K1{static parseToUncompressedSplatArray(e,t=0){const n=rn.determineHeaderFormatFromPlyBuffer(e);if(n===Ir.PlayCanvasCompressed)return cs.parseToUncompressedSplatArray(e);if(n===Ir.INRIAV1)return new _c().parseToUncompressedSplatArray(e,t);if(n===Ir.INRIAV2)return new vf().parseToUncompressedSplatArray(e,t)}}class bd{constructor(e,t,n,i){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=i}partitionUncompressedSplatArray(e){let t,n,i;if(this.partitionGenerator){const o=this.partitionGenerator(e);t=o.groupingParameters,n=o.sectionCount,i=o.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,i=this.sectionFilters;const s=[];for(let o=0;o<n;o++){const a=new we(e.sphericalHarmonicsDegree),l=i[o];for(let c=0;c<e.splatCount;c++)l(c)&&a.addSplat(e.splats[c]);s.push(a)}return{splatArrays:s,parameters:t}}static getStandardPartitioner(e=0,t=new I,n=Le.BucketBlockSize,i=Le.BucketSize){const s=o=>{const a=we.OFFSET.X,l=we.OFFSET.Y,c=we.OFFSET.Z;e<=0&&(e=o.splatCount);const u=new I,h=.5,f=_=>{_.x=Math.floor(_.x/h)*h,_.y=Math.floor(_.y/h)*h,_.z=Math.floor(_.z/h)*h};o.splats.forEach(_=>{u.set(_[a],_[l],_[c]).sub(t),f(u),_.centerDist=u.lengthSq()}),o.splats.sort((_,y)=>{let v=_.centerDist,x=y.centerDist;return v>x?1:-1});const d=[],p=[];e=Math.min(o.splatCount,e);const m=Math.ceil(o.splatCount/e);let g=0;for(let _=0;_<m;_++){let y=g;d.push(v=>v>=y&&v<y+e),p.push({blocksSize:n,bucketSize:i}),g+=e}return{sectionCount:d.length,sectionFilters:d,groupingParameters:p}};return new bd(void 0,void 0,void 0,s)}}class Gc{constructor(e,t,n,i,s,o,a){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=i,this.sceneCenter=s?new I().copy(s):void 0,this.blockSize=o,this.bucketSize=a}generateFromUncompressedSplatArray(e){const t=this.splatPartitioner.partitionUncompressedSplatArray(e);return Le.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,i=new I,s=Le.BucketBlockSize,o=Le.BucketSize){const a=bd.getStandardPartitioner(n,i,s,o);return new Gc(a,e,t,n,i,s,o)}}const Wt={Downloading:0,Processing:1,Done:2};class wd extends Error{constructor(e){super(e)}}const Ft={DirectToSplatBuffer:0,DirectToSplatArray:1,DownloadBeforeProcessing:2};function tg(r,e){let t=0;for(let i of r)t+=i.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let i of r)new Uint8Array(e,n,i.sizeBytes).set(i.data),n+=i.sizeBytes;return e}function ng(r,e,t,n,i,s,o,a){return e?Gc.getStandardGenerator(t,n,i,s,o,a).generateFromUncompressedSplatArray(r):Le.generateFromUncompressedSplatArrays([r],t,0,new I)}class Rd{static loadFromURL(e,t,n,i,s,o,a=!0,l=0,c,u,h,f){let d=n?Ft.DirectToSplatBuffer:Ft.DirectToSplatArray;a&&(d=Ft.DirectToSplatArray);const p=et.ProgressiveLoadSectionSize,m=Le.HeaderSizeBytes+Le.SectionHeaderSizeBytes,g=1;let _,y,v,x,T=0,E=0,S=!1,C=!1,A=!1;const M=_d();let w=0,F=0,P=0,L="",B=null,O=[],H;const k=new TextDecoder,j=new _c,ne=(oe,fe,xe)=>{const W=oe>=100;if(xe&&(O.push({data:xe,sizeBytes:xe.byteLength,startBytes:P,endBytes:P+xe.byteLength}),P+=xe.byteLength),d===Ft.DownloadBeforeProcessing)W&&M.resolve(O);else{if(S){if(A&&!C){const K=B.headerSizeBytes+B.chunkElement.storageSizeBytes;x=tg(O,x),x.byteLength>=K&&(cs.readElementData(B.chunkElement,x,B.headerSizeBytes),w=K,F=K,C=!0)}}else if(L+=k.decode(xe),rn.checkTextForEndHeader(L)){const K=rn.determineHeaderFormatFromHeaderText(L);if(K===Ir.INRIAV1)B=j.decodeHeaderText(L),T=B.splatCount,C=!0,A=!1;else if(K===Ir.PlayCanvasCompressed)B=cs.decodeHeaderText(L),T=B.vertexElement.count,A=!0;else{if(n)throw new wd("PlyLoader.loadFromURL() -> Selected Ply format cannot be directly loaded.");d=Ft.DownloadBeforeProcessing;return}l=Math.min(l,B.sphericalHarmonicsDegree);const se=Le.CompressionLevels[0].SphericalHarmonicsDegrees[l],te=m+se.BytesPerSplat*T;d===Ft.DirectToSplatBuffer?(y=new ArrayBuffer(te),Le.writeHeaderToBuffer({versionMajor:Le.CurrentMajorVersion,versionMinor:Le.CurrentMinorVersion,maxSectionCount:g,sectionCount:g,maxSplatCount:T,splatCount:E,compressionLevel:0,sceneCenter:new I},y)):H=new we(l),w=B.headerSizeBytes,F=B.headerSizeBytes,S=!0}if(S&&C){if(O.length>0&&(_=tg(O,_),P-w>p||W)){const se=P-F,te=Math.floor(se/B.bytesPerSplat),ye=te*B.bytesPerSplat,Ae=se-ye,be=E+te,Ve=F-O[0].startBytes,Ue=new DataView(_,Ve,ye),Se=Le.CompressionLevels[0].SphericalHarmonicsDegrees[l],N=E*Se.BytesPerSplat+m;if(d===Ft.DirectToSplatBuffer?A?cs.parseToUncompressedSplatBufferSection(B.chunkElement,B.vertexElement,0,te-1,E,Ue,0,y,N):j.parseToUncompressedSplatBufferSection(B,0,te-1,Ue,0,y,N,l):A?cs.parseToUncompressedSplatArraySection(B.chunkElement,B.vertexElement,0,te-1,E,Ue,0,H):j.parseToUncompressedSplatArraySection(B,0,te-1,Ue,0,H,l),E=be,d===Ft.DirectToSplatBuffer&&(v||(Le.writeSectionHeaderToBuffer({maxSplatCount:T,splatCount:E,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:l},0,y,Le.HeaderSizeBytes),v=new Le(y,!1)),v.updateLoadedCounts(1,E),i&&i(v,W)),w+=p,F+=ye,Ae===0)O=[];else{let Xe=[],Oe=0;for(let Ne=O.length-1;Ne>=0;Ne--){const Te=O[Ne];if(Oe+=Te.sizeBytes,Xe.unshift(Te),Oe>=Ae)break}O=Xe}}W&&(d===Ft.DirectToSplatBuffer?M.resolve(v):M.resolve(H))}}t&&t(oe,fe,Wt.Downloading)};return t&&t(0,"0%",Wt.Downloading),gd(e,ne,!1).then(()=>(t&&t(0,"0%",Wt.Processing),M.promise.then(oe=>{if(t&&t(100,"100%",Wt.Done),d===Ft.DownloadBeforeProcessing){const fe=O.map(xe=>xe.data);return new Blob(fe).arrayBuffer().then(xe=>Rd.loadFromFileData(xe,s,o,a,l,c,u,h,f))}else return d===Ft.DirectToSplatBuffer?oe:yi(()=>ng(oe,a,s,o,c,u,h,f))})))}static loadFromFileData(e,t,n,i,s=0,o,a,l,c){return yi(()=>K1.parseToUncompressedSplatArray(e,s)).then(u=>ng(u,i,t,n,o,a,l,c))}}const pt=class pt{static parseToUncompressedSplatBufferSection(e,t,n,i,s,o){const a=Le.CompressionLevels[0].BytesPerCenter,l=Le.CompressionLevels[0].BytesPerScale,c=Le.CompressionLevels[0].BytesPerRotation,u=Le.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let h=e;h<=t;h++){const f=h*pt.RowSizeBytes+i,d=new Float32Array(n,f,3),p=new Float32Array(n,f+pt.CenterSizeBytes,3),m=new Uint8Array(n,f+pt.CenterSizeBytes+pt.ScaleSizeBytes,4),g=new Uint8Array(n,f+pt.CenterSizeBytes+pt.ScaleSizeBytes+pt.RotationSizeBytes,4),_=new at((g[1]-128)/128,(g[2]-128)/128,(g[3]-128)/128,(g[0]-128)/128);_.normalize();const y=h*u+o,v=new Float32Array(s,y,3),x=new Float32Array(s,y+a,3),T=new Float32Array(s,y+a+l,4),E=new Uint8Array(s,y+a+l+c,4);v[0]=d[0],v[1]=d[1],v[2]=d[2],x[0]=p[0],x[1]=p[1],x[2]=p[2],T[0]=_.w,T[1]=_.x,T[2]=_.y,T[3]=_.z,E[0]=m[0],E[1]=m[1],E[2]=m[2],E[3]=m[3]}}static parseToUncompressedSplatArraySection(e,t,n,i,s){for(let o=e;o<=t;o++){const a=o*pt.RowSizeBytes+i,l=new Float32Array(n,a,3),c=new Float32Array(n,a+pt.CenterSizeBytes,3),u=new Uint8Array(n,a+pt.CenterSizeBytes+pt.ScaleSizeBytes,4),h=new Uint8Array(n,a+pt.CenterSizeBytes+pt.ScaleSizeBytes+pt.RotationSizeBytes,4),f=new at((h[1]-128)/128,(h[2]-128)/128,(h[3]-128)/128,(h[0]-128)/128);f.normalize(),s.addSplatFromComonents(l[0],l[1],l[2],c[0],c[1],c[2],f.w,f.x,f.y,f.z,u[0],u[1],u[2],u[3])}}static parseStandardSplatToUncompressedSplatArray(e){const t=e.byteLength/pt.RowSizeBytes,n=new we;for(let i=0;i<t;i++){const s=i*pt.RowSizeBytes,o=new Float32Array(e,s,3),a=new Float32Array(e,s+pt.CenterSizeBytes,3),l=new Uint8Array(e,s+pt.CenterSizeBytes+pt.ScaleSizeBytes,4),c=new Uint8Array(e,s+pt.CenterSizeBytes+pt.ScaleSizeBytes+pt.ColorSizeBytes,4),u=new at((c[1]-128)/128,(c[2]-128)/128,(c[3]-128)/128,(c[0]-128)/128);u.normalize(),n.addSplatFromComonents(o[0],o[1],o[2],a[0],a[1],a[2],u.w,u.x,u.y,u.z,l[0],l[1],l[2],l[3])}return n}};le(pt,"RowSizeBytes",32),le(pt,"CenterSizeBytes",12),le(pt,"ScaleSizeBytes",12),le(pt,"RotationSizeBytes",4),le(pt,"ColorSizeBytes",4);let ts=pt;function ig(r,e,t,n,i,s,o,a){return e?Gc.getStandardGenerator(t,n,i,s,o,a).generateFromUncompressedSplatArray(r):Le.generateFromUncompressedSplatArrays([r],t,0,new I)}class Id{static loadFromURL(e,t,n,i,s,o,a=!0,l,c,u,h){let f=n?Ft.DirectToSplatBuffer:Ft.DirectToSplatArray;a&&(f=Ft.DirectToSplatArray);const d=Le.HeaderSizeBytes+Le.SectionHeaderSizeBytes,p=et.ProgressiveLoadSectionSize,m=1;let g,_,y,v=0,x=0,T;const E=_d();let S=0,C=0,A=[];const M=(w,F,P,L)=>{const B=w>=100;if(P&&A.push(P),f===Ft.DownloadBeforeProcessing){B&&E.resolve(A);return}if(!L){if(n)throw new wd("Cannon directly load .splat because no file size info is available.");f=Ft.DownloadBeforeProcessing;return}if(!g){v=L/ts.RowSizeBytes,g=new ArrayBuffer(L);const O=Le.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,H=d+O*v;f===Ft.DirectToSplatBuffer?(_=new ArrayBuffer(H),Le.writeHeaderToBuffer({versionMajor:Le.CurrentMajorVersion,versionMinor:Le.CurrentMinorVersion,maxSectionCount:m,sectionCount:m,maxSplatCount:v,splatCount:x,compressionLevel:0,sceneCenter:new I},_)):T=new we(0)}if(P){new Uint8Array(g,C,P.byteLength).set(new Uint8Array(P)),C+=P.byteLength;const O=C-S;if(O>p||B){const k=(B?O:p)/ts.RowSizeBytes,j=x+k;f===Ft.DirectToSplatBuffer?ts.parseToUncompressedSplatBufferSection(x,j-1,g,0,_,d):ts.parseToUncompressedSplatArraySection(x,j-1,g,0,T),x=j,f===Ft.DirectToSplatBuffer&&(y||(Le.writeSectionHeaderToBuffer({maxSplatCount:v,splatCount:x,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,_,Le.HeaderSizeBytes),y=new Le(_,!1)),y.updateLoadedCounts(1,x),i&&i(y,B)),S+=p}}B&&(f===Ft.DirectToSplatBuffer?E.resolve(y):E.resolve(T)),t&&t(w,F,Wt.Downloading)};return t&&t(0,"0%",Wt.Downloading),gd(e,M,!1).then(()=>(t&&t(0,"0%",Wt.Processing),E.promise.then(w=>(t&&t(100,"100%",Wt.Done),f===Ft.DownloadBeforeProcessing?new Blob(A).arrayBuffer().then(F=>Id.loadFromFileData(F,s,o,a,l,c,u,h)):f===Ft.DirectToSplatBuffer?w:yi(()=>ig(w,a,s,o,l,c,u,h))))))}static loadFromFileData(e,t,n,i,s,o,a,l){return yi(()=>{const c=ts.parseStandardSplatToUncompressedSplatArray(e);return ig(c,i,t,n,s,o,a,l)})}}const so=class so{static checkVersion(e){const t=Le.CurrentMajorVersion,n=Le.CurrentMinorVersion,i=Le.parseHeader(e);if(i.versionMajor===t&&i.versionMinor>=n||i.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${i.versionMajor}.${i.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,i){let s,o,a,l,c=!1,u=!1,h,f=[],d=!1,p=!1,m=0,g=0,_=0,y=!1,v=!1,x=!1,T=[];const E=_d(),S=()=>{!c&&!u&&m>=Le.HeaderSizeBytes&&(u=!0,new Blob(T).arrayBuffer().then(L=>{a=new ArrayBuffer(Le.HeaderSizeBytes),new Uint8Array(a).set(new Uint8Array(L,0,Le.HeaderSizeBytes)),so.checkVersion(a),u=!1,c=!0,l=Le.parseHeader(a),window.setTimeout(()=>{M()},1)}))};let C=0;const A=()=>{C===0&&(C++,window.setTimeout(()=>{C--,w()},1))},M=()=>{const P=()=>{p=!0,new Blob(T).arrayBuffer().then(B=>{p=!1,d=!0,h=new ArrayBuffer(l.maxSectionCount*Le.SectionHeaderSizeBytes),new Uint8Array(h).set(new Uint8Array(B,Le.HeaderSizeBytes,l.maxSectionCount*Le.SectionHeaderSizeBytes)),f=Le.parseSectionHeaders(l,h,0,!1);let O=0;for(let k=0;k<l.maxSectionCount;k++)O+=f[k].storageSizeBytes;const H=Le.HeaderSizeBytes+l.maxSectionCount*Le.SectionHeaderSizeBytes+O;if(!s){s=new ArrayBuffer(H);let k=0;for(let j=0;j<T.length;j++){const ne=T[j];new Uint8Array(s,k,ne.byteLength).set(new Uint8Array(ne)),k+=ne.byteLength}}_=Le.HeaderSizeBytes+Le.SectionHeaderSizeBytes*l.maxSectionCount;for(let k=0;k<=f.length&&k<l.maxSectionCount;k++)_+=f[k].storageSizeBytes;A()})};!p&&!d&&c&&m>=Le.HeaderSizeBytes+Le.SectionHeaderSizeBytes*l.maxSectionCount&&P()},w=()=>{if(x)return;x=!0;const P=()=>{if(x=!1,d){if(v)return;if(y=m>=_,m-g>et.ProgressiveLoadSectionSize||y){g+=et.ProgressiveLoadSectionSize,v=g>=_,o||(o=new Le(s,!1));const B=Le.HeaderSizeBytes+Le.SectionHeaderSizeBytes*l.maxSectionCount;let O=0,H=0,k=0;for(let oe=0;oe<l.maxSectionCount;oe++){const fe=f[oe],xe=O+fe.partiallyFilledBucketCount*4+fe.bucketStorageSizeBytes*fe.bucketCount,W=B+xe;if(g>=W){H++;const K=g-W,ye=Le.CompressionLevels[l.compressionLevel].SphericalHarmonicsDegrees[fe.sphericalHarmonicsDegree].BytesPerSplat;let Ae=Math.floor(K/ye);Ae=Math.min(Ae,fe.maxSplatCount),k+=Ae,o.updateLoadedCounts(H,k),o.updateSectionLoadedCounts(oe,Ae)}else break;O+=fe.storageSizeBytes}i(o,v);const j=g/_*100,ne=j.toFixed(2)+"%";t&&t(j,ne,Wt.Downloading),v?E.resolve(o):w()}}};window.setTimeout(P,et.ProgressiveLoadSectionDelayDuration)};return gd(e,(P,L,B)=>{B&&(T.push(B),s&&new Uint8Array(s,m,B.byteLength).set(new Uint8Array(B)),m+=B.byteLength),n?(S(),M(),w()):t&&t(P,L,Wt.Downloading)},!n).then(P=>(t&&t(0,"0%",Wt.Processing),(n?E.promise:so.loadFromFileData(P)).then(B=>(t&&t(100,"100%",Wt.Done),B))))}static loadFromFileData(e){return yi(()=>(so.checkVersion(e),new Le(e)))}};le(so,"downloadFile",function(){let e;return function(t,n){const i=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(i),e.click()}}());let xf=so;const ji={Splat:0,KSplat:1,Ply:2},rg=r=>r.endsWith(".ply")?ji.Ply:r.endsWith(".splat")?ji.Splat:r.endsWith(".ksplat")?ji.KSplat:null,sg={type:"change"},Qu={type:"start"},og={type:"end"},Ul=new ja,ag=new _r,j1=Math.cos(70*jt.DEG2RAD);class Ol extends Ss{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:Es.ROTATE,MIDDLE:Es.DOLLY,RIGHT:Es.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",ee),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(sg),n.update(),s=i.NONE},this.clearDampedRotation=function(){l.theta=0,l.phi=0},this.clearDampedPan=function(){u.set(0,0,0)},this.update=function(){const U=new I,ie=new at().setFromUnitVectors(e.up,new I(0,1,0)),Ee=ie.clone().invert(),he=new I,He=new at,Ge=new I,nt=2*Math.PI;return function(){ie.setFromUnitVectors(e.up,new I(0,1,0)),Ee.copy(ie).invert();const pe=n.object.position;U.copy(pe).sub(n.target),U.applyQuaternion(ie),a.setFromVector3(U),n.autoRotate&&s===i.NONE&&w(A()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Q=n.minAzimuthAngle,$=n.maxAzimuthAngle;isFinite(Q)&&isFinite($)&&(Q<-Math.PI?Q+=nt:Q>Math.PI&&(Q-=nt),$<-Math.PI?$+=nt:$>Math.PI&&($-=nt),Q<=$?a.theta=Math.max(Q,Math.min($,a.theta)):a.theta=a.theta>(Q+$)/2?Math.max(Q,a.theta):Math.min($,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&E||n.object.isOrthographicCamera?a.radius=j(a.radius):a.radius=j(a.radius*c),U.setFromSpherical(a),U.applyQuaternion(Ee),pe.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ge=!1;if(n.zoomToCursor&&E){let de=null;if(n.object.isPerspectiveCamera){const We=U.length();de=j(We*c);const _t=We-de;n.object.position.addScaledVector(x,_t),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const We=new I(T.x,T.y,0);We.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ge=!0;const _t=new I(T.x,T.y,0);_t.unproject(n.object),n.object.position.sub(_t).add(We),n.object.updateMatrixWorld(),de=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;de!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(de).add(n.object.position):(Ul.origin.copy(n.object.position),Ul.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ul.direction))<j1?e.lookAt(n.target):(ag.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ul.intersectPlane(ag,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ge=!0);return c=1,E=!1,ge||he.distanceToSquared(n.object.position)>o||8*(1-He.dot(n.object.quaternion))>o||Ge.distanceToSquared(n.target)>0?(n.dispatchEvent(sg),he.copy(n.object.position),He.copy(n.object.quaternion),Ge.copy(n.target),ge=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Re),n.domElement.removeEventListener("pointerdown",Te),n.domElement.removeEventListener("pointercancel",Ie),n.domElement.removeEventListener("wheel",X),n.domElement.removeEventListener("pointermove",Je),n.domElement.removeEventListener("pointerup",Ie),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ee),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new vm,l=new vm;let c=1;const u=new I,h=new ve,f=new ve,d=new ve,p=new ve,m=new ve,g=new ve,_=new ve,y=new ve,v=new ve,x=new I,T=new ve;let E=!1;const S=[],C={};function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function w(U){l.theta-=U}function F(U){l.phi-=U}const P=function(){const U=new I;return function(Ee,he){U.setFromMatrixColumn(he,0),U.multiplyScalar(-Ee),u.add(U)}}(),L=function(){const U=new I;return function(Ee,he){n.screenSpacePanning===!0?U.setFromMatrixColumn(he,1):(U.setFromMatrixColumn(he,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(Ee),u.add(U)}}(),B=function(){const U=new I;return function(Ee,he){const He=n.domElement;if(n.object.isPerspectiveCamera){const Ge=n.object.position;U.copy(Ge).sub(n.target);let nt=U.length();nt*=Math.tan(n.object.fov/2*Math.PI/180),P(2*Ee*nt/He.clientHeight,n.object.matrix),L(2*he*nt/He.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(Ee*(n.object.right-n.object.left)/n.object.zoom/He.clientWidth,n.object.matrix),L(he*(n.object.top-n.object.bottom)/n.object.zoom/He.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(U){if(!n.zoomToCursor)return;E=!0;const ie=n.domElement.getBoundingClientRect(),Ee=U.clientX-ie.left,he=U.clientY-ie.top,He=ie.width,Ge=ie.height;T.x=Ee/He*2-1,T.y=-(he/Ge)*2+1,x.set(T.x,T.y,1).unproject(e).sub(e.position).normalize()}function j(U){return Math.max(n.minDistance,Math.min(n.maxDistance,U))}function ne(U){h.set(U.clientX,U.clientY)}function oe(U){k(U),_.set(U.clientX,U.clientY)}function fe(U){p.set(U.clientX,U.clientY)}function xe(U){f.set(U.clientX,U.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ie=n.domElement;w(2*Math.PI*d.x/ie.clientHeight),F(2*Math.PI*d.y/ie.clientHeight),h.copy(f),n.update()}function W(U){y.set(U.clientX,U.clientY),v.subVectors(y,_),v.y>0?O(M()):v.y<0&&H(M()),_.copy(y),n.update()}function K(U){m.set(U.clientX,U.clientY),g.subVectors(m,p).multiplyScalar(n.panSpeed),B(g.x,g.y),p.copy(m),n.update()}function se(U){k(U),U.deltaY<0?H(M()):U.deltaY>0&&O(M()),n.update()}function te(U){let ie=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),ie=!0;break}ie&&(U.preventDefault(),n.update())}function ye(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const U=.5*(S[0].pageX+S[1].pageX),ie=.5*(S[0].pageY+S[1].pageY);h.set(U,ie)}}function Ae(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const U=.5*(S[0].pageX+S[1].pageX),ie=.5*(S[0].pageY+S[1].pageY);p.set(U,ie)}}function be(){const U=S[0].pageX-S[1].pageX,ie=S[0].pageY-S[1].pageY,Ee=Math.sqrt(U*U+ie*ie);_.set(0,Ee)}function Ve(){n.enableZoom&&be(),n.enablePan&&Ae()}function Ue(){n.enableZoom&&be(),n.enableRotate&&ye()}function Se(U){if(S.length==1)f.set(U.pageX,U.pageY);else{const Ee=ae(U),he=.5*(U.pageX+Ee.x),He=.5*(U.pageY+Ee.y);f.set(he,He)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ie=n.domElement;w(2*Math.PI*d.x/ie.clientHeight),F(2*Math.PI*d.y/ie.clientHeight),h.copy(f)}function N(U){if(S.length===1)m.set(U.pageX,U.pageY);else{const ie=ae(U),Ee=.5*(U.pageX+ie.x),he=.5*(U.pageY+ie.y);m.set(Ee,he)}g.subVectors(m,p).multiplyScalar(n.panSpeed),B(g.x,g.y),p.copy(m)}function Xe(U){const ie=ae(U),Ee=U.pageX-ie.x,he=U.pageY-ie.y,He=Math.sqrt(Ee*Ee+he*he);y.set(0,He),v.set(0,Math.pow(y.y/_.y,n.zoomSpeed)),O(v.y),_.copy(y)}function Oe(U){n.enableZoom&&Xe(U),n.enablePan&&N(U)}function Ne(U){n.enableZoom&&Xe(U),n.enableRotate&&Se(U)}function Te(U){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",Je),n.domElement.addEventListener("pointerup",Ie)),_e(U),U.pointerType==="touch"?re(U):D(U))}function Je(U){n.enabled!==!1&&(U.pointerType==="touch"?J(U):b(U))}function Ie(U){Ce(U),S.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",Je),n.domElement.removeEventListener("pointerup",Ie)),n.dispatchEvent(og),s=i.NONE}function D(U){let ie;switch(U.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Es.DOLLY:if(n.enableZoom===!1)return;oe(U),s=i.DOLLY;break;case Es.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;fe(U),s=i.PAN}else{if(n.enableRotate===!1)return;ne(U),s=i.ROTATE}break;case Es.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;ne(U),s=i.ROTATE}else{if(n.enablePan===!1)return;fe(U),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Qu)}function b(U){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;xe(U);break;case i.DOLLY:if(n.enableZoom===!1)return;W(U);break;case i.PAN:if(n.enablePan===!1)return;K(U);break}}function X(U){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(U.preventDefault(),n.dispatchEvent(Qu),se(U),n.dispatchEvent(og))}function ee(U){n.enabled===!1||n.enablePan===!1||te(U)}function re(U){switch(tt(U),S.length){case 1:switch(n.touches.ONE){case Cs.ROTATE:if(n.enableRotate===!1)return;ye(),s=i.TOUCH_ROTATE;break;case Cs.PAN:if(n.enablePan===!1)return;Ae(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Cs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ve(),s=i.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ue(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Qu)}function J(U){switch(tt(U),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Se(U),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;N(U),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Oe(U),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ne(U),n.update();break;default:s=i.NONE}}function Re(U){n.enabled!==!1&&U.preventDefault()}function _e(U){S.push(U)}function Ce(U){delete C[U.pointerId];for(let ie=0;ie<S.length;ie++)if(S[ie].pointerId==U.pointerId){S.splice(ie,1);return}}function tt(U){let ie=C[U.pointerId];ie===void 0&&(ie=new ve,C[U.pointerId]=ie),ie.set(U.pageX,U.pageY)}function ae(U){const ie=U.pointerId===S[0].pointerId?S[1]:S[0];return C[ie.pointerId]}n.domElement.addEventListener("contextmenu",Re),n.domElement.addEventListener("pointerdown",Te),n.domElement.addEventListener("pointercancel",Ie),n.domElement.addEventListener("wheel",X,{passive:!1}),this.update()}}const Z1=(r,e,t,n,i)=>{const s=performance.now();let o=r.style.display==="none"?0:parseFloat(r.style.opacity);isNaN(o)&&(o=1);const a=window.setInterval(()=>{const c=performance.now()-s;let u=Math.min(c/n,1);u>.999&&(u=1);let h;e?(h=(1-u)*o,h<1e-4&&(h=0)):h=(1-o)*u+o,h>0?(r.style.display=t,r.style.opacity=h):r.style.display="none",u>=1&&(i&&i(),window.clearInterval(a))},16);return a},$1=500,Sc=class Sc{constructor(e,t){this.taskIDGen=0,this.elementID=Sc.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const n=document.createElement("style");n.innerHTML=`

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

        `,this.spinnerContainerOuter.appendChild(n),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let n of this.tasks){if(n.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let n of this.tasks)if(n.id===e){n.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){const n=(i,s,o,a,l)=>{o?i.style.display=s?a:"none":this.fadeTransitions[l]=Z1(i,!s,a,$1,()=>{this.fadeTransitions[l]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}};le(Sc,"elementIDGen",0);let yf=Sc;class J1{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const t=document.createElement("style");t.innerHTML=`

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

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class eR{constructor(e){le(this,"update",function(e,t,n,i,s,o,a,l,c,u,h,f,d,p){const m=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==m&&(this.infoCells.cameraPosition.innerHTML=m),n){const _=n,y=`${_.x.toFixed(5)}, ${_.y.toFixed(5)}, ${_.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==y&&(this.infoCells.cameraLookAt.innerHTML=y)}const g=`${i.x.toFixed(5)}, ${i.y.toFixed(5)}, ${i.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==g&&(this.infoCells.cameraUp.innerHTML=g),this.infoCells.orthographicCamera.innerHTML=s?"Orthographic":"Perspective",o){const _=o,y=`${_.x.toFixed(5)}, ${_.y.toFixed(5)}, ${_.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=y}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=a,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${c} splats out of ${l} (${u.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${h.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${f.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${d.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${p}`});this.container=e||document.body,this.infoCells={};const t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const n=document.createElement("style");n.innerHTML=`

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

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const i=document.createElement("div");i.style.display="table";for(let s of t){const o=document.createElement("div");o.style.display="table-row",o.className="info-panel-row";const a=document.createElement("div");a.style.display="table-cell",a.innerHTML=`${s[0]}: `,a.classList.add("info-panel-cell","label-cell");const l=document.createElement("div");l.style.display="table-cell",l.style.width="10px",l.innerHTML=" ",l.className="info-panel-cell";const c=document.createElement("div");c.style.display="table-cell",c.innerHTML="",c.className="info-panel-cell",this.infoCells[s[1]]=c,o.appendChild(a),o.appendChild(l),o.appendChild(c),i.appendChild(o)}this.infoPanel.appendChild(i),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const lg=new I;class tR extends ft{constructor(e=new I(0,0,1),t=new I(0,0,0),n=1,i=.1,s=16776960,o=n*.2,a=o*.2){super(),this.type="ArrowHelper";const l=new wa(i,i,n,32);l.translate(0,n/2,0);const c=new wa(0,a,o,32);c.translate(0,n,0),this.position.copy(t),this.line=new St(l,new Lr({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new St(c,new Lr({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{lg.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(lg,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class pa{constructor(e){le(this,"updateFocusMarker",function(){const e=new I,t=new ue,n=new I;return function(i,s,o){t.copy(s.matrixWorld).invert(),e.copy(i).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(s.matrixWorld),n.copy(s.position).sub(i);const a=n.length();this.focusMarker.position.copy(i),this.focusMarker.scale.set(a,a,a),this.focusMarker.material.uniforms.realFocusPosition.value.copy(i),this.focusMarker.material.uniforms.viewport.value.copy(o),this.focusMarker.material.uniformsNeedUpdate=!0}}());le(this,"positionAndOrientControlPlane",function(){const e=new at,t=new I(0,1,0);return function(n,i){e.setFromUnitVectors(t,i),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}}());this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new Fr(e,t,{format:xn,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new Gf(e,t),this.splatRenderTarget.depthTexture.format=hs,this.splatRenderTarget.depthTexture.type=ii}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new Kn({vertexShader:`
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
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:qg,blendSrc:Aa,blendSrcAlpha:Aa,blendDst:Ma,blendDstAlpha:Ma});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new St(new bo(2,2),t),this.renderTargetCopyCamera=new Lc(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(js(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new Xf(.5,1.5,32),t=new Lr({color:16777215}),n=new St(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);const i=new St(e,t);i.position.set(0,-1,0);const s=new St(e,t);s.rotation.set(0,0,Math.PI/2),s.position.set(1,0,0);const o=new St(e,t);o.rotation.set(0,0,-Math.PI/2),o.position.set(-1,0,0),this.meshCursor=new ft,this.meshCursor.add(n),this.meshCursor.add(i),this.meshCursor.add(s),this.meshCursor.add(o),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(js(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){const e=new Da(.5,32,32),t=pa.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new St(e,t)}}destroyFocusMarker(){this.focusMarker&&(js(this.focusMarker),this.focusMarker=null)}setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new bo(1,1);e.rotateX(-Math.PI/2);const t=new Lr({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=ti;const n=new St(e,t),i=new I(0,1,0);i.normalize();const s=new I(0,0,0),o=.5,a=.01,l=56576,c=new tR(i,s,o,a,l,.1,.03);this.controlPlane=new ft,this.controlPlane.add(n),this.controlPlane.add(c)}}destroyControlPlane(){this.controlPlane&&(js(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(js(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const t=new Da(1,32,32),n=new ft,i=(s,o)=>{let a=new St(t,pa.buildDebugMaterial(s));a.renderOrder=e,n.add(a),a.position.fromArray(o)};return i(16711680,[-50,0,0]),i(16711680,[50,0,0]),i(65280,[0,0,-50]),i(65280,[0,0,50]),i(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){const t=new zr(3,3,3),n=new ft;let i=12303291;const s=a=>{let l=new St(t,pa.buildDebugMaterial(i));l.renderOrder=e,n.add(l),l.position.fromArray(a)};let o=10;return s([-o,0,-o]),s([-o,0,o]),s([o,0,-o]),s([o,0,o]),n}static buildDebugMaterial(e){const t=`
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
        `,i={color:{type:"v3",value:new ze(e)}},s=new Kn({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!1,depthTest:!0,depthWrite:!0,side:Fi});return s.extensions.fragDepth=!0,s}static buildFocusMarkerMaterial(e){const t=`
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
        `,i={color:{type:"v3",value:new ze(e)},realFocusPosition:{type:"v3",value:new I},viewport:{type:"v2",value:new ve},opacity:{value:0}};return new Kn({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!0,depthTest:!1,depthWrite:!1,side:Fi})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const nR=new I(1,0,0),iR=new I(0,1,0),rR=new I(0,0,1);class Ku{constructor(e=new I,t=new I){le(this,"intersectBox",function(){const e=new I,t=[],n=[],i=[];return function(s,o){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,i[0]=this.direction.x,i[1]=this.direction.y,i[2]=this.direction.z,this.boxContainsPoint(s,this.origin,1e-4))return o&&(o.origin.copy(this.origin),o.normal.set(0,0,0),o.distance=-1),!0;for(let a=0;a<3;a++){if(i[a]==0)continue;const l=a==0?nR:a==1?iR:rR,c=i[a]<0?s.max:s.min;let u=-Math.sign(i[a]);t[0]=a==0?c.x:a==1?c.y:c.z;let h=t[0]-n[a];if(h*u<0){const f=(a+1)%3,d=(a+2)%3;if(t[2]=i[f]/i[a]*h+n[f],t[1]=i[d]/i[a]*h+n[d],e.set(t[a],t[d],t[f]),this.boxContainsPoint(s,e,1e-4))return o&&(o.origin.copy(e),o.normal.copy(l).multiplyScalar(u),o.distance=e.sub(this.origin).length()),!0}}return!1}}());le(this,"intersectSphere",function(){const e=new I;return function(t,n,i){e.copy(t).sub(this.origin);const s=e.dot(this.direction),o=s*s,l=e.dot(e)-o,c=n*n;if(l>c)return!1;const u=Math.sqrt(c-l),h=s-u,f=s+u;if(f<0)return!1;let d=h<0?f:h;return i&&(i.origin.copy(this.origin).addScaledVector(this.direction,d),i.normal.copy(i.origin).sub(t).normalize(),i.distance=d),!0}}());this.origin=new I,this.direction=new I,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}}class Pd{constructor(){this.origin=new I,this.normal=new I,this.distance=0,this.splatIndex=0}set(e,t,n,i){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=i}clone(){const e=new Pd;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const Zi={ThreeD:0,TwoD:1};class sR{constructor(e,t,n=!1){le(this,"setFromCameraAndScreenPosition",function(){const e=new ve;return function(t,n,i){if(e.x=n.x/i.x*2-1,e.y=(i.y-n.y)/i.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}}());le(this,"intersectSplatMesh",function(){const e=new ue,t=new ue,n=new ue,i=new Ku,s=new I;return function(o,a=[]){const l=o.getSplatTree();if(l){for(let c=0;c<l.subTrees.length;c++){const u=l.subTrees[c];t.copy(o.matrixWorld),o.dynamicMode&&(o.getSceneTransform(c,n),t.multiply(n)),e.copy(t).invert(),i.origin.copy(this.ray.origin).applyMatrix4(e),i.direction.copy(this.ray.origin).add(this.ray.direction),i.direction.applyMatrix4(e).sub(i.origin).normalize();const h=[];u.rootNode&&this.castRayAtSplatTreeNode(i,l,u.rootNode,h),h.forEach(f=>{f.origin.applyMatrix4(t),f.normal.applyMatrix4(t).normalize(),f.distance=s.copy(f.origin).sub(this.ray.origin).length()}),a.push(...h)}return a.sort((c,u)=>c.distance>u.distance?1:-1),a}}}());le(this,"castRayAtSplatTreeNode",function(){const e=new $e,t=new I,n=new I,i=new at,s=new Pd,o=1e-7,a=new I(0,0,0),l=new ue,c=new ue,u=new ue,h=new ue,f=new ue,d=new Ku;return function(p,m,g,_=[]){if(p.intersectBox(g.boundingBox)){if(g.data&&g.data.indexes&&g.data.indexes.length>0)for(let y=0;y<g.data.indexes.length;y++){const v=g.data.indexes[y],x=m.splatMesh.getSceneIndexForSplat(v);if(m.splatMesh.getScene(x).visible&&(m.splatMesh.getSplatColor(v,e),m.splatMesh.getSplatCenter(v,t),m.splatMesh.getSplatScaleAndRotation(v,n,i),!(n.x<=o||n.y<=o||m.splatMesh.splatRenderMode===Zi.ThreeD&&n.z<=o)))if(this.raycastAgainstTrueSplatEllipsoid){c.makeScale(n.x,n.y,n.z),u.makeRotationFromQuaternion(i);const E=Math.log10(e.w)*2;if(l.makeScale(E,E,E),f.copy(l).multiply(u).multiply(c),h.copy(f).invert(),d.origin.copy(p.origin).sub(t).applyMatrix4(h),d.direction.copy(p.origin).add(p.direction).sub(t),d.direction.applyMatrix4(h).sub(d.origin).normalize(),d.intersectSphere(a,1,s)){const S=s.clone();S.splatIndex=v,S.origin.applyMatrix4(f).add(t),_.push(S)}}else{let E=n.x+n.y,S=2;if(m.splatMesh.splatRenderMode===Zi.ThreeD&&(E+=n.z,S=3),E=E/S,p.intersectSphere(t,E,s)){const C=s.clone();C.splatIndex=v,_.push(C)}}}if(g.children&&g.children.length>0)for(let y of g.children)this.castRayAtSplatTreeNode(p,m,y,_);return _}}}());this.ray=new Ku(e,t),this.raycastAgainstTrueSplatEllipsoid=n}}class go{static buildVertexShaderBase(e=!1,t=!1,n=0,i=""){let s=`
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
    `;return t&&(s+=`
            uniform float sceneOpacity[${et.MaxScenes}];
            uniform int sceneVisibility[${et.MaxScenes}];
        `),e&&(s+=`
            uniform highp mat4 transforms[${et.MaxScenes}];
        `),s+=`
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
        uniform float sphericalHarmonics8BitCompressionRangeMin[${et.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${et.MaxScenes}];

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
            `,t&&(s+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?s+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = modelViewMatrix * transform;
            `:s+="mat4 transformModelViewMatrix = modelViewMatrix;",s+=`
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
        `,n>=1&&(s+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?s+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:s+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,s+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,n>=2&&(s+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),n===1?s+=`
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
                `:n===2&&(s+=`
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
                `),s+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,n>=2&&(s+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,n===2&&(s+=`
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
                    `),s+=`
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
                `),s+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),s}static getVertexShaderFadeIn(){return`
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
        `}static getUniforms(e=!1,t=!1,n=0,i=1,s=!1){const o={sceneCenter:{type:"v3",value:new I},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new ve},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new ve},basisViewport:{type:"v2",value:new ve},debugColor:{type:"v3",value:new ze},centersColorsTextureSize:{type:"v2",value:new ve(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new ve(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:i},pointCloudModeEnabled:{type:"i",value:s?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new ve(1024,1024)},sceneCount:{type:"i",value:1}};for(let a=0;a<et.MaxScenes;a++)o.sphericalHarmonics8BitCompressionRangeMin.value.push(-et.SphericalHarmonics8BitCompressionRange/2),o.sphericalHarmonics8BitCompressionRangeMax.value.push(et.SphericalHarmonics8BitCompressionRange/2);if(t){const a=[];for(let c=0;c<et.MaxScenes;c++)a.push(1);o.sceneOpacity={type:"f",value:a};const l=[];for(let c=0;c<et.MaxScenes;c++)l.push(1);o.sceneVisibility={type:"i",value:l}}if(e){const a=[];for(let l=0;l<et.MaxScenes;l++)a.push(new ue);o.transforms={type:"mat4",value:a}}return o}}class vc{static build(e=!1,t=!1,n=!1,i=2048,s=1,o=!1,a=0){let c=go.buildVertexShaderBase(e,t,a,`
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
        `);c+=vc.buildVertexShaderProjection(n,t,i);const u=vc.buildFragmentShader(),h=go.getUniforms(e,t,a,s,o);return h.covariancesTextureSize={type:"v2",value:new ve(1024,1024)},h.covariancesTexture={type:"t",value:null},h.covariancesTextureHalfFloat={type:"t",value:null},h.covariancesAreHalfFloat={type:"i",value:0},new Kn({uniforms:h,vertexShader:c,fragmentShader:u,transparent:!0,alphaTest:1,blending:Cr,depthTest:!0,depthWrite:!1,side:ti})}static buildVertexShaderProjection(e,t,n){let i=`

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
        `,i+=go.getVertexShaderFadeIn(),i+="}",i}static buildFragmentShader(){let e=`
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
        `,e}}class xc{static build(e=!1,t=!1,n=1,i=!1,s=0){let a=go.buildVertexShaderBase(e,t,s,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);a+=xc.buildVertexShaderProjection();const l=xc.buildFragmentShader(),c=go.getUniforms(e,t,s,n,i);return c.scaleRotationsTexture={type:"t",value:null},c.scaleRotationsTextureSize={type:"v2",value:new ve(1024,1024)},new Kn({uniforms:c,vertexShader:a,fragmentShader:l,transparent:!0,alphaTest:1,blending:Cr,depthTest:!0,depthWrite:!1,side:ti})}static buildVertexShaderProjection(){let e=`

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
            `,e+=go.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
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
        `}}class oR{static build(e){const t=new yn;t.setIndex([0,1,2,0,2,3]);const n=new Float32Array(4*3),i=new ai(n,3);t.setAttribute("position",i),i.setXYZ(0,-1,-1,0),i.setXYZ(1,-1,1,0),i.setXYZ(2,1,1,0),i.setXYZ(3,1,-1,0),i.needsUpdate=!0;const s=new TC().copy(t),o=new Uint32Array(e),a=new BE(o,1,!1);return a.setUsage(ty),s.setAttribute("splatIndex",a),s.instanceCount=0,s}}class aR extends ft{constructor(e,t=new I,n=new at,i=new I(1,1,1),s=1,o=1,a=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(i),this.transform=new ue,this.minimumAlpha=s,this.opacity=o,this.visible=a}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}const Ac=class Ac{constructor(e,t,n,i){this.min=new I().copy(e),this.max=new I().copy(t),this.boundingBox=new xi(this.min,this.max),this.center=new I().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=i||Ac.idGen++}};le(Ac,"idGen",0);let Sf=Ac;class ma{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new I,this.sceneMin=new I,this.sceneMax=new I,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const t=new I().fromArray(e.min),n=new I().fromArray(e.max),i=new Sf(t,n,e.depth,e.id);if(e.data.indexes){i.data={indexes:[]};for(let s of e.data.indexes)i.data.indexes.push(s)}if(e.children)for(let s of e.children)i.children.push(ma.convertWorkerSubTreeNode(s));return i}static convertWorkerSubTree(e,t){const n=new ma(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new I().fromArray(e.sceneMin),n.sceneMax=new I().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=ma.convertWorkerSubTreeNode(e.rootNode);const i=(s,o)=>{s.children.length===0&&o(s);for(let a of s.children)i(a,o)};return n.nodesWithIndexes=[],i(n.rootNode,s=>{s.data&&s.data.indexes&&s.data.indexes.length>0&&n.nodesWithIndexes.push(s)}),n}}function lR(r){let e=0;class t{constructor(l,c){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]]}containsPoint(l){return l[0]>=this.min[0]&&l[0]<=this.max[0]&&l[1]>=this.min[1]&&l[1]<=this.max[1]&&l[2]>=this.min[2]&&l[2]<=this.max[2]}}class n{constructor(l,c){this.maxDepth=l,this.maxCentersPerNode=c,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class i{constructor(l,c,u,h){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]],this.center=[(c[0]-l[0])*.5+l[0],(c[1]-l[1])*.5+l[1],(c[2]-l[2])*.5+l[2]],this.depth=u,this.children=[],this.data=null,this.id=h||e++}}processSplatTreeNode=function(a,l,c,u){const h=l.data.indexes.length;if(h<a.maxCentersPerNode||l.depth>a.maxDepth){const y=[];for(let v=0;v<l.data.indexes.length;v++)a.addedIndexes[l.data.indexes[v]]||(y.push(l.data.indexes[v]),a.addedIndexes[l.data.indexes[v]]=!0);l.data.indexes=y,l.data.indexes.sort((v,x)=>v>x?1:-1),a.nodesWithIndexes.push(l);return}const f=[l.max[0]-l.min[0],l.max[1]-l.min[1],l.max[2]-l.min[2]],d=[f[0]*.5,f[1]*.5,f[2]*.5],p=[l.min[0]+d[0],l.min[1]+d[1],l.min[2]+d[2]],m=[new t([p[0]-d[0],p[1],p[2]-d[2]],[p[0],p[1]+d[1],p[2]]),new t([p[0],p[1],p[2]-d[2]],[p[0]+d[0],p[1]+d[1],p[2]]),new t([p[0],p[1],p[2]],[p[0]+d[0],p[1]+d[1],p[2]+d[2]]),new t([p[0]-d[0],p[1],p[2]],[p[0],p[1]+d[1],p[2]+d[2]]),new t([p[0]-d[0],p[1]-d[1],p[2]-d[2]],[p[0],p[1],p[2]]),new t([p[0],p[1]-d[1],p[2]-d[2]],[p[0]+d[0],p[1],p[2]]),new t([p[0],p[1]-d[1],p[2]],[p[0]+d[0],p[1],p[2]+d[2]]),new t([p[0]-d[0],p[1]-d[1],p[2]],[p[0],p[1],p[2]+d[2]])],g=[];for(let y=0;y<m.length;y++)g[y]=[];const _=[0,0,0];for(let y=0;y<h;y++){const v=l.data.indexes[y],x=c[v];_[0]=u[x],_[1]=u[x+1],_[2]=u[x+2];for(let T=0;T<m.length;T++)m[T].containsPoint(_)&&g[T].push(v)}for(let y=0;y<m.length;y++){const v=new i(m[y].min,m[y].max,l.depth+1);v.data={indexes:g[y]},l.children.push(v)}l.data={};for(let y of l.children)processSplatTreeNode(a,y,c,u)};const s=(a,l,c)=>{const u=[0,0,0],h=[0,0,0],f=[],d=Math.floor(a.length/4);for(let m=0;m<d;m++){const g=m*4,_=a[g],y=a[g+1],v=a[g+2],x=Math.round(a[g+3]);(m===0||_<u[0])&&(u[0]=_),(m===0||_>h[0])&&(h[0]=_),(m===0||y<u[1])&&(u[1]=y),(m===0||y>h[1])&&(h[1]=y),(m===0||v<u[2])&&(u[2]=v),(m===0||v>h[2])&&(h[2]=v),f.push(x)}const p=new n(l,c);return p.sceneMin=u,p.sceneMax=h,p.rootNode=new i(p.sceneMin,p.sceneMax,0),p.rootNode.data={indexes:f},p};function o(a,l,c){const u=[];for(let f of a){const d=Math.floor(f.length/4);for(let p=0;p<d;p++){const m=p*4,g=Math.round(f[m+3]);u[g]=m}}const h=[];for(let f of a){const d=s(f,l,c);h.push(d),processSplatTreeNode(d,d.rootNode,u,f)}r.postMessage({subTrees:h})}r.onmessage=a=>{a.data.process&&o(a.data.process.centers,a.data.process.maxDepth,a.data.process.maxCentersPerNode)}}function cR(r,e,t,n,i){r.postMessage({process:{centers:e,maxDepth:n,maxCentersPerNode:i}},t)}function uR(){return new Worker(URL.createObjectURL(new Blob(["(",lR.toString(),")(self)"],{type:"application/javascript"})))}class hR{constructor(e,t){le(this,"processSplatMesh",function(e,t=()=>!0,n,i){this.splatTreeWorker||(this.splatTreeWorker=uR()),this.splatMesh=e,this.subTrees=[];const s=new I,o=(a,l)=>{const c=new Float32Array(l*4);let u=0;for(let h=0;h<l;h++){const f=h+a;if(t(f)){e.getSplatCenter(f,s);const d=u*4;c[d]=s.x,c[d+1]=s.y,c[d+2]=s.z,c[d+3]=f,u++}}return c};return new Promise(a=>{const l=()=>this.disposed?(this.diposeSplatTreeWorker(),a(),!0):!1;n&&n(!1),yi(()=>{if(l())return;const c=[];if(e.dynamicMode){let u=0;for(let h=0;h<e.scenes.length;h++){const d=e.getScene(h).splatBuffer.getSplatCount(),p=o(u,d);c.push(p),u+=d}}else{const u=o(0,e.getSplatCount());c.push(u)}this.splatTreeWorker.onmessage=u=>{l()||u.data.subTrees&&(i&&i(!1),yi(()=>{if(!l()){for(let h of u.data.subTrees){const f=ma.convertWorkerSubTree(h,e);this.subTrees.push(f)}this.diposeSplatTreeWorker(),i&&i(!0),yi(()=>{a()})}}))},yi(()=>{if(l())return;n&&n(!0);const u=c.map(h=>h.buffer);cR(this.splatTreeWorker,c,u,this.maxDepth,this.maxCentersPerNode)})})})});this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const t=(n,i)=>{n.children.length===0&&i(n);for(let s of n.children)t(s,i)};for(let n of this.subTrees)t(n.rootNode,e)}}function fR(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function dR(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,x=o||e.has("OES_texture_float"),T=v&&x,E=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:T,maxSamples:E}}const ga={Default:0,Gradual:1,Instant:2},_o={None:0,Error:1,Warning:2,Info:3,Debug:4},cg=new yn,pR=new Lr,Nl=6,mR=4,gR=4,_R=4,vR=6,xR=8,ju=4,Zu=4,ug=1,yR=.012,SR=.003,hg=1,fg=16777216;class tn extends St{constructor(t=Zi.ThreeD,n=!1,i=!1,s=!1,o=1,a=!0,l=!1,c=!1,u=1024,h=_o.None,f=0,d=1){super(cg,pR);le(this,"buildSplatTree",function(t=[],n,i){return new Promise(s=>{this.disposeSplatTree(),this.baseSplatTree=new hR(8,1e3);const o=performance.now(),a=new $e;this.baseSplatTree.processSplatMesh(this,l=>{this.getSplatColor(l,a);const c=this.getSceneIndexForSplat(l),u=t[c]||1;return a.w>=u},n,i).then(()=>{const l=performance.now()-o;if(this.logLevel>=_o.Info&&console.log("SplatTree build: "+l+" ms"),this.disposed)s();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let c=0,u=0,h=0;this.splatTree.visitLeaves(f=>{const d=f.data.indexes.length;d>0&&(u+=d,h++,c++)}),this.logLevel>=_o.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${c}`),u=u/h,console.log(`Avg splat count per node: ${u}`),console.log(`Total splat count: ${this.getSplatCount()}`)),s()}})})});le(this,"updateUniforms",function(){const t=new ve;return function(n,i,s,o,a,l){if(this.getSplatCount()>0){if(t.set(n.x*this.devicePixelRatio,n.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(t),this.material.uniforms.basisViewport.value.set(1/t.x,1/t.y),this.material.uniforms.focal.value.set(i,s),this.material.uniforms.orthographicMode.value=o?1:0,this.material.uniforms.orthoZoom.value=a,this.material.uniforms.inverseFocalAdjustment.value=l,this.dynamicMode)for(let u=0;u<this.scenes.length;u++)this.material.uniforms.transforms.value[u].copy(this.getScene(u).transform);if(this.enableOptionalEffects)for(let u=0;u<this.scenes.length;u++)this.material.uniforms.sceneOpacity.value[u]=sn(this.getScene(u).opacity,0,1),this.material.uniforms.sceneVisibility.value[u]=this.getScene(u).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}}());le(this,"setupDistancesComputationTransformFeedback",function(){let t;return function(){const n=this.getMaxSplatCount();if(!this.renderer)return;const i=this.lastRenderer!==this.renderer,s=t!==n;if(!i&&!s)return;i?this.disposeDistancesComputationGPUResources():s&&this.disposeDistancesComputationGPUBufferResources();const o=this.renderer.getContext(),a=(d,p,m)=>{const g=d.createShader(p);if(!g)return console.error("Fatal error: gl could not create a shader object."),null;if(d.shaderSource(g,m),d.compileShader(g),!d.getShaderParameter(g,d.COMPILE_STATUS)){let y="unknown";p===d.VERTEX_SHADER?y="vertex shader":p===d.FRAGMENT_SHADER&&(y="fragement shader");const v=d.getShaderInfoLog(g);return console.error("Failed to compile "+y+" with these errors:"+v),d.deleteShader(g),null}return g};let l;this.integerBasedDistancesComputation?(l=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?l+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${et.MaxScenes}];
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
                        uniform mat4 transforms[${et.MaxScenes}];
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
            `,u=o.getParameter(o.VERTEX_ARRAY_BINDING),h=o.getParameter(o.CURRENT_PROGRAM),f=h?o.getProgramParameter(h,o.DELETE_STATUS):!1;if(i&&(this.distancesTransformFeedback.vao=o.createVertexArray()),o.bindVertexArray(this.distancesTransformFeedback.vao),i){const d=o.createProgram(),p=a(o,o.VERTEX_SHADER,l),m=a(o,o.FRAGMENT_SHADER,c);if(!p||!m)throw new Error("Could not compile shaders for distances computation on GPU.");if(o.attachShader(d,p),o.attachShader(d,m),o.transformFeedbackVaryings(d,["distance"],o.SEPARATE_ATTRIBS),o.linkProgram(d),!o.getProgramParameter(d,o.LINK_STATUS)){const _=o.getProgramInfoLog(d);throw console.error("Fatal error: Failed to link program: "+_),o.deleteProgram(d),o.deleteShader(m),o.deleteShader(p),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=d,this.distancesTransformFeedback.vertexShader=p,this.distancesTransformFeedback.vertexShader=m}if(o.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=o.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=o.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let d=0;d<this.scenes.length;d++)this.distancesTransformFeedback.transformsLocs[d]=o.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${d}]`)}else this.distancesTransformFeedback.modelViewProjLoc=o.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(i||s)&&(this.distancesTransformFeedback.centersBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?o.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,o.INT,0,0):o.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,o.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),o.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,o.UNSIGNED_INT,0,0))),(i||s)&&(this.distancesTransformFeedback.outDistancesBuffer=o.createBuffer()),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),o.bufferData(o.ARRAY_BUFFER,n*4,o.STATIC_READ),i&&(this.distancesTransformFeedback.id=o.createTransformFeedback()),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),h&&f!==!0&&o.useProgram(h),u&&o.bindVertexArray(u),this.lastRenderer=this.renderer,t=n}}());le(this,"fillTransformsArray",function(){const t=[];return function(n){t.length!==n.length&&(t.length=n.length);for(let i=0;i<this.scenes.length;i++){const o=this.getScene(i).transform.elements;for(let a=0;a<16;a++)t[i*16+a]=o[a]}n.set(t)}}());le(this,"computeDistancesOnGPU",function(){const t=new ue;return function(n,i){if(!this.renderer)return;const s=this.renderer.getContext(),o=s.getParameter(s.VERTEX_ARRAY_BINDING),a=s.getParameter(s.CURRENT_PROGRAM),l=a?s.getProgramParameter(a,s.DELETE_STATUS):!1;if(s.bindVertexArray(this.distancesTransformFeedback.vao),s.useProgram(this.distancesTransformFeedback.program),s.enable(s.RASTERIZER_DISCARD),this.dynamicMode)for(let h=0;h<this.scenes.length;h++)if(t.copy(this.getScene(h).transform),t.premultiply(n),this.integerBasedDistancesComputation){const f=tn.getIntegerMatrixArray(t),d=[f[2],f[6],f[10],f[14]];s.uniform4i(this.distancesTransformFeedback.transformsLocs[h],d[0],d[1],d[2],d[3])}else s.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[h],!1,t.elements);else if(this.integerBasedDistancesComputation){const h=tn.getIntegerMatrixArray(n),f=[h[2],h[6],h[10]];s.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,f[0],f[1],f[2])}else{const h=[n.elements[2],n.elements[6],n.elements[10]];s.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,h[0],h[1],h[2])}s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),s.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?s.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,s.INT,0,0):s.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,s.FLOAT,!1,0,0),this.dynamicMode&&(s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),s.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),s.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,s.UNSIGNED_INT,0,0)),s.bindTransformFeedback(s.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),s.bindBufferBase(s.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),s.beginTransformFeedback(s.POINTS),s.drawArrays(s.POINTS,0,this.getSplatCount()),s.endTransformFeedback(),s.bindBufferBase(s.TRANSFORM_FEEDBACK_BUFFER,0,null),s.bindTransformFeedback(s.TRANSFORM_FEEDBACK,null),s.disable(s.RASTERIZER_DISCARD);const c=s.fenceSync(s.SYNC_GPU_COMMANDS_COMPLETE,0);s.flush();const u=new Promise(h=>{const f=()=>{if(this.disposed)h();else switch(s.clientWaitSync(c,0,0)){case s.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(f),this.computeDistancesOnGPUSyncTimeout;case s.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,s.deleteSync(c);const g=s.getParameter(s.VERTEX_ARRAY_BINDING);s.bindVertexArray(this.distancesTransformFeedback.vao),s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),s.getBufferSubData(s.ARRAY_BUFFER,0,i),s.bindBuffer(s.ARRAY_BUFFER,null),g&&s.bindVertexArray(g),h()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(f)});return a&&l!==!0&&s.useProgram(a),o&&s.bindVertexArray(o),u}}());le(this,"getSplatCenter",function(){const t={};return function(n,i,s){this.getLocalSplatParameters(n,t,s),t.splatBuffer.getSplatCenter(t.localIndex,i,t.sceneTransform)}}());le(this,"getSplatScaleAndRotation",function(){const t={},n=new I;return function(i,s,o,a){this.getLocalSplatParameters(i,t,a),n.x=void 0,n.y=void 0,n.z=void 0,this.splatRenderMode===Zi.TwoD&&(n.z=0),t.splatBuffer.getSplatScaleAndRotation(t.localIndex,s,o,t.sceneTransform,n)}}());le(this,"getSplatColor",function(){const t={};return function(n,i){this.getLocalSplatParameters(n,t),t.splatBuffer.getSplatColor(t.localIndex,i)}}());this.renderer=void 0,this.splatRenderMode=t,this.dynamicMode=n,this.enableOptionalEffects=i,this.halfPrecisionCovariancesOnGPU=s,this.devicePixelRatio=o,this.enableDistancesComputationOnGPU=a,this.integerBasedDistancesComputation=l,this.antialiased=c,this.maxScreenSpaceSplatSize=u,this.logLevel=h,this.sphericalHarmonicsDegree=f,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=d,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new xi,this.calculatedSceneCenter=new I,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(t,n,i){const s=[];s.length=n.length;for(let o=0;o<n.length;o++){const a=n[o],l=i[o]||{};let c=l.position||[0,0,0],u=l.rotation||[0,0,0,1],h=l.scale||[1,1,1];const f=new I().fromArray(c),d=new at().fromArray(u),p=new I().fromArray(h),m=tn.createScene(a,f,d,p,l.splatAlphaRemovalThreshold||1,l.opacity,l.visible);t.add(m),s[o]=m}return s}static createScene(t,n,i,s,o,a=1,l=!0){return new aR(t,n,i,s,o,a,l)}static buildSplatIndexMaps(t){const n=[],i=[];let s=0;for(let o=0;o<t.length;o++){const l=t[o].getMaxSplatCount();for(let c=0;c<l;c++)n[s]=c,i[s]=o,s++}return{localSplatIndexMap:n,sceneIndexMap:i}}build(t,n,i=!0,s=!1,o,a,l=!0){this.sceneOptions=n,this.finalBuild=s;const c=tn.getTotalMaxSplatCountForSplatBuffers(t),u=tn.buildScenes(this,t,n);if(i)for(let g=0;g<this.scenes.length&&g<u.length;g++){const _=u[g],y=this.getScene(g);_.copyTransformData(y)}this.scenes=u;let h=3;for(let g of t){const _=g.getMinSphericalHarmonicsDegree();_<h&&(h=_)}this.minSphericalHarmonicsDegree=Math.min(h,this.sphericalHarmonicsDegree);let f=!1;if(t.length!==this.lastBuildScenes.length)f=!0;else for(let g=0;g<t.length;g++)if(t[g]!==this.lastBuildScenes[g].splatBuffer){f=!0;break}let d=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==c||f)&&(d=!1),!d){this.boundingBox=new xi,l||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=oR.build(c),this.splatRenderMode===Zi.ThreeD?this.material=vc.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree):this.material=xc.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const g=tn.buildSplatIndexMaps(t);this.globalSplatIndexToLocalSplatIndexMap=g.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=g.sceneIndexMap}const p=this.getSplatCount();this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const m=this.refreshGPUDataFromSplatBuffers(d);for(let g=0;g<this.scenes.length;g++)this.lastBuildScenes[g]=this.scenes[g];return this.lastBuildSplatCount=p,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,s&&this.scenes.length>0&&this.buildSplatTree(n.map(g=>g.splatAlphaRemovalThreshold||1),o,a).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,m}freeIntermediateSplatData(){const t=n=>{delete n.source.data,delete n.image,n.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{t(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{t(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{t(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(n=>{n.needsUpdate=!0,n.onUpdate=()=>{t(n)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{t(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new xi,this.calculatedSceneCenter=new I,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==cg&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let t in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(t)){const n=this.splatDataTextures[t];n.texture&&(n.texture.dispose(),n.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(t){this.onSplatTreeReadyCallback=t}getDataForDistancesComputation(t,n){const i=this.integerBasedDistancesComputation?this.getIntegerCenters(t,n,!0):this.getFloatCenters(t,n,!0),s=this.getSceneIndexes(t,n);return{centers:i,sceneIndexes:s}}refreshGPUDataFromSplatBuffers(t){const n=this.getSplatCount();this.refreshDataTexturesFromSplatBuffers(t);const i=t?this.lastBuildSplatCount:0,{centers:s,sceneIndexes:o}=this.getDataForDistancesComputation(i,n-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(s,o,t),{from:i,to:n-1,count:n-i,centers:s,sceneIndexes:o}}refreshGPUBuffersForDistancesComputation(t,n,i=!1){const s=i?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(i,t,s),this.updateGPUTransformIndexesBufferForDistancesComputation(i,n,s)}refreshDataTexturesFromSplatBuffers(t){const n=this.getSplatCount(),i=this.lastBuildSplatCount,s=n-1;t?this.updateBaseDataFromSplatBuffers(i,s):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(i,s),this.updateVisibleRegion(t)}setupDataTextures(){const t=this.getMaxSplatCount(),n=this.getSplatCount();this.disposeTextures();const i=(C,A)=>{const M=new ve(4096,1024);for(;M.x*M.y*C<t*A;)M.y*=2;return M},s=C=>C>=1?vR:gR,o=C=>{const A=s(C),M=i(A,6);return{elementsPerTexelStored:A,texSize:M}};let a=this.getTargetCovarianceCompressionLevel();const l=0,c=this.getTargetSphericalHarmonicsCompressionLevel();let u,h,f;if(this.splatRenderMode===Zi.ThreeD){const C=o(a);C.texSize.x*C.texSize.y>fg&&a===0&&(a=1),u=new Float32Array(t*Nl)}else h=new Float32Array(t*3),f=new Float32Array(t*4);const d=new Float32Array(t*3),p=new Uint8Array(t*4);let m=Float32Array;c===1?m=Uint16Array:c===2&&(m=Uint8Array);const g=mo(this.minSphericalHarmonicsDegree),_=this.minSphericalHarmonicsDegree?new m(t*g):void 0,y=i(Zu,4),v=new Uint32Array(y.x*y.y*Zu);tn.updateCenterColorsPaddedData(0,n-1,d,p,v);const x=new Yi(v,y.x,y.y,co,ii);if(x.internalFormat="RGBA32UI",x.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=x,this.material.uniforms.centersColorsTextureSize.value.copy(y),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:u,scales:h,rotations:f,centers:d,colors:p,sphericalHarmonics:_},centerColors:{data:v,texture:x,size:y}},this.splatRenderMode===Zi.ThreeD){const C=o(a),A=C.elementsPerTexelStored,M=C.texSize;let w=a>=1?Uint32Array:Float32Array;const F=a>=1?xR:_R,P=new w(M.x*M.y*F);a===0?P.set(u):tn.updatePaddedCompressedCovariancesTextureData(u,P,0,0,u.length);let L;if(a>=1)L=new Yi(P,M.x,M.y,co,ii),L.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=L;else{L=new Yi(P,M.x,M.y,xn,ri),this.material.uniforms.covariancesTexture.value=L;const B=new Yi(new Uint32Array(32),2,2,co,ii);B.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=B,B.needsUpdate=!0}L.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=a>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(M),this.splatDataTextures.covariances={data:P,texture:L,size:M,compressionLevel:a,elementsPerTexelStored:A,elementsPerTexelAllocated:F}}else{const A=i(ju,6);let M=Float32Array,w=ri;const F=new M(A.x*A.y*ju);tn.updateScaleRotationsPaddedData(0,n-1,h,f,F);const P=new Yi(F,A.x,A.y,xn,w);P.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=P,this.material.uniforms.scaleRotationsTextureSize.value.copy(A),this.splatDataTextures.scaleRotations={data:F,texture:P,size:A,compressionLevel:l}}if(_){const C=c===2?Li:Uo;let A=g;A%2!==0&&A++;const M=this.minSphericalHarmonicsDegree===2?4:2,w=M===4?xn:Uf;let F=i(M,A);if(F.x*F.y<=fg){const P=F.x*F.y*M,L=new m(P);for(let O=0;O<n;O++){const H=g*O,k=A*O;for(let j=0;j<g;j++)L[k+j]=_[H+j]}const B=new Yi(L,F.x,F.y,w,C);B.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=B,this.splatDataTextures.sphericalHarmonics={componentCount:g,paddedComponentCount:A,data:L,textureCount:1,texture:B,size:F,compressionLevel:c,elementsPerTexel:M}}else{const P=g/3;A=P,A%2!==0&&A++,F=i(M,A);const L=F.x*F.y*M,B=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],O=[],H=[];for(let k=0;k<3;k++){const j=new m(L);O.push(j);for(let oe=0;oe<n;oe++){const fe=g*oe,xe=A*oe;if(P>=3){for(let W=0;W<3;W++)j[xe+W]=_[fe+k*3+W];if(P>=8)for(let W=0;W<5;W++)j[xe+3+W]=_[fe+9+k*5+W]}}const ne=new Yi(j,F.x,F.y,w,C);H.push(ne),ne.needsUpdate=!0,B[k].value=ne}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:g,componentCountPerChannel:P,paddedComponentCount:A,data:O,textureCount:3,textures:H,size:F,compressionLevel:c,elementsPerTexel:M}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(F),this.material.uniforms.sphericalHarmonics8BitMode.value=c===2?1:0;for(let P=0;P<this.scenes.length;P++){const L=this.scenes[P].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[P]=L.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[P]=L.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const T=i(ug,4),E=new Uint32Array(T.x*T.y*ug);for(let C=0;C<n;C++)E[C]=this.globalSplatIndexToSceneIndexMap[C];const S=new Yi(E,T.x,T.y,Pc,ii);S.internalFormat="R32UI",S.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=S,this.material.uniforms.sceneIndexesTextureSize.value.copy(T),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:E,texture:S,size:T},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(t,n){const i=this.splatDataTextures.covariances,s=i?i.compressionLevel:void 0,o=this.splatDataTextures.scaleRotations,a=o?o.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,s,a,c,t,n,t)}updateDataTexturesFromBaseData(t,n){const i=this.splatDataTextures.covariances,s=i?i.compressionLevel:void 0,o=this.splatDataTextures.scaleRotations,a=o?o.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0,u=this.splatDataTextures.centerColors,h=u.data,f=u.texture;tn.updateCenterColorsPaddedData(t,n,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,h);const d=this.renderer?this.renderer.properties.get(f):null;if(!d||!d.__webglTexture?f.needsUpdate=!0:this.updateDataTexture(h,u.texture,u.size,d,Zu,mR,4,t,n),i){const v=i.texture,x=t*Nl,T=n*Nl;if(s===0)for(let S=x;S<=T;S++){const C=this.splatDataTextures.baseData.covariances[S];i.data[S]=C}else tn.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,i.data,t*i.elementsPerTexelAllocated,x,T);const E=this.renderer?this.renderer.properties.get(v):null;!E||!E.__webglTexture?v.needsUpdate=!0:s===0?this.updateDataTexture(i.data,i.texture,i.size,E,i.elementsPerTexelStored,Nl,4,t,n):this.updateDataTexture(i.data,i.texture,i.size,E,i.elementsPerTexelAllocated,i.elementsPerTexelAllocated,2,t,n)}if(o){const v=o.data,x=o.texture,T=6,E=a===0?4:2;tn.updateScaleRotationsPaddedData(t,n,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,v);const S=this.renderer?this.renderer.properties.get(x):null;!S||!S.__webglTexture?x.needsUpdate=!0:this.updateDataTexture(v,o.texture,o.size,S,ju,T,E,t,n)}const p=this.splatDataTextures.baseData.sphericalHarmonics;if(p){let v=4;c===1?v=2:c===2&&(v=1);const x=(S,C,A,M,w)=>{const F=this.renderer?this.renderer.properties.get(S):null;!F||!F.__webglTexture?S.needsUpdate=!0:this.updateDataTexture(M,S,C,F,A,w,v,t,n)},T=l.componentCount,E=l.paddedComponentCount;if(l.textureCount===1){const S=l.data;for(let C=t;C<=n;C++){const A=T*C,M=E*C;for(let w=0;w<T;w++)S[M+w]=p[A+w]}x(l.texture,l.size,l.elementsPerTexel,S,E)}else{const S=l.componentCountPerChannel;for(let C=0;C<3;C++){const A=l.data[C];for(let M=t;M<=n;M++){const w=T*M,F=E*M;if(S>=3){for(let P=0;P<3;P++)A[F+P]=p[w+C*3+P];if(S>=8)for(let P=0;P<5;P++)A[F+3+P]=p[w+9+C*5+P]}}x(l.textures[C],l.size,l.elementsPerTexel,A,E)}}}const m=this.splatDataTextures.sceneIndexes,g=m.data;for(let v=this.lastBuildSplatCount;v<=n;v++)g[v]=this.globalSplatIndexToSceneIndexMap[v];const _=m.texture,y=this.renderer?this.renderer.properties.get(_):null;!y||!y.__webglTexture?_.needsUpdate=!0:this.updateDataTexture(g,m.texture,m.size,y,1,1,1,this.lastBuildSplatCount,n)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const s=this.getScene(n).splatBuffer;(n===0||s.compressionLevel>t)&&(t=s.compressionLevel)}return t}getMinimumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const s=this.getScene(n).splatBuffer;(n===0||s.compressionLevel<t)&&(t=s.compressionLevel)}return t}static computeTextureUpdateRegion(t,n,i,s,o){const a=o/s,l=t*a,c=Math.floor(l/i),u=c*i*s,h=n*a,f=Math.floor(h/i),d=f*i*s+i*s;return{dataStart:u,dataEnd:d,startRow:c,endRow:f}}updateDataTexture(t,n,i,s,o,a,l,c,u){const h=this.renderer.getContext(),f=tn.computeTextureUpdateRegion(c,u,i.x,o,a),d=f.dataEnd-f.dataStart,p=new t.constructor(t.buffer,f.dataStart*l,d),m=f.endRow-f.startRow+1,g=this.webGLUtils.convert(n.type),_=this.webGLUtils.convert(n.format,n.colorSpace),y=h.getParameter(h.TEXTURE_BINDING_2D);h.bindTexture(h.TEXTURE_2D,s.__webglTexture),h.texSubImage2D(h.TEXTURE_2D,0,0,f.startRow,i.x,m,_,g,p),h.bindTexture(h.TEXTURE_2D,y)}static updatePaddedCompressedCovariancesTextureData(t,n,i,s,o){let a=new DataView(n.buffer),l=i,c=0;for(let u=s;u<=o;u+=2)a.setUint16(l*2,t[u],!0),a.setUint16(l*2+2,t[u+1],!0),l+=2,c++,c>=3&&(l+=2,c=0)}static updateCenterColorsPaddedData(t,n,i,s,o){for(let a=t;a<=n;a++){const l=a*4,c=a*3,u=a*4;o[u]=h1(s,l),o[u+1]=Gu(i[c]),o[u+2]=Gu(i[c+1]),o[u+3]=Gu(i[c+2])}}static updateScaleRotationsPaddedData(t,n,i,s,o){for(let l=t;l<=n;l++){const c=l*3,u=l*4,h=l*6;o[h]=i[c],o[h+1]=i[c+1],o[h+2]=i[c+2],o[h+3]=s[u],o[h+4]=s[u+1],o[h+5]=s[u+2]}}updateVisibleRegion(t){const n=this.getSplatCount(),i=new I;if(!t){const o=new I;this.scenes.forEach(a=>{o.add(a.splatBuffer.sceneCenter)}),o.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(o),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const s=t?this.lastBuildSplatCount:0;for(let o=s;o<n;o++){this.getSplatCenter(o,i,!0);const a=i.sub(this.calculatedSceneCenter).length();a>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=a)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>hg&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-hg,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(t=ga.Default){const n=yR*this.sceneFadeInRateMultiplier,i=SR*this.sceneFadeInRateMultiplier,s=this.finalBuild?n:i,o=t===ga.Default?s:i;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*o+this.visibleRegionFadeStartRadius;const l=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,c=l||t===ga.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=c,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!l}updateRenderIndexes(t,n){const i=this.geometry;i.attributes.splatIndex.set(t),i.attributes.splatIndex.needsUpdate=!0,n>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),i.instanceCount=n,i.setDrawRange(0,n)}updateTransforms(){for(let t=0;t<this.scenes.length;t++)this.getScene(t).updateTransform(this.dynamicMode)}setSplatScale(t=1){this.splatScale=t,this.material.uniforms.splatScale.value=t,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(t){this.pointCloudModeEnabled=t,this.material.uniforms.pointCloudModeEnabled.value=t?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(){return tn.getTotalSplatCountForScenes(this.scenes)}static getTotalSplatCountForScenes(t){let n=0;for(let i of t)i&&i.splatBuffer&&(n+=i.splatBuffer.getSplatCount());return n}static getTotalSplatCountForSplatBuffers(t){let n=0;for(let i of t)n+=i.getSplatCount();return n}getMaxSplatCount(){return tn.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(t){let n=0;for(let i of t)i&&i.splatBuffer&&(n+=i.splatBuffer.getMaxSplatCount());return n}static getTotalMaxSplatCountForSplatBuffers(t){let n=0;for(let i of t)n+=i.getMaxSplatCount();return n}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.vao&&(t.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(t.deleteProgram(this.distancesTransformFeedback.program),t.deleteShader(this.distancesTransformFeedback.vertexShader),t.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(t.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,t.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(t.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(t){if(t!==this.renderer){this.renderer=t;const n=this.renderer.getContext(),i=new fR(n),s=new dR(n,i,{});if(i.init(s),this.webGLUtils=new _0(n,i),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:o,sceneIndexes:a}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(o,a)}}}updateGPUCentersBufferForDistancesComputation(t,n,i){if(!this.renderer)return;const s=this.renderer.getContext(),o=s.getParameter(s.VERTEX_ARRAY_BINDING);s.bindVertexArray(this.distancesTransformFeedback.vao);const a=this.integerBasedDistancesComputation?Uint32Array:Float32Array,l=16,c=i*l;if(s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),t)s.bufferSubData(s.ARRAY_BUFFER,c,n);else{const u=new a(this.getMaxSplatCount()*l);u.set(n),s.bufferData(s.ARRAY_BUFFER,u,s.STATIC_DRAW)}s.bindBuffer(s.ARRAY_BUFFER,null),o&&s.bindVertexArray(o)}updateGPUTransformIndexesBufferForDistancesComputation(t,n,i){if(!this.renderer||!this.dynamicMode)return;const s=this.renderer.getContext(),o=s.getParameter(s.VERTEX_ARRAY_BINDING);s.bindVertexArray(this.distancesTransformFeedback.vao);const a=i*4;if(s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),t)s.bufferSubData(s.ARRAY_BUFFER,a,n);else{const l=new Uint32Array(this.getMaxSplatCount()*4);l.set(n),s.bufferData(s.ARRAY_BUFFER,l,s.STATIC_DRAW)}s.bindBuffer(s.ARRAY_BUFFER,null),o&&s.bindVertexArray(o)}getSceneIndexes(t,n){let i;const s=n-t+1;i=new Uint32Array(s);for(let o=t;o<=n;o++)i[o]=this.globalSplatIndexToSceneIndexMap[o];return i}getLocalSplatParameters(t,n,i){i==null&&(i=!this.dynamicMode),n.splatBuffer=this.getSplatBufferForSplat(t),n.localIndex=this.getSplatLocalIndex(t),n.sceneTransform=i?this.getSceneTransformForSplat(t):null}fillSplatDataArrays(t,n,i,s,o,a,l,c=0,u=0,h=1,f,d,p=0,m){const g=new I;g.x=void 0,g.y=void 0,this.splatRenderMode===Zi.ThreeD?g.z=void 0:g.z=1;const _=new ue;let y=0,v=this.scenes.length-1;m!=null&&m>=0&&m<=this.scenes.length&&(y=m,v=m);for(let x=y;x<=v;x++){l==null&&(l=!this.dynamicMode);const T=this.getScene(x),E=T.splatBuffer;let S;if(l&&(this.getSceneTransform(x,_),S=_),t&&E.fillSplatCovarianceArray(t,S,f,d,p,c),n||i){if(!n||!i)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');E.fillSplatScaleRotationArray(n,i,S,f,d,p,u,g)}s&&E.fillSplatCenterArray(s,S,f,d,p),o&&E.fillSplatColorArray(o,T.minimumAlpha,f,d,p),a&&E.fillSphericalHarmonicsArray(a,this.minSphericalHarmonicsDegree,S,f,d,p,h),p+=E.getSplatCount()}}getIntegerCenters(t,n,i=!1){const s=n-t+1,o=new Float32Array(s*3);this.fillSplatDataArrays(null,null,null,o,null,null,void 0,void 0,void 0,void 0,t);let a,l=i?4:3;a=new Int32Array(s*l);for(let c=0;c<s;c++){for(let u=0;u<3;u++)a[c*l+u]=Math.round(o[c*3+u]*1e3);i&&(a[c*l+3]=1e3)}return a}getFloatCenters(t,n,i=!1){const s=n-t+1,o=new Float32Array(s*3);if(this.fillSplatDataArrays(null,null,null,o,null,null,void 0,void 0,void 0,void 0,t),!i)return o;let a=new Float32Array(s*4);for(let l=0;l<s;l++){for(let c=0;c<3;c++)a[l*4+c]=o[l*3+c];a[l*4+3]=1}return a}getSceneTransform(t,n){const i=this.getScene(t);i.updateTransform(this.dynamicMode),n.copy(i.transform)}getScene(t){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[t]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).splatBuffer}getSceneIndexForSplat(t){return this.globalSplatIndexToSceneIndexMap[t]}getSceneTransformForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).transform}getSplatLocalIndex(t){return this.globalSplatIndexToLocalSplatIndexMap[t]}static getIntegerMatrixArray(t){const n=t.elements,i=[];for(let s=0;s<16;s++)i[s]=Math.round(n[s]*1e3);return i}computeBoundingBox(t=!1,n){let i=this.getSplatCount();if(n!=null){if(n<0||n>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");i=this.scenes[n].splatBuffer.getSplatCount()}const s=new Float32Array(i*3);this.fillSplatDataArrays(null,null,null,s,null,null,t,void 0,void 0,void 0,void 0,n);const o=new I,a=new I;for(let l=0;l<i;l++){const c=l*3,u=s[c],h=s[c+1],f=s[c+2];(l===0||u<o.x)&&(o.x=u),(l===0||h<o.y)&&(o.y=h),(l===0||f<o.z)&&(o.z=f),(l===0||u>a.x)&&(a.x=u),(l===0||h>a.y)&&(a.y=h),(l===0||f>a.z)&&(a.z=f)}return new xi(o,a)}}var AR="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",dg="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",MR="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",TR="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function ER(r){let e,t,n,i,s,o,a,l,c,u,h,f,d,p,m,g,_,y,v,x;function T(E,S,C,A,M,w,F){const P=performance.now();if(!n&&(new Uint32Array(t,a,M.byteLength/x.BytesPerInt).set(M),new Float32Array(t,u,F.byteLength/x.BytesPerFloat).set(F),A)){let k;i?k=new Int32Array(t,h,w.byteLength/x.BytesPerInt):k=new Float32Array(t,h,w.byteLength/x.BytesPerFloat),k.set(w)}g||(g=new Uint32Array(y)),new Float32Array(t,m,16).set(C),new Uint32Array(t,d,y).set(g),e.exports.sortIndexes(a,p,h,f,d,m,l,c,u,y,E,S,o,A,i,s);const L={sortDone:!0,splatSortCount:E,splatRenderCount:S,sortTime:0};if(!n){const O=new Uint32Array(t,l,S);(!_||_.length<S)&&(_=new Uint32Array(S)),_.set(O),L.sortedIndexes=_}const B=performance.now();L.sortTime=B-P,r.postMessage(L)}r.onmessage=E=>{if(E.data.centers)centers=E.data.centers,sceneIndexes=E.data.sceneIndexes,i?new Int32Array(t,p+E.data.range.from*x.BytesPerInt*4,E.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,p+E.data.range.from*x.BytesPerFloat*4,E.data.range.count*4).set(new Float32Array(centers)),s&&new Uint32Array(t,c+E.data.range.from*4,E.data.range.count).set(new Uint32Array(sceneIndexes)),v=E.data.range.from+E.data.range.count;else if(E.data.sort){const S=Math.min(E.data.sort.splatRenderCount||0,v),C=Math.min(E.data.sort.splatSortCount||0,v),A=E.data.sort.usePrecomputedDistances;let M,w,F;n||(M=E.data.sort.indexesToSort,F=E.data.sort.transforms,A&&(w=E.data.sort.precomputedDistances)),T(C,S,E.data.sort.modelViewProj,A,M,w,F)}else if(E.data.init){x=E.data.init.Constants,o=E.data.init.splatCount,n=E.data.init.useSharedMemory,i=E.data.init.integerBasedSort,s=E.data.init.dynamicMode,y=E.data.init.distanceMapRange,v=0;const S=i?x.BytesPerInt*4:x.BytesPerFloat*4,C=new Uint8Array(E.data.init.sorterWasmBytes),A=16*x.BytesPerFloat,M=o*x.BytesPerInt,w=o*S,F=A,P=i?o*x.BytesPerInt:o*x.BytesPerFloat,L=o*x.BytesPerInt,B=o*x.BytesPerInt,O=i?y*x.BytesPerInt*2:y*x.BytesPerFloat*2,H=s?o*x.BytesPerInt:0,k=s?x.MaxScenes*A:0,j=x.MemoryPageSize*32,ne=M+w+F+P+L+O+B+H+k+j,oe=Math.floor(ne/x.MemoryPageSize)+1,fe={module:{},env:{memory:new WebAssembly.Memory({initial:oe,maximum:oe,shared:!0})}};WebAssembly.compile(C).then(xe=>WebAssembly.instantiate(xe,fe)).then(xe=>{e=xe,a=0,p=a+M,m=p+w,h=m+F,f=h+P,d=f+L,l=d+O,c=l+B,u=c+H,t=fe.env.memory.buffer,n?r.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:a,sortedIndexesBuffer:t,sortedIndexesOffset:l,precomputedDistancesBuffer:t,precomputedDistancesOffset:h,transformsBuffer:t,transformsOffset:u}):r.postMessage({sortSetupPhase1Complete:!0})})}}}function CR(r,e,t,n,i,s=et.DefaultSplatSortDistanceMapPrecision){const o=new Worker(URL.createObjectURL(new Blob(["(",ER.toString(),")(self)"],{type:"application/javascript"})));let a=AR;const l=vd()?k_():null;!t&&!e?(a=dg,l&&l.major<=16&&l.minor<4&&(a=TR)):t?e||l&&l.major<=16&&l.minor<4&&(a=MR):a=dg;const c=atob(a),u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h);return o.postMessage({init:{sorterWasmBytes:u.buffer,splatCount:r,useSharedMemory:e,integerBasedSort:n,dynamicMode:i,distanceMapRange:1<<s,Constants:{BytesPerFloat:et.BytesPerFloat,BytesPerInt:et.BytesPerInt,MemoryPageSize:et.MemoryPageSize,MaxScenes:et.MaxScenes}}}),o}const Qs={None:0,VR:1,AR:2};class Lo{static createButton(e,t={}){const n=document.createElement("button");function i(){let c=null;async function u(d){d.addEventListener("end",h),await e.xr.setSession(d),n.textContent="EXIT VR",c=d}function h(){c.removeEventListener("end",h),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const f={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",f).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(u).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(u).catch(d=>{console.warn(d)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="VR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():o(),c&&Lo.xrSessionIsGranted&&n.click()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Lo.xrSessionIsGranted=!0})}}}Lo.xrSessionIsGranted=!1;Lo.registerSessionGrantedListener();class bR{static createButton(e,t={}){const n=document.createElement("button");function i(){if(t.domOverlay===void 0){const f=document.createElement("div");f.style.display="none",document.body.appendChild(f);const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("width",38),d.setAttribute("height",38),d.style.position="absolute",d.style.right="20px",d.style.top="20px",d.addEventListener("click",function(){c.end()}),f.appendChild(d);const p=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),p.setAttribute("stroke","#fff"),p.setAttribute("stroke-width",2),d.appendChild(p),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:f}}let c=null;async function u(f){f.addEventListener("end",h),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(f),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=f}function h(){c.removeEventListener("end",h),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(f=>{console.warn(f)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(f=>{console.warn(f)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="AR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?i():o()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const $u={Always:0,OnChange:1,Never:2},wR=50,RR=.75,IR=15e5,PR=10,DR=2.5,FR=60,xr=class xr{constructor(e={}){le(this,"onKeyDown",function(){const e=new I,t=new ue,n=new ue;return function(i){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),t.makeRotationAxis(e,Math.PI/128),n.makeRotationAxis(e,-Math.PI/128),i.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(t);break;case"ArrowRight":this.camera.up.transformDirection(n);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}}());le(this,"onMouseUp",function(){const e=new ve;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),Xs()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}}());le(this,"checkForFocalPointChange",function(){const e=new ve,t=new I,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){const s=n[0].origin;t.copy(s).sub(this.camera.position),t.length()>RR&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(s),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=Xs())}}}());le(this,"updateSplatMesh",function(){const e=new ve;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const n=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,i=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,s=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,o=this.focalAdjustment*s,a=1/o;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,n*o,i*o,this.camera.isOrthographicCamera,this.camera.zoom||1,a)}}}());le(this,"addSplatBuffers",function(){return function(e,t=[],n=!0,i=!0,s=!0,o=!1,a=!1,l=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let c=null;const u=()=>{c!==null&&(this.loadingSpinner.removeTask(c),c=null)};return new Promise(h=>{i&&(c=this.loadingSpinner.addTask("Processing splats...")),yi(()=>{if(this.isDisposingOrDisposed())h();else{const f=this.addSplatBuffersToMesh(e,t,n,s,o,l);this.gpuAcceleratedSort||this.preSortPosts.push({centers:f.centers.buffer,sceneIndexes:f.sceneIndexes.buffer,range:{from:f.from,to:f.to,count:f.count}});const d=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==d&&this.disposeSortWorker(),(!this.sortWorker&&d>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||(this.sortWorker&&(this.sortRunning?n&&this.sortPromise.then(()=>{this.runSplatSort(!0,!0)}):this.runSplatSort(!0,!0)),this.splatRenderReady=!0,u(),h())})}},!0)})}}());le(this,"addSplatBuffersToMesh",function(){let e;return function(t,n,i=!0,s=!1,o=!1,a=!0){if(this.isDisposingOrDisposed())return;let l=[],c=[];o||(l=this.splatMesh.scenes.map(d=>d.splatBuffer)||[],c=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(d=>d):[]),l.push(...t),c.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);const u=d=>{if(this.isDisposingOrDisposed())return;const p=this.splatMesh.getSplatCount();s&&p>=IR&&!d&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},h=d=>{this.isDisposingOrDisposed()||d&&e&&(this.loadingSpinner.removeTask(e),e=null)},f=this.splatMesh.build(l,c,!0,i,u,h,a);return i&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),f}}());le(this,"shouldRender",function(){let e=0;const t=new I,n=new at,i=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let s=!1,o=!1;if(this.camera){const a=this.camera.position,l=this.camera.quaternion;o=Math.abs(a.x-t.x)>i||Math.abs(a.y-t.y)>i||Math.abs(a.z-t.z)>i||Math.abs(l.x-n.x)>i||Math.abs(l.y-n.y)>i||Math.abs(l.z-n.z)>i||Math.abs(l.w-n.w)>i}return s=this.renderMode!==$u.Never&&(e===0||this.splatMesh.visibleRegionChanging||o||this.renderMode===$u.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,s}}());le(this,"render",function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=n=>{for(let i of n.children)if(i.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}}());le(this,"updateFPS",function(){let e=Xs(),t=0;return function(){if(this.consecutiveRenderFrames>FR){const n=Xs();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}}());le(this,"updateForRendererSizeChanges",function(){const e=new ve,t=new ve;let n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(n===void 0||n!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}}());le(this,"timingSensitiveUpdates",function(){let e;return function(){const t=Xs();e||(e=t);const n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}}());le(this,"updateCameraTransition",function(){let e=new I,t=new I,n=new I;return function(i){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const s=Math.acos(t.dot(n)),a=(s/(Math.PI/3)*.65+.3)/s*(i-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,a),this.camera.lookAt(e),this.controls.target.copy(e),a>=1&&(this.transitioningCameraTarget=!1)}}}());le(this,"updateFocusMarker",function(){const e=new ve;let t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const i=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let s=Math.min(i+PR*n,1);this.sceneHelper.setFocusMarkerOpacity(s),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let i;if(t?i=1:i=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),i>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let s=Math.max(i-DR*n,0);this.sceneHelper.setFocusMarkerOpacity(s),s===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}i>0&&this.forceRenderNextFrame(),t=!1}}}());le(this,"updateMeshCursor",function(){const e=[],t=new ve;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}}());le(this,"updateInfoPanel",function(){const e=new ve;return function(){if(!this.showInfo)return;const t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const n=this.controls?this.controls.target:null,i=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,s=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,i,this.currentFPS||"N/A",t,this.splatRenderCount,s,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}}());le(this,"runSplatSort",function(){const e=new ue,t=[],n=new I(0,0,-1),i=new I(0,0,-1),s=new I,o=new I,a=[],l=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(c=!1,u=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let h=0,f=0,d=!1,p=!1;if(i.set(0,0,-1).applyQuaternion(this.camera.quaternion),h=i.dot(n),f=o.copy(this.camera.position).sub(s).length(),!c&&!this.splatMesh.dynamicMode&&a.length===0&&(h<=.99&&(d=!0),f>=1&&(p=!0),!d&&!p))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:m,shouldSortAll:g}=this.gatherSceneNodesForSort();g=g||u,this.splatRenderCount=m,e.copy(this.camera.matrixWorld).invert();const _=this.perspectiveCamera||this.camera;e.premultiply(_.projectionMatrix),e.multiply(this.splatMesh.matrixWorld);let y=Promise.resolve(!0);return this.gpuAcceleratedSort&&(a.length<=1||a.length%2===0)&&(y=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),y.then(()=>{if(a.length===0)if(this.splatMesh.dynamicMode||g)a.push(this.splatRenderCount);else{for(let T of l)if(h<T.angleThreshold){for(let E of T.sortFractions)a.push(Math.floor(this.splatRenderCount*E));break}a.push(this.splatRenderCount)}let v=Math.min(a.shift(),this.splatRenderCount);this.splatSortCount=v,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;const x={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:v,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(x.indexesToSort=this.sortWorkerIndexesToSort,x.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(x.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(T=>{this.sortPromiseResolver=T}),this.preSortPosts.length>0&&(this.preSortPosts.forEach(T=>{this.sortWorker.postMessage(T)}),this.preSortPosts=[]),this.sortWorker.postMessage({sort:x}),a.length===0&&(s.copy(this.camera.position),n.copy(i)),!0}),y}}());le(this,"gatherSceneNodesForSort",function(){const e=[];let t=null;const n=new I,i=new I,s=new I,o=new ue,a=new ue,l=new ue,c=new I,u=new I(0,0,-1),h=new I,f=d=>h.copy(d.max).sub(d.min).length();return function(d=!1){this.getRenderDimensions(c);const p=c.y/2/Math.tan(this.camera.fov/2*jt.DEG2RAD),m=Math.atan(c.x/2/p),g=Math.atan(c.y/2/p),_=Math.cos(m),y=Math.cos(g),v=this.splatMesh.getSplatTree();if(v){a.copy(this.camera.matrixWorld).invert(),a.multiply(this.splatMesh.matrixWorld);let x=0,T=0;for(let S=0;S<v.subTrees.length;S++){const C=v.subTrees[S];o.copy(a),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(S,l),o.multiply(l));const A=C.nodesWithIndexes.length;for(let M=0;M<A;M++){const w=C.nodesWithIndexes[M];if(!w.data||!w.data.indexes||w.data.indexes.length===0)continue;s.copy(w.center).applyMatrix4(o);const F=s.length();s.normalize(),n.copy(s).setX(0).normalize(),i.copy(s).setY(0).normalize();const P=u.dot(i),L=u.dot(n),B=f(w),O=L<y-.6,H=P<_-.6;!d&&(H||O)&&F>B||(T+=w.data.indexes.length,e[x]=w,w.data.distanceToNode=F,x++)}}e.length=x,e.sort((S,C)=>S.data.distanceToNode<C.data.distanceToNode?-1:1);let E=T*et.BytesPerInt;for(let S=0;S<x;S++){const C=e[S],A=C.data.indexes.length,M=A*et.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,E-M,A).set(C.data.indexes),E-=M}return{splatRenderCount:T,shouldSortAll:!1}}else{const x=this.splatMesh.getSplatCount();if(!t||t.length!==x){t=new Uint32Array(x);for(let T=0;T<x;T++)t[T]=T}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:x,shouldSortAll:!0}}}}());if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new I().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new I().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new I().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.webXRMode=e.webXRMode||Qs.None,this.webXRMode!==Qs.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||$u.Always,this.sceneRevealMode=e.sceneRevealMode||ga.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||_o.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,vd()){const n=k_();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=Zi.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||et.DefaultSplatSortDistanceMapPrecision;const t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=sn(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortPosts=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new sR,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new I,this.nextCameraTarget=new I,this.mousePosition=new ve,this.mouseDownPosition=new ve,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new yf(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new J1(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new eR(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new tn(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement.parentElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new x0,this.sceneHelper=new pa(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new ve;this.getRenderDimensions(e),this.perspectiveCamera=new _n(wR,e.x/e.y,.1,1e3),this.orthographicCamera=new Lc(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new ve;this.getRenderDimensions(e),this.renderer=new v0({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new ze(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===Qs.VR?this.rootElement.appendChild(Lo.createButton(this.renderer,e)):this.webXRMode===Qs.AR&&this.rootElement.appendChild(bR.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===Qs.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new Ol(this.camera,this.renderer.domElement):this.perspectiveControls=new Ol(this.camera,this.renderer.domElement):(this.perspectiveControls=new Ol(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new Ol(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===Qs.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=Xs()}onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){const i=a=>{a.saveState(),a.reset()},s=this.controls,o=e?this.orthographicControls:this.perspectiveControls;i(o),i(s),o.target.copy(s.target),e?xr.setCameraZoomFromPosition(n,t,s):xr.setCameraPositionFromZoom(n,t,o),this.controls=o,this.camera.lookAt(this.controls.target)}}adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const n=this.renderer.xr.getCamera().projectionMatrix.elements[0],i=this.camera.projectionMatrix.elements[0];e.x*=i/n}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);const n=t.format!==void 0&&t.format!==null?t.format:rg(e),i=xr.isProgressivelyLoadable(n)&&t.progressiveLoad,s=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0;let o=null;s&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const a=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},l=(m,g,_)=>{if(s)if(_===Wt.Downloading)if(m==100)this.loadingSpinner.setMessageForTask(o,"Download complete!");else if(i)this.loadingSpinner.setMessageForTask(o,"Downloading splats...");else{const y=g?`: ${g}`:"...";this.loadingSpinner.setMessageForTask(o,`Downloading${y}`)}else _===Wt.Processing&&this.loadingSpinner.setMessageForTask(o,"Processing splats...")};let c=!1,u=0;const h=(m,g)=>{s&&((m&&i||g&&!i)&&(this.loadingSpinner.removeTask(o),!g&&!c&&this.loadingProgressBar.show()),i&&(g?(c=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(u)))},f=(m,g,_)=>{u=m,l(m,g,_),t.onProgress&&t.onProgress(m,g,_)},d=(m,g,_)=>{!i&&t.onProgress&&t.onProgress(0,"0%",Wt.Processing);const y={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([m],[y],_,g&&s,s,i,i).then(()=>{!i&&t.onProgress&&t.onProgress(100,"100%",Wt.Processing),h(g,_)})};return(i?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,d.bind(this),f,a.bind(this))}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,i,s,o){const a=this.downloadSplatSceneToSplatBuffer(e,n,s,!1,void 0,t),l=Wu(a.abortHandler);return a.then(c=>(this.removeSplatSceneDownloadPromise(a),i(c,!0,!0).then(()=>{l.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(c=>{o&&o(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(a);const u=c instanceof Kl?c:new Error(`Viewer::addSplatScene -> Could not load file ${e}`);l.reject(u)}),this.addSplatSceneDownloadPromise(a),this.setSplatSceneDownloadAndBuildPromise(l.promise),l.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,i,s,o){let a=0,l=!1;const c=[],u=()=>{if(c.length>0&&!l&&!this.isDisposingOrDisposed()){l=!0;const m=c.shift();i(m.splatBuffer,m.firstBuild,m.finalBuild).then(()=>{l=!1,m.firstBuild?d.resolve():m.finalBuild&&(p.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),c.length>0&&yi(()=>u())})}},h=(m,g)=>{this.isDisposingOrDisposed()||(g||c.length===0||m.getSplatCount()>c[0].splatBuffer.getSplatCount())&&(c.push({splatBuffer:m,firstBuild:a===0,finalBuild:g}),a++,u())},f=this.downloadSplatSceneToSplatBuffer(e,n,s,!0,h,t),d=Wu(f.abortHandler),p=Wu();return this.addSplatSceneDownloadPromise(f),this.setSplatSceneDownloadAndBuildPromise(p.promise),f.then(()=>{this.removeSplatSceneDownloadPromise(f)}).catch(m=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(f);const g=m instanceof Kl?m:new Error("Viewer::addSplatScene -> Could not load one or more scenes");d.reject(g),o&&o(g)}),d.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const i=e.length,s=[];let o;t&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const a=(h,f,d,p)=>{s[h]=f;let m=0;for(let g=0;g<i;g++)m+=s[g]||0;m=m/i,d=`${m.toFixed(2)}%`,t&&p===Wt.Downloading&&this.loadingSpinner.setMessageForTask(o,m==100?"Download complete!":`Downloading: ${d}`),n&&n(m,d,p)},l=[],c=[];for(let h=0;h<e.length;h++){const f=e[h],d=f.format!==void 0&&f.format!==null?f.format:rg(f.path),p=this.downloadSplatSceneToSplatBuffer(f.path,f.splatAlphaRemovalThreshold,a.bind(this,h),!1,void 0,d);l.push(p),c.push(p.promise)}const u=new Wa((h,f)=>{Promise.all(c).then(d=>{t&&this.loadingSpinner.removeTask(o),n&&n(0,"0%",Wt.Processing),this.addSplatBuffers(d,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",Wt.Processing),this.clearSplatSceneDownloadAndBuildPromise(),h()})}).catch(d=>{t&&this.loadingSpinner.removeTask(o),this.clearSplatSceneDownloadAndBuildPromise();const p=d instanceof Kl?d:new Error("Viewer::addSplatScenes -> Could not load one or more splat scenes.");f(p)}).finally(()=>{this.removeSplatSceneDownloadPromise(u)})},h=>{for(let f of l)f.abort(h)});return this.addSplatSceneDownloadPromise(u),this.setSplatSceneDownloadAndBuildPromise(u),u}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,i=!1,s=void 0,o){const a=i?!1:this.optimizeSplatData;try{if(o===ji.Splat)return Id.loadFromURL(e,n,i,s,t,this.inMemoryCompressionLevel,a);if(o===ji.KSplat)return xf.loadFromURL(e,n,i,s);if(o===ji.Ply)return Rd.loadFromURL(e,n,i,s,t,this.inMemoryCompressionLevel,a,this.sphericalHarmonicsDegree)}catch(l){throw l instanceof wd?new Error("File type or server does not support progressive loading."):l}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===ji.Splat||e===ji.KSplat||e===ji.Ply}setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{const n=this.integerBasedSort?Int32Array:Float32Array,i=e.getSplatCount(),s=e.getMaxSplatCount();this.sortWorker=CR(s,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=o=>{if(o.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,o.data.splatRenderCount);else{const a=new Uint32Array(o.data.sortedIndexes.buffer,0,o.data.splatRenderCount);this.splatMesh.updateRenderIndexes(a,o.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=o.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(a=>{a()}),this.runAfterNextSort.length=0)}else if(o.data.sortCanceled)this.sortRunning=!1;else if(o.data.sortSetupPhase1Complete){this.logLevel>=_o.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(o.data.sortedIndexesBuffer,o.data.sortedIndexesOffset,s),this.sortWorkerIndexesToSort=new Uint32Array(o.data.indexesToSortBuffer,o.data.indexesToSortOffset,s),this.sortWorkerPrecomputedDistances=new n(o.data.precomputedDistancesBuffer,o.data.precomputedDistancesOffset,s),this.sortWorkerTransforms=new Float32Array(o.data.transformsBuffer,o.data.transformsOffset,et.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(s),this.sortWorkerPrecomputedDistances=new n(s),this.sortWorkerTransforms=new Float32Array(et.MaxScenes*16));for(let a=0;a<i;a++)this.sortWorkerIndexesToSort[a]=a;if(this.sortWorker.maxSplatCount=s,this.logLevel>=_o.Info){console.log("Sorting web worker ready.");const a=this.splatMesh.getSplatDataTextures(),l=a.covariances.size,c=a.centerColors.size;console.log("Covariances texture size: "+l.x+" x "+l.y),console.log("Centers/colors texture size: "+c.x+" x "+c.y)}t()}}})}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((i,s)=>{let o;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),o=this.loadingSpinner.addTask("Removing splat scene..."));const a=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(o))},l=u=>{a(),this.splatSceneRemovalPromise=null,u?s(u):i()},c=()=>this.isDisposingOrDisposed()?(l(),!0):!1;n=this.sortPromise||Promise.resolve(),n.then(()=>{if(c())return;const u=[],h=[],f=[];for(let d=0;d<this.splatMesh.scenes.length;d++){let p=!1;for(let m of e)if(m===d){p=!0;break}if(!p){const m=this.splatMesh.scenes[d];u.push(m.splatBuffer),h.push(this.splatMesh.sceneOptions[d]),f.push({position:m.position.clone(),quaternion:m.quaternion.clone(),scale:m.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=ga.Instant,this.createSplatMesh(),this.addSplatBuffers(u,h,!0,!1,!0).then(()=>{c()||(a(),this.splatMesh.scenes.forEach((d,p)=>{d.position.copy(f[p].position),d.quaternion.copy(f[p].quaternion),d.scale.copy(f[p].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(c()){this.splatRenderReady=!0;return}n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,l()})}))}).catch(d=>{l(d)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){const i=this.splatSceneDownloadPromises[n];t.push(i),e.push(i.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&xr.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}};le(xr,"setCameraPositionFromZoom",function(){const e=new I;return function(t,n,i){const s=1/(n.zoom*.001);e.copy(i.target).sub(t.position).normalize().multiplyScalar(s).negate(),t.position.copy(i.target).add(e)}}()),le(xr,"setCameraZoomFromPosition",function(){const e=new I;return function(t,n,i){const s=e.copy(i.target).sub(n.position).length();t.zoom=1/(s*.001)}}());let Af=xr;class yc extends as{constructor(e={}){super(),e.selfDrivenMode=!1,e.useBuiltInControls=!1,e.rootElement=null,e.ignoreDevicePixelRatio=!1,e.dropInMode=!0,e.camera=void 0,e.renderer=void 0,this.viewer=new Af(e),this.splatMesh=null,this.updateSplatMesh(),this.callbackMesh=yc.createCallbackMesh(),this.add(this.callbackMesh),this.callbackMesh.onBeforeRender=yc.onBeforeRender.bind(this,this.viewer),this.viewer.onSplatMeshChanged(()=>{this.updateSplatMesh()})}updateSplatMesh(){this.splatMesh!==this.viewer.splatMesh&&(this.splatMesh&&this.remove(this.splatMesh),this.splatMesh=this.viewer.splatMesh,this.add(this.viewer.splatMesh))}addSplatScene(e,t={}){return t.showLoadingUI!==!1&&(t.showLoadingUI=!0),this.viewer.addSplatScene(e,t)}addSplatScenes(e,t){return t!==!1&&(t=!0),this.viewer.addSplatScenes(e,t)}getSplatScene(e){return this.viewer.getSplatScene(e)}removeSplatScene(e,t=!0){return this.viewer.removeSplatScene(e,t)}removeSplatScenes(e,t=!0){return this.viewer.removeSplatScenes(e,t)}getSceneCount(){return this.viewer.getSceneCount()}setActiveSphericalHarmonicsDegrees(e){this.viewer.setActiveSphericalHarmonicsDegrees(e)}async dispose(){return await this.viewer.dispose()}static onBeforeRender(e,t,n,i){e.update(t,i)}static createCallbackMesh(){const e=new Da(1,8,8),t=new Lr;t.colorWrite=!1,t.depthWrite=!1;const n=new St(e,t);return n.frustumCulled=!1,n}}function LR(r,e){wn(e,!0),ci(()=>{const t=new yc({});t.addSplatScene(e.path,{showLoadingUI:!1,progressiveLoad:!0,rotation:[1,0,0,0],scale:[1,1,1]}),e.scene.add(t)}),Rn()}function BR(r,e){wn(e,!0);const t=Ai(),n=()=>an(gn,"$camera",t),i=()=>an(md,"$collisions",t);let s=ta(e,"canvas",7);const o=new b0;function a(c){o.setFromCamera(c,n()),i().forEach(u=>{o.intersectObject(u.object).length>0&&u.function()})}function l(){s().addEventListener("click",c=>{console.log(c.target.width,window.innerWidth,c),c.button===0&&a(new ve(c.clientX/c.target.offsetWidth*2-1,-(c.clientY/c.target.offsetHeight)*2+1))}),s().addEventListener("mousemove",c=>{const u=new ve;u.x=c.clientX/c.target.offsetWidth*2-1,u.y=-(c.clientY/c.target.offsetHeight)*2+1,o.setFromCamera(u,n());const h=i().some(f=>o.intersectObject(f.object).length>0);s().style.cursor=h?"pointer":"default"})}ci(()=>{l()}),Rn()}var UR=Mn('<p>Kombinerad kyl och frys.</p> <br> <img src="kyl-och-frys.png" width="300">',1);function OR(r,e){wn(e,!0);const t=Ai(),n=()=>an(Vc,"$collisionObjects",t),i=()=>an(md,"$collisions",t),s=a=>{var l=UR();mn(a,l)},o="kyl-och-frys_modal";ci(()=>{const a=new zr(1,-2,.2),l=new T0,c=new St(a,l);c.visible=!1,c.position.set(-4.9683281252906415,-.8,-.40659175148572274),c.rotation.y=1.3,e.scene.add(c),n().push(c),i().push({object:c,function:()=>document.getElementById(o).showModal()})}),no(r,{id:o,title:"Kyl och frys",content:s}),Rn()}var NR=Mn('<div class="absolute top-0 left-0"> </div>'),kR=Mn("<!> <!> <!>  <!> <!>  <!> <!> <!>",1);function zR(r,e){wn(e,!0);const t=Ai(),n=()=>an(gn,"$camera",t),i=()=>an(Qb,"$showFps",t);let s=[],o=0,a=ea(0);ci(()=>{e.renderer.setAnimationLoop(v=>{s.forEach(x=>x.update(v)),c(v),e.renderer.render(e.scene,n())})});function l(v){s.push(v)}function c(v){const x=v-o;o=v,nn(a,1e3/x)}var u=kR(),h=xa(u);Hg(h,i,v=>{var x=NR(),T=ht(x);Jl(()=>nc(T,`FPS: ${Qe(a)??""}`)),mn(v,x)});var f=mt(h,2);Ew(f,{get canvas(){return e.canvas},registerObject:l});var d=mt(f,2);lw(d,{get renderer(){return e.renderer}});var p=mt(d,2);l1(p,{get scene(){return e.scene},path:"https://3dscanning.blob.core.windows.net/boundaries/LivingRoom.fbx",visible:!1});var m=mt(p,2);LR(m,{get scene(){return e.scene},path:"https://3dscanning.blob.core.windows.net/splats/LivingRoom.splat"});var g=mt(m,2);u1(g,{get scene(){return e.scene}});var _=mt(g,2);OR(_,{get scene(){return e.scene}});var y=mt(_,2);BR(y,{get canvas(){return e.canvas}}),mn(r,u),Rn()}var HR=Mn('<!> <canvas class="svelte-528uny"></canvas>',1);function VR(r,e){wn(e,!0);const t=Ai(),n=()=>an(gn,"$camera",t);let i=ea(null),s=ea(null),o=ea(null),a=ea(!1);ci(()=>{const d=window.innerWidth,p=window.innerHeight,m=d/p,g=c(m);rs(gn,_i(new _n(g,m,.2,16))),ss(gn,zt(n).position.z=1,zt(n)),ss(gn,zt(n).rotation.order="YXZ",zt(n)),nn(s,_i(new x0)),Qe(s).background=new ze("white"),nn(o,_i(new v0({antialias:!1,canvas:Qe(i)}))),Qe(o).xr.enabled=!0,Qe(o).setSize(d,p),Qe(o).setPixelRatio(Math.min(window.devicePixelRatio,1)),window.addEventListener("resize",l,!1),nn(a,!0)});function l(){const d=window.innerWidth,p=window.innerHeight,m=d/p;ss(gn,zt(n).aspect=m,zt(n)),ss(gn,zt(n).fov=c(m),zt(n)),n().updateProjectionMatrix(),Qe(o).setSize(d,p)}function c(d){return 75*(d<1?1.3:1)}var u=HR(),h=xa(u);Hg(h,()=>Qe(a),d=>{zR(d,{get scene(){return Qe(s)},get renderer(){return Qe(o)},camera:gn,get canvas(){return Qe(i)}})});var f=mt(h,2);Vg(f,d=>nn(i,d),()=>Qe(i)),mn(r,u),Rn()}var GR=Mn("<main><!></main>");function WR(r){var e=GR(),t=ht(e);VR(t,{}),mn(r,e)}$v(WR,{target:document.getElementById("app")});
