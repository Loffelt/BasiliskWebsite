var xn=Array.isArray,Rn=Array.from,On=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,Dn=Object.prototype,kn=Array.prototype,$t=Object.getPrototypeOf;const In=()=>{};function Nn(t){return t()}function Zt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,vt=4,j=8,nt=16,w=32,Z=64,O=128,V=256,p=512,S=1024,P=2048,b=4096,H=8192,Wt=16384,pt=32768,bn=65536,zt=1<<18,ht=1<<19,it=Symbol("$state"),Pn=Symbol("legacy props"),Cn=Symbol("");function dt(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function yt(t){return!Jt(t,this.v)}function Qt(t){throw new Error("effect_in_teardown")}function Xt(){throw new Error("effect_in_unowned_derived")}function tn(t){throw new Error("effect_orphan")}function nn(){throw new Error("effect_update_depth_exceeded")}function Fn(){throw new Error("hydration_failed")}function qn(t){throw new Error("props_invalid_value")}function Ln(){throw new Error("state_descriptors_fixed")}function Mn(){throw new Error("state_prototype_fixed")}function rn(){throw new Error("state_unsafe_local_read")}function en(){throw new Error("state_unsafe_mutation")}let W=!1;function Yn(){W=!0}function rt(t){return{f:0,v:t,reactions:null,equals:dt,version:0}}function jn(t){return Et(rt(t))}function sn(t,n=!1){var e;const r=rt(t);return n||(r.equals=yt),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Hn(t,n=!1){return Et(sn(t,n))}function Et(t){return o!==null&&o.f&m&&(E===null?yn([t]):E.push(t)),t}function wt(t,n){return o!==null&&at()&&o.f&(m|nt)&&(E===null||!E.includes(t))&&en(),ln(t,n)}function ln(t,n){return t.equals(n)||(t.v=n,t.version=Yt(),Tt(t,S),at()&&u!==null&&u.f&p&&!(u.f&w)&&(_!==null&&_.includes(t)?(y(u,S),z(u)):A===null?En([t]):A.push(t))),n}function Tt(t,n){var r=t.reactions;if(r!==null)for(var e=at(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&S||!e&&a===u||(y(a,n),i&(p|O)&&(i&m?Tt(a,P):z(a)))}}const Un=1,Bn=2,Vn=4,Gn=8,Kn=16,$n=1,Zn=2,an="[",un="[!",on="]",mt={},Wn=Symbol();function gt(t){console.warn("hydration_mismatch")}let R=!1;function zn(t){R=t}let d;function L(t){if(t===null)throw gt(),mt;return d=t}function Jn(){return L(D(d))}function Qn(t){if(R){if(D(d)!==null)throw gt(),mt;d=t}}function Xn(t=1){if(R){for(var n=t,r=d;n--;)r=D(r);d=r}}function tr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===on){if(t===0)return n;t-=1}else(r===an||r===un)&&(t+=1)}var e=D(n);n.remove(),n=e}}var ft,At,St;function nr(){if(ft===void 0){ft=window;var t=Element.prototype,n=Node.prototype;At=ot(n,"firstChild").get,St=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function J(t=""){return document.createTextNode(t)}function Q(t){return At.call(t)}function D(t){return St.call(t)}function rr(t,n){if(!R)return Q(t);var r=Q(d);if(r===null)r=d.appendChild(J());else if(n&&r.nodeType!==3){var e=J();return r==null||r.before(e),L(e),e}return L(r),r}function er(t,n){if(!R){var r=Q(t);return r instanceof Comment&&r.data===""?D(r):r}return d}function sr(t,n=1,r=!1){let e=R?d:t;for(var s;n--;)s=e,e=D(e);if(!R)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=J();return e===null?s==null||s.after(a):e.before(a),L(a),a}return L(e),e}function lr(t){t.textContent=""}function fn(t){var n=m|S;u===null?n|=O:u.f|=ht;const r={children:null,ctx:f,deps:null,equals:dt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&m){var e=o;(e.children??(e.children=[])).push(r)}return r}function ar(t){const n=fn(t);return n.equals=yt,n}function xt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?et(e):F(e)}}}function Rt(t){var n,r=u;$(t.parent);try{xt(t),n=jt(t)}finally{$(r)}return n}function Ot(t){var n=Rt(t),r=(k||t.f&O)&&t.deps!==null?P:p;y(t,r),t.equals(n)||(t.v=n,t.version=Yt())}function et(t){xt(t),Y(t,0),y(t,H),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Dt(t){u===null&&o===null&&tn(),o!==null&&o.f&O&&Xt(),lt&&Qt()}function _n(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function C(t,n,r,e=!0){var s=(t&Z)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{_t(!0),U(a),a.f|=Wt}catch(c){throw F(a),c}finally{_t(i)}}else n!==null&&z(a);var T=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&ht)===0;if(!T&&!s&&e&&(l!==null&&_n(a,l),o!==null&&o.f&m)){var g=o;(g.children??(g.children=[])).push(a)}return a}function ur(t){const n=C(j,null,!1);return y(n,p),n.teardown=t,n}function or(t){Dt();var n=u!==null&&(u.f&w)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=kt(t);return e}}function ir(t){return Dt(),st(t)}function fr(t){const n=C(Z,t,!0);return()=>{F(n)}}function kt(t){return C(vt,t,!1)}function _r(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=st(()=>{t(),!e.ran&&(e.ran=!0,wt(r.l.r2,!0),An(n))})}function cr(){var t=f;st(()=>{if(Gt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&y(r,P),q(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function st(t){return C(j,t,!0)}function vr(t){return cn(t)}function cn(t,n=0){return C(j|nt|n,t,!0)}function pr(t,n=!0){return C(j|w,t,!0,n)}function It(t){var n=t.teardown;if(n!==null){const r=lt,e=o;ct(!0),K(null);try{n.call(null)}finally{ct(r),K(e)}}}function Nt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function vn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&zt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:D(e);e.remove(),e=l}r=!0}bt(t,n&&!r),Nt(t),Y(t,0),y(t,H);var a=t.transitions;if(a!==null)for(const T of a)T.stop();It(t);var i=t.parent;i!==null&&i.first!==null&&Pt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Pt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function hr(t,n){var r=[];Ct(t,r,!0),pn(r,()=>{F(t),n&&n()})}function pn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ct(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&pt)!==0||(e.f&w)!==0;Ct(e,n,l?r:!1),e=s}}}function dr(t){Ft(t,!0)}function Ft(t,n){if(t.f&b){q(t)&&U(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&pt)!==0||(r.f&w)!==0;Ft(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let G=!1,X=[];function qt(){G=!1;const t=X.slice();X=[],Zt(t)}function yr(t){G||(G=!0,queueMicrotask(qt)),X.push(t)}function hn(){G&&qt()}const Lt=0,dn=1;let B=Lt,M=!1,I=!1,lt=!1;function _t(t){I=t}function ct(t){lt=t}let x=[],N=0;let o=null;function K(t){o=t}let u=null;function $(t){u=t}let E=null;function yn(t){E=t}let _=null,h=0,A=null;function En(t){A=t}let Mt=0,k=!1,f=null;function Yt(){return++Mt}function at(){return!W||f!==null&&f.l===null}function q(t){var a,i;var n=t.f;if(n&S)return!0;if(n&P){var r=t.deps,e=(n&O)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var l=r[s];if(q(l)&&Ot(l),e&&u!==null&&!k&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||y(t,p)}return!1}function wn(t,n,r){throw t}function jt(t){var ut;var n=_,r=h,e=A,s=o,l=k,a=E,i=f,T=t.f;_=null,h=0,A=null,o=T&(w|Z)?null:t,k=!I&&(T&O)!==0,E=null,f=t.ctx;try{var g=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(Y(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!k)for(v=h;v<c.length;v++)((ut=c[v]).reactions??(ut.reactions=[])).push(t)}else c!==null&&h<c.length&&(Y(t,h),c.length=h);return g}finally{_=n,h=r,A=e,o=s,k=l,E=a,f=i}}function Tn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(y(n,P),n.f&(O|V)||(n.f^=V),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Tn(t,r[e])}function U(t){var n=t.f;if(!(n&H)){y(t,p);var r=u;u=t;try{n&nt?vn(t):bt(t),Nt(t),It(t);var e=jt(t);t.teardown=typeof e=="function"?e:null,t.version=Mt}catch(s){wn(s)}finally{u=r}}}function Ht(){N>1e3&&(N=0,nn()),N++}function Ut(t){var n=t.length;if(n!==0){Ht();var r=I;I=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];Bt(s,l),mn(l)}}finally{I=r}}}function mn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(H|b))&&q(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Pt(e):e.fn=null))}}function gn(){if(M=!1,N>1001)return;const t=x;x=[],Ut(t),M||(N=0)}function z(t){B===Lt&&(M||(M=!0,queueMicrotask(gn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|w)){if(!(r&p))return;n.f^=p}}x.push(n)}function Bt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&w)!==0,a=l&&(s&p)!==0;if(!a&&!(s&b))if(s&j){l?r.f^=p:q(r)&&U(r);var i=r.first;if(i!==null){r=i;continue}}else s&vt&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var g=v.next;if(g!==null){r=g;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Bt(i,n)}function Vt(t){var n=B,r=x;try{Ht();const s=[];B=dn,x=s,M=!1,Ut(r);var e=t==null?void 0:t();return hn(),(x.length>0||s.length>0)&&Vt(),N=0,e}finally{B=n,x=r}}async function Er(){await Promise.resolve(),Vt()}function Gt(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&H){var e=Rt(t);return et(t),e}if(o!==null){E!==null&&E.includes(t)&&rn();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),A!==null&&u!==null&&u.f&p&&!(u.f&w)&&A.includes(t)&&(y(u,S),z(u))}else if(r&&t.deps===null){var l=t,a=l.parent;a!==null&&!((i=a.deriveds)!=null&&i.includes(l))&&(a.deriveds??(a.deriveds=[])).push(l)}return r&&(l=t,q(l)&&Ot(l)),t.v}function An(t){const n=o;try{return o=null,t()}finally{o=n}}const Sn=~(S|P|p);function y(t,n){t.f=t.f&Sn|n}function wr(t,n=1){var r=+Gt(t);return wt(t,r+n),r}function Tr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},W&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function mr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];$(l.effect),K(l.reaction),kt(l.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function gr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(it in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&it in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{yt as $,Jn as A,Dn as B,kn as C,rt as D,Ln as E,wt as F,ot as G,Mn as H,$t as I,xn as J,cn as K,dr as L,pr as M,hr as N,pt as O,un as P,tr as Q,zn as R,it as S,$n as T,Wn as U,kt as V,st as W,yr as X,qn as Y,bn as Z,Vn as _,or as a,wr as a0,w as a1,Z as a2,$ as a3,Un as a4,W as a5,Bn as a6,Gn as a7,Pn as a8,ar as a9,Kn as aa,sn as ab,ur as ac,K as ad,o as ae,On as af,nr as ag,an as ah,D as ai,mt as aj,on as ak,gt as al,Fn as am,lr as an,Rn as ao,fr as ap,Vt as aq,Er as ar,jn as as,Cn as at,Kt as au,_r as av,cr as aw,Xn as ax,Hn as ay,An as b,f as c,Zt as d,gr as e,fn as f,Gt as g,Yn as h,er as i,mr as j,rr as k,Qn as l,sr as m,In as n,Q as o,Tr as p,J as q,Nn as r,Jt as s,vr as t,ir as u,Zn as v,R as w,d as x,L as y,u as z};