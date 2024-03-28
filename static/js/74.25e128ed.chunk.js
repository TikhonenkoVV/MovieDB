"use strict";(self.webpackChunkMovieDB=self.webpackChunkMovieDB||[]).push([[74],{9074:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var i,o,r,c,s,u,l,a=t(9439),h=t(168),d=t(6088),f=d.Z.h2(i||(i=(0,h.Z)(["\n    color: ",";\n    margin-bottom: 20px;\n    transition: color ",";\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.baseTransition})),x=t(7689),p=t(2791),g=d.Z.li(o||(o=(0,h.Z)(["\n    padding: 20px;\n    background-color: ",";\n    color: ",";\n    &:not(:last-child) {\n        margin-bottom: 20px;\n    }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),m=d.Z.h3(r||(r=(0,h.Z)(["\n    margin-bottom: 20px;\n"]))),v=d.Z.div(c||(c=(0,h.Z)(["\n    position: relative;\n    overflow-y: hidden;\n    height: ","px;\n    transition: height 0.5s;\n    &.expanded {\n        height: ","px;\n    }\n"])),(function(n){return n.expandedH}),(function(n){return n.clientH})),Z=d.Z.div(s||(s=(0,h.Z)(["\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 20px;\n    transition: opacity 0.5s;\n    background-image: linear-gradient(",");\n    &.expanded {\n        opacity: 0;\n    }\n"])),(function(n){return n.theme.lg.whiteSpace})),j=d.Z.p(u||(u=(0,h.Z)([""]))),b=d.Z.button(l||(l=(0,h.Z)(["\n    height: 40px;\n    color: ",";\n    transition: color 250ms;\n    &:hover,\n    &:focus {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.white})),w=t(184),k=function(n){var e=n.author,t=n.content,i=(0,p.useRef)(),o=(0,p.useRef)(),r=(0,p.useRef)(),c=(0,p.useState)(),s=(0,a.Z)(c,2),u=s[0],l=s[1],h=(0,p.useState)(),d=(0,a.Z)(h,2),f=d[0],x=d[1];(0,p.useEffect)((function(){var n=i.current.clientHeight;l(n),x(n<=81?i.current.clientHeight:81)}),[]);return(0,w.jsxs)(g,{children:[(0,w.jsxs)(m,{children:["Author: ",e]}),(0,w.jsxs)(v,{ref:o,clientH:u,expandedH:f,children:[(0,w.jsx)(j,{ref:i,children:t}),u>=81&&(0,w.jsx)(Z,{ref:r})]}),u>=81&&(0,w.jsx)(b,{type:"button",onClick:function(){o.current.classList.toggle("expanded"),r.current.classList.toggle("expanded")},children:"Full review"})]})},S=t(5749),y=t(7276),H=t(605),R=function(){var n=(0,x.UO)().mediaId,e=(0,p.useState)(!1),t=(0,a.Z)(e,2),i=t[0],o=t[1],r=(0,p.useState)(null),c=(0,a.Z)(r,2),s=c[0],u=c[1],l=(0,p.useState)(null),h=(0,a.Z)(l,2),d=h[0],g=h[1];return(0,p.useEffect)((function(){if(n){var e=n.split("-")[0],t=n.split("-")[1];o(!0),(0,S.s_)(e,t,"/reviews").then((function(n){g(n.results)})).catch((function(n){u(n.message)})).finally((function(){o(!1)}))}}),[n]),(0,w.jsxs)(w.Fragment,{children:[i&&(0,w.jsx)(y.a,{}),(null===d||void 0===d?void 0:d.length)>0&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{children:"Reviews"}),(0,w.jsx)("ul",{children:null===d||void 0===d?void 0:d.map((function(n){return(0,w.jsx)(k,{author:n.author,content:n.content},n.id)}))})]}),(null===d||void 0===d?void 0:d.length)<1&&(0,w.jsx)(f,{children:"Sorry, this movie has no reviews."}),s&&(0,w.jsx)(H.Page404,{})]})}}}]);
//# sourceMappingURL=74.25e128ed.chunk.js.map