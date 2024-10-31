var Xg=Object.defineProperty;var qg=(s,e,t)=>e in s?Xg(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var le=(s,e,t)=>qg(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="169",Hr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qg=0,xd=1,Yg=2,Bp=1,Kg=2,xi=3,oi=0,gn=1,Un=2,Xi=0,qi=1,vd=2,yd=3,Ad=4,Up=5,gr=100,jg=101,Zg=102,$g=103,Jg=104,e0=200,t0=201,n0=202,i0=203,Ao=204,So=205,r0=206,s0=207,o0=208,a0=209,l0=210,c0=211,u0=212,h0=213,d0=214,Qc=0,Yc=1,Kc=2,Rs=3,jc=4,Zc=5,$c=6,Jc=7,yl=0,f0=1,p0=2,Qi=0,m0=1,g0=2,_0=3,x0=4,v0=5,y0=6,A0=7,Sd="attached",S0="detached",Op=300,Is=301,Ps=302,Ka=303,eu=304,Al=306,Mo=1e3,Ei=1001,tu=1002,mn=1003,M0=1004,Jo=1005,jn=1006,Ol=1007,Ar=1008,ai=1009,Np=1010,kp=1011,To=1012,ch=1013,Nn=1014,kn=1015,Ws=1016,uh=1017,hh=1018,Ds=1020,zp=35902,Hp=1021,Vp=1022,on=1023,Gp=1024,Wp=1025,Er=1026,Fs=1027,Xp=1028,Sl=1029,dh=1030,fh=1031,As=1033,Oa=33776,Na=33777,ka=33778,za=33779,nu=35840,iu=35841,ru=35842,su=35843,ou=36196,au=37492,lu=37496,cu=37808,uu=37809,hu=37810,du=37811,fu=37812,pu=37813,mu=37814,gu=37815,_u=37816,xu=37817,vu=37818,yu=37819,Au=37820,Su=37821,Ha=36492,Mu=36494,Tu=36495,qp=36283,Eu=36284,Cu=36285,wu=36286,ja=2300,bu=2301,Nl=2302,Md=2400,Td=2401,Ed=2402,T0=2500,E0=3200,C0=3201,ph=0,w0=1,Hi="",yt="srgb",er="srgb-linear",mh="display-p3",Ml="display-p3-linear",Za="linear",gt="srgb",$a="rec709",Ja="p3",Gr=7680,Cd=519,b0=512,R0=513,I0=514,Qp=515,P0=516,D0=517,F0=518,L0=519,wd=35044,B0=35048,bd="300 es",Ci=2e3,el=2001;class tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rd=1234567;const lo=Math.PI/180,Ls=180/Math.PI;function nr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[s&255]+Jt[s>>8&255]+Jt[s>>16&255]+Jt[s>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Nt(s,e,t){return Math.max(e,Math.min(t,s))}function gh(s,e){return(s%e+e)%e}function U0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function O0(s,e,t){return s!==e?(t-s)/(e-s):0}function co(s,e,t){return(1-t)*s+t*e}function N0(s,e,t,n){return co(s,e,1-Math.exp(-t*n))}function k0(s,e=1){return e-Math.abs(gh(s,e*2)-e)}function z0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function H0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function V0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function G0(s,e){return s+Math.random()*(e-s)}function W0(s){return s*(.5-Math.random())}function X0(s){s!==void 0&&(Rd=s);let e=Rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function q0(s){return s*lo}function Q0(s){return s*Ls}function Y0(s){return(s&s-1)===0&&s!==0}function K0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function j0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Z0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ds(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Wt={DEG2RAD:lo,RAD2DEG:Ls,generateUUID:nr,clamp:Nt,euclideanModulo:gh,mapLinear:U0,inverseLerp:O0,lerp:co,damp:N0,pingpong:k0,smoothstep:z0,smootherstep:H0,randInt:V0,randFloat:G0,randFloatSpread:W0,seededRandom:X0,degToRad:q0,radToDeg:Q0,isPowerOfTwo:Y0,ceilPowerOfTwo:K0,floorPowerOfTwo:j0,setQuaternionFromProperEuler:Z0,normalize:un,denormalize:ds};class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,i,r,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],g=i[0],p=i[3],_=i[6],v=i[1],x=i[4],A=i[7],E=i[2],T=i[5],S=i[8];return r[0]=o*g+a*v+l*E,r[3]=o*p+a*x+l*T,r[6]=o*_+a*A+l*S,r[1]=c*g+u*v+h*E,r[4]=c*p+u*x+h*T,r[7]=c*_+u*A+h*S,r[2]=d*g+f*v+m*E,r[5]=d*p+f*x+m*T,r[8]=d*_+f*A+m*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kl.makeScale(e,t)),this}rotate(e){return this.premultiply(kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kl=new ze;function Yp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Eo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $0(){const s=Eo("canvas");return s.style.display="block",s}const Id={};function Va(s){s in Id||(Id[s]=!0,console.warn(s))}function J0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function e_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function t_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pd=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dd=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),js={[er]:{transfer:Za,primaries:$a,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[yt]:{transfer:gt,primaries:$a,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ml]:{transfer:Za,primaries:Ja,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Dd),fromReference:s=>s.applyMatrix3(Pd)},[mh]:{transfer:gt,primaries:Ja,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Dd),fromReference:s=>s.applyMatrix3(Pd).convertLinearToSRGB()}},n_=new Set([er,Ml]),Ke={enabled:!0,_workingColorSpace:er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!n_.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=js[e].toReference,i=js[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return js[s].primaries},getTransfer:function(s){return s===Hi?Za:js[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(js[e].luminanceCoefficients)}};function Ss(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Wr;class i_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wr===void 0&&(Wr=Eo("canvas")),Wr.width=e.width,Wr.height=e.height;const n=Wr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Eo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ss(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ss(t[n]/255)*255):t[n]=Ss(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let r_=0;class Kp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=nr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Hl(i[o].image)):r.push(Hl(i[o]))}else r=Hl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Hl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?i_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let s_=0;class $t extends tr{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=Ei,i=Ei,r=jn,o=Ar,a=on,l=ai,c=$t.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=nr(),this.name="",this.source=new Kp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Op)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mo:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case tu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mo:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case tu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Op;$t.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,i=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],g=l[2],p=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,A=(f+1)/2,E=(_+1)/2,T=(u+d)/4,S=(h+g)/4,C=(m+p)/4;return x>A&&x>E?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=S/n):A>E?A<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(A),n=T/i,r=C/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=S/r,i=C/r),this.set(n,i,r,t),this}let v=Math.sqrt((p-m)*(p-m)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(h-g)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class o_ extends tr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new $t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends o_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jp extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class a_ extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class it{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],m=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==m){let p=1-a;const _=l*d+c*f+u*m+h*g,v=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const E=Math.sqrt(x),T=Math.atan2(E,_*v);p=Math.sin(p*T)/E,a=Math.sin(a*T)/E}const A=a*v;if(l=l*p+d*A,c=c*p+f*A,u=u*p+m*A,h=h*p+g*A,p===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-a*f,e[t+2]=c*m+u*f+a*d-l*h,e[t+3]=u*m-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vl.copy(this).projectOnVector(e),this.sub(Vl)}reflect(e){return this.sub(Vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vl=new R,Fd=new it;class $n{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),ta.subVectors(this.max,Zs),Xr.subVectors(e.a,Zs),qr.subVectors(e.b,Zs),Qr.subVectors(e.c,Zs),Pi.subVectors(qr,Xr),Di.subVectors(Qr,qr),or.subVectors(Xr,Qr);let t=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-or.z,or.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,or.z,0,-or.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-or.y,or.x,0];return!Gl(t,Xr,qr,Qr,ta)||(t=[1,0,0,0,1,0,0,0,1],!Gl(t,Xr,qr,Qr,ta))?!1:(na.crossVectors(Pi,Di),t=[na.x,na.y,na.z],Gl(t,Xr,qr,Qr,ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new R,new R,new R,new R,new R,new R,new R,new R],Xn=new R,ea=new $n,Xr=new R,qr=new R,Qr=new R,Pi=new R,Di=new R,or=new R,Zs=new R,ta=new R,na=new R,ar=new R;function Gl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ar.fromArray(s,r);const a=i.x*Math.abs(ar.x)+i.y*Math.abs(ar.y)+i.z*Math.abs(ar.z),l=e.dot(ar),c=t.dot(ar),u=n.dot(ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const l_=new $n,$s=new R,Wl=new R;class Xs{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):l_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const t=$s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($s,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Wl)),this.expandByPoint($s.copy(e.center).sub(Wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new R,Xl=new R,ia=new R,Fi=new R,ql=new R,ra=new R,Ql=new R;let Wo=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xl.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(Xl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ia),a=Fi.dot(this.direction),l=-Fi.dot(ia),c=Fi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=r*u,h>=0)if(d>=-m)if(d<=m){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Xl).addScaledVector(ia,d),f}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const n=fi.dot(this.direction),i=fi.dot(fi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,i,r){ql.subVectors(t,e),ra.subVectors(n,e),Ql.crossVectors(ql,ra);let o=this.direction.dot(Ql),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const l=a*this.direction.dot(ra.crossVectors(Fi,ra));if(l<0)return null;const c=a*this.direction.dot(ql.cross(Fi));if(c<0||l+c>o)return null;const u=-a*Fi.dot(Ql);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class he{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,m,g,p){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,m,g,p)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,m,g,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=f,_[7]=m,_[11]=g,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Yr.setFromMatrixColumn(e,0).length(),r=1/Yr.setFromMatrixColumn(e,1).length(),o=1/Yr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,m=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,m=c*u,g=c*h;t[0]=d+g*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,m=c*u,g=c*h;t[0]=d-g*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,m=a*u,g=a*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c_,e,u_)}lookAt(e,t,n){const i=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Li.crossVectors(n,Tn),Li.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Li.crossVectors(n,Tn)),Li.normalize(),sa.crossVectors(Tn,Li),i[0]=Li.x,i[4]=sa.x,i[8]=Tn.x,i[1]=Li.y,i[5]=sa.y,i[9]=Tn.y,i[2]=Li.z,i[6]=sa.z,i[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],g=n[6],p=n[10],_=n[14],v=n[3],x=n[7],A=n[11],E=n[15],T=i[0],S=i[4],C=i[8],I=i[12],y=i[1],M=i[5],F=i[9],P=i[13],L=i[2],U=i[6],B=i[10],V=i[14],k=i[3],Z=i[7],te=i[11],se=i[15];return r[0]=o*T+a*y+l*L+c*k,r[4]=o*S+a*M+l*U+c*Z,r[8]=o*C+a*F+l*B+c*te,r[12]=o*I+a*P+l*V+c*se,r[1]=u*T+h*y+d*L+f*k,r[5]=u*S+h*M+d*U+f*Z,r[9]=u*C+h*F+d*B+f*te,r[13]=u*I+h*P+d*V+f*se,r[2]=m*T+g*y+p*L+_*k,r[6]=m*S+g*M+p*U+_*Z,r[10]=m*C+g*F+p*B+_*te,r[14]=m*I+g*P+p*V+_*se,r[3]=v*T+x*y+A*L+E*k,r[7]=v*S+x*M+A*U+E*Z,r[11]=v*C+x*F+A*B+E*te,r[15]=v*I+x*P+A*V+E*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],g=e[7],p=e[11],_=e[15];return m*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+g*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+p*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+_*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],g=e[13],p=e[14],_=e[15],v=h*p*c-g*d*c+g*l*f-a*p*f-h*l*_+a*d*_,x=m*d*c-u*p*c-m*l*f+o*p*f+u*l*_-o*d*_,A=u*g*c-m*h*c+m*a*f-o*g*f-u*a*_+o*h*_,E=m*h*l-u*g*l-m*a*d+o*g*d+u*a*p-o*h*p,T=t*v+n*x+i*A+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/T;return e[0]=v*S,e[1]=(g*d*r-h*p*r-g*i*f+n*p*f+h*i*_-n*d*_)*S,e[2]=(a*p*r-g*l*r+g*i*c-n*p*c-a*i*_+n*l*_)*S,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*S,e[4]=x*S,e[5]=(u*p*r-m*d*r+m*i*f-t*p*f-u*i*_+t*d*_)*S,e[6]=(m*l*r-o*p*r-m*i*c+t*p*c+o*i*_-t*l*_)*S,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*f+t*l*f)*S,e[8]=A*S,e[9]=(m*h*r-u*g*r-m*n*f+t*g*f+u*n*_-t*h*_)*S,e[10]=(o*g*r-m*a*r+m*n*c-t*g*c-o*n*_+t*a*_)*S,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*S,e[12]=E*S,e[13]=(u*g*i-m*h*i+m*n*d-t*g*d-u*n*p+t*h*p)*S,e[14]=(m*a*i-o*g*i-m*n*l+t*g*l+o*n*p-t*a*p)*S,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,m=r*h,g=o*u,p=o*h,_=a*h,v=l*c,x=l*u,A=l*h,E=n.x,T=n.y,S=n.z;return i[0]=(1-(g+_))*E,i[1]=(f+A)*E,i[2]=(m-x)*E,i[3]=0,i[4]=(f-A)*T,i[5]=(1-(d+_))*T,i[6]=(p+v)*T,i[7]=0,i[8]=(m+x)*S,i[9]=(p-v)*S,i[10]=(1-(d+g))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Yr.set(i[0],i[1],i[2]).length();const o=Yr.set(i[4],i[5],i[6]).length(),a=Yr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qn.copy(this);const c=1/r,u=1/o,h=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,t.setFromRotationMatrix(qn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Ci){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(a===Ci)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===el)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ci){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*c,f=(n+i)*u;let m,g;if(a===Ci)m=(o+r)*h,g=-2*h;else if(a===el)m=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yr=new R,qn=new he,c_=new R(0,0,0),u_=new R(1,1,1),Li=new R,sa=new R,Tn=new R,Ld=new he,Bd=new it;class kt{constructor(e=0,t=0,n=0,i=kt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ld,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kt.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h_=0;const Ud=new R,Kr=new it,pi=new he,oa=new R,Js=new R,d_=new R,f_=new it,Od=new R(1,0,0),Nd=new R(0,1,0),kd=new R(0,0,1),zd={type:"added"},p_={type:"removed"},jr={type:"childadded",child:null},Yl={type:"childremoved",child:null};class lt extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new R,t=new kt,n=new it,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new he},normalMatrix:{value:new ze}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Od,e)}rotateY(e){return this.rotateOnAxis(Nd,e)}rotateZ(e){return this.rotateOnAxis(kd,e)}translateOnAxis(e,t){return Ud.copy(e).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Od,e)}translateY(e){return this.translateOnAxis(Nd,e)}translateZ(e){return this.translateOnAxis(kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oa.copy(e):oa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Js,oa,this.up):pi.lookAt(oa,Js,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),Kr.setFromRotationMatrix(pi),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zd),jr.child=e,this.dispatchEvent(jr),jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p_),Yl.child=e,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zd),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,d_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,f_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}lt.DEFAULT_UP=new R(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new R,mi=new R,Kl=new R,gi=new R,Zr=new R,$r=new R,Hd=new R,jl=new R,Zl=new R,$l=new R,Jl=new je,ec=new je,tc=new je;class Zn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qn.subVectors(e,t),i.cross(Qn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Qn.subVectors(i,t),mi.subVectors(n,t),Kl.subVectors(e,t);const o=Qn.dot(Qn),a=Qn.dot(mi),l=Qn.dot(Kl),c=mi.dot(mi),u=mi.dot(Kl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Jl.setScalar(0),ec.setScalar(0),tc.setScalar(0),Jl.fromBufferAttribute(e,t),ec.fromBufferAttribute(e,n),tc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Jl,r.x),o.addScaledVector(ec,r.y),o.addScaledVector(tc,r.z),o}static isFrontFacing(e,t,n,i){return Qn.subVectors(n,t),mi.subVectors(e,t),Qn.cross(mi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Qn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Zn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Zr.subVectors(i,n),$r.subVectors(r,n),jl.subVectors(e,n);const l=Zr.dot(jl),c=$r.dot(jl);if(l<=0&&c<=0)return t.copy(n);Zl.subVectors(e,i);const u=Zr.dot(Zl),h=$r.dot(Zl);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Zr,o);$l.subVectors(e,r);const f=Zr.dot($l),m=$r.dot($l);if(m>=0&&f<=m)return t.copy(r);const g=f*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector($r,a);const p=u*m-f*h;if(p<=0&&h-u>=0&&f-m>=0)return Hd.subVectors(r,i),a=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(Hd,a);const _=1/(p+g+d);return o=g*_,a=d*_,t.copy(n).addScaledVector(Zr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},aa={h:0,s:0,l:0};function nc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=gh(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=nc(o,r,e+1/3),this.g=nc(o,r,e),this.b=nc(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=Zp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=zl(e.r),this.g=zl(e.g),this.b=zl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return Ke.fromWorkingColorSpace(en.copy(this),e),Math.round(Nt(en.r*255,0,255))*65536+Math.round(Nt(en.g*255,0,255))*256+Math.round(Nt(en.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(en.copy(this),t);const n=en.r,i=en.g,r=en.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=yt){Ke.fromWorkingColorSpace(en.copy(this),e);const t=en.r,n=en.g,i=en.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(aa);const n=co(Bi.h,aa.h,t),i=co(Bi.s,aa.s,t),r=co(Bi.l,aa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new He;He.NAMES=Zp;let m_=0;class Nr extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=qi,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=So,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ao&&(n.blendSrc=this.blendSrc),this.blendDst!==So&&(n.blendDst=this.blendDst),this.blendEquation!==gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class li extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kt,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ti=g_();function g_(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function __(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Nt(s,-65504,65504),Ti.floatView[0]=s;const e=Ti.uint32View[0],t=e>>23&511;return Ti.baseTable[t]+((e&8388607)>>Ti.shiftTable[t])}function x_(s){const e=s>>10;return Ti.uint32View[0]=Ti.mantissaTable[Ti.offsetTable[e]+(s&1023)]+Ti.exponentTable[e],Ti.floatView[0]}const Co={toHalfFloat:__,fromHalfFloat:x_},Pt=new R,la=new xe;class Vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wd,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ds(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wd&&(e.usage=this.usage),e}}class xh extends Vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $p extends Vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ft extends Vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let v_=0;const Ln=new he,ic=new lt,Jr=new R,En=new $n,eo=new $n,Gt=new R;class an extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yp(e)?$p:xh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return ic.lookAt(e),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(En.min,eo.min),En.expandByPoint(Gt),Gt.addVectors(En.max,eo.max),En.expandByPoint(Gt)):(En.expandByPoint(eo.min),En.expandByPoint(eo.max))}En.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(Jr.fromBufferAttribute(e,c),Gt.add(Jr)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new R,l[C]=new R;const c=new R,u=new R,h=new R,d=new xe,f=new xe,m=new xe,g=new R,p=new R;function _(C,I,y){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,I),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,y),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const M=1/(f.x*m.y-m.x*f.y);isFinite(M)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(M),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(M),a[C].add(g),a[I].add(g),a[y].add(g),l[C].add(p),l[I].add(p),l[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,I=v.length;C<I;++C){const y=v[C],M=y.start,F=y.count;for(let P=M,L=M+F;P<L;P+=3)_(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const x=new R,A=new R,E=new R,T=new R;function S(C){E.fromBufferAttribute(i,C),T.copy(E);const I=a[C];x.copy(I),x.sub(E.multiplyScalar(E.dot(I))).normalize(),A.crossVectors(T,I);const M=A.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,M)}for(let C=0,I=v.length;C<I;++C){const y=v[C],M=y.start,F=y.count;for(let P=M,L=M+F;P<L;P+=3)S(e.getX(P+0)),S(e.getX(P+1)),S(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let _=0;_<u;_++)d[m++]=c[f++]}return new Vn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vd=new he,lr=new Wo,ca=new Xs,Gd=new R,ua=new R,ha=new R,da=new R,rc=new R,fa=new R,Wd=new R,pa=new R;class ft extends lt{constructor(e=new an,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(rc.fromBufferAttribute(h,e),o?fa.addScaledVector(rc,u):fa.addScaledVector(rc.sub(t),u))}t.add(fa)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(r),lr.copy(e.ray).recast(e.near),!(ca.containsPoint(lr.origin)===!1&&(lr.intersectSphere(ca,Gd)===null||lr.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(Vd.copy(r).invert(),lr.copy(e.ray).applyMatrix4(Vd),!(n.boundingBox!==null&&lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,lr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const p=d[m],_=o[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let A=v,E=x;A<E;A+=3){const T=a.getX(A),S=a.getX(A+1),C=a.getX(A+2);i=ma(this,_,e,n,c,u,h,T,S,C),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=m,_=g;p<_;p+=3){const v=a.getX(p),x=a.getX(p+1),A=a.getX(p+2);i=ma(this,o,e,n,c,u,h,v,x,A),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const p=d[m],_=o[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let A=v,E=x;A<E;A+=3){const T=A,S=A+1,C=A+2;i=ma(this,_,e,n,c,u,h,T,S,C),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=m,_=g;p<_;p+=3){const v=p,x=p+1,A=p+2;i=ma(this,o,e,n,c,u,h,v,x,A),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function y_(s,e,t,n,i,r,o,a){let l;if(e.side===gn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===oi,a),l===null)return null;pa.copy(a),pa.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(pa);return c<t.near||c>t.far?null:{distance:c,point:pa.clone(),object:s}}function ma(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ua),s.getVertexPosition(l,ha),s.getVertexPosition(c,da);const u=y_(s,e,t,n,ua,ha,da,Wd);if(u){const h=new R;Zn.getBarycoord(Wd,ua,ha,da,h),i&&(u.uv=Zn.getInterpolatedAttribute(i,a,l,c,h,new xe)),r&&(u.uv1=Zn.getInterpolatedAttribute(r,a,l,c,h,new xe)),o&&(u.normal=Zn.getInterpolatedAttribute(o,a,l,c,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new R,materialIndex:0};Zn.getNormal(ua,ha,da,d.normal),u.face=d,u.barycoord=h}return u}class ir extends an{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(h,2));function m(g,p,_,v,x,A,E,T,S,C,I){const y=A/S,M=E/C,F=A/2,P=E/2,L=T/2,U=S+1,B=C+1;let V=0,k=0;const Z=new R;for(let te=0;te<B;te++){const se=te*M-P;for(let ve=0;ve<U;ve++){const _e=ve*y-F;Z[g]=_e*v,Z[p]=se*x,Z[_]=L,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[p]=0,Z[_]=T>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(ve/S),h.push(1-te/C),V+=1}}for(let te=0;te<C;te++)for(let se=0;se<S;se++){const ve=d+se+U*te,_e=d+se+U*(te+1),W=d+(se+1)+U*(te+1),Y=d+(se+1)+U*te;l.push(ve,_e,Y),l.push(_e,W,Y),k+=6}a.addGroup(f,k,I),f+=k,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function hn(s){const e={};for(let t=0;t<s.length;t++){const n=Bs(s[t]);for(const i in n)e[i]=n[i]}return e}function A_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Jp(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const S_={clone:Bs,merge:hn};var M_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M_,this.fragmentShader=T_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=A_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class em extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new R,Xd=new xe,qd=new xe;class rn extends em{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Xd,qd),t.subVectors(qd,Xd)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class E_ extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new rn(es,ts,e,t);i.layers=this.layers,this.add(i);const r=new rn(es,ts,e,t);r.layers=this.layers,this.add(r);const o=new rn(es,ts,e,t);o.layers=this.layers,this.add(o);const a=new rn(es,ts,e,t);a.layers=this.layers,this.add(a);const l=new rn(es,ts,e,t);l.layers=this.layers,this.add(l);const c=new rn(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===el)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class tm extends $t{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Is,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C_ extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new tm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ir(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Xi});r.uniforms.tEquirect.value=t;const o=new ft(i,r),a=t.minFilter;return t.minFilter===Ar&&(t.minFilter=jn),new E_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const sc=new R,w_=new R,b_=new ze;class ki{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=sc.subVectors(n,t).cross(w_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||b_.getNormalMatrix(e),i=this.coplanarPoint(sc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new Xs,ga=new R;class vh{constructor(e=new ki,t=new ki,n=new ki,i=new ki,r=new ki,o=new ki){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],m=i[9],g=i[10],p=i[11],_=i[12],v=i[13],x=i[14],A=i[15];if(n[0].setComponents(l-r,d-c,p-f,A-_).normalize(),n[1].setComponents(l+r,d+c,p+f,A+_).normalize(),n[2].setComponents(l+o,d+u,p+m,A+v).normalize(),n[3].setComponents(l-o,d-u,p-m,A-v).normalize(),n[4].setComponents(l-a,d-h,p-g,A-x).normalize(),t===Ci)n[5].setComponents(l+a,d+h,p+g,A+x).normalize();else if(t===el)n[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ga.x=i.normal.x>0?e.max.x:e.min.x,ga.y=i.normal.y>0?e.max.y:e.min.y,ga.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function R_(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],g=h[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const g=h[f];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Us extends an{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],m=[],g=[],p=[];for(let _=0;_<u;_++){const v=_*d-o;for(let x=0;x<c;x++){const A=x*h-r;m.push(A,-v,0),g.push(0,0,1),p.push(x/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){const x=v+c*_,A=v+c*(_+1),E=v+1+c*(_+1),T=v+1+c*_;f.push(x,A,T),f.push(A,E,T)}this.setIndex(f),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(g,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.widthSegments,e.heightSegments)}}var I_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P_=`#ifdef USE_ALPHAHASH
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
#endif`,D_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U_=`#ifdef USE_AOMAP
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
#endif`,O_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N_=`#ifdef USE_BATCHING
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
#endif`,k_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G_=`#ifdef USE_IRIDESCENCE
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
#endif`,W_=`#ifdef USE_BUMPMAP
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
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,J_=`#define PI 3.141592653589793
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
} // validated`,ex=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tx=`vec3 transformedNormal = objectNormal;
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
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",ax=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,px=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_x=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ax=`uniform bool receiveShadow;
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
#endif`,Sx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ex=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wx=`PhysicalMaterial material;
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
#endif`,bx=`struct PhysicalMaterial {
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
}`,Rx=`
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ox=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kx=`#if defined( USE_POINTS_UV )
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
#endif`,zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`#ifdef USE_MORPHTARGETS
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
#endif`,qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
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
#endif`,Jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pv=`float getShadowMask() {
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
}`,mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gv=`#ifdef USE_SKINNING
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
#endif`,_v=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xv=`#ifdef USE_SKINNING
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
#endif`,vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mv=`#ifdef USE_TRANSMISSION
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
#endif`,Tv=`#ifdef USE_TRANSMISSION
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iv=`uniform sampler2D t2D;
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
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`#include <common>
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
}`,Uv=`#if DEPTH_PACKING == 3200
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
}`,Ov=`#define DISTANCE
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
}`,Nv=`#define DISTANCE
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
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`uniform float scale;
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
}`,Vv=`uniform vec3 diffuse;
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
}`,Gv=`#include <common>
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
}`,Wv=`uniform vec3 diffuse;
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
}`,Xv=`#define LAMBERT
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
}`,qv=`#define LAMBERT
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
}`,Qv=`#define MATCAP
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
}`,Yv=`#define MATCAP
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
}`,Kv=`#define NORMAL
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
}`,jv=`#define NORMAL
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
}`,Zv=`#define PHONG
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
}`,$v=`#define PHONG
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
}`,Jv=`#define STANDARD
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
}`,ey=`#define STANDARD
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
}`,ty=`#define TOON
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
}`,ny=`#define TOON
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
}`,iy=`uniform float size;
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
}`,ry=`uniform vec3 diffuse;
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
}`,sy=`#include <common>
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
}`,oy=`uniform vec3 color;
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
}`,ay=`uniform float rotation;
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
}`,ly=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:I_,alphahash_pars_fragment:P_,alphamap_fragment:D_,alphamap_pars_fragment:F_,alphatest_fragment:L_,alphatest_pars_fragment:B_,aomap_fragment:U_,aomap_pars_fragment:O_,batching_pars_vertex:N_,batching_vertex:k_,begin_vertex:z_,beginnormal_vertex:H_,bsdfs:V_,iridescence_fragment:G_,bumpmap_pars_fragment:W_,clipping_planes_fragment:X_,clipping_planes_pars_fragment:q_,clipping_planes_pars_vertex:Q_,clipping_planes_vertex:Y_,color_fragment:K_,color_pars_fragment:j_,color_pars_vertex:Z_,color_vertex:$_,common:J_,cube_uv_reflection_fragment:ex,defaultnormal_vertex:tx,displacementmap_pars_vertex:nx,displacementmap_vertex:ix,emissivemap_fragment:rx,emissivemap_pars_fragment:sx,colorspace_fragment:ox,colorspace_pars_fragment:ax,envmap_fragment:lx,envmap_common_pars_fragment:cx,envmap_pars_fragment:ux,envmap_pars_vertex:hx,envmap_physical_pars_fragment:Sx,envmap_vertex:dx,fog_vertex:fx,fog_pars_vertex:px,fog_fragment:mx,fog_pars_fragment:gx,gradientmap_pars_fragment:_x,lightmap_pars_fragment:xx,lights_lambert_fragment:vx,lights_lambert_pars_fragment:yx,lights_pars_begin:Ax,lights_toon_fragment:Mx,lights_toon_pars_fragment:Tx,lights_phong_fragment:Ex,lights_phong_pars_fragment:Cx,lights_physical_fragment:wx,lights_physical_pars_fragment:bx,lights_fragment_begin:Rx,lights_fragment_maps:Ix,lights_fragment_end:Px,logdepthbuf_fragment:Dx,logdepthbuf_pars_fragment:Fx,logdepthbuf_pars_vertex:Lx,logdepthbuf_vertex:Bx,map_fragment:Ux,map_pars_fragment:Ox,map_particle_fragment:Nx,map_particle_pars_fragment:kx,metalnessmap_fragment:zx,metalnessmap_pars_fragment:Hx,morphinstance_vertex:Vx,morphcolor_vertex:Gx,morphnormal_vertex:Wx,morphtarget_pars_vertex:Xx,morphtarget_vertex:qx,normal_fragment_begin:Qx,normal_fragment_maps:Yx,normal_pars_fragment:Kx,normal_pars_vertex:jx,normal_vertex:Zx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:Jx,clearcoat_normal_fragment_maps:ev,clearcoat_pars_fragment:tv,iridescence_pars_fragment:nv,opaque_fragment:iv,packing:rv,premultiplied_alpha_fragment:sv,project_vertex:ov,dithering_fragment:av,dithering_pars_fragment:lv,roughnessmap_fragment:cv,roughnessmap_pars_fragment:uv,shadowmap_pars_fragment:hv,shadowmap_pars_vertex:dv,shadowmap_vertex:fv,shadowmask_pars_fragment:pv,skinbase_vertex:mv,skinning_pars_vertex:gv,skinning_vertex:_v,skinnormal_vertex:xv,specularmap_fragment:vv,specularmap_pars_fragment:yv,tonemapping_fragment:Av,tonemapping_pars_fragment:Sv,transmission_fragment:Mv,transmission_pars_fragment:Tv,uv_pars_fragment:Ev,uv_pars_vertex:Cv,uv_vertex:wv,worldpos_vertex:bv,background_vert:Rv,background_frag:Iv,backgroundCube_vert:Pv,backgroundCube_frag:Dv,cube_vert:Fv,cube_frag:Lv,depth_vert:Bv,depth_frag:Uv,distanceRGBA_vert:Ov,distanceRGBA_frag:Nv,equirect_vert:kv,equirect_frag:zv,linedashed_vert:Hv,linedashed_frag:Vv,meshbasic_vert:Gv,meshbasic_frag:Wv,meshlambert_vert:Xv,meshlambert_frag:qv,meshmatcap_vert:Qv,meshmatcap_frag:Yv,meshnormal_vert:Kv,meshnormal_frag:jv,meshphong_vert:Zv,meshphong_frag:$v,meshphysical_vert:Jv,meshphysical_frag:ey,meshtoon_vert:ty,meshtoon_frag:ny,points_vert:iy,points_frag:ry,shadow_vert:sy,shadow_frag:oy,sprite_vert:ay,sprite_frag:ly},pe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},ti={basic:{uniforms:hn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:hn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:hn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:hn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:hn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:hn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:hn([pe.points,pe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:hn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:hn([pe.common,pe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:hn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:hn([pe.sprite,pe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:hn([pe.common,pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:hn([pe.lights,pe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ti.physical={uniforms:hn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const _a={r:0,b:0,g:0},ur=new kt,cy=new he;function uy(s,e,t,n,i,r,o){const a=new He(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function m(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function g(v){let x=!1;const A=m(v);A===null?_(a,l):A&&A.isColor&&(_(A,1),x=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(v,x){const A=m(x);A&&(A.isCubeTexture||A.mapping===Al)?(u===void 0&&(u=new ft(new ir(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Bs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ur.copy(x.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cy.makeRotationFromEuler(ur)),u.material.toneMapped=Ke.getTransfer(A.colorSpace)!==gt,(h!==A||d!==A.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,f=s.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ft(new Us(2,2),new In({name:"BackgroundMaterial",uniforms:Bs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(A.colorSpace)!==gt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function _(v,x){v.getRGB(_a,Jp(s)),n.buffers.color.setClear(_a.r,_a.g,_a.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,_(a,l)},render:g,addToRenderList:p}}function hy(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(y,M,F,P,L){let U=!1;const B=h(P,F,M);r!==B&&(r=B,c(r.object)),U=f(y,P,F,L),U&&m(y,P,F,L),L!==null&&e.update(L,s.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,A(y,M,F,P),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,M,F){const P=F.wireframe===!0;let L=n[y.id];L===void 0&&(L={},n[y.id]=L);let U=L[M.id];U===void 0&&(U={},L[M.id]=U);let B=U[P];return B===void 0&&(B=d(l()),U[P]=B),B}function d(y){const M=[],F=[],P=[];for(let L=0;L<t;L++)M[L]=0,F[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:F,attributeDivisors:P,object:y,attributes:{},index:null}}function f(y,M,F,P){const L=r.attributes,U=M.attributes;let B=0;const V=F.getAttributes();for(const k in V)if(V[k].location>=0){const te=L[k];let se=U[k];if(se===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),te===void 0||te.attribute!==se||se&&te.data!==se.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function m(y,M,F,P){const L={},U=M.attributes;let B=0;const V=F.getAttributes();for(const k in V)if(V[k].location>=0){let te=U[k];te===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(te=y.instanceColor));const se={};se.attribute=te,te&&te.data&&(se.data=te.data),L[k]=se,B++}r.attributes=L,r.attributesNum=B,r.index=P}function g(){const y=r.newAttributes;for(let M=0,F=y.length;M<F;M++)y[M]=0}function p(y){_(y,0)}function _(y,M){const F=r.newAttributes,P=r.enabledAttributes,L=r.attributeDivisors;F[y]=1,P[y]===0&&(s.enableVertexAttribArray(y),P[y]=1),L[y]!==M&&(s.vertexAttribDivisor(y,M),L[y]=M)}function v(){const y=r.newAttributes,M=r.enabledAttributes;for(let F=0,P=M.length;F<P;F++)M[F]!==y[F]&&(s.disableVertexAttribArray(F),M[F]=0)}function x(y,M,F,P,L,U,B){B===!0?s.vertexAttribIPointer(y,M,F,L,U):s.vertexAttribPointer(y,M,F,P,L,U)}function A(y,M,F,P){g();const L=P.attributes,U=F.getAttributes(),B=M.defaultAttributeValues;for(const V in U){const k=U[V];if(k.location>=0){let Z=L[V];if(Z===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const te=Z.normalized,se=Z.itemSize,ve=e.get(Z);if(ve===void 0)continue;const _e=ve.buffer,W=ve.type,Y=ve.bytesPerElement,oe=W===s.INT||W===s.UNSIGNED_INT||Z.gpuType===ch;if(Z.isInterleavedBufferAttribute){const ie=Z.data,Te=ie.stride,me=Z.offset;if(ie.isInstancedInterleavedBuffer){for(let Fe=0;Fe<k.locationSize;Fe++)_(k.location+Fe,ie.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Fe=0;Fe<k.locationSize;Fe++)p(k.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Fe=0;Fe<k.locationSize;Fe++)x(k.location+Fe,se/k.locationSize,W,te,Te*Y,(me+se/k.locationSize*Fe)*Y,oe)}else{if(Z.isInstancedBufferAttribute){for(let ie=0;ie<k.locationSize;ie++)_(k.location+ie,Z.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ie=0;ie<k.locationSize;ie++)p(k.location+ie);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let ie=0;ie<k.locationSize;ie++)x(k.location+ie,se/k.locationSize,W,te,se*Y,se/k.locationSize*ie*Y,oe)}}else if(B!==void 0){const te=B[V];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(k.location,te);break;case 3:s.vertexAttrib3fv(k.location,te);break;case 4:s.vertexAttrib4fv(k.location,te);break;default:s.vertexAttrib1fv(k.location,te)}}}}v()}function E(){C();for(const y in n){const M=n[y];for(const F in M){const P=M[F];for(const L in P)u(P[L].object),delete P[L];delete M[F]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const M=n[y.id];for(const F in M){const P=M[F];for(const L in P)u(P[L].object),delete P[L];delete M[F]}delete n[y.id]}function S(y){for(const M in n){const F=n[M];if(F[y.id]===void 0)continue;const P=F[y.id];for(const L in P)u(P[L].object),delete P[L];delete F[y.id]}}function C(){I(),o=!0,r!==i&&(r=i,c(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:S,initAttributes:g,enableAttribute:p,disableUnusedAttributes:v}}function dy(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];for(let g=0;g<d.length;g++)t.update(m,n,d[g])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fy(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==on&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const C=S===Ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==ai&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==kn&&!C)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const S=e.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:A,vertexTextures:E,maxSamples:T}}function py(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ki,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,_=s.get(h);if(!i||m===null||m.length===0||r&&!p)r?u(null):c();else{const v=r?0:n,x=v*4;let A=_.clippingState||null;l.value=A,A=u(m,d,x,f);for(let E=0;E!==x;++E)A[E]=t[E];_.clippingState=A,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,m!==!0||p===null){const _=f+g*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,A=f;x!==g;++x,A+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(p,A),p[A+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function my(s){let e=new WeakMap;function t(o,a){return a===Ka?o.mapping=Is:a===eu&&(o.mapping=Ps),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ka||a===eu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new C_(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Tl extends em{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ps=4,Qd=[.125,.215,.35,.446,.526,.582],_r=20,oc=new Tl,Yd=new He;let ac=null,lc=0,cc=0,uc=!1;const pr=(1+Math.sqrt(5))/2,ns=1/pr,Kd=[new R(-pr,ns,0),new R(pr,ns,0),new R(-ns,0,pr),new R(ns,0,pr),new R(0,pr,-ns),new R(0,pr,ns),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class jd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ac=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ac,lc,cc),this._renderer.xr.enabled=uc,e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ac=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Ws,format:on,colorSpace:er,depthBuffer:!1},i=Zd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gy(r)),this._blurMaterial=_y(r,e,t)}return i}_compileMaterial(e){const t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,oc)}_sceneToCubeUV(e,t,n,i){const a=new rn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Yd),u.toneMapping=Qi,u.autoClear=!1;const f=new li({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),m=new ft(new ir,f);let g=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,g=!0):(f.color.copy(Yd),g=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):v===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;xa(i,v*x,_>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Is||e.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$d());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;xa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,oc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kd[(i-r-1)%Kd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ft(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*_r-1),g=r/m,p=isFinite(r)?1+Math.floor(u*g):_r;p>_r&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_r}`);const _=[];let v=0;for(let S=0;S<_r;++S){const C=S/g,I=Math.exp(-C*C/2);_.push(I),S===0?v+=I:S<p&&(v+=2*I)}for(let S=0;S<_.length;S++)_[S]=_[S]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const A=this._sizeLods[i],E=3*A*(i>x-ps?i-x+ps:0),T=4*(this._cubeSize-A);xa(t,E,T,3*A,2*A),l.setRenderTarget(t),l.render(h,oc)}}function gy(s){const e=[],t=[],n=[];let i=s;const r=s-ps+1+Qd.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ps?l=Qd[o-s+ps-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,g=3,p=2,_=1,v=new Float32Array(g*m*f),x=new Float32Array(p*m*f),A=new Float32Array(_*m*f);for(let T=0;T<f;T++){const S=T%3*2/3-1,C=T>2?0:-1,I=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];v.set(I,g*m*T),x.set(d,p*m*T);const y=[T,T,T,T,T,T];A.set(y,_*m*T)}const E=new an;E.setAttribute("position",new Vn(v,g)),E.setAttribute("uv",new Vn(x,p)),E.setAttribute("faceIndex",new Vn(A,_)),e.push(E),i>ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zd(s,e,t){const n=new Zi(s,e,t);return n.texture.mapping=Al,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function _y(s,e,t){const n=new Float32Array(_r),i=new R(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function $d(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Jd(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function yh(){return`

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
	`}function xy(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ka||l===eu,u=l===Is||l===Ps;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new jd(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new jd(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function vy(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Va("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yy(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const g=d.morphAttributes[m];for(let p=0,_=g.length;p<_;p++)e.remove(g[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const g=f[m];for(let p=0,_=g.length;p<_;p++)e.update(g[p],s.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,m=h.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let x=0,A=v.length;x<A;x+=3){const E=v[x+0],T=v[x+1],S=v[x+2];d.push(E,T,T,S,S,E)}}else if(m!==void 0){const v=m.array;g=m.version;for(let x=0,A=v.length/3-1;x<A;x+=3){const E=x+0,T=x+1,S=x+2;d.push(E,T,T,S,S,E)}}else return;const p=new(Yp(d)?$p:xh)(d,1);p.version=g;const _=r.get(h);_&&e.remove(_),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ay(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let p=0;for(let _=0;_<m;_++)p+=f[_];t.update(p,n,1)}function h(d,f,m,g){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d.length;_++)c(d[_]/o,f[_],g[_]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,m);let _=0;for(let v=0;v<m;v++)_+=f[v];for(let v=0;v<g.length;v++)t.update(_,n,g[v])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Sy(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function My(s,e,t){const n=new WeakMap,i=new je;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let A=0;m===!0&&(A=1),g===!0&&(A=2),p===!0&&(A=3);let E=a.attributes.position.count*A,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const S=new Float32Array(E*T*4*h),C=new jp(S,E,T,h);C.type=kn,C.needsUpdate=!0;const I=A*4;for(let M=0;M<h;M++){const F=_[M],P=v[M],L=x[M],U=E*T*4*M;for(let B=0;B<F.count;B++){const V=B*I;m===!0&&(i.fromBufferAttribute(F,B),S[U+V+0]=i.x,S[U+V+1]=i.y,S[U+V+2]=i.z,S[U+V+3]=0),g===!0&&(i.fromBufferAttribute(P,B),S[U+V+4]=i.x,S[U+V+5]=i.y,S[U+V+6]=i.z,S[U+V+7]=0),p===!0&&(i.fromBufferAttribute(L,B),S[U+V+8]=i.x,S[U+V+9]=i.y,S[U+V+10]=i.z,S[U+V+11]=L.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new xe(E,T)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ty(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Ah extends $t{constructor(e,t,n,i,r,o,a,l,c,u=Er){if(u!==Er&&u!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Er&&(n=Nn),n===void 0&&u===Fs&&(n=Ds),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const im=new $t,ef=new Ah(1,1),rm=new jp,sm=new a_,om=new tm,tf=[],nf=[],rf=new Float32Array(16),sf=new Float32Array(9),of=new Float32Array(4);function qs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=tf[i];if(r===void 0&&(r=new Float32Array(i),tf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function zt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function El(s,e){let t=nf[e];t===void 0&&(t=new Int32Array(e),nf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ey(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Cy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2fv(this.addr,e),Ht(t,e)}}function wy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;s.uniform3fv(this.addr,e),Ht(t,e)}}function by(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4fv(this.addr,e),Ht(t,e)}}function Ry(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;of.set(n),s.uniformMatrix2fv(this.addr,!1,of),Ht(t,n)}}function Iy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;sf.set(n),s.uniformMatrix3fv(this.addr,!1,sf),Ht(t,n)}}function Py(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;rf.set(n),s.uniformMatrix4fv(this.addr,!1,rf),Ht(t,n)}}function Dy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Fy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2iv(this.addr,e),Ht(t,e)}}function Ly(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3iv(this.addr,e),Ht(t,e)}}function By(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4iv(this.addr,e),Ht(t,e)}}function Uy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Oy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2uiv(this.addr,e),Ht(t,e)}}function Ny(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3uiv(this.addr,e),Ht(t,e)}}function ky(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4uiv(this.addr,e),Ht(t,e)}}function zy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ef.compareFunction=Qp,r=ef):r=im,t.setTexture2D(e||r,i)}function Hy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||sm,i)}function Vy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||om,i)}function Gy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||rm,i)}function Wy(s){switch(s){case 5126:return Ey;case 35664:return Cy;case 35665:return wy;case 35666:return by;case 35674:return Ry;case 35675:return Iy;case 35676:return Py;case 5124:case 35670:return Dy;case 35667:case 35671:return Fy;case 35668:case 35672:return Ly;case 35669:case 35673:return By;case 5125:return Uy;case 36294:return Oy;case 36295:return Ny;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Gy}}function Xy(s,e){s.uniform1fv(this.addr,e)}function qy(s,e){const t=qs(e,this.size,2);s.uniform2fv(this.addr,t)}function Qy(s,e){const t=qs(e,this.size,3);s.uniform3fv(this.addr,t)}function Yy(s,e){const t=qs(e,this.size,4);s.uniform4fv(this.addr,t)}function Ky(s,e){const t=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function jy(s,e){const t=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Zy(s,e){const t=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $y(s,e){s.uniform1iv(this.addr,e)}function Jy(s,e){s.uniform2iv(this.addr,e)}function eA(s,e){s.uniform3iv(this.addr,e)}function tA(s,e){s.uniform4iv(this.addr,e)}function nA(s,e){s.uniform1uiv(this.addr,e)}function iA(s,e){s.uniform2uiv(this.addr,e)}function rA(s,e){s.uniform3uiv(this.addr,e)}function sA(s,e){s.uniform4uiv(this.addr,e)}function oA(s,e,t){const n=this.cache,i=e.length,r=El(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||im,r[o])}function aA(s,e,t){const n=this.cache,i=e.length,r=El(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||sm,r[o])}function lA(s,e,t){const n=this.cache,i=e.length,r=El(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||om,r[o])}function cA(s,e,t){const n=this.cache,i=e.length,r=El(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||rm,r[o])}function uA(s){switch(s){case 5126:return Xy;case 35664:return qy;case 35665:return Qy;case 35666:return Yy;case 35674:return Ky;case 35675:return jy;case 35676:return Zy;case 5124:case 35670:return $y;case 35667:case 35671:return Jy;case 35668:case 35672:return eA;case 35669:case 35673:return tA;case 5125:return nA;case 36294:return iA;case 36295:return rA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return cA}}class hA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wy(t.type)}}class dA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uA(t.type)}}class fA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const hc=/(\w+)(\])?(\[|\.)?/g;function af(s,e){s.seq.push(e),s.map[e.id]=e}function pA(s,e,t){const n=s.name,i=n.length;for(hc.lastIndex=0;;){const r=hc.exec(n),o=hc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){af(t,c===void 0?new hA(a,s,e):new dA(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new fA(a),af(t,h)),t=h}}}class Ga{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);pA(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function lf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const mA=37297;let gA=0;function _A(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function xA(s){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(s);let n;switch(e===t?n="":e===Ja&&t===$a?n="LinearDisplayP3ToLinearSRGB":e===$a&&t===Ja&&(n="LinearSRGBToLinearDisplayP3"),s){case er:case Ml:return[n,"LinearTransferOETF"];case yt:case mh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function cf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+_A(s.getShaderSource(e),o)}else return i}function vA(s,e){const t=xA(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yA(s,e){let t;switch(e){case m0:t="Linear";break;case g0:t="Reinhard";break;case _0:t="Cineon";break;case x0:t="ACESFilmic";break;case y0:t="AgX";break;case A0:t="Neutral";break;case v0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const va=new R;function AA(){Ke.getLuminanceCoefficients(va);const s=va.x.toFixed(4),e=va.y.toFixed(4),t=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function MA(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function TA(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function so(s){return s!==""}function uf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(s){return s.replace(EA,wA)}const CA=new Map;function wA(s,e){let t=qe[e];if(t===void 0){const n=CA.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ru(t)}const bA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(s){return s.replace(bA,RA)}function RA(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ff(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function IA(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Bp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Kg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function PA(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case Ps:e="ENVMAP_TYPE_CUBE";break;case Al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DA(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function FA(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case yl:e="ENVMAP_BLENDING_MULTIPLY";break;case f0:e="ENVMAP_BLENDING_MIX";break;case p0:e="ENVMAP_BLENDING_ADD";break}return e}function LA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function BA(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=IA(t),c=PA(t),u=DA(t),h=FA(t),d=LA(t),f=SA(t),m=MA(r),g=i.createProgram();let p,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(so).join(`
`),p.length>0&&(p+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(so).join(`
`),_.length>0&&(_+=`
`)):(p=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),_=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?qe.tonemapping_pars_fragment:"",t.toneMapping!==Qi?yA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,vA("linearToOutputTexel",t.outputColorSpace),AA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),o=Ru(o),o=uf(o,t),o=hf(o,t),a=Ru(a),a=uf(a,t),a=hf(a,t),o=df(o),a=df(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=v+p+o,A=v+_+a,E=lf(i,i.VERTEX_SHADER,x),T=lf(i,i.FRAGMENT_SHADER,A);i.attachShader(g,E),i.attachShader(g,T),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function S(M){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(E).trim(),L=i.getShaderInfoLog(T).trim();let U=!0,B=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,E,T);else{const V=cf(i,E,"vertex"),k=cf(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+F+`
`+V+`
`+k)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(P===""||L==="")&&(B=!1);B&&(M.diagnostics={runnable:U,programLog:F,vertexShader:{log:P,prefix:p},fragmentShader:{log:L,prefix:_}})}i.deleteShader(E),i.deleteShader(T),C=new Ga(i,g),I=TA(i,g)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let I;this.getAttributes=function(){return I===void 0&&S(this),I};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,mA)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=T,this}let UA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new NA(e),t.set(e,n)),n}}class NA{constructor(e){this.id=UA++,this.code=e,this.usedTimes=0}}function kA(s,e,t,n,i,r,o){const a=new _h,l=new OA,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,M,F,P,L){const U=P.fog,B=L.geometry,V=y.isMeshStandardMaterial?P.environment:null,k=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),Z=k&&k.mapping===Al?k.image.height:null,te=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const se=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ve=se!==void 0?se.length:0;let _e=0;B.morphAttributes.position!==void 0&&(_e=1),B.morphAttributes.normal!==void 0&&(_e=2),B.morphAttributes.color!==void 0&&(_e=3);let W,Y,oe,ie;if(te){const pn=ti[te];W=pn.vertexShader,Y=pn.fragmentShader}else W=y.vertexShader,Y=y.fragmentShader,l.update(y),oe=l.getVertexShaderID(y),ie=l.getFragmentShaderID(y);const Te=s.getRenderTarget(),me=L.isInstancedMesh===!0,Fe=L.isBatchedMesh===!0,ke=!!y.map,Ne=!!y.matcap,O=!!k,et=!!y.aoMap,Ee=!!y.lightMap,We=!!y.bumpMap,Le=!!y.normalMap,Xe=!!y.displacementMap,Ue=!!y.emissiveMap,D=!!y.metalnessMap,w=!!y.roughnessMap,X=y.anisotropy>0,J=y.clearcoat>0,re=y.dispersion>0,ee=y.iridescence>0,Re=y.sheen>0,fe=y.transmission>0,Me=X&&!!y.anisotropyMap,Je=J&&!!y.clearcoatMap,ae=J&&!!y.clearcoatNormalMap,Se=J&&!!y.clearcoatRoughnessMap,N=ee&&!!y.iridescenceMap,ne=ee&&!!y.iridescenceThicknessMap,ce=Re&&!!y.sheenColorMap,Oe=Re&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,tt=!!y.specularColorMap,z=!!y.specularIntensityMap,Ae=fe&&!!y.transmissionMap,K=fe&&!!y.thicknessMap,$=!!y.gradientMap,de=!!y.alphaMap,ge=y.alphaTest>0,Qe=!!y.alphaHash,dt=!!y.extensions;let Lt=Qi;y.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Lt=s.toneMapping);const rt={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:Y,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:ie,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Fe,batchingColor:Fe&&L._colorsTexture!==null,instancing:me,instancingColor:me&&L.instanceColor!==null,instancingMorph:me&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:er,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:Ne,envMap:O,envMapMode:O&&k.mapping,envMapCubeUVHeight:Z,aoMap:et,lightMap:Ee,bumpMap:We,normalMap:Le,displacementMap:f&&Xe,emissiveMap:Ue,normalMapObjectSpace:Le&&y.normalMapType===w0,normalMapTangentSpace:Le&&y.normalMapType===ph,metalnessMap:D,roughnessMap:w,anisotropy:X,anisotropyMap:Me,clearcoat:J,clearcoatMap:Je,clearcoatNormalMap:ae,clearcoatRoughnessMap:Se,dispersion:re,iridescence:ee,iridescenceMap:N,iridescenceThicknessMap:ne,sheen:Re,sheenColorMap:ce,sheenRoughnessMap:Oe,specularMap:Pe,specularColorMap:tt,specularIntensityMap:z,transmission:fe,transmissionMap:Ae,thicknessMap:K,gradientMap:$,opaque:y.transparent===!1&&y.blending===qi&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:ge,alphaHash:Qe,combine:y.combine,mapUv:ke&&p(y.map.channel),aoMapUv:et&&p(y.aoMap.channel),lightMapUv:Ee&&p(y.lightMap.channel),bumpMapUv:We&&p(y.bumpMap.channel),normalMapUv:Le&&p(y.normalMap.channel),displacementMapUv:Xe&&p(y.displacementMap.channel),emissiveMapUv:Ue&&p(y.emissiveMap.channel),metalnessMapUv:D&&p(y.metalnessMap.channel),roughnessMapUv:w&&p(y.roughnessMap.channel),anisotropyMapUv:Me&&p(y.anisotropyMap.channel),clearcoatMapUv:Je&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:N&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&p(y.sheenRoughnessMap.channel),specularMapUv:Pe&&p(y.specularMap.channel),specularColorMapUv:tt&&p(y.specularColorMap.channel),specularIntensityMapUv:z&&p(y.specularIntensityMap.channel),transmissionMapUv:Ae&&p(y.transmissionMap.channel),thicknessMapUv:K&&p(y.thicknessMap.channel),alphaMapUv:de&&p(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Le||X),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(ke||de),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:_e,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Lt,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Un,flipSided:y.side===gn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:dt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&y.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function v(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)M.push(F),M.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(x(M,y),A(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function x(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function A(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),y.push(a.mask)}function E(y){const M=g[y.type];let F;if(M){const P=ti[M];F=S_.clone(P.uniforms)}else F=y.uniforms;return F}function T(y,M){let F;for(let P=0,L=u.length;P<L;P++){const U=u[P];if(U.cacheKey===M){F=U,++F.usedTimes;break}}return F===void 0&&(F=new BA(s,M,y,r),u.push(F)),F}function S(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function I(){l.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:E,acquireProgram:T,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:I}}function zA(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function HA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function pf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function mf(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,m,g,p){let _=s[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:g,group:p},s[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=f,_.groupOrder=m,_.renderOrder=h.renderOrder,_.z=g,_.group=p),e++,_}function a(h,d,f,m,g,p){const _=o(h,d,f,m,g,p);f.transmission>0?n.push(_):f.transparent===!0?i.push(_):t.push(_)}function l(h,d,f,m,g,p){const _=o(h,d,f,m,g,p);f.transmission>0?n.unshift(_):f.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||HA),n.length>1&&n.sort(d||pf),i.length>1&&i.sort(d||pf)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function VA(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new mf,s.set(n,[o])):i>=r.length?(o=new mf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function GA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new He};break;case"SpotLight":t={position:new R,direction:new R,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function WA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let XA=0;function qA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function QA(s){const e=new GA,t=WA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new he,o=new he;function a(c){let u=0,h=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,m=0,g=0,p=0,_=0,v=0,x=0,A=0,E=0,T=0,S=0;c.sort(qA);for(let I=0,y=c.length;I<y;I++){const M=c[I],F=M.color,P=M.intensity,L=M.distance,U=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=F.r*P,h+=F.g*P,d+=F.b*P;else if(M.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(M.sh.coefficients[B],P);S++}else if(M.isDirectionalLight){const B=e.get(M);if(B.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const V=M.shadow,k=t.get(M);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=M.shadow.matrix,v++}n.directional[f]=B,f++}else if(M.isSpotLight){const B=e.get(M);B.position.setFromMatrixPosition(M.matrixWorld),B.color.copy(F).multiplyScalar(P),B.distance=L,B.coneCos=Math.cos(M.angle),B.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),B.decay=M.decay,n.spot[g]=B;const V=M.shadow;if(M.map&&(n.spotLightMap[E]=M.map,E++,V.updateMatrices(M),M.castShadow&&T++),n.spotLightMatrix[g]=V.matrix,M.castShadow){const k=t.get(M);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=U,A++}g++}else if(M.isRectAreaLight){const B=e.get(M);B.color.copy(F).multiplyScalar(P),B.halfWidth.set(M.width*.5,0,0),B.halfHeight.set(0,M.height*.5,0),n.rectArea[p]=B,p++}else if(M.isPointLight){const B=e.get(M);if(B.color.copy(M.color).multiplyScalar(M.intensity),B.distance=M.distance,B.decay=M.decay,M.castShadow){const V=M.shadow,k=t.get(M);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=M.shadow.matrix,x++}n.point[m]=B,m++}else if(M.isHemisphereLight){const B=e.get(M);B.skyColor.copy(M.color).multiplyScalar(P),B.groundColor.copy(M.groundColor).multiplyScalar(P),n.hemi[_]=B,_++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==g||C.rectAreaLength!==p||C.hemiLength!==_||C.numDirectionalShadows!==v||C.numPointShadows!==x||C.numSpotShadows!==A||C.numSpotMaps!==E||C.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=p,n.point.length=m,n.hemi.length=_,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=A+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=S,C.directionalLength=f,C.pointLength=m,C.spotLength=g,C.rectAreaLength=p,C.hemiLength=_,C.numDirectionalShadows=v,C.numPointShadows=x,C.numSpotShadows=A,C.numSpotMaps=E,C.numLightProbes=S,n.version=XA++)}function l(c,u){let h=0,d=0,f=0,m=0,g=0;const p=u.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const x=c[_];if(x.isDirectionalLight){const A=n.directional[h];A.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(p),h++}else if(x.isSpotLight){const A=n.spot[f];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const A=n.rectArea[m];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const A=n.hemi[g];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function gf(s){const e=new QA(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function YA(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new gf(s),e.set(i,[a])):r>=o.length?(a=new gf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class KA extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jA extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$A=`uniform sampler2D shadow_pass;
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
}`;function JA(s,e,t){let n=new vh;const i=new xe,r=new xe,o=new je,a=new KA({depthPacking:C0}),l=new jA,c={},u=t.maxTextureSize,h={[oi]:gn,[gn]:oi,[Un]:Un},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:ZA,fragmentShader:$A}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new an;m.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ft(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bp;let _=this.type;this.render=function(T,S,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const I=s.getRenderTarget(),y=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Xi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const P=_!==xi&&this.type===xi,L=_===xi&&this.type!==xi;for(let U=0,B=T.length;U<B;U++){const V=T[U],k=V.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const Z=k.getFrameExtents();if(i.multiply(Z),r.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Z.x),i.x=r.x*Z.x,k.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Z.y),i.y=r.y*Z.y,k.mapSize.y=r.y)),k.map===null||P===!0||L===!0){const se=this.type!==xi?{minFilter:mn,magFilter:mn}:{};k.map!==null&&k.map.dispose(),k.map=new Zi(i.x,i.y,se),k.map.texture.name=V.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const te=k.getViewportCount();for(let se=0;se<te;se++){const ve=k.getViewport(se);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),F.viewport(o),k.updateMatrices(V,se),n=k.getFrustum(),A(S,C,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===xi&&v(k,C),k.needsUpdate=!1}_=this.type,p.needsUpdate=!1,s.setRenderTarget(I,y,M)};function v(T,S){const C=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Zi(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(S,null,C,d,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(S,null,C,f,g,null)}function x(T,S,C,I){let y=null;const M=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(M!==void 0)y=M;else if(y=C.isPointLight===!0?l:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const F=y.uuid,P=S.uuid;let L=c[F];L===void 0&&(L={},c[F]=L);let U=L[P];U===void 0&&(U=y.clone(),L[P]=U,S.addEventListener("dispose",E)),y=U}if(y.visible=S.visible,y.wireframe=S.wireframe,I===xi?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:h[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=s.properties.get(y);F.light=C}return y}function A(T,S,C,I,y){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===xi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const P=e.update(T),L=T.material;if(Array.isArray(L)){const U=P.groups;for(let B=0,V=U.length;B<V;B++){const k=U[B],Z=L[k.materialIndex];if(Z&&Z.visible){const te=x(T,Z,I,y);T.onBeforeShadow(s,T,S,C,P,te,k),s.renderBufferDirect(C,null,P,te,T,k),T.onAfterShadow(s,T,S,C,P,te,k)}}}else if(L.visible){const U=x(T,L,I,y);T.onBeforeShadow(s,T,S,C,P,U,null),s.renderBufferDirect(C,null,P,U,T,null),T.onAfterShadow(s,T,S,C,P,U,null)}}const F=T.children;for(let P=0,L=F.length;P<L;P++)A(F[P],S,C,I,y)}function E(T){T.target.removeEventListener("dispose",E);for(const C in c){const I=c[C],y=T.target.uuid;y in I&&(I[y].dispose(),delete I[y])}}}const eS={[Qc]:Yc,[Kc]:$c,[jc]:Jc,[Rs]:Zc,[Yc]:Qc,[$c]:Kc,[Jc]:jc,[Zc]:Rs};function tS(s){function e(){let z=!1;const Ae=new je;let K=null;const $=new je(0,0,0,0);return{setMask:function(de){K!==de&&!z&&(s.colorMask(de,de,de,de),K=de)},setLocked:function(de){z=de},setClear:function(de,ge,Qe,dt,Lt){Lt===!0&&(de*=dt,ge*=dt,Qe*=dt),Ae.set(de,ge,Qe,dt),$.equals(Ae)===!1&&(s.clearColor(de,ge,Qe,dt),$.copy(Ae))},reset:function(){z=!1,K=null,$.set(-1,0,0,0)}}}function t(){let z=!1,Ae=!1,K=null,$=null,de=null;return{setReversed:function(ge){Ae=ge},setTest:function(ge){ge?oe(s.DEPTH_TEST):ie(s.DEPTH_TEST)},setMask:function(ge){K!==ge&&!z&&(s.depthMask(ge),K=ge)},setFunc:function(ge){if(Ae&&(ge=eS[ge]),$!==ge){switch(ge){case Qc:s.depthFunc(s.NEVER);break;case Yc:s.depthFunc(s.ALWAYS);break;case Kc:s.depthFunc(s.LESS);break;case Rs:s.depthFunc(s.LEQUAL);break;case jc:s.depthFunc(s.EQUAL);break;case Zc:s.depthFunc(s.GEQUAL);break;case $c:s.depthFunc(s.GREATER);break;case Jc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=ge}},setLocked:function(ge){z=ge},setClear:function(ge){de!==ge&&(s.clearDepth(ge),de=ge)},reset:function(){z=!1,K=null,$=null,de=null}}}function n(){let z=!1,Ae=null,K=null,$=null,de=null,ge=null,Qe=null,dt=null,Lt=null;return{setTest:function(rt){z||(rt?oe(s.STENCIL_TEST):ie(s.STENCIL_TEST))},setMask:function(rt){Ae!==rt&&!z&&(s.stencilMask(rt),Ae=rt)},setFunc:function(rt,pn,hi){(K!==rt||$!==pn||de!==hi)&&(s.stencilFunc(rt,pn,hi),K=rt,$=pn,de=hi)},setOp:function(rt,pn,hi){(ge!==rt||Qe!==pn||dt!==hi)&&(s.stencilOp(rt,pn,hi),ge=rt,Qe=pn,dt=hi)},setLocked:function(rt){z=rt},setClear:function(rt){Lt!==rt&&(s.clearStencil(rt),Lt=rt)},reset:function(){z=!1,Ae=null,K=null,$=null,de=null,ge=null,Qe=null,dt=null,Lt=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,m=!1,g=null,p=null,_=null,v=null,x=null,A=null,E=null,T=new He(0,0,0),S=0,C=!1,I=null,y=null,M=null,F=null,P=null;const L=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,B=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=B>=1):V.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=B>=2);let k=null,Z={};const te=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),ve=new je().fromArray(te),_e=new je().fromArray(se);function W(z,Ae,K,$){const de=new Uint8Array(4),ge=s.createTexture();s.bindTexture(z,ge),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<K;Qe++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,de):s.texImage2D(Ae+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,de);return ge}const Y={};Y[s.TEXTURE_2D]=W(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=W(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=W(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=W(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),oe(s.DEPTH_TEST),r.setFunc(Rs),Ee(!1),We(xd),oe(s.CULL_FACE),O(Xi);function oe(z){c[z]!==!0&&(s.enable(z),c[z]=!0)}function ie(z){c[z]!==!1&&(s.disable(z),c[z]=!1)}function Te(z,Ae){return u[z]!==Ae?(s.bindFramebuffer(z,Ae),u[z]=Ae,z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Ae),z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function me(z,Ae){let K=d,$=!1;if(z){K=h.get(Ae),K===void 0&&(K=[],h.set(Ae,K));const de=z.textures;if(K.length!==de.length||K[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,Qe=de.length;ge<Qe;ge++)K[ge]=s.COLOR_ATTACHMENT0+ge;K.length=de.length,$=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,$=!0);$&&s.drawBuffers(K)}function Fe(z){return f!==z?(s.useProgram(z),f=z,!0):!1}const ke={[gr]:s.FUNC_ADD,[jg]:s.FUNC_SUBTRACT,[Zg]:s.FUNC_REVERSE_SUBTRACT};ke[$g]=s.MIN,ke[Jg]=s.MAX;const Ne={[e0]:s.ZERO,[t0]:s.ONE,[n0]:s.SRC_COLOR,[Ao]:s.SRC_ALPHA,[l0]:s.SRC_ALPHA_SATURATE,[o0]:s.DST_COLOR,[r0]:s.DST_ALPHA,[i0]:s.ONE_MINUS_SRC_COLOR,[So]:s.ONE_MINUS_SRC_ALPHA,[a0]:s.ONE_MINUS_DST_COLOR,[s0]:s.ONE_MINUS_DST_ALPHA,[c0]:s.CONSTANT_COLOR,[u0]:s.ONE_MINUS_CONSTANT_COLOR,[h0]:s.CONSTANT_ALPHA,[d0]:s.ONE_MINUS_CONSTANT_ALPHA};function O(z,Ae,K,$,de,ge,Qe,dt,Lt,rt){if(z===Xi){m===!0&&(ie(s.BLEND),m=!1);return}if(m===!1&&(oe(s.BLEND),m=!0),z!==Up){if(z!==g||rt!==C){if((p!==gr||x!==gr)&&(s.blendEquation(s.FUNC_ADD),p=gr,x=gr),rt)switch(z){case qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vd:s.blendFunc(s.ONE,s.ONE);break;case yd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ad:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case yd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ad:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}_=null,v=null,A=null,E=null,T.set(0,0,0),S=0,g=z,C=rt}return}de=de||Ae,ge=ge||K,Qe=Qe||$,(Ae!==p||de!==x)&&(s.blendEquationSeparate(ke[Ae],ke[de]),p=Ae,x=de),(K!==_||$!==v||ge!==A||Qe!==E)&&(s.blendFuncSeparate(Ne[K],Ne[$],Ne[ge],Ne[Qe]),_=K,v=$,A=ge,E=Qe),(dt.equals(T)===!1||Lt!==S)&&(s.blendColor(dt.r,dt.g,dt.b,Lt),T.copy(dt),S=Lt),g=z,C=!1}function et(z,Ae){z.side===Un?ie(s.CULL_FACE):oe(s.CULL_FACE);let K=z.side===gn;Ae&&(K=!K),Ee(K),z.blending===qi&&z.transparent===!1?O(Xi):O(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),i.setMask(z.colorWrite);const $=z.stencilWrite;o.setTest($),$&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Xe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(z){I!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),I=z)}function We(z){z!==Qg?(oe(s.CULL_FACE),z!==y&&(z===xd?s.cullFace(s.BACK):z===Yg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ie(s.CULL_FACE),y=z}function Le(z){z!==M&&(U&&s.lineWidth(z),M=z)}function Xe(z,Ae,K){z?(oe(s.POLYGON_OFFSET_FILL),(F!==Ae||P!==K)&&(s.polygonOffset(Ae,K),F=Ae,P=K)):ie(s.POLYGON_OFFSET_FILL)}function Ue(z){z?oe(s.SCISSOR_TEST):ie(s.SCISSOR_TEST)}function D(z){z===void 0&&(z=s.TEXTURE0+L-1),k!==z&&(s.activeTexture(z),k=z)}function w(z,Ae,K){K===void 0&&(k===null?K=s.TEXTURE0+L-1:K=k);let $=Z[K];$===void 0&&($={type:void 0,texture:void 0},Z[K]=$),($.type!==z||$.texture!==Ae)&&(k!==K&&(s.activeTexture(K),k=K),s.bindTexture(z,Ae||Y[z]),$.type=z,$.texture=Ae)}function X(){const z=Z[k];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Je(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function N(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(z){ve.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),ve.copy(z))}function ce(z){_e.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),_e.copy(z))}function Oe(z,Ae){let K=l.get(Ae);K===void 0&&(K=new WeakMap,l.set(Ae,K));let $=K.get(z);$===void 0&&($=s.getUniformBlockIndex(Ae,z.name),K.set(z,$))}function Pe(z,Ae){const $=l.get(Ae).get(z);a.get(Ae)!==$&&(s.uniformBlockBinding(Ae,$,z.__bindingPointIndex),a.set(Ae,$))}function tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},k=null,Z={},u={},h=new WeakMap,d=[],f=null,m=!1,g=null,p=null,_=null,v=null,x=null,A=null,E=null,T=new He(0,0,0),S=0,C=!1,I=null,y=null,M=null,F=null,P=null,ve.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:oe,disable:ie,bindFramebuffer:Te,drawBuffers:me,useProgram:Fe,setBlending:O,setMaterial:et,setFlipSided:Ee,setCullFace:We,setLineWidth:Le,setPolygonOffset:Xe,setScissorTest:Ue,activeTexture:D,bindTexture:w,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:re,texImage2D:Se,texImage3D:N,updateUBOMapping:Oe,uniformBlockBinding:Pe,texStorage2D:Je,texStorage3D:ae,texSubImage2D:ee,texSubImage3D:Re,compressedTexSubImage2D:fe,compressedTexSubImage3D:Me,scissor:ne,viewport:ce,reset:tt}}function _f(s,e,t,n){const i=nS(n);switch(t){case Hp:return s*e;case Gp:return s*e;case Wp:return s*e*2;case Xp:return s*e/i.components*i.byteLength;case Sl:return s*e/i.components*i.byteLength;case dh:return s*e*2/i.components*i.byteLength;case fh:return s*e*2/i.components*i.byteLength;case Vp:return s*e*3/i.components*i.byteLength;case on:return s*e*4/i.components*i.byteLength;case As:return s*e*4/i.components*i.byteLength;case Oa:case Na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ka:case za:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case iu:case su:return Math.max(s,16)*Math.max(e,8)/4;case nu:case ru:return Math.max(s,8)*Math.max(e,8)/2;case ou:case au:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case du:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case fu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case pu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case mu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case gu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case _u:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case vu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Au:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Su:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ha:case Mu:case Tu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case qp:case Eu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Cu:case wu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nS(s){switch(s){case ai:case Np:return{byteLength:1,components:1};case To:case kp:case Ws:return{byteLength:2,components:1};case uh:case hh:return{byteLength:2,components:4};case Nn:case ch:case kn:return{byteLength:4,components:1};case zp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function iS(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,w){return f?new OffscreenCanvas(D,w):Eo("canvas")}function g(D,w,X){let J=1;const re=Ue(D);if((re.width>X||re.height>X)&&(J=X/Math.max(re.width,re.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ee=Math.floor(J*re.width),Re=Math.floor(J*re.height);h===void 0&&(h=m(ee,Re));const fe=w?m(ee,Re):h;return fe.width=ee,fe.height=Re,fe.getContext("2d").drawImage(D,0,0,ee,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Re+")."),fe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),D;return D}function p(D){return D.generateMipmaps&&D.minFilter!==mn&&D.minFilter!==jn}function _(D){s.generateMipmap(D)}function v(D,w,X,J,re=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ee=w;if(w===s.RED&&(X===s.FLOAT&&(ee=s.R32F),X===s.HALF_FLOAT&&(ee=s.R16F),X===s.UNSIGNED_BYTE&&(ee=s.R8)),w===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(ee=s.R8UI),X===s.UNSIGNED_SHORT&&(ee=s.R16UI),X===s.UNSIGNED_INT&&(ee=s.R32UI),X===s.BYTE&&(ee=s.R8I),X===s.SHORT&&(ee=s.R16I),X===s.INT&&(ee=s.R32I)),w===s.RG&&(X===s.FLOAT&&(ee=s.RG32F),X===s.HALF_FLOAT&&(ee=s.RG16F),X===s.UNSIGNED_BYTE&&(ee=s.RG8)),w===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(ee=s.RG8UI),X===s.UNSIGNED_SHORT&&(ee=s.RG16UI),X===s.UNSIGNED_INT&&(ee=s.RG32UI),X===s.BYTE&&(ee=s.RG8I),X===s.SHORT&&(ee=s.RG16I),X===s.INT&&(ee=s.RG32I)),w===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(ee=s.RGB8UI),X===s.UNSIGNED_SHORT&&(ee=s.RGB16UI),X===s.UNSIGNED_INT&&(ee=s.RGB32UI),X===s.BYTE&&(ee=s.RGB8I),X===s.SHORT&&(ee=s.RGB16I),X===s.INT&&(ee=s.RGB32I)),w===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(ee=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(ee=s.RGBA16UI),X===s.UNSIGNED_INT&&(ee=s.RGBA32UI),X===s.BYTE&&(ee=s.RGBA8I),X===s.SHORT&&(ee=s.RGBA16I),X===s.INT&&(ee=s.RGBA32I)),w===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),w===s.RGBA){const Re=re?Za:Ke.getTransfer(J);X===s.FLOAT&&(ee=s.RGBA32F),X===s.HALF_FLOAT&&(ee=s.RGBA16F),X===s.UNSIGNED_BYTE&&(ee=Re===gt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(D,w){let X;return D?w===null||w===Nn||w===Ds?X=s.DEPTH24_STENCIL8:w===kn?X=s.DEPTH32F_STENCIL8:w===To&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Nn||w===Ds?X=s.DEPTH_COMPONENT24:w===kn?X=s.DEPTH_COMPONENT32F:w===To&&(X=s.DEPTH_COMPONENT16),X}function A(D,w){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==mn&&D.minFilter!==jn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function E(D){const w=D.target;w.removeEventListener("dispose",E),S(w),w.isVideoTexture&&u.delete(w)}function T(D){const w=D.target;w.removeEventListener("dispose",T),I(w)}function S(D){const w=n.get(D);if(w.__webglInit===void 0)return;const X=D.source,J=d.get(X);if(J){const re=J[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&C(D),Object.keys(J).length===0&&d.delete(X)}n.remove(D)}function C(D){const w=n.get(D);s.deleteTexture(w.__webglTexture);const X=D.source,J=d.get(X);delete J[w.__cacheKey],o.memory.textures--}function I(D){const w=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let re=0;re<w.__webglFramebuffer[J].length;re++)s.deleteFramebuffer(w.__webglFramebuffer[J][re]);else s.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)s.deleteFramebuffer(w.__webglFramebuffer[J]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=D.textures;for(let J=0,re=X.length;J<re;J++){const ee=n.get(X[J]);ee.__webglTexture&&(s.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(X[J])}n.remove(D)}let y=0;function M(){y=0}function F(){const D=y;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),y+=1,D}function P(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function L(D,w){const X=n.get(D);if(D.isVideoTexture&&Le(D),D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){const J=D.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(X,D,w);return}}t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+w)}function U(D,w){const X=n.get(D);if(D.version>0&&X.__version!==D.version){_e(X,D,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+w)}function B(D,w){const X=n.get(D);if(D.version>0&&X.__version!==D.version){_e(X,D,w);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+w)}function V(D,w){const X=n.get(D);if(D.version>0&&X.__version!==D.version){W(X,D,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+w)}const k={[Mo]:s.REPEAT,[Ei]:s.CLAMP_TO_EDGE,[tu]:s.MIRRORED_REPEAT},Z={[mn]:s.NEAREST,[M0]:s.NEAREST_MIPMAP_NEAREST,[Jo]:s.NEAREST_MIPMAP_LINEAR,[jn]:s.LINEAR,[Ol]:s.LINEAR_MIPMAP_NEAREST,[Ar]:s.LINEAR_MIPMAP_LINEAR},te={[b0]:s.NEVER,[L0]:s.ALWAYS,[R0]:s.LESS,[Qp]:s.LEQUAL,[I0]:s.EQUAL,[F0]:s.GEQUAL,[P0]:s.GREATER,[D0]:s.NOTEQUAL};function se(D,w){if(w.type===kn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===jn||w.magFilter===Ol||w.magFilter===Jo||w.magFilter===Ar||w.minFilter===jn||w.minFilter===Ol||w.minFilter===Jo||w.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,k[w.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,k[w.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,k[w.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Z[w.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Z[w.minFilter]),w.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,te[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===mn||w.minFilter!==Jo&&w.minFilter!==Ar||w.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ve(D,w){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",E));const J=w.source;let re=d.get(J);re===void 0&&(re={},d.set(J,re));const ee=P(w);if(ee!==D.__cacheKey){re[ee]===void 0&&(re[ee]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[ee].usedTimes++;const Re=re[D.__cacheKey];Re!==void 0&&(re[D.__cacheKey].usedTimes--,Re.usedTimes===0&&C(w)),D.__cacheKey=ee,D.__webglTexture=re[ee].texture}return X}function _e(D,w,X){let J=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=s.TEXTURE_3D);const re=ve(D,w),ee=w.source;t.bindTexture(J,D.__webglTexture,s.TEXTURE0+X);const Re=n.get(ee);if(ee.version!==Re.__version||re===!0){t.activeTexture(s.TEXTURE0+X);const fe=Ke.getPrimaries(Ke.workingColorSpace),Me=w.colorSpace===Hi?null:Ke.getPrimaries(w.colorSpace),Je=w.colorSpace===Hi||fe===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let ae=g(w.image,!1,i.maxTextureSize);ae=Xe(w,ae);const Se=r.convert(w.format,w.colorSpace),N=r.convert(w.type);let ne=v(w.internalFormat,Se,N,w.colorSpace,w.isVideoTexture);se(J,w);let ce;const Oe=w.mipmaps,Pe=w.isVideoTexture!==!0,tt=Re.__version===void 0||re===!0,z=ee.dataReady,Ae=A(w,ae);if(w.isDepthTexture)ne=x(w.format===Fs,w.type),tt&&(Pe?t.texStorage2D(s.TEXTURE_2D,1,ne,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,ne,ae.width,ae.height,0,Se,N,null));else if(w.isDataTexture)if(Oe.length>0){Pe&&tt&&t.texStorage2D(s.TEXTURE_2D,Ae,ne,Oe[0].width,Oe[0].height);for(let K=0,$=Oe.length;K<$;K++)ce=Oe[K],Pe?z&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,ce.width,ce.height,Se,N,ce.data):t.texImage2D(s.TEXTURE_2D,K,ne,ce.width,ce.height,0,Se,N,ce.data);w.generateMipmaps=!1}else Pe?(tt&&t.texStorage2D(s.TEXTURE_2D,Ae,ne,ae.width,ae.height),z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae.width,ae.height,Se,N,ae.data)):t.texImage2D(s.TEXTURE_2D,0,ne,ae.width,ae.height,0,Se,N,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Pe&&tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,ne,Oe[0].width,Oe[0].height,ae.depth);for(let K=0,$=Oe.length;K<$;K++)if(ce=Oe[K],w.format!==on)if(Se!==null)if(Pe){if(z)if(w.layerUpdates.size>0){const de=_f(ce.width,ce.height,w.format,w.type);for(const ge of w.layerUpdates){const Qe=ce.data.subarray(ge*de/ce.data.BYTES_PER_ELEMENT,(ge+1)*de/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,ge,ce.width,ce.height,1,Se,Qe,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,ce.width,ce.height,ae.depth,Se,ce.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,ne,ce.width,ce.height,ae.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,ce.width,ce.height,ae.depth,Se,N,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,ne,ce.width,ce.height,ae.depth,0,Se,N,ce.data)}else{Pe&&tt&&t.texStorage2D(s.TEXTURE_2D,Ae,ne,Oe[0].width,Oe[0].height);for(let K=0,$=Oe.length;K<$;K++)ce=Oe[K],w.format!==on?Se!==null?Pe?z&&t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,ce.width,ce.height,Se,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,K,ne,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?z&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,ce.width,ce.height,Se,N,ce.data):t.texImage2D(s.TEXTURE_2D,K,ne,ce.width,ce.height,0,Se,N,ce.data)}else if(w.isDataArrayTexture)if(Pe){if(tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,ne,ae.width,ae.height,ae.depth),z)if(w.layerUpdates.size>0){const K=_f(ae.width,ae.height,w.format,w.type);for(const $ of w.layerUpdates){const de=ae.data.subarray($*K/ae.data.BYTES_PER_ELEMENT,($+1)*K/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,ae.width,ae.height,1,Se,N,de)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Se,N,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ne,ae.width,ae.height,ae.depth,0,Se,N,ae.data);else if(w.isData3DTexture)Pe?(tt&&t.texStorage3D(s.TEXTURE_3D,Ae,ne,ae.width,ae.height,ae.depth),z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Se,N,ae.data)):t.texImage3D(s.TEXTURE_3D,0,ne,ae.width,ae.height,ae.depth,0,Se,N,ae.data);else if(w.isFramebufferTexture){if(tt)if(Pe)t.texStorage2D(s.TEXTURE_2D,Ae,ne,ae.width,ae.height);else{let K=ae.width,$=ae.height;for(let de=0;de<Ae;de++)t.texImage2D(s.TEXTURE_2D,de,ne,K,$,0,Se,N,null),K>>=1,$>>=1}}else if(Oe.length>0){if(Pe&&tt){const K=Ue(Oe[0]);t.texStorage2D(s.TEXTURE_2D,Ae,ne,K.width,K.height)}for(let K=0,$=Oe.length;K<$;K++)ce=Oe[K],Pe?z&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Se,N,ce):t.texImage2D(s.TEXTURE_2D,K,ne,Se,N,ce);w.generateMipmaps=!1}else if(Pe){if(tt){const K=Ue(ae);t.texStorage2D(s.TEXTURE_2D,Ae,ne,K.width,K.height)}z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,N,ae)}else t.texImage2D(s.TEXTURE_2D,0,ne,Se,N,ae);p(w)&&_(J),Re.__version=ee.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function W(D,w,X){if(w.image.length!==6)return;const J=ve(D,w),re=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+X);const ee=n.get(re);if(re.version!==ee.__version||J===!0){t.activeTexture(s.TEXTURE0+X);const Re=Ke.getPrimaries(Ke.workingColorSpace),fe=w.colorSpace===Hi?null:Ke.getPrimaries(w.colorSpace),Me=w.colorSpace===Hi||Re===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Je=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,Se=[];for(let $=0;$<6;$++)!Je&&!ae?Se[$]=g(w.image[$],!0,i.maxCubemapSize):Se[$]=ae?w.image[$].image:w.image[$],Se[$]=Xe(w,Se[$]);const N=Se[0],ne=r.convert(w.format,w.colorSpace),ce=r.convert(w.type),Oe=v(w.internalFormat,ne,ce,w.colorSpace),Pe=w.isVideoTexture!==!0,tt=ee.__version===void 0||J===!0,z=re.dataReady;let Ae=A(w,N);se(s.TEXTURE_CUBE_MAP,w);let K;if(Je){Pe&&tt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,Oe,N.width,N.height);for(let $=0;$<6;$++){K=Se[$].mipmaps;for(let de=0;de<K.length;de++){const ge=K[de];w.format!==on?ne!==null?Pe?z&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,ge.width,ge.height,ne,ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,Oe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,ge.width,ge.height,ne,ce,ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,Oe,ge.width,ge.height,0,ne,ce,ge.data)}}}else{if(K=w.mipmaps,Pe&&tt){K.length>0&&Ae++;const $=Ue(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,Oe,$.width,$.height)}for(let $=0;$<6;$++)if(ae){Pe?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Se[$].width,Se[$].height,ne,ce,Se[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,Se[$].width,Se[$].height,0,ne,ce,Se[$].data);for(let de=0;de<K.length;de++){const Qe=K[de].image[$].image;Pe?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,Qe.width,Qe.height,ne,ce,Qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,Oe,Qe.width,Qe.height,0,ne,ce,Qe.data)}}else{Pe?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ne,ce,Se[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,ne,ce,Se[$]);for(let de=0;de<K.length;de++){const ge=K[de];Pe?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,ne,ce,ge.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,Oe,ne,ce,ge.image[$])}}}p(w)&&_(s.TEXTURE_CUBE_MAP),ee.__version=re.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Y(D,w,X,J,re,ee){const Re=r.convert(X.format,X.colorSpace),fe=r.convert(X.type),Me=v(X.internalFormat,Re,fe,X.colorSpace);if(!n.get(w).__hasExternalTextures){const ae=Math.max(1,w.width>>ee),Se=Math.max(1,w.height>>ee);re===s.TEXTURE_3D||re===s.TEXTURE_2D_ARRAY?t.texImage3D(re,ee,Me,ae,Se,w.depth,0,Re,fe,null):t.texImage2D(re,ee,Me,ae,Se,0,Re,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),We(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,re,n.get(X).__webglTexture,0,Ee(w)):(re===s.TEXTURE_2D||re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,re,n.get(X).__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(D,w,X){if(s.bindRenderbuffer(s.RENDERBUFFER,D),w.depthBuffer){const J=w.depthTexture,re=J&&J.isDepthTexture?J.type:null,ee=x(w.stencilBuffer,re),Re=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=Ee(w);We(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,ee,w.width,w.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,ee,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ee,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,D)}else{const J=w.textures;for(let re=0;re<J.length;re++){const ee=J[re],Re=r.convert(ee.format,ee.colorSpace),fe=r.convert(ee.type),Me=v(ee.internalFormat,Re,fe,ee.colorSpace),Je=Ee(w);X&&We(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Me,w.width,w.height):We(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je,Me,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Me,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ie(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),L(w.depthTexture,0);const J=n.get(w.depthTexture).__webglTexture,re=Ee(w);if(w.depthTexture.format===Er)We(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(w.depthTexture.format===Fs)We(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Te(D){const w=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const J=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",re)};J.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=J}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ie(w.__webglFramebuffer,D)}else if(X){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=s.createRenderbuffer(),oe(w.__webglDepthbuffer[J],D,!1);else{const re=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),oe(w.__webglDepthbuffer,D,!1);else{const J=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,re)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function me(D,w,X){const J=n.get(D);w!==void 0&&Y(J.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Te(D)}function Fe(D){const w=D.texture,X=n.get(D),J=n.get(w);D.addEventListener("dispose",T);const re=D.textures,ee=D.isWebGLCubeRenderTarget===!0,Re=re.length>1;if(Re||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=w.version,o.memory.textures++),ee){X.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[fe]=[];for(let Me=0;Me<w.mipmaps.length;Me++)X.__webglFramebuffer[fe][Me]=s.createFramebuffer()}else X.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)X.__webglFramebuffer[fe]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Re)for(let fe=0,Me=re.length;fe<Me;fe++){const Je=n.get(re[fe]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&We(D)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const Me=re[fe];X.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[fe]);const Je=r.convert(Me.format,Me.colorSpace),ae=r.convert(Me.type),Se=v(Me.internalFormat,Je,ae,Me.colorSpace,D.isXRRenderTarget===!0),N=Ee(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,N,Se,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,X.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(X.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),se(s.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)Y(X.__webglFramebuffer[fe][Me],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Me);else Y(X.__webglFramebuffer[fe],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(w)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let fe=0,Me=re.length;fe<Me;fe++){const Je=re[fe],ae=n.get(Je);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture),se(s.TEXTURE_2D,Je),Y(X.__webglFramebuffer,D,Je,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),p(Je)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,J.__webglTexture),se(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)Y(X.__webglFramebuffer[Me],D,w,s.COLOR_ATTACHMENT0,fe,Me);else Y(X.__webglFramebuffer,D,w,s.COLOR_ATTACHMENT0,fe,0);p(w)&&_(fe),t.unbindTexture()}D.depthBuffer&&Te(D)}function ke(D){const w=D.textures;for(let X=0,J=w.length;X<J;X++){const re=w[X];if(p(re)){const ee=D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Re=n.get(re).__webglTexture;t.bindTexture(ee,Re),_(ee),t.unbindTexture()}}}const Ne=[],O=[];function et(D){if(D.samples>0){if(We(D)===!1){const w=D.textures,X=D.width,J=D.height;let re=s.COLOR_BUFFER_BIT;const ee=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=n.get(D),fe=w.length>1;if(fe)for(let Me=0;Me<w.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Me=0;Me<w.length;Me++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(re|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(re|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[Me]);const Je=n.get(w[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,X,J,0,0,X,J,re,s.NEAREST),l===!0&&(Ne.length=0,O.length=0,Ne.push(s.COLOR_ATTACHMENT0+Me),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ne.push(ee),O.push(ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Me=0;Me<w.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,Re.__webglColorRenderbuffer[Me]);const Je=n.get(w[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const w=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Ee(D){return Math.min(i.maxSamples,D.samples)}function We(D){const w=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Le(D){const w=o.render.frame;u.get(D)!==w&&(u.set(D,w),D.update())}function Xe(D,w){const X=D.colorSpace,J=D.format,re=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==er&&X!==Hi&&(Ke.getTransfer(X)===gt?(J!==on||re!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function Ue(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=M,this.setTexture2D=L,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=V,this.rebindTextures=me,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=We}function am(s,e){function t(n,i=Hi){let r;const o=Ke.getTransfer(i);if(n===ai)return s.UNSIGNED_BYTE;if(n===uh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===hh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===zp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Np)return s.BYTE;if(n===kp)return s.SHORT;if(n===To)return s.UNSIGNED_SHORT;if(n===ch)return s.INT;if(n===Nn)return s.UNSIGNED_INT;if(n===kn)return s.FLOAT;if(n===Ws)return s.HALF_FLOAT;if(n===Hp)return s.ALPHA;if(n===Vp)return s.RGB;if(n===on)return s.RGBA;if(n===Gp)return s.LUMINANCE;if(n===Wp)return s.LUMINANCE_ALPHA;if(n===Er)return s.DEPTH_COMPONENT;if(n===Fs)return s.DEPTH_STENCIL;if(n===Xp)return s.RED;if(n===Sl)return s.RED_INTEGER;if(n===dh)return s.RG;if(n===fh)return s.RG_INTEGER;if(n===As)return s.RGBA_INTEGER;if(n===Oa||n===Na||n===ka||n===za)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nu||n===iu||n===ru||n===su)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===iu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ru)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===su)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ou||n===au||n===lu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ou||n===au)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cu||n===uu||n===hu||n===du||n===fu||n===pu||n===mu||n===gu||n===_u||n===xu||n===vu||n===yu||n===Au||n===Su)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===du)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_u)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Au)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Su)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ha||n===Mu||n===Tu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ha)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qp||n===Eu||n===Cu||n===wu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Eu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class rS extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sr extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sS={type:"move"};class dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),_=this._getHandJoint(c,g);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Sr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const oS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aS=`
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

}`;class lS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new $t,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new In({vertexShader:oS,fragmentShader:aS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cS extends tr{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const g=new lS,p=t.getContextAttributes();let _=null,v=null;const x=[],A=[],E=new xe;let T=null;const S=new rn;S.layers.enable(1),S.viewport=new je;const C=new rn;C.layers.enable(2),C.viewport=new je;const I=[S,C],y=new rS;y.layers.enable(1),y.layers.enable(2);let M=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=x[W];return Y===void 0&&(Y=new dc,x[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=x[W];return Y===void 0&&(Y=new dc,x[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=x[W];return Y===void 0&&(Y=new dc,x[W]=Y),Y.getHandSpace()};function P(W){const Y=A.indexOf(W.inputSource);if(Y===-1)return;const oe=x[Y];oe!==void 0&&(oe.update(W.inputSource,W.frame,c||o),oe.dispatchEvent({type:W.type,data:W.inputSource}))}function L(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",U);for(let W=0;W<x.length;W++){const Y=A[W];Y!==null&&(A[W]=null,x[W].disconnect(Y))}M=null,F=null,g.reset(),e.setRenderTarget(_),f=null,d=null,h=null,i=null,v=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",L),i.addEventListener("inputsourceschange",U),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0){const Y={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Zi(f.framebufferWidth,f.framebufferHeight,{format:on,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Y=null,oe=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=p.stencil?Fs:Er,oe=p.stencil?Ds:Nn);const Te={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Te),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Zi(d.textureWidth,d.textureHeight,{format:on,type:ai,depthTexture:new Ah(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),_e.setContext(i),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function U(W){for(let Y=0;Y<W.removed.length;Y++){const oe=W.removed[Y],ie=A.indexOf(oe);ie>=0&&(A[ie]=null,x[ie].disconnect(oe))}for(let Y=0;Y<W.added.length;Y++){const oe=W.added[Y];let ie=A.indexOf(oe);if(ie===-1){for(let me=0;me<x.length;me++)if(me>=A.length){A.push(oe),ie=me;break}else if(A[me]===null){A[me]=oe,ie=me;break}if(ie===-1)break}const Te=x[ie];Te&&Te.connect(oe)}}const B=new R,V=new R;function k(W,Y,oe){B.setFromMatrixPosition(Y.matrixWorld),V.setFromMatrixPosition(oe.matrixWorld);const ie=B.distanceTo(V),Te=Y.projectionMatrix.elements,me=oe.projectionMatrix.elements,Fe=Te[14]/(Te[10]-1),ke=Te[14]/(Te[10]+1),Ne=(Te[9]+1)/Te[5],O=(Te[9]-1)/Te[5],et=(Te[8]-1)/Te[0],Ee=(me[8]+1)/me[0],We=Fe*et,Le=Fe*Ee,Xe=ie/(-et+Ee),Ue=Xe*-et;if(Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ue),W.translateZ(Xe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Te[10]===-1)W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const D=Fe+Xe,w=ke+Xe,X=We-Ue,J=Le+(ie-Ue),re=Ne*ke/w*D,ee=O*ke/w*D;W.projectionMatrix.makePerspective(X,J,re,ee,D,w),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Z(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let Y=W.near,oe=W.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(oe=g.depthFar)),y.near=C.near=S.near=Y,y.far=C.far=S.far=oe,(M!==y.near||F!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,F=y.far);const ie=W.parent,Te=y.cameras;Z(y,ie);for(let me=0;me<Te.length;me++)Z(Te[me],ie);Te.length===2?k(y,S,C):y.projectionMatrix.copy(S.projectionMatrix),te(W,y,ie)};function te(W,Y,oe){oe===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(oe.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ls*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let se=null;function ve(W,Y){if(u=Y.getViewerPose(c||o),m=Y,u!==null){const oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ie=!1;oe.length!==y.cameras.length&&(y.cameras.length=0,ie=!0);for(let me=0;me<oe.length;me++){const Fe=oe[me];let ke=null;if(f!==null)ke=f.getViewport(Fe);else{const O=h.getViewSubImage(d,Fe);ke=O.viewport,me===0&&(e.setRenderTargetTextures(v,O.colorTexture,d.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(v))}let Ne=I[me];Ne===void 0&&(Ne=new rn,Ne.layers.enable(me),Ne.viewport=new je,I[me]=Ne),Ne.matrix.fromArray(Fe.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Fe.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(ke.x,ke.y,ke.width,ke.height),me===0&&(y.matrix.copy(Ne.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ie===!0&&y.cameras.push(Ne)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const me=h.getDepthInformation(oe[0]);me&&me.isValid&&me.texture&&g.init(e,me,i.renderState)}}for(let oe=0;oe<x.length;oe++){const ie=A[oe],Te=x[oe];ie!==null&&Te!==void 0&&Te.update(ie,Y,c||o)}se&&se(W,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),m=null}const _e=new nm;_e.setAnimationLoop(ve),this.setAnimationLoop=function(W){se=W},this.dispose=function(){}}}const hr=new kt,uS=new he;function hS(s,e){function t(p,_){p.matrixAutoUpdate===!0&&p.updateMatrix(),_.value.copy(p.matrix)}function n(p,_){_.color.getRGB(p.fogColor.value,Jp(s)),_.isFog?(p.fogNear.value=_.near,p.fogFar.value=_.far):_.isFogExp2&&(p.fogDensity.value=_.density)}function i(p,_,v,x,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?r(p,_):_.isMeshToonMaterial?(r(p,_),h(p,_)):_.isMeshPhongMaterial?(r(p,_),u(p,_)):_.isMeshStandardMaterial?(r(p,_),d(p,_),_.isMeshPhysicalMaterial&&f(p,_,A)):_.isMeshMatcapMaterial?(r(p,_),m(p,_)):_.isMeshDepthMaterial?r(p,_):_.isMeshDistanceMaterial?(r(p,_),g(p,_)):_.isMeshNormalMaterial?r(p,_):_.isLineBasicMaterial?(o(p,_),_.isLineDashedMaterial&&a(p,_)):_.isPointsMaterial?l(p,_,v,x):_.isSpriteMaterial?c(p,_):_.isShadowMaterial?(p.color.value.copy(_.color),p.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(p,_){p.opacity.value=_.opacity,_.color&&p.diffuse.value.copy(_.color),_.emissive&&p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.bumpMap&&(p.bumpMap.value=_.bumpMap,t(_.bumpMap,p.bumpMapTransform),p.bumpScale.value=_.bumpScale,_.side===gn&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,t(_.normalMap,p.normalMapTransform),p.normalScale.value.copy(_.normalScale),_.side===gn&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,t(_.displacementMap,p.displacementMapTransform),p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,p.emissiveMapTransform)),_.specularMap&&(p.specularMap.value=_.specularMap,t(_.specularMap,p.specularMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);const v=e.get(_),x=v.envMap,A=v.envMapRotation;x&&(p.envMap.value=x,hr.copy(A),hr.x*=-1,hr.y*=-1,hr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),p.envMapRotation.value.setFromMatrix4(uS.makeRotationFromEuler(hr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=_.reflectivity,p.ior.value=_.ior,p.refractionRatio.value=_.refractionRatio),_.lightMap&&(p.lightMap.value=_.lightMap,p.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,p.lightMapTransform)),_.aoMap&&(p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,p.aoMapTransform))}function o(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform))}function a(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function l(p,_,v,x){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*v,p.scale.value=x*.5,_.map&&(p.map.value=_.map,t(_.map,p.uvTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function c(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function u(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,1e-4)}function h(p,_){_.gradientMap&&(p.gradientMap.value=_.gradientMap)}function d(p,_){p.metalness.value=_.metalness,_.metalnessMap&&(p.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,p.metalnessMapTransform)),p.roughness.value=_.roughness,_.roughnessMap&&(p.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,p.roughnessMapTransform)),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)}function f(p,_,v){p.ior.value=_.ior,_.sheen>0&&(p.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),p.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(p.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,p.sheenColorMapTransform)),_.sheenRoughnessMap&&(p.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,p.sheenRoughnessMapTransform))),_.clearcoat>0&&(p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(p.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,p.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(p.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===gn&&p.clearcoatNormalScale.value.negate())),_.dispersion>0&&(p.dispersion.value=_.dispersion),_.iridescence>0&&(p.iridescence.value=_.iridescence,p.iridescenceIOR.value=_.iridescenceIOR,p.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(p.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,p.iridescenceMapTransform)),_.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),_.transmission>0&&(p.transmission.value=_.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),_.transmissionMap&&(p.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,p.transmissionMapTransform)),p.thickness.value=_.thickness,_.thicknessMap&&(p.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=_.attenuationDistance,p.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(p.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(p.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=_.specularIntensity,p.specularColor.value.copy(_.specularColor),_.specularColorMap&&(p.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,p.specularColorMapTransform)),_.specularIntensityMap&&(p.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,_){_.matcap&&(p.matcap.value=_.matcap)}function g(p,_){const v=e.get(_).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dS(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const A=x.program;n.uniformBlockBinding(v,A)}function c(v,x){let A=i[v.id];A===void 0&&(m(v),A=u(v),i[v.id]=A,v.addEventListener("dispose",p));const E=x.program;n.updateUBOMapping(v,E);const T=e.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function u(v){const x=h();v.__bindingPointIndex=x;const A=s.createBuffer(),E=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,E,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,A),A}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],A=v.uniforms,E=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,S=A.length;T<S;T++){const C=Array.isArray(A[T])?A[T]:[A[T]];for(let I=0,y=C.length;I<y;I++){const M=C[I];if(f(M,T,I,E)===!0){const F=M.__offset,P=Array.isArray(M.value)?M.value:[M.value];let L=0;for(let U=0;U<P.length;U++){const B=P[U],V=g(B);typeof B=="number"||typeof B=="boolean"?(M.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,F+L,M.__data)):B.isMatrix3?(M.__data[0]=B.elements[0],M.__data[1]=B.elements[1],M.__data[2]=B.elements[2],M.__data[3]=0,M.__data[4]=B.elements[3],M.__data[5]=B.elements[4],M.__data[6]=B.elements[5],M.__data[7]=0,M.__data[8]=B.elements[6],M.__data[9]=B.elements[7],M.__data[10]=B.elements[8],M.__data[11]=0):(B.toArray(M.__data,L),L+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,M.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,A,E){const T=v.value,S=x+"_"+A;if(E[S]===void 0)return typeof T=="number"||typeof T=="boolean"?E[S]=T:E[S]=T.clone(),!0;{const C=E[S];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return E[S]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function m(v){const x=v.uniforms;let A=0;const E=16;for(let S=0,C=x.length;S<C;S++){const I=Array.isArray(x[S])?x[S]:[x[S]];for(let y=0,M=I.length;y<M;y++){const F=I[y],P=Array.isArray(F.value)?F.value:[F.value];for(let L=0,U=P.length;L<U;L++){const B=P[L],V=g(B),k=A%E,Z=k%V.boundary,te=k+Z;A+=Z,te!==0&&E-te<V.storage&&(A+=E-te),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=A,A+=V.storage}}}const T=A%E;return T>0&&(A+=E-T),v.__size=A,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const A=o.indexOf(x.__bindingPointIndex);o.splice(A,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function _(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:_}}class lm{constructor(e={}){const{canvas:t=$0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),m=new Int32Array(4);let g=null,p=null;const _=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=Qi,this.toneMappingExposure=1;const x=this;let A=!1,E=0,T=0,S=null,C=-1,I=null;const y=new je,M=new je;let F=null;const P=new He(0);let L=0,U=t.width,B=t.height,V=1,k=null,Z=null;const te=new je(0,0,U,B),se=new je(0,0,U,B);let ve=!1;const _e=new vh;let W=!1,Y=!1;const oe=new he,ie=new he,Te=new R,me=new je,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Ne(){return S===null?V:1}let O=n;function et(b,H){return t.getContext(b,H)}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lh}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",ge,!1),O===null){const H="webgl2";if(O=et(H,b),O===null)throw et(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ee,We,Le,Xe,Ue,D,w,X,J,re,ee,Re,fe,Me,Je,ae,Se,N,ne,ce,Oe,Pe,tt,z;function Ae(){Ee=new vy(O),Ee.init(),Pe=new am(O,Ee),We=new fy(O,Ee,e,Pe),Le=new tS(O),We.reverseDepthBuffer&&Le.buffers.depth.setReversed(!0),Xe=new Sy(O),Ue=new zA,D=new iS(O,Ee,Le,Ue,We,Pe,Xe),w=new my(x),X=new xy(x),J=new R_(O),tt=new hy(O,J),re=new yy(O,J,Xe,tt),ee=new Ty(O,re,J,Xe),ne=new My(O,We,D),ae=new py(Ue),Re=new kA(x,w,X,Ee,We,tt,ae),fe=new hS(x,Ue),Me=new VA,Je=new YA(Ee),N=new uy(x,w,X,Le,ee,d,l),Se=new JA(x,ee,We),z=new dS(O,Xe,We,Le),ce=new dy(O,Ee,Xe),Oe=new Ay(O,Ee,Xe),Xe.programs=Re.programs,x.capabilities=We,x.extensions=Ee,x.properties=Ue,x.renderLists=Me,x.shadowMap=Se,x.state=Le,x.info=Xe}Ae();const K=new cS(x,O);this.xr=K,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=Ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(U,B,!1))},this.getSize=function(b){return b.set(U,B)},this.setSize=function(b,H,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,B=H,t.width=Math.floor(b*V),t.height=Math.floor(H*V),q===!0&&(t.style.width=b+"px",t.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(U*V,B*V).floor()},this.setDrawingBufferSize=function(b,H,q){U=b,B=H,V=q,t.width=Math.floor(b*q),t.height=Math.floor(H*q),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(te)},this.setViewport=function(b,H,q,Q){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,H,q,Q),Le.viewport(y.copy(te).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(se)},this.setScissor=function(b,H,q,Q){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,H,q,Q),Le.scissor(M.copy(se).multiplyScalar(V).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(b){Le.setScissorTest(ve=b)},this.setOpaqueSort=function(b){k=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor.apply(N,arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha.apply(N,arguments)},this.clear=function(b=!0,H=!0,q=!0){let Q=0;if(b){let G=!1;if(S!==null){const ue=S.texture.format;G=ue===As||ue===fh||ue===Sl}if(G){const ue=S.texture.type,ye=ue===ai||ue===Nn||ue===To||ue===Ds||ue===uh||ue===hh,Ce=N.getClearColor(),be=N.getClearAlpha(),Ve=Ce.r,Ge=Ce.g,De=Ce.b;ye?(f[0]=Ve,f[1]=Ge,f[2]=De,f[3]=be,O.clearBufferuiv(O.COLOR,0,f)):(m[0]=Ve,m[1]=Ge,m[2]=De,m[3]=be,O.clearBufferiv(O.COLOR,0,m))}else Q|=O.COLOR_BUFFER_BIT}H&&(Q|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(Q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Me.dispose(),Je.dispose(),Ue.dispose(),w.dispose(),X.dispose(),ee.dispose(),tt.dispose(),z.dispose(),Re.dispose(),K.dispose(),K.removeEventListener("sessionstart",ud),K.removeEventListener("sessionend",hd),sr.stop()};function $(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=Xe.autoReset,H=Se.enabled,q=Se.autoUpdate,Q=Se.needsUpdate,G=Se.type;Ae(),Xe.autoReset=b,Se.enabled=H,Se.autoUpdate=q,Se.needsUpdate=Q,Se.type=G}function ge(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Qe(b){const H=b.target;H.removeEventListener("dispose",Qe),dt(H)}function dt(b){Lt(b),Ue.remove(b)}function Lt(b){const H=Ue.get(b).programs;H!==void 0&&(H.forEach(function(q){Re.releaseProgram(q)}),b.isShaderMaterial&&Re.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,q,Q,G,ue){H===null&&(H=Fe);const ye=G.isMesh&&G.matrixWorld.determinant()<0,Ce=Hg(b,H,q,Q,G);Le.setMaterial(Q,ye);let be=q.index,Ve=1;if(Q.wireframe===!0){if(be=re.getWireframeAttribute(q),be===void 0)return;Ve=2}const Ge=q.drawRange,De=q.attributes.position;let ct=Ge.start*Ve,mt=(Ge.start+Ge.count)*Ve;ue!==null&&(ct=Math.max(ct,ue.start*Ve),mt=Math.min(mt,(ue.start+ue.count)*Ve)),be!==null?(ct=Math.max(ct,0),mt=Math.min(mt,be.count)):De!=null&&(ct=Math.max(ct,0),mt=Math.min(mt,De.count));const Tt=mt-ct;if(Tt<0||Tt===1/0)return;tt.setup(G,Q,Ce,q,be);let Sn,st=ce;if(be!==null&&(Sn=J.get(be),st=Oe,st.setIndex(Sn)),G.isMesh)Q.wireframe===!0?(Le.setLineWidth(Q.wireframeLinewidth*Ne()),st.setMode(O.LINES)):st.setMode(O.TRIANGLES);else if(G.isLine){let Be=Q.linewidth;Be===void 0&&(Be=1),Le.setLineWidth(Be*Ne()),G.isLineSegments?st.setMode(O.LINES):G.isLineLoop?st.setMode(O.LINE_LOOP):st.setMode(O.LINE_STRIP)}else G.isPoints?st.setMode(O.POINTS):G.isSprite&&st.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)st.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))st.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Be=G._multiDrawStarts,Yt=G._multiDrawCounts,ot=G._multiDrawCount,Wn=be?J.get(be).bytesPerElement:1,zr=Ue.get(Q).currentProgram.getUniforms();for(let Mn=0;Mn<ot;Mn++)zr.setValue(O,"_gl_DrawID",Mn),st.render(Be[Mn]/Wn,Yt[Mn])}else if(G.isInstancedMesh)st.renderInstances(ct,Tt,G.count);else if(q.isInstancedBufferGeometry){const Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Yt=Math.min(q.instanceCount,Be);st.renderInstances(ct,Tt,Yt)}else st.render(ct,Tt)};function rt(b,H,q){b.transparent===!0&&b.side===Un&&b.forceSinglePass===!1?(b.side=gn,b.needsUpdate=!0,$o(b,H,q),b.side=oi,b.needsUpdate=!0,$o(b,H,q),b.side=Un):$o(b,H,q)}this.compile=function(b,H,q=null){q===null&&(q=b),p=Je.get(q),p.init(H),v.push(p),q.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),b!==q&&b.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const Q=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ue=G.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){const Ce=ue[ye];rt(Ce,q,G),Q.add(Ce)}else rt(ue,q,G),Q.add(ue)}),v.pop(),p=null,Q},this.compileAsync=function(b,H,q=null){const Q=this.compile(b,H,q);return new Promise(G=>{function ue(){if(Q.forEach(function(ye){Ue.get(ye).currentProgram.isReady()&&Q.delete(ye)}),Q.size===0){G(b);return}setTimeout(ue,10)}Ee.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let pn=null;function hi(b){pn&&pn(b)}function ud(){sr.stop()}function hd(){sr.start()}const sr=new nm;sr.setAnimationLoop(hi),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(b){pn=b,K.setAnimationLoop(b),b===null?sr.stop():sr.start()},K.addEventListener("sessionstart",ud),K.addEventListener("sessionend",hd),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(H),H=K.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,H,S),p=Je.get(b,v.length),p.init(H),v.push(p),ie.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),_e.setFromProjectionMatrix(ie),Y=this.localClippingEnabled,W=ae.init(this.clippingPlanes,Y),g=Me.get(b,_.length),g.init(),_.push(g),K.enabled===!0&&K.isPresenting===!0){const ue=x.xr.getDepthSensingMesh();ue!==null&&Fl(ue,H,-1/0,x.sortObjects)}Fl(b,H,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(k,Z),ke=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ke&&N.addToRenderList(g,b),this.info.render.frame++,W===!0&&ae.beginShadows();const q=p.state.shadowsArray;Se.render(q,b,H),W===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=g.opaque,G=g.transmissive;if(p.setupLights(),H.isArrayCamera){const ue=H.cameras;if(G.length>0)for(let ye=0,Ce=ue.length;ye<Ce;ye++){const be=ue[ye];fd(Q,G,b,be)}ke&&N.render(b);for(let ye=0,Ce=ue.length;ye<Ce;ye++){const be=ue[ye];dd(g,b,be,be.viewport)}}else G.length>0&&fd(Q,G,b,H),ke&&N.render(b),dd(g,b,H);S!==null&&(D.updateMultisampleRenderTarget(S),D.updateRenderTargetMipmap(S)),b.isScene===!0&&b.onAfterRender(x,b,H),tt.resetDefaultState(),C=-1,I=null,v.pop(),v.length>0?(p=v[v.length-1],W===!0&&ae.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Fl(b,H,q,Q){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||_e.intersectsSprite(b)){Q&&me.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ie);const ye=ee.update(b),Ce=b.material;Ce.visible&&g.push(b,ye,Ce,q,me.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||_e.intersectsObject(b))){const ye=ee.update(b),Ce=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),me.copy(b.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),me.copy(ye.boundingSphere.center)),me.applyMatrix4(b.matrixWorld).applyMatrix4(ie)),Array.isArray(Ce)){const be=ye.groups;for(let Ve=0,Ge=be.length;Ve<Ge;Ve++){const De=be[Ve],ct=Ce[De.materialIndex];ct&&ct.visible&&g.push(b,ye,ct,q,me.z,De)}}else Ce.visible&&g.push(b,ye,Ce,q,me.z,null)}}const ue=b.children;for(let ye=0,Ce=ue.length;ye<Ce;ye++)Fl(ue[ye],H,q,Q)}function dd(b,H,q,Q){const G=b.opaque,ue=b.transmissive,ye=b.transparent;p.setupLightsView(q),W===!0&&ae.setGlobalState(x.clippingPlanes,q),Q&&Le.viewport(y.copy(Q)),G.length>0&&Zo(G,H,q),ue.length>0&&Zo(ue,H,q),ye.length>0&&Zo(ye,H,q),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function fd(b,H,q,Q){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Zi(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Ws:ai,minFilter:Ar,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ue=p.state.transmissionRenderTarget[Q.id],ye=Q.viewport||y;ue.setSize(ye.z,ye.w);const Ce=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(P),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear(),ke&&N.render(q);const be=x.toneMapping;x.toneMapping=Qi;const Ve=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),W===!0&&ae.setGlobalState(x.clippingPlanes,Q),Zo(b,q,Q),D.updateMultisampleRenderTarget(ue),D.updateRenderTargetMipmap(ue),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let De=0,ct=H.length;De<ct;De++){const mt=H[De],Tt=mt.object,Sn=mt.geometry,st=mt.material,Be=mt.group;if(st.side===Un&&Tt.layers.test(Q.layers)){const Yt=st.side;st.side=gn,st.needsUpdate=!0,pd(Tt,q,Q,Sn,st,Be),st.side=Yt,st.needsUpdate=!0,Ge=!0}}Ge===!0&&(D.updateMultisampleRenderTarget(ue),D.updateRenderTargetMipmap(ue))}x.setRenderTarget(Ce),x.setClearColor(P,L),Ve!==void 0&&(Q.viewport=Ve),x.toneMapping=be}function Zo(b,H,q){const Q=H.isScene===!0?H.overrideMaterial:null;for(let G=0,ue=b.length;G<ue;G++){const ye=b[G],Ce=ye.object,be=ye.geometry,Ve=Q===null?ye.material:Q,Ge=ye.group;Ce.layers.test(q.layers)&&pd(Ce,H,q,be,Ve,Ge)}}function pd(b,H,q,Q,G,ue){b.onBeforeRender(x,H,q,Q,G,ue),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(x,H,q,Q,b,ue),G.transparent===!0&&G.side===Un&&G.forceSinglePass===!1?(G.side=gn,G.needsUpdate=!0,x.renderBufferDirect(q,H,Q,G,b,ue),G.side=oi,G.needsUpdate=!0,x.renderBufferDirect(q,H,Q,G,b,ue),G.side=Un):x.renderBufferDirect(q,H,Q,G,b,ue),b.onAfterRender(x,H,q,Q,G,ue)}function $o(b,H,q){H.isScene!==!0&&(H=Fe);const Q=Ue.get(b),G=p.state.lights,ue=p.state.shadowsArray,ye=G.state.version,Ce=Re.getParameters(b,G.state,ue,H,q),be=Re.getProgramCacheKey(Ce);let Ve=Q.programs;Q.environment=b.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(b.isMeshStandardMaterial?X:w).get(b.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Ve===void 0&&(b.addEventListener("dispose",Qe),Ve=new Map,Q.programs=Ve);let Ge=Ve.get(be);if(Ge!==void 0){if(Q.currentProgram===Ge&&Q.lightsStateVersion===ye)return gd(b,Ce),Ge}else Ce.uniforms=Re.getUniforms(b),b.onBeforeCompile(Ce,x),Ge=Re.acquireProgram(Ce,be),Ve.set(be,Ge),Q.uniforms=Ce.uniforms;const De=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=ae.uniform),gd(b,Ce),Q.needsLights=Gg(b),Q.lightsStateVersion=ye,Q.needsLights&&(De.ambientLightColor.value=G.state.ambient,De.lightProbe.value=G.state.probe,De.directionalLights.value=G.state.directional,De.directionalLightShadows.value=G.state.directionalShadow,De.spotLights.value=G.state.spot,De.spotLightShadows.value=G.state.spotShadow,De.rectAreaLights.value=G.state.rectArea,De.ltc_1.value=G.state.rectAreaLTC1,De.ltc_2.value=G.state.rectAreaLTC2,De.pointLights.value=G.state.point,De.pointLightShadows.value=G.state.pointShadow,De.hemisphereLights.value=G.state.hemi,De.directionalShadowMap.value=G.state.directionalShadowMap,De.directionalShadowMatrix.value=G.state.directionalShadowMatrix,De.spotShadowMap.value=G.state.spotShadowMap,De.spotLightMatrix.value=G.state.spotLightMatrix,De.spotLightMap.value=G.state.spotLightMap,De.pointShadowMap.value=G.state.pointShadowMap,De.pointShadowMatrix.value=G.state.pointShadowMatrix),Q.currentProgram=Ge,Q.uniformsList=null,Ge}function md(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=Ga.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function gd(b,H){const q=Ue.get(b);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function Hg(b,H,q,Q,G){H.isScene!==!0&&(H=Fe),D.resetTextureUnits();const ue=H.fog,ye=Q.isMeshStandardMaterial?H.environment:null,Ce=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:er,be=(Q.isMeshStandardMaterial?X:w).get(Q.envMap||ye),Ve=Q.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),De=!!q.morphAttributes.position,ct=!!q.morphAttributes.normal,mt=!!q.morphAttributes.color;let Tt=Qi;Q.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Tt=x.toneMapping);const Sn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,st=Sn!==void 0?Sn.length:0,Be=Ue.get(Q),Yt=p.state.lights;if(W===!0&&(Y===!0||b!==I)){const Fn=b===I&&Q.id===C;ae.setState(Q,b,Fn)}let ot=!1;Q.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Yt.state.version||Be.outputColorSpace!==Ce||G.isBatchedMesh&&Be.batching===!1||!G.isBatchedMesh&&Be.batching===!0||G.isBatchedMesh&&Be.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Be.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Be.instancing===!1||!G.isInstancedMesh&&Be.instancing===!0||G.isSkinnedMesh&&Be.skinning===!1||!G.isSkinnedMesh&&Be.skinning===!0||G.isInstancedMesh&&Be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Be.instancingMorph===!1&&G.morphTexture!==null||Be.envMap!==be||Q.fog===!0&&Be.fog!==ue||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ae.numPlanes||Be.numIntersection!==ae.numIntersection)||Be.vertexAlphas!==Ve||Be.vertexTangents!==Ge||Be.morphTargets!==De||Be.morphNormals!==ct||Be.morphColors!==mt||Be.toneMapping!==Tt||Be.morphTargetsCount!==st)&&(ot=!0):(ot=!0,Be.__version=Q.version);let Wn=Be.currentProgram;ot===!0&&(Wn=$o(Q,H,G));let zr=!1,Mn=!1,Ll=!1;const wt=Wn.getUniforms(),Ii=Be.uniforms;if(Le.useProgram(Wn.program)&&(zr=!0,Mn=!0,Ll=!0),Q.id!==C&&(C=Q.id,Mn=!0),zr||I!==b){We.reverseDepthBuffer?(oe.copy(b.projectionMatrix),e_(oe),t_(oe),wt.setValue(O,"projectionMatrix",oe)):wt.setValue(O,"projectionMatrix",b.projectionMatrix),wt.setValue(O,"viewMatrix",b.matrixWorldInverse);const Fn=wt.map.cameraPosition;Fn!==void 0&&Fn.setValue(O,Te.setFromMatrixPosition(b.matrixWorld)),We.logarithmicDepthBuffer&&wt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&wt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),I!==b&&(I=b,Mn=!0,Ll=!0)}if(G.isSkinnedMesh){wt.setOptional(O,G,"bindMatrix"),wt.setOptional(O,G,"bindMatrixInverse");const Fn=G.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),wt.setValue(O,"boneTexture",Fn.boneTexture,D))}G.isBatchedMesh&&(wt.setOptional(O,G,"batchingTexture"),wt.setValue(O,"batchingTexture",G._matricesTexture,D),wt.setOptional(O,G,"batchingIdTexture"),wt.setValue(O,"batchingIdTexture",G._indirectTexture,D),wt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&wt.setValue(O,"batchingColorTexture",G._colorsTexture,D));const Bl=q.morphAttributes;if((Bl.position!==void 0||Bl.normal!==void 0||Bl.color!==void 0)&&ne.update(G,q,Wn),(Mn||Be.receiveShadow!==G.receiveShadow)&&(Be.receiveShadow=G.receiveShadow,wt.setValue(O,"receiveShadow",G.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ii.envMap.value=be,Ii.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&H.environment!==null&&(Ii.envMapIntensity.value=H.environmentIntensity),Mn&&(wt.setValue(O,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&Vg(Ii,Ll),ue&&Q.fog===!0&&fe.refreshFogUniforms(Ii,ue),fe.refreshMaterialUniforms(Ii,Q,V,B,p.state.transmissionRenderTarget[b.id]),Ga.upload(O,md(Be),Ii,D)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ga.upload(O,md(Be),Ii,D),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&wt.setValue(O,"center",G.center),wt.setValue(O,"modelViewMatrix",G.modelViewMatrix),wt.setValue(O,"normalMatrix",G.normalMatrix),wt.setValue(O,"modelMatrix",G.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Fn=Q.uniformsGroups;for(let Ul=0,Wg=Fn.length;Ul<Wg;Ul++){const _d=Fn[Ul];z.update(_d,Wn),z.bind(_d,Wn)}}return Wn}function Vg(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Gg(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(b,H,q){Ue.get(b.texture).__webglTexture=H,Ue.get(b.depthTexture).__webglTexture=q;const Q=Ue.get(b);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=q===void 0,Q.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,H){const q=Ue.get(b);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,q=0){S=b,E=H,T=q;let Q=!0,G=null,ue=!1,ye=!1;if(b){const be=Ue.get(b);if(be.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(O.FRAMEBUFFER,null),Q=!1;else if(be.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(be.__hasExternalTextures)D.rebindTextures(b,Ue.get(b.texture).__webglTexture,Ue.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const De=b.depthTexture;if(be.__boundDepthTexture!==De){if(De!==null&&Ue.has(De)&&(b.width!==De.image.width||b.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ye=!0);const Ge=Ue.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ge[H])?G=Ge[H][q]:G=Ge[H],ue=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?G=Ue.get(b).__webglMultisampledFramebuffer:Array.isArray(Ge)?G=Ge[q]:G=Ge,y.copy(b.viewport),M.copy(b.scissor),F=b.scissorTest}else y.copy(te).multiplyScalar(V).floor(),M.copy(se).multiplyScalar(V).floor(),F=ve;if(Le.bindFramebuffer(O.FRAMEBUFFER,G)&&Q&&Le.drawBuffers(b,G),Le.viewport(y),Le.scissor(M),Le.setScissorTest(F),ue){const be=Ue.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,be.__webglTexture,q)}else if(ye){const be=Ue.get(b.texture),Ve=H||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.__webglTexture,q||0,Ve)}C=-1},this.readRenderTargetPixels=function(b,H,q,Q,G,ue,ye){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){Le.bindFramebuffer(O.FRAMEBUFFER,Ce);try{const be=b.texture,Ve=be.format,Ge=be.type;if(!We.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-Q&&q>=0&&q<=b.height-G&&O.readPixels(H,q,Q,G,Pe.convert(Ve),Pe.convert(Ge),ue)}finally{const be=S!==null?Ue.get(S).__webglFramebuffer:null;Le.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(b,H,q,Q,G,ue,ye){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){const be=b.texture,Ve=be.format,Ge=be.type;if(!We.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=b.width-Q&&q>=0&&q<=b.height-G){Le.bindFramebuffer(O.FRAMEBUFFER,Ce);const De=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,De),O.bufferData(O.PIXEL_PACK_BUFFER,ue.byteLength,O.STREAM_READ),O.readPixels(H,q,Q,G,Pe.convert(Ve),Pe.convert(Ge),0);const ct=S!==null?Ue.get(S).__webglFramebuffer:null;Le.bindFramebuffer(O.FRAMEBUFFER,ct);const mt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await J0(O,mt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,De),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ue),O.deleteBuffer(De),O.deleteSync(mt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,H=null,q=0){b.isTexture!==!0&&(Va("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1]);const Q=Math.pow(2,-q),G=Math.floor(b.image.width*Q),ue=Math.floor(b.image.height*Q),ye=H!==null?H.x:0,Ce=H!==null?H.y:0;D.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,ye,Ce,G,ue),Le.unbindTexture()},this.copyTextureToTexture=function(b,H,q=null,Q=null,G=0){b.isTexture!==!0&&(Va("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,b=arguments[1],H=arguments[2],G=arguments[3]||0,q=null);let ue,ye,Ce,be,Ve,Ge;q!==null?(ue=q.max.x-q.min.x,ye=q.max.y-q.min.y,Ce=q.min.x,be=q.min.y):(ue=b.image.width,ye=b.image.height,Ce=0,be=0),Q!==null?(Ve=Q.x,Ge=Q.y):(Ve=0,Ge=0);const De=Pe.convert(H.format),ct=Pe.convert(H.type);D.setTexture2D(H,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const mt=O.getParameter(O.UNPACK_ROW_LENGTH),Tt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Sn=O.getParameter(O.UNPACK_SKIP_PIXELS),st=O.getParameter(O.UNPACK_SKIP_ROWS),Be=O.getParameter(O.UNPACK_SKIP_IMAGES),Yt=b.isCompressedTexture?b.mipmaps[G]:b.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Yt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Yt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ce),O.pixelStorei(O.UNPACK_SKIP_ROWS,be),b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,Ve,Ge,ue,ye,De,ct,Yt.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,Ve,Ge,Yt.width,Yt.height,De,Yt.data):O.texSubImage2D(O.TEXTURE_2D,G,Ve,Ge,ue,ye,De,ct,Yt),O.pixelStorei(O.UNPACK_ROW_LENGTH,mt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Tt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Sn),O.pixelStorei(O.UNPACK_SKIP_ROWS,st),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Be),G===0&&H.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(b,H,q=null,Q=null,G=0){b.isTexture!==!0&&(Va("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Q=arguments[1]||null,b=arguments[2],H=arguments[3],G=arguments[4]||0);let ue,ye,Ce,be,Ve,Ge,De,ct,mt;const Tt=b.isCompressedTexture?b.mipmaps[G]:b.image;q!==null?(ue=q.max.x-q.min.x,ye=q.max.y-q.min.y,Ce=q.max.z-q.min.z,be=q.min.x,Ve=q.min.y,Ge=q.min.z):(ue=Tt.width,ye=Tt.height,Ce=Tt.depth,be=0,Ve=0,Ge=0),Q!==null?(De=Q.x,ct=Q.y,mt=Q.z):(De=0,ct=0,mt=0);const Sn=Pe.convert(H.format),st=Pe.convert(H.type);let Be;if(H.isData3DTexture)D.setTexture3D(H,0),Be=O.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)D.setTexture2DArray(H,0),Be=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const Yt=O.getParameter(O.UNPACK_ROW_LENGTH),ot=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Wn=O.getParameter(O.UNPACK_SKIP_PIXELS),zr=O.getParameter(O.UNPACK_SKIP_ROWS),Mn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Tt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Tt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,be),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ve),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ge),b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Be,G,De,ct,mt,ue,ye,Ce,Sn,st,Tt.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Be,G,De,ct,mt,ue,ye,Ce,Sn,Tt.data):O.texSubImage3D(Be,G,De,ct,mt,ue,ye,Ce,Sn,st,Tt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Yt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Wn),O.pixelStorei(O.UNPACK_SKIP_ROWS,zr),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Mn),G===0&&H.generateMipmaps&&O.generateMipmap(Be),Le.unbindTexture()},this.initRenderTarget=function(b){Ue.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),Le.unbindTexture()},this.resetState=function(){E=0,T=0,S=null,Le.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===mh?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Ml?"display-p3":"srgb"}}class cm extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kt,this.environmentIntensity=1,this.environmentRotation=new kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xf=new R,vf=new je,yf=new je,fS=new R,Af=new he,ya=new R,fc=new Xs,Sf=new he,pc=new Wo;class pS extends ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sd,this.bindMatrix=new he,this.bindMatrixInverse=new he,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $n),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ya),this.boundingBox.expandByPoint(ya)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xs),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ya),this.boundingSphere.expandByPoint(ya)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fc.copy(this.boundingSphere),fc.applyMatrix4(i),e.ray.intersectsSphere(fc)!==!1&&(Sf.copy(i).invert(),pc.copy(e.ray).applyMatrix4(Sf),!(this.boundingBox!==null&&pc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===S0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;vf.fromBufferAttribute(i.attributes.skinIndex,e),yf.fromBufferAttribute(i.attributes.skinWeight,e),xf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=yf.getComponent(r);if(o!==0){const a=vf.getComponent(r);Af.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(fS.copy(xf).applyMatrix4(Af),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Iu extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class vi extends $t{constructor(e=null,t=1,n=1,i,r,o,a,l,c=mn,u=mn,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mf=new he,mS=new he;class Sh{constructor(e=[],t=[]){this.uuid=nr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new he)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new he;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:mS;Mf.multiplyMatrices(a,t[r]),Mf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Sh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new vi(t,e,e,on,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Iu),this.bones.push(o),this.boneInverses.push(new he().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class gS extends Vn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class um extends Nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tl=new R,nl=new R,Tf=new he,to=new Wo,Aa=new Xs,mc=new R,Ef=new R;class _S extends lt{constructor(e=new an,t=new um){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)tl.fromBufferAttribute(t,i-1),nl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=tl.distanceTo(nl);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;Tf.copy(i).invert(),to.copy(e.ray).applyMatrix4(Tf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,p=m-1;g<p;g+=c){const _=u.getX(g),v=u.getX(g+1),x=Sa(this,e,to,l,_,v);x&&t.push(x)}if(this.isLineLoop){const g=u.getX(m-1),p=u.getX(f),_=Sa(this,e,to,l,g,p);_&&t.push(_)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,p=m-1;g<p;g+=c){const _=Sa(this,e,to,l,g,g+1);_&&t.push(_)}if(this.isLineLoop){const g=Sa(this,e,to,l,m-1,f);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Sa(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(tl.fromBufferAttribute(o,i),nl.fromBufferAttribute(o,r),t.distanceSqToSegment(tl,nl,mc,Ef)>n)return;mc.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(mc);if(!(l<e.near||l>e.far))return{distance:l,point:Ef.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class xS{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new xe:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,i=[],r=[],o=[],a=new R,l=new he;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Nt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Nt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wo extends an{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let m=0;const g=[],p=n/2;let _=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ft(h,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(f,2));function v(){const A=new R,E=new R;let T=0;const S=(t-e)/n;for(let C=0;C<=r;C++){const I=[],y=C/r,M=y*(t-e)+e;for(let F=0;F<=i;F++){const P=F/i,L=P*l+a,U=Math.sin(L),B=Math.cos(L);E.x=M*U,E.y=-y*n+p,E.z=M*B,h.push(E.x,E.y,E.z),A.set(U,S,B).normalize(),d.push(A.x,A.y,A.z),f.push(P,1-y),I.push(m++)}g.push(I)}for(let C=0;C<i;C++)for(let I=0;I<r;I++){const y=g[I][C],M=g[I+1][C],F=g[I+1][C+1],P=g[I][C+1];e>0&&(u.push(y,M,P),T+=3),t>0&&(u.push(M,F,P),T+=3)}c.addGroup(_,T,0),_+=T}function x(A){const E=m,T=new xe,S=new R;let C=0;const I=A===!0?e:t,y=A===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),m++;const M=m;for(let F=0;F<=i;F++){const L=F/i*l+a,U=Math.cos(L),B=Math.sin(L);S.x=I*B,S.y=p*y,S.z=I*U,h.push(S.x,S.y,S.z),d.push(0,y,0),T.x=U*.5+.5,T.y=B*.5*y+.5,f.push(T.x,T.y),m++}for(let F=0;F<i;F++){const P=E+F,L=M+F;A===!0?u.push(L,L+1,P):u.push(L+1,L,P),C+=3}c.addGroup(_,C,A===!0?1:2),_+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mh extends wo{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Mh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const vS={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=hm(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=TS(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let m=t;m<i;m+=t)h=s[m],d=s[m+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return bo(r,o,t,a,l,f,0),o}};function hm(s,e,t,n,i){let r,o;if(i===BS(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Cf(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Cf(r,s[r],s[r+1],o);return o&&Cl(o,o.next)&&(Io(o),o=o.next),o}function Ir(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Cl(t,t.next)||St(t.prev,t,t.next)===0)){if(Io(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function bo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&RS(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?AS(s,n,i,r):yS(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Io(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=SS(Ir(s),e,t),bo(s,e,t,n,i,r,2)):o===2&&MS(s,e,t,n,i,r):bo(Ir(s),e,t,n,i,r,1);break}}}function yS(s){const e=s.prev,t=s,n=s.next;if(St(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&ms(i,a,r,l,o,c,m.x,m.y)&&St(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function AS(s,e,t,n){const i=s.prev,r=s,o=s.next;if(St(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,m=u<h?u<d?u:d:h<d?h:d,g=a>l?a>c?a:c:l>c?l:c,p=u>h?u>d?u:d:h>d?h:d,_=Pu(f,m,e,t,n),v=Pu(g,p,e,t,n);let x=s.prevZ,A=s.nextZ;for(;x&&x.z>=_&&A&&A.z<=v;){if(x.x>=f&&x.x<=g&&x.y>=m&&x.y<=p&&x!==i&&x!==o&&ms(a,u,l,h,c,d,x.x,x.y)&&St(x.prev,x,x.next)>=0||(x=x.prevZ,A.x>=f&&A.x<=g&&A.y>=m&&A.y<=p&&A!==i&&A!==o&&ms(a,u,l,h,c,d,A.x,A.y)&&St(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;x&&x.z>=_;){if(x.x>=f&&x.x<=g&&x.y>=m&&x.y<=p&&x!==i&&x!==o&&ms(a,u,l,h,c,d,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;A&&A.z<=v;){if(A.x>=f&&A.x<=g&&A.y>=m&&A.y<=p&&A!==i&&A!==o&&ms(a,u,l,h,c,d,A.x,A.y)&&St(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function SS(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Cl(i,r)&&dm(i,n,n.next,r)&&Ro(i,r)&&Ro(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Io(n),Io(n.next),n=s=r),n=n.next}while(n!==s);return Ir(n)}function MS(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&DS(o,a)){let l=fm(o,a);o=Ir(o,o.next),l=Ir(l,l.next),bo(o,e,t,n,i,r,0),bo(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function TS(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=hm(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(PS(c));for(i.sort(ES),r=0;r<i.length;r++)t=CS(i[r],t);return t}function ES(s,e){return s.x-e.x}function CS(s,e){const t=wS(s,e);if(!t)return e;const n=fm(t,s);return Ir(n,n.next),Ir(t,t.next)}function wS(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&ms(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Ro(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&bS(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function bS(s,e){return St(s.prev,s,e.prev)<0&&St(e.next,s,s.next)<0}function RS(s,e,t,n){let i=s;do i.z===0&&(i.z=Pu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,IS(i)}function IS(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Pu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function PS(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ms(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function DS(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!FS(s,e)&&(Ro(s,e)&&Ro(e,s)&&LS(s,e)&&(St(s.prev,s,e.prev)||St(s,e.prev,e))||Cl(s,e)&&St(s.prev,s,s.next)>0&&St(e.prev,e,e.next)>0)}function St(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Cl(s,e){return s.x===e.x&&s.y===e.y}function dm(s,e,t,n){const i=Ta(St(s,e,t)),r=Ta(St(s,e,n)),o=Ta(St(t,n,s)),a=Ta(St(t,n,e));return!!(i!==r&&o!==a||i===0&&Ma(s,t,e)||r===0&&Ma(s,n,e)||o===0&&Ma(t,s,n)||a===0&&Ma(t,e,n))}function Ma(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ta(s){return s>0?1:s<0?-1:0}function FS(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&dm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ro(s,e){return St(s.prev,s,s.next)<0?St(s,e,s.next)>=0&&St(s,s.prev,e)>=0:St(s,e,s.prev)<0||St(s,s.next,e)<0}function LS(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function fm(s,e){const t=new Du(s.i,s.x,s.y),n=new Du(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Cf(s,e,t,n){const i=new Du(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Io(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Du(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function BS(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Th{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Th.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];wf(e),bf(n,e);let o=e.length;t.forEach(wf);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,bf(n,t[l]);const a=vS.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function wf(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function bf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Po extends an{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new R,d=new R,f=[],m=[],g=[],p=[];for(let _=0;_<=n;_++){const v=[],x=_/n;let A=0;_===0&&o===0?A=.5/t:_===n&&l===Math.PI&&(A=-.5/t);for(let E=0;E<=t;E++){const T=E/t;h.x=-e*Math.cos(i+T*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+T*r)*Math.sin(o+x*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),p.push(T+A,1-x),v.push(c++)}u.push(v)}for(let _=0;_<n;_++)for(let v=0;v<t;v++){const x=u[_][v+1],A=u[_][v],E=u[_+1][v],T=u[_+1][v+1];(_!==0||o>0)&&f.push(x,A,T),(_!==n-1||l<Math.PI)&&f.push(A,E,T)}this.setIndex(f),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(g,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gc extends Nr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new He(16777215),this.specular=new He(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ph,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kt,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class US extends Nr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ph,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kt,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ea(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function OS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function NS(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Rf(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function pm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class wl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kS extends wl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Md,endingEnd:Md}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Td:r=e,a=2*t-n;break;case Ed:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Td:o=e,l=2*n-t;break;case Ed:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),g=m*m,p=g*m,_=-d*p+2*d*g-d*m,v=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*m+1,x=(-1-f)*p+(1.5+f)*g+.5*m,A=f*p-f*g;for(let E=0;E!==a;++E)r[E]=_*o[u+E]+v*o[c+E]+x*o[l+E]+A*o[h+E];return r}}class zS extends wl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class HS extends wl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ui{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ea(t,this.TimeBufferType),this.values=Ea(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ea(e.times,Array),values:Ea(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new HS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ja:t=this.InterpolantFactoryMethodDiscrete;break;case bu:t=this.InterpolantFactoryMethodLinear;break;case Nl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ja;case this.InterpolantFactoryMethodLinear:return bu;case this.InterpolantFactoryMethodSmooth:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&OS(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Nl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const g=t[h+m];if(g!==t[d+m]||g!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=bu;class Qs extends ui{constructor(e,t,n){super(e,t,n)}}Qs.prototype.ValueTypeName="bool";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=ja;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class mm extends ui{}mm.prototype.ValueTypeName="color";class Do extends ui{}Do.prototype.ValueTypeName="number";class VS extends wl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)it.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Os extends ui{InterpolantFactoryMethodLinear(e){return new VS(this.times,this.values,this.getValueSize(),e)}}Os.prototype.ValueTypeName="quaternion";Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Ys extends ui{constructor(e,t,n){super(e,t,n)}}Ys.prototype.ValueTypeName="string";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=ja;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Fo extends ui{}Fo.prototype.ValueTypeName="vector";class GS{constructor(e="",t=-1,n=[],i=T0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=nr(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(XS(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ui.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=NS(l);l=Rf(l,1,u),c=Rf(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Do(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,g){if(f.length!==0){const p=[],_=[];pm(f,p,_,m),p.length!==0&&g.push(new h(d,p,_))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let g=0;g<d[m].morphTargets.length;g++)f[d[m].morphTargets[g]]=-1;for(const g in f){const p=[],_=[];for(let v=0;v!==d[m].morphTargets.length;++v){const x=d[m];p.push(x.time),_.push(x.morphTarget===g?1:0)}i.push(new Do(".morphTargetInfluence["+g+"]",p,_))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Fo,f+".position",d,"pos",i),n(Os,f+".quaternion",d,"rot",i),n(Fo,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function WS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Do;case"vector":case"vector2":case"vector3":case"vector4":return Fo;case"color":return mm;case"quaternion":return Os;case"bool":case"boolean":return Qs;case"string":return Ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function XS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=WS(s.type);if(s.times===void 0){const t=[],n=[];pm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const il={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class qS{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const QS=new qS;class Pr{constructor(e){this.manager=e!==void 0?e:QS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pr.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i={};class YS extends Error{constructor(e,t){super(e),this.response=t}}class KS extends Pr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=il.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:i});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=_i[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let g=0;const p=new ReadableStream({start(_){v();function v(){h.read().then(({done:x,value:A})=>{if(x)_.close();else{g+=A.byteLength;const E=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let T=0,S=u.length;T<S;T++){const C=u[T];C.onProgress&&C.onProgress(E)}_.enqueue(A),v()}},x=>{_.error(x)})}}});return new Response(p)}else throw new YS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{il.add(e,c);const u=_i[e];delete _i[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=_i[e];if(u===void 0)throw this.manager.itemError(e),c;delete _i[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class jS extends Pr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=il.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Eo("img");function l(){u(),il.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class ZS extends Pr{constructor(e){super(e)}load(e,t,n,i){const r=new $t,o=new jS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class bl extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const _c=new he,If=new R,Pf=new R;class Eh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vh,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;If.setFromMatrixPosition(e.matrixWorld),t.position.copy(If),Pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pf),t.updateMatrixWorld(),_c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $S extends Eh{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ls*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class JS extends bl{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new $S}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Df=new he,no=new R,xc=new R;class eM extends Eh{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),no.setFromMatrixPosition(e.matrixWorld),n.position.copy(no),xc.copy(n.position),xc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xc),n.updateMatrixWorld(),i.makeTranslation(-no.x,-no.y,-no.z),Df.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Df)}}class Ff extends bl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new eM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tM extends Eh{constructor(){super(new Tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nM extends bl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new tM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class iM extends bl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class rM{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class sM extends an{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Ch="\\[\\]\\.:\\/",oM=new RegExp("["+Ch+"]","g"),wh="[^"+Ch+"]",aM="[^"+Ch.replace("\\.","")+"]",lM=/((?:WC+[\/:])*)/.source.replace("WC",wh),cM=/(WCOD+)?/.source.replace("WCOD",aM),uM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),hM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),dM=new RegExp("^"+lM+cM+uM+hM+"$"),fM=["material","materials","bones","map"];class pM{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oM,"")}static parseTrackName(e){const t=dM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);fM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=pM;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Lf=new he;let gm=class{constructor(e,t,n=0,i=1/0){this.ray=new Wo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new _h,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lf),this}intersectObject(e,t=!0,n=[]){return Fu(e,this,n,t),n.sort(Bf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Fu(e[i],this,n,t);return n.sort(Bf),n}};function Bf(s,e){return s.distance-e.distance}function Fu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Fu(r[o],e,t,!0)}}class Uf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class mM extends tr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);const is=new kt(0,0,0,"YXZ"),rs=new R,gM={type:"change"},_M={type:"lock"},xM={type:"unlock"},Of=Math.PI/2;class vM extends mM{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=yM.bind(this),this._onPointerlockChange=AM.bind(this),this._onPointerlockError=SM.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;rs.setFromMatrixColumn(t.matrix,0),rs.crossVectors(t.up,rs),t.position.addScaledVector(rs,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;rs.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(rs,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function yM(s){if(this.enabled===!1||this.isLocked===!1)return;const e=s.movementX||s.mozMovementX||s.webkitMovementX||0,t=s.movementY||s.mozMovementY||s.webkitMovementY||0,n=this.object;is.setFromQuaternion(n.quaternion),is.y-=e*.002*this.pointerSpeed,is.x-=t*.002*this.pointerSpeed,is.x=Math.max(Of-this.maxPolarAngle,Math.min(Of-this.minPolarAngle,is.x)),n.quaternion.setFromEuler(is),this.dispatchEvent(gM)}function AM(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(_M),this.isLocked=!0):(this.dispatchEvent(xM),this.isLocked=!1)}function SM(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var On=Uint8Array,gs=Uint16Array,MM=Int32Array,_m=new On([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),xm=new On([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),TM=new On([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),vm=function(s,e){for(var t=new gs(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new MM(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},ym=vm(_m,2),Am=ym.b,EM=ym.r;Am[28]=258,EM[258]=28;var CM=vm(xm,0),wM=CM.b,Lu=new gs(32768);for(var _t=0;_t<32768;++_t){var Oi=(_t&43690)>>1|(_t&21845)<<1;Oi=(Oi&52428)>>2|(Oi&13107)<<2,Oi=(Oi&61680)>>4|(Oi&3855)<<4,Lu[_t]=((Oi&65280)>>8|(Oi&255)<<8)>>1}var uo=function(s,e,t){for(var n=s.length,i=0,r=new gs(e);i<n;++i)s[i]&&++r[s[i]-1];var o=new gs(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new gs(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],u=e-s[i],h=o[s[i]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)a[Lu[h]>>l]=c}else for(a=new gs(n),i=0;i<n;++i)s[i]&&(a[i]=Lu[o[s[i]-1]++]>>15-s[i]);return a},Xo=new On(288);for(var _t=0;_t<144;++_t)Xo[_t]=8;for(var _t=144;_t<256;++_t)Xo[_t]=9;for(var _t=256;_t<280;++_t)Xo[_t]=7;for(var _t=280;_t<288;++_t)Xo[_t]=8;var Sm=new On(32);for(var _t=0;_t<32;++_t)Sm[_t]=5;var bM=uo(Xo,9,1),RM=uo(Sm,5,1),vc=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},Yn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},yc=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},IM=function(s){return(s+7)/8|0},PM=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new On(s.subarray(e,t))},DM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Kn=function(s,e,t){var n=new Error(e||DM[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,Kn),!t)throw n;return n},FM=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new On(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new On(i*3));var c=function(ke){var Ne=t.length;if(ke>Ne){var O=new On(Math.max(Ne*2,ke));O.set(t),t=O}},u=e.f||0,h=e.p||0,d=e.b||0,f=e.l,m=e.d,g=e.m,p=e.n,_=i*8;do{if(!f){u=Yn(s,h,1);var v=Yn(s,h+1,3);if(h+=3,v)if(v==1)f=bM,m=RM,g=9,p=5;else if(v==2){var T=Yn(s,h,31)+257,S=Yn(s,h+10,15)+4,C=T+Yn(s,h+5,31)+1;h+=14;for(var I=new On(C),y=new On(19),M=0;M<S;++M)y[TM[M]]=Yn(s,h+M*3,7);h+=S*3;for(var F=vc(y),P=(1<<F)-1,L=uo(y,F,1),M=0;M<C;){var U=L[Yn(s,h,P)];h+=U&15;var x=U>>4;if(x<16)I[M++]=x;else{var B=0,V=0;for(x==16?(V=3+Yn(s,h,3),h+=2,B=I[M-1]):x==17?(V=3+Yn(s,h,7),h+=3):x==18&&(V=11+Yn(s,h,127),h+=7);V--;)I[M++]=B}}var k=I.subarray(0,T),Z=I.subarray(T);g=vc(k),p=vc(Z),f=uo(k,g,1),m=uo(Z,p,1)}else Kn(1);else{var x=IM(h)+4,A=s[x-4]|s[x-3]<<8,E=x+A;if(E>i){l&&Kn(0);break}a&&c(d+A),t.set(s.subarray(x,E),d),e.b=d+=A,e.p=h=E*8,e.f=u;continue}if(h>_){l&&Kn(0);break}}a&&c(d+131072);for(var te=(1<<g)-1,se=(1<<p)-1,ve=h;;ve=h){var B=f[yc(s,h)&te],_e=B>>4;if(h+=B&15,h>_){l&&Kn(0);break}if(B||Kn(2),_e<256)t[d++]=_e;else if(_e==256){ve=h,f=null;break}else{var W=_e-254;if(_e>264){var M=_e-257,Y=_m[M];W=Yn(s,h,(1<<Y)-1)+Am[M],h+=Y}var oe=m[yc(s,h)&se],ie=oe>>4;oe||Kn(3),h+=oe&15;var Z=wM[ie];if(ie>3){var Y=xm[ie];Z+=yc(s,h)&(1<<Y)-1,h+=Y}if(h>_){l&&Kn(0);break}a&&c(d+131072);var Te=d+W;if(d<Z){var me=r-Z,Fe=Math.min(Z,Te);for(me+d<0&&Kn(3);d<Fe;++d)t[d]=n[me+d]}for(;d<Te;++d)t[d]=t[d-Z]}}e.l=f,e.p=ve,e.b=d,e.f=u,f&&(u=1,e.m=g,e.d=m,e.n=p)}while(!u);return d!=t.length&&o?PM(t,0,d):t.subarray(0,d)},LM=new On(0),BM=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&Kn(6,"invalid zlib data"),(s[1]>>5&1)==+!e&&Kn(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function UM(s,e){return FM(s.subarray(BM(s,e),-4),{i:2},e,e)}var OM=typeof TextDecoder<"u"&&new TextDecoder,NM=0;try{OM.decode(LM,{stream:!0}),NM=1}catch{}function Mm(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,o=Math.floor((i+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:i=o,o=Math.floor((i+r)/2);return o}function kM(s,e,t,n){const i=[],r=[],o=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[s+1-a],o[a]=n[s+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],h=r[a-c],d=i[c]/(u+h);i[c]=l+u*d,l=h*d}i[a]=l}return i}function zM(s,e,t,n){const i=Mm(s,n,e),r=kM(i,n,s,e),o=new je(0,0,0,0);for(let a=0;a<=s;++a){const l=t[i-s+a],c=r[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function HM(s,e,t,n,i){const r=[];for(let h=0;h<=t;++h)r[h]=0;const o=[];for(let h=0;h<=n;++h)o[h]=r.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=r.slice(0);a[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let h=1;h<=t;++h){l[h]=e-i[s+1-h],c[h]=i[s+h]-e;let d=0;for(let f=0;f<h;++f){const m=c[f+1],g=l[h-f];a[h][f]=m+g;const p=a[f][h-1]/a[h][f];a[f][h]=d+m*p,d=g*p}a[h][h]=d}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let d=0,f=1;const m=[];for(let g=0;g<=t;++g)m[g]=r.slice(0);m[0][0]=1;for(let g=1;g<=n;++g){let p=0;const _=h-g,v=t-g;h>=g&&(m[f][0]=m[d][0]/a[v+1][_],p=m[f][0]*a[_][v]);const x=_>=-1?1:-_,A=h-1<=v?g-1:t-h;for(let T=x;T<=A;++T)m[f][T]=(m[d][T]-m[d][T-1])/a[v+1][_+T],p+=m[f][T]*a[_+T][v];h<=v&&(m[f][g]=-m[d][g-1]/a[v+1][h],p+=m[f][g]*a[h][v]),o[g][h]=p;const E=d;d=f,f=E}}let u=t;for(let h=1;h<=n;++h){for(let d=0;d<=t;++d)o[h][d]*=u;u*=t-h}return o}function VM(s,e,t,n,i){const r=i<s?i:s,o=[],a=Mm(s,n,e),l=HM(a,n,s,r,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),d=h.w;h.x*=d,h.y*=d,h.z*=d,c[u]=h}for(let u=0;u<=r;++u){const h=c[a-s].clone().multiplyScalar(l[u][0]);for(let d=1;d<=s;++d)h.add(c[a-s+d].clone().multiplyScalar(l[u][d]));o[u]=h}for(let u=r+1;u<=i+1;++u)o[u]=new je(0,0,0);return o}function GM(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function WM(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const o=s[r];t[r]=new R(o.x,o.y,o.z),n[r]=o.w}const i=[];for(let r=0;r<e;++r){const o=t[r].clone();for(let a=1;a<=r;++a)o.sub(i[r-a].clone().multiplyScalar(GM(r,a)*n[a]));i[r]=o.divideScalar(n[0])}return i}function XM(s,e,t,n,i){const r=VM(s,e,t,n,i);return WM(r)}class qM extends xS{constructor(e,t,n,i,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new je(a.x,a.y,a.z,a.w)}}getPoint(e,t=new R){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=zM(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new R){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=XM(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}}let Ye,bt,dn;class QM extends Pr{constructor(e){super(e)}load(e,t,n,i){const r=this,o=r.path===""?rM.extractUrlBase(e):r.path,a=new KS(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(JM(e))Ye=new $M().parse(e);else{const i=Cm(e);if(!eT(i))throw new Error("THREE.FBXLoader: Unknown format.");if(kf(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+kf(i));Ye=new ZM().parse(i)}const n=new ZS(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new YM(n,this.manager).parse(Ye)}}class YM{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){bt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new KM().parse(i);return this.parseScene(i,r,n),dn}parseConnections(){const e=new Map;return"Connections"in Ye&&Ye.Connections.connections.forEach(function(n){const i=n[0],r=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:r,relationship:o};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Ye.Objects){const n=Ye.Objects.Video;for(const i in n){const r=n[i],o=parseInt(i);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){const a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in Ye.Objects){const n=Ye.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,o=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?Mo:Ei,n.wrapT=a===0?Mo:Ei,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){const n=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),i=e.FileName.split(".").pop().toLowerCase(),r=n.has(i)?this.manager.getHandler(`.${i}`):this.textureLoader;if(!r)return console.warn(`FBXLoader: ${i.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new $t;const o=r.path;o||r.setPath(this.textureLoader.path);const a=bt.get(e.id).children;let l;a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(l=t[a[0].ID],(l.indexOf("blob:")===0||l.indexOf("data:")===0)&&r.setPath(void 0));const c=r.load(l);return r.setPath(o),c}parseMaterials(e){const t=new Map;if("Material"in Ye.Objects){const n=Ye.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!bt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(r.toLowerCase()){case"phong":a=new gc;break;case"lambert":a=new US;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new gc;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=Ke.toWorkingColorSpace(new He().fromArray(e.Diffuse.value),yt):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=Ke.toWorkingColorSpace(new He().fromArray(e.DiffuseColor.value),yt)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=Ke.toWorkingColorSpace(new He().fromArray(e.Emissive.value),yt):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=Ke.toWorkingColorSpace(new He().fromArray(e.EmissiveColor.value),yt)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=Ke.toWorkingColorSpace(new He().fromArray(e.Specular.value),yt):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=Ke.toWorkingColorSpace(new He().fromArray(e.SpecularColor.value),yt));const r=this;return bt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=yt);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=yt);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Ka,i.envMap.colorSpace=yt);break;case"SpecularColor":i.specularMap=r.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=yt);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in Ye.Objects&&t in Ye.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=bt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ye.Objects){const n=Ye.Objects.Deformer;for(const i in n){const r=n[i],o=bt.get(parseInt(i));if(r.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new he().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=bt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){dn=new Sr;const i=this.parseModels(e.skeletons,t,n),r=Ye.Objects.Model,o=this;i.forEach(function(l){const c=r[l.ID];o.setLookAtProperties(l,c),bt.get(l.ID).parents.forEach(function(h){const d=i.get(h.ID);d!==void 0&&d.add(l)}),l.parent===null&&dn.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),dn.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Em(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new jM().parse();dn.children.length===1&&dn.children[0].isGroup&&(dn.children[0].animations=a,dn=dn.children[0]),dn.animations=a}parseModels(e,t,n){const i=new Map,r=Ye.Objects.Model;for(const o in r){const a=parseInt(o),l=r[o],c=bt.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Iu;break;case"Null":default:u=new Sr;break}u.name=l.attrName?nt.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=a}this.getTransformData(u,l),i.set(a,u)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const h=r;r=new Iu,r.matrixWorld.copy(c.transformLink),r.name=i?nt.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,l.bones[u]=r,h!==null&&r.add(h)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=Ye.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new lt;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new rn(u,c,r,o),h!==null&&t.setFocalLength(h);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new lt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new lt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=Ye.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new lt;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=Ke.toWorkingColorSpace(new He().fromArray(n.Color.value),yt));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new Ff(r,o,a,l);break;case 1:t=new nM(r,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Wt.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=Wt.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new JS(r,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Ff(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new gc({name:Pr.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(i=new pS(r,o),i.normalizeSkinWeights()):i=new ft(r,o),i}createCurve(e,t){const n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),i=new um({name:Pr.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new _S(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Lo(t.RotationOrder.value):n.eulerOrder=Lo(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&bt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=Ye.Objects.Model[i.ID];if("Lcl_Translation"in r){const o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),dn.add(e.target)):e.lookAt(new R().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const o=e[r];bt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;bt.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new Sh(o.bones),i[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ye.Objects){const t=Ye.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new he().fromArray(r.Matrix.a)}):e[i.Node]=new he().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in Ye){if("AmbientColor"in Ye.GlobalSettings){const e=Ye.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new He().setRGB(t,n,i,yt);dn.add(new iM(r,1))}}"UnitScaleFactor"in Ye.GlobalSettings&&(dn.userData.unitScaleFactor=Ye.GlobalSettings.UnitScaleFactor.value)}}}class KM{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Ye.Objects){const n=Ye.Objects.Geometry;for(const i in n){const r=bt.get(parseInt(i)),o=this.parseGeometry(r,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],o=e.parents.map(function(h){return Ye.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,d){return i[d.ID]!==void 0&&(h=i[d.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&r.push(n.morphTargets[h.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Lo(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=Em(c);return this.genGeometry(t,a,r,u)}genGeometry(e,t,n,i){const r=new an;e.attrName&&(r.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Ft(a.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new Ft(a.colors,3)),t&&(r.setAttribute("skinIndex",new xh(a.weightsIndices,4)),r.setAttribute("skinWeight",new Ft(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){const c=new ze().getNormalMatrix(i),u=new Ft(a.normal,3);u.applyNormalMatrix(c),r.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){const h=u===0?"uv":`uv${u}`;r.setAttribute(h,new Ft(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,d){h!==c&&(r.addGroup(u,d-u,c),c=h,u=d)}),r.groups.length>0){const h=r.groups[r.groups.length-1],d=h.start+h.count;d!==a.materialIndex.length&&r.addGroup(d,a.materialIndex.length-d,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,o=[],a=[],l=[],c=[],u=[],h=[];const d=this;return e.vertexIndices.forEach(function(f,m){let g,p=!1;f<0&&(f=f^-1,p=!0);let _=[],v=[];if(o.push(f*3,f*3+1,f*3+2),e.color){const x=Ca(m,n,f,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(x){v.push(x.weight),_.push(x.id)}),v.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const x=[0,0,0,0],A=[0,0,0,0];v.forEach(function(E,T){let S=E,C=_[T];A.forEach(function(I,y,M){if(S>I){M[y]=S,S=I;const F=x[y];x[y]=C,C=F}})}),_=x,v=A}for(;v.length<4;)v.push(0),_.push(0);for(let x=0;x<4;++x)u.push(v[x]),h.push(_[x])}if(e.normal){const x=Ca(m,n,f,e.normal);a.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(g=Ca(m,n,f,e.material)[0],g<0&&(d.negativeMaterialIndices=!0,g=0)),e.uv&&e.uv.forEach(function(x,A){const E=Ca(m,n,f,x);c[A]===void 0&&(c[A]=[]),c[A].push(E[0]),c[A].push(E[1])}),i++,p&&(d.genFace(t,e,o,g,a,l,c,u,h,i),n++,i=0,o=[],a=[],l=[],c=[],u=[],h=[])}),t}getNormalNewell(e){const t=new R(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],r=e[(n+1)%e.length];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new R(0,1,0):new R(0,0,1)).cross(t).normalize(),r=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:r}}flattenVertex(e,t,n){return new xe(e.dot(t),e.dot(n))}genFace(e,t,n,i,r,o,a,l,c,u){let h;if(u>3){const d=[],f=t.baseVertexPositions||t.vertexPositions;for(let _=0;_<n.length;_+=3)d.push(new R(f[n[_]],f[n[_+1]],f[n[_+2]]));const{tangent:m,bitangent:g}=this.getNormalTangentAndBitangent(d),p=[];for(const _ of d)p.push(this.flattenVertex(_,m,g));h=Th.triangulateShape(p,[])}else h=[[0,1,2]];for(const[d,f,m]of h)e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[m*3]]),e.vertex.push(t.vertexPositions[n[m*3+1]]),e.vertex.push(t.vertexPositions[n[m*3+2]]),t.skeleton&&(e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[m*4]),e.vertexWeights.push(l[m*4+1]),e.vertexWeights.push(l[m*4+2]),e.vertexWeights.push(l[m*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[m*4]),e.weightsIndices.push(c[m*4+1]),e.weightsIndices.push(c[m*4+2]),e.weightsIndices.push(c[m*4+3])),t.color&&(e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[m*3]),e.colors.push(o[m*3+1]),e.colors.push(o[m*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[m*3]),e.normal.push(r[m*3+1]),e.normal.push(r[m*3+2])),t.uv&&t.uv.forEach(function(g,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(a[p][d*2]),e.uvs[p].push(a[p][d*2+1]),e.uvs[p].push(a[p][f*2]),e.uvs[p].push(a[p][f*2+1]),e.uvs[p].push(a[p][m*2]),e.uvs[p].push(a[p][m*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=Ye.Objects.Geometry[a.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,r){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],u=e.attributes.position.count*3,h=new Float32Array(u);for(let g=0;g<c.length;g++){const p=c[g]*3;h[p]=l[g*3],h[p+1]=l[g*3+1],h[p+2]=l[g*3+2]}const d={vertexIndices:a,vertexPositions:h,baseVertexPositions:o},f=this.genBuffers(d),m=new Ft(f.vertex,3);m.name=r||n.attrName,m.applyMatrix4(i),e.morphAttributes.position.push(m)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new He;o<i.length;o+=4)a.fromArray(i,o),Ke.toWorkingColorSpace(a,yt),a.toArray(i,o);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let o=0;o<i.length;++o)r.push(o);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new an;const n=t-1,i=e.KnotVector.a,r=[],o=e.Points.a;for(let h=0,d=o.length;h<d;h+=4)r.push(new je().fromArray(o,h));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let h=0;h<n;++h)r.push(r[h])}const u=new qM(n,i,r,a,l).getPoints(r.length*12);return new an().setFromPoints(u)}}class jM{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(Ye.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ye.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=Ye.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(tT),values:t[n].KeyValueFloat.a},r=bt.get(i.id);if(r!==void 0){const o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=Ye.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],o=bt.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[c]===void 0){const h=bt.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(h!==void 0){const d=Ye.Objects.Model[h.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:d.attrName?nt.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};dn.traverse(function(m){m.ID===d.id&&(f.transform=m.matrix,m.userData.transformData&&(f.eulerOrder=m.userData.transformData.eulerOrder))}),f.transform||(f.transform=new he),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),r[c]=f}}r[c]&&(r[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[c]===void 0){const h=bt.get(l.ID).parents.filter(function(_){return _.relationship!==void 0})[0].ID,d=bt.get(h).parents[0].ID,f=bt.get(d).parents[0].ID,m=bt.get(f).parents[0].ID,g=Ye.Objects.Model[m],p={modelName:g.attrName?nt.sanitizeNodeName(g.attrName):"",morphName:Ye.Objects.Deformer[h].attrName};r[c]=p}r[c][u.attr]=u}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=Ye.Objects.AnimationStack,n={};for(const i in t){const r=bt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new GS(e.name,-1,t)}generateTracks(e){const t=[];let n=new R,i=new R;if(e.transform&&e.transform.decompose(n,new it,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new Fo(e+"."+i,r,o)}generateRotationTrack(e,t,n,i,r){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const d=this.interpolateRotations(t.x,t.y,t.z,r);o=d[0],a=d[1]}const l=Lo(0);n!==void 0&&(n=n.map(Wt.degToRad),n.push(l),n=new kt().fromArray(n),n=new it().setFromEuler(n)),i!==void 0&&(i=i.map(Wt.degToRad),i.push(l),i=new kt().fromArray(i),i=new it().setFromEuler(i).invert());const c=new it,u=new kt,h=[];if(!a||!o)return new Os(e+".quaternion",[0],[0]);for(let d=0;d<a.length;d+=3)u.set(a[d],a[d+1],a[d+2],r),c.setFromEuler(u),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),d>2&&new it().fromArray(h,(d-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(h,d/3*4);return new Os(e+".quaternion",o,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=dn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Do(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const o=t[r];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];r.push(u),i[0]=u}else r.push(i[0]);if(a!==-1){const u=t.y.values[a];r.push(u),i[1]=u}else r.push(i[1]);if(l!==-1){const u=t.z.values[l];r.push(u),i[2]=u}else r.push(i[2])}),r}interpolateRotations(e,t,n,i){const r=[],o=[];r.push(e.times[0]),o.push(Wt.degToRad(e.values[0])),o.push(Wt.degToRad(t.values[0])),o.push(Wt.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(Wt.degToRad),u=[e.values[a],t.values[a],n.values[a]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;const h=u.map(Wt.degToRad),d=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],f=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const g=Math.max(...f)/180,p=new kt(...c,i),_=new kt(...h,i),v=new it().setFromEuler(p),x=new it().setFromEuler(_);v.dot(x)&&x.set(-x.x,-x.y,-x.z,-x.w);const A=e.times[a-1],E=e.times[a]-A,T=new it,S=new kt;for(let C=0;C<1;C+=1/g)T.copy(v.clone().slerp(x.clone(),C)),r.push(A+C*E),S.setFromQuaternion(T,i),o.push(S.x),o.push(S.y),o.push(S.z)}else r.push(e.times[a]),o.push(Wt.degToRad(e.values[a])),o.push(Wt.degToRad(t.values[a])),o.push(Wt.degToRad(n.values[a]))}return[r,o]}}class ZM{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Tm,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=r.split(",").slice(3);h=h.map(function(d){return d.trim().replace(/^"/,"")}),i="connections",r=[c,u],iT(r,h),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=r),i in o&&Array.isArray(o[i])?o[i].push(r):i!=="a"?o[i]=r:o.a=r,this.setCurrentProp(o,i),i==="a"&&r.slice(-1)!==","&&(o.a=Sc(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Sc(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Sc(c);break}this.getPrevNode()[r]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class $M{parse(e){const t=new Nf(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new Tm;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let d=0;d<r;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(a,n,d)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,o){o!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=UM(new Uint8Array(e.getArrayBuffer(o))),l=new Nf(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Nf{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class Tm{add(e,t){this[e]=t}}function JM(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===Cm(s,0,e.length)}function eT(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function kf(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function tT(s){return s/46186158e3}const nT=[];function Ca(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,o=r+n.dataSize;return rT(nT,n.buffer,r,o)}const Ac=new kt,ss=new R;function Em(s){const e=new he,t=new he,n=new he,i=new he,r=new he,o=new he,a=new he,l=new he,c=new he,u=new he,h=new he,d=new he,f=s.inheritType?s.inheritType:0;s.translation&&e.setPosition(ss.fromArray(s.translation));const m=Lo(0);if(s.preRotation){const M=s.preRotation.map(Wt.degToRad);M.push(m),t.makeRotationFromEuler(Ac.fromArray(M))}if(s.rotation){const M=s.rotation.map(Wt.degToRad);M.push(s.eulerOrder||m),n.makeRotationFromEuler(Ac.fromArray(M))}if(s.postRotation){const M=s.postRotation.map(Wt.degToRad);M.push(m),i.makeRotationFromEuler(Ac.fromArray(M)),i.invert()}s.scale&&r.scale(ss.fromArray(s.scale)),s.scalingOffset&&a.setPosition(ss.fromArray(s.scalingOffset)),s.scalingPivot&&o.setPosition(ss.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(ss.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(ss.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(h.copy(s.parentMatrix),u.copy(s.parentMatrixWorld));const g=t.clone().multiply(n).multiply(i),p=new he;p.extractRotation(u);const _=new he;_.copyPosition(u);const v=_.clone().invert().multiply(u),x=p.clone().invert().multiply(v),A=r,E=new he;if(f===0)E.copy(p).multiply(g).multiply(x).multiply(A);else if(f===1)E.copy(p).multiply(x).multiply(g).multiply(A);else{const F=new he().scale(new R().setFromMatrixScale(h)).clone().invert(),P=x.clone().multiply(F);E.copy(p).multiply(g).multiply(P).multiply(A)}const T=c.clone().invert(),S=o.clone().invert();let C=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(T).multiply(a).multiply(o).multiply(r).multiply(S);const I=new he().copyPosition(C),y=u.clone().multiply(I);return d.copyPosition(y),C=d.clone().multiply(E),C.premultiply(u.invert()),C}function Lo(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function Sc(s){return s.split(",").map(function(t){return parseFloat(t)})}function Cm(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function iT(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function rT(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}const vr=class vr{constructor(e,t){let n,i;this.promise=new Promise((c,u)=>{n=c,i=u});const r=n.bind(this),o=i.bind(this),a=(...c)=>{r(...c)},l=c=>{o(c)};e(a.bind(this),l.bind(this)),this.abortHandler=t,this.id=vr.idGen++}then(e){return new vr((t,n)=>{this.promise=this.promise.then((...i)=>{const r=e(...i);r instanceof Promise||r instanceof vr?r.then((...o)=>{t(...o)}):t(r)}).catch(i=>{n(i)})},this.abortHandler)}catch(e){return new vr(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}};le(vr,"idGen",0);let Bo=vr;class Wa extends Error{constructor(e){super(e)}}(function(){const s=new Float32Array(1),e=new Int32Array(s.buffer);return function(t){s[0]=t;const n=e[0];let i=n>>16&32768,r=n>>12&2047;const o=n>>23&255;return o<103?i:o>142?(i|=31744,i|=(o==255?0:1)&&n&8388607,i):o<113?(r|=2048,i|=(r>>114-o)+(r>>113-o&1),i):(i|=o-112<<10|r>>1,i+=r&1,i)}})();const Mc=function(){const s=new Float32Array(1),e=new Int32Array(s.buffer);return function(t){return s[0]=t,e[0]}}(),sT=function(s,e){return s[e]+(s[e+1]<<8)+(s[e+2]<<16)+(s[e+3]<<24)},bh=function(s,e,t=!0){const n=new AbortController,i=n.signal;let r=!1;const o=a=>{n.abort(new Wa(a)),r=!0};return new Bo((a,l)=>{fetch(s,{signal:i}).then(async c=>{if(!c.ok){const g=await c.text();l(new Error(`Fetch failed: ${c.status} ${c.statusText} ${g}`));return}const u=c.body.getReader();let h=0,d=c.headers.get("Content-Length"),f=d?parseInt(d):void 0;const m=[];for(;!r;)try{const{value:g,done:p}=await u.read();if(p){if(e&&e(100,"100%",g,f),t){const x=new Blob(m).arrayBuffer();a(x)}else a();break}h+=g.length;let _,v;f!==void 0&&(_=h/f*100,v=`${_.toFixed(2)}%`),t&&m.push(g),e&&e(_,v,g,f)}catch(g){l(g);return}}).catch(c=>{l(c)})},o)},Zt=function(s,e,t){return Math.max(Math.min(s,t),e)},os=function(){return performance.now()/1e3},fs=s=>{if(s.geometry&&(s.geometry.dispose(),s.geometry=null),s.material&&(s.material.dispose(),s.material=null),s.children)for(let e of s.children)fs(e)},Jn=(s,e)=>new Promise(t=>{window.setTimeout(()=>{t(s())},e?1:50)}),Ms=(s=0)=>{switch(s){case 1:return 9;case 2:return 24}return 0},Rh=()=>{let s,e;return{promise:new Promise((n,i)=>{s=n,e=i}),resolve:s,reject:e}},Tc=s=>{let e,t;return s||(s=()=>{}),{promise:new Bo((i,r)=>{e=i,t=r},s),resolve:e,reject:t}};class oT{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function Ih(){const s=navigator.userAgent;return s.indexOf("iPhone")>0||s.indexOf("iPad")>0}function wm(){if(Ih()){const s=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new oT(parseInt(s[1]||0,10),parseInt(s[2]||0,10),parseInt(s[3]||0,10))}else return null}const aT=14,vo=class vo{constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=Ms(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+aT,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let n=Ms(e);for(let i=0;i<n;i++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=vo.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,i,r,o,a,l,c,u,h,d,f,m,...g){const p=[e,t,n,i,r,o,a,l,c,u,h,d,f,m,...this.defaultSphericalHarmonics];for(let _=0;_<g.length&&_<this.sphericalHarmonicsCount;_++)p[_]=g[_];return this.addSplat(p),p}addSplatFromArray(e,t){const n=e.splats[t],i=vo.createSplat(this.sphericalHarmonicsDegree);for(let r=0;r<this.componentCount&&r<n.length;r++)i[r]=n[r];this.addSplat(i)}};le(vo,"OFFSET",{X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37});let we=vo;class Ze{}le(Ze,"DefaultSplatSortDistanceMapPrecision",16),le(Ze,"MemoryPageSize",65536),le(Ze,"BytesPerFloat",4),le(Ze,"BytesPerInt",4),le(Ze,"MaxScenes",32),le(Ze,"ProgressiveLoadSectionSize",262144),le(Ze,"ProgressiveLoadSectionDelayDuration",15),le(Ze,"SphericalHarmonics8BitCompressionRange",3);const lT=Ze.SphericalHarmonics8BitCompressionRange,Ni=lT/2,Bt=Co.toHalfFloat.bind(Co),Ph=Co.fromHalfFloat.bind(Co),xt=(s,e,t=!1,n,i)=>{if(e===0)return s;if(e===1||e===2&&!t)return Co.fromHalfFloat(s);if(e===2)return Dh(s,n,i)},ho=(s,e,t)=>{s=Zt(s,e,t);const n=t-e;return Zt(Math.floor((s-e)/n*255),0,255)},Dh=(s,e,t)=>{const n=t-e;return s/255*n+e},bm=(s,e,t)=>ho(Ph(s,e,t)),cT=(s,e,t)=>Bt(Dh(s,e,t)),at=(s,e,t,n=!1)=>t===0?s.getFloat32(e*4,!0):t===1||t===2&&!n?s.getUint16(e*2,!0):s.getUint8(e,!0),uT=function(){const s=e=>e;return function(e,t,n,i=!1){if(t===n)return e;let r=s;return t===2&&i?n===1?r=cT:n==0&&(r=Dh):t===2||t===1?n===0?r=Ph:n==2&&(i?r=bm:r=s):t===0&&(n===1?r=Bt:n==2&&(i?r=ho:r=Bt)),r(e)}}(),as=(s,e,t,n,i=0)=>{const r=new Uint8Array(s,e),o=new Uint8Array(t,n);for(let a=0;a<i;a++)o[a]=r[a]},j=class j{constructor(e,t=!0){le(this,"getSplatScaleAndRotation",function(){const e=new he,t=new he,n=new he,i=new R,r=new R,o=new it;return function(a,l,c,u,h){const d=this.globalSplatIndexToSectionMap[a],f=this.sections[d],m=a-f.splatCountOffset,g=f.bytesPerSplat*m+j.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,p=new DataView(this.bufferData,f.dataBase+g);r.set(xt(at(p,0,this.compressionLevel),this.compressionLevel),xt(at(p,1,this.compressionLevel),this.compressionLevel),xt(at(p,2,this.compressionLevel),this.compressionLevel)),h&&(h.x!==void 0&&(r.x=h.x),h.y!==void 0&&(r.y=h.y),h.z!==void 0&&(r.z=h.z)),o.set(xt(at(p,4,this.compressionLevel),this.compressionLevel),xt(at(p,5,this.compressionLevel),this.compressionLevel),xt(at(p,6,this.compressionLevel),this.compressionLevel),xt(at(p,3,this.compressionLevel),this.compressionLevel)),u?(e.makeScale(r.x,r.y,r.z),t.makeRotationFromQuaternion(o),n.copy(e).multiply(t).multiply(u),n.decompose(i,c,l)):(l.copy(r),c.copy(o))}}());le(this,"fillSplatScaleRotationArray",function(){const e=new he,t=new he,n=new he,i=new R,r=new it,o=new R,a=l=>{const c=l.w<0?-1:1;l.x*=c,l.y*=c,l.z*=c,l.w*=c};return function(l,c,u,h,d,f,m,g){const p=this.splatCount;h=h||0,d=d||p-1,f===void 0&&(f=h);const _=(v,x)=>uT(v,x,m);for(let v=h;v<=d;v++){const x=this.globalSplatIndexToSectionMap[v],A=this.sections[x],E=v-A.splatCountOffset,T=A.bytesPerSplat*E+j.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,S=(v-h+f)*j.ScaleComponentCount,C=(v-h+f)*j.RotationComponentCount,I=new DataView(this.bufferData,A.dataBase+T),y=g&&g.x!==void 0?g.x:at(I,0,this.compressionLevel),M=g&&g.y!==void 0?g.y:at(I,1,this.compressionLevel),F=g&&g.z!==void 0?g.z:at(I,2,this.compressionLevel),P=at(I,3,this.compressionLevel),L=at(I,4,this.compressionLevel),U=at(I,5,this.compressionLevel),B=at(I,6,this.compressionLevel);i.set(xt(y,this.compressionLevel),xt(M,this.compressionLevel),xt(F,this.compressionLevel)),r.set(xt(L,this.compressionLevel),xt(U,this.compressionLevel),xt(B,this.compressionLevel),xt(P,this.compressionLevel)).normalize(),u&&(o.set(0,0,0),e.makeScale(i.x,i.y,i.z),t.makeRotationFromQuaternion(r),n.identity().premultiply(e).premultiply(t),n.premultiply(u),n.decompose(o,r,i),r.normalize()),a(r),l&&(l[S]=_(i.x,0),l[S+1]=_(i.y,0),l[S+2]=_(i.z,0)),c&&(c[C]=_(r.x,0),c[C+1]=_(r.y,0),c[C+2]=_(r.z,0),c[C+3]=_(r.w,0))}}}());le(this,"fillSphericalHarmonicsArray",function(){for(let L=0;L<15;L++)new R;const e=new ze,t=new he,n=new R,i=new R,r=new it,o=[],a=[],l=[],c=[],u=[],h=[],d=[],f=[],m=[],g=[],p=[],_=[],v=[],x=[],A=[],E=[],T=[],S=[],C=L=>L,I=(L,U,B,V)=>{L[0]=U,L[1]=B,L[2]=V},y=(L,U,B,V,k)=>{L[0]=at(U,V,k,!0),L[1]=at(U,V+B,k,!0),L[2]=at(U,V+B+B,k,!0)},M=(L,U)=>{U[0]=L[0],U[1]=L[1],U[2]=L[2]},F=(L,U,B,V)=>{U[B]=V(L[0]),U[B+1]=V(L[1]),U[B+2]=V(L[2])},P=(L,U,B,V,k)=>(U[0]=xt(L[0],B,!0,V,k),U[1]=xt(L[1],B,!0,V,k),U[2]=xt(L[2],B,!0,V,k),U);return function(L,U,B,V,k,Z,te){const se=this.splatCount;V=V||0,k=k||se-1,Z===void 0&&(Z=V),B&&U>=1&&(t.copy(B),t.decompose(n,r,i),r.normalize(),t.makeRotationFromQuaternion(r),e.setFromMatrix4(t),I(o,e.elements[4],-e.elements[7],e.elements[1]),I(a,-e.elements[5],e.elements[8],-e.elements[2]),I(l,e.elements[3],-e.elements[6],e.elements[0]));const ve=W=>bm(W,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),_e=W=>ho(W,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let W=V;W<=k;W++){const Y=this.globalSplatIndexToSectionMap[W],oe=this.sections[Y];U=Math.min(U,oe.sphericalHarmonicsDegree);const ie=Ms(U),Te=W-oe.splatCountOffset,me=oe.bytesPerSplat*Te+j.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,Fe=new DataView(this.bufferData,oe.dataBase+me),ke=(W-V+Z)*ie;let Ne=B?0:this.compressionLevel,O=C;Ne!==te&&(Ne===1?te===0?O=Ph:te==2&&(O=ve):Ne===0&&(te===1?O=Bt:te==2&&(O=_e)));const et=this.minSphericalHarmonicsCoeff,Ee=this.maxSphericalHarmonicsCoeff;U>=1&&(y(m,Fe,3,0,this.compressionLevel),y(g,Fe,3,1,this.compressionLevel),y(p,Fe,3,2,this.compressionLevel),B?(P(m,m,this.compressionLevel,et,Ee),P(g,g,this.compressionLevel,et,Ee),P(p,p,this.compressionLevel,et,Ee),j.rotateSphericalHarmonics3(m,g,p,o,a,l,x,A,E)):(M(m,x),M(g,A),M(p,E)),F(x,L,ke,O),F(A,L,ke+3,O),F(E,L,ke+6,O),U>=2&&(y(m,Fe,5,9,this.compressionLevel),y(g,Fe,5,10,this.compressionLevel),y(p,Fe,5,11,this.compressionLevel),y(_,Fe,5,12,this.compressionLevel),y(v,Fe,5,13,this.compressionLevel),B?(P(m,m,this.compressionLevel,et,Ee),P(g,g,this.compressionLevel,et,Ee),P(p,p,this.compressionLevel,et,Ee),P(_,_,this.compressionLevel,et,Ee),P(v,v,this.compressionLevel,et,Ee),j.rotateSphericalHarmonics5(m,g,p,_,v,o,a,l,c,u,h,d,f,x,A,E,T,S)):(M(m,x),M(g,A),M(p,E),M(_,T),M(v,S)),F(x,L,ke+9,O),F(A,L,ke+12,O),F(E,L,ke+15,O),F(T,L,ke+18,O),F(S,L,ke+21,O)))}}}());this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){const n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n;const i=e.fullBucketCount*e.bucketSize;if(t<i)n=Math.floor(t/e.bucketSize);else{let r=i;n=e.fullBucketCount;let o=0;for(;r<e.splatCount;){let a=e.partiallyFilledBucketLengths[o];if(t>=r&&t<r+a)break;r+=a,n++,o++}}return n}getSplatCenter(e,t,n){const i=this.globalSplatIndexToSectionMap[e],r=this.sections[i],o=e-r.splatCountOffset,a=r.bytesPerSplat*o,l=new DataView(this.bufferData,r.dataBase+a),c=at(l,0,this.compressionLevel),u=at(l,1,this.compressionLevel),h=at(l,2,this.compressionLevel);if(this.compressionLevel>=1){const f=this.getBucketIndex(r,o)*j.BucketStorageSizeFloats,m=r.compressionScaleFactor,g=r.compressionScaleRange;t.x=(c-g)*m+r.bucketArray[f],t.y=(u-g)*m+r.bucketArray[f+1],t.z=(h-g)*m+r.bucketArray[f+2]}else t.x=c,t.y=u,t.z=h;n&&t.applyMatrix4(n)}getSplatColor(e,t){const n=this.globalSplatIndexToSectionMap[e],i=this.sections[n],r=e-i.splatCountOffset,o=i.bytesPerSplat*r+j.CompressionLevels[this.compressionLevel].ColorOffsetBytes,a=new Uint8Array(this.bufferData,i.dataBase+o,4);t.set(a[0],a[1],a[2],a[3])}fillSplatCenterArray(e,t,n,i,r){const o=this.splatCount;n=n||0,i=i||o-1,r===void 0&&(r=n);const a=new R;for(let l=n;l<=i;l++){const c=this.globalSplatIndexToSectionMap[l],u=this.sections[c],h=l-u.splatCountOffset,d=(l-n+r)*j.CenterComponentCount,f=u.bytesPerSplat*h,m=new DataView(this.bufferData,u.dataBase+f),g=at(m,0,this.compressionLevel),p=at(m,1,this.compressionLevel),_=at(m,2,this.compressionLevel);if(this.compressionLevel>=1){const x=this.getBucketIndex(u,h)*j.BucketStorageSizeFloats,A=u.compressionScaleFactor,E=u.compressionScaleRange;a.x=(g-E)*A+u.bucketArray[x],a.y=(p-E)*A+u.bucketArray[x+1],a.z=(_-E)*A+u.bucketArray[x+2]}else a.x=g,a.y=p,a.z=_;t&&a.applyMatrix4(t),e[d]=a.x,e[d+1]=a.y,e[d+2]=a.z}}fillSplatCovarianceArray(e,t,n,i,r,o){const a=this.splatCount,l=new R,c=new it;n=n||0,i=i||a-1,r===void 0&&(r=n);for(let u=n;u<=i;u++){const h=this.globalSplatIndexToSectionMap[u],d=this.sections[h],f=u-d.splatCountOffset,m=(u-n+r)*j.CovarianceComponentCount,g=d.bytesPerSplat*f+j.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,p=new DataView(this.bufferData,d.dataBase+g);l.set(xt(at(p,0,this.compressionLevel),this.compressionLevel),xt(at(p,1,this.compressionLevel),this.compressionLevel),xt(at(p,2,this.compressionLevel),this.compressionLevel)),c.set(xt(at(p,4,this.compressionLevel),this.compressionLevel),xt(at(p,5,this.compressionLevel),this.compressionLevel),xt(at(p,6,this.compressionLevel),this.compressionLevel),xt(at(p,3,this.compressionLevel),this.compressionLevel)),j.computeCovariance(l,c,t,e,m,o)}}fillSplatColorArray(e,t,n,i,r){const o=this.splatCount;n=n||0,i=i||o-1,r===void 0&&(r=n);for(let a=n;a<=i;a++){const l=this.globalSplatIndexToSectionMap[a],c=this.sections[l],u=a-c.splatCountOffset,h=(a-n+r)*j.ColorComponentCount,d=c.bytesPerSplat*u+j.CompressionLevels[this.compressionLevel].ColorOffsetBytes,f=new Uint8Array(this.bufferData,c.dataBase+d);let m=f[3];m=m>=t?m:0,e[h]=f[0],e[h+1]=f[1],e[h+2]=f[2],e[h+3]=m}}static parseHeader(e){const t=new Uint8Array(e,0,j.HeaderSizeBytes),n=new Uint16Array(e,0,j.HeaderSizeBytes/2),i=new Uint32Array(e,0,j.HeaderSizeBytes/4),r=new Float32Array(e,0,j.HeaderSizeBytes/4),o=t[0],a=t[1],l=i[1],c=i[2],u=i[3],h=i[4],d=n[10],f=new R(r[6],r[7],r[8]),m=r[9]||-Ni,g=r[10]||Ni;return{versionMajor:o,versionMinor:a,maxSectionCount:l,sectionCount:c,maxSplatCount:u,splatCount:h,compressionLevel:d,sceneCenter:f,minSphericalHarmonicsCoeff:m,maxSphericalHarmonicsCoeff:g}}static writeHeaderCountsToBuffer(e,t,n){const i=new Uint32Array(n,0,j.HeaderSizeBytes/4);i[2]=e,i[4]=t}static writeHeaderToBuffer(e,t){const n=new Uint8Array(t,0,j.HeaderSizeBytes),i=new Uint16Array(t,0,j.HeaderSizeBytes/2),r=new Uint32Array(t,0,j.HeaderSizeBytes/4),o=new Float32Array(t,0,j.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,r[1]=e.maxSectionCount,r[2]=e.sectionCount,r[3]=e.maxSplatCount,r[4]=e.splatCount,i[10]=e.compressionLevel,o[6]=e.sceneCenter.x,o[7]=e.sceneCenter.y,o[8]=e.sceneCenter.z,o[9]=e.minSphericalHarmonicsCoeff||-Ni,o[10]=e.maxSphericalHarmonicsCoeff||Ni}static parseSectionHeaders(e,t,n=0,i){const r=e.compressionLevel,o=e.maxSectionCount,a=new Uint16Array(t,n,o*j.SectionHeaderSizeBytes/2),l=new Uint32Array(t,n,o*j.SectionHeaderSizeBytes/4),c=new Float32Array(t,n,o*j.SectionHeaderSizeBytes/4),u=[];let h=0,d=h/2,f=h/4,m=j.HeaderSizeBytes+e.maxSectionCount*j.SectionHeaderSizeBytes,g=0;for(let p=0;p<o;p++){const _=l[f+1],v=l[f+2],x=l[f+3],A=c[f+4],E=A/2,T=a[d+10],S=l[f+6]||j.CompressionLevels[r].ScaleRange,C=l[f+8],I=l[f+9],y=I*4,M=T*x+y,F=a[d+20],{bytesPerSplat:P}=j.calculateComponentStorage(r,F),L=P*_,U=L+M,B={bytesPerSplat:P,splatCountOffset:g,splatCount:i?_:0,maxSplatCount:_,bucketSize:v,bucketCount:x,bucketBlockSize:A,halfBucketBlockSize:E,bucketStorageSizeBytes:T,bucketsStorageSizeBytes:M,splatDataStorageSizeBytes:L,storageSizeBytes:U,compressionScaleRange:S,compressionScaleFactor:E/S,base:m,bucketsBase:m+y,dataBase:m+M,fullBucketCount:C,partiallyFilledBucketCount:I,sphericalHarmonicsDegree:F};u[p]=B,m+=U,h+=j.SectionHeaderSizeBytes,d=h/2,f=h/4,g+=_}return u}static writeSectionHeaderToBuffer(e,t,n,i=0){const r=new Uint16Array(n,i,j.SectionHeaderSizeBytes/2),o=new Uint32Array(n,i,j.SectionHeaderSizeBytes/4),a=new Float32Array(n,i,j.SectionHeaderSizeBytes/4);o[0]=e.splatCount,o[1]=e.maxSplatCount,o[2]=t>=1?e.bucketSize:0,o[3]=t>=1?e.bucketCount:0,a[4]=t>=1?e.bucketBlockSize:0,r[10]=t>=1?j.BucketStorageSizeBytes:0,o[6]=t>=1?e.compressionScaleRange:0,o[7]=e.storageSizeBytes,o[8]=t>=1?e.fullBucketCount:0,o[9]=t>=1?e.partiallyFilledBucketCount:0,r[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){const i=new Uint32Array(t,n,j.SectionHeaderSizeBytes/4);i[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const n=j.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new R().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=j.parseSectionHeaders(n,this.bufferData,j.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){const n=j.CompressionLevels[e].BytesPerCenter,i=j.CompressionLevels[e].BytesPerScale,r=j.CompressionLevels[e].BytesPerRotation,o=j.CompressionLevels[e].BytesPerColor,a=Ms(t),l=j.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*a,c=n+i+r+o+l;return{bytesPerCenter:n,bytesPerScale:i,bytesPerRotation:r,bytesPerColor:o,sphericalHarmonicsComponentsPerSplat:a,sphericalHarmonicsBytesPerSplat:l,bytesPerSplat:c}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*j.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){const n=this.sections[t];for(let i=0;i<n.maxSplatCount;i++){const r=e+i;this.globalSplatIndexToLocalSplatIndexMap[r]=i,this.globalSplatIndexToSectionMap[r]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){j.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){const n=j.HeaderSizeBytes+j.SectionHeaderSizeBytes*e;j.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static generateFromUncompressedSplatArrays(e,t,n,i,r,o,a=[]){let l=0;for(let E=0;E<e.length;E++){const T=e[E];l=Math.max(T.sphericalHarmonicsDegree,l)}let c,u;for(let E=0;E<e.length;E++){const T=e[E];for(let S=0;S<T.splats.length;S++){const C=T.splats[S];for(let I=we.OFFSET.FRC0;I<we.OFFSET.FRC23&&I<C.length;I++)(!c||C[I]<c)&&(c=C[I]),(!u||C[I]>u)&&(u=C[I])}}c=c||-Ni,u=u||Ni;const{bytesPerSplat:h}=j.calculateComponentStorage(n,l),d=j.CompressionLevels[n].ScaleRange,f=[],m=[];let g=0;for(let E=0;E<e.length;E++){const T=e[E],S=new we(l);for(let Y=0;Y<T.splatCount;Y++){const oe=T.splats[Y];(oe[we.OFFSET.OPACITY]||0)>=t&&S.addSplat(oe)}const C=a[E]||{},I=(C.blockSizeFactor||1)*(r||j.BucketBlockSize),y=Math.ceil((C.bucketSizeFactor||1)*(o||j.BucketSize)),M=j.computeBucketsForUncompressedSplatArray(S,I,y),F=M.fullBuckets.length,P=M.partiallyFullBuckets.map(Y=>Y.splats.length),L=P.length,U=[...M.fullBuckets,...M.partiallyFullBuckets],B=S.splats.length*h,V=L*4,k=n>=1?U.length*j.BucketStorageSizeBytes+V:0,Z=B+k,te=new ArrayBuffer(Z),se=d/(I*.5),ve=new R;let _e=0;for(let Y=0;Y<U.length;Y++){const oe=U[Y];ve.fromArray(oe.center);for(let ie=0;ie<oe.splats.length;ie++){let Te=oe.splats[ie];const me=S.splats[Te],Fe=k+_e*h;j.writeSplatDataToSectionBuffer(me,te,Fe,n,l,ve,se,d,c,u),_e++}}if(g+=_e,n>=1){const Y=new Uint32Array(te,0,P.length*4);for(let ie=0;ie<P.length;ie++)Y[ie]=P[ie];const oe=new Float32Array(te,V,U.length*j.BucketStorageSizeFloats);for(let ie=0;ie<U.length;ie++){const Te=U[ie],me=ie*3;oe[me]=Te.center[0],oe[me+1]=Te.center[1],oe[me+2]=Te.center[2]}}f.push(te);const W=new ArrayBuffer(j.SectionHeaderSizeBytes);j.writeSectionHeaderToBuffer({maxSplatCount:_e,splatCount:_e,bucketSize:y,bucketCount:U.length,bucketBlockSize:I,compressionScaleRange:d,storageSizeBytes:Z,fullBucketCount:F,partiallyFilledBucketCount:L,sphericalHarmonicsDegree:l},n,W,0),m.push(W)}let p=0;for(let E of f)p+=E.byteLength;const _=j.HeaderSizeBytes+j.SectionHeaderSizeBytes*f.length+p,v=new ArrayBuffer(_);j.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:f.length,sectionCount:f.length,maxSplatCount:g,splatCount:g,compressionLevel:n,sceneCenter:i,minSphericalHarmonicsCoeff:c,maxSphericalHarmonicsCoeff:u},v);let x=j.HeaderSizeBytes;for(let E of m)new Uint8Array(v,x,j.SectionHeaderSizeBytes).set(new Uint8Array(E)),x+=j.SectionHeaderSizeBytes;for(let E of f)new Uint8Array(v,x,E.byteLength).set(new Uint8Array(E)),x+=E.byteLength;return new j(v)}static computeBucketsForUncompressedSplatArray(e,t,n){let i=e.splatCount;const r=t/2,o=new R,a=new R;for(let g=0;g<i;g++){const p=e.splats[g],_=[p[we.OFFSET.X],p[we.OFFSET.Y],p[we.OFFSET.Z]];(g===0||_[0]<o.x)&&(o.x=_[0]),(g===0||_[0]>a.x)&&(a.x=_[0]),(g===0||_[1]<o.y)&&(o.y=_[1]),(g===0||_[1]>a.y)&&(a.y=_[1]),(g===0||_[2]<o.z)&&(o.z=_[2]),(g===0||_[2]>a.z)&&(a.z=_[2])}const l=new R().copy(a).sub(o),c=Math.ceil(l.y/t),u=Math.ceil(l.z/t),h=new R,d=[],f={};for(let g=0;g<i;g++){const p=e.splats[g],_=[p[we.OFFSET.X],p[we.OFFSET.Y],p[we.OFFSET.Z]],v=Math.floor((_[0]-o.x)/t),x=Math.floor((_[1]-o.y)/t),A=Math.floor((_[2]-o.z)/t);h.x=v*t+o.x+r,h.y=x*t+o.y+r,h.z=A*t+o.z+r;const E=v*(c*u)+x*u+A;let T=f[E];T||(f[E]=T={splats:[],center:h.toArray()}),T.splats.push(g),T.splats.length>=n&&(d.push(T),f[E]=null)}const m=[];for(let g in f)if(f.hasOwnProperty(g)){const p=f[g];p&&m.push(p)}return{fullBuckets:d,partiallyFullBuckets:m}}};le(j,"CurrentMajorVersion",0),le(j,"CurrentMinorVersion",1),le(j,"CenterComponentCount",3),le(j,"ScaleComponentCount",3),le(j,"RotationComponentCount",4),le(j,"ColorComponentCount",4),le(j,"CovarianceComponentCount",6),le(j,"SplatScaleOffsetFloat",3),le(j,"SplatRotationOffsetFloat",6),le(j,"CompressionLevels",{0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}}),le(j,"CovarianceSizeFloats",6),le(j,"HeaderSizeBytes",4096),le(j,"SectionHeaderSizeBytes",1024),le(j,"BucketStorageSizeBytes",12),le(j,"BucketStorageSizeFloats",3),le(j,"BucketBlockSize",5),le(j,"BucketSize",256),le(j,"computeCovariance",function(){const e=new he,t=new ze,n=new ze,i=new ze,r=new ze,o=new ze,a=new ze;return function(l,c,u,h,d=0,f){e.makeScale(l.x,l.y,l.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(c),n.setFromMatrix4(e),i.copy(n).multiply(t),r.copy(i).transpose().premultiply(i),u&&(o.setFromMatrix4(u),a.copy(o).transpose(),r.multiply(a),r.premultiply(o)),f>=1?(h[d]=Bt(r.elements[0]),h[d+1]=Bt(r.elements[3]),h[d+2]=Bt(r.elements[6]),h[d+3]=Bt(r.elements[4]),h[d+4]=Bt(r.elements[7]),h[d+5]=Bt(r.elements[8])):(h[d]=r.elements[0],h[d+1]=r.elements[3],h[d+2]=r.elements[6],h[d+3]=r.elements[4],h[d+4]=r.elements[7],h[d+5]=r.elements[8])}}()),le(j,"dot3",(e,t,n,i,r)=>{r[0]=r[1]=r[2]=0;const o=i[0],a=i[1],l=i[2];j.addInto3(e[0]*o,e[1]*o,e[2]*o,r),j.addInto3(t[0]*a,t[1]*a,t[2]*a,r),j.addInto3(n[0]*l,n[1]*l,n[2]*l,r)}),le(j,"addInto3",(e,t,n,i)=>{i[0]=i[0]+e,i[1]=i[1]+t,i[2]=i[2]+n}),le(j,"dot5",(e,t,n,i,r,o,a)=>{a[0]=a[1]=a[2]=0;const l=o[0],c=o[1],u=o[2],h=o[3],d=o[4];j.addInto3(e[0]*l,e[1]*l,e[2]*l,a),j.addInto3(t[0]*c,t[1]*c,t[2]*c,a),j.addInto3(n[0]*u,n[1]*u,n[2]*u,a),j.addInto3(i[0]*h,i[1]*h,i[2]*h,a),j.addInto3(r[0]*d,r[1]*d,r[2]*d,a)}),le(j,"rotateSphericalHarmonics3",(e,t,n,i,r,o,a,l,c)=>{j.dot3(e,t,n,i,a),j.dot3(e,t,n,r,l),j.dot3(e,t,n,o,c)}),le(j,"rotateSphericalHarmonics5",(e,t,n,i,r,o,a,l,c,u,h,d,f,m,g,p,_,v)=>{const x=Math.sqrt(.25),A=Math.sqrt(3/4),E=Math.sqrt(1/3),T=Math.sqrt(4/3),S=Math.sqrt(1/12);c[0]=x*(l[2]*o[0]+l[0]*o[2]+(o[2]*l[0]+o[0]*l[2])),c[1]=l[1]*o[0]+o[1]*l[0],c[2]=A*(l[1]*o[1]+o[1]*l[1]),c[3]=l[1]*o[2]+o[1]*l[2],c[4]=x*(l[2]*o[2]-l[0]*o[0]+(o[2]*l[2]-o[0]*l[0])),j.dot5(e,t,n,i,r,c,m),u[0]=x*(a[2]*o[0]+a[0]*o[2]+(o[2]*a[0]+o[0]*a[2])),u[1]=a[1]*o[0]+o[1]*a[0],u[2]=A*(a[1]*o[1]+o[1]*a[1]),u[3]=a[1]*o[2]+o[1]*a[2],u[4]=x*(a[2]*o[2]-a[0]*o[0]+(o[2]*a[2]-o[0]*a[0])),j.dot5(e,t,n,i,r,u,g),h[0]=E*(a[2]*a[0]+a[0]*a[2])+-S*(l[2]*l[0]+l[0]*l[2]+(o[2]*o[0]+o[0]*o[2])),h[1]=T*a[1]*a[0]+-E*(l[1]*l[0]+o[1]*o[0]),h[2]=a[1]*a[1]+-x*(l[1]*l[1]+o[1]*o[1]),h[3]=T*a[1]*a[2]+-E*(l[1]*l[2]+o[1]*o[2]),h[4]=E*(a[2]*a[2]-a[0]*a[0])+-S*(l[2]*l[2]-l[0]*l[0]+(o[2]*o[2]-o[0]*o[0])),j.dot5(e,t,n,i,r,h,p),d[0]=x*(a[2]*l[0]+a[0]*l[2]+(l[2]*a[0]+l[0]*a[2])),d[1]=a[1]*l[0]+l[1]*a[0],d[2]=A*(a[1]*l[1]+l[1]*a[1]),d[3]=a[1]*l[2]+l[1]*a[2],d[4]=x*(a[2]*l[2]-a[0]*l[0]+(l[2]*a[2]-l[0]*a[0])),j.dot5(e,t,n,i,r,d,_),f[0]=x*(l[2]*l[0]+l[0]*l[2]-(o[2]*o[0]+o[0]*o[2])),f[1]=l[1]*l[0]-o[1]*o[0],f[2]=A*(l[1]*l[1]-o[1]*o[1]),f[3]=l[1]*l[2]-o[1]*o[2],f[4]=x*(l[2]*l[2]-l[0]*l[0]-(o[2]*o[2]-o[0]*o[0])),j.dot5(e,t,n,i,r,f,v)}),le(j,"writeSplatDataToSectionBuffer",function(){const e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),i=new ArrayBuffer(4),r=new ArrayBuffer(256),o=new it,a=new R,l=new R,{X:c,Y:u,Z:h,SCALE0:d,SCALE1:f,SCALE2:m,ROTATION0:g,ROTATION1:p,ROTATION2:_,ROTATION3:v,FDC0:x,FDC1:A,FDC2:E,OPACITY:T,FRC0:S,FRC9:C}=we.OFFSET,I=(y,M,F)=>{const P=F*2+1;return y=Math.round(y*M)+F,Zt(y,0,P)};return function(y,M,F,P,L,U,B,V,k=-Ni,Z=Ni){const te=Ms(L),se=j.CompressionLevels[P].BytesPerCenter,ve=j.CompressionLevels[P].BytesPerScale,_e=j.CompressionLevels[P].BytesPerRotation,W=j.CompressionLevels[P].BytesPerColor,Y=F,oe=Y+se,ie=oe+ve,Te=ie+_e,me=Te+W;if(y[g]!==void 0?(o.set(y[g],y[p],y[_],y[v]),o.normalize()):o.set(1,0,0,0),y[d]!==void 0?a.set(y[d]||0,y[f]||0,y[m]||0):a.set(0,0,0),P===0){const ke=new Float32Array(M,Y,j.CenterComponentCount),Ne=new Float32Array(M,ie,j.RotationComponentCount),O=new Float32Array(M,oe,j.ScaleComponentCount);if(Ne.set([o.x,o.y,o.z,o.w]),O.set([a.x,a.y,a.z]),ke.set([y[c],y[u],y[h]]),L>0){const et=new Float32Array(M,me,te);if(L>=1){for(let Ee=0;Ee<9;Ee++)et[Ee]=y[S+Ee]||0;if(L>=2)for(let Ee=0;Ee<15;Ee++)et[Ee+9]=y[C+Ee]||0}}}else{const ke=new Uint16Array(e,0,j.CenterComponentCount),Ne=new Uint16Array(n,0,j.RotationComponentCount),O=new Uint16Array(t,0,j.ScaleComponentCount);if(Ne.set([Bt(o.x),Bt(o.y),Bt(o.z),Bt(o.w)]),O.set([Bt(a.x),Bt(a.y),Bt(a.z)]),l.set(y[c],y[u],y[h]).sub(U),l.x=I(l.x,B,V),l.y=I(l.y,B,V),l.z=I(l.z,B,V),ke.set([l.x,l.y,l.z]),L>0){const et=P===1?Uint16Array:Uint8Array,Ee=P===1?2:1,We=new et(r,0,te);if(L>=1){for(let Xe=0;Xe<9;Xe++){const Ue=y[S+Xe]||0;We[Xe]=P===1?Bt(Ue):ho(Ue,k,Z)}const Le=9*Ee;if(as(We.buffer,0,M,me,Le),L>=2){for(let Xe=0;Xe<15;Xe++){const Ue=y[C+Xe]||0;We[Xe+9]=P===1?Bt(Ue):ho(Ue,k,Z)}as(We.buffer,Le,M,me+Le,15*Ee)}}}as(ke.buffer,0,M,Y,6),as(O.buffer,0,M,oe,6),as(Ne.buffer,0,M,ie,8)}const Fe=new Uint8ClampedArray(i,0,4);Fe.set([y[x]||0,y[A]||0,y[E]||0]),Fe[3]=y[T]||0,as(Fe.buffer,0,M,Te,4)}}());let Ie=j;const zf=new Uint8Array([112,108,121,10]),Hf=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),Ec="end_header",Cc=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),ii=(s,e)=>{const t=(1<<e)-1;return(s&t)/t},Vf=(s,e)=>{s.x=ii(e>>>21,11),s.y=ii(e>>>11,10),s.z=ii(e,11)},hT=(s,e)=>{s.x=ii(e>>>24,8),s.y=ii(e>>>16,8),s.z=ii(e>>>8,8),s.w=ii(e,8)},dT=(s,e)=>{const t=1/(Math.sqrt(2)*.5),n=(ii(e>>>20,10)-.5)*t,i=(ii(e>>>10,10)-.5)*t,r=(ii(e,10)-.5)*t,o=Math.sqrt(1-(n*n+i*i+r*r));switch(e>>>30){case 0:s.set(o,n,i,r);break;case 1:s.set(n,o,i,r);break;case 2:s.set(n,i,o,r);break;case 3:s.set(n,i,r,o);break}},ls=(s,e,t)=>s*(1-t)+e*t,tn=(s,e)=>{var t;return(t=s.properties.find(n=>n.name===e&&n.storage))==null?void 0:t.storage},nn=class nn{static decodeHeaderText(e){let t,n,i;const r=e.split(`
`).filter(l=>!l.startsWith("comment "));let o=0,a=!1;for(let l=1;l<r.length;++l){const c=r[l].split(" ");switch(c[0]){case"format":if(c[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:c[1],count:parseInt(c[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"&&(i=t);break;case"property":{if(!Cc.has(c[1]))throw new Error(`Unrecognized property data type '${c[1]}' in ply header`);const u=Cc.get(c[1]),h=u.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(o+=u.BYTES_PER_ELEMENT),t.properties.push({type:c[1],name:c[2],storage:null,byteSize:u.BYTES_PER_ELEMENT,storageSizeByes:h}),t.storageSizeBytes+=h;break}case Ec:a=!0;break;default:throw new Error(`Unrecognized header value '${c[0]}' in ply header`)}if(a)break}return{chunkElement:n,vertexElement:i,bytesPerSplat:o,headerSizeBytes:e.indexOf(Ec)+Ec.length+1,sphericalHarmonicsDegree:0}}static decodeHeader(e){const t=(u,h)=>{const d=u.length-h.length;let f,m;for(f=0;f<=d;++f){for(m=0;m<h.length&&u[f+m]===h[m];++m);if(m===h.length)return f}return-1},n=(u,h)=>{if(u.length<h.length)return!1;for(let d=0;d<h.length;++d)if(u[d]!==h[d])return!1;return!0};let i=new Uint8Array(e),r;if(i.length>=zf.length&&!n(i,zf))throw new Error("Invalid PLY header");if(r=t(i,Hf),r===-1)throw new Error("End of PLY header not found");const o=new TextDecoder("ascii").decode(i.slice(0,r)),{chunkElement:a,vertexElement:l,bytesPerSplat:c}=nn.decodeHeaderText(o);return{headerSizeBytes:r+Hf.length,bytesPerSplat:c,chunkElement:a,vertexElement:l}}static readElementData(e,t,n,i,r,o=null){let a=t instanceof DataView?t:new DataView(t);i=i||0,r=r||e.count-1;for(let l=i;l<=r;++l)for(let c=0;c<e.properties.length;++c){const u=e.properties[c],h=Cc.get(u.type),d=h.BYTES_PER_ELEMENT*e.count;if((!u.storage||u.storage.byteLength<d)&&(!o||o(u.name))&&(u.storage=new h(e.count)),u.storage)switch(u.type){case"char":u.storage[l]=a.getInt8(n);break;case"uchar":u.storage[l]=a.getUint8(n);break;case"short":u.storage[l]=a.getInt16(n,!0);break;case"ushort":u.storage[l]=a.getUint16(n,!0);break;case"int":u.storage[l]=a.getInt32(n,!0);break;case"uint":u.storage[l]=a.getUint32(n,!0);break;case"float":u.storage[l]=a.getFloat32(n,!0);break;case"double":u.storage[l]=a.getFloat64(n,!0);break}n+=u.byteSize}return n}static readPly(e,t=null){const n=nn.decodeHeader(e);let i=nn.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return nn.readElementData(n.vertexElement,e,i,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement}}static getElementStorageArrays(e,t){const n=tn(e,"min_x"),i=tn(e,"min_y"),r=tn(e,"min_z"),o=tn(e,"max_x"),a=tn(e,"max_y"),l=tn(e,"max_z"),c=tn(e,"min_scale_x"),u=tn(e,"min_scale_y"),h=tn(e,"min_scale_z"),d=tn(e,"max_scale_x"),f=tn(e,"max_scale_y"),m=tn(e,"max_scale_z"),g=tn(t,"packed_position"),p=tn(t,"packed_rotation"),_=tn(t,"packed_scale"),v=tn(t,"packed_color");return{positionExtremes:{minX:n,maxX:o,minY:i,maxY:a,minZ:r,maxZ:l},scaleExtremes:{minScaleX:c,maxScaleX:d,minScaleY:u,maxScaleY:f,minScaleZ:h,maxScaleZ:m},position:g,rotation:p,scale:_,color:v}}static parseToUncompressedSplatBufferSection(e,t,n,i,r,o,a,l,c,u=null){nn.readElementData(t,o,a,n,i,u);const h=Ie.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:d,scaleExtremes:f,position:m,rotation:g,scale:p,color:_}=nn.getElementStorageArrays(e,t),v=we.createSplat();for(let x=n;x<=i;++x){nn.decompressSplat(x,r,m,d,p,f,g,_,v);const A=x*h+c;Ie.writeSplatDataToSectionBuffer(v,l,A,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,i,r,o,a,l,c=null){nn.readElementData(t,o,a,n,i,c);const{positionExtremes:u,scaleExtremes:h,position:d,rotation:f,scale:m,color:g}=nn.getElementStorageArrays(e,t);for(let p=n;p<=i;++p){const _=we.createSplat();nn.decompressSplat(p,r,d,u,m,h,f,g,_),l.addSplat(_)}}static parseToUncompressedSplatArray(e){const{chunkElement:t,vertexElement:n}=nn.readPly(e),i=new we,{positionExtremes:r,scaleExtremes:o,position:a,rotation:l,scale:c,color:u}=nn.getElementStorageArrays(t,n);for(let d=0;d<n.count;++d){i.addDefaultSplat();const f=i.getSplat(i.splatCount-1);nn.decompressSplat(d,0,a,r,c,o,l,u,f)}return new he().identity(),i}};le(nn,"decompressSplat",function(){const e=new R,t=new it,n=new R,i=new je,r=we.OFFSET;return function(o,a,l,c,u,h,d,f,m){m=m||we.createSplat();const g=Math.floor((a+o)/256);return Vf(e,l[o]),dT(t,d[o]),Vf(n,u[o]),hT(i,f[o]),m[r.X]=ls(c.minX[g],c.maxX[g],e.x),m[r.Y]=ls(c.minY[g],c.maxY[g],e.y),m[r.Z]=ls(c.minZ[g],c.maxZ[g],e.z),m[r.ROTATION0]=t.x,m[r.ROTATION1]=t.y,m[r.ROTATION2]=t.z,m[r.ROTATION3]=t.w,m[r.SCALE0]=Math.exp(ls(h.minScaleX[g],h.maxScaleX[g],n.x)),m[r.SCALE1]=Math.exp(ls(h.minScaleY[g],h.maxScaleY[g],n.y)),m[r.SCALE2]=Math.exp(ls(h.minScaleZ[g],h.maxScaleZ[g],n.z)),m[r.FDC0]=Zt(Math.floor(i.x*255),0,255),m[r.FDC1]=Zt(Math.floor(i.y*255),0,255),m[r.FDC2]=Zt(Math.floor(i.z*255),0,255),m[r.OPACITY]=Zt(Math.floor(i.w*255),0,255),m}}());let Mr=nn;const Yi={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[Rm,Fh,Lh,Bh,Uh,Oh,Nh]=[0,1,2,3,4,5,6],Gf={double:Rm,int:Fh,uint:Lh,float:Bh,short:Uh,ushort:Oh,uchar:Nh},fT={[Rm]:8,[Fh]:4,[Lh]:4,[Bh]:4,[Uh]:2,[Oh]:2,[Nh]:1},Cn=class Cn{constructor(){}decodeSectionHeader(e,t,n=0){const i=[];let r=!1,o=-1,a=0,l=!1,c=null;const u=[],h=[],d=[],f={};for(let _=n;_<e.length;_++){const v=e[_].trim();if(v.startsWith("element"))if(r){o--;break}else{r=!0,n=_,o=_;const x=v.split(" ");let A=0;for(let E of x){const T=E.trim();T.length>0&&(A++,A===2?c=T:A===3&&(a=parseInt(T)))}}else if(v.startsWith("property")){const x=v.match(/(\w+)\s+(\w+)\s+(\w+)/);if(x){const A=x[2],E=x[3];d.push(E);const T=t[E];f[E]=A;const S=Gf[A];T!==void 0&&(u.push(T),h[T]=S)}}if(v===Cn.HeaderEndToken){l=!0;break}r&&(i.push(v),o++)}const m=[];let g=0;for(let _ of d){const v=f[_];if(f.hasOwnProperty(_)){const x=t[_];x!==void 0&&(m[x]=g)}g+=fT[Gf[v]]}const p=this.decodeSphericalHarmonicsFromSectionHeader(d,t);return{headerLines:i,headerStartLine:n,headerEndLine:o,fieldTypes:h,fieldIds:u,fieldOffsets:m,bytesPerVertex:g,vertexCount:a,dataSizeBytes:g*a,endOfHeader:l,sectionName:c,sphericalHarmonicsDegree:p.degree,sphericalHarmonicsCoefficientsPerChannel:p.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:p.degree1Fields,sphericalHarmonicsDegree2Fields:p.degree2Fields}}decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,i=0;for(let l of e)l.startsWith("f_rest")&&n++;i=n/3;let r=0;i>=3&&(r=1),i>=8&&(r=2);let o=[],a=[];for(let l=0;l<3;l++){if(r>=1)for(let c=0;c<3;c++)o.push(t["f_rest_"+(c+i*l)]);if(r>=2)for(let c=0;c<5;c++)a.push(t["f_rest_"+(c+i*l+3)])}return{degree:r,coefficientsPerChannel:i,degree1Fields:o,degree2Fields:a}}static getHeaderSectionNames(e){const t=[];for(let n of e)if(n.startsWith("element")){const i=n.split(" ");let r=0;for(let o of i){const a=o.trim();a.length>0&&(r++,r===2&&t.push(a))}}return t}static checkTextForEndHeader(e){return!!e.includes(Cn.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,i){const r=new Uint8Array(e,Math.max(0,t-n),n),o=i.decode(r);return Cn.checkTextForEndHeader(o)}static extractHeaderFromBufferToText(e){const t=new TextDecoder;let n=0,i="";const r=100;for(;;){if(n+r>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,n,r);if(i+=t.decode(o),n+=r,Cn.checkBufferForEndHeader(e,n,r*2,t))break}return i}readHeaderFromBuffer(e){const t=new TextDecoder;let n=0,i="";const r=100;for(;;){if(n+r>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,n,r);if(i+=t.decode(o),n+=r,Cn.checkBufferForEndHeader(e,n,r*2,t))break}return i}static convertHeaderTextToLines(e){const t=e.split(`
`),n=[];for(let i=0;i<t.length;i++){const r=t[i].trim();if(n.push(r),r===Cn.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){const t=Cn.convertHeaderTextToLines(e);let n=Yi.INRIAV1;for(let i=0;i<t.length;i++){const r=t[i].trim();if(r.startsWith("element chunk")||r.match(/[A-Za-z]*packed_[A-Za-z]*/))n=Yi.PlayCanvasCompressed;else if(r.startsWith("element codebook_centers"))n=Yi.INRIAV2;else if(r===Cn.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){const t=Cn.extractHeaderFromBufferToText(e);return Cn.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,i,r,o,a=!0){const l=n*t.bytesPerVertex+i,c=t.fieldOffsets,u=t.fieldTypes;for(let h of r){const d=u[h];d===Bh?o[h]=e.getFloat32(l+c[h],!0):d===Uh?o[h]=e.getInt16(l+c[h],!0):d===Oh?o[h]=e.getUint16(l+c[h],!0):d===Fh?o[h]=e.getInt32(l+c[h],!0):d===Lh?o[h]=e.getUint32(l+c[h],!0):d===Nh&&(a?o[h]=e.getUint8(l+c[h])/255:o[h]=e.getUint8(l+c[h]))}}};le(Cn,"HeaderEndToken","end_header");let jt=Cn;const Im=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],pT=Im.map((s,e)=>e),[Wf,mT,gT,_T,xT,vT,yT,AT,ST,MT,Xf,TT,ET,qf,Qf,CT,wT,bT]=pT,yr=class yr{constructor(){this.plyParserutils=new jt}decodeHeaderLines(e){let t=0;e.forEach(u=>{u.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let r=Array.from(Array(Math.max(n-1,0))).map((u,h)=>`f_rest_${h+1}`);const o=[...Im,...r],a=o.map((u,h)=>h),l=a.reduce((u,h)=>(u[o[h]]=h,u),{}),c=this.plyParserutils.decodeSectionHeader(e,l,0);return c.splatCount=c.vertexCount,c.bytesPerSplat=c.bytesPerVertex,c.fieldsToReadIndexes=a,c}decodeHeaderText(e){const t=jt.convertHeaderTextToLines(e),n=this.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(jt.HeaderEndToken)+jt.HeaderEndToken.length+1,n}decodeHeaderFromBuffer(e){const t=this.plyParserutils.readHeaderFromBuffer(e);return this.decodeHeaderText(t)}findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}parseToUncompressedSplatBufferSection(e,t,n,i,r,o,a,l=0){l=Math.min(l,e.sphericalHarmonicsDegree);const c=Ie.CompressionLevels[0].SphericalHarmonicsDegrees[l].BytesPerSplat;for(let u=t;u<=n;u++){const h=yr.parseToUncompressedSplat(i,u,e,r,l),d=u*c+a;Ie.writeSplatDataToSectionBuffer(h,o,d,0,l)}}parseToUncompressedSplatArraySection(e,t,n,i,r,o,a=0){a=Math.min(a,e.sphericalHarmonicsDegree);for(let l=t;l<=n;l++){const c=yr.parseToUncompressedSplat(i,l,e,r,a);o.addSplat(c)}}decodeSectionSplatData(e,t,n,i){i=Math.min(i,n.sphericalHarmonicsDegree);const r=new we(i);for(let o=0;o<t;o++){const a=yr.parseToUncompressedSplat(e,o,n,0,i);r.addSplat(a)}return r}static readSplat(e,t,n,i,r){return jt.readVertex(e,t,n,i,t.fieldsToReadIndexes,r,!0)}parseToUncompressedSplatArray(e,t=0){const n=this.decodeHeaderFromBuffer(e),i=n.splatCount,r=this.findSplatData(e,n);return this.decodeSectionSplatData(r,i,n,t)}};le(yr,"parseToUncompressedSplat",function(){let e=[];const t=new it,n=we.OFFSET.X,i=we.OFFSET.Y,r=we.OFFSET.Z,o=we.OFFSET.SCALE0,a=we.OFFSET.SCALE1,l=we.OFFSET.SCALE2,c=we.OFFSET.ROTATION0,u=we.OFFSET.ROTATION1,h=we.OFFSET.ROTATION2,d=we.OFFSET.ROTATION3,f=we.OFFSET.FDC0,m=we.OFFSET.FDC1,g=we.OFFSET.FDC2,p=we.OFFSET.OPACITY,_=[];for(let v=0;v<45;v++)_[v]=we.OFFSET.FRC0+v;return function(v,x,A,E=0,T=0){T=Math.min(T,A.sphericalHarmonicsDegree),yr.readSplat(v,A,x,E,e);const S=we.createSplat(T);if(e[Wf]!==void 0?(S[o]=Math.exp(e[Wf]),S[a]=Math.exp(e[mT]),S[l]=Math.exp(e[gT])):(S[o]=.01,S[a]=.01,S[l]=.01),e[Xf]!==void 0){const C=.28209479177387814;S[f]=(.5+C*e[Xf])*255,S[m]=(.5+C*e[TT])*255,S[g]=(.5+C*e[ET])*255}else e[Qf]!==void 0?(S[f]=e[Qf]*255,S[m]=e[CT]*255,S[g]=e[wT]*255):(S[f]=0,S[m]=0,S[g]=0);if(e[qf]!==void 0&&(S[p]=1/(1+Math.exp(-e[qf]))*255),S[f]=Zt(Math.floor(S[f]),0,255),S[m]=Zt(Math.floor(S[m]),0,255),S[g]=Zt(Math.floor(S[g]),0,255),S[p]=Zt(Math.floor(S[p]),0,255),T>=1&&e[bT]!==void 0){for(let C=0;C<9;C++)S[_[C]]=e[A.sphericalHarmonicsDegree1Fields[C]];if(T>=2)for(let C=0;C<15;C++)S[_[9+C]]=e[A.sphericalHarmonicsDegree2Fields[C]]}return t.set(e[_T],e[xT],e[vT],e[yT]),t.normalize(),S[c]=t.x,S[u]=t.y,S[h]=t.z,S[d]=t.w,S[n]=e[AT],S[i]=e[ST],S[r]=e[MT],S}}());let rl=yr;const Pm=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],wa=Pm.map((s,e)=>e),[ba,RT,IT,Yf,Ra,PT,wc]=[0,1,4,16,17,18,19],Dm=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],Bu=Dm.map((s,e)=>e),[Kf,DT,FT,LT,BT,UT,OT,NT,kT,zT,Uu,Fm,Lm,jf]=Bu,Zf=Uu,HT=Fm,VT=Lm,Ia=s=>{const e=(31744&s)>>10,t=1023&s;return(s>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)},yo=class yo{constructor(){this.plyParserutils=new jt}decodeSectionHeadersFromHeaderLines(e){const t=Bu.reduce((u,h)=>(u[Dm[h]]=h,u),{}),n=wa.reduce((u,h)=>(u[Pm[h]]=h,u),{}),i=jt.getHeaderSectionNames(e);let r;for(let u=0;u<i.length;u++)i[u]==="codebook_centers"&&(r=u);let o=0,a=!1;const l=[];let c=0;for(;!a;){let u;c===r?u=this.plyParserutils.decodeSectionHeader(e,n,o):u=this.plyParserutils.decodeSectionHeader(e,t,o),a=u.endOfHeader,o=u.headerEndLine+1,a||(u.splatCount=u.vertexCount,u.bytesPerSplat=u.bytesPerVertex),l.push(u),c++}return l}decodeSectionHeadersFromHeaderText(e){const t=jt.convertHeaderTextToLines(e);return this.decodeSectionHeadersFromHeaderLines(t)}getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}decodeHeaderFromHeaderText(e){const t=e.indexOf(jt.HeaderEndToken)+jt.HeaderEndToken.length+1,n=this.decodeSectionHeadersFromHeaderText(e),i=this.getSplatCountFromSectionHeaders(n);return{headerSizeBytes:t,sectionHeaders:n,splatCount:i}}decodeHeaderFromBuffer(e){const t=this.plyParserutils.readHeaderFromBuffer(e);return this.decodeHeaderFromHeaderText(t)}findVertexData(e,t,n){let i=t.headerSizeBytes;for(let r=0;r<n&&r<t.sectionHeaders.length;r++){const o=t.sectionHeaders[r];i+=o.dataSizeBytes}return new DataView(e,i,t.sectionHeaders[n].dataSizeBytes)}decodeCodeBook(e,t){const n=[],i=[];for(let r=0;r<t.vertexCount;r++){jt.readVertex(e,t,r,0,wa,n);for(let o of wa){const a=wa[o];let l=i[a];l||(i[a]=l=[]),l.push(n[o])}}for(let r=0;r<i.length;r++){const o=i[r],a=.28209479177387814;for(let l=0;l<o.length;l++){const c=Ia(o[l]);r===Yf?o[l]=Math.round(1/(1+Math.exp(-c))*255):r===ba?o[l]=Math.round((.5+a*c)*255):r===Ra?o[l]=Math.exp(c):o[l]=c}}return i}decodeSectionSplatData(e,t,n,i,r){r=Math.min(r,n.sphericalHarmonicsDegree);const o=new we(r);for(let a=0;a<t;a++){const l=yo.parseToUncompressedSplat(e,a,n,i,0,r);o.addSplat(l)}return o}static readSplat(e,t,n,i,r){return jt.readVertex(e,t,n,i,Bu,r,!1)}parseToUncompressedSplatArray(e,t=0){const n=[],i=this.decodeHeaderFromBuffer(e,t);let r;for(let a=0;a<i.sectionHeaders.length;a++){const l=i.sectionHeaders[a];if(l.sectionName==="codebook_centers"){const c=this.findVertexData(e,i,a);r=this.decodeCodeBook(c,l)}}for(let a=0;a<i.sectionHeaders.length;a++){const l=i.sectionHeaders[a];if(l.sectionName!=="codebook_centers"){const c=l.vertexCount,u=this.findVertexData(e,i,a),h=this.decodeSectionSplatData(u,c,l,r,t);n.push(h)}}const o=new we(t);for(let a of n)for(let l of a.splats)o.addSplat(l);return o}};le(yo,"parseToUncompressedSplat",function(){let e=[];const t=new it,n=we.OFFSET.X,i=we.OFFSET.Y,r=we.OFFSET.Z,o=we.OFFSET.SCALE0,a=we.OFFSET.SCALE1,l=we.OFFSET.SCALE2,c=we.OFFSET.ROTATION0,u=we.OFFSET.ROTATION1,h=we.OFFSET.ROTATION2,d=we.OFFSET.ROTATION3,f=we.OFFSET.FDC0,m=we.OFFSET.FDC1,g=we.OFFSET.FDC2,p=we.OFFSET.OPACITY,_=[];for(let v=0;v<45;v++)_[v]=we.OFFSET.FRC0+v;return function(v,x,A,E,T=0,S=0){S=Math.min(S,A.sphericalHarmonicsDegree),yo.readSplat(v,A,x,T,e);const C=we.createSplat(S);if(e[Kf]!==void 0?(C[o]=E[Ra][e[Kf]],C[a]=E[Ra][e[DT]],C[l]=E[Ra][e[FT]]):(C[o]=.01,C[a]=.01,C[l]=.01),e[Uu]!==void 0?(C[f]=E[ba][e[Uu]],C[m]=E[ba][e[Fm]],C[g]=E[ba][e[Lm]]):e[Zf]!==void 0?(C[f]=e[Zf]*255,C[m]=e[HT]*255,C[g]=e[VT]*255):(C[f]=0,C[m]=0,C[g]=0),e[jf]!==void 0&&(C[p]=E[Yf][e[jf]]),C[f]=Zt(Math.floor(C[f]),0,255),C[m]=Zt(Math.floor(C[m]),0,255),C[g]=Zt(Math.floor(C[g]),0,255),C[p]=Zt(Math.floor(C[p]),0,255),S>=1&&A.sphericalHarmonicsDegree>=1){for(let P=0;P<9;P++){const L=E[RT+P%3];C[_[P]]=L[e[A.sphericalHarmonicsDegree1Fields[P]]]}if(S>=2&&A.sphericalHarmonicsDegree>=2)for(let P=0;P<15;P++){const L=E[IT+P%5];C[_[9+P]]=L[e[A.sphericalHarmonicsDegree2Fields[P]]]}}const I=E[PT][e[LT]],y=E[wc][e[BT]],M=E[wc][e[UT]],F=E[wc][e[OT]];return t.set(I,y,M,F),t.normalize(),C[c]=t.x,C[u]=t.y,C[h]=t.z,C[d]=t.w,C[n]=Ia(e[NT]),C[i]=Ia(e[kT]),C[r]=Ia(e[zT]),C}}());let Ou=yo;class GT{static parseToUncompressedSplatArray(e,t=0){const n=jt.determineHeaderFormatFromPlyBuffer(e);if(n===Yi.PlayCanvasCompressed)return Mr.parseToUncompressedSplatArray(e);if(n===Yi.INRIAV1)return new rl().parseToUncompressedSplatArray(e,t);if(n===Yi.INRIAV2)return new Ou().parseToUncompressedSplatArray(e,t)}}class kh{constructor(e,t,n,i){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=i}partitionUncompressedSplatArray(e){let t,n,i;if(this.partitionGenerator){const o=this.partitionGenerator(e);t=o.groupingParameters,n=o.sectionCount,i=o.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,i=this.sectionFilters;const r=[];for(let o=0;o<n;o++){const a=new we(e.sphericalHarmonicsDegree),l=i[o];for(let c=0;c<e.splatCount;c++)l(c)&&a.addSplat(e.splats[c]);r.push(a)}return{splatArrays:r,parameters:t}}static getStandardPartitioner(e=0,t=new R,n=Ie.BucketBlockSize,i=Ie.BucketSize){const r=o=>{const a=we.OFFSET.X,l=we.OFFSET.Y,c=we.OFFSET.Z;e<=0&&(e=o.splatCount);const u=new R,h=.5,d=_=>{_.x=Math.floor(_.x/h)*h,_.y=Math.floor(_.y/h)*h,_.z=Math.floor(_.z/h)*h};o.splats.forEach(_=>{u.set(_[a],_[l],_[c]).sub(t),d(u),_.centerDist=u.lengthSq()}),o.splats.sort((_,v)=>{let x=_.centerDist,A=v.centerDist;return x>A?1:-1});const f=[],m=[];e=Math.min(o.splatCount,e);const g=Math.ceil(o.splatCount/e);let p=0;for(let _=0;_<g;_++){let v=p;f.push(x=>x>=v&&x<v+e),m.push({blocksSize:n,bucketSize:i}),p+=e}return{sectionCount:f.length,sectionFilters:f,groupingParameters:m}};return new kh(void 0,void 0,void 0,r)}}class Rl{constructor(e,t,n,i,r,o,a){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=i,this.sceneCenter=r?new R().copy(r):void 0,this.blockSize=o,this.bucketSize=a}generateFromUncompressedSplatArray(e){const t=this.splatPartitioner.partitionUncompressedSplatArray(e);return Ie.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,i=new R,r=Ie.BucketBlockSize,o=Ie.BucketSize){const a=kh.getStandardPartitioner(n,i,r,o);return new Rl(a,e,t,n,i,r,o)}}const Ot={Downloading:0,Processing:1,Done:2};class zh extends Error{constructor(e){super(e)}}const Et={DirectToSplatBuffer:0,DirectToSplatArray:1,DownloadBeforeProcessing:2};function $f(s,e){let t=0;for(let i of s)t+=i.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let i of s)new Uint8Array(e,n,i.sizeBytes).set(i.data),n+=i.sizeBytes;return e}function Jf(s,e,t,n,i,r,o,a){return e?Rl.getStandardGenerator(t,n,i,r,o,a).generateFromUncompressedSplatArray(s):Ie.generateFromUncompressedSplatArrays([s],t,0,new R)}class Hh{static loadFromURL(e,t,n,i,r,o,a=!0,l=0,c,u,h,d){let f=n?Et.DirectToSplatBuffer:Et.DirectToSplatArray;a&&(f=Et.DirectToSplatArray);const m=Ze.ProgressiveLoadSectionSize,g=Ie.HeaderSizeBytes+Ie.SectionHeaderSizeBytes,p=1;let _,v,x,A,E=0,T=0,S=!1,C=!1,I=!1;const y=Rh();let M=0,F=0,P=0,L="",U=null,B=[],V;const k=new TextDecoder,Z=new rl,te=(se,ve,_e)=>{const W=se>=100;if(_e&&(B.push({data:_e,sizeBytes:_e.byteLength,startBytes:P,endBytes:P+_e.byteLength}),P+=_e.byteLength),f===Et.DownloadBeforeProcessing)W&&y.resolve(B);else{if(S){if(I&&!C){const Y=U.headerSizeBytes+U.chunkElement.storageSizeBytes;A=$f(B,A),A.byteLength>=Y&&(Mr.readElementData(U.chunkElement,A,U.headerSizeBytes),M=Y,F=Y,C=!0)}}else if(L+=k.decode(_e),jt.checkTextForEndHeader(L)){const Y=jt.determineHeaderFormatFromHeaderText(L);if(Y===Yi.INRIAV1)U=Z.decodeHeaderText(L),E=U.splatCount,C=!0,I=!1;else if(Y===Yi.PlayCanvasCompressed)U=Mr.decodeHeaderText(L),E=U.vertexElement.count,I=!0;else{if(n)throw new zh("PlyLoader.loadFromURL() -> Selected Ply format cannot be directly loaded.");f=Et.DownloadBeforeProcessing;return}l=Math.min(l,U.sphericalHarmonicsDegree);const oe=Ie.CompressionLevels[0].SphericalHarmonicsDegrees[l],ie=g+oe.BytesPerSplat*E;f===Et.DirectToSplatBuffer?(v=new ArrayBuffer(ie),Ie.writeHeaderToBuffer({versionMajor:Ie.CurrentMajorVersion,versionMinor:Ie.CurrentMinorVersion,maxSectionCount:p,sectionCount:p,maxSplatCount:E,splatCount:T,compressionLevel:0,sceneCenter:new R},v)):V=new we(l),M=U.headerSizeBytes,F=U.headerSizeBytes,S=!0}if(S&&C){if(B.length>0&&(_=$f(B,_),P-M>m||W)){const oe=P-F,ie=Math.floor(oe/U.bytesPerSplat),Te=ie*U.bytesPerSplat,me=oe-Te,Fe=T+ie,ke=F-B[0].startBytes,Ne=new DataView(_,ke,Te),O=Ie.CompressionLevels[0].SphericalHarmonicsDegrees[l],et=T*O.BytesPerSplat+g;if(f===Et.DirectToSplatBuffer?I?Mr.parseToUncompressedSplatBufferSection(U.chunkElement,U.vertexElement,0,ie-1,T,Ne,0,v,et):Z.parseToUncompressedSplatBufferSection(U,0,ie-1,Ne,0,v,et,l):I?Mr.parseToUncompressedSplatArraySection(U.chunkElement,U.vertexElement,0,ie-1,T,Ne,0,V):Z.parseToUncompressedSplatArraySection(U,0,ie-1,Ne,0,V,l),T=Fe,f===Et.DirectToSplatBuffer&&(x||(Ie.writeSectionHeaderToBuffer({maxSplatCount:E,splatCount:T,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:l},0,v,Ie.HeaderSizeBytes),x=new Ie(v,!1)),x.updateLoadedCounts(1,T),i&&i(x,W)),M+=m,F+=Te,me===0)B=[];else{let Ee=[],We=0;for(let Le=B.length-1;Le>=0;Le--){const Xe=B[Le];if(We+=Xe.sizeBytes,Ee.unshift(Xe),We>=me)break}B=Ee}}W&&(f===Et.DirectToSplatBuffer?y.resolve(x):y.resolve(V))}}t&&t(se,ve,Ot.Downloading)};return t&&t(0,"0%",Ot.Downloading),bh(e,te,!1).then(()=>(t&&t(0,"0%",Ot.Processing),y.promise.then(se=>{if(t&&t(100,"100%",Ot.Done),f===Et.DownloadBeforeProcessing){const ve=B.map(_e=>_e.data);return new Blob(ve).arrayBuffer().then(_e=>Hh.loadFromFileData(_e,r,o,a,l,c,u,h,d))}else return f===Et.DirectToSplatBuffer?se:Jn(()=>Jf(se,a,r,o,c,u,h,d))})))}static loadFromFileData(e,t,n,i,r=0,o,a,l,c){return Jn(()=>GT.parseToUncompressedSplatArray(e,r)).then(u=>Jf(u,i,t,n,o,a,l,c))}}const ut=class ut{static parseToUncompressedSplatBufferSection(e,t,n,i,r,o){const a=Ie.CompressionLevels[0].BytesPerCenter,l=Ie.CompressionLevels[0].BytesPerScale,c=Ie.CompressionLevels[0].BytesPerRotation,u=Ie.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let h=e;h<=t;h++){const d=h*ut.RowSizeBytes+i,f=new Float32Array(n,d,3),m=new Float32Array(n,d+ut.CenterSizeBytes,3),g=new Uint8Array(n,d+ut.CenterSizeBytes+ut.ScaleSizeBytes,4),p=new Uint8Array(n,d+ut.CenterSizeBytes+ut.ScaleSizeBytes+ut.RotationSizeBytes,4),_=new it((p[1]-128)/128,(p[2]-128)/128,(p[3]-128)/128,(p[0]-128)/128);_.normalize();const v=h*u+o,x=new Float32Array(r,v,3),A=new Float32Array(r,v+a,3),E=new Float32Array(r,v+a+l,4),T=new Uint8Array(r,v+a+l+c,4);x[0]=f[0],x[1]=f[1],x[2]=f[2],A[0]=m[0],A[1]=m[1],A[2]=m[2],E[0]=_.w,E[1]=_.x,E[2]=_.y,E[3]=_.z,T[0]=g[0],T[1]=g[1],T[2]=g[2],T[3]=g[3]}}static parseToUncompressedSplatArraySection(e,t,n,i,r){for(let o=e;o<=t;o++){const a=o*ut.RowSizeBytes+i,l=new Float32Array(n,a,3),c=new Float32Array(n,a+ut.CenterSizeBytes,3),u=new Uint8Array(n,a+ut.CenterSizeBytes+ut.ScaleSizeBytes,4),h=new Uint8Array(n,a+ut.CenterSizeBytes+ut.ScaleSizeBytes+ut.RotationSizeBytes,4),d=new it((h[1]-128)/128,(h[2]-128)/128,(h[3]-128)/128,(h[0]-128)/128);d.normalize(),r.addSplatFromComonents(l[0],l[1],l[2],c[0],c[1],c[2],d.w,d.x,d.y,d.z,u[0],u[1],u[2],u[3])}}static parseStandardSplatToUncompressedSplatArray(e){const t=e.byteLength/ut.RowSizeBytes,n=new we;for(let i=0;i<t;i++){const r=i*ut.RowSizeBytes,o=new Float32Array(e,r,3),a=new Float32Array(e,r+ut.CenterSizeBytes,3),l=new Uint8Array(e,r+ut.CenterSizeBytes+ut.ScaleSizeBytes,4),c=new Uint8Array(e,r+ut.CenterSizeBytes+ut.ScaleSizeBytes+ut.ColorSizeBytes,4),u=new it((c[1]-128)/128,(c[2]-128)/128,(c[3]-128)/128,(c[0]-128)/128);u.normalize(),n.addSplatFromComonents(o[0],o[1],o[2],a[0],a[1],a[2],u.w,u.x,u.y,u.z,l[0],l[1],l[2],l[3])}return n}};le(ut,"RowSizeBytes",32),le(ut,"CenterSizeBytes",12),le(ut,"ScaleSizeBytes",12),le(ut,"RotationSizeBytes",4),le(ut,"ColorSizeBytes",4);let xr=ut;function ep(s,e,t,n,i,r,o,a){return e?Rl.getStandardGenerator(t,n,i,r,o,a).generateFromUncompressedSplatArray(s):Ie.generateFromUncompressedSplatArrays([s],t,0,new R)}class Vh{static loadFromURL(e,t,n,i,r,o,a=!0,l,c,u,h){let d=n?Et.DirectToSplatBuffer:Et.DirectToSplatArray;a&&(d=Et.DirectToSplatArray);const f=Ie.HeaderSizeBytes+Ie.SectionHeaderSizeBytes,m=Ze.ProgressiveLoadSectionSize,g=1;let p,_,v,x=0,A=0,E;const T=Rh();let S=0,C=0,I=[];const y=(M,F,P,L)=>{const U=M>=100;if(P&&I.push(P),d===Et.DownloadBeforeProcessing){U&&T.resolve(I);return}if(!L){if(n)throw new zh("Cannon directly load .splat because no file size info is available.");d=Et.DownloadBeforeProcessing;return}if(!p){x=L/xr.RowSizeBytes,p=new ArrayBuffer(L);const B=Ie.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,V=f+B*x;d===Et.DirectToSplatBuffer?(_=new ArrayBuffer(V),Ie.writeHeaderToBuffer({versionMajor:Ie.CurrentMajorVersion,versionMinor:Ie.CurrentMinorVersion,maxSectionCount:g,sectionCount:g,maxSplatCount:x,splatCount:A,compressionLevel:0,sceneCenter:new R},_)):E=new we(0)}if(P){new Uint8Array(p,C,P.byteLength).set(new Uint8Array(P)),C+=P.byteLength;const B=C-S;if(B>m||U){const k=(U?B:m)/xr.RowSizeBytes,Z=A+k;d===Et.DirectToSplatBuffer?xr.parseToUncompressedSplatBufferSection(A,Z-1,p,0,_,f):xr.parseToUncompressedSplatArraySection(A,Z-1,p,0,E),A=Z,d===Et.DirectToSplatBuffer&&(v||(Ie.writeSectionHeaderToBuffer({maxSplatCount:x,splatCount:A,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,_,Ie.HeaderSizeBytes),v=new Ie(_,!1)),v.updateLoadedCounts(1,A),i&&i(v,U)),S+=m}}U&&(d===Et.DirectToSplatBuffer?T.resolve(v):T.resolve(E)),t&&t(M,F,Ot.Downloading)};return t&&t(0,"0%",Ot.Downloading),bh(e,y,!1).then(()=>(t&&t(0,"0%",Ot.Processing),T.promise.then(M=>(t&&t(100,"100%",Ot.Done),d===Et.DownloadBeforeProcessing?new Blob(I).arrayBuffer().then(F=>Vh.loadFromFileData(F,r,o,a,l,c,u,h)):d===Et.DirectToSplatBuffer?M:Jn(()=>ep(M,a,r,o,l,c,u,h))))))}static loadFromFileData(e,t,n,i,r,o,a,l){return Jn(()=>{const c=xr.parseStandardSplatToUncompressedSplatArray(e);return ep(c,i,t,n,r,o,a,l)})}}const ys=class ys{static checkVersion(e){const t=Ie.CurrentMajorVersion,n=Ie.CurrentMinorVersion,i=Ie.parseHeader(e);if(i.versionMajor===t&&i.versionMinor>=n||i.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${i.versionMajor}.${i.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,i){let r,o,a,l,c=!1,u=!1,h,d=[],f=!1,m=!1,g=0,p=0,_=0,v=!1,x=!1,A=!1,E=[];const T=Rh(),S=()=>{!c&&!u&&g>=Ie.HeaderSizeBytes&&(u=!0,new Blob(E).arrayBuffer().then(L=>{a=new ArrayBuffer(Ie.HeaderSizeBytes),new Uint8Array(a).set(new Uint8Array(L,0,Ie.HeaderSizeBytes)),ys.checkVersion(a),u=!1,c=!0,l=Ie.parseHeader(a),window.setTimeout(()=>{y()},1)}))};let C=0;const I=()=>{C===0&&(C++,window.setTimeout(()=>{C--,M()},1))},y=()=>{const P=()=>{m=!0,new Blob(E).arrayBuffer().then(U=>{m=!1,f=!0,h=new ArrayBuffer(l.maxSectionCount*Ie.SectionHeaderSizeBytes),new Uint8Array(h).set(new Uint8Array(U,Ie.HeaderSizeBytes,l.maxSectionCount*Ie.SectionHeaderSizeBytes)),d=Ie.parseSectionHeaders(l,h,0,!1);let B=0;for(let k=0;k<l.maxSectionCount;k++)B+=d[k].storageSizeBytes;const V=Ie.HeaderSizeBytes+l.maxSectionCount*Ie.SectionHeaderSizeBytes+B;if(!r){r=new ArrayBuffer(V);let k=0;for(let Z=0;Z<E.length;Z++){const te=E[Z];new Uint8Array(r,k,te.byteLength).set(new Uint8Array(te)),k+=te.byteLength}}_=Ie.HeaderSizeBytes+Ie.SectionHeaderSizeBytes*l.maxSectionCount;for(let k=0;k<=d.length&&k<l.maxSectionCount;k++)_+=d[k].storageSizeBytes;I()})};!m&&!f&&c&&g>=Ie.HeaderSizeBytes+Ie.SectionHeaderSizeBytes*l.maxSectionCount&&P()},M=()=>{if(A)return;A=!0;const P=()=>{if(A=!1,f){if(x)return;if(v=g>=_,g-p>Ze.ProgressiveLoadSectionSize||v){p+=Ze.ProgressiveLoadSectionSize,x=p>=_,o||(o=new Ie(r,!1));const U=Ie.HeaderSizeBytes+Ie.SectionHeaderSizeBytes*l.maxSectionCount;let B=0,V=0,k=0;for(let se=0;se<l.maxSectionCount;se++){const ve=d[se],_e=B+ve.partiallyFilledBucketCount*4+ve.bucketStorageSizeBytes*ve.bucketCount,W=U+_e;if(p>=W){V++;const Y=p-W,Te=Ie.CompressionLevels[l.compressionLevel].SphericalHarmonicsDegrees[ve.sphericalHarmonicsDegree].BytesPerSplat;let me=Math.floor(Y/Te);me=Math.min(me,ve.maxSplatCount),k+=me,o.updateLoadedCounts(V,k),o.updateSectionLoadedCounts(se,me)}else break;B+=ve.storageSizeBytes}i(o,x);const Z=p/_*100,te=Z.toFixed(2)+"%";t&&t(Z,te,Ot.Downloading),x?T.resolve(o):M()}}};window.setTimeout(P,Ze.ProgressiveLoadSectionDelayDuration)};return bh(e,(P,L,U)=>{U&&(E.push(U),r&&new Uint8Array(r,g,U.byteLength).set(new Uint8Array(U)),g+=U.byteLength),n?(S(),y(),M()):t&&t(P,L,Ot.Downloading)},!n).then(P=>(t&&t(0,"0%",Ot.Processing),(n?T.promise:ys.loadFromFileData(P)).then(U=>(t&&t(100,"100%",Ot.Done),U))))}static loadFromFileData(e){return Jn(()=>(ys.checkVersion(e),new Ie(e)))}};le(ys,"downloadFile",function(){let e;return function(t,n){const i=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(i),e.click()}}());let Nu=ys;const Ai={Splat:0,KSplat:1,Ply:2},tp=s=>s.endsWith(".ply")?Ai.Ply:s.endsWith(".splat")?Ai.Splat:s.endsWith(".ksplat")?Ai.KSplat:null,np={type:"change"},bc={type:"start"},ip={type:"end"},Pa=new Wo,rp=new ki,WT=Math.cos(70*Wt.DEG2RAD);class Da extends tr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:Vr.ROTATE,TWO:Vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",re),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",re),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(np),n.update(),r=i.NONE},this.clearDampedRotation=function(){l.theta=0,l.phi=0},this.clearDampedPan=function(){u.set(0,0,0)},this.update=function(){const N=new R,ne=new it().setFromUnitVectors(e.up,new R(0,1,0)),ce=ne.clone().invert(),Oe=new R,Pe=new it,tt=new R,z=2*Math.PI;return function(){ne.setFromUnitVectors(e.up,new R(0,1,0)),ce.copy(ne).invert();const K=n.object.position;N.copy(K).sub(n.target),N.applyQuaternion(ne),a.setFromVector3(N),n.autoRotate&&r===i.NONE&&M(I()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let $=n.minAzimuthAngle,de=n.maxAzimuthAngle;isFinite($)&&isFinite(de)&&($<-Math.PI?$+=z:$>Math.PI&&($-=z),de<-Math.PI?de+=z:de>Math.PI&&(de-=z),$<=de?a.theta=Math.max($,Math.min(de,a.theta)):a.theta=a.theta>($+de)/2?Math.max($,a.theta):Math.min(de,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=Z(a.radius):a.radius=Z(a.radius*c),N.setFromSpherical(a),N.applyQuaternion(ce),K.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ge=!1;if(n.zoomToCursor&&T){let Qe=null;if(n.object.isPerspectiveCamera){const dt=N.length();Qe=Z(dt*c);const Lt=dt-Qe;n.object.position.addScaledVector(A,Lt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const dt=new R(E.x,E.y,0);dt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ge=!0;const Lt=new R(E.x,E.y,0);Lt.unproject(n.object),n.object.position.sub(Lt).add(dt),n.object.updateMatrixWorld(),Qe=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Qe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Qe).add(n.object.position):(Pa.origin.copy(n.object.position),Pa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Pa.direction))<WT?e.lookAt(n.target):(rp.setFromNormalAndCoplanarPoint(n.object.up,n.target),Pa.intersectPlane(rp,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ge=!0);return c=1,T=!1,ge||Oe.distanceToSquared(n.object.position)>o||8*(1-Pe.dot(n.object.quaternion))>o||tt.distanceToSquared(n.target)>0?(n.dispatchEvent(np),Oe.copy(n.object.position),Pe.copy(n.object.quaternion),tt.copy(n.target),ge=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",fe),n.domElement.removeEventListener("pointerdown",Xe),n.domElement.removeEventListener("pointercancel",D),n.domElement.removeEventListener("wheel",J),n.domElement.removeEventListener("pointermove",Ue),n.domElement.removeEventListener("pointerup",D),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",re),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Uf,l=new Uf;let c=1;const u=new R,h=new xe,d=new xe,f=new xe,m=new xe,g=new xe,p=new xe,_=new xe,v=new xe,x=new xe,A=new R,E=new xe;let T=!1;const S=[],C={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function M(N){l.theta-=N}function F(N){l.phi-=N}const P=function(){const N=new R;return function(ce,Oe){N.setFromMatrixColumn(Oe,0),N.multiplyScalar(-ce),u.add(N)}}(),L=function(){const N=new R;return function(ce,Oe){n.screenSpacePanning===!0?N.setFromMatrixColumn(Oe,1):(N.setFromMatrixColumn(Oe,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(ce),u.add(N)}}(),U=function(){const N=new R;return function(ce,Oe){const Pe=n.domElement;if(n.object.isPerspectiveCamera){const tt=n.object.position;N.copy(tt).sub(n.target);let z=N.length();z*=Math.tan(n.object.fov/2*Math.PI/180),P(2*ce*z/Pe.clientHeight,n.object.matrix),L(2*Oe*z/Pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(ce*(n.object.right-n.object.left)/n.object.zoom/Pe.clientWidth,n.object.matrix),L(Oe*(n.object.top-n.object.bottom)/n.object.zoom/Pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function B(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(N){if(!n.zoomToCursor)return;T=!0;const ne=n.domElement.getBoundingClientRect(),ce=N.clientX-ne.left,Oe=N.clientY-ne.top,Pe=ne.width,tt=ne.height;E.x=ce/Pe*2-1,E.y=-(Oe/tt)*2+1,A.set(E.x,E.y,1).unproject(e).sub(e.position).normalize()}function Z(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function te(N){h.set(N.clientX,N.clientY)}function se(N){k(N),_.set(N.clientX,N.clientY)}function ve(N){m.set(N.clientX,N.clientY)}function _e(N){d.set(N.clientX,N.clientY),f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ne=n.domElement;M(2*Math.PI*f.x/ne.clientHeight),F(2*Math.PI*f.y/ne.clientHeight),h.copy(d),n.update()}function W(N){v.set(N.clientX,N.clientY),x.subVectors(v,_),x.y>0?B(y()):x.y<0&&V(y()),_.copy(v),n.update()}function Y(N){g.set(N.clientX,N.clientY),p.subVectors(g,m).multiplyScalar(n.panSpeed),U(p.x,p.y),m.copy(g),n.update()}function oe(N){k(N),N.deltaY<0?V(y()):N.deltaY>0&&B(y()),n.update()}function ie(N){let ne=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),ne=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),ne=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),ne=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),ne=!0;break}ne&&(N.preventDefault(),n.update())}function Te(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const N=.5*(S[0].pageX+S[1].pageX),ne=.5*(S[0].pageY+S[1].pageY);h.set(N,ne)}}function me(){if(S.length===1)m.set(S[0].pageX,S[0].pageY);else{const N=.5*(S[0].pageX+S[1].pageX),ne=.5*(S[0].pageY+S[1].pageY);m.set(N,ne)}}function Fe(){const N=S[0].pageX-S[1].pageX,ne=S[0].pageY-S[1].pageY,ce=Math.sqrt(N*N+ne*ne);_.set(0,ce)}function ke(){n.enableZoom&&Fe(),n.enablePan&&me()}function Ne(){n.enableZoom&&Fe(),n.enableRotate&&Te()}function O(N){if(S.length==1)d.set(N.pageX,N.pageY);else{const ce=Se(N),Oe=.5*(N.pageX+ce.x),Pe=.5*(N.pageY+ce.y);d.set(Oe,Pe)}f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ne=n.domElement;M(2*Math.PI*f.x/ne.clientHeight),F(2*Math.PI*f.y/ne.clientHeight),h.copy(d)}function et(N){if(S.length===1)g.set(N.pageX,N.pageY);else{const ne=Se(N),ce=.5*(N.pageX+ne.x),Oe=.5*(N.pageY+ne.y);g.set(ce,Oe)}p.subVectors(g,m).multiplyScalar(n.panSpeed),U(p.x,p.y),m.copy(g)}function Ee(N){const ne=Se(N),ce=N.pageX-ne.x,Oe=N.pageY-ne.y,Pe=Math.sqrt(ce*ce+Oe*Oe);v.set(0,Pe),x.set(0,Math.pow(v.y/_.y,n.zoomSpeed)),B(x.y),_.copy(v)}function We(N){n.enableZoom&&Ee(N),n.enablePan&&et(N)}function Le(N){n.enableZoom&&Ee(N),n.enableRotate&&O(N)}function Xe(N){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",Ue),n.domElement.addEventListener("pointerup",D)),Me(N),N.pointerType==="touch"?ee(N):w(N))}function Ue(N){n.enabled!==!1&&(N.pointerType==="touch"?Re(N):X(N))}function D(N){Je(N),S.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",Ue),n.domElement.removeEventListener("pointerup",D)),n.dispatchEvent(ip),r=i.NONE}function w(N){let ne;switch(N.button){case 0:ne=n.mouseButtons.LEFT;break;case 1:ne=n.mouseButtons.MIDDLE;break;case 2:ne=n.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case Hr.DOLLY:if(n.enableZoom===!1)return;se(N),r=i.DOLLY;break;case Hr.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;ve(N),r=i.PAN}else{if(n.enableRotate===!1)return;te(N),r=i.ROTATE}break;case Hr.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;te(N),r=i.ROTATE}else{if(n.enablePan===!1)return;ve(N),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(bc)}function X(N){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;_e(N);break;case i.DOLLY:if(n.enableZoom===!1)return;W(N);break;case i.PAN:if(n.enablePan===!1)return;Y(N);break}}function J(N){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(N.preventDefault(),n.dispatchEvent(bc),oe(N),n.dispatchEvent(ip))}function re(N){n.enabled===!1||n.enablePan===!1||ie(N)}function ee(N){switch(ae(N),S.length){case 1:switch(n.touches.ONE){case Vr.ROTATE:if(n.enableRotate===!1)return;Te(),r=i.TOUCH_ROTATE;break;case Vr.PAN:if(n.enablePan===!1)return;me(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Vr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ke(),r=i.TOUCH_DOLLY_PAN;break;case Vr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ne(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(bc)}function Re(N){switch(ae(N),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;O(N),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;et(N),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;We(N),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Le(N),n.update();break;default:r=i.NONE}}function fe(N){n.enabled!==!1&&N.preventDefault()}function Me(N){S.push(N)}function Je(N){delete C[N.pointerId];for(let ne=0;ne<S.length;ne++)if(S[ne].pointerId==N.pointerId){S.splice(ne,1);return}}function ae(N){let ne=C[N.pointerId];ne===void 0&&(ne=new xe,C[N.pointerId]=ne),ne.set(N.pageX,N.pageY)}function Se(N){const ne=N.pointerId===S[0].pointerId?S[1]:S[0];return C[ne.pointerId]}n.domElement.addEventListener("contextmenu",fe),n.domElement.addEventListener("pointerdown",Xe),n.domElement.addEventListener("pointercancel",D),n.domElement.addEventListener("wheel",J,{passive:!1}),this.update()}}const XT=(s,e,t,n,i)=>{const r=performance.now();let o=s.style.display==="none"?0:parseFloat(s.style.opacity);isNaN(o)&&(o=1);const a=window.setInterval(()=>{const c=performance.now()-r;let u=Math.min(c/n,1);u>.999&&(u=1);let h;e?(h=(1-u)*o,h<1e-4&&(h=0)):h=(1-o)*u+o,h>0?(s.style.display=t,s.style.opacity=h):s.style.display="none",u>=1&&(i&&i(),window.clearInterval(a))},16);return a},qT=500,xl=class xl{constructor(e,t){this.taskIDGen=0,this.elementID=xl.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const n=document.createElement("style");n.innerHTML=`

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

        `,this.spinnerContainerOuter.appendChild(n),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let n of this.tasks){if(n.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let n of this.tasks)if(n.id===e){n.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){const n=(i,r,o,a,l)=>{o?i.style.display=r?a:"none":this.fadeTransitions[l]=XT(i,!r,a,qT,()=>{this.fadeTransitions[l]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}};le(xl,"elementIDGen",0);let ku=xl;class QT{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const t=document.createElement("style");t.innerHTML=`

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

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class YT{constructor(e){le(this,"update",function(e,t,n,i,r,o,a,l,c,u,h,d,f,m){const g=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==g&&(this.infoCells.cameraPosition.innerHTML=g),n){const _=n,v=`${_.x.toFixed(5)}, ${_.y.toFixed(5)}, ${_.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==v&&(this.infoCells.cameraLookAt.innerHTML=v)}const p=`${i.x.toFixed(5)}, ${i.y.toFixed(5)}, ${i.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==p&&(this.infoCells.cameraUp.innerHTML=p),this.infoCells.orthographicCamera.innerHTML=r?"Orthographic":"Perspective",o){const _=o,v=`${_.x.toFixed(5)}, ${_.y.toFixed(5)}, ${_.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=v}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=a,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${c} splats out of ${l} (${u.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${h.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${d.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${f.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${m}`});this.container=e||document.body,this.infoCells={};const t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const n=document.createElement("style");n.innerHTML=`

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

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const i=document.createElement("div");i.style.display="table";for(let r of t){const o=document.createElement("div");o.style.display="table-row",o.className="info-panel-row";const a=document.createElement("div");a.style.display="table-cell",a.innerHTML=`${r[0]}: `,a.classList.add("info-panel-cell","label-cell");const l=document.createElement("div");l.style.display="table-cell",l.style.width="10px",l.innerHTML=" ",l.className="info-panel-cell";const c=document.createElement("div");c.style.display="table-cell",c.innerHTML="",c.className="info-panel-cell",this.infoCells[r[1]]=c,o.appendChild(a),o.appendChild(l),o.appendChild(c),i.appendChild(o)}this.infoPanel.appendChild(i),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const sp=new R;class KT extends lt{constructor(e=new R(0,0,1),t=new R(0,0,0),n=1,i=.1,r=16776960,o=n*.2,a=o*.2){super(),this.type="ArrowHelper";const l=new wo(i,i,n,32);l.translate(0,n/2,0);const c=new wo(0,a,o,32);c.translate(0,n,0),this.position.copy(t),this.line=new ft(l,new li({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ft(c,new li({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{sp.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(sp,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class fo{constructor(e){le(this,"updateFocusMarker",function(){const e=new R,t=new he,n=new R;return function(i,r,o){t.copy(r.matrixWorld).invert(),e.copy(i).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(r.matrixWorld),n.copy(r.position).sub(i);const a=n.length();this.focusMarker.position.copy(i),this.focusMarker.scale.set(a,a,a),this.focusMarker.material.uniforms.realFocusPosition.value.copy(i),this.focusMarker.material.uniforms.viewport.value.copy(o),this.focusMarker.material.uniformsNeedUpdate=!0}}());le(this,"positionAndOrientControlPlane",function(){const e=new it,t=new R(0,1,0);return function(n,i){e.setFromUnitVectors(t,i),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}}());this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new Zi(e,t,{format:on,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new Ah(e,t),this.splatRenderTarget.depthTexture.format=Er,this.splatRenderTarget.depthTexture.type=Nn}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new In({vertexShader:`
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
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:Up,blendSrc:Ao,blendSrcAlpha:Ao,blendDst:So,blendDstAlpha:So});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new ft(new Us(2,2),t),this.renderTargetCopyCamera=new Tl(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(fs(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new Mh(.5,1.5,32),t=new li({color:16777215}),n=new ft(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);const i=new ft(e,t);i.position.set(0,-1,0);const r=new ft(e,t);r.rotation.set(0,0,Math.PI/2),r.position.set(1,0,0);const o=new ft(e,t);o.rotation.set(0,0,-Math.PI/2),o.position.set(-1,0,0),this.meshCursor=new lt,this.meshCursor.add(n),this.meshCursor.add(i),this.meshCursor.add(r),this.meshCursor.add(o),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(fs(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){const e=new Po(.5,32,32),t=fo.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new ft(e,t)}}destroyFocusMarker(){this.focusMarker&&(fs(this.focusMarker),this.focusMarker=null)}setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new Us(1,1);e.rotateX(-Math.PI/2);const t=new li({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=Un;const n=new ft(e,t),i=new R(0,1,0);i.normalize();const r=new R(0,0,0),o=.5,a=.01,l=56576,c=new KT(i,r,o,a,l,.1,.03);this.controlPlane=new lt,this.controlPlane.add(n),this.controlPlane.add(c)}}destroyControlPlane(){this.controlPlane&&(fs(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(fs(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const t=new Po(1,32,32),n=new lt,i=(r,o)=>{let a=new ft(t,fo.buildDebugMaterial(r));a.renderOrder=e,n.add(a),a.position.fromArray(o)};return i(16711680,[-50,0,0]),i(16711680,[50,0,0]),i(65280,[0,0,-50]),i(65280,[0,0,50]),i(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){const t=new ir(3,3,3),n=new lt;let i=12303291;const r=a=>{let l=new ft(t,fo.buildDebugMaterial(i));l.renderOrder=e,n.add(l),l.position.fromArray(a)};let o=10;return r([-o,0,-o]),r([-o,0,o]),r([o,0,-o]),r([o,0,o]),n}static buildDebugMaterial(e){const t=`
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
        `,i={color:{type:"v3",value:new He(e)}},r=new In({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!1,depthTest:!0,depthWrite:!0,side:oi});return r.extensions.fragDepth=!0,r}static buildFocusMarkerMaterial(e){const t=`
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
        `,i={color:{type:"v3",value:new He(e)},realFocusPosition:{type:"v3",value:new R},viewport:{type:"v2",value:new xe},opacity:{value:0}};return new In({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!0,depthTest:!1,depthWrite:!1,side:oi})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const jT=new R(1,0,0),ZT=new R(0,1,0),$T=new R(0,0,1);class Rc{constructor(e=new R,t=new R){le(this,"intersectBox",function(){const e=new R,t=[],n=[],i=[];return function(r,o){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,i[0]=this.direction.x,i[1]=this.direction.y,i[2]=this.direction.z,this.boxContainsPoint(r,this.origin,1e-4))return o&&(o.origin.copy(this.origin),o.normal.set(0,0,0),o.distance=-1),!0;for(let a=0;a<3;a++){if(i[a]==0)continue;const l=a==0?jT:a==1?ZT:$T,c=i[a]<0?r.max:r.min;let u=-Math.sign(i[a]);t[0]=a==0?c.x:a==1?c.y:c.z;let h=t[0]-n[a];if(h*u<0){const d=(a+1)%3,f=(a+2)%3;if(t[2]=i[d]/i[a]*h+n[d],t[1]=i[f]/i[a]*h+n[f],e.set(t[a],t[f],t[d]),this.boxContainsPoint(r,e,1e-4))return o&&(o.origin.copy(e),o.normal.copy(l).multiplyScalar(u),o.distance=e.sub(this.origin).length()),!0}}return!1}}());le(this,"intersectSphere",function(){const e=new R;return function(t,n,i){e.copy(t).sub(this.origin);const r=e.dot(this.direction),o=r*r,l=e.dot(e)-o,c=n*n;if(l>c)return!1;const u=Math.sqrt(c-l),h=r-u,d=r+u;if(d<0)return!1;let f=h<0?d:h;return i&&(i.origin.copy(this.origin).addScaledVector(this.direction,f),i.normal.copy(i.origin).sub(t).normalize(),i.distance=f),!0}}());this.origin=new R,this.direction=new R,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}}class Gh{constructor(){this.origin=new R,this.normal=new R,this.distance=0,this.splatIndex=0}set(e,t,n,i){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=i}clone(){const e=new Gh;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const Si={ThreeD:0,TwoD:1};class JT{constructor(e,t,n=!1){le(this,"setFromCameraAndScreenPosition",function(){const e=new xe;return function(t,n,i){if(e.x=n.x/i.x*2-1,e.y=(i.y-n.y)/i.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}}());le(this,"intersectSplatMesh",function(){const e=new he,t=new he,n=new he,i=new Rc,r=new R;return function(o,a=[]){const l=o.getSplatTree();if(l){for(let c=0;c<l.subTrees.length;c++){const u=l.subTrees[c];t.copy(o.matrixWorld),o.dynamicMode&&(o.getSceneTransform(c,n),t.multiply(n)),e.copy(t).invert(),i.origin.copy(this.ray.origin).applyMatrix4(e),i.direction.copy(this.ray.origin).add(this.ray.direction),i.direction.applyMatrix4(e).sub(i.origin).normalize();const h=[];u.rootNode&&this.castRayAtSplatTreeNode(i,l,u.rootNode,h),h.forEach(d=>{d.origin.applyMatrix4(t),d.normal.applyMatrix4(t).normalize(),d.distance=r.copy(d.origin).sub(this.ray.origin).length()}),a.push(...h)}return a.sort((c,u)=>c.distance>u.distance?1:-1),a}}}());le(this,"castRayAtSplatTreeNode",function(){const e=new je,t=new R,n=new R,i=new it,r=new Gh,o=1e-7,a=new R(0,0,0),l=new he,c=new he,u=new he,h=new he,d=new he,f=new Rc;return function(m,g,p,_=[]){if(m.intersectBox(p.boundingBox)){if(p.data&&p.data.indexes&&p.data.indexes.length>0)for(let v=0;v<p.data.indexes.length;v++){const x=p.data.indexes[v],A=g.splatMesh.getSceneIndexForSplat(x);if(g.splatMesh.getScene(A).visible&&(g.splatMesh.getSplatColor(x,e),g.splatMesh.getSplatCenter(x,t),g.splatMesh.getSplatScaleAndRotation(x,n,i),!(n.x<=o||n.y<=o||g.splatMesh.splatRenderMode===Si.ThreeD&&n.z<=o)))if(this.raycastAgainstTrueSplatEllipsoid){c.makeScale(n.x,n.y,n.z),u.makeRotationFromQuaternion(i);const T=Math.log10(e.w)*2;if(l.makeScale(T,T,T),d.copy(l).multiply(u).multiply(c),h.copy(d).invert(),f.origin.copy(m.origin).sub(t).applyMatrix4(h),f.direction.copy(m.origin).add(m.direction).sub(t),f.direction.applyMatrix4(h).sub(f.origin).normalize(),f.intersectSphere(a,1,r)){const S=r.clone();S.splatIndex=x,S.origin.applyMatrix4(d).add(t),_.push(S)}}else{let T=n.x+n.y,S=2;if(g.splatMesh.splatRenderMode===Si.ThreeD&&(T+=n.z,S=3),T=T/S,m.intersectSphere(t,T,r)){const C=r.clone();C.splatIndex=x,_.push(C)}}}if(p.children&&p.children.length>0)for(let v of p.children)this.castRayAtSplatTreeNode(m,g,v,_);return _}}}());this.ray=new Rc(e,t),this.raycastAgainstTrueSplatEllipsoid=n}}class Ts{static buildVertexShaderBase(e=!1,t=!1,n=0,i=""){let r=`
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
            uniform float sceneOpacity[${Ze.MaxScenes}];
            uniform int sceneVisibility[${Ze.MaxScenes}];
        `),e&&(r+=`
            uniform highp mat4 transforms[${Ze.MaxScenes}];
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
        uniform float sphericalHarmonics8BitCompressionRangeMin[${Ze.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${Ze.MaxScenes}];

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
        `}static getUniforms(e=!1,t=!1,n=0,i=1,r=!1){const o={sceneCenter:{type:"v3",value:new R},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new xe},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new xe},basisViewport:{type:"v2",value:new xe},debugColor:{type:"v3",value:new He},centersColorsTextureSize:{type:"v2",value:new xe(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new xe(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:i},pointCloudModeEnabled:{type:"i",value:r?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new xe(1024,1024)},sceneCount:{type:"i",value:1}};for(let a=0;a<Ze.MaxScenes;a++)o.sphericalHarmonics8BitCompressionRangeMin.value.push(-Ze.SphericalHarmonics8BitCompressionRange/2),o.sphericalHarmonics8BitCompressionRangeMax.value.push(Ze.SphericalHarmonics8BitCompressionRange/2);if(t){const a=[];for(let c=0;c<Ze.MaxScenes;c++)a.push(1);o.sceneOpacity={type:"f",value:a};const l=[];for(let c=0;c<Ze.MaxScenes;c++)l.push(1);o.sceneVisibility={type:"i",value:l}}if(e){const a=[];for(let l=0;l<Ze.MaxScenes;l++)a.push(new he);o.transforms={type:"mat4",value:a}}return o}}class sl{static build(e=!1,t=!1,n=!1,i=2048,r=1,o=!1,a=0){let c=Ts.buildVertexShaderBase(e,t,a,`
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
        `);c+=sl.buildVertexShaderProjection(n,t,i);const u=sl.buildFragmentShader(),h=Ts.getUniforms(e,t,a,r,o);return h.covariancesTextureSize={type:"v2",value:new xe(1024,1024)},h.covariancesTexture={type:"t",value:null},h.covariancesTextureHalfFloat={type:"t",value:null},h.covariancesAreHalfFloat={type:"i",value:0},new In({uniforms:h,vertexShader:c,fragmentShader:u,transparent:!0,alphaTest:1,blending:qi,depthTest:!0,depthWrite:!1,side:Un})}static buildVertexShaderProjection(e,t,n){let i=`

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
        `,i+=Ts.getVertexShaderFadeIn(),i+="}",i}static buildFragmentShader(){let e=`
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
        `,e}}class ol{static build(e=!1,t=!1,n=1,i=!1,r=0){let a=Ts.buildVertexShaderBase(e,t,r,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);a+=ol.buildVertexShaderProjection();const l=ol.buildFragmentShader(),c=Ts.getUniforms(e,t,r,n,i);return c.scaleRotationsTexture={type:"t",value:null},c.scaleRotationsTextureSize={type:"v2",value:new xe(1024,1024)},new In({uniforms:c,vertexShader:a,fragmentShader:l,transparent:!0,alphaTest:1,blending:qi,depthTest:!0,depthWrite:!1,side:Un})}static buildVertexShaderProjection(){let e=`

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
            `,e+=Ts.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
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
        `}}class eE{static build(e){const t=new an;t.setIndex([0,1,2,0,2,3]);const n=new Float32Array(4*3),i=new Vn(n,3);t.setAttribute("position",i),i.setXYZ(0,-1,-1,0),i.setXYZ(1,-1,1,0),i.setXYZ(2,1,1,0),i.setXYZ(3,1,-1,0),i.needsUpdate=!0;const r=new sM().copy(t),o=new Uint32Array(e),a=new gS(o,1,!1);return a.setUsage(B0),r.setAttribute("splatIndex",a),r.instanceCount=0,r}}class tE extends lt{constructor(e,t=new R,n=new it,i=new R(1,1,1),r=1,o=1,a=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(i),this.transform=new he,this.minimumAlpha=r,this.opacity=o,this.visible=a}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}const vl=class vl{constructor(e,t,n,i){this.min=new R().copy(e),this.max=new R().copy(t),this.boundingBox=new $n(this.min,this.max),this.center=new R().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=i||vl.idGen++}};le(vl,"idGen",0);let zu=vl;class po{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new R,this.sceneMin=new R,this.sceneMax=new R,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const t=new R().fromArray(e.min),n=new R().fromArray(e.max),i=new zu(t,n,e.depth,e.id);if(e.data.indexes){i.data={indexes:[]};for(let r of e.data.indexes)i.data.indexes.push(r)}if(e.children)for(let r of e.children)i.children.push(po.convertWorkerSubTreeNode(r));return i}static convertWorkerSubTree(e,t){const n=new po(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new R().fromArray(e.sceneMin),n.sceneMax=new R().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=po.convertWorkerSubTreeNode(e.rootNode);const i=(r,o)=>{r.children.length===0&&o(r);for(let a of r.children)i(a,o)};return n.nodesWithIndexes=[],i(n.rootNode,r=>{r.data&&r.data.indexes&&r.data.indexes.length>0&&n.nodesWithIndexes.push(r)}),n}}function nE(s){let e=0;class t{constructor(l,c){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]]}containsPoint(l){return l[0]>=this.min[0]&&l[0]<=this.max[0]&&l[1]>=this.min[1]&&l[1]<=this.max[1]&&l[2]>=this.min[2]&&l[2]<=this.max[2]}}class n{constructor(l,c){this.maxDepth=l,this.maxCentersPerNode=c,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class i{constructor(l,c,u,h){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]],this.center=[(c[0]-l[0])*.5+l[0],(c[1]-l[1])*.5+l[1],(c[2]-l[2])*.5+l[2]],this.depth=u,this.children=[],this.data=null,this.id=h||e++}}processSplatTreeNode=function(a,l,c,u){const h=l.data.indexes.length;if(h<a.maxCentersPerNode||l.depth>a.maxDepth){const v=[];for(let x=0;x<l.data.indexes.length;x++)a.addedIndexes[l.data.indexes[x]]||(v.push(l.data.indexes[x]),a.addedIndexes[l.data.indexes[x]]=!0);l.data.indexes=v,l.data.indexes.sort((x,A)=>x>A?1:-1),a.nodesWithIndexes.push(l);return}const d=[l.max[0]-l.min[0],l.max[1]-l.min[1],l.max[2]-l.min[2]],f=[d[0]*.5,d[1]*.5,d[2]*.5],m=[l.min[0]+f[0],l.min[1]+f[1],l.min[2]+f[2]],g=[new t([m[0]-f[0],m[1],m[2]-f[2]],[m[0],m[1]+f[1],m[2]]),new t([m[0],m[1],m[2]-f[2]],[m[0]+f[0],m[1]+f[1],m[2]]),new t([m[0],m[1],m[2]],[m[0]+f[0],m[1]+f[1],m[2]+f[2]]),new t([m[0]-f[0],m[1],m[2]],[m[0],m[1]+f[1],m[2]+f[2]]),new t([m[0]-f[0],m[1]-f[1],m[2]-f[2]],[m[0],m[1],m[2]]),new t([m[0],m[1]-f[1],m[2]-f[2]],[m[0]+f[0],m[1],m[2]]),new t([m[0],m[1]-f[1],m[2]],[m[0]+f[0],m[1],m[2]+f[2]]),new t([m[0]-f[0],m[1]-f[1],m[2]],[m[0],m[1],m[2]+f[2]])],p=[];for(let v=0;v<g.length;v++)p[v]=[];const _=[0,0,0];for(let v=0;v<h;v++){const x=l.data.indexes[v],A=c[x];_[0]=u[A],_[1]=u[A+1],_[2]=u[A+2];for(let E=0;E<g.length;E++)g[E].containsPoint(_)&&p[E].push(x)}for(let v=0;v<g.length;v++){const x=new i(g[v].min,g[v].max,l.depth+1);x.data={indexes:p[v]},l.children.push(x)}l.data={};for(let v of l.children)processSplatTreeNode(a,v,c,u)};const r=(a,l,c)=>{const u=[0,0,0],h=[0,0,0],d=[],f=Math.floor(a.length/4);for(let g=0;g<f;g++){const p=g*4,_=a[p],v=a[p+1],x=a[p+2],A=Math.round(a[p+3]);(g===0||_<u[0])&&(u[0]=_),(g===0||_>h[0])&&(h[0]=_),(g===0||v<u[1])&&(u[1]=v),(g===0||v>h[1])&&(h[1]=v),(g===0||x<u[2])&&(u[2]=x),(g===0||x>h[2])&&(h[2]=x),d.push(A)}const m=new n(l,c);return m.sceneMin=u,m.sceneMax=h,m.rootNode=new i(m.sceneMin,m.sceneMax,0),m.rootNode.data={indexes:d},m};function o(a,l,c){const u=[];for(let d of a){const f=Math.floor(d.length/4);for(let m=0;m<f;m++){const g=m*4,p=Math.round(d[g+3]);u[p]=g}}const h=[];for(let d of a){const f=r(d,l,c);h.push(f),processSplatTreeNode(f,f.rootNode,u,d)}s.postMessage({subTrees:h})}s.onmessage=a=>{a.data.process&&o(a.data.process.centers,a.data.process.maxDepth,a.data.process.maxCentersPerNode)}}function iE(s,e,t,n,i){s.postMessage({process:{centers:e,maxDepth:n,maxCentersPerNode:i}},t)}function rE(){return new Worker(URL.createObjectURL(new Blob(["(",nE.toString(),")(self)"],{type:"application/javascript"})))}class sE{constructor(e,t){le(this,"processSplatMesh",function(e,t=()=>!0,n,i){this.splatTreeWorker||(this.splatTreeWorker=rE()),this.splatMesh=e,this.subTrees=[];const r=new R,o=(a,l)=>{const c=new Float32Array(l*4);let u=0;for(let h=0;h<l;h++){const d=h+a;if(t(d)){e.getSplatCenter(d,r);const f=u*4;c[f]=r.x,c[f+1]=r.y,c[f+2]=r.z,c[f+3]=d,u++}}return c};return new Promise(a=>{const l=()=>this.disposed?(this.diposeSplatTreeWorker(),a(),!0):!1;n&&n(!1),Jn(()=>{if(l())return;const c=[];if(e.dynamicMode){let u=0;for(let h=0;h<e.scenes.length;h++){const f=e.getScene(h).splatBuffer.getSplatCount(),m=o(u,f);c.push(m),u+=f}}else{const u=o(0,e.getSplatCount());c.push(u)}this.splatTreeWorker.onmessage=u=>{l()||u.data.subTrees&&(i&&i(!1),Jn(()=>{if(!l()){for(let h of u.data.subTrees){const d=po.convertWorkerSubTree(h,e);this.subTrees.push(d)}this.diposeSplatTreeWorker(),i&&i(!0),Jn(()=>{a()})}}))},Jn(()=>{if(l())return;n&&n(!0);const u=c.map(h=>h.buffer);iE(this.splatTreeWorker,c,u,this.maxDepth,this.maxCentersPerNode)})})})});this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const t=(n,i)=>{n.children.length===0&&i(n);for(let r of n.children)t(r,i)};for(let n of this.subTrees)t(n.rootNode,e)}}function oE(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function aE(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,A=o||e.has("OES_texture_float"),E=x&&A,T=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:A,floatVertexTextures:E,maxSamples:T}}const mo={Default:0,Gradual:1,Instant:2},Es={None:0,Error:1,Warning:2,Info:3,Debug:4},op=new an,lE=new li,Fa=6,cE=4,uE=4,hE=4,dE=6,fE=8,Ic=4,Pc=4,ap=1,pE=.012,mE=.003,lp=1,cp=16777216;class Kt extends ft{constructor(t=Si.ThreeD,n=!1,i=!1,r=!1,o=1,a=!0,l=!1,c=!1,u=1024,h=Es.None,d=0,f=1){super(op,lE);le(this,"buildSplatTree",function(t=[],n,i){return new Promise(r=>{this.disposeSplatTree(),this.baseSplatTree=new sE(8,1e3);const o=performance.now(),a=new je;this.baseSplatTree.processSplatMesh(this,l=>{this.getSplatColor(l,a);const c=this.getSceneIndexForSplat(l),u=t[c]||1;return a.w>=u},n,i).then(()=>{const l=performance.now()-o;if(this.logLevel>=Es.Info&&console.log("SplatTree build: "+l+" ms"),this.disposed)r();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let c=0,u=0,h=0;this.splatTree.visitLeaves(d=>{const f=d.data.indexes.length;f>0&&(u+=f,h++,c++)}),this.logLevel>=Es.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${c}`),u=u/h,console.log(`Avg splat count per node: ${u}`),console.log(`Total splat count: ${this.getSplatCount()}`)),r()}})})});le(this,"updateUniforms",function(){const t=new xe;return function(n,i,r,o,a,l){if(this.getSplatCount()>0){if(t.set(n.x*this.devicePixelRatio,n.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(t),this.material.uniforms.basisViewport.value.set(1/t.x,1/t.y),this.material.uniforms.focal.value.set(i,r),this.material.uniforms.orthographicMode.value=o?1:0,this.material.uniforms.orthoZoom.value=a,this.material.uniforms.inverseFocalAdjustment.value=l,this.dynamicMode)for(let u=0;u<this.scenes.length;u++)this.material.uniforms.transforms.value[u].copy(this.getScene(u).transform);if(this.enableOptionalEffects)for(let u=0;u<this.scenes.length;u++)this.material.uniforms.sceneOpacity.value[u]=Zt(this.getScene(u).opacity,0,1),this.material.uniforms.sceneVisibility.value[u]=this.getScene(u).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}}());le(this,"setupDistancesComputationTransformFeedback",function(){let t;return function(){const n=this.getMaxSplatCount();if(!this.renderer)return;const i=this.lastRenderer!==this.renderer,r=t!==n;if(!i&&!r)return;i?this.disposeDistancesComputationGPUResources():r&&this.disposeDistancesComputationGPUBufferResources();const o=this.renderer.getContext(),a=(f,m,g)=>{const p=f.createShader(m);if(!p)return console.error("Fatal error: gl could not create a shader object."),null;if(f.shaderSource(p,g),f.compileShader(p),!f.getShaderParameter(p,f.COMPILE_STATUS)){let v="unknown";m===f.VERTEX_SHADER?v="vertex shader":m===f.FRAGMENT_SHADER&&(v="fragement shader");const x=f.getShaderInfoLog(p);return console.error("Failed to compile "+v+" with these errors:"+x),f.deleteShader(p),null}return p};let l;this.integerBasedDistancesComputation?(l=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?l+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${Ze.MaxScenes}];
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
                        uniform mat4 transforms[${Ze.MaxScenes}];
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
            `,u=o.getParameter(o.VERTEX_ARRAY_BINDING),h=o.getParameter(o.CURRENT_PROGRAM),d=h?o.getProgramParameter(h,o.DELETE_STATUS):!1;if(i&&(this.distancesTransformFeedback.vao=o.createVertexArray()),o.bindVertexArray(this.distancesTransformFeedback.vao),i){const f=o.createProgram(),m=a(o,o.VERTEX_SHADER,l),g=a(o,o.FRAGMENT_SHADER,c);if(!m||!g)throw new Error("Could not compile shaders for distances computation on GPU.");if(o.attachShader(f,m),o.attachShader(f,g),o.transformFeedbackVaryings(f,["distance"],o.SEPARATE_ATTRIBS),o.linkProgram(f),!o.getProgramParameter(f,o.LINK_STATUS)){const _=o.getProgramInfoLog(f);throw console.error("Fatal error: Failed to link program: "+_),o.deleteProgram(f),o.deleteShader(g),o.deleteShader(m),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=f,this.distancesTransformFeedback.vertexShader=m,this.distancesTransformFeedback.vertexShader=g}if(o.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=o.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=o.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let f=0;f<this.scenes.length;f++)this.distancesTransformFeedback.transformsLocs[f]=o.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${f}]`)}else this.distancesTransformFeedback.modelViewProjLoc=o.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(i||r)&&(this.distancesTransformFeedback.centersBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?o.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,o.INT,0,0):o.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,o.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),o.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,o.UNSIGNED_INT,0,0))),(i||r)&&(this.distancesTransformFeedback.outDistancesBuffer=o.createBuffer()),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),o.bufferData(o.ARRAY_BUFFER,n*4,o.STATIC_READ),i&&(this.distancesTransformFeedback.id=o.createTransformFeedback()),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),h&&d!==!0&&o.useProgram(h),u&&o.bindVertexArray(u),this.lastRenderer=this.renderer,t=n}}());le(this,"fillTransformsArray",function(){const t=[];return function(n){t.length!==n.length&&(t.length=n.length);for(let i=0;i<this.scenes.length;i++){const o=this.getScene(i).transform.elements;for(let a=0;a<16;a++)t[i*16+a]=o[a]}n.set(t)}}());le(this,"computeDistancesOnGPU",function(){const t=new he;return function(n,i){if(!this.renderer)return;const r=this.renderer.getContext(),o=r.getParameter(r.VERTEX_ARRAY_BINDING),a=r.getParameter(r.CURRENT_PROGRAM),l=a?r.getProgramParameter(a,r.DELETE_STATUS):!1;if(r.bindVertexArray(this.distancesTransformFeedback.vao),r.useProgram(this.distancesTransformFeedback.program),r.enable(r.RASTERIZER_DISCARD),this.dynamicMode)for(let h=0;h<this.scenes.length;h++)if(t.copy(this.getScene(h).transform),t.premultiply(n),this.integerBasedDistancesComputation){const d=Kt.getIntegerMatrixArray(t),f=[d[2],d[6],d[10],d[14]];r.uniform4i(this.distancesTransformFeedback.transformsLocs[h],f[0],f[1],f[2],f[3])}else r.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[h],!1,t.elements);else if(this.integerBasedDistancesComputation){const h=Kt.getIntegerMatrixArray(n),d=[h[2],h[6],h[10]];r.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,d[0],d[1],d[2])}else{const h=[n.elements[2],n.elements[6],n.elements[10]];r.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,h[0],h[1],h[2])}r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?r.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,r.INT,0,0):r.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,r.FLOAT,!1,0,0),this.dynamicMode&&(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),r.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,r.UNSIGNED_INT,0,0)),r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),r.beginTransformFeedback(r.POINTS),r.drawArrays(r.POINTS,0,this.getSplatCount()),r.endTransformFeedback(),r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,0,null),r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,null),r.disable(r.RASTERIZER_DISCARD);const c=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);r.flush();const u=new Promise(h=>{const d=()=>{if(this.disposed)h();else switch(r.clientWaitSync(c,0,0)){case r.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(d),this.computeDistancesOnGPUSyncTimeout;case r.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,r.deleteSync(c);const p=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),r.getBufferSubData(r.ARRAY_BUFFER,0,i),r.bindBuffer(r.ARRAY_BUFFER,null),p&&r.bindVertexArray(p),h()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(d)});return a&&l!==!0&&r.useProgram(a),o&&r.bindVertexArray(o),u}}());le(this,"getSplatCenter",function(){const t={};return function(n,i,r){this.getLocalSplatParameters(n,t,r),t.splatBuffer.getSplatCenter(t.localIndex,i,t.sceneTransform)}}());le(this,"getSplatScaleAndRotation",function(){const t={},n=new R;return function(i,r,o,a){this.getLocalSplatParameters(i,t,a),n.x=void 0,n.y=void 0,n.z=void 0,this.splatRenderMode===Si.TwoD&&(n.z=0),t.splatBuffer.getSplatScaleAndRotation(t.localIndex,r,o,t.sceneTransform,n)}}());le(this,"getSplatColor",function(){const t={};return function(n,i){this.getLocalSplatParameters(n,t),t.splatBuffer.getSplatColor(t.localIndex,i)}}());this.renderer=void 0,this.splatRenderMode=t,this.dynamicMode=n,this.enableOptionalEffects=i,this.halfPrecisionCovariancesOnGPU=r,this.devicePixelRatio=o,this.enableDistancesComputationOnGPU=a,this.integerBasedDistancesComputation=l,this.antialiased=c,this.maxScreenSpaceSplatSize=u,this.logLevel=h,this.sphericalHarmonicsDegree=d,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=f,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new $n,this.calculatedSceneCenter=new R,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(t,n,i){const r=[];r.length=n.length;for(let o=0;o<n.length;o++){const a=n[o],l=i[o]||{};let c=l.position||[0,0,0],u=l.rotation||[0,0,0,1],h=l.scale||[1,1,1];const d=new R().fromArray(c),f=new it().fromArray(u),m=new R().fromArray(h),g=Kt.createScene(a,d,f,m,l.splatAlphaRemovalThreshold||1,l.opacity,l.visible);t.add(g),r[o]=g}return r}static createScene(t,n,i,r,o,a=1,l=!0){return new tE(t,n,i,r,o,a,l)}static buildSplatIndexMaps(t){const n=[],i=[];let r=0;for(let o=0;o<t.length;o++){const l=t[o].getMaxSplatCount();for(let c=0;c<l;c++)n[r]=c,i[r]=o,r++}return{localSplatIndexMap:n,sceneIndexMap:i}}build(t,n,i=!0,r=!1,o,a,l=!0){this.sceneOptions=n,this.finalBuild=r;const c=Kt.getTotalMaxSplatCountForSplatBuffers(t),u=Kt.buildScenes(this,t,n);if(i)for(let p=0;p<this.scenes.length&&p<u.length;p++){const _=u[p],v=this.getScene(p);_.copyTransformData(v)}this.scenes=u;let h=3;for(let p of t){const _=p.getMinSphericalHarmonicsDegree();_<h&&(h=_)}this.minSphericalHarmonicsDegree=Math.min(h,this.sphericalHarmonicsDegree);let d=!1;if(t.length!==this.lastBuildScenes.length)d=!0;else for(let p=0;p<t.length;p++)if(t[p]!==this.lastBuildScenes[p].splatBuffer){d=!0;break}let f=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==c||d)&&(f=!1),!f){this.boundingBox=new $n,l||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=eE.build(c),this.splatRenderMode===Si.ThreeD?this.material=sl.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree):this.material=ol.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const p=Kt.buildSplatIndexMaps(t);this.globalSplatIndexToLocalSplatIndexMap=p.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=p.sceneIndexMap}const m=this.getSplatCount();this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const g=this.refreshGPUDataFromSplatBuffers(f);for(let p=0;p<this.scenes.length;p++)this.lastBuildScenes[p]=this.scenes[p];return this.lastBuildSplatCount=m,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,r&&this.scenes.length>0&&this.buildSplatTree(n.map(p=>p.splatAlphaRemovalThreshold||1),o,a).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,g}freeIntermediateSplatData(){const t=n=>{delete n.source.data,delete n.image,n.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{t(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{t(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{t(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(n=>{n.needsUpdate=!0,n.onUpdate=()=>{t(n)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{t(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new $n,this.calculatedSceneCenter=new R,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==op&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let t in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(t)){const n=this.splatDataTextures[t];n.texture&&(n.texture.dispose(),n.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(t){this.onSplatTreeReadyCallback=t}getDataForDistancesComputation(t,n){const i=this.integerBasedDistancesComputation?this.getIntegerCenters(t,n,!0):this.getFloatCenters(t,n,!0),r=this.getSceneIndexes(t,n);return{centers:i,sceneIndexes:r}}refreshGPUDataFromSplatBuffers(t){const n=this.getSplatCount();this.refreshDataTexturesFromSplatBuffers(t);const i=t?this.lastBuildSplatCount:0,{centers:r,sceneIndexes:o}=this.getDataForDistancesComputation(i,n-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(r,o,t),{from:i,to:n-1,count:n-i,centers:r,sceneIndexes:o}}refreshGPUBuffersForDistancesComputation(t,n,i=!1){const r=i?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(i,t,r),this.updateGPUTransformIndexesBufferForDistancesComputation(i,n,r)}refreshDataTexturesFromSplatBuffers(t){const n=this.getSplatCount(),i=this.lastBuildSplatCount,r=n-1;t?this.updateBaseDataFromSplatBuffers(i,r):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(i,r),this.updateVisibleRegion(t)}setupDataTextures(){const t=this.getMaxSplatCount(),n=this.getSplatCount();this.disposeTextures();const i=(C,I)=>{const y=new xe(4096,1024);for(;y.x*y.y*C<t*I;)y.y*=2;return y},r=C=>C>=1?dE:uE,o=C=>{const I=r(C),y=i(I,6);return{elementsPerTexelStored:I,texSize:y}};let a=this.getTargetCovarianceCompressionLevel();const l=0,c=this.getTargetSphericalHarmonicsCompressionLevel();let u,h,d;if(this.splatRenderMode===Si.ThreeD){const C=o(a);C.texSize.x*C.texSize.y>cp&&a===0&&(a=1),u=new Float32Array(t*Fa)}else h=new Float32Array(t*3),d=new Float32Array(t*4);const f=new Float32Array(t*3),m=new Uint8Array(t*4);let g=Float32Array;c===1?g=Uint16Array:c===2&&(g=Uint8Array);const p=Ms(this.minSphericalHarmonicsDegree),_=this.minSphericalHarmonicsDegree?new g(t*p):void 0,v=i(Pc,4),x=new Uint32Array(v.x*v.y*Pc);Kt.updateCenterColorsPaddedData(0,n-1,f,m,x);const A=new vi(x,v.x,v.y,As,Nn);if(A.internalFormat="RGBA32UI",A.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=A,this.material.uniforms.centersColorsTextureSize.value.copy(v),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:u,scales:h,rotations:d,centers:f,colors:m,sphericalHarmonics:_},centerColors:{data:x,texture:A,size:v}},this.splatRenderMode===Si.ThreeD){const C=o(a),I=C.elementsPerTexelStored,y=C.texSize;let M=a>=1?Uint32Array:Float32Array;const F=a>=1?fE:hE,P=new M(y.x*y.y*F);a===0?P.set(u):Kt.updatePaddedCompressedCovariancesTextureData(u,P,0,0,u.length);let L;if(a>=1)L=new vi(P,y.x,y.y,As,Nn),L.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=L;else{L=new vi(P,y.x,y.y,on,kn),this.material.uniforms.covariancesTexture.value=L;const U=new vi(new Uint32Array(32),2,2,As,Nn);U.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=U,U.needsUpdate=!0}L.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=a>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(y),this.splatDataTextures.covariances={data:P,texture:L,size:y,compressionLevel:a,elementsPerTexelStored:I,elementsPerTexelAllocated:F}}else{const I=i(Ic,6);let y=Float32Array,M=kn;const F=new y(I.x*I.y*Ic);Kt.updateScaleRotationsPaddedData(0,n-1,h,d,F);const P=new vi(F,I.x,I.y,on,M);P.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=P,this.material.uniforms.scaleRotationsTextureSize.value.copy(I),this.splatDataTextures.scaleRotations={data:F,texture:P,size:I,compressionLevel:l}}if(_){const C=c===2?ai:Ws;let I=p;I%2!==0&&I++;const y=this.minSphericalHarmonicsDegree===2?4:2,M=y===4?on:dh;let F=i(y,I);if(F.x*F.y<=cp){const P=F.x*F.y*y,L=new g(P);for(let B=0;B<n;B++){const V=p*B,k=I*B;for(let Z=0;Z<p;Z++)L[k+Z]=_[V+Z]}const U=new vi(L,F.x,F.y,M,C);U.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=U,this.splatDataTextures.sphericalHarmonics={componentCount:p,paddedComponentCount:I,data:L,textureCount:1,texture:U,size:F,compressionLevel:c,elementsPerTexel:y}}else{const P=p/3;I=P,I%2!==0&&I++,F=i(y,I);const L=F.x*F.y*y,U=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],B=[],V=[];for(let k=0;k<3;k++){const Z=new g(L);B.push(Z);for(let se=0;se<n;se++){const ve=p*se,_e=I*se;if(P>=3){for(let W=0;W<3;W++)Z[_e+W]=_[ve+k*3+W];if(P>=8)for(let W=0;W<5;W++)Z[_e+3+W]=_[ve+9+k*5+W]}}const te=new vi(Z,F.x,F.y,M,C);V.push(te),te.needsUpdate=!0,U[k].value=te}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:p,componentCountPerChannel:P,paddedComponentCount:I,data:B,textureCount:3,textures:V,size:F,compressionLevel:c,elementsPerTexel:y}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(F),this.material.uniforms.sphericalHarmonics8BitMode.value=c===2?1:0;for(let P=0;P<this.scenes.length;P++){const L=this.scenes[P].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[P]=L.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[P]=L.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const E=i(ap,4),T=new Uint32Array(E.x*E.y*ap);for(let C=0;C<n;C++)T[C]=this.globalSplatIndexToSceneIndexMap[C];const S=new vi(T,E.x,E.y,Sl,Nn);S.internalFormat="R32UI",S.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=S,this.material.uniforms.sceneIndexesTextureSize.value.copy(E),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:T,texture:S,size:E},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(t,n){const i=this.splatDataTextures.covariances,r=i?i.compressionLevel:void 0,o=this.splatDataTextures.scaleRotations,a=o?o.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,r,a,c,t,n,t)}updateDataTexturesFromBaseData(t,n){const i=this.splatDataTextures.covariances,r=i?i.compressionLevel:void 0,o=this.splatDataTextures.scaleRotations,a=o?o.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0,u=this.splatDataTextures.centerColors,h=u.data,d=u.texture;Kt.updateCenterColorsPaddedData(t,n,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,h);const f=this.renderer?this.renderer.properties.get(d):null;if(!f||!f.__webglTexture?d.needsUpdate=!0:this.updateDataTexture(h,u.texture,u.size,f,Pc,cE,4,t,n),i){const x=i.texture,A=t*Fa,E=n*Fa;if(r===0)for(let S=A;S<=E;S++){const C=this.splatDataTextures.baseData.covariances[S];i.data[S]=C}else Kt.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,i.data,t*i.elementsPerTexelAllocated,A,E);const T=this.renderer?this.renderer.properties.get(x):null;!T||!T.__webglTexture?x.needsUpdate=!0:r===0?this.updateDataTexture(i.data,i.texture,i.size,T,i.elementsPerTexelStored,Fa,4,t,n):this.updateDataTexture(i.data,i.texture,i.size,T,i.elementsPerTexelAllocated,i.elementsPerTexelAllocated,2,t,n)}if(o){const x=o.data,A=o.texture,E=6,T=a===0?4:2;Kt.updateScaleRotationsPaddedData(t,n,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,x);const S=this.renderer?this.renderer.properties.get(A):null;!S||!S.__webglTexture?A.needsUpdate=!0:this.updateDataTexture(x,o.texture,o.size,S,Ic,E,T,t,n)}const m=this.splatDataTextures.baseData.sphericalHarmonics;if(m){let x=4;c===1?x=2:c===2&&(x=1);const A=(S,C,I,y,M)=>{const F=this.renderer?this.renderer.properties.get(S):null;!F||!F.__webglTexture?S.needsUpdate=!0:this.updateDataTexture(y,S,C,F,I,M,x,t,n)},E=l.componentCount,T=l.paddedComponentCount;if(l.textureCount===1){const S=l.data;for(let C=t;C<=n;C++){const I=E*C,y=T*C;for(let M=0;M<E;M++)S[y+M]=m[I+M]}A(l.texture,l.size,l.elementsPerTexel,S,T)}else{const S=l.componentCountPerChannel;for(let C=0;C<3;C++){const I=l.data[C];for(let y=t;y<=n;y++){const M=E*y,F=T*y;if(S>=3){for(let P=0;P<3;P++)I[F+P]=m[M+C*3+P];if(S>=8)for(let P=0;P<5;P++)I[F+3+P]=m[M+9+C*5+P]}}A(l.textures[C],l.size,l.elementsPerTexel,I,T)}}}const g=this.splatDataTextures.sceneIndexes,p=g.data;for(let x=this.lastBuildSplatCount;x<=n;x++)p[x]=this.globalSplatIndexToSceneIndexMap[x];const _=g.texture,v=this.renderer?this.renderer.properties.get(_):null;!v||!v.__webglTexture?_.needsUpdate=!0:this.updateDataTexture(p,g.texture,g.size,v,1,1,1,this.lastBuildSplatCount,n)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const r=this.getScene(n).splatBuffer;(n===0||r.compressionLevel>t)&&(t=r.compressionLevel)}return t}getMinimumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const r=this.getScene(n).splatBuffer;(n===0||r.compressionLevel<t)&&(t=r.compressionLevel)}return t}static computeTextureUpdateRegion(t,n,i,r,o){const a=o/r,l=t*a,c=Math.floor(l/i),u=c*i*r,h=n*a,d=Math.floor(h/i),f=d*i*r+i*r;return{dataStart:u,dataEnd:f,startRow:c,endRow:d}}updateDataTexture(t,n,i,r,o,a,l,c,u){const h=this.renderer.getContext(),d=Kt.computeTextureUpdateRegion(c,u,i.x,o,a),f=d.dataEnd-d.dataStart,m=new t.constructor(t.buffer,d.dataStart*l,f),g=d.endRow-d.startRow+1,p=this.webGLUtils.convert(n.type),_=this.webGLUtils.convert(n.format,n.colorSpace),v=h.getParameter(h.TEXTURE_BINDING_2D);h.bindTexture(h.TEXTURE_2D,r.__webglTexture),h.texSubImage2D(h.TEXTURE_2D,0,0,d.startRow,i.x,g,_,p,m),h.bindTexture(h.TEXTURE_2D,v)}static updatePaddedCompressedCovariancesTextureData(t,n,i,r,o){let a=new DataView(n.buffer),l=i,c=0;for(let u=r;u<=o;u+=2)a.setUint16(l*2,t[u],!0),a.setUint16(l*2+2,t[u+1],!0),l+=2,c++,c>=3&&(l+=2,c=0)}static updateCenterColorsPaddedData(t,n,i,r,o){for(let a=t;a<=n;a++){const l=a*4,c=a*3,u=a*4;o[u]=sT(r,l),o[u+1]=Mc(i[c]),o[u+2]=Mc(i[c+1]),o[u+3]=Mc(i[c+2])}}static updateScaleRotationsPaddedData(t,n,i,r,o){for(let l=t;l<=n;l++){const c=l*3,u=l*4,h=l*6;o[h]=i[c],o[h+1]=i[c+1],o[h+2]=i[c+2],o[h+3]=r[u],o[h+4]=r[u+1],o[h+5]=r[u+2]}}updateVisibleRegion(t){const n=this.getSplatCount(),i=new R;if(!t){const o=new R;this.scenes.forEach(a=>{o.add(a.splatBuffer.sceneCenter)}),o.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(o),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const r=t?this.lastBuildSplatCount:0;for(let o=r;o<n;o++){this.getSplatCenter(o,i,!0);const a=i.sub(this.calculatedSceneCenter).length();a>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=a)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>lp&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-lp,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(t=mo.Default){const n=pE*this.sceneFadeInRateMultiplier,i=mE*this.sceneFadeInRateMultiplier,r=this.finalBuild?n:i,o=t===mo.Default?r:i;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*o+this.visibleRegionFadeStartRadius;const l=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,c=l||t===mo.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=c,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!l}updateRenderIndexes(t,n){const i=this.geometry;i.attributes.splatIndex.set(t),i.attributes.splatIndex.needsUpdate=!0,n>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),i.instanceCount=n,i.setDrawRange(0,n)}updateTransforms(){for(let t=0;t<this.scenes.length;t++)this.getScene(t).updateTransform(this.dynamicMode)}setSplatScale(t=1){this.splatScale=t,this.material.uniforms.splatScale.value=t,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(t){this.pointCloudModeEnabled=t,this.material.uniforms.pointCloudModeEnabled.value=t?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(){return Kt.getTotalSplatCountForScenes(this.scenes)}static getTotalSplatCountForScenes(t){let n=0;for(let i of t)i&&i.splatBuffer&&(n+=i.splatBuffer.getSplatCount());return n}static getTotalSplatCountForSplatBuffers(t){let n=0;for(let i of t)n+=i.getSplatCount();return n}getMaxSplatCount(){return Kt.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(t){let n=0;for(let i of t)i&&i.splatBuffer&&(n+=i.splatBuffer.getMaxSplatCount());return n}static getTotalMaxSplatCountForSplatBuffers(t){let n=0;for(let i of t)n+=i.getMaxSplatCount();return n}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.vao&&(t.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(t.deleteProgram(this.distancesTransformFeedback.program),t.deleteShader(this.distancesTransformFeedback.vertexShader),t.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(t.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,t.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(t.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(t){if(t!==this.renderer){this.renderer=t;const n=this.renderer.getContext(),i=new oE(n),r=new aE(n,i,{});if(i.init(r),this.webGLUtils=new am(n,i),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:o,sceneIndexes:a}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(o,a)}}}updateGPUCentersBufferForDistancesComputation(t,n,i){if(!this.renderer)return;const r=this.renderer.getContext(),o=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao);const a=this.integerBasedDistancesComputation?Uint32Array:Float32Array,l=16,c=i*l;if(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),t)r.bufferSubData(r.ARRAY_BUFFER,c,n);else{const u=new a(this.getMaxSplatCount()*l);u.set(n),r.bufferData(r.ARRAY_BUFFER,u,r.STATIC_DRAW)}r.bindBuffer(r.ARRAY_BUFFER,null),o&&r.bindVertexArray(o)}updateGPUTransformIndexesBufferForDistancesComputation(t,n,i){if(!this.renderer||!this.dynamicMode)return;const r=this.renderer.getContext(),o=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao);const a=i*4;if(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),t)r.bufferSubData(r.ARRAY_BUFFER,a,n);else{const l=new Uint32Array(this.getMaxSplatCount()*4);l.set(n),r.bufferData(r.ARRAY_BUFFER,l,r.STATIC_DRAW)}r.bindBuffer(r.ARRAY_BUFFER,null),o&&r.bindVertexArray(o)}getSceneIndexes(t,n){let i;const r=n-t+1;i=new Uint32Array(r);for(let o=t;o<=n;o++)i[o]=this.globalSplatIndexToSceneIndexMap[o];return i}getLocalSplatParameters(t,n,i){i==null&&(i=!this.dynamicMode),n.splatBuffer=this.getSplatBufferForSplat(t),n.localIndex=this.getSplatLocalIndex(t),n.sceneTransform=i?this.getSceneTransformForSplat(t):null}fillSplatDataArrays(t,n,i,r,o,a,l,c=0,u=0,h=1,d,f,m=0,g){const p=new R;p.x=void 0,p.y=void 0,this.splatRenderMode===Si.ThreeD?p.z=void 0:p.z=1;const _=new he;let v=0,x=this.scenes.length-1;g!=null&&g>=0&&g<=this.scenes.length&&(v=g,x=g);for(let A=v;A<=x;A++){l==null&&(l=!this.dynamicMode);const E=this.getScene(A),T=E.splatBuffer;let S;if(l&&(this.getSceneTransform(A,_),S=_),t&&T.fillSplatCovarianceArray(t,S,d,f,m,c),n||i){if(!n||!i)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');T.fillSplatScaleRotationArray(n,i,S,d,f,m,u,p)}r&&T.fillSplatCenterArray(r,S,d,f,m),o&&T.fillSplatColorArray(o,E.minimumAlpha,d,f,m),a&&T.fillSphericalHarmonicsArray(a,this.minSphericalHarmonicsDegree,S,d,f,m,h),m+=T.getSplatCount()}}getIntegerCenters(t,n,i=!1){const r=n-t+1,o=new Float32Array(r*3);this.fillSplatDataArrays(null,null,null,o,null,null,void 0,void 0,void 0,void 0,t);let a,l=i?4:3;a=new Int32Array(r*l);for(let c=0;c<r;c++){for(let u=0;u<3;u++)a[c*l+u]=Math.round(o[c*3+u]*1e3);i&&(a[c*l+3]=1e3)}return a}getFloatCenters(t,n,i=!1){const r=n-t+1,o=new Float32Array(r*3);if(this.fillSplatDataArrays(null,null,null,o,null,null,void 0,void 0,void 0,void 0,t),!i)return o;let a=new Float32Array(r*4);for(let l=0;l<r;l++){for(let c=0;c<3;c++)a[l*4+c]=o[l*3+c];a[l*4+3]=1}return a}getSceneTransform(t,n){const i=this.getScene(t);i.updateTransform(this.dynamicMode),n.copy(i.transform)}getScene(t){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[t]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).splatBuffer}getSceneIndexForSplat(t){return this.globalSplatIndexToSceneIndexMap[t]}getSceneTransformForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).transform}getSplatLocalIndex(t){return this.globalSplatIndexToLocalSplatIndexMap[t]}static getIntegerMatrixArray(t){const n=t.elements,i=[];for(let r=0;r<16;r++)i[r]=Math.round(n[r]*1e3);return i}computeBoundingBox(t=!1,n){let i=this.getSplatCount();if(n!=null){if(n<0||n>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");i=this.scenes[n].splatBuffer.getSplatCount()}const r=new Float32Array(i*3);this.fillSplatDataArrays(null,null,null,r,null,null,t,void 0,void 0,void 0,void 0,n);const o=new R,a=new R;for(let l=0;l<i;l++){const c=l*3,u=r[c],h=r[c+1],d=r[c+2];(l===0||u<o.x)&&(o.x=u),(l===0||h<o.y)&&(o.y=h),(l===0||d<o.z)&&(o.z=d),(l===0||u>a.x)&&(a.x=u),(l===0||h>a.y)&&(a.y=h),(l===0||d>a.z)&&(a.z=d)}return new $n(o,a)}}var gE="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",up="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",_E="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",xE="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function vE(s){let e,t,n,i,r,o,a,l,c,u,h,d,f,m,g,p,_,v,x,A;function E(T,S,C,I,y,M,F){const P=performance.now();if(!n&&(new Uint32Array(t,a,y.byteLength/A.BytesPerInt).set(y),new Float32Array(t,u,F.byteLength/A.BytesPerFloat).set(F),I)){let k;i?k=new Int32Array(t,h,M.byteLength/A.BytesPerInt):k=new Float32Array(t,h,M.byteLength/A.BytesPerFloat),k.set(M)}p||(p=new Uint32Array(v)),new Float32Array(t,g,16).set(C),new Uint32Array(t,f,v).set(p),e.exports.sortIndexes(a,m,h,d,f,g,l,c,u,v,T,S,o,I,i,r);const L={sortDone:!0,splatSortCount:T,splatRenderCount:S,sortTime:0};if(!n){const B=new Uint32Array(t,l,S);(!_||_.length<S)&&(_=new Uint32Array(S)),_.set(B),L.sortedIndexes=_}const U=performance.now();L.sortTime=U-P,s.postMessage(L)}s.onmessage=T=>{if(T.data.centers)centers=T.data.centers,sceneIndexes=T.data.sceneIndexes,i?new Int32Array(t,m+T.data.range.from*A.BytesPerInt*4,T.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,m+T.data.range.from*A.BytesPerFloat*4,T.data.range.count*4).set(new Float32Array(centers)),r&&new Uint32Array(t,c+T.data.range.from*4,T.data.range.count).set(new Uint32Array(sceneIndexes)),x=T.data.range.from+T.data.range.count;else if(T.data.sort){const S=Math.min(T.data.sort.splatRenderCount||0,x),C=Math.min(T.data.sort.splatSortCount||0,x),I=T.data.sort.usePrecomputedDistances;let y,M,F;n||(y=T.data.sort.indexesToSort,F=T.data.sort.transforms,I&&(M=T.data.sort.precomputedDistances)),E(C,S,T.data.sort.modelViewProj,I,y,M,F)}else if(T.data.init){A=T.data.init.Constants,o=T.data.init.splatCount,n=T.data.init.useSharedMemory,i=T.data.init.integerBasedSort,r=T.data.init.dynamicMode,v=T.data.init.distanceMapRange,x=0;const S=i?A.BytesPerInt*4:A.BytesPerFloat*4,C=new Uint8Array(T.data.init.sorterWasmBytes),I=16*A.BytesPerFloat,y=o*A.BytesPerInt,M=o*S,F=I,P=i?o*A.BytesPerInt:o*A.BytesPerFloat,L=o*A.BytesPerInt,U=o*A.BytesPerInt,B=i?v*A.BytesPerInt*2:v*A.BytesPerFloat*2,V=r?o*A.BytesPerInt:0,k=r?A.MaxScenes*I:0,Z=A.MemoryPageSize*32,te=y+M+F+P+L+B+U+V+k+Z,se=Math.floor(te/A.MemoryPageSize)+1,ve={module:{},env:{memory:new WebAssembly.Memory({initial:se,maximum:se,shared:!0})}};WebAssembly.compile(C).then(_e=>WebAssembly.instantiate(_e,ve)).then(_e=>{e=_e,a=0,m=a+y,g=m+M,h=g+F,d=h+P,f=d+L,l=f+B,c=l+U,u=c+V,t=ve.env.memory.buffer,n?s.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:a,sortedIndexesBuffer:t,sortedIndexesOffset:l,precomputedDistancesBuffer:t,precomputedDistancesOffset:h,transformsBuffer:t,transformsOffset:u}):s.postMessage({sortSetupPhase1Complete:!0})})}}}function yE(s,e,t,n,i,r=Ze.DefaultSplatSortDistanceMapPrecision){const o=new Worker(URL.createObjectURL(new Blob(["(",vE.toString(),")(self)"],{type:"application/javascript"})));let a=gE;const l=Ih()?wm():null;!t&&!e?(a=up,l&&l.major<=16&&l.minor<4&&(a=xE)):t?e||l&&l.major<=16&&l.minor<4&&(a=_E):a=up;const c=atob(a),u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h);return o.postMessage({init:{sorterWasmBytes:u.buffer,splatCount:s,useSharedMemory:e,integerBasedSort:n,dynamicMode:i,distanceMapRange:1<<r,Constants:{BytesPerFloat:Ze.BytesPerFloat,BytesPerInt:Ze.BytesPerInt,MemoryPageSize:Ze.MemoryPageSize,MaxScenes:Ze.MaxScenes}}}),o}const cs={None:0,VR:1,AR:2};class Ns{static createButton(e,t={}){const n=document.createElement("button");function i(){let c=null;async function u(f){f.addEventListener("end",h),await e.xr.setSession(f),n.textContent="EXIT VR",c=f}function h(){c.removeEventListener("end",h),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const d={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",d).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(u).catch(f=>{console.warn(f)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(u).catch(f=>{console.warn(f)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){r(),n.textContent="VR NOT SUPPORTED"}function a(c){r(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():o(),c&&Ns.xrSessionIsGranted&&n.click()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Ns.xrSessionIsGranted=!0})}}}Ns.xrSessionIsGranted=!1;Ns.registerSessionGrantedListener();class AE{static createButton(e,t={}){const n=document.createElement("button");function i(){if(t.domOverlay===void 0){const d=document.createElement("div");d.style.display="none",document.body.appendChild(d);const f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("width",38),f.setAttribute("height",38),f.style.position="absolute",f.style.right="20px",f.style.top="20px",f.addEventListener("click",function(){c.end()}),d.appendChild(f);const m=document.createElementNS("http://www.w3.org/2000/svg","path");m.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),m.setAttribute("stroke","#fff"),m.setAttribute("stroke-width",2),f.appendChild(m),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:d}}let c=null;async function u(d){d.addEventListener("end",h),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(d),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=d}function h(){c.removeEventListener("end",h),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(d=>{console.warn(d)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){r(),n.textContent="AR NOT SUPPORTED"}function a(c){r(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?i():o()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const Dc={Always:0,OnChange:1,Never:2},SE=50,ME=.75,TE=15e5,EE=10,CE=2.5,wE=60,zi=class zi{constructor(e={}){le(this,"onKeyDown",function(){const e=new R,t=new he,n=new he;return function(i){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),t.makeRotationAxis(e,Math.PI/128),n.makeRotationAxis(e,-Math.PI/128),i.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(t);break;case"ArrowRight":this.camera.up.transformDirection(n);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}}());le(this,"onMouseUp",function(){const e=new xe;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),os()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}}());le(this,"checkForFocalPointChange",function(){const e=new xe,t=new R,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){const r=n[0].origin;t.copy(r).sub(this.camera.position),t.length()>ME&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(r),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=os())}}}());le(this,"updateSplatMesh",function(){const e=new xe;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const n=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,i=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,r=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,o=this.focalAdjustment*r,a=1/o;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,n*o,i*o,this.camera.isOrthographicCamera,this.camera.zoom||1,a)}}}());le(this,"addSplatBuffers",function(){return function(e,t=[],n=!0,i=!0,r=!0,o=!1,a=!1,l=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let c=null;const u=()=>{c!==null&&(this.loadingSpinner.removeTask(c),c=null)};return new Promise(h=>{i&&(c=this.loadingSpinner.addTask("Processing splats...")),Jn(()=>{if(this.isDisposingOrDisposed())h();else{const d=this.addSplatBuffersToMesh(e,t,n,r,o,l);this.gpuAcceleratedSort||this.preSortPosts.push({centers:d.centers.buffer,sceneIndexes:d.sceneIndexes.buffer,range:{from:d.from,to:d.to,count:d.count}});const f=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==f&&this.disposeSortWorker(),(!this.sortWorker&&f>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||(this.sortWorker&&(this.sortRunning?n&&this.sortPromise.then(()=>{this.runSplatSort(!0,!0)}):this.runSplatSort(!0,!0)),this.splatRenderReady=!0,u(),h())})}},!0)})}}());le(this,"addSplatBuffersToMesh",function(){let e;return function(t,n,i=!0,r=!1,o=!1,a=!0){if(this.isDisposingOrDisposed())return;let l=[],c=[];o||(l=this.splatMesh.scenes.map(f=>f.splatBuffer)||[],c=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(f=>f):[]),l.push(...t),c.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);const u=f=>{if(this.isDisposingOrDisposed())return;const m=this.splatMesh.getSplatCount();r&&m>=TE&&!f&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},h=f=>{this.isDisposingOrDisposed()||f&&e&&(this.loadingSpinner.removeTask(e),e=null)},d=this.splatMesh.build(l,c,!0,i,u,h,a);return i&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),d}}());le(this,"shouldRender",function(){let e=0;const t=new R,n=new it,i=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let r=!1,o=!1;if(this.camera){const a=this.camera.position,l=this.camera.quaternion;o=Math.abs(a.x-t.x)>i||Math.abs(a.y-t.y)>i||Math.abs(a.z-t.z)>i||Math.abs(l.x-n.x)>i||Math.abs(l.y-n.y)>i||Math.abs(l.z-n.z)>i||Math.abs(l.w-n.w)>i}return r=this.renderMode!==Dc.Never&&(e===0||this.splatMesh.visibleRegionChanging||o||this.renderMode===Dc.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,r}}());le(this,"render",function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=n=>{for(let i of n.children)if(i.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}}());le(this,"updateFPS",function(){let e=os(),t=0;return function(){if(this.consecutiveRenderFrames>wE){const n=os();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}}());le(this,"updateForRendererSizeChanges",function(){const e=new xe,t=new xe;let n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(n===void 0||n!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}}());le(this,"timingSensitiveUpdates",function(){let e;return function(){const t=os();e||(e=t);const n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}}());le(this,"updateCameraTransition",function(){let e=new R,t=new R,n=new R;return function(i){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const r=Math.acos(t.dot(n)),a=(r/(Math.PI/3)*.65+.3)/r*(i-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,a),this.camera.lookAt(e),this.controls.target.copy(e),a>=1&&(this.transitioningCameraTarget=!1)}}}());le(this,"updateFocusMarker",function(){const e=new xe;let t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const i=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let r=Math.min(i+EE*n,1);this.sceneHelper.setFocusMarkerOpacity(r),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let i;if(t?i=1:i=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),i>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let r=Math.max(i-CE*n,0);this.sceneHelper.setFocusMarkerOpacity(r),r===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}i>0&&this.forceRenderNextFrame(),t=!1}}}());le(this,"updateMeshCursor",function(){const e=[],t=new xe;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}}());le(this,"updateInfoPanel",function(){const e=new xe;return function(){if(!this.showInfo)return;const t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const n=this.controls?this.controls.target:null,i=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,r=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,i,this.currentFPS||"N/A",t,this.splatRenderCount,r,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}}());le(this,"runSplatSort",function(){const e=new he,t=[],n=new R(0,0,-1),i=new R(0,0,-1),r=new R,o=new R,a=[],l=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(c=!1,u=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let h=0,d=0,f=!1,m=!1;if(i.set(0,0,-1).applyQuaternion(this.camera.quaternion),h=i.dot(n),d=o.copy(this.camera.position).sub(r).length(),!c&&!this.splatMesh.dynamicMode&&a.length===0&&(h<=.99&&(f=!0),d>=1&&(m=!0),!f&&!m))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:g,shouldSortAll:p}=this.gatherSceneNodesForSort();p=p||u,this.splatRenderCount=g,e.copy(this.camera.matrixWorld).invert();const _=this.perspectiveCamera||this.camera;e.premultiply(_.projectionMatrix),e.multiply(this.splatMesh.matrixWorld);let v=Promise.resolve(!0);return this.gpuAcceleratedSort&&(a.length<=1||a.length%2===0)&&(v=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),v.then(()=>{if(a.length===0)if(this.splatMesh.dynamicMode||p)a.push(this.splatRenderCount);else{for(let E of l)if(h<E.angleThreshold){for(let T of E.sortFractions)a.push(Math.floor(this.splatRenderCount*T));break}a.push(this.splatRenderCount)}let x=Math.min(a.shift(),this.splatRenderCount);this.splatSortCount=x,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;const A={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:x,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(A.indexesToSort=this.sortWorkerIndexesToSort,A.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(A.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(E=>{this.sortPromiseResolver=E}),this.preSortPosts.length>0&&(this.preSortPosts.forEach(E=>{this.sortWorker.postMessage(E)}),this.preSortPosts=[]),this.sortWorker.postMessage({sort:A}),a.length===0&&(r.copy(this.camera.position),n.copy(i)),!0}),v}}());le(this,"gatherSceneNodesForSort",function(){const e=[];let t=null;const n=new R,i=new R,r=new R,o=new he,a=new he,l=new he,c=new R,u=new R(0,0,-1),h=new R,d=f=>h.copy(f.max).sub(f.min).length();return function(f=!1){this.getRenderDimensions(c);const m=c.y/2/Math.tan(this.camera.fov/2*Wt.DEG2RAD),g=Math.atan(c.x/2/m),p=Math.atan(c.y/2/m),_=Math.cos(g),v=Math.cos(p),x=this.splatMesh.getSplatTree();if(x){a.copy(this.camera.matrixWorld).invert(),a.multiply(this.splatMesh.matrixWorld);let A=0,E=0;for(let S=0;S<x.subTrees.length;S++){const C=x.subTrees[S];o.copy(a),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(S,l),o.multiply(l));const I=C.nodesWithIndexes.length;for(let y=0;y<I;y++){const M=C.nodesWithIndexes[y];if(!M.data||!M.data.indexes||M.data.indexes.length===0)continue;r.copy(M.center).applyMatrix4(o);const F=r.length();r.normalize(),n.copy(r).setX(0).normalize(),i.copy(r).setY(0).normalize();const P=u.dot(i),L=u.dot(n),U=d(M),B=L<v-.6,V=P<_-.6;!f&&(V||B)&&F>U||(E+=M.data.indexes.length,e[A]=M,M.data.distanceToNode=F,A++)}}e.length=A,e.sort((S,C)=>S.data.distanceToNode<C.data.distanceToNode?-1:1);let T=E*Ze.BytesPerInt;for(let S=0;S<A;S++){const C=e[S],I=C.data.indexes.length,y=I*Ze.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,T-y,I).set(C.data.indexes),T-=y}return{splatRenderCount:E,shouldSortAll:!1}}else{const A=this.splatMesh.getSplatCount();if(!t||t.length!==A){t=new Uint32Array(A);for(let E=0;E<A;E++)t[E]=E}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:A,shouldSortAll:!0}}}}());if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new R().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new R().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new R().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.webXRMode=e.webXRMode||cs.None,this.webXRMode!==cs.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||Dc.Always,this.sceneRevealMode=e.sceneRevealMode||mo.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||Es.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,Ih()){const n=wm();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=Si.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||Ze.DefaultSplatSortDistanceMapPrecision;const t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=Zt(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortPosts=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new JT,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new R,this.nextCameraTarget=new R,this.mousePosition=new xe,this.mouseDownPosition=new xe,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new ku(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new QT(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new YT(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new Kt(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement.parentElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new cm,this.sceneHelper=new fo(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new xe;this.getRenderDimensions(e),this.perspectiveCamera=new rn(SE,e.x/e.y,.1,1e3),this.orthographicCamera=new Tl(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new xe;this.getRenderDimensions(e),this.renderer=new lm({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new He(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===cs.VR?this.rootElement.appendChild(Ns.createButton(this.renderer,e)):this.webXRMode===cs.AR&&this.rootElement.appendChild(AE.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===cs.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new Da(this.camera,this.renderer.domElement):this.perspectiveControls=new Da(this.camera,this.renderer.domElement):(this.perspectiveControls=new Da(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new Da(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===cs.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=os()}onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){const i=a=>{a.saveState(),a.reset()},r=this.controls,o=e?this.orthographicControls:this.perspectiveControls;i(o),i(r),o.target.copy(r.target),e?zi.setCameraZoomFromPosition(n,t,r):zi.setCameraPositionFromZoom(n,t,o),this.controls=o,this.camera.lookAt(this.controls.target)}}adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const n=this.renderer.xr.getCamera().projectionMatrix.elements[0],i=this.camera.projectionMatrix.elements[0];e.x*=i/n}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);const n=t.format!==void 0&&t.format!==null?t.format:tp(e),i=zi.isProgressivelyLoadable(n)&&t.progressiveLoad,r=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0;let o=null;r&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const a=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},l=(g,p,_)=>{if(r)if(_===Ot.Downloading)if(g==100)this.loadingSpinner.setMessageForTask(o,"Download complete!");else if(i)this.loadingSpinner.setMessageForTask(o,"Downloading splats...");else{const v=p?`: ${p}`:"...";this.loadingSpinner.setMessageForTask(o,`Downloading${v}`)}else _===Ot.Processing&&this.loadingSpinner.setMessageForTask(o,"Processing splats...")};let c=!1,u=0;const h=(g,p)=>{r&&((g&&i||p&&!i)&&(this.loadingSpinner.removeTask(o),!p&&!c&&this.loadingProgressBar.show()),i&&(p?(c=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(u)))},d=(g,p,_)=>{u=g,l(g,p,_),t.onProgress&&t.onProgress(g,p,_)},f=(g,p,_)=>{!i&&t.onProgress&&t.onProgress(0,"0%",Ot.Processing);const v={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([g],[v],_,p&&r,r,i,i).then(()=>{!i&&t.onProgress&&t.onProgress(100,"100%",Ot.Processing),h(p,_)})};return(i?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,f.bind(this),d,a.bind(this))}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,i,r,o){const a=this.downloadSplatSceneToSplatBuffer(e,n,r,!1,void 0,t),l=Tc(a.abortHandler);return a.then(c=>(this.removeSplatSceneDownloadPromise(a),i(c,!0,!0).then(()=>{l.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(c=>{o&&o(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(a);const u=c instanceof Wa?c:new Error(`Viewer::addSplatScene -> Could not load file ${e}`);l.reject(u)}),this.addSplatSceneDownloadPromise(a),this.setSplatSceneDownloadAndBuildPromise(l.promise),l.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,i,r,o){let a=0,l=!1;const c=[],u=()=>{if(c.length>0&&!l&&!this.isDisposingOrDisposed()){l=!0;const g=c.shift();i(g.splatBuffer,g.firstBuild,g.finalBuild).then(()=>{l=!1,g.firstBuild?f.resolve():g.finalBuild&&(m.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),c.length>0&&Jn(()=>u())})}},h=(g,p)=>{this.isDisposingOrDisposed()||(p||c.length===0||g.getSplatCount()>c[0].splatBuffer.getSplatCount())&&(c.push({splatBuffer:g,firstBuild:a===0,finalBuild:p}),a++,u())},d=this.downloadSplatSceneToSplatBuffer(e,n,r,!0,h,t),f=Tc(d.abortHandler),m=Tc();return this.addSplatSceneDownloadPromise(d),this.setSplatSceneDownloadAndBuildPromise(m.promise),d.then(()=>{this.removeSplatSceneDownloadPromise(d)}).catch(g=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(d);const p=g instanceof Wa?g:new Error("Viewer::addSplatScene -> Could not load one or more scenes");f.reject(p),o&&o(p)}),f.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const i=e.length,r=[];let o;t&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const a=(h,d,f,m)=>{r[h]=d;let g=0;for(let p=0;p<i;p++)g+=r[p]||0;g=g/i,f=`${g.toFixed(2)}%`,t&&m===Ot.Downloading&&this.loadingSpinner.setMessageForTask(o,g==100?"Download complete!":`Downloading: ${f}`),n&&n(g,f,m)},l=[],c=[];for(let h=0;h<e.length;h++){const d=e[h],f=d.format!==void 0&&d.format!==null?d.format:tp(d.path),m=this.downloadSplatSceneToSplatBuffer(d.path,d.splatAlphaRemovalThreshold,a.bind(this,h),!1,void 0,f);l.push(m),c.push(m.promise)}const u=new Bo((h,d)=>{Promise.all(c).then(f=>{t&&this.loadingSpinner.removeTask(o),n&&n(0,"0%",Ot.Processing),this.addSplatBuffers(f,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",Ot.Processing),this.clearSplatSceneDownloadAndBuildPromise(),h()})}).catch(f=>{t&&this.loadingSpinner.removeTask(o),this.clearSplatSceneDownloadAndBuildPromise();const m=f instanceof Wa?f:new Error("Viewer::addSplatScenes -> Could not load one or more splat scenes.");d(m)}).finally(()=>{this.removeSplatSceneDownloadPromise(u)})},h=>{for(let d of l)d.abort(h)});return this.addSplatSceneDownloadPromise(u),this.setSplatSceneDownloadAndBuildPromise(u),u}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,i=!1,r=void 0,o){const a=i?!1:this.optimizeSplatData;try{if(o===Ai.Splat)return Vh.loadFromURL(e,n,i,r,t,this.inMemoryCompressionLevel,a);if(o===Ai.KSplat)return Nu.loadFromURL(e,n,i,r);if(o===Ai.Ply)return Hh.loadFromURL(e,n,i,r,t,this.inMemoryCompressionLevel,a,this.sphericalHarmonicsDegree)}catch(l){throw l instanceof zh?new Error("File type or server does not support progressive loading."):l}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===Ai.Splat||e===Ai.KSplat||e===Ai.Ply}setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{const n=this.integerBasedSort?Int32Array:Float32Array,i=e.getSplatCount(),r=e.getMaxSplatCount();this.sortWorker=yE(r,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=o=>{if(o.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,o.data.splatRenderCount);else{const a=new Uint32Array(o.data.sortedIndexes.buffer,0,o.data.splatRenderCount);this.splatMesh.updateRenderIndexes(a,o.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=o.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(a=>{a()}),this.runAfterNextSort.length=0)}else if(o.data.sortCanceled)this.sortRunning=!1;else if(o.data.sortSetupPhase1Complete){this.logLevel>=Es.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(o.data.sortedIndexesBuffer,o.data.sortedIndexesOffset,r),this.sortWorkerIndexesToSort=new Uint32Array(o.data.indexesToSortBuffer,o.data.indexesToSortOffset,r),this.sortWorkerPrecomputedDistances=new n(o.data.precomputedDistancesBuffer,o.data.precomputedDistancesOffset,r),this.sortWorkerTransforms=new Float32Array(o.data.transformsBuffer,o.data.transformsOffset,Ze.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(r),this.sortWorkerPrecomputedDistances=new n(r),this.sortWorkerTransforms=new Float32Array(Ze.MaxScenes*16));for(let a=0;a<i;a++)this.sortWorkerIndexesToSort[a]=a;if(this.sortWorker.maxSplatCount=r,this.logLevel>=Es.Info){console.log("Sorting web worker ready.");const a=this.splatMesh.getSplatDataTextures(),l=a.covariances.size,c=a.centerColors.size;console.log("Covariances texture size: "+l.x+" x "+l.y),console.log("Centers/colors texture size: "+c.x+" x "+c.y)}t()}}})}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((i,r)=>{let o;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),o=this.loadingSpinner.addTask("Removing splat scene..."));const a=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(o))},l=u=>{a(),this.splatSceneRemovalPromise=null,u?r(u):i()},c=()=>this.isDisposingOrDisposed()?(l(),!0):!1;n=this.sortPromise||Promise.resolve(),n.then(()=>{if(c())return;const u=[],h=[],d=[];for(let f=0;f<this.splatMesh.scenes.length;f++){let m=!1;for(let g of e)if(g===f){m=!0;break}if(!m){const g=this.splatMesh.scenes[f];u.push(g.splatBuffer),h.push(this.splatMesh.sceneOptions[f]),d.push({position:g.position.clone(),quaternion:g.quaternion.clone(),scale:g.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=mo.Instant,this.createSplatMesh(),this.addSplatBuffers(u,h,!0,!1,!0).then(()=>{c()||(a(),this.splatMesh.scenes.forEach((f,m)=>{f.position.copy(d[m].position),f.quaternion.copy(d[m].quaternion),f.scale.copy(d[m].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(c()){this.splatRenderReady=!0;return}n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,l()})}))}).catch(f=>{l(f)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){const i=this.splatSceneDownloadPromises[n];t.push(i),e.push(i.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&zi.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}};le(zi,"setCameraPositionFromZoom",function(){const e=new R;return function(t,n,i){const r=1/(n.zoom*.001);e.copy(i.target).sub(t.position).normalize().multiplyScalar(r).negate(),t.position.copy(i.target).add(e)}}()),le(zi,"setCameraZoomFromPosition",function(){const e=new R;return function(t,n,i){const r=e.copy(i.target).sub(n.position).length();t.zoom=1/(r*.001)}}());let Hu=zi;class al extends Sr{constructor(e={}){super(),e.selfDrivenMode=!1,e.useBuiltInControls=!1,e.rootElement=null,e.ignoreDevicePixelRatio=!1,e.dropInMode=!0,e.camera=void 0,e.renderer=void 0,this.viewer=new Hu(e),this.splatMesh=null,this.updateSplatMesh(),this.callbackMesh=al.createCallbackMesh(),this.add(this.callbackMesh),this.callbackMesh.onBeforeRender=al.onBeforeRender.bind(this,this.viewer),this.viewer.onSplatMeshChanged(()=>{this.updateSplatMesh()})}updateSplatMesh(){this.splatMesh!==this.viewer.splatMesh&&(this.splatMesh&&this.remove(this.splatMesh),this.splatMesh=this.viewer.splatMesh,this.add(this.viewer.splatMesh))}addSplatScene(e,t={}){return t.showLoadingUI!==!1&&(t.showLoadingUI=!0),this.viewer.addSplatScene(e,t)}addSplatScenes(e,t){return t!==!1&&(t=!0),this.viewer.addSplatScenes(e,t)}getSplatScene(e){return this.viewer.getSplatScene(e)}removeSplatScene(e,t=!0){return this.viewer.removeSplatScene(e,t)}removeSplatScenes(e,t=!0){return this.viewer.removeSplatScenes(e,t)}getSceneCount(){return this.viewer.getSceneCount()}setActiveSphericalHarmonicsDegrees(e){this.viewer.setActiveSphericalHarmonicsDegrees(e)}async dispose(){return await this.viewer.dispose()}static onBeforeRender(e,t,n,i){e.update(t,i)}static createCallbackMesh(){const e=new Po(1,8,8),t=new li;t.colorWrite=!1,t.depthWrite=!1;const n=new ft(e,t);return n.frustumCulled=!1,n}}const Bm=[{id:"sallskapsrum",targetPosition:{x:-.75,y:0,z:1.1},lookAtPosition:{x:3.89,y:-.98,z:-.46}},{id:"vardagsrum",targetPosition:{x:-4.13,y:0,z:1.55},lookAtPosition:{x:-4.54,y:-.19,z:6.53}},{id:"hall",targetPosition:{x:-3.39,y:0,z:.6},lookAtPosition:{x:-8.05,y:.07,z:-1.21}},{id:"tavla",targetPosition:{x:3.48,y:0,z:-.08},lookAtPosition:{x:4.07,y:-.12,z:4.89}}];function yi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Um(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ks={duration:.5,overwrite:!1,delay:0},Wh,ln,vt,zn=1e8,pt=1/zn,Vu=Math.PI*2,bE=Vu/4,RE=0,Om=Math.sqrt,IE=Math.cos,PE=Math.sin,qt=function(e){return typeof e=="string"},Ct=function(e){return typeof e=="function"},wi=function(e){return typeof e=="number"},Xh=function(e){return typeof e>"u"},ci=function(e){return typeof e=="object"},_n=function(e){return e!==!1},qh=function(){return typeof window<"u"},La=function(e){return Ct(e)||qt(e)},Nm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,Gu=/(?:-?\.?\d|\.)+/gi,km=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zm=/[+-]=-?[.\d]+/,Hm=/[^,'"\[\]\s]+/gi,DE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,At,ei,Wu,Qh,Dn={},ll={},Vm,Gm=function(e){return(ll=Dr(e,Dn))&&An},Yh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Uo=function(e,t){return!t&&console.warn(e)},Wm=function(e,t){return e&&(Dn[e]=t)&&ll&&(ll[e]=t)||Dn},Oo=function(){return 0},FE={suppressEvents:!0,isStart:!0,kill:!1},Xa={suppressEvents:!0,kill:!1},LE={suppressEvents:!0},Kh={},Ki=[],Xu={},Xm,wn={},Lc={},hp=30,qa=[],jh="",Zh=function(e){var t=e[0],n,i;if(ci(t)||Ct(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=qa.length;i--&&!qa[i].targetTest(t););n=qa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new mg(e[i],n)))||e.splice(i,1);return e},Cr=function(e){return e._gsap||Zh(Hn(e))[0]._gsap},qm=function(e,t,n){return(n=e[t])&&Ct(n)?e[t]():Xh(n)&&e.getAttribute&&e.getAttribute(t)||n},xn=function(e,t){return(e=e.split(",")).forEach(t)||e},Rt=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},Cs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},BE=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},cl=function(){var e=Ki.length,t=Ki.slice(0),n,i;for(Xu={},Ki.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Qm=function(e,t,n,i){Ki.length&&!ln&&cl(),e.render(t,n,ln&&t<0&&(e._initted||e._startAt)),Ki.length&&!ln&&cl()},Ym=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hm).length<2?t:qt(e)?e.trim():e},Km=function(e){return e},Gn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},UE=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Dr=function(e,t){for(var n in t)e[n]=t[n];return e},dp=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ci(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},ul=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},go=function(e){var t=e.parent||At,n=e.keyframes?UE(cn(e.keyframes)):Gn;if(_n(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},OE=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},jm=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Il=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},$i=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},wr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},NE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qu=function(e,t,n,i){return e._startAt&&(ln?e._startAt.revert(Xa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},kE=function s(e){return!e||e._ts&&s(e.parent)},fp=function(e){return e._repeat?zs(e._tTime,e=e.duration()+e._rDelay)*e:0},zs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},hl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Pl=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||pt)||0))},Dl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Pl(e),n._dirty||wr(n,e)),e},Zm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=hl(e.rawTime(),t),(!t._dur||qo(0,t.totalDuration(),n)-t._tTime>pt)&&t.render(n,!0)),wr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-pt}},ni=function(e,t,n,i){return t.parent&&$i(t),t._start=Xt((wi(n)?n:n||e!==At?Bn(e,n,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jm(e,t,"_first","_last",e._sort?"_start":0),Qu(t)||(e._recent=t),i||Zm(e,t),e._ts<0&&Dl(e,e._tTime),e},$m=function(e,t){return(Dn.ScrollTrigger||Yh("scrollTrigger",t))&&Dn.ScrollTrigger.create(t,e)},Jm=function(e,t,n,i,r){if(Jh(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xm!==bn.frame)return Ki.push(e),e._lazy=[r,i],1},zE=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Qu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},HE=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&zE(e)&&!(!e._initted&&Qu(e))||(e._ts<0||e._dp._ts<0)&&!Qu(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=qo(0,e._tDur,t),u=zs(l,a),e._yoyo&&u&1&&(o=1-o),u!==zs(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||ln||i||e._zTime===pt||!t&&e._zTime){if(!e._initted&&Jm(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?pt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&qu(e,t,n,!0),e._onUpdate&&!n&&Rn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Rn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&$i(e,1),!n&&!ln&&(Rn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},VE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Hs=function(e,t,n,i){var r=e._repeat,o=Xt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Xt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Dl(e,e._tTime=e._tDur*a),e.parent&&Pl(e),n||wr(e.parent,e),e},pp=function(e){return e instanceof fn?wr(e):Hs(e,e._dur)},GE={_start:0,endTime:Oo,totalDuration:Oo},Bn=function s(e,t,n){var i=e.labels,r=e._recent||GE,o=e.duration()>=zn?r.endTime(!1):e._dur,a,l,c;return qt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},_o=function(e,t,n){var i=wi(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=_n(l.vars.inherit)&&l.parent;o.immediateRender=_n(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Dt(t[0],o,t[r+1])},rr=function(e,t){return e||e===0?t(e):t},qo=function(e,t,n){return n<e?e:n>t?t:n},sn=function(e,t){return!qt(e)||!(t=DE.exec(e))?"":t[1]},WE=function(e,t,n){return rr(n,function(i){return qo(e,t,i)})},Yu=[].slice,eg=function(e,t){return e&&ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ci(e[0]))&&!e.nodeType&&e!==ei},XE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return qt(i)&&!t||eg(i,1)?(r=n).push.apply(r,Hn(i)):n.push(i)})||n},Hn=function(e,t,n){return vt&&!t&&vt.selector?vt.selector(e):qt(e)&&!n&&(Wu||!Vs())?Yu.call((t||Qh).querySelectorAll(e),0):cn(e)?XE(e,n):eg(e)?Yu.call(e,0):e?[e]:[]},Ku=function(e){return e=Hn(e)[0]||Uo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Hn(t,n.querySelectorAll?n:n===e?Uo("Invalid scope")||Qh.createElement("div"):e)}},tg=function(e){return e.sort(function(){return .5-Math.random()})},ng=function(e){if(Ct(e))return e;var t=ci(e)?e:{each:e},n=br(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return qt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,m){var g=(m||t).length,p=o[g],_,v,x,A,E,T,S,C,I;if(!p){if(I=t.grid==="auto"?0:(t.grid||[1,zn])[1],!I){for(S=-zn;S<(S=m[I++].getBoundingClientRect().left)&&I<g;);I<g&&I--}for(p=o[g]=[],_=l?Math.min(I,g)*u-.5:i%I,v=I===zn?0:l?g*h/I-.5:i/I|0,S=0,C=zn,T=0;T<g;T++)x=T%I-_,A=v-(T/I|0),p[T]=E=c?Math.abs(c==="y"?A:x):Om(x*x+A*A),E>S&&(S=E),E<C&&(C=E);i==="random"&&tg(p),p.max=S-C,p.min=C,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(I>g?g-1:c?c==="y"?g/I:I:Math.max(I,g/I))||0)*(i==="edges"?-1:1),p.b=g<0?r-g:r,p.u=sn(t.amount||t.each)||0,n=n&&g<0?dg(n):n}return g=(p[d]-p.min)/p.max||0,Xt(p.b+(n?n(g):g)*p.v)+p.u}},ju=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Xt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(wi(n)?0:sn(n))}},ig=function(e,t){var n=cn(e),i,r;return!n&&ci(e)&&(i=n=e.radius||zn,e.values?(e=Hn(e.values),(r=!wi(e[0]))&&(i*=i)):e=ju(e.increment)),rr(t,n?Ct(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=zn,u=0,h=e.length,d,f;h--;)r?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,r||u===o||wi(o)?u:u+sn(o)}:ju(e))},rg=function(e,t,n,i){return rr(cn(e)?!t:n===!0?!!(n=0):!i,function(){return cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},qE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},QE=function(e,t){return function(n){return e(parseFloat(n))+(t||sn(n))}},YE=function(e,t,n){return og(e,t,0,1,n)},sg=function(e,t,n){return rr(n,function(i){return e[~~t(i)]})},KE=function s(e,t,n){var i=t-e;return cn(e)?sg(e,s(0,e.length),t):rr(n,function(r){return(i+(r-e)%i)%i+e})},jE=function s(e,t,n){var i=t-e,r=i*2;return cn(e)?sg(e,s(0,e.length-1),t):rr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},No=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?Hm:Gu),n+=e.substr(t,i-t)+rg(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},og=function(e,t,n,i,r){var o=t-e,a=i-n;return rr(r,function(l){return n+((l-e)/o*a||0)})},ZE=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=qt(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(cn(e)&&!cn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(m){m*=h;var g=Math.min(d,~~m);return u[g](m-g)},n=t}else i||(e=Dr(cn(e)?[]:{},e));if(!u){for(l in t)$h.call(a,e,l,"get",t[l]);r=function(m){return nd(m,a)||(o?e.p:e)}}}return rr(n,r)},mp=function(e,t,n){var i=e.labels,r=zn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Rn=function(e,t,n){var i=e.vars,r=i[t],o=vt,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ki.length&&cl(),a&&(vt=a),u=l?r.apply(c,l):r.call(c),vt=o,u},oo=function(e){return $i(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ln),e.progress()<1&&Rn(e,"onInterrupt"),e},xs,ag=[],lg=function(e){if(e)if(e=!e.name&&e.default||e,qh()||e.headless){var t=e.name,n=Ct(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Oo,render:nd,add:$h,kill:fC,modifier:dC,rawVars:0},o={targetTest:0,get:0,getSetter:td,aliases:{},register:0};if(Vs(),e!==i){if(wn[t])return;Gn(i,Gn(ul(e,r),o)),Dr(i.prototype,Dr(r,ul(e,o))),wn[i.prop=t]=i,e.targetTest&&(qa.push(i),Kh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wm(t,i),e.register&&e.register(An,i,vn)}else ag.push(e)},ht=255,ao={aqua:[0,ht,ht],lime:[0,ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ht],navy:[0,0,128],white:[ht,ht,ht],olive:[128,128,0],yellow:[ht,ht,0],orange:[ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ht,0,0],pink:[ht,192,203],cyan:[0,ht,ht],transparent:[ht,ht,ht,0]},Bc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ht+.5|0},cg=function(e,t,n){var i=e?wi(e)?[e>>16,e>>8&ht,e&ht]:0:ao.black,r,o,a,l,c,u,h,d,f,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ao[e])i=ao[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ht,i&ht,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ht,e&ht]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Gu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Bc(l+1/3,r,o),i[1]=Bc(l,r,o),i[2]=Bc(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(km),n&&i.length<4&&(i[3]=1),i}else i=e.match(Gu)||ao.transparent;i=i.map(Number)}return t&&!m&&(r=i[0]/ht,o=i[1]/ht,a=i[2]/ht,h=Math.max(r,o,a),d=Math.min(r,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===r?(o-a)/f+(o<a?6:0):h===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ug=function(e){var t=[],n=[],i=-1;return e.split(ji).forEach(function(r){var o=r.match(_s)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},gp=function(e,t,n){var i="",r=(e+i).match(ji),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(d){return(d=cg(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=ug(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ji,"1").split(_s),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(ji),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},ji=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ao)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),$E=/hsl[a]?\(/,hg=function(e){var t=e.join(" "),n;if(ji.lastIndex=0,ji.test(t))return n=$E.test(t),e[1]=gp(e[1],n),e[0]=gp(e[0],n,ug(e[1])),!0},ko,bn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,d,f,m=function g(p){var _=s()-i,v=p===!0,x,A,E,T;if((_>e||_<0)&&(n+=_-t),i+=_,E=i-n,x=E-o,(x>0||v)&&(T=++h.frame,d=E-h.time*1e3,h.time=E=E/1e3,o+=x+(x>=r?4:r-x),A=1),v||(l=c(g)),A)for(f=0;f<a.length;f++)a[f](E,d,T,p)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Vm&&(!Wu&&qh()&&(ei=Wu=window,Qh=ei.document||{},Dn.gsap=An,(ei.gsapVersions||(ei.gsapVersions=[])).push(An.version),Gm(ll||ei.GreenSockGlobals||!ei.gsap&&ei||{}),ag.forEach(lg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},ko=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ko=0,c=Oo},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,_,v){var x=_?function(A,E,T,S){p(A,E,T,S),h.remove(x)}:p;return h.remove(p),a[v?"unshift":"push"](x),Vs(),x},remove:function(p,_){~(_=a.indexOf(p))&&a.splice(_,1)&&f>=_&&f--},_listeners:a},h}(),Vs=function(){return!ko&&bn.wake()},$e={},JE=/^[\d.\-M][\d.\-,\s]/,eC=/["']/g,tC=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(eC,"").trim():+c,i=l.substr(a+1).trim();return t},nC=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},iC=function(e){var t=(e+"").split("("),n=$e[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[tC(t[1])]:nC(e).split(",").map(Ym)):$e._CE&&JE.test(e)?$e._CE("",e):n},dg=function(e){return function(t){return 1-e(1-t)}},fg=function s(e,t){for(var n=e._first,i;n;)n instanceof fn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},br=function(e,t){return e&&(Ct(e)?e:$e[e]||iC(e))||t},kr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return xn(e,function(a){$e[a]=Dn[a]=r,$e[o=a.toLowerCase()]=n;for(var l in r)$e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$e[a+"."+l]=r[l]}),r},pg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Uc=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Vu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*PE((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:pg(a);return r=Vu/r,l.config=function(c,u){return s(e,c,u)},l},Oc=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:pg(n);return i.config=function(r){return s(e,r)},i};xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;kr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});$e.Linear.easeNone=$e.none=$e.Linear.easeIn;kr("Elastic",Uc("in"),Uc("out"),Uc());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};kr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);kr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});kr("Circ",function(s){return-(Om(1-s*s)-1)});kr("Sine",function(s){return s===1?1:-IE(s*bE)+1});kr("Back",Oc("in"),Oc("out"),Oc());$e.SteppedEase=$e.steps=Dn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-pt;return function(a){return((i*qo(0,o,a)|0)+r)*n}}};ks.ease=$e["quad.out"];xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return jh+=s+","+s+"Params,"});var mg=function(e,t){this.id=RE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:qm,this.set=t?t.getSetter:td},zo=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Hs(this,+t.duration,1,1),this.data=t.data,vt&&(this._ctx=vt,vt.data.push(this)),ko||bn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Hs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Vs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Dl(this,n),!r._dp||r.parent||Zm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===pt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Qm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+fp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+fp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?zs(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-pt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?hl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-pt?0:this._rts,this.totalTime(qo(-Math.abs(this._delay),this._tDur,r),i!==!1),Pl(this),NE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Vs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pt&&(this._tTime-=pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ni(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(_n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=LE);var i=ln;return ln=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ln=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,pp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,pp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Bn(this,n),_n(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,_n(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-pt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-pt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=Ct(n)?n:Km,a=function(){var c=i.then;i.then=null,Ct(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){oo(this)},s}();Gn(zo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pt,_prom:0,_ps:!1,_rts:1});var fn=function(s){Um(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=_n(n.sortChildren),At&&ni(n.parent||At,yi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&$m(yi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return _o(0,arguments,this),this},t.from=function(i,r,o){return _o(1,arguments,this),this},t.fromTo=function(i,r,o,a){return _o(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,go(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Dt(i,r,Bn(this,o),1),this},t.call=function(i,r,o){return ni(this,Dt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Dt(i,o,Bn(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,go(o).immediateRender=_n(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,go(a).immediateRender=_n(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Xt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,m,g,p,_,v,x,A,E,T,S;if(this!==At&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,A=this._start,x=this._ts,_=!x,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(d=Xt(u%p),u===l?(g=this._repeat,d=c):(g=~~(u/p),g&&g===u/p&&(d=c,g--),d>c&&(d=c)),E=zs(this._tTime,p),!a&&this._tTime&&E!==g&&this._tTime-E*p-this._dur<=0&&(E=g),T&&g&1&&(d=c-d,S=1),g!==E&&!this._lock){var C=T&&E&1,I=C===(T&&g&1);if(g<E&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(S?0:Xt(g*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Rn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,I&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;fg(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=VE(this,Xt(a),Xt(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!g&&(Rn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!_){v=0,m&&(u+=this._zTime=-pt);break}}f=m}else{f=this._last;for(var y=i<0?i:d;f;){if(m=f._prev,(f._act||y<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,r,o||ln&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!_){v=0,m&&(u+=this._zTime=y?-pt:pt);break}}f=m}}if(v&&!r&&(this.pause(),v.render(d>=a?0:-pt)._zTime=d>=a?1:-1,this._ts))return this._start=A,Pl(this),this.render(i,r,o);this._onUpdate&&!r&&Rn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(A===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&$i(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(Rn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(wi(r)||(r=Bn(this,r,i)),!(i instanceof zo)){if(cn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(qt(i))return this.addLabel(i,r);if(Ct(i))i=Dt.delayedCall(0,i);else return this}return this!==i?ni(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-zn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Dt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return qt(i)?this.removeLabel(i):Ct(i)?this.killTweensOf(i):(Il(this,i),i===this._recent&&(this._recent=this._last),wr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Bn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Dt.delayedCall(0,r||Oo,o);return a.data="isPause",this._hasPause=1,ni(this,a,Bn(this,i))},t.removePause=function(i){var r=this._first;for(i=Bn(this,i);r;)r._start===i&&r.data==="isPause"&&$i(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Vi!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=Hn(i),l=this._first,c=wi(r),u;l;)l instanceof Dt?BE(l._targets,a)&&(c?(!Vi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Bn(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,m=Dt.to(o,Gn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||pt,onStart:function(){if(o.pause(),!f){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&Hs(m,p,0,1).render(m._time,!0,!0),f=1}u&&u.apply(m,h||[])}},r));return d?m.render(0):m},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Gn({startAt:{time:Bn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),mp(this,Bn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),mp(this,Bn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+pt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return wr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),wr(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=zn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ni(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Hs(o,o===At&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(At._ts&&(Qm(At,hl(i,At)),Xm=bn.frame),bn.frame>=hp){hp+=Pn.autoSleep||120;var r=At._first;if((!r||!r._ts)&&Pn.autoSleep&&bn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||bn.sleep()}}},e}(zo);Gn(fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var rC=function(e,t,n,i,r,o,a){var l=new vn(this._pt,e,t,0,1,Ag,null,r),c=0,u=0,h,d,f,m,g,p,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=No(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),d=n.match(Fc)||[];h=Fc.exec(i);)m=h[0],g=i.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),m!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:m.charAt(1)==="="?Cs(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=Fc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(zm.test(i)||_)&&(l.e=0),this._pt=l,l},$h=function(e,t,n,i,r,o,a,l,c,u){Ct(i)&&(i=i(r||0,e,o));var h=e[t],d=n!=="get"?n:Ct(h)?c?e[t.indexOf("set")||!Ct(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Ct(h)?c?cC:vg:ed,m;if(qt(i)&&(~i.indexOf("random(")&&(i=No(i)),i.charAt(1)==="="&&(m=Cs(d,i)+(sn(d)||0),(m||m===0)&&(i=m))),!u||d!==i||Zu)return!isNaN(d*i)&&i!==""?(m=new vn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?hC:yg,0,f),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(t in e)&&Yh(t,i),rC.call(this,e,t,d,i,f,l||Pn.stringFilter,c))},sC=function(e,t,n,i,r){if(Ct(e)&&(e=xo(e,r,t,n,i)),!ci(e)||e.style&&e.nodeType||cn(e)||Nm(e))return qt(e)?xo(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=xo(e[a],r,t,n,i);return o},gg=function(e,t,n,i,r,o){var a,l,c,u;if(wn[e]&&(a=new wn[e]).init(r,a.rawVars?t[e]:sC(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new vn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==xs))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Vi,Zu,Jh=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,m=e._dur,g=e._startAt,p=e._targets,_=e.parent,v=_&&_.data==="nested"?_.vars.targets:p,x=e._overwrite==="auto"&&!Wh,A=e.timeline,E,T,S,C,I,y,M,F,P,L,U,B,V;if(A&&(!d||!r)&&(r="none"),e._ease=br(r,ks.ease),e._yEase=h?dg(br(h===!0?r:h,ks.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!A&&!!i.runBackwards,!A||d&&!i.stagger){if(F=p[0]?Cr(p[0]).harness:0,B=F&&i[F.prop],E=ul(i,Kh),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&m?Xa:FE),g._lazy=0),o){if($i(e._startAt=Dt.set(p,Gn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&_n(l),startAt:null,delay:0,onUpdate:c&&function(){return Rn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln||!a&&!f)&&e._startAt.revert(Xa),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!g){if(t&&(a=!1),S=Gn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&_n(l),immediateRender:a,stagger:0,parent:_},E),B&&(S[F.prop]=B),$i(e._startAt=Dt.set(p,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln?e._startAt.revert(Xa):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,pt,pt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&_n(l)||l&&!m,T=0;T<p.length;T++){if(I=p[T],M=I._gsap||Zh(p)[T]._gsap,e._ptLookup[T]=L={},Xu[M.id]&&Ki.length&&cl(),U=v===p?T:v.indexOf(I),F&&(P=new F).init(I,B||E,e,U,v)!==!1&&(e._pt=C=new vn(e._pt,I,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(k){L[k]=C}),P.priority&&(y=1)),!F||B)for(S in E)wn[S]&&(P=gg(S,E,e,U,I,v))?P.priority&&(y=1):L[S]=C=$h.call(e,I,S,"get",E[S],U,v,0,i.stringFilter);e._op&&e._op[T]&&e.kill(I,e._op[T]),x&&e._pt&&(Vi=e,At.killTweensOf(I,L,e.globalTime(t)),V=!e.parent,Vi=0),e._pt&&l&&(Xu[M.id]=1)}y&&Sg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!V,d&&t<=0&&A.render(zn,!0,!0)},oC=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Zu=1,e.vars[t]="+=0",Jh(e,a),Zu=0,l?Uo(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Rt(n)+sn(h.e)),h.b&&(h.b=u.s+sn(h.b))},aC=function(e,t){var n=e[0]?Cr(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Dr({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},lC=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(cn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},xo=function(e,t,n,i,r){return Ct(e)?e.call(t,n,i,r):qt(e)&&~e.indexOf("random(")?No(e):e},_g=jh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",xg={};xn(_g+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return xg[s]=1});var Dt=function(s){Um(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:go(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,m=l.keyframes,g=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,v=i.parent||At,x=(cn(n)||Nm(n)?wi(n[0]):"length"in i)?[n]:Hn(n),A,E,T,S,C,I,y,M;if(a._targets=x.length?Zh(x):Uo("GSAP target "+n+" not found. https://gsap.com",!Pn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||d||La(c)||La(u)){if(i=a.vars,A=a.timeline=new fn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:x}),A.kill(),A.parent=A._dp=yi(a),A._start=0,d||La(c)||La(u)){if(S=x.length,y=d&&ng(d),ci(d))for(C in d)~_g.indexOf(C)&&(M||(M={}),M[C]=d[C]);for(E=0;E<S;E++)T=ul(i,xg),T.stagger=0,_&&(T.yoyoEase=_),M&&Dr(T,M),I=x[E],T.duration=+xo(c,yi(a),E,I,x),T.delay=(+xo(u,yi(a),E,I,x)||0)-a._delay,!d&&S===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),A.to(I,T,y?y(E,I,x):0),A._ease=$e.none;A.duration()?c=u=0:a.timeline=0}else if(m){go(Gn(A.vars.defaults,{ease:"none"})),A._ease=br(m.ease||i.ease||"none");var F=0,P,L,U;if(cn(m))m.forEach(function(B){return A.to(x,B,">")}),A.duration();else{T={};for(C in m)C==="ease"||C==="easeEach"||lC(C,m[C],T,m.easeEach);for(C in T)for(P=T[C].sort(function(B,V){return B.t-V.t}),F=0,E=0;E<P.length;E++)L=P[E],U={ease:L.e,duration:(L.t-(E?P[E-1].t:0))/100*c},U[C]=L.v,A.to(x,U,F),F+=U.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||a.duration(c=A.duration())}else a.timeline=0;return f===!0&&!Wh&&(Vi=yi(a),At.killTweensOf(x),Vi=0),ni(v,yi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!m&&a._start===Xt(v._time)&&_n(h)&&kE(yi(a))&&v.data!=="nested")&&(a._tTime=-pt,a.render(Math.max(0,-u)||0)),p&&$m(yi(a),p),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-pt&&!u?l:i<pt?0:i,d,f,m,g,p,_,v,x,A;if(!c)HE(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,o);if(d=Xt(h%g),h===l?(m=this._repeat,d=c):(m=~~(h/g),m&&m===Xt(h/g)&&(d=c,m--),d>c&&(d=c)),_=this._yoyo&&m&1,_&&(A=this._yEase,d=c-d),p=zs(this._tTime,g),d===a&&!o&&this._initted&&m===p)return this._tTime=h,this;m!==p&&(x&&this._yEase&&fg(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(Xt(g*m),!0).invalidate()._lock=0))}if(!this._initted){if(Jm(this,u?i:d,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(A||this._ease)(d/c),this._from&&(this.ratio=v=1-v),d&&!a&&!r&&!m&&(Rn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&qu(this,i,r,o),Rn(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&Rn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&qu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&$i(this,1),!r&&!(u&&!a)&&(h||a||_)&&(Rn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){ko||bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Jh(this,c),u=this._ease(c/this._dur),oC(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(Dl(this,0),this.parent||jm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?oo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Vi&&Vi.vars.overwrite!==!0)._first||oo(this),this.parent&&o!==this.timeline.totalDuration()&&Hs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Hn(i):a,c=this._ptLookup,u=this._pt,h,d,f,m,g,p,_;if((!r||r==="all")&&OE(a,l))return r==="all"&&(this._pt=0),oo(this);for(h=this._op=this._op||[],r!=="all"&&(qt(r)&&(g={},xn(r,function(v){return g[v]=1}),r=g),r=aC(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){d=c[_],r==="all"?(h[_]=r,m=d,f={}):(f=h[_]=h[_]||{},m=r);for(g in m)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Il(this,p,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&oo(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return _o(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return _o(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return At.killTweensOf(i,r,o)},e}(zo);Gn(Dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xn("staggerTo,staggerFrom,staggerFromTo",function(s){Dt[s]=function(){var e=new fn,t=Yu.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var ed=function(e,t,n){return e[t]=n},vg=function(e,t,n){return e[t](n)},cC=function(e,t,n,i){return e[t](i.fp,n)},uC=function(e,t,n){return e.setAttribute(t,n)},td=function(e,t){return Ct(e[t])?vg:Xh(e[t])&&e.setAttribute?uC:ed},yg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},hC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ag=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},nd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},dC=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},fC=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Il(this,t,"_pt"):t.dep||(n=1),t=i;return!n},pC=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Sg=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},vn=function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||yg,this.d=l||this,this.set=c||ed,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=pC,this.m=n,this.mt=r,this.tween=i},s}();xn(jh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Kh[s]=1});Dn.TweenMax=Dn.TweenLite=Dt;Dn.TimelineLite=Dn.TimelineMax=fn;At=new fn({sortChildren:!1,defaults:ks,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pn.stringFilter=hg;var Rr=[],Qa={},mC=[],_p=0,gC=0,Nc=function(e){return(Qa[e]||mC).map(function(t){return t()})},$u=function(){var e=Date.now(),t=[];e-_p>2&&(Nc("matchMediaInit"),Rr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=ei.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Nc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),_p=e,Nc("matchMedia"))},Mg=function(){function s(t,n){this.selector=n&&Ku(n),this.data=[],this._r=[],this.isReverted=!1,this.id=gC++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Ct(n)&&(r=i,i=n,n=Ct);var o=this,a=function(){var c=vt,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=Ku(r)),vt=o,h=i.apply(o,arguments),Ct(h)&&o._r.push(h),vt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ct?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=vt;vt=null,n(this),vt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Dt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof fn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Dt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Rr.length;o--;)Rr[o].id===this.id&&Rr.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),_C=function(){function s(t){this.contexts=[],this.scope=t,vt&&vt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){ci(n)||(n={matches:n});var o=new Mg(0,r||this.scope),a=o.conditions={},l,c,u;vt&&!o.selector&&(o.selector=vt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ei.matchMedia(n[c]),l&&(Rr.indexOf(o)<0&&Rr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener($u):l.addEventListener("change",$u)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),dl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return lg(i)})},timeline:function(e){return new fn(e)},getTweensOf:function(e,t){return At.getTweensOf(e,t)},getProperty:function(e,t,n,i){qt(e)&&(e=Hn(e)[0]);var r=Cr(e||{}).get,o=n?Km:Ym;return n==="native"&&(n=""),e&&(t?o((wn[t]&&wn[t].get||r)(e,t,n,i)):function(a,l,c){return o((wn[a]&&wn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Hn(e),e.length>1){var i=e.map(function(u){return An.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=wn[t],a=Cr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;xs._pt=0,h.init(e,n?u+n:u,xs,0,[e]),h.render(1,h),xs._pt&&nd(1,xs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=An.to(e,Dr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return At.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=br(e.ease,ks.ease)),dp(ks,e||{})},config:function(e){return dp(Pn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!wn[a]&&!Dn[a]&&Uo(t+" effect requires "+a+" plugin.")}),Lc[t]=function(a,l,c){return n(Hn(a),Gn(l||{},r),c)},o&&(fn.prototype[t]=function(a,l,c){return this.add(Lc[t](a,ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){$e[e]=br(t)},parseEase:function(e,t){return arguments.length?br(e,t):$e},getById:function(e){return At.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new fn(e),i,r;for(n.smoothChildTiming=_n(e.smoothChildTiming),At.remove(n),n._dp=0,n._time=n._tTime=At._time,i=At._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Dt&&i.vars.onComplete===i._targets[0]))&&ni(n,i,i._start-i._delay),i=r;return ni(At,n,0),n},context:function(e,t){return e?new Mg(e,t):vt},matchMedia:function(e){return new _C(e)},matchMediaRefresh:function(){return Rr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||$u()},addEventListener:function(e,t){var n=Qa[e]||(Qa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Qa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:KE,wrapYoyo:jE,distribute:ng,random:rg,snap:ig,normalize:YE,getUnit:sn,clamp:WE,splitColor:cg,toArray:Hn,selector:Ku,mapRange:og,pipe:qE,unitize:QE,interpolate:ZE,shuffle:tg},install:Gm,effects:Lc,ticker:bn,updateRoot:fn.updateRoot,plugins:wn,globalTimeline:At,core:{PropTween:vn,globals:Wm,Tween:Dt,Timeline:fn,Animation:zo,getCache:Cr,_removeLinkedListItem:Il,reverting:function(){return ln},context:function(e){return e&&vt&&(vt.data.push(e),e._ctx=vt),vt},suppressOverwrites:function(e){return Wh=e}}};xn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return dl[s]=Dt[s]});bn.add(fn.updateRoot);xs=dl.to({},{duration:0});var xC=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},vC=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=xC(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},kc=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(qt(r)&&(l={},xn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}vC(a,r)}}}},An=dl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},kc("roundProps",ju),kc("modifiers"),kc("snap",ig))||dl;Dt.version=fn.version=An.version="3.12.5";Vm=1;qh()&&Vs();$e.Power0;$e.Power1;$e.Power2;$e.Power3;$e.Power4;$e.Linear;$e.Quad;$e.Cubic;$e.Quart;$e.Quint;$e.Strong;$e.Elastic;$e.Back;$e.SteppedEase;$e.Bounce;$e.Sine;$e.Expo;$e.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xp,Gi,ws,id,Tr,vp,rd,yC=function(){return typeof window<"u"},bi={},mr=180/Math.PI,bs=Math.PI/180,us=Math.atan2,yp=1e8,sd=/([A-Z])/g,AC=/(left|right|width|margin|padding|x)/i,SC=/[\s,\(]\S/,ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ju=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},TC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},EC=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Tg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Eg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},CC=function(e,t,n){return e.style[t]=n},wC=function(e,t,n){return e.style.setProperty(t,n)},bC=function(e,t,n){return e._gsap[t]=n},RC=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},IC=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},PC=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Mt="transform",yn=Mt+"Origin",DC=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in bi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Mi(i,a)}):this.tfm[e]=o.x?o[e]:Mi(i,e),e===yn&&(this.tfm.zOrigin=o.zOrigin);else return ri.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Mt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(yn,t,"")),e=Mt}(r||t)&&this.props.push(e,t,r[e])},Cg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},FC=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(sd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=rd(),(!r||!r.isStart)&&!n[Mt]&&(Cg(n),i.zOrigin&&n[yn]&&(n[yn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},wg=function(e,t){var n={target:e,props:[],revert:FC,save:DC};return e._gsap||An.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},bg,eh=function(e,t){var n=Gi.createElementNS?Gi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Gi.createElement(e);return n&&n.style?n:Gi.createElement(e)},si=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(sd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Gs(t)||t,1)||""},Ap="O,Moz,ms,Ms,Webkit".split(","),Gs=function(e,t,n){var i=t||Tr,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ap[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Ap[o]:"")+e},th=function(){yC()&&window.document&&(xp=window,Gi=xp.document,ws=Gi.documentElement,Tr=eh("div")||{style:{}},eh("div"),Mt=Gs(Mt),yn=Mt+"Origin",Tr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bg=!!Gs("perspective"),rd=An.core.reverting,id=1)},zc=function s(e){var t=eh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(ws.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ws.removeChild(t),this.style.cssText=r,o},Sp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Rg=function(e){var t;try{t=e.getBBox()}catch{t=zc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===zc||(t=zc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Sp(e,["x","cx","x1"])||0,y:+Sp(e,["y","cy","y1"])||0,width:0,height:0}:t},Ig=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Rg(e))},Fr=function(e,t){if(t){var n=e.style,i;t in bi&&t!==yn&&(t=Mt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(sd,"-$1").toLowerCase())):n.removeAttribute(t)}},Wi=function(e,t,n,i,r,o){var a=new vn(e._pt,t,n,0,1,o?Eg:Tg);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Mp={deg:1,rad:1,turn:1},LC={grid:1,flex:1},Ji=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Tr.style,l=AC.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",m,g,p,_;if(i===o||!r||Mp[i]||Mp[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),_=e.getCTM&&Ig(e),(f||o==="%")&&(bi[t]||~t.indexOf("adius")))return m=_?e.getBBox()[l?"width":"height"]:e[u],Rt(f?r/m*h:r/100*m);if(a[l?"width":"height"]=h+(d?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Gi||!g.appendChild)&&(g=Gi.body),p=g._gsap,p&&f&&p.width&&l&&p.time===bn.time&&!p.uncache)return Rt(r/p.width*h);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+i,m=e[u],v?e.style[t]=v:Fr(e,t)}else(f||o==="%")&&!LC[si(g,"display")]&&(a.position=si(e,"position")),g===e&&(a.position="static"),g.appendChild(Tr),m=Tr[u],g.removeChild(Tr),a.position="absolute";return l&&f&&(p=Cr(g),p.time=bn.time,p.width=g[u]),Rt(d?m*r/h:m&&r?h/m*r:0)},Mi=function(e,t,n,i){var r;return id||th(),t in ri&&t!=="transform"&&(t=ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),bi[t]&&t!=="transform"?(r=Vo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:pl(si(e,yn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=fl[t]&&fl[t](e,t,n)||si(e,t)||qm(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ji(e,t,r,n)+n:r},BC=function(e,t,n,i){if(!n||n==="none"){var r=Gs(t,e,1),o=r&&si(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=si(e,"borderTopColor"))}var a=new vn(this._pt,e.style,t,0,1,Ag),l=0,c=0,u,h,d,f,m,g,p,_,v,x,A,E;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=si(e,t)||i,g?e.style[t]=g:Fr(e,t)),u=[n,i],hg(u),n=u[0],i=u[1],d=n.match(_s)||[],E=i.match(_s)||[],E.length){for(;h=_s.exec(i);)p=h[0],v=i.substring(l,h.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(g=d[c++]||"")&&(f=parseFloat(g)||0,A=g.substr((f+"").length),p.charAt(1)==="="&&(p=Cs(f,p)+A),_=parseFloat(p),x=p.substr((_+"").length),l=_s.lastIndex-x.length,x||(x=x||Pn.units[t]||A,l===i.length&&(i+=x,a.e+=x)),A!==x&&(f=Ji(e,t,g,x)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:_-f,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Eg:Tg;return zm.test(i)&&(a.e=0),this._pt=a,a},Tp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},UC=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Tp[n]||n,t[1]=Tp[i]||i,t.join(" ")},OC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],bi[a]&&(l=1,a=a==="transformOrigin"?yn:Mt),Fr(n,a);l&&(Fr(n,Mt),o&&(o.svg&&n.removeAttribute("transform"),Vo(n,1),o.uncache=1,Cg(i)))}},fl={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new vn(e._pt,t,n,0,0,OC);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Ho=[1,0,0,1,0,0],Pg={},Dg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ep=function(e){var t=si(e,Mt);return Dg(t)?Ho:t.substr(7).match(km).map(Rt)},od=function(e,t){var n=e._gsap||Cr(e),i=e.style,r=Ep(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ho:r):(r===Ho&&!e.offsetParent&&e!==ws&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,ws.appendChild(e)),r=Ep(e),l?i.display=l:Fr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ws.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},nh=function(e,t,n,i,r,o){var a=e._gsap,l=r||od(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],m=l[1],g=l[2],p=l[3],_=l[4],v=l[5],x=t.split(" "),A=parseFloat(x[0])||0,E=parseFloat(x[1])||0,T,S,C,I;n?l!==Ho&&(S=f*p-m*g)&&(C=A*(p/S)+E*(-g/S)+(g*v-p*_)/S,I=A*(-m/S)+E*(f/S)-(f*v-m*_)/S,A=C,E=I):(T=Rg(e),A=T.x+(~x[0].indexOf("%")?A/100*T.width:A),E=T.y+(~(x[1]||x[0]).indexOf("%")?E/100*T.height:E)),i||i!==!1&&a.smooth?(_=A-c,v=E-u,a.xOffset=h+(_*f+v*g)-_,a.yOffset=d+(_*m+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=A,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[yn]="0px 0px",o&&(Wi(o,a,"xOrigin",c,A),Wi(o,a,"yOrigin",u,E),Wi(o,a,"xOffset",h,a.xOffset),Wi(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",A+" "+E)},Vo=function(e,t){var n=e._gsap||new mg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=si(e,yn)||"0",u,h,d,f,m,g,p,_,v,x,A,E,T,S,C,I,y,M,F,P,L,U,B,V,k,Z,te,se,ve,_e,W,Y;return u=h=d=g=p=_=v=x=A=0,f=m=1,n.svg=!!(e.getCTM&&Ig(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Mt]!=="none"?l[Mt]:"")),i.scale=i.rotate=i.translate="none"),S=od(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),nh(e,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,S)),E=n.xOrigin||0,T=n.yOrigin||0,S!==Ho&&(M=S[0],F=S[1],P=S[2],L=S[3],u=U=S[4],h=B=S[5],S.length===6?(f=Math.sqrt(M*M+F*F),m=Math.sqrt(L*L+P*P),g=M||F?us(F,M)*mr:0,v=P||L?us(P,L)*mr+g:0,v&&(m*=Math.abs(Math.cos(v*bs))),n.svg&&(u-=E-(E*M+T*P),h-=T-(E*F+T*L))):(Y=S[6],_e=S[7],te=S[8],se=S[9],ve=S[10],W=S[11],u=S[12],h=S[13],d=S[14],C=us(Y,ve),p=C*mr,C&&(I=Math.cos(-C),y=Math.sin(-C),V=U*I+te*y,k=B*I+se*y,Z=Y*I+ve*y,te=U*-y+te*I,se=B*-y+se*I,ve=Y*-y+ve*I,W=_e*-y+W*I,U=V,B=k,Y=Z),C=us(-P,ve),_=C*mr,C&&(I=Math.cos(-C),y=Math.sin(-C),V=M*I-te*y,k=F*I-se*y,Z=P*I-ve*y,W=L*y+W*I,M=V,F=k,P=Z),C=us(F,M),g=C*mr,C&&(I=Math.cos(C),y=Math.sin(C),V=M*I+F*y,k=U*I+B*y,F=F*I-M*y,B=B*I-U*y,M=V,U=k),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,_=180-_),f=Rt(Math.sqrt(M*M+F*F+P*P)),m=Rt(Math.sqrt(B*B+Y*Y)),C=us(U,B),v=Math.abs(C)>2e-4?C*mr:0,A=W?1/(W<0?-W:W):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Dg(si(e,Mt)),V&&e.setAttribute("transform",V))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Rt(f),n.scaleY=Rt(m),n.rotation=Rt(g)+a,n.rotationX=Rt(p)+a,n.rotationY=Rt(_)+a,n.skewX=v+a,n.skewY=x+a,n.transformPerspective=A+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[yn]=pl(c)),n.xOffset=n.yOffset=0,n.force3D=Pn.force3D,n.renderTransform=n.svg?kC:bg?Fg:NC,n.uncache=0,n},pl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Hc=function(e,t,n){var i=sn(t);return Rt(parseFloat(t)+parseFloat(Ji(e,"x",n+"px",i)))+i},NC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Fg(e,t)},dr="0deg",io="0px",fr=") ",Fg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,m=n.scaleX,g=n.scaleY,p=n.transformPerspective,_=n.force3D,v=n.target,x=n.zOrigin,A="",E=_==="auto"&&e&&e!==1||_===!0;if(x&&(h!==dr||u!==dr)){var T=parseFloat(u)*bs,S=Math.sin(T),C=Math.cos(T),I;T=parseFloat(h)*bs,I=Math.cos(T),o=Hc(v,o,S*I*-x),a=Hc(v,a,-Math.sin(T)*-x),l=Hc(v,l,C*I*-x+x)}p!==io&&(A+="perspective("+p+fr),(i||r)&&(A+="translate("+i+"%, "+r+"%) "),(E||o!==io||a!==io||l!==io)&&(A+=l!==io||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+fr),c!==dr&&(A+="rotate("+c+fr),u!==dr&&(A+="rotateY("+u+fr),h!==dr&&(A+="rotateX("+h+fr),(d!==dr||f!==dr)&&(A+="skew("+d+", "+f+fr),(m!==1||g!==1)&&(A+="scale("+m+", "+g+fr),v.style[Mt]=A||"translate(0, 0)"},kC=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,m=n.xOrigin,g=n.yOrigin,p=n.xOffset,_=n.yOffset,v=n.forceCSS,x=parseFloat(o),A=parseFloat(a),E,T,S,C,I;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=bs,c*=bs,E=Math.cos(l)*h,T=Math.sin(l)*h,S=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=bs,I=Math.tan(c-u),I=Math.sqrt(1+I*I),S*=I,C*=I,u&&(I=Math.tan(u),I=Math.sqrt(1+I*I),E*=I,T*=I)),E=Rt(E),T=Rt(T),S=Rt(S),C=Rt(C)):(E=h,C=d,T=S=0),(x&&!~(o+"").indexOf("px")||A&&!~(a+"").indexOf("px"))&&(x=Ji(f,"x",o,"px"),A=Ji(f,"y",a,"px")),(m||g||p||_)&&(x=Rt(x+m-(m*E+g*S)+p),A=Rt(A+g-(m*T+g*C)+_)),(i||r)&&(I=f.getBBox(),x=Rt(x+i/100*I.width),A=Rt(A+r/100*I.height)),I="matrix("+E+","+T+","+S+","+C+","+x+","+A+")",f.setAttribute("transform",I),v&&(f.style[Mt]=I)},zC=function(e,t,n,i,r){var o=360,a=qt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?mr:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*yp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*yp)%o-~~(c/o)*o)),e._pt=d=new vn(e._pt,t,n,i,c,MC),d.e=u,d.u="deg",e._props.push(n),d},Cp=function(e,t){for(var n in t)e[n]=t[n];return e},HC=function(e,t,n){var i=Cp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Mt]=t,a=Vo(n,1),Fr(n,Mt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Mt],o[Mt]=t,a=Vo(n,1),o[Mt]=c);for(l in bi)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(f=sn(c),m=sn(u),h=f!==m?Ji(n,l,c,m):parseFloat(c),d=parseFloat(u),e._pt=new vn(e._pt,a,l,h,d-h,Ju),e._pt.u=m||0,e._props.push(l));Cp(a,i)};xn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});fl[e>1?"border"+s:s]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(m){return Mi(a,m,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(m,g){return f[m]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,h)}});var Lg={name:"css",register:th,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,m,g,p,_,v,x,A,E,T,S,C;id||th(),this.styles=this.styles||wg(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(wn[g]&&gg(g,t,n,i,e,r)))){if(f=typeof u,m=fl[g],f==="function"&&(u=u.call(n,i,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=No(u)),m)m(this,e,g,u,n)&&(S=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",ji.lastIndex=0,ji.test(c)||(p=sn(c),_=sn(u)),_?p!==_&&(c=Ji(e,g,c,_)+_):p&&(u+=p),this.add(a,"setProperty",c,u,i,r,0,0,g),o.push(g),C.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],qt(c)&&~c.indexOf("random(")&&(c=No(c)),sn(c+"")||c==="auto"||(c+=Pn.units[g]||sn(Mi(e,g))||""),(c+"").charAt(1)==="="&&(c=Mi(e,g))):c=Mi(e,g),d=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),g in ri&&(g==="autoAlpha"&&(d===1&&Mi(e,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,a.visibility),Wi(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=ri[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in bi,x){if(this.styles.save(g),A||(E=e._gsap,E.renderTransform&&!t.parseTransform||Vo(e,t.parseTransform),T=t.smoothOrigin!==!1&&E.smooth,A=this._pt=new vn(this._pt,a,Mt,0,1,E.renderTransform,E,0,-1),A.dep=1),g==="scale")this._pt=new vn(this._pt,E,"scaleY",E.scaleY,(v?Cs(E.scaleY,v+h):h)-E.scaleY||0,Ju),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(yn,0,a[yn]),u=UC(u),E.svg?nh(e,u,0,T,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==E.zOrigin&&Wi(this,E,"zOrigin",E.zOrigin,_),Wi(this,a,g,pl(c),pl(u)));continue}else if(g==="svgOrigin"){nh(e,u,1,T,0,this);continue}else if(g in Pg){zC(this,E,g,d,v?Cs(d,v+u):u);continue}else if(g==="smoothOrigin"){Wi(this,E,"smooth",E.smooth,u);continue}else if(g==="force3D"){E[g]=u;continue}else if(g==="transform"){HC(this,u,e);continue}}else g in a||(g=Gs(g)||g);if(x||(h||h===0)&&(d||d===0)&&!SC.test(u)&&g in a)p=(c+"").substr((d+"").length),h||(h=0),_=sn(u)||(g in Pn.units?Pn.units[g]:p),p!==_&&(d=Ji(e,g,c,_)),this._pt=new vn(this._pt,x?E:a,g,d,(v?Cs(d,v+h):h)-d,!x&&(_==="px"||g==="zIndex")&&t.autoRound!==!1?EC:Ju),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=TC);else if(g in a)BC.call(this,e,g,c,v?v+u:u);else if(g in e)this.add(e,g,c||e[g],v?v+u:u,i,r);else if(g!=="parseTransform"){Yh(g,u);continue}x||(g in a?C.push(g,0,a[g]):C.push(g,1,c||e[g])),o.push(g)}}S&&Sg(this)},render:function(e,t){if(t.tween._time||!rd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Mi,aliases:ri,getSetter:function(e,t,n){var i=ri[t];return i&&i.indexOf(",")<0&&(t=i),t in bi&&t!==yn&&(e._gsap.x||Mi(e,"x"))?n&&vp===n?t==="scale"?RC:bC:(vp=n||{})&&(t==="scale"?IC:PC):e.style&&!Xh(e.style[t])?CC:~t.indexOf("-")?wC:td(e,t)},core:{_removeProperty:Fr,_getMatrix:od}};An.utils.checkPrefix=Gs;An.core.getStyleSaver=wg;(function(s,e,t,n){var i=xn(s+","+e+","+t,function(r){bi[r]=1});xn(e,function(r){Pn.units[r]="deg",Pg[r]=1}),ri[i[13]]=s+","+e,xn(n,function(r){var o=r.split(":");ri[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Pn.units[s]="px"});An.registerPlugin(Lg);var ih=An.registerPlugin(Lg)||An;ih.core.Tween;const Ya=(s,e)=>{const t=e.x-s.x,n=e.y-s.y;return Math.sqrt(t*t+n*n)},VC=(s,e)=>{const t=e.x-s.x,n=e.y-s.y;return WC(Math.atan2(n,t))},GC=(s,e,t)=>{const n={x:0,y:0};return t=rh(t),n.x=s.x-e*Math.cos(t),n.y=s.y-e*Math.sin(t),n},rh=s=>s*(Math.PI/180),WC=s=>s*(180/Math.PI),XC=s=>isNaN(s.buttons)?s.pressure!==0:s.buttons!==0,Vc=new Map,wp=s=>{Vc.has(s)&&clearTimeout(Vc.get(s)),Vc.set(s,setTimeout(s,100))},ml=(s,e,t)=>{const n=e.split(/[ ,]+/g);let i;for(let r=0;r<n.length;r+=1)i=n[r],s.addEventListener?s.addEventListener(i,t,!1):s.attachEvent&&s.attachEvent(i,t)},bp=(s,e,t)=>{const n=e.split(/[ ,]+/g);let i;for(let r=0;r<n.length;r+=1)i=n[r],s.removeEventListener?s.removeEventListener(i,t):s.detachEvent&&s.detachEvent(i,t)},Bg=s=>(s.preventDefault(),s.type.match(/^touch/)?s.changedTouches:s),Rp=()=>{const s=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:s,y:e}},Ip=(s,e)=>{e.top||e.right||e.bottom||e.left?(s.style.top=e.top,s.style.right=e.right,s.style.bottom=e.bottom,s.style.left=e.left):(s.style.left=e.x+"px",s.style.top=e.y+"px")},ad=(s,e,t)=>{const n=Ug(s);for(let i in n)if(n.hasOwnProperty(i))if(typeof e=="string")n[i]=e+" "+t;else{let r="";for(let o=0,a=e.length;o<a;o+=1)r+=e[o]+" "+t+", ";n[i]=r.slice(0,-2)}return n},qC=(s,e)=>{const t=Ug(s);for(let n in t)t.hasOwnProperty(n)&&(t[n]=e);return t},Ug=s=>{const e={};return e[s]="",["webkit","Moz","o"].forEach(function(n){e[n+s.charAt(0).toUpperCase()+s.slice(1)]=""}),e},Gc=(s,e)=>{for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s},QC=(s,e)=>{const t={};for(let n in s)s.hasOwnProperty(n)&&e.hasOwnProperty(n)?t[n]=e[n]:s.hasOwnProperty(n)&&(t[n]=s[n]);return t},sh=(s,e)=>{if(s.length)for(let t=0,n=s.length;t<n;t+=1)e(s[t]);else e(s)},YC=(s,e,t)=>({x:Math.min(Math.max(s.x,e.x-t),e.x+t),y:Math.min(Math.max(s.y,e.y-t),e.y+t)});var KC="ontouchstart"in window,jC=!!window.PointerEvent,ZC=!!window.MSPointerEvent,ro={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},vs,Go={};jC?vs=ro.pointer:ZC?vs=ro.MSPointer:KC?(vs=ro.touch,Go=ro.mouse):vs=ro.mouse;function Ri(){}Ri.prototype.on=function(s,e){var t=this,n=s.split(/[ ,]+/g),i;t._handlers_=t._handlers_||{};for(var r=0;r<n.length;r+=1)i=n[r],t._handlers_[i]=t._handlers_[i]||[],t._handlers_[i].push(e);return t};Ri.prototype.off=function(s,e){var t=this;return t._handlers_=t._handlers_||{},s===void 0?t._handlers_={}:e===void 0?t._handlers_[s]=null:t._handlers_[s]&&t._handlers_[s].indexOf(e)>=0&&t._handlers_[s].splice(t._handlers_[s].indexOf(e),1),t};Ri.prototype.trigger=function(s,e){var t=this,n=s.split(/[ ,]+/g),i;t._handlers_=t._handlers_||{};for(var r=0;r<n.length;r+=1)i=n[r],t._handlers_[i]&&t._handlers_[i].length&&t._handlers_[i].forEach(function(o){o.call(t,{type:i,target:t},e)})};Ri.prototype.config=function(s){var e=this;e.options=e.defaults||{},s&&(e.options=QC(e.options,s))};Ri.prototype.bindEvt=function(s,e){var t=this;return t._domHandlers_=t._domHandlers_||{},t._domHandlers_[e]=function(){typeof t["on"+e]=="function"?t["on"+e].apply(t,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},ml(s,vs[e],t._domHandlers_[e]),Go[e]&&ml(s,Go[e],t._domHandlers_[e]),t};Ri.prototype.unbindEvt=function(s,e){var t=this;return t._domHandlers_=t._domHandlers_||{},bp(s,vs[e],t._domHandlers_[e]),Go[e]&&bp(s,Go[e],t._domHandlers_[e]),delete t._domHandlers_[e],this};function Vt(s,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=s,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=Vt.id,Vt.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}Vt.prototype=new Ri;Vt.constructor=Vt;Vt.id=0;Vt.prototype.buildEl=function(s){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};Vt.prototype.stylize=function(){if(this.options.dataOnly)return this;var s=this.options.fadeTime+"ms",e=qC("borderRadius","50%"),t=ad("transition","opacity",s),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},Gc(n.el,t),this.options.shape==="circle"&&Gc(n.back,e),Gc(n.front,e),this.applyStyles(n),this};Vt.prototype.applyStyles=function(s){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var t in s[e])this.ui[e].style[t]=s[e][t];return this};Vt.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};Vt.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};Vt.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};Vt.prototype.show=function(s){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),typeof s=="function"&&s.call(this)},e.options.fadeTime)),e};Vt.prototype.hide=function(s){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var t=e.options.mode==="dynamic"?"none":"block";e.ui.el.style.display=t,typeof s=="function"&&s.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){const t=e.options.restJoystick,n={};n.x=t===!0||t.x!==!1?0:e.instance.frontPosition.x,n.y=t===!0||t.y!==!1?0:e.instance.frontPosition.y,e.setPosition(s,n)}return e};Vt.prototype.setPosition=function(s,e){var t=this;t.frontPosition={x:e.x,y:e.y};var n=t.options.fadeTime+"ms",i={};i.front=ad("transition",["transform"],n);var r={front:{}};r.front={transform:"translate("+t.frontPosition.x+"px,"+t.frontPosition.y+"px)"},t.applyStyles(i),t.applyStyles(r),t.restTimeout=setTimeout(function(){typeof s=="function"&&s.call(t),t.restCallback()},t.options.fadeTime)};Vt.prototype.restCallback=function(){var s=this,e={};e.front=ad("transition","none",""),s.applyStyles(e),s.trigger("rested",s.instance)};Vt.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};Vt.prototype.computeDirection=function(s){var e=s.angle.radian,t=Math.PI/4,n=Math.PI/2,i,r,o;if(e>t&&e<t*3&&!s.lockX?i="up":e>-t&&e<=t&&!s.lockY?i="left":e>-t*3&&e<=-t&&!s.lockX?i="down":s.lockY||(i="right"),s.lockY||(e>-n&&e<n?r="left":r="right"),s.lockX||(e>0?o="up":o="down"),s.force>this.options.threshold){var a={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(a[l]=this.direction[l]);var c={};this.direction={x:r,y:o,angle:i},s.direction=this.direction;for(l in a)a[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return s;(!c.x||!c.y)&&this.trigger("plain",s),c.x||this.trigger("plain:"+r,s),c.y||this.trigger("plain:"+o,s),c.angle||this.trigger("dir dir:"+i,s)}else this.resetDirection();return s};function It(s,e){var t=this;t.nipples=[],t.idles=[],t.actives=[],t.ids=[],t.pressureIntervals={},t.manager=s,t.id=It.id,It.id+=1,t.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},t.config(e),(t.options.mode==="static"||t.options.mode==="semi")&&(t.options.multitouch=!1),t.options.multitouch||(t.options.maxNumberOfNipples=1);const n=getComputedStyle(t.options.zone.parentElement);return n&&n.display==="flex"&&(t.parentIsFlex=!0),t.updateBox(),t.prepareNipples(),t.bindings(),t.begin(),t.nipples}It.prototype=new Ri;It.constructor=It;It.id=0;It.prototype.prepareNipples=function(){var s=this,e=s.nipples;e.on=s.on.bind(s),e.off=s.off.bind(s),e.options=s.options,e.destroy=s.destroy.bind(s),e.ids=s.ids,e.id=s.id,e.processOnMove=s.processOnMove.bind(s),e.processOnEnd=s.processOnEnd.bind(s),e.get=function(t){if(t===void 0)return e[0];for(var n=0,i=e.length;n<i;n+=1)if(e[n].identifier===t)return e[n];return!1}};It.prototype.bindings=function(){var s=this;s.bindEvt(s.options.zone,"start"),s.options.zone.style.touchAction="none",s.options.zone.style.msTouchAction="none"};It.prototype.begin=function(){var s=this,e=s.options;if(e.mode==="static"){var t=s.createNipple(e.position,s.manager.getIdentifier());t.add(),s.idles.push(t)}};It.prototype.createNipple=function(s,e){var t=this,n=t.manager.scroll,i={},r=t.options,o={x:t.parentIsFlex?n.x:n.x+t.box.left,y:t.parentIsFlex?n.y:n.y+t.box.top};if(s.x&&s.y)i={x:s.x-o.x,y:s.y-o.y};else if(s.top||s.right||s.bottom||s.left){var a=document.createElement("DIV");a.style.display="hidden",a.style.top=s.top,a.style.right=s.right,a.style.bottom=s.bottom,a.style.left=s.left,a.style.position="absolute",r.zone.appendChild(a);var l=a.getBoundingClientRect();r.zone.removeChild(a),i=s,s={x:l.left+n.x,y:l.top+n.y}}var c=new Vt(t,{color:r.color,size:r.size,threshold:r.threshold,fadeTime:r.fadeTime,dataOnly:r.dataOnly,restJoystick:r.restJoystick,restOpacity:r.restOpacity,mode:r.mode,identifier:e,position:s,zone:r.zone,frontPosition:{x:0,y:0},shape:r.shape});return r.dataOnly||(Ip(c.ui.el,i),Ip(c.ui.front,c.frontPosition)),t.nipples.push(c),t.trigger("added "+c.identifier+":added",c),t.manager.trigger("added "+c.identifier+":added",c),t.bindNipple(c),c};It.prototype.updateBox=function(){var s=this;s.box=s.options.zone.getBoundingClientRect()};It.prototype.bindNipple=function(s){var e=this,t,n=function(i,r){t=i.type+" "+r.id+":"+i.type,e.trigger(t,r)};s.on("destroyed",e.onDestroyed.bind(e)),s.on("shown hidden rested dir plain",n),s.on("dir:up dir:right dir:down dir:left",n),s.on("plain:up plain:right plain:down plain:left",n)};It.prototype.pressureFn=function(s,e,t){var n=this,i=0;clearInterval(n.pressureIntervals[t]),n.pressureIntervals[t]=setInterval((function(){var r=s.force||s.pressure||s.webkitForce||0;r!==i&&(e.trigger("pressure",r),n.trigger("pressure "+e.identifier+":pressure",r),i=r)}).bind(n),100)};It.prototype.onstart=function(s){var e=this,t=e.options,n=s;s=Bg(s),e.updateBox();var i=function(r){e.actives.length<t.maxNumberOfNipples?e.processOnStart(r):n.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(o){if(Object.values(n.touches).findIndex(function(l){return l.identifier===o})<0){var a=[s[0]];a.identifier=o,e.processOnEnd(a)}}),e.actives.length<t.maxNumberOfNipples&&e.processOnStart(r))};return sh(s,i),e.manager.bindDocument(),!1};It.prototype.processOnStart=function(s){var e=this,t=e.options,n,i=e.manager.getIdentifier(s),r=s.force||s.pressure||s.webkitForce||0,o={x:s.pageX,y:s.pageY},a=e.getOrCreate(i,o);a.identifier!==i&&e.manager.removeIdentifier(a.identifier),a.identifier=i;var l=function(u){u.trigger("start",u),e.trigger("start "+u.id+":start",u),u.show(),r>0&&e.pressureFn(s,u,u.identifier),e.processOnMove(s)};if((n=e.idles.indexOf(a))>=0&&e.idles.splice(n,1),e.actives.push(a),e.ids.push(a.identifier),t.mode!=="semi")l(a);else{var c=Ya(o,a.position);if(c<=t.catchDistance)l(a);else{a.destroy(),e.processOnStart(s);return}}return a};It.prototype.getOrCreate=function(s,e){var t=this,n=t.options,i;return/(semi|static)/.test(n.mode)?(i=t.idles[0],i?(t.idles.splice(0,1),i):n.mode==="semi"?t.createNipple(e,s):(console.warn("Coudln't find the needed nipple."),!1)):(i=t.createNipple(e,s),i)};It.prototype.processOnMove=function(s){var e=this,t=e.options,n=e.manager.getIdentifier(s),i=e.nipples.get(n),r=e.manager.scroll;if(!XC(s)){this.processOnEnd(s);return}if(!i){console.error("Found zombie joystick with ID "+n),e.manager.removeIdentifier(n);return}if(t.dynamicPage){var o=i.el.getBoundingClientRect();i.position={x:r.x+o.left,y:r.y+o.top}}i.identifier=n;var a=i.options.size/2,l={x:s.pageX,y:s.pageY};t.lockX&&(l.y=i.position.y),t.lockY&&(l.x=i.position.x);var c=Ya(l,i.position),u=VC(l,i.position),h=rh(u),d=c/a,f={distance:c,position:l},m,g;if(i.options.shape==="circle"?(m=Math.min(c,a),g=GC(i.position,m,u)):(g=YC(l,i.position,a),m=Ya(g,i.position)),t.follow){if(c>a){let x=l.x-g.x,A=l.y-g.y;i.position.x+=x,i.position.y+=A,i.el.style.top=i.position.y-(e.box.top+r.y)+"px",i.el.style.left=i.position.x-(e.box.left+r.x)+"px",c=Ya(l,i.position)}}else l=g,c=m;var p=l.x-i.position.x,_=l.y-i.position.y;i.frontPosition={x:p,y:_},t.dataOnly||(i.ui.front.style.transform="translate("+p+"px,"+_+"px)");var v={identifier:i.identifier,position:l,force:d,pressure:s.force||s.pressure||s.webkitForce||0,distance:c,angle:{radian:h,degree:u},vector:{x:p/a,y:-_/a},raw:f,instance:i,lockX:t.lockX,lockY:t.lockY};v=i.computeDirection(v),v.angle={radian:rh(180-u),degree:180-u},i.trigger("move",v),e.trigger("move "+i.id+":move",v)};It.prototype.processOnEnd=function(s){var e=this,t=e.options,n=e.manager.getIdentifier(s),i=e.nipples.get(n),r=e.manager.removeIdentifier(i.identifier);i&&(t.dataOnly||i.hide(function(){t.mode==="dynamic"&&(i.trigger("removed",i),e.trigger("removed "+i.id+":removed",i),e.manager.trigger("removed "+i.id+":removed",i),i.destroy())}),clearInterval(e.pressureIntervals[i.identifier]),i.resetDirection(),i.trigger("end",i),e.trigger("end "+i.id+":end",i),e.ids.indexOf(i.identifier)>=0&&e.ids.splice(e.ids.indexOf(i.identifier),1),e.actives.indexOf(i)>=0&&e.actives.splice(e.actives.indexOf(i),1),/(semi|static)/.test(t.mode)?e.idles.push(i):e.nipples.indexOf(i)>=0&&e.nipples.splice(e.nipples.indexOf(i),1),e.manager.unbindDocument(),/(semi|static)/.test(t.mode)&&(e.manager.ids[r.id]=r.identifier))};It.prototype.onDestroyed=function(s,e){var t=this;t.nipples.indexOf(e)>=0&&t.nipples.splice(t.nipples.indexOf(e),1),t.actives.indexOf(e)>=0&&t.actives.splice(t.actives.indexOf(e),1),t.idles.indexOf(e)>=0&&t.idles.splice(t.idles.indexOf(e),1),t.ids.indexOf(e.identifier)>=0&&t.ids.splice(t.ids.indexOf(e.identifier),1),t.manager.removeIdentifier(e.identifier),t.manager.unbindDocument()};It.prototype.destroy=function(){var s=this;s.unbindEvt(s.options.zone,"start"),s.nipples.forEach(function(t){t.destroy()});for(var e in s.pressureIntervals)s.pressureIntervals.hasOwnProperty(e)&&clearInterval(s.pressureIntervals[e]);s.trigger("destroyed",s.nipples),s.manager.unbindDocument(),s.off()};function Qt(s){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=Rp(),e.config(s),e.prepareCollections();var t=function(){var i;e.collections.forEach(function(r){r.forEach(function(o){i=o.el.getBoundingClientRect(),o.position={x:e.scroll.x+i.left,y:e.scroll.y+i.top}})})};ml(window,"resize",function(){wp(t)});var n=function(){e.scroll=Rp()};return ml(window,"scroll",function(){wp(n)}),e.collections}Qt.prototype=new Ri;Qt.constructor=Qt;Qt.prototype.prepareCollections=function(){var s=this;s.collections.create=s.create.bind(s),s.collections.on=s.on.bind(s),s.collections.off=s.off.bind(s),s.collections.destroy=s.destroy.bind(s),s.collections.get=function(e){var t;return s.collections.every(function(n){return t=n.get(e),!t}),t}};Qt.prototype.create=function(s){return this.createCollection(s)};Qt.prototype.createCollection=function(s){var e=this,t=new It(e,s);return e.bindCollection(t),e.collections.push(t),t};Qt.prototype.bindCollection=function(s){var e=this,t,n=function(i,r){t=i.type+" "+r.id+":"+i.type,e.trigger(t,r)};s.on("destroyed",e.onDestroyed.bind(e)),s.on("shown hidden rested dir plain",n),s.on("dir:up dir:right dir:down dir:left",n),s.on("plain:up plain:right plain:down plain:left",n)};Qt.prototype.bindDocument=function(){var s=this;s.binded||(s.bindEvt(document,"move").bindEvt(document,"end"),s.binded=!0)};Qt.prototype.unbindDocument=function(s){var e=this;(!Object.keys(e.ids).length||s===!0)&&(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)};Qt.prototype.getIdentifier=function(s){var e;return s?(e=s.identifier===void 0?s.pointerId:s.identifier,e===void 0&&(e=this.latest||0)):e=this.index,this.ids[e]===void 0&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]};Qt.prototype.removeIdentifier=function(s){var e={};for(var t in this.ids)if(this.ids[t]===s){e.id=t,e.identifier=this.ids[t],delete this.ids[t];break}return e};Qt.prototype.onmove=function(s){var e=this;return e.onAny("move",s),!1};Qt.prototype.onend=function(s){var e=this;return e.onAny("end",s),!1};Qt.prototype.oncancel=function(s){var e=this;return e.onAny("end",s),!1};Qt.prototype.onAny=function(s,e){var t=this,n,i="processOn"+s.charAt(0).toUpperCase()+s.slice(1);e=Bg(e);var r=function(a,l,c){c.ids.indexOf(l)>=0&&(c[i](a),a._found_=!0)},o=function(a){n=t.getIdentifier(a),sh(t.collections,r.bind(null,a,n)),a._found_||t.removeIdentifier(n)};return sh(e,o),!1};Qt.prototype.destroy=function(){var s=this;s.unbindDocument(!0),s.ids={},s.index=0,s.collections.forEach(function(e){e.destroy()}),s.off()};Qt.prototype.onDestroyed=function(s,e){var t=this;if(t.collections.indexOf(e)<0)return!1;t.collections.splice(t.collections.indexOf(e),1)};const Pp=new Qt,$C={create:function(s){return Pp.create(s)},factory:Pp},Ks=new cm,Ut=new rn(75,window.innerWidth/window.innerHeight,.1,1e3),Qo=new vM(Ut,document.body),JC=15,gl=Wt.degToRad(JC);Qo.minPolarAngle=Math.PI/2-gl;Qo.maxPolarAngle=Math.PI/2+gl;const Yo=document.getElementById("threejs-canvas"),Ko=new lm({canvas:Yo});Ko.setSize(window.innerWidth,window.innerHeight);console.log(window.devicePixelRatio);Ko.setPixelRatio(Math.min(window.devicePixelRatio,.75));var ew=lw("https://3dscanning.blob.core.windows.net/splats/sallskapsrum.splat",{showLoadingUI:!1,progressiveLoad:!0,rotation:[1,0,0,0]});Ks.add(ew);new QM().load("https://3dscanning.blob.core.windows.net/boundaries/sr2.fbx",function(s){Ks.add(s),s.traverse(e=>{e.isMesh&&(e.visible=!1,kg.push(e))})},function(s){console.log(s.loaded/s.total*100+"% loaded")},function(s){console.log("An error happened")});var Dp=Bm.find(s=>s.id==="sallskapsrum");zg(Ut,Dp.targetPosition,Dp.lookAtPosition);Ks.add(Qo.getObject());const _l=cw(),ld=uw();ld.visible=!1;Ks.add(_l);Ks.add(ld);Bm.forEach(s=>{const e=document.getElementById(s.id);e&&e.addEventListener("click",t=>{t.stopPropagation(),zg(Ut,s.targetPosition,s.lookAtPosition)})});const Wc=new gm,Xc=new xe,tw=document.getElementById("popup");function Og(s){document.getElementById(s).style.display="none"}document.getElementById("close-popup").addEventListener("click",()=>Og("popup"));document.getElementById("close-popup-frame").addEventListener("click",()=>Og("popup-frame"));function nw(){Ut.aspect=window.innerWidth/window.innerHeight,Ut.updateProjectionMatrix(),Ko.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",nw,!1);Yo.addEventListener("mousedown",s=>{if(s.button===0){Qo.lock(),Xc.x=s.clientX/window.innerWidth*2-1,Xc.y=-(s.clientY/window.innerHeight)*2+1,Wc.setFromCamera(Xc,Ut);var e=Wc.intersectObject(_l);e.length>0&&(console.log("Cube clicked!"),tw.style.display="block"),e=Wc.intersectObject(ld),e.length>0&&(console.log("Frame clicked!"),document.getElementById("popup-frame").style.display="block")}});document.addEventListener("mouseup",s=>{s.button===0&&Qo.unlock()});let Lr=!1,Br=!1,Ur=!1,Or=!1;const iw=s=>{switch(s.code){case"KeyW":case"ArrowUp":Lr=!0;break;case"KeyA":case"ArrowLeft":Ur=!0;break;case"KeyS":case"ArrowDown":Br=!0;break;case"KeyD":case"ArrowRight":Or=!0;break}},rw=s=>{switch(s.code){case"KeyW":case"ArrowUp":Lr=!1;break;case"KeyA":case"ArrowLeft":Ur=!1;break;case"KeyS":case"ArrowDown":Br=!1;break;case"KeyD":case"ArrowRight":Or=!1;break}};window.addEventListener("keydown",iw);window.addEventListener("keyup",rw);let cd=!1,oh=0,ah=0,hs=0,Fp=0;Yo.addEventListener("touchstart",s=>{s.touches.length===1&&(cd=!0,oh=s.touches[0].clientX,ah=s.touches[0].clientY),s.preventDefault()});Yo.addEventListener("touchend",s=>{cd=!1,s.preventDefault()});Yo.addEventListener("touchmove",s=>{if(cd&&s.touches.length===1){const e=s.touches[0].clientX,t=s.touches[0].clientY,n=e-oh,i=t-ah;oh=e,ah=t,Fp-=n*.002,hs-=i*.002;const r=Math.PI/2;hs=Math.max(-r,Math.min(r,hs)),hs=Math.max(-gl,Math.min(gl,hs)),Ut.rotation.set(hs,Fp,0,"YXZ")}s.preventDefault()});const jo=document.createElement("div");jo.style.position="fixed";jo.style.bottom="100px";jo.style.left="100px";document.body.appendChild(jo);const Ng=$C.create({zone:jo,mode:"static",position:{left:"50%",bottom:"50%"},color:"blue"});Ng.on("move",(s,e)=>{if(e.direction){const t=e.angle.degree;Lr=!1,Br=!1,Ur=!1,Or=!1,t>=45&&t<=135?Lr=!0:t>=225&&t<=315&&(Br=!0),t>135&&t<225?Ur=!0:(t>=0&&t<45||t>315&&t<=360)&&(Or=!0)}});Ng.on("end",()=>{Lr=!1,Br=!1,Ur=!1,Or=!1});const qc=new R,sw=document.getElementById("camera-position"),Ba=new R,ow=.5,Lp=new gm;let kg=[];function Ua(s){Lp.set(Ut.position,s);const e=Lp.intersectObjects(kg);return e.length>0&&e[0].distance<ow}function aw(){Ut.getWorldDirection(Ba);const s=new R().copy(Ut.position).add(Ba.multiplyScalar(5));sw.innerText=`
        Camera Position: (x: ${Ut.position.x.toFixed(2)}, y: ${Ut.position.y.toFixed(2)}, z: ${Ut.position.z.toFixed(2)})
        Look At: (x: ${s.x.toFixed(2)}, y: ${s.y.toFixed(2)}, z: ${s.z.toFixed(2)})
    `,qc.z=Number(Lr)-Number(Br),qc.x=Number(Or)-Number(Ur),qc.normalize();const e=new R(Ba.x,0,Ba.z).normalize(),t=e.clone().negate(),n=new R().crossVectors(e,Ut.up).normalize(),i=n.clone().negate();Lr&&!Ua(e)&&Ut.position.add(e.multiplyScalar(.1)),Br&&!Ua(t)&&Ut.position.add(t.multiplyScalar(.1)),Or&&!Ua(n)&&Ut.position.add(n.multiplyScalar(.1)),Ur&&!Ua(i)&&Ut.position.add(i.multiplyScalar(.1)),_l.rotation.x+=.01,_l.rotation.y+=.01,Ko.render(Ks,Ut)}Ko.setAnimationLoop(aw);function lw(s,e){const t=new al({});return t.addSplatScene(s,e),t}function cw(){const s=new ir(.5,.5,.5),e=new li({color:65280}),t=new ft(s,e);return t.position.set(2.1,-.25,-.08),t}function uw(){const s=new ir(1,1.4,.2),e=new li({color:16711680}),t=new ft(s,e);return t.position.set(3.8,.1,2),t}function zg(s,e,t,n=2){const i={x:s.position.x,y:s.position.y,z:s.position.z},r=new R(e.x,e.y,e.z),o=s.position.clone().add(s.getWorldDirection(new R)),a=new R(t.x,t.y,t.z);ih.to(i,{x:r.x,y:r.y,z:r.z,duration:n,ease:"power2.inOut",onUpdate:()=>{s.position.set(i.x,i.y,i.z)}}),ih.to(o,{x:a.x,y:a.y,z:a.z,duration:n,ease:"power2.inOut",onUpdate:()=>{s.lookAt(o)}})}
