"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[357],{8022:function(t,n,e){e.d(n,{Bt:function(){return m},DD:function(){return p},Ny:function(){return l},PI:function(){return _},Tg:function(){return u}});var a=e(5861),r=e(7757),c=e.n(r),s=e(5294),o="7525c0a6b0b373d12d109faf7aff5c2b",i="https://api.themoviedb.org/3",u=function(){var t=(0,a.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)(c().mark((function t(n){var e,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:o,language:"en-US"},t.next=3,s.Z.get("".concat(i,"/movie/").concat(n),{params:e});case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),_=function(){var t=(0,a.Z)(c().mark((function t(n){var e,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:o,language:"en-US"},t.next=3,s.Z.get("".concat(i,"/movie/").concat(n,"/credits"),{params:e});case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,a.Z)(c().mark((function t(n){var e,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:o,language:"en-US"},t.next=3,s.Z.get("".concat(i,"/movie/").concat(n,"/reviews"),{params:e});case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)(c().mark((function t(n){var e,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:o,query:n,include_adult:!1,language:"en-US"},t.next=3,s.Z.get("".concat(i,"/search/movie"),{params:e});case 3:return a=t.sent,t.abrupt("return",a.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},3357:function(t,n,e){e.r(n);var a=e(5861),r=e(9439),c=e(7757),s=e.n(c),o=e(2791),i=e(7689),u=e(8022),p=e(6729),_=e(8488),m=e(8174),l=e(3525),f=e(184);n.default=function(){var t=(0,o.useState)(null),n=(0,r.Z)(t,2),e=n[0],c=n[1],v=(0,i.UO)().movieId,d=(0,o.useState)(!0),h=(0,r.Z)(d,2),g=h[0],k=h[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,a.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.PI)(v);case 3:0===(n=t.sent).cast.length&&0===n.crew.length?m.Am.info("Unfortunately, there is no cast information available."):c(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),m.Am.error((null===t.t0||void 0===t.t0?void 0:t.t0.message)||"Something went wrong");case 10:return t.prev=10,k(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();g&&t()}),[v,g]),g?(0,f.jsx)(l.Z,{}):(0,f.jsx)("div",{className:p.Z.castContainer,children:e&&(0,f.jsx)("ul",{className:p.Z.castList,children:e.cast.map((function(t){return(0,f.jsxs)("li",{className:p.Z.castItem,children:[(0,f.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w200".concat(t.profile_path):_,alt:t.name,className:p.Z.castImage}),(0,f.jsx)("p",{className:p.Z.castName,children:t.name}),(0,f.jsxs)("p",{className:p.Z.castCharacter,children:["Character: ",t.character]})]},t.id)}))})})}},6729:function(t,n){n.Z={container:"components_container__4DYfz",containerMovie:"components_containerMovie__63g6p",movieContainer:"components_movieContainer__iQSRI",title:"components_title__oiP-B",detailsContainer:"components_detailsContainer__LKRCT",imgDetails:"components_imgDetails__o8J1c",info:"components_info__w4qzX",heading:"components_heading__40ZE+",subtitle:"components_subtitle__epEqM",text:"components_text__JlT08",list:"components_list__ics0i",listItem:"components_listItem__vqwpG",headerLink:"components_headerLink__Hmszt",active:"components_active__hd6t6",bodyFilms:"components_bodyFilms__EhnQB",titleTrending:"components_titleTrending__vMeTQ",filmsTrending:"components_filmsTrending__keulo",castImage:"components_castImage__i6DdO",castList:"components_castList__gxvBk",castName:"components_castName__q4p7Q",castItem:"components_castItem__0OgHL",navLink:"components_navLink__4UA5f",castCharacter:"components_castCharacter__Q77a0",backLink:"components_backLink__xo6l4"}},8488:function(t,n,e){t.exports=e.p+"static/media/photo_5947527676661185603_x.9019bc1930e645fb1e30.jpg"}}]);
//# sourceMappingURL=357.8bb0dacb.chunk.js.map