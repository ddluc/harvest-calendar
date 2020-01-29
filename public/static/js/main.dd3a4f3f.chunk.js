(this["webpackJsonpharvest-calendar-ui"]=this["webpackJsonpharvest-calendar-ui"]||[]).push([[0],{16:function(e,a,t){e.exports=t(50)},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(13),l=t.n(r),i=t(15),o=t(2),s={marketData:null,appTitle:"Harvest Calendar",searchInput:"",view:"season",activeSeason:1,activeMonth:"MAY",activeSegment:2,pricingMode:!1},u=function(e,a){switch(a.type){case"FETCH_MARKET_DATA":return Object(o.a)({},e,{marketData:a.payload});case"SET_ACTIVE_SEASON":return Object(o.a)({},e,{activeSeason:a.payload,activeMonth:null,activeSegment:null});case"SET_ACTIVE_SEGMENT":return Object(o.a)({},e,{activeSegment:a.payload.segment,activeMonth:a.payload.month});case"SET_PRICING_MODE":return Object(o.a)({},e,{pricingMode:a.payload});case"APPLY_SEARCH_FILTER":return Object(o.a)({},e,{searchInput:a.payload});default:return Object(o.a)({},e)}},m=c.a.createContext(),d=function(e){var a=c.a.useReducer(u,s),t=Object(i.a)(a,2),n=t[0],r=t[1];return c.a.createElement(m.Provider,{value:{state:n,dispatch:r}},e.children)},v=function(e){var a=e.marketData.months,t=e.activeSeason,n=[],c=[];switch(t){case 1:c=["MAR","APR","MAY","JUN"];break;case 2:c=["JUN","JUL","AUG","SEP"];break;case 3:c=["SEP","OCT","NOV","DEC"];break;case 4:c=["DEC","JAN","FEB","MAR"];break;default:c=["MAR","APR","MAY","JUN"]}return c.forEach((function(e){a.forEach((function(a){a.key===e&&n.push(a)}))})),n},E=function(){return[{id:1,key:"early",label:"Early"},{id:2,key:"mid",label:"Mid"},{id:3,key:"late",label:"Late"}]},p=t(3),h=t.n(p),f=t(14),y=t.n(f),k=function(){var e,a;return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat("localhost"===document.location.hostname?"http://localhost:3300":"http://harvestapp.ddluc.com","/api/market_data"),t.prev=1,t.next=4,h.a.awrap(y.a.get(e));case 4:return a=t.sent,t.abrupt("return",a.data);case 8:return t.prev=8,t.t0=t.catch(1),console.error(t.t0),t.abrupt("return",null);case 12:case"end":return t.stop()}}),null,null,[[1,8]])},g=function(e,a){e({type:"SET_ACTIVE_SEASON",payload:a})};t(40);var b=function(e){e.view;var a=e.cellMap,t=e.months,n=c.a.useContext(m),r=n.state,l=n.dispatch,i=t.map((function(e,t){var n=a.header[e.key],r="header-month-".concat(e.key);return c.a.createElement("div",{key:e.id,id:r,className:"header-cell cell-".concat(n)},e.label)})),o=[];return t.forEach((function(e){var a=E(),t=1;a.forEach((function(a){var n="".concat(e.key,"-").concat(a.id),i=n==="".concat(r.activeMonth,"-").concat(r.activeSegment)?"active":"",s=c.a.createElement("div",{key:n,className:"sub-header-cell cell-".concat(t," ").concat(i),onClick:function(){return function(e,a,t){e({type:"SET_ACTIVE_SEGMENT",payload:{segment:t.id,month:a.key}})}(l,e,a)}},a.label);o.push(s),t++}))})),c.a.createElement("div",{className:"calendar-header"},c.a.createElement("div",{className:"header-cell cell-label"},"Vegetable"),i,c.a.createElement("div",{className:"sub-header-cell cell-label"}),o)};var C=function(){return c.a.createElement("div",{className:"icon"},c.a.createElement("svg",{width:"20px",height:"20px",viewBox:"0 0 200 200"},c.a.createElement("g",{id:"Home",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},c.a.createElement("g",{id:"Icons",transform:"translate(-311.000000, -387.000000)"},c.a.createElement("g",{id:"peak",transform:"translate(311.000000, 387.000000)"},c.a.createElement("circle",{id:"Oval",stroke:"#687E55",strokeWidth:"20",fill:"#829B6B",cx:"100",cy:"100",r:"80"}))))))};var N=function(){return c.a.createElement("div",{className:"icon"},c.a.createElement("svg",{width:"20px",height:"20px",viewBox:"0 0 200 200"},c.a.createElement("g",{id:"Home",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},c.a.createElement("g",{id:"Icons",transform:"translate(-311.000000, -387.000000)"},c.a.createElement("g",{id:"peak",transform:"translate(311.000000, 387.000000)"},c.a.createElement("circle",{id:"Oval",stroke:"#908C5C",strokeWidth:"20",fill:"#F3ECA0",cx:"100",cy:"100",r:"80"}))))))};t(41);var S=function(e){var a=e.mPos,t=e.cellIndex,n=e.id,r=e.isActive,l=(e.showPrice,c.a.useContext(m)),i=l.state,o=(l.dispatch,""),s=a.status.charAt(0).toUpperCase()+a.status.slice(1);!0===i.pricingMode?o=a.value>0?c.a.createElement("div",null,a.value,c.a.createElement("span",{class:"unit"},a.unit)):"-":"none"===a.status||"off"===a.status?o="-":"early"===a.status?o=c.a.createElement("div",null,c.a.createElement(N,null),c.a.createElement("span",{class:"status"},s)):"peak"===a.status?o=c.a.createElement("div",null,c.a.createElement(C,null),c.a.createElement("span",{class:"status"},s)):"late"===a.status&&(o=c.a.createElement("div",null,c.a.createElement(N,null),c.a.createElement("span",{class:"status"},s)));var u="".concat(a.status);return r&&(u="".concat(u," active")),!0===i.pricingMode&&(u="".concat(u," price")),c.a.createElement("div",{id:n,className:"calendar-cell cell-".concat(t," ").concat(u)},o)};t(42);var M=function(e){var a=e.vegetable,t=e.cellMap,n=c.a.useContext(m),r=n.state,l=(n.dispatch,v(r),[]);return a.mPos.forEach((function(e){var n="".concat(e.month,"-").concat(e.segment);if(Object.keys(t.body).includes(n)){var i="".concat(a.key,"-").concat(n),o=t.body[n],s=n==="".concat(r.activeMonth,"-").concat(r.activeSegment)?"active":"",u=!0===r.pricingMode?"showPrice":"";l.push(c.a.createElement(S,{key:i,mPos:e,id:i,cellIndex:o,isActive:s,showPrice:u}))}})),c.a.createElement("div",{className:"calendar-row"},c.a.createElement("div",{className:"calendar-cell cell-label"},a.label),l)};t(43);var A=function(){var e=c.a.useContext(m),a=e.state,t=e.dispatch;if(c.a.useEffect((function(){!function(e){var a;h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.awrap(k());case 2:return a=t.sent,t.abrupt("return",e({type:"FETCH_MARKET_DATA",payload:a}));case 4:case"end":return t.stop()}}))}(t)}),[]),null!==a.marketData){var n=function(e){var a=e.marketData,t=e.activeMonth,n=e.activeSegment,c=[],r=[],l=[],i=[],o=[];return n?(a.vegetables.forEach((function(e){e.mPos.forEach((function(a){"".concat(a.month,"-").concat(a.segment)==="".concat(t,"-").concat(n)&&("peak"===a.status&&c.push(e),"early"===a.status&&r.push(e),"late"===a.status&&l.push(e),"off"===a.status&&i.push(e),"none"===a.status&&o.push(e))}))})),[].concat(c,r,l,i,o)):a.vegetables}(a);n=function(e,a){var t=e.searchInput;if(""!==t&&t.length>2){var n=[];return a.forEach((function(e){var a=e.label.toLowerCase(),c=t.trim().toLowerCase();a.includes(c)&&n.push(e)})),n}return a}(a,n);var r=v(a),l=function(e){var a=E(),t=v(e),n={body:{},header:{}},c=1,r=1;return t.forEach((function(e){n.header[e.key]=r,r++,a.forEach((function(a){var t="".concat(e.key,"-").concat(a.id);n.body[t]=c,c++}))})),n}(a);return c.a.createElement("div",{className:"calendar"},c.a.createElement(b,{months:r,cellMap:l,view:a.view}),c.a.createElement("div",{className:"calendar-body"},n.map((function(e){return c.a.createElement(M,{key:e.id,vegetable:e,cellMap:l})}))))}return"Loading..."};t(44);var x=function(e){var a=e.placeholder,t=c.a.useContext(m),n=t.state,r=t.dispatch;return c.a.createElement("div",{className:"search-field"},c.a.createElement("input",{type:"text",placeholder:a,onChange:function(e){return function(e,a){e({type:"APPLY_SEARCH_FILTER",payload:a})}(r,e.target.value)},value:n.searchInput}))};var w=function(){return c.a.createElement("div",{className:"icon"},c.a.createElement("svg",{width:"15px",height:"14px",viewBox:"0 0 15 14",version:"1.1"},c.a.createElement("g",{id:"Home",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},c.a.createElement("g",{id:"Desktop-HD",transform:"translate(-36.000000, -265.000000)",stroke:"#353535",strokeWidth:"2.42"},c.a.createElement("g",{id:"Sidebar"},c.a.createElement("g",{id:"Options",transform:"translate(22.000000, 223.000000)"},c.a.createElement("g",{id:"Spring",transform:"translate(4.000000, 34.000000)"},c.a.createElement("g",{id:"Exit",transform:"translate(11.606299, 10.000000)"},c.a.createElement("path",{d:"M11.3385827,0 L0,10",id:"Path-8"}),c.a.createElement("path",{d:"M11.3385827,0 L0,10",id:"Path-8-Copy",transform:"translate(5.669291, 5.000000) scale(-1, 1) translate(-5.669291, -5.000000) "})))))))))};t(45);var T=function(e){var a=e.label,t=e.type,n=e.active,r=e.onClick,l=n?"active":"";return c.a.createElement("button",{className:"".concat(t," ").concat(l),onClick:r},n?c.a.createElement(w,null):"",a)};t(46);var P=function(){var e=c.a.useContext(m),a=e.state,t=e.dispatch;return c.a.createElement("div",{className:"season-picker"},c.a.createElement("h4",null,"Season"),c.a.createElement(T,{label:"Spring",type:"primary",active:1===a.activeSeason,onClick:function(){return g(t,1)}}),c.a.createElement(T,{label:"Summer",type:"primary",active:2===a.activeSeason,onClick:function(){return g(t,2)}}),c.a.createElement(T,{label:"Fall",type:"primary",active:3===a.activeSeason,onClick:function(){return g(t,3)}}),c.a.createElement(T,{label:"Winter",type:"primary",active:4===a.activeSeason,onClick:function(){return g(t,4)}}))};t(47);var _=function(){var e=c.a.useContext(m),a=e.state,t=e.dispatch,n="",r="",l="";return!1===a.pricingMode?(n="off",r="OFF",l=!0):!0===a.pricingMode&&(n="on",r=" ON ",l=!1),c.a.createElement("div",{className:"pricing-toggle"},c.a.createElement("h4",null,"Pricing Mode"),c.a.createElement("a",{class:"toggle ".concat(n),onClick:function(){return function(e,a){e({type:"SET_PRICING_MODE",payload:a})}(t,l)}},r))};t(48);var I=function(){var e=c.a.useContext(m).state;return c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{class:"sidebar-title"},c.a.createElement("h2",null,e.appTitle),c.a.createElement("span",null,"For Willamette Valley Farmers Markets")),c.a.createElement(x,{placeholder:"Search..."}),c.a.createElement(P,null),c.a.createElement(_,null),c.a.createElement("hr",null),c.a.createElement("div",{className:"menu-item"},c.a.createElement("a",{href:"#"},"How to use this tool")),c.a.createElement("div",{className:"menu-item"},c.a.createElement("a",{href:"#"},"Contribute your data")))};t(49);var O=function(){return c.a.createElement(d,null,c.a.createElement("div",{className:"app"},c.a.createElement(I,null),c.a.createElement("div",{className:"main"},c.a.createElement(A,null),c.a.createElement("div",{className:"mobile-warning"},c.a.createElement("p",null,"Sorry! The mobile view for the Harvest Calendar App is still in development. Please visit on a tablet or laptop in the meantime. Thanks!")),c.a.createElement("div",{className:"acknowledgement"},c.a.createElement("span",null,"Developed by ",c.a.createElement("a",{href:"http://ddluc.com"},"DDLUC Engineering, LLC"))))))};l.a.render(c.a.createElement(O,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.dd3a4f3f.chunk.js.map