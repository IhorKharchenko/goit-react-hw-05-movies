"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785,306],{1306:function(n,r,t){t.r(r),t.d(r,{default:function(){return d}});var e,a=t(2437),u=t(7689),c=t(168),o=t(5397),i=t(4834),s=t(1683),p=(0,o.Z)(i.x)(e||(e=(0,c.Z)(["\n  /* text-align: center; */\n  height: 100vh;\n  background: url(",");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n"])),s),f=t(184),d=function(n){var r,t,e=n.rtnBtn,c=void 0===e||e,o=(0,u.TH)();return(0,f.jsx)(p,{children:c&&(0,f.jsx)(a.Q,{returnPath:null!==(r=null===(t=o.state)||void 0===t?void 0:t.from)&&void 0!==r?r:"/home",text:"Back to main"})})}},2437:function(n,r,t){t.d(r,{Q:function(){return p}});var e,a=t(168),u=t(5397),c=t(6731),o=(0,u.Z)(c.rU)(e||(e=(0,a.Z)(["\n  align-items: center;\n  display: inline-flex;\n  margin-top: 8px;\n  /* margin: 0; */\n  padding: 8px;\n  gap: 8px;\n  border: 1px solid #07c;\n  border-radius: 8px;\n  color: #1f2e40;\n  &:hover,\n  :focus {\n    background-color: #07c;\n    border-color: #05a;\n    color: #fff;\n  }\n"]))),i=t(4651),s=t(184),p=function(n){var r=n.returnPath,t=n.text;return(0,s.jsxs)(o,{to:r,children:[(0,s.jsx)(i.khq,{}),t]})}},6785:function(n,r,t){t.r(r);var e=t(5861),a=t(885),u=t(4687),c=t.n(u),o=t(1306),i=t(2791),s=t(7689),p=t(7596),f=t(4390),d=t(4834),l=t(184);r.default=function(){var n=(0,s.UO)().id,r=(0,i.useState)(null),t=(0,a.Z)(r,2),u=t[0],h=t[1],v=(0,i.useMemo)((function(){return function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.tx(r);case 3:if(t=n.sent){n.next=8;break}return n.abrupt("return");case 8:h(t);case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),p.Am.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(r){return n.apply(this,arguments)}}()}),[]);return(0,i.useEffect)((function(){v(Number(n))}),[v,n]),u&&0!==u.length?(0,l.jsx)(d.x,{p:4,borderTop:"1px solid black",children:(0,l.jsx)("ul",{children:u.map((function(n){return(0,l.jsxs)("li",{children:[n.author_details.name?(0,l.jsxs)("b",{children:["Author: ",n.author_details.name]}):(0,l.jsxs)("b",{children:["Author: ",n.author_details.username]}),(0,l.jsx)("p",{children:n.content})]},n.id)}))})}):(0,l.jsx)(o.default,{rtnBtn:!1})}},4390:function(n,r,t){t.d(r,{Hg:function(){return s},TP:function(){return p},Wf:function(){return l},tx:function(){return d},vQ:function(){return f}});var e=t(5861),a=t(4687),u=t.n(a),c=t(4569),o=t.n(c);o().defaults.baseURL="https://api.themoviedb.org/3/";var i="a394f032d9659e3b1c5d6c8016e34e75",s=function(){var n=(0,e.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/trending/movie/day?api_key=".concat(i));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(r,"?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(r,"/credits?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(r,"/reviews?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("search/movie?api_key=".concat(i,"&query=").concat(r));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},1683:function(n,r,t){n.exports=t.p+"static/media/pageNotFound.35814c64114f12c961d1.jpg"}}]);
//# sourceMappingURL=785.98e795f5.chunk.js.map