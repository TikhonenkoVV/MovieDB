"use strict";(self.webpackChunkMovieDB=self.webpackChunkMovieDB||[]).push([[232],{399:function(n,t,e){e.r(t),e.d(t,{FullCast:function(){return U}});var r,a,c,i,o,s,u,d,p=e(9439),l=e(3623),f=e(168),h=e(6088),x=e(1087),m=h.Z.div(r||(r=(0,f.Z)(["\n    flex-basis: calc((100% - 24px) / 2);\n    color: ",";\n    border: 1px solid #808080;\n    padding: 16px;\n"])),(function(n){return n.theme.colors.themeText})),v=h.Z.div(a||(a=(0,f.Z)(["\n    @media "," {\n        display: flex;\n        gap: ",";\n    }\n    @media "," {\n        gap: ",";\n    }\n"])),(function(n){return n.theme.breakpoints.m}),(function(n){return n.theme.spacing.retreatM}),(function(n){return n.theme.breakpoints.xl}),(function(n){return n.theme.spacing.retreatL})),j=h.Z.h2(c||(c=(0,f.Z)(["\n    margin-bottom: 16px;\n"]))),g=h.Z.li(i||(i=(0,f.Z)(["\n    &:not(:last-child) {\n        margin-bottom: 16px;\n    }\n"]))),b=h.Z.h3(o||(o=(0,f.Z)(["\n    margin-bottom: 16px;\n"]))),Z=h.Z.li(s||(s=(0,f.Z)(["\n    &:not(:last-child) {\n        margin-bottom: 16px;\n    }\n"]))),_=(0,h.Z)(x.rU)(u||(u=(0,f.Z)(["\n    display: flex;\n    gap: 16px;\n"]))),w=h.Z.img(d||(d=(0,f.Z)(["\n    border-radius: 5px;\n"]))),k=e(2791),y=e(4390),C=e(7689),L=e(4321),S=e(8429),N=e.p+"static/media/no-poster_66.f4d9f35476d0d0385334.jpg",O=e(9751),T=e(3329),U=function(){var n,t="https://image.tmdb.org/t/p/w66_and_h66_face",e="https://image.tmdb.org/t/p/w132_and_h132_face",r=(0,C.UO)().mediaId,a=(0,k.useState)(!1),c=(0,p.Z)(a,2),i=c[0],o=c[1],s=(0,k.useState)(null),u=(0,p.Z)(s,2),d=u[0],f=u[1],h=(0,k.useState)(),x=(0,p.Z)(h,2),U=x[0],I=x[1],M=(0,k.useState)(),X=(0,p.Z)(M,2),B=X[0],D=X[1];return(0,k.useEffect)((function(){o(!0);var n=r.split("-")[0],t=r.split("-")[1];(0,y.s_)(n,t,"movie"===n?"/credits":"/aggregate_credits").then((function(n){I((0,S.i)(n.cast)),D((0,O.X)(n.crew))})).catch((function(n){f(n.message),console.log("full cast",n)})).finally((function(){return o(!1)}))}),[r]),(0,T.jsxs)("section",{className:"padding-top",children:[i&&(0,T.jsx)(L.a,{}),(0,T.jsx)(l.W,{children:(0,T.jsxs)(v,{children:[(0,T.jsxs)(m,{children:[(0,T.jsx)(j,{children:"Cast"}),(0,T.jsx)("ul",{children:null===U||void 0===U?void 0:U.map((function(n){var r=n.id,a=n.castId,c=n.personName,i=n.profile_path,o=n.role;return(0,T.jsx)(Z,{children:(0,T.jsxs)(_,{to:"/person/".concat(r),children:[(0,T.jsxs)("picture",{children:[(0,T.jsx)("source",{srcSet:i?"".concat(t+i," 1x, ").concat(e+i," 2x"):N}),(0,T.jsx)(w,{src:i?t+i:N,alt:c})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("h3",{children:c}),(0,T.jsx)("p",{children:o})]})]})},a)}))})]}),(0,T.jsxs)(m,{children:[(0,T.jsx)(j,{children:"Crew"}),(0,T.jsx)("ul",{children:null===B||void 0===B||null===(n=B.crew)||void 0===n?void 0:n.map((function(n){var r;return(0,T.jsxs)(g,{children:[(0,T.jsx)(b,{style:{textTransform:"capitalize"},children:Object.keys(n)[0]}),(0,T.jsx)("ul",{children:null===(r=n[Object.keys(n)[0]])||void 0===r?void 0:r.map((function(n){var r=n.id,a=n.credit_id,c=n.job,i=n.personName,o=n.profile_path;return(0,T.jsx)(Z,{children:(0,T.jsxs)(_,{to:"/person/".concat(r),children:[(0,T.jsxs)("picture",{children:[(0,T.jsx)("source",{srcSet:o?"".concat(t+o," 1x, ").concat(e+o," 2x"):N}),(0,T.jsx)(w,{src:o?t+o:N,alt:i})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("h3",{children:i}),(0,T.jsx)("p",{children:c})]})]})},a)}))})]},Object.keys(n)[0])}))})]})]})}),d&&(0,T.jsx)(T.Fragment,{})]})}},4321:function(n,t,e){e.d(t,{a:function(){return i}});var r=e(8966),a=e(964),c=e(3329),i=function(){return(0,c.jsx)(a.e,{children:(0,c.jsx)(r.Z1,{height:"100",width:"100",color:"#369daf",wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},4390:function(n,t,e){e.d(t,{AE:function(){return l},OH:function(){return d},TZ:function(){return f},XT:function(){return u},s_:function(){return p}});var r=e(5861),a=e(4687),c=e.n(a),i=e(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="49f12b338a85dcd14c7e661f8eadc77e",s="&language=en-US",u=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/".concat(t,"/").concat(e,"?api_key=").concat(o+s));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t,e,r){var a,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/".concat(t,"?api_key=").concat(o+s,"&page=").concat(r,"&query=").concat(e));case 2:return a=n.sent,u=a.data,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t,e,r){var a,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(t,"/").concat(e).concat(r,"?api_key=").concat(o+s));case 2:return a=n.sent,u=a.data,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(t,"/").concat(e,"/videos?api_key=").concat(o+s));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("person/".concat(t,"?api_key=").concat(o+s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8429:function(n,t,e){e.d(t,{i:function(){return r}});var r=function(n){return n.map((function(n){var t,e=n.id,r=n.roles,a=n.credit_id,c=n.character,i=n.name,o=n.original_name,s=n.profile_path,u=r?r[0].credit_id:a;return r?t=r[0].character:c&&(t=c),t&&""!==t||(t="N/a"),{id:e,castId:u,profile_path:s,personName:null!==i&&void 0!==i?i:o,role:t}}))}},9751:function(n,t,e){e.d(t,{X:function(){return a}});var r=e(4942),a=function(n){var t=[],e=n.map((function(n){var e=n.id,r=n.credit_id,a=n.department,c=n.job,i=n.jobs,o=n.name,s=n.original_name,u=n.profile_path,d=i?i[0].credit_id:r,p=o||s,l=i?i[0].job:c;return"directing"===a.toLowerCase()&&"director"===l.toLowerCase()&&t.push({id:e,credit_id:d,personName:p,profile_path:u,job:l}),{id:e,credit_id:d,department:a,job:l,personName:p,profile_path:u}})),a=[];e.map((function(n){return a.includes(n.department.toLowerCase())?null:a.push(n.department.toLowerCase())}));var c=[];return a.map((function(n){var t=[];return e.map((function(e){if(e.department.toLowerCase()===n){var r=t.find((function(n){return n.id===e.id}));return r?r.job="".concat(r.job,", ").concat(e.job):t.push(e)}return null})),c.push((0,r.Z)({},n,[].concat(t)))})),{crew:c,director:t}}}}]);
//# sourceMappingURL=232.465cbc7d.chunk.js.map