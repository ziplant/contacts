(function(t){function e(e){for(var r,c,a=e[0],u=e[1],s=e[2],l=0,f=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},c={app:0},o={app:0},i=[];function a(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-09b7e7cc":"f151b11f"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-09b7e7cc":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-09b7e7cc":"a9a27046"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var s=i[a],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){s=f[a],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete c[t],d.parentNode.removeChild(d),n(i)},d.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){c[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"42fe":function(t,e,n){"use strict";n("90e0")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(t,e,n,c,o,i){var a=Object(r["w"])("router-view");return Object(r["q"])(),Object(r["e"])(a)}var o=n("5530");n("7db0"),n("4160"),n("caad"),n("c975"),n("d81d"),n("a434"),n("b64b"),n("2532"),n("159b");function i(){var t=function(t,e,n){t.push({data:Object(o["a"])({},e),action:n})},e=function(t){return t.pop()};return{pushHistory:t,popHistory:e}}function a(){var t=i(),e=t.pushHistory,n=t.popHistory,c=Object(r["s"])([]),o=function(t){var e=1;while(t.map((function(t){return t.id})).includes(e))e++;return e},a=function(t){return c.find((function(e){return e.id==t}))},u=function(t){if(!t)return!1;var e={id:o(c),title:t,fields:[],history:[]};return c.push(e)},s=function(t){var e=c.find((function(e){return e.id==t}));return!!e&&c.splice(c.indexOf(e),1)},l=function(t,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=c.find((function(e){return e.id==t}));if(i){var a=i.fields.find((function(t){return t.id==n.id}));return a?(r&&e(i.history,a,"edit"),Object.keys(n).forEach((function(t){a[t]=n[t]})),a):(a=n,a.id=o(i.fields),r&&e(i.history,a,"add"),i.fields.unshift(n))}return!1},f=function(t,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=c.find((function(e){return e.id==t}));if(o){var i=o.fields.find((function(t){return t.id==n}));return r&&e(o.history,i,"remove"),!!i&&o.fields.splice(o.fields.indexOf(i),1)}return!1},d=function(t){var e=c.find((function(e){return e.id==t})),r=n(e.history);if(r)switch(r.action){case"add":f(t,r.data.id,!1);break;case"edit":l(t,r.data,!1);break;case"remove":l(t,r.data,!1);break}};return{contacts:c,getContact:a,addContact:u,removeContact:s,editField:l,removeField:f,stepBack:d}}var u={setup:function(){Object(r["r"])("contactsStore",Object(o["a"])({},a()))}};n("42fe");u.render=c;var s=u,l=(n("d3b7"),n("6c02")),f=Object(r["h"])("h2",{class:"title"},"Contacts list",-1);function d(t,e,n,c,o,i){var a=Object(r["w"])("ContactAddForm"),u=Object(r["w"])("ContactList");return Object(r["q"])(),Object(r["e"])(r["a"],null,[f,Object(r["h"])(a),Object(r["h"])(u)],64)}var b={class:"list"};function p(t,e,n,c,o,i){var a=Object(r["w"])("ContactListItem");return Object(r["q"])(),Object(r["e"])("ul",b,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(c.contacts,(function(t){return Object(r["q"])(),Object(r["e"])(a,{class:"list_item",key:t.id,contact:t},null,8,["contact"])})),128))])}var v={class:"list-item"},O={class:"list-item_row list-item_row--xs-col"},h={class:"list-item_title"},m={class:"list-item_wrap"},j=Object(r["g"])("Info"),g=Object(r["g"])(" Do you want delete "),y=Object(r["g"])("?");function C(t,e,n,c,o,i){var a=Object(r["w"])("router-link"),u=Object(r["w"])("Confirm");return Object(r["q"])(),Object(r["e"])("li",v,[Object(r["h"])("div",O,[Object(r["h"])("div",h,Object(r["y"])(n.contact.title),1),Object(r["h"])("div",m,[Object(r["h"])(a,{class:"btn",to:"/contact/".concat(n.contact.id)},{default:Object(r["C"])((function(){return[j]})),_:1},8,["to"]),Object(r["h"])("button",{class:"btn btn--danger",onClick:e[1]||(e[1]=function(t){return c.swapToggle()})},"Remove")])]),(Object(r["q"])(),Object(r["e"])(r["b"],{to:"#modal"},[c.isToggleOpen?(Object(r["q"])(),Object(r["e"])(u,{key:0,onCloseModal:c.remove},{default:Object(r["C"])((function(){return[g,Object(r["h"])("b",null,Object(r["y"])(n.contact.title),1),y]})),_:1},8,["onCloseModal"])):Object(r["f"])("",!0)]))])}var w=n("9420"),k=n("f4ee"),_={props:["contact"],setup:function(t,e){var n=t.contact,c=Object(k["a"])(),o=c.isToggleOpen,i=c.swapToggle,a=Object(r["l"])("contactsStore"),u=a.removeContact,s=function(t){t&&u(n.id),i()};return{remove:s,isToggleOpen:o,swapToggle:i}},components:{Confirm:w["a"]}};_.render=C;var T=_,S={setup:function(){var t=Object(r["l"])("contactsStore"),e=t.contacts;return{contacts:e}},components:{ContactListItem:T}};S.render=p;var q=S,x={class:"list-item_row form"};function A(t,e,n,c,o,i){return Object(r["q"])(),Object(r["e"])("form",{class:"list-item",onSubmit:e[2]||(e[2]=Object(r["E"])((function(t){return c.submit()}),["prevent"]))},[Object(r["h"])("div",x,[Object(r["D"])(Object(r["h"])("input",{class:"form_field",type:"text",placeholder:"Contact title","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.contactTitle=t})},null,512),[[r["A"],c.contactTitle]]),Object(r["h"])("button",{class:["form_submit btn btn--action",{"btn--disabled":!c.contactTitle}],type:"submit"},"Add",2)])],32)}var E={setup:function(){var t=Object(r["t"])(""),e=Object(r["l"])("contactsStore"),n=e.addContact,c=function(){n(t.value)&&(t.value="")};return{contactTitle:t,submit:c}}};E.render=A;var P=E,L={setup:function(){},components:{ContactList:q,ContactAddForm:P}};L.render=d;var M=L,F=[{path:"/",name:"Contacts",component:M},{path:"/contact/:contactId(\\d+)",name:"ContactInfo",component:function(){return n.e("chunk-09b7e7cc").then(n.bind(null,"713d"))},props:!0},{path:"/:catchAll(.*)*",name:"NotFound",redirect:function(){return{path:"/"}}}],I=Object(l["a"])({history:Object(l["b"])(),routes:F}),N=I;Object(r["d"])(s).use(N).mount("#app")},"90e0":function(t,e,n){},9420:function(t,e,n){"use strict";var r=n("7a23"),c={class:"modal"},o={class:"modal_front"},i={class:"modal_title"},a={class:"modal_content"};function u(t,e,n,u,s,l){return Object(r["q"])(),Object(r["e"])("div",c,[Object(r["h"])("div",{class:"modal_back",onClick:e[1]||(e[1]=function(t){return u.cancel()})}),Object(r["h"])("div",o,[Object(r["h"])("div",i,[Object(r["v"])(t.$slots,"default")]),Object(r["h"])("div",a,[Object(r["h"])("div",{class:"btn btn--danger",onClick:e[2]||(e[2]=function(){return u.confirm.apply(u,arguments)})},"Confirm"),Object(r["h"])("div",{class:"btn btn--action",onClick:e[3]||(e[3]=function(t){return u.cancel()})},"Cancel")])])])}var s=n("8468"),l={setup:function(t,e){Object(s["a"])(t);var n=e.emit,r=!1,c=function(){r=!1,i()},o=function(){r=!0,i()},i=function(){n("closeModal",r)};return{cancel:c,confirm:o}}};l.render=u;e["a"]=l},f4ee:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("7a23");function c(){var t=Object(r["t"])(!1),e=function(){t.value=!0},n=function(){t.value=!1},c=function(){t.value=!t.value};return{isToggleOpen:t,openToggle:e,closeToggle:n,swapToggle:c}}}});
//# sourceMappingURL=app.452a4e83.js.map