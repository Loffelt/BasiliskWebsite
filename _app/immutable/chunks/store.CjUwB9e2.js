import{ah as H,ai as A,v as D,m as M,ac as q,j as L,aj as T,Q as C,ak as P,ag as W,al as E,a1 as g,Y as k,G as $,W as p,ab as B,am as F,an as G,a8 as K,_ as Q,ao as X,X as z,a4 as J,p as U,F as S,a as Z,K as x,ap as N,u as ee,aq as re,E as ae,i as te,g as ne}from"./runtime.DCcv37mj.js";import{b as se}from"./template.C3ZuV4od.js";const ie=new Set,I=new Set;function y(e){var O;var r=this,n=r.ownerDocument,t=e.type,u=((O=e.composedPath)==null?void 0:O.call(e))||[],a=u[0]||e.target,c=0,b=e.__root;if(b){var d=u.indexOf(b);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var l=u.indexOf(r);if(l===-1)return;d<=l&&(c=d)}if(a=u[c]||e.target,a!==r){H(e,"currentTarget",{configurable:!0,get(){return a||n}});var m=q,o=L;A(null),D(null);try{for(var s,i=[];a!==null;){var f=a.assignedSlot||a.parentNode||a.host||null;try{var _=a["__"+t];if(_!==void 0&&!a.disabled)if(M(_)){var[Y,...j]=_;Y.apply(a,[e,...j])}else _.call(a,e)}catch(v){s?i.push(v):s=v}if(e.cancelBubble||f===r||f===null)break;a=f}if(s){for(let v of i)queueMicrotask(()=>{throw v});throw s}}finally{e.__root=r,delete e.currentTarget,A(m),D(o)}}}const ue=["touchstart","touchmove"];function oe(e){return ue.includes(e)}function _e(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function fe(e,r){return V(e,r)}function be(e,r){T(),r.intro=r.intro??!1;const n=r.target,t=S,u=p;try{for(var a=C(n);a&&(a.nodeType!==8||a.data!==P);)a=W(a);if(!a)throw E;g(!0),k(a),$();const c=V(e,{...r,anchor:a});if(p===null||p.nodeType!==8||p.data!==B)throw F(),E;return g(!1),c}catch(c){if(c===E)return r.recover===!1&&G(),T(),K(n),g(!1),fe(e,r);throw c}finally{g(t),k(u)}}const h=new Map;function V(e,{target:r,anchor:n,props:t={},events:u,context:a,intro:c=!0}){T();var b=new Set,d=o=>{for(var s=0;s<o.length;s++){var i=o[s];if(!b.has(i)){b.add(i);var f=oe(i);r.addEventListener(i,y,{passive:f});var _=h.get(i);_===void 0?(document.addEventListener(i,y,{passive:f}),h.set(i,1)):h.set(i,_+1)}}};d(Q(ie)),I.add(d);var l=void 0,m=X(()=>{var o=n??r.appendChild(z());return J(()=>{if(a){U({});var s=x;s.c=a}u&&(t.$$events=u),S&&se(o,null),l=e(o,t)||{},S&&(L.nodes_end=p),a&&Z()}),()=>{var f;for(var s of b){r.removeEventListener(s,y);var i=h.get(s);--i===0?(document.removeEventListener(s,y),h.delete(s)):h.set(s,i)}I.delete(d),R.delete(l),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return R.set(l,m),l}let R=new WeakMap;function he(e){const r=R.get(e);r&&r()}function ce(e,r,n){if(e==null)return r(void 0),N;const t=ee(()=>e.subscribe(r,n));return t.unsubscribe?()=>t.unsubscribe():t}let w=!1;function pe(e,r,n){const t=n[r]??(n[r]={store:null,source:ae(void 0),unsubscribe:N});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=N;else{var u=!0;t.unsubscribe=ce(e,a=>{u?t.source.v=a:ne(t.source,a)}),u=!1}return te(t.source)}function ve(){const e={};return re(()=>{for(var r in e)e[r].unsubscribe()}),e}function ge(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{_e as a,pe as b,ge as c,be as h,fe as m,ve as s,he as u};
