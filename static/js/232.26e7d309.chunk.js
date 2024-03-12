"use strict";(self.webpackChunkMovieDB=self.webpackChunkMovieDB||[]).push([[232],{399:function(n,t,r){r.r(t),r.d(t,{FullCast:function(){return U}});var e,a,c,i,o,s,u,d,p=r(9439),l=r(3623),f=r(168),h=r(6088),x=r(1087),m=h.Z.section(e||(e=(0,f.Z)(["\n    padding-top: 24px;\n    padding-bottom: 24px;\n    color: ",";\n"])),(function(n){return n.theme.colors.themeText})),v=h.Z.div(a||(a=(0,f.Z)(["\n    flex-basis: calc((100% - 24px) / 2);\n    border: 1px solid #808080;\n    padding: 16px;\n"]))),j=h.Z.h2(c||(c=(0,f.Z)(["\n    margin-bottom: 16px;\n"]))),g=h.Z.li(i||(i=(0,f.Z)(["\n    &:not(:last-child) {\n        margin-bottom: 16px;\n    }\n"]))),b=h.Z.h3(o||(o=(0,f.Z)(["\n    margin-bottom: 16px;\n"]))),Z=h.Z.li(s||(s=(0,f.Z)(["\n    &:not(:last-child) {\n        margin-bottom: 16px;\n    }\n"]))),_=(0,h.Z)(x.rU)(u||(u=(0,f.Z)(["\n    display: flex;\n    gap: 16px;\n"]))),w=h.Z.img(d||(d=(0,f.Z)(["\n    border-radius: 5px;\n"]))),y=r(2791),k=r(4390),C=r(7689),S=r(4321),L=r(8429),N=r.p+"static/media/no-poster_66.f4d9f35476d0d0385334.jpg",O=r(9751),T=r(3329),U=function(){var n,t="https://image.tmdb.org/t/p/w66_and_h66_face",r="https://image.tmdb.org/t/p/w132_and_h132_face",e=(0,C.UO)().mediaId,a=(0,y.useState)(!1),c=(0,p.Z)(a,2),i=c[0],o=c[1],s=(0,y.useState)(null),u=(0,p.Z)(s,2),d=u[0],f=u[1],h=(0,y.useState)(),x=(0,p.Z)(h,2),U=x[0],F=x[1],I=(0,y.useState)(),X=(0,p.Z)(I,2),B=X[0],D=X[1];return(0,y.useEffect)((function(){o(!0);var n=e.split("-")[0],t=e.split("-")[1];(0,k.s_)(n,t,"movie"===n?"/credits":"/aggregate_credits").then((function(n){F((0,L.i)(n.cast)),D((0,O.X)(n.crew))})).catch((function(n){f(n.message),console.log("full cast",n)})).finally((function(){return o(!1)}))}),[e]),(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)(m,{children:[i&&(0,T.jsx)(S.a,{}),(0,T.jsxs)(l.W,{style:{display:"flex",gap:"24px"},children:[(0,T.jsxs)(v,{children:[(0,T.jsx)(j,{children:"Cast"}),(0,T.jsx)("ul",{children:null===U||void 0===U?void 0:U.map((function(n){var e=n.id,a=n.castId,c=n.personName,i=n.profile_path,o=n.role;return(0,T.jsx)(Z,{children:(0,T.jsxs)(_,{to:"/person/".concat(e),children:[(0,T.jsxs)("picture",{children:[(0,T.jsx)("source",{srcSet:i?"".concat(t+i," 1x, ").concat(r+i," 2x"):N}),(0,T.jsx)(w,{src:i?t+i:N,alt:c})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("h3",{children:c}),(0,T.jsx)("p",{children:o})]})]})},a)}))})]}),(0,T.jsxs)(v,{children:[(0,T.jsx)(j,{children:"Crew"}),(0,T.jsx)("ul",{children:null===B||void 0===B||null===(n=B.crew)||void 0===n?void 0:n.map((function(n){var e;return(0,T.jsxs)(g,{children:[(0,T.jsx)(b,{style:{textTransform:"capitalize"},children:Object.keys(n)[0]}),(0,T.jsx)("ul",{children:null===(e=n[Object.keys(n)[0]])||void 0===e?void 0:e.map((function(n){var e=n.id,a=n.credit_id,c=n.job,i=n.personName,o=n.profile_path;return(0,T.jsx)(Z,{children:(0,T.jsxs)(_,{to:"/person/".concat(e),children:[(0,T.jsxs)("picture",{children:[(0,T.jsx)("source",{srcSet:o?"".concat(t+o," 1x, ").concat(r+o," 2x"):N}),(0,T.jsx)(w,{src:o?t+o:N,alt:i})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("h3",{children:i}),(0,T.jsx)("p",{children:c})]})]})},a)}))})]},Object.keys(n)[0])}))})]})]}),d&&(0,T.jsx)(T.Fragment,{})]})})}},4321:function(n,t,r){r.d(t,{a:function(){return i}});var e=r(8966),a=r(964),c=r(3329),i=function(){return(0,c.jsx)(a.e,{children:(0,c.jsx)(e.Z1,{height:"100",width:"100",color:"#369daf",wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},4390:function(n,t,r){r.d(t,{AE:function(){return l},OH:function(){return d},TZ:function(){return f},XT:function(){return u},s_:function(){return p}});var e=r(5861),a=r(4687),c=r.n(a),i=r(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="49f12b338a85dcd14c7e661f8eadc77e",s="&language=en-US",u=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/".concat(t,"/").concat(r,"?api_key=").concat(o+s));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t,r,e){var a,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/".concat(t,"?api_key=").concat(o+s,"&page=").concat(e,"&query=").concat(r));case 2:return a=n.sent,u=a.data,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t,r,e){var a,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(t,"/").concat(r).concat(e,"?api_key=").concat(o+s));case 2:return a=n.sent,u=a.data,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(t,"/").concat(r,"/videos?api_key=").concat(o+s));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("person/".concat(t,"?api_key=").concat(o+s));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8429:function(n,t,r){r.d(t,{i:function(){return e}});var e=function(n){return n.map((function(n){var t,r=n.id,e=n.roles,a=n.credit_id,c=n.character,i=n.name,o=n.original_name,s=n.profile_path,u=e?e[0].credit_id:a;return e?t=e[0].character:c&&(t=c),t&&""!==t||(t="N/a"),{id:r,castId:u,profile_path:s,personName:null!==i&&void 0!==i?i:o,role:t}}))}},9751:function(n,t,r){r.d(t,{X:function(){return a}});var e=r(4942),a=function(n){var t=[],r=n.map((function(n){var r=n.id,e=n.credit_id,a=n.department,c=n.job,i=n.jobs,o=n.name,s=n.original_name,u=n.profile_path,d=i?i[0].credit_id:e,p=o||s,l=i?i[0].job:c;return"directing"===a.toLowerCase()&&"director"===l.toLowerCase()&&t.push({id:r,credit_id:d,personName:p,profile_path:u,job:l}),{id:r,credit_id:d,department:a,job:l,personName:p,profile_path:u}})),a=[];r.map((function(n){return a.includes(n.department.toLowerCase())?null:a.push(n.department.toLowerCase())}));var c=[];return a.map((function(n){var t=[];return r.map((function(r){if(r.department.toLowerCase()===n){var e=t.find((function(n){return n.id===r.id}));return e?e.job="".concat(e.job,", ").concat(r.job):t.push(r)}return null})),c.push((0,e.Z)({},n,[].concat(t)))})),{crew:c,director:t}}}}]);
//# sourceMappingURL=232.26e7d309.chunk.js.map