"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[357],{6357:function(r,t,e){e.r(t);var n=e(5861),a=e(885),u=e(4687),c=e.n(u),s=e(2791),i=e(7689),o=e(7596),p=e(4390),f=e(4834),d=e(184);t.default=function(){var r=(0,i.UO)().id,t=(0,s.useState)(null),e=(0,a.Z)(t,2),u=e[0],h=e[1];(0,s.useEffect)((function(){l(Number(r))}),[r]);var l=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p.tx(t);case 3:if(e=r.sent){r.next=8;break}return r.abrupt("return");case 8:h(e);case 9:r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),o.Am.error(r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(t){return r.apply(this,arguments)}}();return u&&0!==u.length?(0,d.jsx)(f.x,{p:4,borderTop:"1px solid black",children:(0,d.jsx)("ul",{children:u.map((function(r){return(0,d.jsxs)("li",{children:[r.author_details.name?(0,d.jsxs)("b",{children:["Author: ",r.author_details.name]}):(0,d.jsxs)("b",{children:["Author: ",r.author_details.username]}),(0,d.jsx)("p",{children:r.content})]},r.id)}))})}):(0,d.jsx)("p",{children:"No information about reviews"})}},4390:function(r,t,e){e.d(t,{Hg:function(){return o},TP:function(){return p},Wf:function(){return h},tx:function(){return d},vQ:function(){return f}});var n=e(5861),a=e(4687),u=e.n(a),c=e(4569),s=e.n(c);s().defaults.baseURL="https://api.themoviedb.org/3/";var i="a394f032d9659e3b1c5d6c8016e34e75",o=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s().get("/trending/movie/day?api_key=".concat(i));case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s().get("/movie/".concat(t,"?api_key=").concat(i));case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),d=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s().get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s().get("search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=357.dba1caa1.chunk.js.map