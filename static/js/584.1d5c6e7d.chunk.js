"use strict";(self.webpackChunkMovieDB=self.webpackChunkMovieDB||[]).push([[584],{9245:function(n,t,e){e.d(t,{a:function(){return u}});var r,o=e(8966),i=e(168),c=e(6088).Z.div(r||(r=(0,i.Z)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n    background-color: #00000080;\n    transition: opacity 250ms, visibility 250ms;\n    z-index: 100;\n"]))),a=e(3329),u=function(){return(0,a.jsx)(c,{children:(0,a.jsx)(o.Z1,{height:"100",width:"100",color:"#369daf",wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},8589:function(n,t,e){e.d(t,{l:function(){return d}});var r,o,i,c=e(168),a=e(6088),u=a.Z.div(r||(r=(0,c.Z)(["\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    color: ",";\n    & h1 {\n        font-size: ",";\n    }\n    & p {\n        font-size: ",";\n    }\n    & img {\n        margin: 0 auto;\n    }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.xxl}),(function(n){return n.theme.fontSizes.xxl})),s=a.Z.h1(o||(o=(0,c.Z)(["\n    color: ",";\n    transition: color ",";\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.baseTransition})),l=a.Z.p(i||(i=(0,c.Z)(["\n    color: ",";\n    transition: color ",";\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.baseTransition})),f=e.p+"static/media/no-found.322bf7b5d3e43751b8d0.png",h=e(3329),d=function(){return(0,h.jsxs)(u,{children:[(0,h.jsx)(s,{children:"Ooops!"}),(0,h.jsx)("img",{width:300,src:f,alt:"page-404"}),(0,h.jsx)(l,{children:"Page no found"})]})}},1422:function(n,t,e){e.r(t),e.d(t,{Review:function(){return R}});var r,o,i,c,a,u,s,l,f=e(9439),h=e(9245),d=e(168),p=e(6088),x=p.Z.section(r||(r=(0,d.Z)(["\n    padding-bottom: 24px;\n"]))),v=p.Z.h2(o||(o=(0,d.Z)(["\n    color: ",";\n    margin-bottom: 20px;\n    transition: color ",";\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.baseTransition})),g=e(7689),m=e(2791),Z=e(4390),b=p.Z.li(i||(i=(0,d.Z)(["\n    padding: 20px;\n    background-color: ",";\n    color: ",";\n    &:not(:last-child) {\n        margin-bottom: 20px;\n    }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),w=p.Z.h3(c||(c=(0,d.Z)(["\n    margin-bottom: 20px;\n"]))),j=p.Z.div(a||(a=(0,d.Z)(["\n    position: relative;\n    overflow-y: hidden;\n    height: ","px;\n    transition: height 0.5s;\n    &.expanded {\n        height: ","px;\n    }\n"])),(function(n){return n.expandedH}),(function(n){return n.clientH})),y=p.Z.div(u||(u=(0,d.Z)(["\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 20px;\n    transition: opacity 0.5s;\n    background-image: linear-gradient(",");\n    &.expanded {\n        opacity: 0;\n    }\n"])),(function(n){return n.theme.lg.whiteSpace})),k=p.Z.p(s||(s=(0,d.Z)([""]))),S=p.Z.button(l||(l=(0,d.Z)(["\n    height: 40px;\n    color: ",";\n    transition: color 250ms;\n    &:hover,\n    &:focus {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.white})),C=e(3329),T=function(n){var t=n.author,e=n.content,r=(0,m.useRef)(),o=(0,m.useRef)(),i=(0,m.useRef)(),c=(0,m.useState)(),a=(0,f.Z)(c,2),u=a[0],s=a[1],l=(0,m.useState)(),h=(0,f.Z)(l,2),d=h[0],p=h[1];(0,m.useEffect)((function(){var n=r.current.clientHeight;s(n),p(n<=81?r.current.clientHeight:81)}),[]);return(0,C.jsxs)(b,{children:[(0,C.jsxs)(w,{children:["Author: ",t]}),(0,C.jsxs)(j,{ref:o,clientH:u,expandedH:d,children:[(0,C.jsx)(k,{ref:r,children:e}),u>=81&&(0,C.jsx)(y,{ref:i})]}),u>=81&&(0,C.jsx)(S,{type:"button",onClick:function(){o.current.classList.toggle("expanded"),i.current.classList.toggle("expanded")},children:"Full review"})]})},H=e(3623),_=e(8589),R=function(){var n=(0,g.UO)().mediaId,t=(0,m.useState)(!1),e=(0,f.Z)(t,2),r=e[0],o=e[1],i=(0,m.useState)(null),c=(0,f.Z)(i,2),a=c[0],u=c[1],s=(0,m.useState)(null),l=(0,f.Z)(s,2),d=l[0],p=l[1];return(0,m.useEffect)((function(){if(n){var t=n.split("-")[0],e=n.split("-")[1];o(!0),(0,Z.s_)(t,e,"/reviews").then((function(n){p(n.results)})).catch((function(n){u(n.message)})).finally((function(){o(!1)}))}}),[n]),(0,C.jsx)(x,{children:(0,C.jsxs)(H.W,{children:[r&&(0,C.jsx)(h.a,{}),(null===d||void 0===d?void 0:d.length)>0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(v,{children:"Reviews"}),(0,C.jsx)("ul",{children:null===d||void 0===d?void 0:d.map((function(n){return(0,C.jsx)(T,{author:n.author,content:n.content},n.id)}))})]}),(null===d||void 0===d?void 0:d.length)<1&&(0,C.jsx)(v,{children:"Sorry, this movie has no reviews."}),a&&(0,C.jsx)(_.l,{})]})})}},4390:function(n,t,e){e.d(t,{AE:function(){return h},OH:function(){return l},TZ:function(){return d},XT:function(){return s},s_:function(){return f}});var r=e(5861),o=e(4687),i=e.n(o),c=e(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a="49f12b338a85dcd14c7e661f8eadc77e",u="&language=en-US",s=function(){var n=(0,r.Z)(i().mark((function n(t,e){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/".concat(t,"/").concat(e,"?api_key=").concat(a+u));case 2:return r=n.sent,o=r.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t,e,r){var o,s;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/".concat(t,"?api_key=").concat(a+u,"&page=").concat(r,"&query=").concat(e));case 2:return o=n.sent,s=o.data,n.abrupt("return",s);case 5:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t,e,r){var o,s;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(t,"/").concat(e).concat(r,"?api_key=").concat(a+u));case 2:return o=n.sent,s=o.data,n.abrupt("return",s);case 5:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(t,e){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(t,"/").concat(e,"/videos?api_key=").concat(a+u));case 2:return r=n.sent,o=r.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("person/".concat(t,"?api_key=").concat(a+u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=584.1d5c6e7d.chunk.js.map