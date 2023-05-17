"use strict";(self.webpackChunkMovieDB=self.webpackChunkMovieDB||[]).push([[736],{1454:function(n,e,t){t.d(e,{a:function(){return s}});var r,o=t(8966),i=t(168),c=t(6088).Z.div(r||(r=(0,i.Z)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n    background-color: #00000080;\n    transition: opacity 250ms, visibility 250ms;\n    z-index: 100;\n"]))),a=t(184),s=function(){return(0,a.jsx)(c,{children:(0,a.jsx)(o.Z1,{height:"100",width:"100",color:"#369daf",wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},2913:function(n,e,t){t.d(e,{l:function(){return s}});var r,o=t(168),i=t(6088).Z.div(r||(r=(0,o.Z)(["\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    color: ",";\n    & h1 {\n        font-size: ",";\n    }\n    & p {\n        font-size: ",";\n    }\n    & img {\n        margin: 0 auto;\n    }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.xxl}),(function(n){return n.theme.fontSizes.xxl})),c=t.p+"static/media/no-found.322bf7b5d3e43751b8d0.png",a=t(184),s=function(){return(0,a.jsxs)(i,{children:[(0,a.jsx)("h1",{children:"Ooops!"}),(0,a.jsx)("img",{width:300,src:c,alt:"page-404"}),(0,a.jsx)("p",{children:"Page no found"})]})}},458:function(n,e,t){t.r(e),t.d(e,{default:function(){return bn},useModal:function(){return yn}});var r=t(1413),o=t(9439);var i=!1;if("undefined"!==typeof window){var c={get passive(){i=!0}};window.addEventListener("testPassive",null,c),window.removeEventListener("testPassive",null,c)}var a,s,u,d,l,f,p,h,g,m,v,x,w,y,b,Z,j,k="undefined"!==typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),S=[],C=!1,T=-1,E=void 0,L=void 0,z=void 0,F=function(n){return S.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(n))}))},I=function(n){var e=n||window.event;return!!F(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},P=function(){void 0!==z&&(document.body.style.paddingRight=z,z=void 0),void 0!==E&&(document.body.style.overflow=E,E=void 0)},A=function(){if(void 0!==L){var n=-parseInt(document.body.style.top,10),e=-parseInt(document.body.style.left,10);document.body.style.position=L.position,document.body.style.top=L.top,document.body.style.left=L.left,window.scrollTo(e,n),L=void 0}},B=function(n,e){if(n){if(!S.some((function(e){return e.targetElement===n}))){var t={targetElement:n,options:e||{}};S=[].concat(function(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}(S),[t]),k?window.requestAnimationFrame((function(){if(void 0===L){L={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var n=window,e=n.scrollY,t=n.scrollX,r=n.innerHeight;document.body.style.position="fixed",document.body.style.top=-e,document.body.style.left=-t,setTimeout((function(){return window.requestAnimationFrame((function(){var n=r-window.innerHeight;n&&e>=r&&(document.body.style.top=-(e+n))}))}),300)}})):function(n){if(void 0===z){var e=!!n&&!0===n.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;if(e&&t>0){var r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);z=document.body.style.paddingRight,document.body.style.paddingRight=r+t+"px"}}void 0===E&&(E=document.body.style.overflow,document.body.style.overflow="hidden")}(e),k&&(n.ontouchstart=function(n){1===n.targetTouches.length&&(T=n.targetTouches[0].clientY)},n.ontouchmove=function(e){1===e.targetTouches.length&&function(n,e){var t=n.targetTouches[0].clientY-T;!F(n.target)&&(e&&0===e.scrollTop&&t>0||function(n){return!!n&&n.scrollHeight-n.scrollTop<=n.clientHeight}(e)&&t<0?I(n):n.stopPropagation())}(e,n)},C||(document.addEventListener("touchmove",I,i?{passive:!1}:void 0),C=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},R=t(2606),_=t(168),H=t(6088),M=t(1087),O=H.Z.ul(a||(a=(0,_.Z)(["\n    display: flex;\n    gap: 20px;\n    padding: 20px 0;\n"]))),U=H.Z.li(s||(s=(0,_.Z)(["\n    flex-basis: calc((100% - 40px) / 3);\n    @media (min-width: ",") {\n        flex-basis: auto;\n        width: 120px;\n    }\n"])),(function(n){return n.theme.breakpoints.m})),D=(0,H.Z)(M.rU)(u||(u=(0,_.Z)(["\n    display: block;\n    width: 100%;\n    height: 100%;\n    padding: 10px 0;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n\n    color: ",";\n    background-color: ",";\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover,\n    &:focus {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),G=H.Z.button(d||(d=(0,_.Z)(["\n    display: block;\n    width: 100%;\n    height: 100%;\n    padding: 10px 0;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n\n    color: ",";\n    background-color: ",";\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover,\n    &:focus {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),Y=t(184),q=function(n){var e=n.onTogle;return(0,Y.jsxs)(O,{children:[(0,Y.jsx)(U,{children:(0,Y.jsx)(D,{to:"cast",children:"Cast"})}),(0,Y.jsx)(U,{children:(0,Y.jsx)(D,{to:"review",children:"Review"})}),(0,Y.jsx)(U,{children:(0,Y.jsx)(G,{onClick:e,children:"Trailer"})})]})},W=(0,H.Z)(M.rU)(l||(l=(0,_.Z)(["\n    color: ",";\n    letter-spacing: 0.06em;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n    display: block;\n    margin-bottom: 20px;\n    padding: 10px 15px;\n    background-color: ",";\n    transition: color 250ms;\n    &:hover,\n    &:focus {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),V=function(n){var e=n.path,t=n.children;return(0,Y.jsx)(W,{to:e.current,children:t})},X=t(1454),J=t(4757),K="https://image.tmdb.org/t/p/w1280/",N=H.Z.div(f||(f=(0,_.Z)(["\n    @media (min-width: 533px) {\n        padding: 30px 0;\n        display: flex;\n        gap: 20px;\n        background-image: linear-gradient(\n                90deg,\n                #404040 3%,\n                #404040de 23%,\n                #404040de 77%,\n                #404040 100%\n            ),\n            url(",");\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n"])),(function(n){return K+n.bgr})),Q=H.Z.div(p||(p=(0,_.Z)(["\n    background-image: linear-gradient(\n            90deg,\n            #404040 3%,\n            #404040de 23%,\n            #404040de 77%,\n            #404040 100%\n        ),\n        url(",");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 250px;\n    margin: 0 -20px 20px;\n    padding: 20px;\n    @media (min-width: 533px) {\n        flex-shrink: 0;\n        margin: 0;\n        padding: 0;\n        background: none;\n        height: auto;\n    }\n"])),(function(n){return K+n.bgr})),$=H.Z.img(h||(h=(0,_.Z)(["\n    object-fit: cover;\n    aspect-ratio: 2 / 3;\n    height: 210px;\n    @media (min-width: 533px) {\n        width: 230px;\n        height: auto;\n        margin-right: auto;\n    }\n    @media (min-width: ",") {\n        width: 300px;\n    }\n"])),(function(n){return n.theme.breakpoints.m})),nn=H.Z.div(g||(g=(0,_.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n    color: white;\n    @media (min-width: ",") {\n        gap: 20px;\n    }\n"])),(function(n){return n.theme.breakpoints.s})),en=H.Z.div(m||(m=(0,_.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 20px;\n"]))),tn=t(2791),rn=H.Z.span(v||(v=(0,_.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 60px;\n    height: 60px;\n    border: 1px dashed white;\n    border-radius: 50%;\n    & > span {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n        border-radius: 50%;\n        width: 54px;\n        height: 54px;\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.colors.accent})),on=H.Z.svg(x||(x=(0,_.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(270deg);\n"]))),cn=H.Z.circle(w||(w=(0,_.Z)(["\n    fill: none;\n    stroke: ",";\n    stroke-width: 6;\n    transform: translate(3px, 3px);\n    stroke-dasharray: 138;\n    stroke-dashoffset: ",";\n"])),(function(n){return n.color}),(function(n){return n.length})),an=H.Z.span(y||(y=(0,_.Z)([""]))),sn=function(n){var e=n.rating,t=(0,tn.useRef)(),r=(0,tn.useRef)(),i=(0,tn.useState)(0),c=(0,o.Z)(i,2),a=c[0],s=c[1],u=(0,tn.useState)(0),d=(0,o.Z)(u,2),l=d[0],f=d[1];return(0,tn.useEffect)((function(){var n,e=t.current.getTotalLength(),o=e-e/100*r.current.textContent;s(o),f((n=r.current.textContent)<11?"red":n>10&&n<21?"#ff3000":n>20&&n<31?"#ff6000":n>30&&n<41?"#ff9000":n>40&&n<51?"yellow":n>50&&n<61?"#90ff00":n>60&&n<71?"#60ff00":n>70&&n<81?"#30ff00":n>80&&n<91||n>90?"green":"gray")}),[a]),(0,Y.jsx)(rn,{children:(0,Y.jsxs)("span",{children:[(0,Y.jsx)(on,{width:50,height:50,children:(0,Y.jsx)(cn,{color:l,length:a,ref:t,cx:22,cy:22,r:22})}),(0,Y.jsx)(an,{ref:r,children:e})," %"]})})},un=t(7689),dn=t(8174),ln=t(4390),fn=H.Z.div(b||(b=(0,_.Z)(["\n    box-sizing: content-box;\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n    background-color: rgba(0, 0, 0, 0.6);\n    z-index: 3;\n"]))),pn=H.Z.div(Z||(Z=(0,_.Z)(["\n    display: flex;\n    align-items: center;\n    width: 80%;\n    height: 90%;\n"]))),hn=H.Z.iframe(j||(j=(0,_.Z)(["\n    border: none;\n    width: 100%;\n    aspect-ratio: 16 / 9;\n"]))),gn=t(4164),mn=t(2913),vn=function(n){var e=n.onClose,t=(0,un.UO)().movieId,r=(0,tn.useState)(!1),i=(0,o.Z)(r,2),c=i[0],a=i[1],s=(0,tn.useState)([]),u=(0,o.Z)(s,2),d=u[0],l=u[1],f=(0,tn.useState)([]),p=(0,o.Z)(f,2),h=p[0],g=p[1];(0,tn.useEffect)((function(){t&&(a(!0),(0,ln.LF)(t).then((function(n){g(function(n){var e,t="https://www.youtube.com/embed/",r=!1;return n.map((function(n){return r||(e=t+n.key),"Trailer"!==n.type||r||(e=t+n.key,r=!0),e})),e}(n.results))})).catch((function(n){l(n.message),(0,dn.Am)(n.message)})).finally((function(){a(!1)})))}),[t]),(0,tn.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[e]);return(0,gn.createPortal)((0,Y.jsxs)(fn,{onClick:function(n){n.target===n.currentTarget&&e()},children:[(0,Y.jsxs)(pn,{children:[c&&(0,Y.jsx)(X.a,{}),h&&(0,Y.jsx)(hn,{src:h,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),!h&&(0,Y.jsx)(mn.l,{})]}),d&&(0,Y.jsx)(dn.Ix,{})]}),document.getElementById("modal-root"))},xn=function(n){var e=n.vote_average,t=n.title,r=n.overview,o=n.genres,i=n.poster_path,c=n.release_date,a=n.backdrop_path,s=n.onClose,u=new Date(c).getFullYear().toString(),d=Math.round(10*e),l=yn().isTrailer;return(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(N,{bgr:a,children:[(0,Y.jsx)(Q,{bgr:a,children:(0,Y.jsx)($,{src:i?"https://image.tmdb.org/t/p/w500/"+i:J,alt:t})}),(0,Y.jsxs)(nn,{children:[(0,Y.jsxs)("h1",{style:{textAlign:"center"},children:[t," (",u,")"]}),(0,Y.jsxs)(en,{children:[(0,Y.jsx)(sn,{rating:d}),(0,Y.jsx)("h3",{children:"User Score"})]}),(0,Y.jsx)("h2",{children:"Owerview"}),(0,Y.jsx)("p",{children:r}),(0,Y.jsx)("h2",{children:"Genres"}),(0,Y.jsx)("p",{children:null===o||void 0===o?void 0:o.map((function(n){return n.name})).join(", ")})]}),l&&(0,Y.jsx)(vn,{onClose:s})]})})},wn=(0,tn.createContext)(!1),yn=function(){return(0,tn.useContext)(wn)},bn=function(){var n,e,t=(0,tn.useState)(!1),c=(0,o.Z)(t,2),a=c[0],s=c[1],u=(0,tn.useState)(null),d=(0,o.Z)(u,2),l=d[0],f=d[1],p=(0,tn.useState)(!1),h=(0,o.Z)(p,2),g=h[0],m=h[1],v=(0,tn.useState)(null),x=(0,o.Z)(v,2),w=x[0],y=x[1],b=(0,un.UO)().movieId,Z=(0,un.TH)(),j=(0,tn.useRef)(null!==(n=null===Z||void 0===Z||null===(e=Z.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,tn.useEffect)((function(){m(!0),(0,ln.HF)(b,"").then((function(n){f(n)})).catch((function(n){y(n.message)})).finally((function(){m(!1)}))}),[b]);var T=function(){var n;s(!a),a?(n=document.body)?(S=S.filter((function(e){return e.targetElement!==n})),k&&(n.ontouchstart=null,n.ontouchmove=null,C&&0===S.length&&(document.removeEventListener("touchmove",I,i?{passive:!1}:void 0),C=!1)),k?A():P()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."):B(document.body)};return(0,Y.jsx)(wn.Provider,{value:{isTrailer:a},children:(0,Y.jsxs)("section",{children:[g&&(0,Y.jsx)(X.a,{}),(0,Y.jsxs)(R.W2,{children:[(0,Y.jsx)(V,{path:j,children:"Go back"}),l&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(xn,(0,r.Z)((0,r.Z)({},l),{},{onClose:T})),(0,Y.jsx)(q,{state:{from:Z},onTogle:T}),(0,Y.jsx)(tn.Suspense,{children:(0,Y.jsx)(un.j3,{})})]}),w&&(0,Y.jsx)(mn.l,{})]})]})})}},4390:function(n,e,t){t.d(e,{HF:function(){return d},LF:function(){return l},iL:function(){return s},uG:function(){return u}});var r=t(5861),o=t(4687),i=t.n(o),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a="49f12b338a85dcd14c7e661f8eadc77e",s=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/".concat(e,"?api_key=").concat(a));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(a,"&page=").concat(t,"&query=").concat(e));case 2:return r=n.sent,o=r.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e).concat(t,"?api_key=").concat(a));case 2:return r=n.sent,o=r.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/videos?api_key=").concat(a));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},4757:function(n,e,t){n.exports=t.p+"static/media/no-poster.33ea28eed030003a405e.jpg"}}]);
//# sourceMappingURL=736.4357e848.chunk.js.map