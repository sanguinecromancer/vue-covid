(function(t){function e(e){for(var r,c,i=e[0],l=e[1],s=e[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Covids")],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("p",[t._v("zeynepaykal@gmail.com")]),n("h3",[t._v("COVID-19 Data from USA:")]),n("table",{staticClass:"table-striped",staticStyle:{width:"100%","border-collapse":"collapse"},attrs:{id:"covids"}},[t._m(0),n("tbody",t._l(t.covids,(function(e){return n("tr",{key:e.state},[n("td",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.state))]),n("td",{staticStyle:{color:"#b30000","font-weight":"bold"}},[t._v(t._s(e.death))]),n("td",[t._v(t._s(e.inIcuCurrently))]),n("td",[t._v(t._s(e.negative))]),n("td",[t._v(t._s(e.hospitalizedCurrently))])])})),0)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("State")]),n("th",{attrs:{scope:"col"}},[t._v("Total deaths")]),n("th",{attrs:{scope:"col"}},[t._v("Currently in ICU")]),n("th",{attrs:{scope:"col"}},[t._v("Negative results")]),n("th",{attrs:{scope:"col"}},[t._v("Currently hospitalized")])])])}],l=n("bc3a"),s=n.n(l),u={name:"Covid",data:function(){return{covids:null}},created:function(){var t=this;s.a.get("https://api.covidtracking.com/v1/states/current.json").then((function(e){t.covids=e.data}))}},p=u,f=(n("bb13"),n("2877")),d=Object(f["a"])(p,c,i,!1,null,null,null),v=d.exports,h={name:"app",components:{Covids:v}},b=h,_=(n("034f"),Object(f["a"])(b,o,a,!1,null,null,null)),y=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(y)}}).$mount("#app")},"85ec":function(t,e,n){},bb13:function(t,e,n){"use strict";var r=n("c19a"),o=n.n(r);o.a},c19a:function(t,e,n){}});
//# sourceMappingURL=app.cfaf7ce9.js.map