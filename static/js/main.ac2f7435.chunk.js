(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(5),r=n.n(o),c=n(3),a=n(6),s=n(1),i=n.n(s),u=n(2),d=n.n(u),l=(n(12),n(0)),f=d.a.memo((function(t){var e=t.goods;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})}));function b(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var j=function(){var t=Object(u.useState)([]),e=Object(a.a)(t,2),n=e[0],o=e[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Dynamic list of Goods"}),Object(l.jsx)("button",{type:"button","data-cy":"all-button",onClick:Object(c.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}),t)}))),children:"Load all goods"}),Object(l.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:Object(c.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}));case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}),t)}))),children:"Load 5 first goods"}),Object(l.jsx)("button",{type:"button","data-cy":"red-button",onClick:Object(c.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b().then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}),t)}))),children:"Load red goods"}),Object(l.jsx)(f,{goods:n})]})};r.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ac2f7435.chunk.js.map