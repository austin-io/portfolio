import{s as B,c as S,u as O,g as M,d as W,i as R,f as T,n as q}from"../chunks/scheduler.5d354e4a.js";import{S as V,i as I,g as v,h as A,j as z,f,k as g,a as C,y as U,d as $,t as F,r as w,s as E,u as y,c as D,x as b,v as k,w as Y,m as X,n as G,l as N,z as Q,o as P,A as Z,B as J}from"../chunks/index.66a7d151.js";function H(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function K(l){let e,t,s,r;const i=l[2].default,n=S(i,l,l[1],null);return{c(){e=v("button"),n&&n.c(),this.h()},l(a){e=A(a,"BUTTON",{class:!0});var o=z(e);n&&n.l(o),o.forEach(f),this.h()},h(){g(e,"class","svelte-1i762af")},m(a,o){C(a,e,o),n&&n.m(e,null),t=!0,s||(r=U(e,"click",function(){R(l[0])&&l[0].apply(this,arguments)}),s=!0)},p(a,[o]){l=a,n&&n.p&&(!t||o&2)&&O(n,i,l,l[1],t?W(i,l[1],o,null):M(l[1]),null)},i(a){t||($(n,a),t=!0)},o(a){F(n,a),t=!1},d(a){a&&f(e),n&&n.d(a),s=!1,r()}}}function ee(l,e,t){let{$$slots:s={},$$scope:r}=e,{onClick:i}=e;return l.$$set=n=>{"onClick"in n&&t(0,i=n.onClick),"$$scope"in n&&t(1,r=n.$$scope)},[i,r,s]}class j extends V{constructor(e){super(),I(this,e,ee,K,B,{onClick:0})}}function te(l){let e;return{c(){e=X("Nav")},l(t){e=G(t,"Nav")},m(t,s){C(t,e,s)},d(t){t&&f(e)}}}function ne(l){let e;return{c(){e=X("Menu")},l(t){e=G(t,"Menu")},m(t,s){C(t,e,s)},d(t){t&&f(e)}}}function se(l){let e,t,s,r,i,n;return s=new j({props:{$$slots:{default:[te]},$$scope:{ctx:l}}}),i=new j({props:{$$slots:{default:[ne]},$$scope:{ctx:l}}}),{c(){e=v("nav"),t=v("section"),w(s.$$.fragment),r=E(),w(i.$$.fragment),this.h()},l(a){e=A(a,"NAV",{class:!0});var o=z(e);t=A(o,"SECTION",{class:!0});var h=z(t);y(s.$$.fragment,h),r=D(h),y(i.$$.fragment,h),h.forEach(f),o.forEach(f),this.h()},h(){g(t,"class","center p1 svelte-1bfq65o"),g(e,"class","p1 nav svelte-1bfq65o")},m(a,o){C(a,e,o),b(e,t),k(s,t,null),b(t,r),k(i,t,null),n=!0},p(a,[o]){const h={};o&1&&(h.$$scope={dirty:o,ctx:a}),s.$set(h);const c={};o&1&&(c.$$scope={dirty:o,ctx:a}),i.$set(c)},i(a){n||($(s.$$.fragment,a),$(i.$$.fragment,a),n=!0)},o(a){F(s.$$.fragment,a),F(i.$$.fragment,a),n=!1},d(a){a&&f(e),Y(s),Y(i)}}}class le extends V{constructor(e){super(),I(this,e,null,se,B,{})}}function re(l){let e,t,s,r;const i=l[4].default,n=S(i,l,l[3],null);return{c(){e=v("button"),n&&n.c(),this.h()},l(a){e=A(a,"BUTTON",{style:!0,class:!0});var o=z(e);n&&n.l(o),o.forEach(f),this.h()},h(){N(e,"--bgColor",l[1]),N(e,"--fs",l[2]+"em"),g(e,"class","svelte-qi3tyh")},m(a,o){C(a,e,o),n&&n.m(e,null),t=!0,s||(r=U(e,"click",function(){R(l[0])&&l[0].apply(this,arguments)}),s=!0)},p(a,[o]){l=a,n&&n.p&&(!t||o&8)&&O(n,i,l,l[3],t?W(i,l[3],o,null):M(l[3]),null),(!t||o&2)&&N(e,"--bgColor",l[1]),(!t||o&4)&&N(e,"--fs",l[2]+"em")},i(a){t||($(n,a),t=!0)},o(a){F(n,a),t=!1},d(a){a&&f(e),n&&n.d(a),s=!1,r()}}}function ae(l,e,t){let{$$slots:s={},$$scope:r}=e,{onClick:i}=e,{bgColor:n="#4400ff"}=e,{size:a=1}=e;return l.$$set=o=>{"onClick"in o&&t(0,i=o.onClick),"bgColor"in o&&t(1,n=o.bgColor),"size"in o&&t(2,a=o.size),"$$scope"in o&&t(3,r=o.$$scope)},[i,n,a,r,s]}class oe extends V{constructor(e){super(),I(this,e,ae,re,B,{onClick:0,bgColor:1,size:2})}}function ie(l){let e=l[0]?"Hide Video":"Play Video",t;return{c(){t=X(e)},l(s){t=G(s,e)},m(s,r){C(s,t,r)},p(s,r){r&1&&e!==(e=s[0]?"Hide Video":"Play Video")&&P(t,e)},d(s){s&&f(t)}}}function ce(l){let e,t,s,r;return{c(){e=v("img"),this.h()},l(i){e=A(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){g(e,"class","mb1 visual svelte-u0cds6"),T(e.src,t="https://media0.giphy.com/media/l1BgTjrfQE3VoQQvK/giphy.gif?cid=ecf05e470s17w987do32g38ms11hgs7prl241p44s5bzpjvp&ep=v1_gifs_related&rid=giphy.gif&ct=g")||g(e,"src",t),g(e,"alt","vr placeholder")},m(i,n){C(i,e,n),s||(r=U(e,"click",l[2]),s=!0)},p:q,d(i){i&&f(e),s=!1,r()}}}function fe(l){let e,t;return{c(){e=v("iframe"),this.h()},l(s){e=A(s,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),z(e).forEach(f),this.h()},h(){g(e,"class","mb1 visual svelte-u0cds6"),T(e.src,t="https://www.youtube-nocookie.com/embed/iTtit7Rj5vY?controls=0")||g(e,"src",t),g(e,"title","YouTube video player"),g(e,"frameborder","0"),g(e,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),e.allowFullscreen=!0},m(s,r){C(s,e,r)},p:q,d(s){s&&f(e)}}}function ue(l){let e,t,s='Explore a new <span class="grad svelte-u0cds6">Reality.</span>',r,i,n,a,o;n=new oe({props:{size:1.2,bgColor:"#8800ff",onClick:l[1],$$slots:{default:[ie]},$$scope:{ctx:l}}});function h(d,p){return d[0]?fe:ce}let c=h(l),m=c(l);return{c(){e=v("section"),t=v("h1"),t.innerHTML=s,r=E(),i=v("div"),w(n.$$.fragment),a=E(),m.c(),this.h()},l(d){e=A(d,"SECTION",{class:!0});var p=z(e);t=A(p,"H1",{class:!0,["data-svelte-h"]:!0}),Q(t)!=="svelte-15v1cew"&&(t.innerHTML=s),r=D(p),i=A(p,"DIV",{class:!0});var u=z(i);y(n.$$.fragment,u),u.forEach(f),a=D(p),m.l(p),p.forEach(f),this.h()},h(){g(t,"class","py2 svelte-u0cds6"),g(i,"class","mb1 btnHolder svelte-u0cds6"),g(e,"class","svelte-u0cds6")},m(d,p){C(d,e,p),b(e,t),b(e,r),b(e,i),k(n,i,null),b(e,a),m.m(e,null),o=!0},p(d,[p]){const u={};p&1&&(u.onClick=d[1]),p&9&&(u.$$scope={dirty:p,ctx:d}),n.$set(u),c===(c=h(d))&&m?m.p(d,p):(m.d(1),m=c(d),m&&(m.c(),m.m(e,null)))},i(d){o||($(n.$$.fragment,d),o=!0)},o(d){F(n.$$.fragment,d),o=!1},d(d){d&&f(e),Y(n),m.d()}}}function me(l,e,t){let s=!1;return[s,()=>{t(0,s=!s)},()=>{t(0,s=!0)}]}class de extends V{constructor(e){super(),I(this,e,me,ue,B,{})}}const ge=""+new URL("../assets/alcon_logo.d86d00f8.png",import.meta.url).href,he=""+new URL("../assets/abbott_logo.43430082.png",import.meta.url).href,pe="data:image/png;base64,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",ve=""+new URL("../assets/smith_nephew_logo.b518d159.png",import.meta.url).href;function L(l,e,t){const s=l.slice();return s[1]=e[t],s}function x(l){let e,t,s,r,i;return{c(){e=v("div"),t=v("a"),s=v("img"),i=E(),this.h()},l(n){e=A(n,"DIV",{class:!0});var a=z(e);t=A(a,"A",{href:!0});var o=z(t);s=A(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(f),i=D(a),a.forEach(f),this.h()},h(){T(s.src,r=l[1].img)||g(s,"src",r),g(s,"alt",l[1].name),g(s,"class","svelte-1vavy3p"),g(t,"href",l[1].link),g(e,"class","svelte-1vavy3p")},m(n,a){C(n,e,a),b(e,t),b(t,s),b(e,i)},p:q,d(n){n&&f(e)}}}function Ae(l){let e,t=H(l[0]),s=[];for(let r=0;r<t.length;r+=1)s[r]=x(L(l,t,r));return{c(){e=v("section");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=A(r,"SECTION",{class:!0});var i=z(e);for(let n=0;n<s.length;n+=1)s[n].l(i);i.forEach(f),this.h()},h(){g(e,"class","svelte-1vavy3p")},m(r,i){C(r,e,i);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(e,null)},p(r,[i]){if(i&1){t=H(r[0]);let n;for(n=0;n<t.length;n+=1){const a=L(r,t,n);s[n]?s[n].p(a,i):(s[n]=x(a),s[n].c(),s[n].m(e,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=t.length}},i:q,o:q,d(r){r&&f(e),Z(s,r)}}}function Ce(l){return[[{name:"Alcon",link:"https://www.alcon.com/",img:ge},{name:"Abbott",link:"https://www.abbott.com/",img:he},{name:"Elara Systems",link:"https://elarasystems.com/",img:pe},{name:"Smith and Nephew",link:"https://www.smith-nephew.com/en-us",img:ve}]]}class be extends V{constructor(e){super(),I(this,e,Ce,Ae,B,{})}}class _e extends V{constructor(e){super(),I(this,e,null,null,B,{})}}class $e extends V{constructor(e){super(),I(this,e,null,null,B,{})}}class Fe extends V{constructor(e){super(),I(this,e,null,null,B,{})}}class we extends V{constructor(e){super(),I(this,e,null,null,B,{})}}function ye(l){let e,t,s,r,i,n,a,o,h,c,m,d,p;return t=new de({}),r=new be({}),n=new _e({}),o=new $e({}),c=new Fe({}),d=new we({}),{c(){e=v("main"),w(t.$$.fragment),s=E(),w(r.$$.fragment),i=E(),w(n.$$.fragment),a=E(),w(o.$$.fragment),h=E(),w(c.$$.fragment),m=E(),w(d.$$.fragment),this.h()},l(u){e=A(u,"MAIN",{class:!0});var _=z(e);y(t.$$.fragment,_),s=D(_),y(r.$$.fragment,_),i=D(_),y(n.$$.fragment,_),a=D(_),y(o.$$.fragment,_),h=D(_),y(c.$$.fragment,_),m=D(_),y(d.$$.fragment,_),_.forEach(f),this.h()},h(){g(e,"class","center px2 main svelte-1p96qa3")},m(u,_){C(u,e,_),k(t,e,null),b(e,s),k(r,e,null),b(e,i),k(n,e,null),b(e,a),k(o,e,null),b(e,h),k(c,e,null),b(e,m),k(d,e,null),p=!0},p:q,i(u){p||($(t.$$.fragment,u),$(r.$$.fragment,u),$(n.$$.fragment,u),$(o.$$.fragment,u),$(c.$$.fragment,u),$(d.$$.fragment,u),p=!0)},o(u){F(t.$$.fragment,u),F(r.$$.fragment,u),F(n.$$.fragment,u),F(o.$$.fragment,u),F(c.$$.fragment,u),F(d.$$.fragment,u),p=!1},d(u){u&&f(e),Y(t),Y(r),Y(n),Y(o),Y(c),Y(d)}}}class ke extends V{constructor(e){super(),I(this,e,null,ye,B,{})}}function Ye(l){let e,t="Footer";return{c(){e=v("footer"),e.textContent=t,this.h()},l(s){e=A(s,"FOOTER",{class:!0,["data-svelte-h"]:!0}),Q(e)!=="svelte-15mr4ke"&&(e.textContent=t),this.h()},h(){g(e,"class","px2 py1 center footer svelte-5s0nni")},m(s,r){C(s,e,r)},p:q,i:q,o:q,d(s){s&&f(e)}}}class Ee extends V{constructor(e){super(),I(this,e,null,Ye,B,{})}}function De(l){let e,t=`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap');

        *, *::before, *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        img, picture, video, svg {
            width: 100%;
            display: block;
        }
        
        body {
            width: 100%;
            min-height: 100svh;
            display: grid;
            grid-template-rows: 1fr auto;
            font-family: 'Poppins', sans-serif;
            background-color: white;
        }

        .center {
            width: 100%;
            max-width: 1280px;
            margin-inline: auto;
        }

        .p1 {
            padding: 1rem;
        }

        .px1 {
            padding-right: 1rem;
            padding-left: 1rem;
        }

        .py1 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .px2 {
            padding-right: 2rem;
            padding-left: 2rem;
        }

        .py2 {
            padding-top: 2rem;
            padding-bottom: 2rem;
        }

        .mb1 {
            margin-bottom: 1rem;
        }`,s,r,i,n,a,o,h;return r=new le({}),n=new ke({}),o=new Ee({}),{c(){e=v("style"),e.textContent=t,s=E(),w(r.$$.fragment),i=E(),w(n.$$.fragment),a=E(),w(o.$$.fragment)},l(c){const m=J("svelte-gokujt",document.head);e=A(m,"STYLE",{["data-svelte-h"]:!0}),Q(e)!=="svelte-1fufyow"&&(e.textContent=t),m.forEach(f),s=D(c),y(r.$$.fragment,c),i=D(c),y(n.$$.fragment,c),a=D(c),y(o.$$.fragment,c)},m(c,m){b(document.head,e),C(c,s,m),k(r,c,m),C(c,i,m),k(n,c,m),C(c,a,m),k(o,c,m),h=!0},p:q,i(c){h||($(r.$$.fragment,c),$(n.$$.fragment,c),$(o.$$.fragment,c),h=!0)},o(c){F(r.$$.fragment,c),F(n.$$.fragment,c),F(o.$$.fragment,c),h=!1},d(c){c&&(f(s),f(i),f(a)),f(e),Y(r,c),Y(n,c),Y(o,c)}}}class Ie extends V{constructor(e){super(),I(this,e,null,De,B,{})}}export{Ie as component};