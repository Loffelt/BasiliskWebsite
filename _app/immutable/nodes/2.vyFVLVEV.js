import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.CtaTdtmd.js";import{X as Z,Z as q,F as y,Y as R,G as z,m as J,_ as X,$ as K,a0 as $,a1 as k,W as b,a2 as w,a3 as F,a4 as G,a5 as P,j as Y,a6 as j,a7 as ee,a8 as ae,a9 as re,aa as te,Q as ne,ab as se,ac as le,E as ie,d as B,ad as fe,ae as ue,af as ve,ag as oe,c as H,r as I,t as de,i as L,p as _e,f as ce,a as pe,s as he}from"../chunks/runtime.DCcv37mj.js";import{a as M,t as D}from"../chunks/template.C3ZuV4od.js";import{s as me,a as ge}from"../chunks/attributes.Dji32wYn.js";import{i as Ee,p as xe}from"../chunks/stores.BB7YtwtK.js";import{a as ye,s as Te,b as be}from"../chunks/store.CjUwB9e2.js";import{p as O}from"../chunks/props.uzaO8dXT.js";function Ae(n,e){return e}function Ie(n,e,a,u){for(var v=[],s=e.length,l=0;l<s;l++)ee(e[l].e,v,!0);var c=s>0&&v.length===0&&a!==null;if(c){var d=a.parentNode;ae(d),d.append(a),u.clear(),E(n,e[0].prev,e[s-1].next)}re(v,()=>{for(var o=0;o<s;o++){var r=e[o];c||(u.delete(r.k),E(n,r.prev,r.next)),te(r.e,!c)}})}function we(n,e,a,u,v,s=null){var l=n,c={flags:e,items:new Map,first:null};{var d=n;l=y?R(ne(d)):d.appendChild(Z())}y&&z();var o=null,r=!1;q(()=>{var _=a(),i=J(_)?_:_==null?[]:X(_),t=i.length;if(r&&t===0)return;r=t===0;let h=!1;if(y){var T=l.data===K;T!==(t===0)&&(l=$(),R(l),k(!1),h=!0)}if(y){for(var g=null,f,p=0;p<t;p++){if(b.nodeType===8&&b.data===se){l=b,h=!0,k(!1);break}var A=i[p],x=u(A,p);f=Q(b,c,g,null,A,x,p,v,e),c.items.set(x,f),g=f}t>0&&R($())}if(!y){var m=le;Ce(i,c,l,v,e,(m.f&w)!==0,u)}s!==null&&(t===0?o?F(o):o=G(()=>s(l)):o!==null&&P(o,()=>{o=null})),h&&k(!0),a()}),y&&(l=b)}function Ce(n,e,a,u,v,s,l){var c=n.length,d=e.items,o=e.first,r=o,_,i=null,t=[],h=[],T,g,f,p;for(p=0;p<c;p+=1){if(T=n[p],g=l(T,p),f=d.get(g),f===void 0){var A=r?r.e.nodes_start:a;i=Q(A,e,i,i===null?e.first:i.next,T,g,p,u,v),d.set(g,i),t=[],h=[],r=i.next;continue}if(Ne(f,T,p),f.e.f&w&&F(f.e),f!==r){if(_!==void 0&&_.has(f)){if(t.length<h.length){var x=h[0],m;i=x.prev;var S=t[0],C=t[t.length-1];for(m=0;m<t.length;m+=1)V(t[m],x,a);for(m=0;m<h.length;m+=1)_.delete(h[m]);E(e,S.prev,C.next),E(e,i,S),E(e,C,x),r=x,i=C,p-=1,t=[],h=[]}else _.delete(f),V(f,r,a),E(e,f.prev,f.next),E(e,f,i===null?e.first:i.next),E(e,i,f),i=f;continue}for(t=[],h=[];r!==null&&r.k!==g;)(s||!(r.e.f&w))&&(_??(_=new Set)).add(r),h.push(r),r=r.next;if(r===null)continue;f=r}t.push(f),i=f,r=f.next}if(r!==null||_!==void 0){for(var N=_===void 0?[]:X(_);r!==null;)(s||!(r.e.f&w))&&N.push(r),r=r.next;var U=N.length;if(U>0){var W=c===0?a:null;Ie(e,N,W,d)}}Y.first=e.first&&e.first.e,Y.last=i&&i.e}function Ne(n,e,a,u){j(n.v,e),n.i=a}function Q(n,e,a,u,v,s,l,c,d){var o=(d&ue)!==0,r=(d&ve)===0,_=o?r?ie(v):B(v):v,i=d&fe?B(l):l,t={i,v:_,k:s,a:null,e:null,prev:a,next:u};try{return t.e=G(()=>c(n,_,i),y),t.e.prev=a&&a.e,t.e.next=u&&u.e,a===null?e.first=t:(a.next=t,a.e.next=t.e),u!==null&&(u.prev=t,u.e.prev=t.e),t}finally{}}function V(n,e,a){for(var u=n.next?n.next.e.nodes_start:a,v=e?e.e.nodes_start:a,s=n.e.nodes_start;s!==u;){var l=oe(s);v.before(s),s=l}}function E(n,e,a){e===null?n.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}var Re=D("<li><a> </a></li>"),ke=D('<div class="side_nav"><ul></ul></div>');function He(n,e){let a=O(e,"routes",24,()=>[]),u=O(e,"current_route",8);var v=ke(),s=H(v);we(s,5,a,Ae,(l,c)=>{var d=Re(),o=H(d),r=H(o,!0);I(o),I(d),de(()=>{me(o,"href",`${u()}/${L(c).href}`),ye(r,L(c).name)}),M(l,d)}),I(s),I(v),M(n,v)}var Me=D("<!> <!>",1);function Xe(n,e){_e(e,!1);const a=Te(),u=()=>be(xe,"$page",a);Ee();var v=Me(),s=ce(v);He(s,{routes:[],get current_route(){return u().url.pathname}});var l=he(s,2);ge(l,e,"default",{}),M(n,v),pe()}export{Xe as component};
