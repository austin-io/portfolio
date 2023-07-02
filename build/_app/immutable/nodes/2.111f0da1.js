import{s as d,n as a}from"../chunks/scheduler.e108d1fd.js";import{S as u,i as g,g as h,h as $,y as T,k as H,a as f,f as o,r as x,j as L,u as y,v as w,d as b,t as C,w as M,s as E,z as j,c as N,x as q}from"../chunks/index.63e0e998.js";function F(i){let e,s='<section class="center p1 svelte-44j1qu">Nav</section>';return{c(){e=h("nav"),e.innerHTML=s,this.h()},l(t){e=$(t,"NAV",{class:!0,["data-svelte-h"]:!0}),T(e)!=="svelte-1chb1ff"&&(e.innerHTML=s),this.h()},h(){H(e,"class","p1 svelte-44j1qu")},m(t,r){f(t,e,r)},p:a,i:a,o:a,d(t){t&&o(e)}}}class S extends u{constructor(e){super(),g(this,e,null,F,d,{})}}function z(i){let e,s="<h1>Explore a new Reality</h1>";return{c(){e=h("section"),e.innerHTML=s},l(t){e=$(t,"SECTION",{["data-svelte-h"]:!0}),T(e)!=="svelte-i6hdy5"&&(e.innerHTML=s)},m(t,r){f(t,e,r)},p:a,i:a,o:a,d(t){t&&o(e)}}}class O extends u{constructor(e){super(),g(this,e,null,z,d,{})}}function P(i){let e,s,t;return s=new O({}),{c(){e=h("main"),x(s.$$.fragment),this.h()},l(r){e=$(r,"MAIN",{class:!0});var l=L(e);y(s.$$.fragment,l),l.forEach(o),this.h()},h(){H(e,"class","center px2 svelte-xu9g1n")},m(r,l){f(r,e,l),w(s,e,null),t=!0},p:a,i(r){t||(b(s.$$.fragment,r),t=!0)},o(r){C(s.$$.fragment,r),t=!1},d(r){r&&o(e),M(s)}}}class k extends u{constructor(e){super(),g(this,e,null,P,d,{})}}function A(i){let e,s="Footer";return{c(){e=h("footer"),e.textContent=s,this.h()},l(t){e=$(t,"FOOTER",{class:!0,["data-svelte-h"]:!0}),T(e)!=="svelte-gt4tsx"&&(e.textContent=s),this.h()},h(){H(e,"class","px2 py1 center svelte-1adqi8a")},m(t,r){f(t,e,r)},p:a,i:a,o:a,d(t){t&&o(e)}}}class I extends u{constructor(e){super(),g(this,e,null,A,d,{})}}function R(i){let e,s=`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap');

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
        }`,t,r,l,c,_,p,v;return r=new S({}),c=new k({}),p=new I({}),{c(){e=h("style"),e.textContent=s,t=E(),x(r.$$.fragment),l=E(),x(c.$$.fragment),_=E(),x(p.$$.fragment)},l(n){const m=j("svelte-18526zb",document.head);e=$(m,"STYLE",{["data-svelte-h"]:!0}),T(e)!=="svelte-11omhj6"&&(e.textContent=s),m.forEach(o),t=N(n),y(r.$$.fragment,n),l=N(n),y(c.$$.fragment,n),_=N(n),y(p.$$.fragment,n)},m(n,m){q(document.head,e),f(n,t,m),w(r,n,m),f(n,l,m),w(c,n,m),f(n,_,m),w(p,n,m),v=!0},p:a,i(n){v||(b(r.$$.fragment,n),b(c.$$.fragment,n),b(p.$$.fragment,n),v=!0)},o(n){C(r.$$.fragment,n),C(c.$$.fragment,n),C(p.$$.fragment,n),v=!1},d(n){n&&(o(t),o(l),o(_)),o(e),M(r,n),M(c,n),M(p,n)}}}function V(i,e,s){return[!0]}class D extends u{constructor(e){super(),g(this,e,V,R,d,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{D as component};
