(this["webpackJsonpjokes-app"]=this["webpackJsonpjokes-app"]||[]).push([[0],{14:function(e,t,n){e.exports=n(38)},19:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(11),r=n.n(c),i=(n(19),n(13)),s=n(12),l=n.n(s);n(37);var u=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=function(){l.a.get("https://cat-fact.herokuapp.com/facts/random").then((function(e){c(e.data.text)}))};return Object(a.useEffect)(r,[]),o.a.createElement("div",{className:"App"},o.a.createElement("div",null,"Cat Facts"),o.a.createElement("div",{className:"joke"},n),o.a.createElement("button",{onClick:r},"new cat fact?"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.d1e70b2c.chunk.js.map