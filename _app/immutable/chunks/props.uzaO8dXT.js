import{S as D,o as j,b as z,d as y,e as G,g,U as l,h as N,i as b,j as x,k as K,l as Z,m as $,n as H,L as V,P as J,q as Q,u as q,B as W,R as X,v as U,w as k,x as p,y as ee,z as re,A as F,C as ne,D as te,E as ae}from"./runtime.DCcv37mj.js";import{c as ie}from"./store.CjUwB9e2.js";import{l as fe}from"./index.BFqC5wTN.js";function E(a,v=null,o){if(typeof a!="object"||a===null||D in a)return a;const P=Z(a);if(P!==j&&P!==z)return a;var f=new Map,c=$(a),m=y(0);c&&f.set("length",y(a.length));var w;return new Proxy(a,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&G();var t=f.get(e);return t===void 0?(t=y(r.value),f.set(e,t)):g(t,E(r.value,w)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,y(l));else{if(c&&typeof e=="string"){var t=f.get("length"),n=Number(e);Number.isInteger(n)&&n<t.v&&g(t,n)}g(r,l),M(m)}return!0},get(i,e,r){var _;if(e===D)return a;var t=f.get(e),n=e in i;if(t===void 0&&(!n||(_=N(i,e))!=null&&_.writable)&&(t=y(E(n?i[e]:l,w)),f.set(e,t)),t!==void 0){var u=b(t);return u===l?void 0:u}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var t=f.get(e);t&&(r.value=b(t))}else if(r===void 0){var n=f.get(e),u=n==null?void 0:n.v;if(n!==void 0&&u!==l)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(i,e){var u;if(e===D)return!0;var r=f.get(e),t=r!==void 0&&r.v!==l||Reflect.has(i,e);if(r!==void 0||x!==null&&(!t||(u=N(i,e))!=null&&u.writable)){r===void 0&&(r=y(t?E(i[e],w):l),f.set(e,r));var n=b(r);if(n===l)return!1}return t},set(i,e,r,t){var R;var n=f.get(e),u=e in i;if(c&&e==="length")for(var _=r;_<n.v;_+=1){var I=f.get(_+"");I!==void 0?g(I,l):_ in i&&(I=y(l),f.set(_+"",I))}n===void 0?(!u||(R=N(i,e))!=null&&R.writable)&&(n=y(void 0),g(n,E(r,w)),f.set(e,n)):(u=n.v!==l,g(n,E(r,w)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(t,r),!u){if(c&&typeof e=="string"){var S=f.get("length"),O=Number(e);Number.isInteger(O)&&O>=S.v&&g(S,O+1)}M(m)}return!0},ownKeys(i){b(m);var e=Reflect.ownKeys(i).filter(n=>{var u=f.get(n);return u===void 0||u.v!==l});for(var[r,t]of f)t.v!==l&&!(r in i)&&e.push(r);return e},setPrototypeOf(){K()}})}function M(a,v=1){g(a,a.v+v)}function Y(a){for(var v=x,o=x;v!==null&&!(v.f&(W|X));)v=v.parent;try{return U(v),a()}finally{U(o)}}function le(a,v,o,P){var C;var f=(o&k)!==0,c=!fe||(o&p)!==0,m=(o&ee)!==0,w=(o&te)!==0,i=!1,e;m?[e,i]=ie(()=>a[v]):e=a[v];var r=D in a||re in a,t=((C=N(a,v))==null?void 0:C.set)??(r&&m&&v in a?s=>a[v]=s:void 0),n=P,u=!0,_=!1,I=()=>(_=!0,u&&(u=!1,w?n=q(P):n=P),n);e===void 0&&P!==void 0&&(t&&c&&H(),e=I(),t&&t(e));var d;if(c)d=()=>{var s=a[v];return s===void 0?I():(u=!0,_=!1,s)};else{var S=Y(()=>(f?F:ne)(()=>a[v]));S.f|=V,d=()=>{var s=b(S);return s!==void 0&&(n=void 0),s===void 0?n:s}}if(!(o&J))return d;if(t){var O=a.$$legacy;return function(s,h){return arguments.length>0?((!c||!h||O||i)&&t(h?d():s),s):d()}}var R=!1,B=!1,L=ae(e),A=Y(()=>F(()=>{var s=d(),h=b(L);return R?(R=!1,B=!0,h):(B=!1,L.v=s)}));return f||(A.equals=Q),function(s,h){if(arguments.length>0){const T=h?b(A):c&&m?E(s):s;return A.equals(T)||(R=!0,g(L,T),_&&n!==void 0&&(n=T),q(()=>b(A))),s}return b(A)}}export{E as a,le as p};
