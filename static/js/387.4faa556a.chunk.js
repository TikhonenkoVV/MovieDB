"use strict";(self.webpackChunkMovieDB=self.webpackChunkMovieDB||[]).push([[387],{3387:function(n,t,e){e.r(t),e.d(t,{Cast:function(){return w}});var r,i,a,c,o=e(9439),u=e(7689),s=e(168),p=e(6088),l=p.Z.h2(r||(r=(0,s.Z)(["\n    color: ",";\n    margin-bottom: 20px;\n    transition: color ",";\n"])),(function(n){return n.theme.colors.themeText}),(function(n){return n.theme.baseTransition})),f=p.Z.ul(i||(i=(0,s.Z)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n    grid-gap: ","px;\n    @media (min-width: 533px) {\n        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    }\n"])),(function(n){return 5*n.theme.spacing.step})),d=p.Z.li(a||(a=(0,s.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding-bottom: 10px;\n    align-items: center;\n    color: ",";\n    background-color: ",";\n    & p {\n        padding: 0 5px;\n        line-height: 1.3;\n        text-align: center;\n    }\n    & p:last-child {\n        margin-top: auto;\n    }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent})),h=p.Z.img(c||(c=(0,s.Z)(["\n    width: 100%;\n    object-fit: cover;\n    object-position: top;\n    aspect-ratio: 3 / 4;\n"]))),m=e(2791),x=e(4390),g=e(9245),v=e(4757),b=e(8174),Z=e(184),w=function(){var n=(0,u.UO)().movieId,t=(0,m.useState)(!1),e=(0,o.Z)(t,2),r=e[0],i=e[1],a=(0,m.useState)([]),c=(0,o.Z)(a,2),s=c[0],p=c[1],w=(0,m.useState)([]),j=(0,o.Z)(w,2),y=j[0],k=j[1];return(0,m.useEffect)((function(){n&&(i(!0),(0,x.HF)(n,"/credits").then((function(n){k(n.cast)})).catch((function(n){p(n.message),(0,b.Am)(n.message)})).finally((function(){i(!1)})))}),[n]),(0,Z.jsxs)(Z.Fragment,{children:[r&&(0,Z.jsx)(g.a,{}),y.length>0&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(l,{children:"Cast"}),(0,Z.jsx)(f,{children:null===y||void 0===y?void 0:y.map((function(n){var t=n.credit_id,e=n.profile_path,r=n.name,i=n.character;return(0,Z.jsxs)(d,{children:[(0,Z.jsx)(h,{src:e?"https://image.tmdb.org/t/p/w500/"+e:v,alt:"_"}),(0,Z.jsx)("p",{children:(0,Z.jsx)("b",{children:r})}),(0,Z.jsx)("p",{children:i})]},t)}))})]}),y.length<1&&(0,Z.jsx)(l,{children:"Sorry, no cast information available."}),s&&(0,Z.jsx)(b.Ix,{})]})}},9245:function(n,t,e){e.d(t,{a:function(){return u}});var r,i=e(8966),a=e(168),c=e(6088).Z.div(r||(r=(0,a.Z)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n    background-color: #00000080;\n    transition: opacity 250ms, visibility 250ms;\n    z-index: 100;\n"]))),o=e(184),u=function(){return(0,o.jsx)(c,{children:(0,o.jsx)(i.Z1,{height:"100",width:"100",color:"#369daf",wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},4390:function(n,t,e){e.d(t,{HF:function(){return p},LF:function(){return l},iL:function(){return u},uG:function(){return s}});var r=e(5861),i=e(4687),a=e.n(i),c=e(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="49f12b338a85dcd14c7e661f8eadc77e",u=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/".concat(t,"?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(t,e){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&page=").concat(e,"&query=").concat(t));case 2:return r=n.sent,i=r.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t,e){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t).concat(e,"?api_key=").concat(o));case 2:return r=n.sent,i=r.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/videos?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4757:function(n,t,e){n.exports=e.p+"static/media/no-poster.33ea28eed030003a405e.jpg"}}]);
//# sourceMappingURL=387.4faa556a.chunk.js.map