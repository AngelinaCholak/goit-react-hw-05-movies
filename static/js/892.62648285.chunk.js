"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[892],{5721:function(t,n,e){e.d(n,{Z:function(){return _}});e(2791);var r=e(7689),a=e(1087),c="FilmsList_film__ui-Or",s="FilmsList_container__BuhVn",i="FilmsList_navLink__x5uFa",o=e.p+"static/media/photo_5947527676661185603_x.9019bc1930e645fb1e30.jpg",u=e(184),_=function(t){var n=t.films,e=(0,r.TH)();return(0,u.jsx)("div",{className:s,children:n.map((function(t){return(0,u.jsx)("div",{className:c,children:(0,u.jsxs)(a.OL,{className:i,state:{from:e},to:"/movies/".concat(t.id),children:[t.poster_path?(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title}):(0,u.jsx)("img",{src:o,alt:"Poster not available for ".concat(t.title)}),(0,u.jsx)("h3",{children:t.title})]})},t.id)}))})}},8022:function(t,n,e){e.d(n,{Bt:function(){return m},DD:function(){return _},Ny:function(){return l},PI:function(){return p},Tg:function(){return u}});var r=e(5861),a=e(7757),c=e.n(a),s=e(5294),i="7525c0a6b0b373d12d109faf7aff5c2b",o="https://api.themoviedb.org/3",u=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:i,language:"en-US"},t.next=3,s.Z.get("".concat(o,"/movie/").concat(n),{params:e});case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:i,language:"en-US"},t.next=3,s.Z.get("".concat(o,"/movie/").concat(n,"/credits"),{params:e});case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:i,language:"en-US"},t.next=3,s.Z.get("".concat(o,"/movie/").concat(n,"/reviews"),{params:e});case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:i,query:n,include_adult:!1,language:"en-US"},t.next=3,s.Z.get("".concat(o,"/search/movie"),{params:e});case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},5493:function(t,n,e){e.r(n);var r=e(5861),a=e(9439),c=e(7757),s=e.n(c),i=e(8022),o=e(5721),u=e(2791),_=e(6729),p=e(3525),m=e(8174),l=e(184);n.default=function(){var t=(0,u.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],f=(0,u.useState)(!1),d=(0,a.Z)(f,2),v=d[0],h=d[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.Tg)();case 3:n=t.sent,c(n),h(!0),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),m.Am.error(t.t0.message);case 11:return t.prev=11,h(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsxs)("div",{className:_.Z.bodyFilms,children:[(0,l.jsx)("h1",{className:_.Z.titleTrending,children:"Trending today"}),v&&(0,l.jsx)(p.Z,{}),0!==e.length&&(0,l.jsx)(o.Z,{films:e})]})}},6729:function(t,n){n.Z={container:"components_container__4DYfz",containerMovie:"components_containerMovie__63g6p",movieContainer:"components_movieContainer__iQSRI",title:"components_title__oiP-B",detailsContainer:"components_detailsContainer__LKRCT",imgDetails:"components_imgDetails__o8J1c",info:"components_info__w4qzX",heading:"components_heading__40ZE+",subtitle:"components_subtitle__epEqM",text:"components_text__JlT08",list:"components_list__ics0i",listItem:"components_listItem__vqwpG",headerLink:"components_headerLink__Hmszt",active:"components_active__hd6t6",bodyFilms:"components_bodyFilms__EhnQB",titleTrending:"components_titleTrending__vMeTQ",filmsTrending:"components_filmsTrending__keulo",castImage:"components_castImage__i6DdO",castList:"components_castList__gxvBk",castName:"components_castName__q4p7Q",castItem:"components_castItem__0OgHL",navLink:"components_navLink__4UA5f",castCharacter:"components_castCharacter__Q77a0",backLink:"components_backLink__xo6l4"}}}]);
//# sourceMappingURL=892.62648285.chunk.js.map