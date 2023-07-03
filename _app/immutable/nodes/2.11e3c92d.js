import{s as M,c as S,u as A,g as R,d as L,i as Q,f as Y,n as C}from"../chunks/scheduler.5d354e4a.js";import{S as z,i as H,g as h,h as $,j as y,f,k as _,a as g,y as F,d as v,t as b,r as k,s as x,u as E,c as B,x as w,v as T,w as N,m as I,n as O,l as q,z as j,o as U,A as D}from"../chunks/index.478c962e.js";function G(l){let e,t,n,o;const i=l[2].default,s=S(i,l,l[1],null);return{c(){e=h("button"),s&&s.c(),this.h()},l(r){e=$(r,"BUTTON",{class:!0});var a=y(e);s&&s.l(a),a.forEach(f),this.h()},h(){_(e,"class","svelte-1i762af")},m(r,a){g(r,e,a),s&&s.m(e,null),t=!0,n||(o=F(e,"click",function(){Q(l[0])&&l[0].apply(this,arguments)}),n=!0)},p(r,[a]){l=r,s&&s.p&&(!t||a&2)&&A(s,i,l,l[1],t?L(i,l[1],a,null):R(l[1]),null)},i(r){t||(v(s,r),t=!0)},o(r){b(s,r),t=!1},d(r){r&&f(e),s&&s.d(r),n=!1,o()}}}function K(l,e,t){let{$$slots:n={},$$scope:o}=e,{onClick:i}=e;return l.$$set=s=>{"onClick"in s&&t(0,i=s.onClick),"$$scope"in s&&t(1,o=s.$$scope)},[i,o,n]}class P extends z{constructor(e){super(),H(this,e,K,G,M,{onClick:0})}}function J(l){let e;return{c(){e=I("Nav")},l(t){e=O(t,"Nav")},m(t,n){g(t,e,n)},d(t){t&&f(e)}}}function W(l){let e;return{c(){e=I("Menu")},l(t){e=O(t,"Menu")},m(t,n){g(t,e,n)},d(t){t&&f(e)}}}function X(l){let e,t,n,o,i,s;return n=new P({props:{$$slots:{default:[J]},$$scope:{ctx:l}}}),i=new P({props:{$$slots:{default:[W]},$$scope:{ctx:l}}}),{c(){e=h("nav"),t=h("section"),k(n.$$.fragment),o=x(),k(i.$$.fragment),this.h()},l(r){e=$(r,"NAV",{class:!0});var a=y(e);t=$(a,"SECTION",{class:!0});var d=y(t);E(n.$$.fragment,d),o=B(d),E(i.$$.fragment,d),d.forEach(f),a.forEach(f),this.h()},h(){_(t,"class","center p1 svelte-1bfq65o"),_(e,"class","p1 nav svelte-1bfq65o")},m(r,a){g(r,e,a),w(e,t),T(n,t,null),w(t,o),T(i,t,null),s=!0},p(r,[a]){const d={};a&1&&(d.$$scope={dirty:a,ctx:r}),n.$set(d);const c={};a&1&&(c.$$scope={dirty:a,ctx:r}),i.$set(c)},i(r){s||(v(n.$$.fragment,r),v(i.$$.fragment,r),s=!0)},o(r){b(n.$$.fragment,r),b(i.$$.fragment,r),s=!1},d(r){r&&f(e),N(n),N(i)}}}class Z extends z{constructor(e){super(),H(this,e,null,X,M,{})}}function ee(l){let e,t,n,o;const i=l[4].default,s=S(i,l,l[3],null);return{c(){e=h("button"),s&&s.c(),this.h()},l(r){e=$(r,"BUTTON",{style:!0,class:!0});var a=y(e);s&&s.l(a),a.forEach(f),this.h()},h(){q(e,"--bgColor",l[1]),q(e,"--fs",l[2]+"em"),_(e,"class","svelte-qi3tyh")},m(r,a){g(r,e,a),s&&s.m(e,null),t=!0,n||(o=F(e,"click",function(){Q(l[0])&&l[0].apply(this,arguments)}),n=!0)},p(r,[a]){l=r,s&&s.p&&(!t||a&8)&&A(s,i,l,l[3],t?L(i,l[3],a,null):R(l[3]),null),(!t||a&2)&&q(e,"--bgColor",l[1]),(!t||a&4)&&q(e,"--fs",l[2]+"em")},i(r){t||(v(s,r),t=!0)},o(r){b(s,r),t=!1},d(r){r&&f(e),s&&s.d(r),n=!1,o()}}}function te(l,e,t){let{$$slots:n={},$$scope:o}=e,{onClick:i}=e,{bgColor:s="#4400ff"}=e,{size:r=1}=e;return l.$$set=a=>{"onClick"in a&&t(0,i=a.onClick),"bgColor"in a&&t(1,s=a.bgColor),"size"in a&&t(2,r=a.size),"$$scope"in a&&t(3,o=a.$$scope)},[i,s,r,o,n]}class ne extends z{constructor(e){super(),H(this,e,te,ee,M,{onClick:0,bgColor:1,size:2})}}function se(l){let e=l[0]?"Hide Video":"Play Video",t;return{c(){t=I(e)},l(n){t=O(n,e)},m(n,o){g(n,t,o)},p(n,o){o&1&&e!==(e=n[0]?"Hide Video":"Play Video")&&U(t,e)},d(n){n&&f(t)}}}function le(l){let e,t,n,o;return{c(){e=h("img"),this.h()},l(i){e=$(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){_(e,"class","mb1 visual svelte-194wyx6"),Y(e.src,t="https://media0.giphy.com/media/l1BgTjrfQE3VoQQvK/giphy.gif?cid=ecf05e470s17w987do32g38ms11hgs7prl241p44s5bzpjvp&ep=v1_gifs_related&rid=giphy.gif&ct=g")||_(e,"src",t),_(e,"alt","vr placeholder")},m(i,s){g(i,e,s),n||(o=F(e,"click",l[2]),n=!0)},p:C,d(i){i&&f(e),n=!1,o()}}}function re(l){let e,t;return{c(){e=h("iframe"),this.h()},l(n){e=$(n,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),y(e).forEach(f),this.h()},h(){_(e,"class","mb1 visual svelte-194wyx6"),Y(e.src,t="https://www.youtube-nocookie.com/embed/iTtit7Rj5vY?controls=0")||_(e,"src",t),_(e,"title","YouTube video player"),_(e,"frameborder","0"),_(e,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),e.allowFullscreen=!0},m(n,o){g(n,e,o)},p:C,d(n){n&&f(e)}}}function oe(l){let e,t,n='Explore a new <span class="grad svelte-194wyx6">Reality.</span>',o,i,s,r,a;s=new ne({props:{size:1.2,bgColor:"#8800ff",onClick:l[1],$$slots:{default:[se]},$$scope:{ctx:l}}});function d(m,p){return m[0]?re:le}let c=d(l),u=c(l);return{c(){e=h("section"),t=h("h1"),t.innerHTML=n,o=x(),i=h("div"),k(s.$$.fragment),r=x(),u.c(),this.h()},l(m){e=$(m,"SECTION",{});var p=y(e);t=$(p,"H1",{class:!0,["data-svelte-h"]:!0}),j(t)!=="svelte-15v1cew"&&(t.innerHTML=n),o=B(p),i=$(p,"DIV",{class:!0});var V=y(i);E(s.$$.fragment,V),V.forEach(f),r=B(p),u.l(p),p.forEach(f),this.h()},h(){_(t,"class","py2 svelte-194wyx6"),_(i,"class","mb1 btnHolder svelte-194wyx6")},m(m,p){g(m,e,p),w(e,t),w(e,o),w(e,i),T(s,i,null),w(e,r),u.m(e,null),a=!0},p(m,[p]){const V={};p&1&&(V.onClick=m[1]),p&9&&(V.$$scope={dirty:p,ctx:m}),s.$set(V),c===(c=d(m))&&u?u.p(m,p):(u.d(1),u=c(m),u&&(u.c(),u.m(e,null)))},i(m){a||(v(s.$$.fragment,m),a=!0)},o(m){b(s.$$.fragment,m),a=!1},d(m){m&&f(e),N(s),u.d()}}}function ae(l,e,t){let n=!1;return[n,()=>{t(0,n=!n)},()=>{t(0,n=!0)}]}class ie extends z{constructor(e){super(),H(this,e,ae,oe,M,{})}}function ce(l){let e,t,n;return t=new ie({}),{c(){e=h("main"),k(t.$$.fragment),this.h()},l(o){e=$(o,"MAIN",{class:!0});var i=y(e);E(t.$$.fragment,i),i.forEach(f),this.h()},h(){_(e,"class","center px2 main svelte-1p96qa3")},m(o,i){g(o,e,i),T(t,e,null),n=!0},p:C,i(o){n||(v(t.$$.fragment,o),n=!0)},o(o){b(t.$$.fragment,o),n=!1},d(o){o&&f(e),N(t)}}}class fe extends z{constructor(e){super(),H(this,e,null,ce,M,{})}}function ue(l){let e,t="Footer";return{c(){e=h("footer"),e.textContent=t,this.h()},l(n){e=$(n,"FOOTER",{class:!0,["data-svelte-h"]:!0}),j(e)!=="svelte-15mr4ke"&&(e.textContent=t),this.h()},h(){_(e,"class","px2 py1 center footer svelte-5s0nni")},m(n,o){g(n,e,o)},p:C,i:C,o:C,d(n){n&&f(e)}}}class me extends z{constructor(e){super(),H(this,e,null,ue,M,{})}}function _e(l){let e,t=`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap');

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
        }`,n,o,i,s,r,a,d;return o=new Z({}),s=new fe({}),a=new me({}),{c(){e=h("style"),e.textContent=t,n=x(),k(o.$$.fragment),i=x(),k(s.$$.fragment),r=x(),k(a.$$.fragment)},l(c){const u=D("svelte-gokujt",document.head);e=$(u,"STYLE",{["data-svelte-h"]:!0}),j(e)!=="svelte-1fufyow"&&(e.textContent=t),u.forEach(f),n=B(c),E(o.$$.fragment,c),i=B(c),E(s.$$.fragment,c),r=B(c),E(a.$$.fragment,c)},m(c,u){w(document.head,e),g(c,n,u),T(o,c,u),g(c,i,u),T(s,c,u),g(c,r,u),T(a,c,u),d=!0},p:C,i(c){d||(v(o.$$.fragment,c),v(s.$$.fragment,c),v(a.$$.fragment,c),d=!0)},o(c){b(o.$$.fragment,c),b(s.$$.fragment,c),b(a.$$.fragment,c),d=!1},d(c){c&&(f(n),f(i),f(r)),f(e),N(o,c),N(s,c),N(a,c)}}}class ge extends z{constructor(e){super(),H(this,e,null,_e,M,{})}}export{ge as component};
