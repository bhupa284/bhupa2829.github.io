var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let c,u;function s(t,n){return c||(c=document.createElement("a")),c.href=n,t===c.href}function f(t,n,e,r){if(t){const o=a(t,n,e,r);return t[0](o)}}function a(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function h(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(void 0===n.dirty)return o;if("object"==typeof o){const t=[],e=Math.max(n.dirty.length,o.length);for(let r=0;r<e;r+=1)t[r]=n.dirty[r]|o[r];return t}return n.dirty|o}return n.dirty}function p(t,n,e,r,o,l){if(o){const i=a(n,e,r,l);t.p(i,o)}}function A(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function B(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function Z(t,n){const e={};n=new Set(n);for(const r in t)n.has(r)||"$"===r[0]||(e[r]=t[r]);return e}function b(t,n){t.appendChild(n)}function J(t,n,e){t.insertBefore(n,e||null)}function x(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function k(){return g(" ")}function Q(){return g("")}function j(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function S(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in n)null==n[r]?t.removeAttribute(r):"style"===r?t.style.cssText=n[r]:"__value"===r?t.value=t[r]=n[r]:e[r]&&e[r].set?t[r]=n[r]:m(t,r,n[r])}function w(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function y(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}function C(t){u=t}function H(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const T=[],O=[],K=[],z=[],q=Promise.resolve();let E=!1;function N(t){K.push(t)}let U=!1;const D=new Set;function W(){if(!U){U=!0;do{for(let t=0;t<T.length;t+=1){const n=T[t];C(n),L(n.$$)}for(C(null),T.length=0;O.length;)O.pop()();for(let t=0;t<K.length;t+=1){const n=K[t];D.has(n)||(D.add(n),n())}K.length=0}while(T.length);for(;z.length;)z.pop()();E=!1,U=!1,D.clear()}}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const v=new Set;let P;function M(){P={r:0,c:[],p:P}}function X(){P.r||o(P.c),P=P.p}function Y(t,n){t&&t.i&&(v.delete(t),t.i(n))}function G(t,n,e,r){if(t&&t.o){if(v.has(t))return;v.add(t),P.c.push((()=>{v.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function F(t,n){const e={},r={},o={$$scope:1};let l=t.length;for(;l--;){const i=t[l],c=n[l];if(c){for(const t in i)t in c||(r[t]=1);for(const t in c)o[t]||(e[t]=c[t],o[t]=1);t[l]=c}else for(const t in i)o[t]=1}for(const t in r)t in e||(e[t]=void 0);return e}function R(t,n,r,i){const{fragment:c,on_mount:u,on_destroy:s,after_update:f}=t.$$;c&&c.m(n,r),i||N((()=>{const n=u.map(e).filter(l);s?s.push(...n):o(n),t.$$.on_mount=[]})),f.forEach(N)}function $(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _(t,n){-1===t.$$.dirty[0]&&(T.push(t),E||(E=!0,q.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function I(n,e,l,i,c,s,f,a=[-1]){const h=u;C(n);const p=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:r(),dirty:a,skip_bound:!1,root:e.target||h.$$.root};f&&f(p.root);let A=!1;if(p.ctx=l?l(n,e.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),A&&_(n,t)),e})):[],p.update(),A=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(x)}else p.fragment&&p.fragment.c();e.intro&&Y(n.$$.fragment),R(n,e.target,e.anchor,e.customElement),W()}C(h)}class V{$destroy(){$(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function tt(t){let n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t)if(Array.isArray(t))n=t.map(tt).filter(Boolean).join(" ");else for(let e in t)t[e]&&(n&&(n+=" "),n+=e);return n}function nt(t){let e,r,o,l,i;const c=t[18].default,u=f(c,t,t[17],null),s=u||function(t){let n,e,r,o;const l=[ot,rt],i=[];function c(t,n){return t[1]?0:1}return n=c(t),e=i[n]=l[n](t),{c(){e.c(),r=Q()},m(t,e){i[n].m(t,e),J(t,r,e),o=!0},p(t,o){let u=n;n=c(t),n===u?i[n].p(t,o):(M(),G(i[u],1,1,(()=>{i[u]=null})),X(),e=i[n],e?e.p(t,o):(e=i[n]=l[n](t),e.c()),Y(e,1),e.m(r.parentNode,r))},i(t){o||(Y(e),o=!0)},o(t){G(e),o=!1},d(t){i[n].d(t),t&&x(r)}}}(t);let a=[t[9],{class:t[7]},{disabled:t[2]},{value:t[5]},{"aria-label":r=t[8]||t[6]},{style:t[4]}],B={};for(let t=0;t<a.length;t+=1)B=n(B,a[t]);return{c(){e=d("button"),s&&s.c(),S(e,B)},m(n,r){J(n,e,r),s&&s.m(e,null),e.autofocus&&e.focus(),t[22](e),o=!0,l||(i=j(e,"click",t[20]),l=!0)},p(t,n){u?u.p&&(!o||131072&n)&&p(u,c,t,t[17],o?h(c,t[17],n,null):A(t[17]),null):s&&s.p&&(!o||131074&n)&&s.p(t,o?n:-1),S(e,B=F(a,[512&n&&t[9],(!o||128&n)&&{class:t[7]},(!o||4&n)&&{disabled:t[2]},(!o||32&n)&&{value:t[5]},(!o||320&n&&r!==(r=t[8]||t[6]))&&{"aria-label":r},(!o||16&n)&&{style:t[4]}]))},i(t){o||(Y(s,t),o=!0)},o(t){G(s,t),o=!1},d(n){n&&x(e),s&&s.d(n),t[22](null),l=!1,i()}}}function et(t){let e,r,o,l,i,c,u;const s=[it,lt],f=[];function a(t,n){return t[1]?0:1}r=a(t),o=f[r]=s[r](t);let h=[t[9],{class:t[7]},{disabled:t[2]},{href:t[3]},{"aria-label":l=t[8]||t[6]},{style:t[4]}],p={};for(let t=0;t<h.length;t+=1)p=n(p,h[t]);return{c(){e=d("a"),o.c(),S(e,p)},m(n,o){J(n,e,o),f[r].m(e,null),t[21](e),i=!0,c||(u=j(e,"click",t[19]),c=!0)},p(t,n){let c=r;r=a(t),r===c?f[r].p(t,n):(M(),G(f[c],1,1,(()=>{f[c]=null})),X(),o=f[r],o?o.p(t,n):(o=f[r]=s[r](t),o.c()),Y(o,1),o.m(e,null)),S(e,p=F(h,[512&n&&t[9],(!i||128&n)&&{class:t[7]},(!i||4&n)&&{disabled:t[2]},(!i||8&n)&&{href:t[3]},(!i||320&n&&l!==(l=t[8]||t[6]))&&{"aria-label":l},(!i||16&n)&&{style:t[4]}]))},i(t){i||(Y(o),i=!0)},o(t){G(o),i=!1},d(n){n&&x(e),f[r].d(),t[21](null),c=!1,u()}}}function rt(t){let n;const e=t[18].default,r=f(e,t,t[17],null);return{c(){r&&r.c()},m(t,e){r&&r.m(t,e),n=!0},p(t,o){r&&r.p&&(!n||131072&o)&&p(r,e,t,t[17],n?h(e,t[17],o,null):A(t[17]),null)},i(t){n||(Y(r,t),n=!0)},o(t){G(r,t),n=!1},d(t){r&&r.d(t)}}}function ot(n){let e;return{c(){e=g(n[1])},m(t,n){J(t,e,n)},p(t,n){2&n&&w(e,t[1])},i:t,o:t,d(t){t&&x(e)}}}function lt(t){let n;const e=t[18].default,r=f(e,t,t[17],null);return{c(){r&&r.c()},m(t,e){r&&r.m(t,e),n=!0},p(t,o){r&&r.p&&(!n||131072&o)&&p(r,e,t,t[17],n?h(e,t[17],o,null):A(t[17]),null)},i(t){n||(Y(r,t),n=!0)},o(t){G(r,t),n=!1},d(t){r&&r.d(t)}}}function it(n){let e;return{c(){e=g(n[1])},m(t,n){J(t,e,n)},p(t,n){2&n&&w(e,t[1])},i:t,o:t,d(t){t&&x(e)}}}function ct(t){let n,e,r,o;const l=[et,nt],i=[];function c(t,n){return t[3]?0:1}return n=c(t),e=i[n]=l[n](t),{c(){e.c(),r=Q()},m(t,e){i[n].m(t,e),J(t,r,e),o=!0},p(t,[o]){let u=n;n=c(t),n===u?i[n].p(t,o):(M(),G(i[u],1,1,(()=>{i[u]=null})),X(),e=i[n],e?e.p(t,o):(e=i[n]=l[n](t),e.c()),Y(e,1),e.m(r.parentNode,r))},i(t){o||(Y(e),o=!0)},o(t){G(e),o=!1},d(t){i[n].d(t),t&&x(r)}}}function ut(t,e,r){let o,l,i;const c=["class","active","block","children","close","color","disabled","href","inner","outline","size","style","value"];let u=Z(e,c),{$$slots:s={},$$scope:f}=e,{class:a=""}=e,{active:h=!1}=e,{block:p=!1}=e,{children:A}=e,{close:b=!1}=e,{color:J="secondary"}=e,{disabled:x=!1}=e,{href:d=""}=e,{inner:g}=e,{outline:k=!1}=e,{size:Q=null}=e,{style:j=""}=e,{value:m=""}=e;return t.$$set=t=>{r(23,e=n(n({},e),B(t))),r(9,u=Z(e,c)),"class"in t&&r(10,a=t.class),"active"in t&&r(11,h=t.active),"block"in t&&r(12,p=t.block),"children"in t&&r(1,A=t.children),"close"in t&&r(13,b=t.close),"color"in t&&r(14,J=t.color),"disabled"in t&&r(2,x=t.disabled),"href"in t&&r(3,d=t.href),"inner"in t&&r(0,g=t.inner),"outline"in t&&r(15,k=t.outline),"size"in t&&r(16,Q=t.size),"style"in t&&r(4,j=t.style),"value"in t&&r(5,m=t.value),"$$scope"in t&&r(17,f=t.$$scope)},t.$$.update=()=>{r(8,o=e["aria-label"]),130048&t.$$.dirty&&r(7,l=function(...t){return t.map(tt).filter(Boolean).join(" ")}(a,b?"btn-close":"btn",b||`btn${k?"-outline":""}-${J}`,!!Q&&`btn-${Q}`,!!p&&"d-block w-100",{active:h})),8192&t.$$.dirty&&r(6,i=b?"Close":null)},e=B(e),[g,A,x,d,j,m,i,l,o,u,a,h,p,b,J,k,Q,f,s,function(n){H.call(this,t,n)},function(n){H.call(this,t,n)},function(t){O[t?"unshift":"push"]((()=>{g=t,r(0,g)}))},function(t){O[t?"unshift":"push"]((()=>{g=t,r(0,g)}))}]}class st extends V{constructor(t){super(),I(this,t,ut,ct,i,{class:10,active:11,block:12,children:1,close:13,color:14,disabled:2,href:3,inner:0,outline:15,size:16,style:4,value:5})}}function ft(t){let n;return{c(){n=d("a"),n.textContent="Instagram:bhupa_284",m(n,"href","https://www.instagram.com/bhupa_284/"),m(n,"target","_blank")},m(t,e){J(t,n,e)},d(t){t&&x(n)}}}function at(t){let n,e,r,o,l,i,c,u,f,a,h,p,A,B,Z,g,Q,j,S,w,C,H,T,O,K,z,q,E,N,U,D,W,L,v,P,M,X,F,_,I,V,tt,nt,et,rt,ot,lt,it,ct,ut;return X=new st({props:{style:"background-color:rgb(255, 189, 6);",$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){var t;n=d("title"),n.textContent="Bhupa",e=k(),r=d("body"),o=d("div"),o.innerHTML='<h1 align="center" style="padding: 50px; font-size: 60px;">ประวัติ</h1>',l=k(),i=d("p"),i.innerHTML="ผมชื่อ ภูผา บัวกิ่งทอง เกิดวันที่ 28 เมษายน 2548<br/>อายุ 16 ปี เรียนที่โรงเรียน ไตรพัฒน์ ชอบเรียนวิชาเกี่ยวกับการคำนวน<br/>\n\tไม่ชอบเรียนวิชาที่เกี่ยวกับศิลปะ",c=k(),u=d("img"),a=k(),h=d("img"),A=k(),B=d("div"),B.innerHTML='<h3 style="font-size: 200%; ">งานอดิเรก</h3>',Z=k(),g=d("h3"),g.textContent="๐เล่นบาสเก็ตบอล๐",Q=k(),j=d("h3"),j.textContent="๐เล่นปิงปอง๐",S=k(),w=d("h3"),w.textContent="๐เล่นเรือใบ๐",C=k(),H=d("h3"),H.textContent="๐เล่นกีต้าร์๐",T=k(),O=d("h3"),O.textContent="๐ชอบถ่ายรูป๐",K=k(),z=d("img"),E=k(),N=d("img"),D=k(),W=d("img"),v=k(),P=d("h4"),P.textContent="You can follow me here.",M=k(),(t=X.$$.fragment)&&t.c(),F=k(),_=d("div"),_.innerHTML='<h3 align="center" style="padding: 35px; font-size: 50px;">โรงเรียนไตรพัตน์</h3>',I=k(),V=d("img"),nt=k(),et=d("p"),et.innerHTML="โรงเรียนไตรพัตน์เป็นการศึกษาแนววอลดอร์ฟ ประวัติการศึกษาวอลดอร์ฟ<br/>\n        ปี คศ.1919 รูดอล์ฟ สไตเนอร์ นักปรัชญาชาวออสเตรีย ได้กล่าวบรรยายเรื่องการศึกษากับคนงานของโรงงานยาสูบ<br/>\n        วอลดอร์ฟ-แอสโทเรีย ในเมืองสตุทการ์ท (Stuttgart) ทางใต้ของเยอรมนี จากบทบรรยายได้สร้างความประทับใจ<br/>\n        ให้กับเหล่าคนงาน จนทำให้ในเดือนกันยายนปีนั้น โรงเรียนวอลดอร์ฟแห่งแรกซึ่งไม่เก็บค่าเล่าเรียนได้กำเนิดขึ้น<br/>\n        พร้อมนักเรียน 300 คน ใน 8 ชั้นเรียน ปัจจุบันนี้มีโรงเรียนสไตเนอร์ หรือ วอลดอร์ฟกว่า 1,000 แห่งทั่วโลก<br/>\n        สไตเนอร์ได้ให้ภาพอุดมคติของเขาเกี่ยวกับการศึกษาที่เปิดกว้างสำหรับทุกคนในสังคม ความจำเป็นของการพัฒนา<br/>\n\t\tความเป็นมนุษย์ คือ การพัฒนาทั้งทางร่างกาย อารมณ์ สติปัญญาและจิตวิญญาณซึ่งทั้งหมดนี้คือพื้นฐานของศิลปะ<br/>\n\t\tในการให้การศึกษาหลักสูตรการเรียนการสอนได้ถูกออกแบบให้ตรงกับความต้องการของเด็กในแต่ละช่วงวัยเพื่อตอบสนองพัฒนาการ<br/>\n        ของเขา ครูมีอิสระในการทำงานภายใต้แนวทางนี้ที่จะนำ เสนอวิธีการสอนโดยใช้สื่อการสอนในรูปแบบของตัวเอง<br/>\n        เพื่อตอบสนองเป้าหมายที่กระตุ้นให้เด็กเกิดความกระตือ- รือร้นในการเรียน ส่งเสริมให้เขาค้นพบและเรียนรู้ด้วยตัว เองและด้วยวิธีการนี้เด็กๆ<br/>\n\t\tจะได้รับการศึกษาผ่าน มือ หัวใจ และสมอง (3 Hs = Hands, Heart, Head) ด้วยความสามารถจากการลงมือท<br/>\n        การสัมผัสด้วยใจ และการใช้ศักยภาพในการคิดงานหลักของโรงเรียนวอลดอร์ฟ คือ การเตรียมการศึกษาที่ดีที่สุดเท่าที่จะทำได้ให้แก่นักเรียน<br/>\n\t\tไม่เพียงแค่เพื่อให้นักเรียนได้รับความรู้ แต่มีอิสระจากภายใน มีความมั่นคง และเป็นผู้ใหญ่ที่มีความสร้างสรรค์",rt=k(),ot=d("img"),it=k(),ct=d("div"),ct.innerHTML='<h5 style="padding: 15px; font-size: 30px;">รูดอล์ฟ สไตเนอร์ นักปรัชญาชาวออสเตรีย</h5>',y(o,"background-color","rgb(0, 162, 255)"),m(i,"align","center"),y(i,"font-size","30px"),s(u.src,f="https://lh3.googleusercontent.com/-pYl11WpbFyw/YLeAG0gO-NI/AAAAAAAAAsc/Uj29q8GO2Ncd1qLDR7SJXlBPaSjx7oz3ACEwYBhgLKtMDABHVOhzW6TrLUn7wCoXN-7Gvb03JOsDxIO3t7FUPUVYZD1bQPl9lt1jcsIJuWfO7uqUZubb1j61KtZ5S75fKeJTCcKW12BTpnW2YhKJLJ8BA0a79ZOZ7DGXhSSnrvOFHQZdrSJgXkrBf6JgrZ0tfOqlmlHa0iAPTePfGZAXjoiuowpWxH22fSOj0c0fZL0E9qWCBihPK3pSFnkUy33HZQ-NBoB6Ey8xdj_rQjZxOq-ekNlx1Q4HGuSMAxDmaRvRsXyCHglT95KWYjjwuvL-zrNcowMTw1GzN4pQ-rrczrhFPAuhQDVM4qf7s4GyYS2x45N7trBjrbQJ7QBBkRwFpt2x0rxk_H6agjrsaIyaE8dJ6hyr_Uz6AihZEHUHBknU7K2RXvfSJoijJ8mCi4jM8bN1h5kA6TAxSki4zCBqlRFQo0hGCZ5wASZIZl3IEfkLu0QKkWBReXkEmkzJTxS7KK7b-OF-f5njP7QMxEJAeONmeroyzJ4D2E6T4Rllq9x1Z0ENqUBuQrblUZbYJBL-zA5b7tLikitH3Bn6qcpTbH7p7ZnYDVF1XQT9efC93sunjivPnLUmycS1B6-QM7tiJNTo4hDO5Mp8qD0Ccw2pCr13BWZAw-bW1igY/w139-h140-p/20190320_163152.jpg")||m(u,"src","https://lh3.googleusercontent.com/-pYl11WpbFyw/YLeAG0gO-NI/AAAAAAAAAsc/Uj29q8GO2Ncd1qLDR7SJXlBPaSjx7oz3ACEwYBhgLKtMDABHVOhzW6TrLUn7wCoXN-7Gvb03JOsDxIO3t7FUPUVYZD1bQPl9lt1jcsIJuWfO7uqUZubb1j61KtZ5S75fKeJTCcKW12BTpnW2YhKJLJ8BA0a79ZOZ7DGXhSSnrvOFHQZdrSJgXkrBf6JgrZ0tfOqlmlHa0iAPTePfGZAXjoiuowpWxH22fSOj0c0fZL0E9qWCBihPK3pSFnkUy33HZQ-NBoB6Ey8xdj_rQjZxOq-ekNlx1Q4HGuSMAxDmaRvRsXyCHglT95KWYjjwuvL-zrNcowMTw1GzN4pQ-rrczrhFPAuhQDVM4qf7s4GyYS2x45N7trBjrbQJ7QBBkRwFpt2x0rxk_H6agjrsaIyaE8dJ6hyr_Uz6AihZEHUHBknU7K2RXvfSJoijJ8mCi4jM8bN1h5kA6TAxSki4zCBqlRFQo0hGCZ5wASZIZl3IEfkLu0QKkWBReXkEmkzJTxS7KK7b-OF-f5njP7QMxEJAeONmeroyzJ4D2E6T4Rllq9x1Z0ENqUBuQrblUZbYJBL-zA5b7tLikitH3Bn6qcpTbH7p7ZnYDVF1XQT9efC93sunjivPnLUmycS1B6-QM7tiJNTo4hDO5Mp8qD0Ccw2pCr13BWZAw-bW1igY/w139-h140-p/20190320_163152.jpg"),m(u,"alt",""),s(h.src,p="https://lh3.googleusercontent.com/-NwSwMB2BsN4/YLJCZXYZB3I/AAAAAAAAAqA/1jxVmhsXJPQzvGLVcaBYyzyRdC4crsVRQCEwYBhgLKtMDABHVOhzW6TrLUn7wCoXN-7Gvb03JOsDxIO3t7FUPUVYZD1bQPl9lt1jcsIJuWfO7uqUZubb1j61KtZ5S75fKeJTCcKW12BTpnW2YhKJLJ8BA0a79ZOZ7DGXhSSnrvOFHQZdrSJgXkrBf6JgrZ0tfOqlmlHa0iAPTePfGZAXjoiuowpWxH22fSOj0c0fZL0E9qWCBihPK3pSFnkUy33HZQ-NBoB6Ey8xdj_rQjZxOq-ekNlx1Q4HGuSMAxDmaRvRsXyCHglT95KWYjjwuvL-zrNcowMTw1GzN4pQ-rrczrhFPAuhQDVM4qf7s4GyYS2x45N7trBjrbQJ7QBBkRwFpt2x0rxk_H6agjrsaIyaE8dJ6hyr_Uz6AihZEHUHBknU7K2RXvfSJoijJ8mCi4jM8bN1h5kA6TAxSki4zCBqlRFQo0hGCZ5wASZIZl3IEfkLu0QKkWBReXkEmkzJTxS7KK7b-OF-f5njP7QMxEJAeONmeroyzJ4D2E6T4Rllq9x1Z0ENqUBuQrblUZbYJBL-zA5b7tLikitH3Bn6qcpTbH7p7ZnYDVF1XQT9efC93sunjivPnLUmycS1B6-QM7tiJNTo4hDO5Mp8qD0Ccw2pCr13BWZAw-bW1igY/w139-h140-p/DSC08152.JPG")||m(h,"src","https://lh3.googleusercontent.com/-NwSwMB2BsN4/YLJCZXYZB3I/AAAAAAAAAqA/1jxVmhsXJPQzvGLVcaBYyzyRdC4crsVRQCEwYBhgLKtMDABHVOhzW6TrLUn7wCoXN-7Gvb03JOsDxIO3t7FUPUVYZD1bQPl9lt1jcsIJuWfO7uqUZubb1j61KtZ5S75fKeJTCcKW12BTpnW2YhKJLJ8BA0a79ZOZ7DGXhSSnrvOFHQZdrSJgXkrBf6JgrZ0tfOqlmlHa0iAPTePfGZAXjoiuowpWxH22fSOj0c0fZL0E9qWCBihPK3pSFnkUy33HZQ-NBoB6Ey8xdj_rQjZxOq-ekNlx1Q4HGuSMAxDmaRvRsXyCHglT95KWYjjwuvL-zrNcowMTw1GzN4pQ-rrczrhFPAuhQDVM4qf7s4GyYS2x45N7trBjrbQJ7QBBkRwFpt2x0rxk_H6agjrsaIyaE8dJ6hyr_Uz6AihZEHUHBknU7K2RXvfSJoijJ8mCi4jM8bN1h5kA6TAxSki4zCBqlRFQo0hGCZ5wASZIZl3IEfkLu0QKkWBReXkEmkzJTxS7KK7b-OF-f5njP7QMxEJAeONmeroyzJ4D2E6T4Rllq9x1Z0ENqUBuQrblUZbYJBL-zA5b7tLikitH3Bn6qcpTbH7p7ZnYDVF1XQT9efC93sunjivPnLUmycS1B6-QM7tiJNTo4hDO5Mp8qD0Ccw2pCr13BWZAw-bW1igY/w139-h140-p/DSC08152.JPG"),m(h,"alt",""),y(B,"background-color","rgb(255, 127, 127)"),m(g,"align","center"),y(g,"font-size","150%"),m(j,"align","center"),y(j,"font-size","150%"),m(w,"align","center"),y(w,"font-size","150%"),m(H,"align","center"),y(H,"font-size","150%"),m(O,"align","center"),y(O,"font-size","150%"),s(z.src,q="https://lh3.googleusercontent.com/-dX2ZTWfkBws/X9WCw4OtQMI/AAAAAAAAAgM/Cgbu_JKVHTYMhkwC8utNYxE9v6lov1XkACEwYBhgLKtMDABHVOhzW6TrLUn7wCoXN-7Gvb03JOsDxIO3t7FUPUVYZD1bQPl9lt1jcsIJuWfO7uqUZubb1j61KtZ5S75fKeJTCcKW12BTpnW2YhKJLJ8BA0a79ZOZ7DGXhSSnrvOFHQZdrSJgXkrBf6JgrZ0tfOqlmlHa0iAPTePfGZAXjoiuowpWxH22fSOj0c0fZL0E9qWCBihPK3pSFnkUy33HZQ-NBoB6Ey8xdj_rQjZxOq-ekNlx1Q4HGuSMAxDmaRvRsXyCHglT95KWYjjwuvL-zrNcowMTw1GzN4pQ-rrczrhFPAuhQDVM4qf7s4GyYS2x45N7trBjrbQJ7QBBkRwFpt2x0rxk_H6agjrsaIyaE8dJ6hyr_Uz6AihZEHUHBknU7K2RXvfSJoijJ8mCi4jM8bN1h5kA6TAxSki4zCBqlRFQo0hGCZ5wASZIZl3IEfkLu0QKkWBReXkEmkzJTxS7KK7b-OF-f5njP7QMxEJAeONmeroyzJ4D2E6T4Rllq9x1Z0ENqUBuQrblUZbYJBL-zA5b7tLikitH3Bn6qcpTbH7p7ZnYDVF1XQT9efC93sunjivPnLUmycS1B6-QM7tiJNTo4hDO5Mp8qD0Ccw2pCr13BWZAw-bW1igY/w140-h140-p/DSC06979.JPG")||m(z,"src","https://lh3.googleusercontent.com/-dX2ZTWfkBws/X9WCw4OtQMI/AAAAAAAAAgM/Cgbu_JKVHTYMhkwC8utNYxE9v6lov1XkACEwYBhgLKtMDABHVOhzW6TrLUn7wCoXN-7Gvb03JOsDxIO3t7FUPUVYZD1bQPl9lt1jcsIJuWfO7uqUZubb1j61KtZ5S75fKeJTCcKW12BTpnW2YhKJLJ8BA0a79ZOZ7DGXhSSnrvOFHQZdrSJgXkrBf6JgrZ0tfOqlmlHa0iAPTePfGZAXjoiuowpWxH22fSOj0c0fZL0E9qWCBihPK3pSFnkUy33HZQ-NBoB6Ey8xdj_rQjZxOq-ekNlx1Q4HGuSMAxDmaRvRsXyCHglT95KWYjjwuvL-zrNcowMTw1GzN4pQ-rrczrhFPAuhQDVM4qf7s4GyYS2x45N7trBjrbQJ7QBBkRwFpt2x0rxk_H6agjrsaIyaE8dJ6hyr_Uz6AihZEHUHBknU7K2RXvfSJoijJ8mCi4jM8bN1h5kA6TAxSki4zCBqlRFQo0hGCZ5wASZIZl3IEfkLu0QKkWBReXkEmkzJTxS7KK7b-OF-f5njP7QMxEJAeONmeroyzJ4D2E6T4Rllq9x1Z0ENqUBuQrblUZbYJBL-zA5b7tLikitH3Bn6qcpTbH7p7ZnYDVF1XQT9efC93sunjivPnLUmycS1B6-QM7tiJNTo4hDO5Mp8qD0Ccw2pCr13BWZAw-bW1igY/w140-h140-p/DSC06979.JPG"),m(z,"alt",""),s(N.src,U="https://lh3.googleusercontent.com/-9QGH50_U92A/X4RS3-Z2GoI/AAAAAAAAAZQ/wE3MPKJ5rhkwZq3_Rnpq2VnQzI67ldezwCEwYBhgLKtMDABHVOhzW6TrLUn7wCoXN-7Gvb03JOsDxIO3t7FUPUVYZD1bQPl9lt1jcsIJuWfO7uqUZubb1j61KtZ5S75fKeJTCcKW12BTpnW2YhKJLJ8BA0a79ZOZ7DGXhSSnrvOFHQZdrSJgXkrBf6JgrZ0tfOqlmlHa0iAPTePfGZAXjoiuowpWxH22fSOj0c0fZL0E9qWCBihPK3pSFnkUy33HZQ-NBoB6Ey8xdj_rQjZxOq-ekNlx1Q4HGuSMAxDmaRvRsXyCHglT95KWYjjwuvL-zrNcowMTw1GzN4pQ-rrczrhFPAuhQDVM4qf7s4GyYS2x45N7trBjrbQJ7QBBkRwFpt2x0rxk_H6agjrsaIyaE8dJ6hyr_Uz6AihZEHUHBknU7K2RXvfSJoijJ8mCi4jM8bN1h5kA6TAxSki4zCBqlRFQo0hGCZ5wASZIZl3IEfkLu0QKkWBReXkEmkzJTxS7KK7b-OF-f5njP7QMxEJAeONmeroyzJ4D2E6T4Rllq9x1Z0ENqUBuQrblUZbYJBL-zA5b7tLikitH3Bn6qcpTbH7p7ZnYDVF1XQT9efC93sunjivPnLUmycS1B6-QM7tiJNTo4hDO5Mp8qD0Ccw2pCr13BWZAw-bW1igY/w140-h140-p/DSC07339.JPG")||m(N,"src","https://lh3.googleusercontent.com/-9QGH50_U92A/X4RS3-Z2GoI/AAAAAAAAAZQ/wE3MPKJ5rhkwZq3_Rnpq2VnQzI67ldezwCEwYBhgLKtMDABHVOhzW6TrLUn7wCoXN-7Gvb03JOsDxIO3t7FUPUVYZD1bQPl9lt1jcsIJuWfO7uqUZubb1j61KtZ5S75fKeJTCcKW12BTpnW2YhKJLJ8BA0a79ZOZ7DGXhSSnrvOFHQZdrSJgXkrBf6JgrZ0tfOqlmlHa0iAPTePfGZAXjoiuowpWxH22fSOj0c0fZL0E9qWCBihPK3pSFnkUy33HZQ-NBoB6Ey8xdj_rQjZxOq-ekNlx1Q4HGuSMAxDmaRvRsXyCHglT95KWYjjwuvL-zrNcowMTw1GzN4pQ-rrczrhFPAuhQDVM4qf7s4GyYS2x45N7trBjrbQJ7QBBkRwFpt2x0rxk_H6agjrsaIyaE8dJ6hyr_Uz6AihZEHUHBknU7K2RXvfSJoijJ8mCi4jM8bN1h5kA6TAxSki4zCBqlRFQo0hGCZ5wASZIZl3IEfkLu0QKkWBReXkEmkzJTxS7KK7b-OF-f5njP7QMxEJAeONmeroyzJ4D2E6T4Rllq9x1Z0ENqUBuQrblUZbYJBL-zA5b7tLikitH3Bn6qcpTbH7p7ZnYDVF1XQT9efC93sunjivPnLUmycS1B6-QM7tiJNTo4hDO5Mp8qD0Ccw2pCr13BWZAw-bW1igY/w140-h140-p/DSC07339.JPG"),m(N,"alt",""),s(W.src,L="https://lh3.googleusercontent.com/-JyQKyaWhIEs/X9i0-mhrSpI/AAAAAAAAAi8/41P8mKh3Z9ss0y4HJ9TMm1F9Idj0yZKrACEwYBhgLKtMDABHVOhzW6TrLUn7wCoXN-7Gvb03JOsDxIO3t7FUPUVYZD1bQPl9lt1jcsIJuWfO7uqUZubb1j61KtZ5S75fKeJTCcKW12BTpnW2YhKJLJ8BA0a79ZOZ7DGXhSSnrvOFHQZdrSJgXkrBf6JgrZ0tfOqlmlHa0iAPTePfGZAXjoiuowpWxH22fSOj0c0fZL0E9qWCBihPK3pSFnkUy33HZQ-NBoB6Ey8xdj_rQjZxOq-ekNlx1Q4HGuSMAxDmaRvRsXyCHglT95KWYjjwuvL-zrNcowMTw1GzN4pQ-rrczrhFPAuhQDVM4qf7s4GyYS2x45N7trBjrbQJ7QBBkRwFpt2x0rxk_H6agjrsaIyaE8dJ6hyr_Uz6AihZEHUHBknU7K2RXvfSJoijJ8mCi4jM8bN1h5kA6TAxSki4zCBqlRFQo0hGCZ5wASZIZl3IEfkLu0QKkWBReXkEmkzJTxS7KK7b-OF-f5njP7QMxEJAeONmeroyzJ4D2E6T4Rllq9x1Z0ENqUBuQrblUZbYJBL-zA5b7tLikitH3Bn6qcpTbH7p7ZnYDVF1XQT9efC93sunjivPnLUmycS1B6-QM7tiJNTo4hDO5Mp8qD0Ccw2pCr13BWZAw-bW1igY/w140-h140-p/DSC07480.JPG")||m(W,"src","https://lh3.googleusercontent.com/-JyQKyaWhIEs/X9i0-mhrSpI/AAAAAAAAAi8/41P8mKh3Z9ss0y4HJ9TMm1F9Idj0yZKrACEwYBhgLKtMDABHVOhzW6TrLUn7wCoXN-7Gvb03JOsDxIO3t7FUPUVYZD1bQPl9lt1jcsIJuWfO7uqUZubb1j61KtZ5S75fKeJTCcKW12BTpnW2YhKJLJ8BA0a79ZOZ7DGXhSSnrvOFHQZdrSJgXkrBf6JgrZ0tfOqlmlHa0iAPTePfGZAXjoiuowpWxH22fSOj0c0fZL0E9qWCBihPK3pSFnkUy33HZQ-NBoB6Ey8xdj_rQjZxOq-ekNlx1Q4HGuSMAxDmaRvRsXyCHglT95KWYjjwuvL-zrNcowMTw1GzN4pQ-rrczrhFPAuhQDVM4qf7s4GyYS2x45N7trBjrbQJ7QBBkRwFpt2x0rxk_H6agjrsaIyaE8dJ6hyr_Uz6AihZEHUHBknU7K2RXvfSJoijJ8mCi4jM8bN1h5kA6TAxSki4zCBqlRFQo0hGCZ5wASZIZl3IEfkLu0QKkWBReXkEmkzJTxS7KK7b-OF-f5njP7QMxEJAeONmeroyzJ4D2E6T4Rllq9x1Z0ENqUBuQrblUZbYJBL-zA5b7tLikitH3Bn6qcpTbH7p7ZnYDVF1XQT9efC93sunjivPnLUmycS1B6-QM7tiJNTo4hDO5Mp8qD0Ccw2pCr13BWZAw-bW1igY/w140-h140-p/DSC07480.JPG"),m(W,"alt",""),m(P,"align","center"),y(P,"font-size","30px"),y(_,"background-color","cornflowerblue"),s(V.src,tt="http://www.tripatschool.ac.th/images/logo.png")||m(V,"src","http://www.tripatschool.ac.th/images/logo.png"),m(V,"alt",""),y(et,"font-size","25px"),s(ot.src,lt="https://resources.finalsite.net/images/f_auto,q_auto/v1531934574/waldorfeducationorg/kqpokjevu4emzypnexx2/RS_Portrait38884.jpg")||m(ot,"src","https://resources.finalsite.net/images/f_auto,q_auto/v1531934574/waldorfeducationorg/kqpokjevu4emzypnexx2/RS_Portrait38884.jpg"),m(ot,"alt",""),y(ct,"background-color","rgb(275, 127, 103)"),m(r,"align","center"),y(r,"background-color","aquamarine")},m(t,s){J(t,n,s),J(t,e,s),J(t,r,s),b(r,o),b(r,l),b(r,i),b(r,c),b(r,u),b(r,a),b(r,h),b(r,A),b(r,B),b(r,Z),b(r,g),b(r,Q),b(r,j),b(r,S),b(r,w),b(r,C),b(r,H),b(r,T),b(r,O),b(r,K),b(r,z),b(r,E),b(r,N),b(r,D),b(r,W),b(r,v),b(r,P),b(r,M),R(X,r,null),b(r,F),b(r,_),b(r,I),b(r,V),b(r,nt),b(r,et),b(r,rt),b(r,ot),b(r,it),b(r,ct),ut=!0},p(t,[n]){const e={};1&n&&(e.$$scope={dirty:n,ctx:t}),X.$set(e)},i(t){ut||(Y(X.$$.fragment,t),ut=!0)},o(t){G(X.$$.fragment,t),ut=!1},d(t){t&&x(n),t&&x(e),t&&x(r),$(X)}}}return new class extends V{constructor(t){super(),I(this,t,null,at,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
