import{aj as H,ak as A,z as D,v as M,ac as $,q as I,al as E,aa as j,am as C,ag as P,an as T,$ as y,X as V,d as z,a0 as p,ab as B,ao as J,ap as W,a7 as X,Y as F,aq as G,V as K,a3 as Q,p as U,h as N,a as Z,N as x,ar as S,y as ee,as as re,J as ae,n as te,l as ne}from"./runtime.CibfN2yH.js";import{b as se}from"./disclose-version.CDPT1uK1.js";const ie=new Set,k=new Set;function g(e){var O;var r=this,n=r.ownerDocument,t=e.type,u=((O=e.composedPath)==null?void 0:O.call(e))||[],a=u[0]||e.target,c=0,b=e.__root;if(b){var d=u.indexOf(b);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var l=u.indexOf(r);if(l===-1)return;d<=l&&(c=d)}if(a=u[c]||e.target,a!==r){H(e,"currentTarget",{configurable:!0,get(){return a||n}});var m=$,o=I;A(null),D(null);try{for(var s,i=[];a!==null;){var f=a.assignedSlot||a.parentNode||a.host||null;try{var _=a["__"+t];if(_!==void 0&&!a.disabled)if(M(_)){var[Y,...q]=_;Y.apply(a,[e,...q])}else _.call(a,e)}catch(v){s?i.push(v):s=v}if(e.cancelBubble||f===r||f===null)break;a=f}if(s){for(let v of i)queueMicrotask(()=>{throw v});throw s}}finally{e.__root=r,delete e.currentTarget,A(m),D(o)}}}const ue=["touchstart","touchmove"];function oe(e){return ue.includes(e)}function _e(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function fe(e,r){return L(e,r)}function be(e,r){E(),r.intro=r.intro??!1;const n=r.target,t=N,u=p;try{for(var a=j(n);a&&(a.nodeType!==8||a.data!==C);)a=P(a);if(!a)throw T;y(!0),V(a),z();const c=L(e,{...r,anchor:a});if(p===null||p.nodeType!==8||p.data!==B)throw J(),T;return y(!1),c}catch(c){if(c===T)return r.recover===!1&&W(),E(),X(n),y(!1),fe(e,r);throw c}finally{y(t),V(u)}}const h=new Map;function L(e,{target:r,anchor:n,props:t={},events:u,context:a,intro:c=!0}){E();var b=new Set,d=o=>{for(var s=0;s<o.length;s++){var i=o[s];if(!b.has(i)){b.add(i);var f=oe(i);r.addEventListener(i,g,{passive:f});var _=h.get(i);_===void 0?(document.addEventListener(i,g,{passive:f}),h.set(i,1)):h.set(i,_+1)}}};d(F(ie)),k.add(d);var l=void 0,m=G(()=>{var o=n??r.appendChild(K());return Q(()=>{if(a){U({});var s=x;s.c=a}u&&(t.$$events=u),N&&se(o,null),l=e(o,t)||{},N&&(I.nodes_end=p),a&&Z()}),()=>{var f;for(var s of b){r.removeEventListener(s,g);var i=h.get(s);--i===0?(document.removeEventListener(s,g),h.delete(s)):h.set(s,i)}k.delete(d),R.delete(l),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return R.set(l,m),l}let R=new WeakMap;function he(e){const r=R.get(e);r&&r()}function ce(e,r,n){if(e==null)return r(void 0),S;const t=ee(()=>e.subscribe(r,n));return t.unsubscribe?()=>t.unsubscribe():t}let w=!1;function pe(e,r,n){const t=n[r]??(n[r]={store:null,source:ae(void 0),unsubscribe:S});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=S;else{var u=!0;t.unsubscribe=ce(e,a=>{u?t.source.v=a:ne(t.source,a)}),u=!1}return te(t.source)}function ve(){const e={};return re(()=>{for(var r in e)e[r].unsubscribe()}),e}function ye(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{_e as a,pe as b,ye as c,be as h,fe as m,ve as s,he as u};