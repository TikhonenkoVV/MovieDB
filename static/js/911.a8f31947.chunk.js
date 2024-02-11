"use strict";(self.webpackChunkMovieDB=self.webpackChunkMovieDB||[]).push([[911],{8589:function(n,e,t){t.d(e,{l:function(){return h}});var o,r,i,c=t(168),s=t(6088),a=s.Z.div(o||(o=(0,c.Z)(["\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    color: ",";\n    & h1 {\n        font-size: ",";\n    }\n    & p {\n        font-size: ",";\n    }\n    & img {\n        margin: 0 auto;\n    }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.xxl}),(function(n){return n.theme.fontSizes.xxl})),l=s.Z.h1(r||(r=(0,c.Z)(["\n    color: ",";\n    transition: color ",";\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.baseTransition})),d=s.Z.p(i||(i=(0,c.Z)(["\n    color: ",";\n    transition: color ",";\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.baseTransition})),u=t.p+"static/media/no-found.322bf7b5d3e43751b8d0.png",f=t(3329),h=function(){return(0,f.jsxs)(a,{children:[(0,f.jsx)(l,{children:"Ooops!"}),(0,f.jsx)("img",{width:300,src:u,alt:"page-404"}),(0,f.jsx)(d,{children:"Page no found"})]})}},8242:function(n,e,t){t.d(e,{F:function(){return w}});var o,r,i,c,s,a=t(1413),l=t(9439),d=t(2791),u=t(168),f=t(6088),h=f.Z.span(o||(o=(0,u.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 60px;\n    height: 60px;\n    border: 1px dashed white;\n    border-radius: 50%;\n    & > span {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n        border-radius: 50%;\n        width: 54px;\n        height: 54px;\n        background-color: ",";\n    }\n    pointer-events: none;\n"])),(function(n){return n.theme.colors.accent})),p=f.Z.span(r||(r=(0,u.Z)(["\n    color: ",";\n"])),(function(n){return n.theme.colors.white})),m=f.Z.svg(i||(i=(0,u.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(270deg);\n"]))),g=f.Z.circle(c||(c=(0,u.Z)(["\n    fill: none;\n    stroke: ",";\n    stroke-width: 6;\n    transform: translate(3px, 3px);\n    stroke-dasharray: 138;\n    stroke-dashoffset: ",";\n"])),(function(n){return n.color}),(function(n){return n.length})),x=f.Z.span(s||(s=(0,u.Z)([""]))),v=t(3329),w=function(n){var e=n.rating,t=n.style,o=(0,d.useRef)(),r=(0,d.useState)(0),i=(0,l.Z)(r,2),c=i[0],s=i[1],u=(0,d.useState)(0),f=(0,l.Z)(u,2),w=f[0],y=f[1];return(0,d.useEffect)((function(){var n,t=o.current.getTotalLength(),r=isNaN(e)?0:t-t/100*e;s(r),y(isNaN(e)?"#333":(n=e)<11?"red":n>10&&n<21?"#ff3000":n>20&&n<31?"#ff6000":n>30&&n<41?"#ff9000":n>40&&n<51?"yellow":n>50&&n<61?"#90ff00":n>60&&n<71?"#60ff00":n>70&&n<81?"#30ff00":n>80&&n<91||n>90?"green":"gray")}),[e,c]),(0,v.jsx)(h,{style:(0,a.Z)({},t),children:(0,v.jsxs)(p,{children:[(0,v.jsx)(m,{width:50,height:50,children:(0,v.jsx)(g,{color:w,length:c,ref:o,cx:22,cy:22,r:22})}),(0,v.jsx)(x,{children:e}),!isNaN(e)&&" %"]})})}},3710:function(n,e,t){t.r(e),t.d(e,{default:function(){return un},useModal:function(){return dn}});var o=t(1413),r=t(9439);var i=!1;if("undefined"!==typeof window){var c={get passive(){i=!0}};window.addEventListener("testPassive",null,c),window.removeEventListener("testPassive",null,c)}var s,a,l,d,u,f,h,p,m,g,x,v,w,y="undefined"!==typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),b=[],Z=!1,j=-1,k=void 0,T=void 0,S=void 0,E=function(n){return b.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(n))}))},_=function(n){var e=n||window.event;return!!E(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},z=function(){void 0!==S&&(document.body.style.paddingRight=S,S=void 0),void 0!==k&&(document.body.style.overflow=k,k=void 0)},C=function(){if(void 0!==T){var n=-parseInt(document.body.style.top,10),e=-parseInt(document.body.style.left,10);document.body.style.position=T.position,document.body.style.top=T.top,document.body.style.left=T.left,window.scrollTo(e,n),T=void 0}},I=function(n,e){if(n){if(!b.some((function(e){return e.targetElement===n}))){var t={targetElement:n,options:e||{}};b=[].concat(function(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}(b),[t]),y?window.requestAnimationFrame((function(){if(void 0===T){T={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var n=window,e=n.scrollY,t=n.scrollX,o=n.innerHeight;document.body.style.position="fixed",document.body.style.top=-e,document.body.style.left=-t,setTimeout((function(){return window.requestAnimationFrame((function(){var n=o-window.innerHeight;n&&e>=o&&(document.body.style.top=-(e+n))}))}),300)}})):function(n){if(void 0===S){var e=!!n&&!0===n.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;if(e&&t>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);S=document.body.style.paddingRight,document.body.style.paddingRight=o+t+"px"}}void 0===k&&(k=document.body.style.overflow,document.body.style.overflow="hidden")}(e),y&&(n.ontouchstart=function(n){1===n.targetTouches.length&&(j=n.targetTouches[0].clientY)},n.ontouchmove=function(e){1===e.targetTouches.length&&function(n,e){var t=n.targetTouches[0].clientY-j;!E(n.target)&&(e&&0===e.scrollTop&&t>0||function(n){return!!n&&n.scrollHeight-n.scrollTop<=n.clientHeight}(e)&&t<0?_(n):n.stopPropagation())}(e,n)},Z||(document.addEventListener("touchmove",_,i?{passive:!1}:void 0),Z=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},P=t(2634),A=t(168),B=t(6088),M=t(1087),L=B.Z.ul(s||(s=(0,A.Z)(["\n    display: flex;\n    gap: 20px;\n    padding: 20px 0;\n"]))),O=B.Z.li(a||(a=(0,A.Z)(["\n    flex-basis: calc((100% - 40px) / 3);\n    @media (min-width: ",") {\n        flex-basis: auto;\n        width: 120px;\n    }\n"])),(function(n){return n.theme.breakpoints.m})),F=(0,B.Z)(M.rU)(l||(l=(0,A.Z)(["\n    display: block;\n    width: 100%;\n    height: 100%;\n    padding: 10px 0;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n\n    color: ",";\n    background-color: ",";\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover,\n    &:focus {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),N=B.Z.button(d||(d=(0,A.Z)(["\n    display: block;\n    width: 100%;\n    height: 100%;\n    padding: 10px 0;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n\n    color: ",";\n    background-color: ",";\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover,\n    &:focus {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),H=t(3329),R=function(n){var e=n.trailer,t=n.onTogle;return(0,H.jsxs)(L,{children:[(0,H.jsx)(O,{children:(0,H.jsx)(F,{to:"cast",children:"Cast"})}),(0,H.jsx)(O,{children:(0,H.jsx)(F,{to:"review",children:"Review"})}),e&&(0,H.jsx)(O,{children:(0,H.jsx)(N,{onClick:t,children:"Trailer"})})]})},D=t(8924),U=B.Z.div(u||(u=(0,A.Z)(["\n    @media (min-width: 533px) {\n        padding: 30px 0;\n        display: flex;\n        gap: 20px;\n        background-image: ",",\n            url(",");\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n"])),(function(n){return n.theme.lg.movieInfo}),(function(n){return n.bgr})),W=B.Z.div(f||(f=(0,A.Z)(["\n    background-image: linear-gradient(\n            90deg,\n            #404040 3%,\n            #404040de 23%,\n            #404040de 77%,\n            #404040 100%\n        ),\n        url(",");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 250px;\n    margin: 0 -20px 20px;\n    padding: 20px;\n    @media (min-width: 533px) {\n        flex-shrink: 0;\n        margin: 0;\n        padding: 0;\n        background: none;\n        height: auto;\n    }\n"])),(function(n){return"https://image.tmdb.org/t/p/w1280/"+n.bgr})),Y=B.Z.img(h||(h=(0,A.Z)(["\n    object-fit: cover;\n    aspect-ratio: 2 / 3;\n    height: 210px;\n    @media (min-width: 533px) {\n        width: 230px;\n        height: auto;\n        margin-right: auto;\n    }\n    @media (min-width: ",") {\n        width: 300px;\n    }\n"])),(function(n){return n.theme.breakpoints.m})),q=B.Z.div(p||(p=(0,A.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n    color: ",";\n    @media (min-width: ",") {\n        gap: 20px;\n    }\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.breakpoints.s})),G=B.Z.h1(m||(m=(0,A.Z)(["\n    font-size: ",";\n"])),(function(n){return n.theme.fontSizes.xxl})),V=B.Z.div(g||(g=(0,A.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 20px;\n"]))),X=t(8242),J=t(2791),K=B.Z.div(x||(x=(0,A.Z)(["\n    box-sizing: content-box;\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n    background-color: rgba(0, 0, 0, 0.6);\n    z-index: 3;\n"]))),Q=B.Z.div(v||(v=(0,A.Z)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    width: 80%;\n    height: 90%;\n"]))),$=B.Z.iframe(w||(w=(0,A.Z)(["\n    border: none;\n    width: 100%;\n    aspect-ratio: 16 / 9;\n"]))),nn=t(4164),en=function(n){var e=n.onClose,t=dn().isTrailer;(0,J.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[e]);return(0,nn.createPortal)((0,H.jsx)(K,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,H.jsx)(Q,{children:(0,H.jsx)($,{src:"".concat(t,"?autoplay=1&iv_load_policy=3&modestbranding=1"),allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})}),document.getElementById("modal-root"))},tn=function(n){var e=n.vote_average,t=n.name,o=n.overview,r=n.genres,i=n.poster_path,c=n.release,s=n.first_air,a=n.backdrop_path,l=n.onClose,d=dn().isModalOpen;return(0,H.jsxs)(U,{bgr:a,children:[(0,H.jsx)(W,{bgr:a,children:(0,H.jsx)(Y,{src:i,alt:t})}),(0,H.jsxs)(q,{children:[(0,H.jsx)(G,{children:t}),c.release_date&&(0,H.jsxs)("p",{children:[c.title,c.release_date]}),s.first_air_date&&(0,H.jsxs)("p",{children:[s.title,s.first_air_date]}),(0,H.jsxs)(V,{children:[(0,H.jsx)(X.F,{rating:e}),(0,H.jsx)("h3",{children:"User Score"})]}),(0,H.jsx)("h2",{children:"Owerview"}),(0,H.jsx)("p",{children:o}),(0,H.jsx)("h2",{children:"Genres"}),(0,H.jsx)("p",{children:null===r||void 0===r?void 0:r.map((function(n){return n.name})).join(", ")})]}),d&&(0,H.jsx)(en,{onClose:l})]})},on=t(8589),rn=t(7689),cn=t(9085),sn=t(4390),an=t(7461),ln=(0,J.createContext)(!1),dn=function(){return(0,J.useContext)(ln)},un=function(){var n=(0,J.useState)(!1),e=(0,r.Z)(n,2),t=e[0],c=e[1],s=(0,J.useState)(!1),a=(0,r.Z)(s,2),l=a[0],d=a[1],u=(0,J.useState)(null),f=(0,r.Z)(u,2),h=f[0],p=f[1],m=(0,J.useState)(!1),g=(0,r.Z)(m,2),x=g[0],v=g[1],w=(0,J.useState)(null),j=(0,r.Z)(w,2),k=j[0],T=j[1],S=(0,rn.UO)(),E=S.mediaTypes,A=S.mediaId,B=(0,rn.TH)();(0,J.useEffect)((function(){v(!0),(0,sn.s_)(E,A,"").then((function(n){p(n)})).catch((function(n){T(n.message)})).finally((function(){(0,sn.AE)(E,A).then((function(n){c(function(n){var e,t="https://www.youtube.com/embed/",o=!1;return n.map((function(n){return o||(e=t+n.key),"Trailer"!==n.type||o||(e=t+n.key,o=!0),e})),e}(n.results))})).catch((function(n){T(n.message),(0,cn.Am)(n.message)})).finally((function(){v(!1)}))}))}),[E,A]);var M=function(){var n;d(!l),l?(n=document.body)?(b=b.filter((function(e){return e.targetElement!==n})),y&&(n.ontouchstart=null,n.ontouchmove=null,Z&&0===b.length&&(document.removeEventListener("touchmove",_,i?{passive:!1}:void 0),Z=!1)),y?C():z()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."):I(document.body)};return(0,H.jsx)(ln.Provider,{value:{isModalOpen:l,isTrailer:t},children:(0,H.jsxs)("section",{children:[x&&(0,H.jsx)(D.a,{}),(0,H.jsxs)(P.W2,{children:[h&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(tn,(0,o.Z)((0,o.Z)({},(0,an.s2)(h)),{},{onClose:M})),(0,H.jsx)(R,{state:{from:B},onTogle:M,trailer:t}),(0,H.jsx)(J.Suspense,{children:(0,H.jsx)(rn.j3,{})})]}),k&&(0,H.jsx)(on.l,{})]})]})})}}}]);
//# sourceMappingURL=911.a8f31947.chunk.js.map