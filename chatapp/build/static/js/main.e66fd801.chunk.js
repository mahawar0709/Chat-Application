(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{59:function(e,t,n){e.exports=n(96)},68:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},87:function(e,t,n){},93:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(50),c=n.n(o),i=(n(68),n(18)),l=n(9),u=(n(70),n(72),n(118));var s=function(){return a.a.createElement("div",{className:"sidebarChat"},a.a.createElement(u.a,null),a.a.createElement("div",{className:"sidebarChat__info"},a.a.createElement("h2",null,"Room name"),a.a.createElement("p",null,"This is reat time.")))},f=n(54),h=n.n(f),m=n(55),p=n.n(m),d=n(37),v=n.n(d),y=n(38),g=n.n(y),E=n(116);var b=function(){return a.a.createElement("div",{className:"Sidebar"},a.a.createElement("div",{className:"sidebar_header"},a.a.createElement(u.a,{src:"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}),a.a.createElement("div",{className:"sidebar_header_right"},a.a.createElement(E.a,null,a.a.createElement(h.a,null)),a.a.createElement(E.a,null,a.a.createElement(p.a,null)),a.a.createElement(E.a,null,a.a.createElement(v.a,null)))),a.a.createElement("div",{className:"sidebar__search"},a.a.createElement("div",{className:"sidebar__searchContainer"},a.a.createElement(g.a,null),a.a.createElement("input",{type:"text",placeholder:"search or start a new chat"}))),a.a.createElement("div",{className:"sidebar__chats"},a.a.createElement(s,null),a.a.createElement(s,null),a.a.createElement(s,null)))},w=n(81),_=n(82),x=n.n(_),L=n(83),N=n.n(L),j=n(85),O=n.n(j),S=n(84),k=n.n(S),F=(n(87),n(115).a.create({baseURL:"http://localhost:9000"}));function G(){G=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof h?t:h,c=Object.create(o.prototype),i=new N(a||[]);return r(c,"_invoke",{value:w(e,n,i)}),c}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var f={};function h(){}function m(){}function p(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==t&&n.call(y,o)&&(d=y);var g=p.prototype=h.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function c(){return new t(function(a,c){!function r(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(f).then(function(e){u.value=e,c(u)},function(e){return r("throw",e,c,i)})}i(l.arg)}(r,o,a,c)})}return a=a?a.then(c,c):c()}})}function w(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=_(c,n);if(i){if(i===f)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function _(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=p,r(g,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:m,configurable:!0}),m.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),l(b.prototype,c,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new b(u(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},E(g),l(g,i,"Generator"),l(g,o,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=j,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var T=function(e){var t=e.messages,n=Object(r.useState)(""),o=Object(l.a)(n,2),c=o[0],i=o[1],s=function(){var e=Object(w.a)(G().mark(function e(t){return G().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,F.post("/messages/new",{message:c,name:"dummy_user",timestamp:"just now",received:!1});case 3:i("");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:"Chat"},a.a.createElement("div",{className:"chat__header"},a.a.createElement(u.a,null),a.a.createElement("div",{className:"chatheader_info"},a.a.createElement("h3",null,"Dance Room"),a.a.createElement("p",null,"last seen Fri ,08 Feb 2023 20:12:06 IST")),a.a.createElement("div",{className:"chatheader_right"},a.a.createElement(E.a,null,a.a.createElement(g.a,null)),a.a.createElement(E.a,null,a.a.createElement(x.a,null)),a.a.createElement(E.a,null,a.a.createElement(v.a,null)))),a.a.createElement("div",{className:"chat_body"},t.map(function(e){return a.a.createElement("p",{className:"chat_message ".concat(e.received&&"chat_reciever")},a.a.createElement("span",{className:"chat_name"},e.name),e.message,a.a.createElement("span",{className:"chat_timestamp"},e.timestamp))})),a.a.createElement("div",{className:"chat_footer"},a.a.createElement(N.a,null),a.a.createElement("form",{action:""},a.a.createElement("input",{value:c,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Type a message"}),a.a.createElement("button",{onClick:s,type:"submit"},"Send a message")),a.a.createElement(k.a,{className:"send "}),a.a.createElement(O.a,null)))},C=(n(93),n(86)),P=n.n(C);var I=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(r.useEffect)(function(){F.get("/messages/sync").then(function(e){o(e.data)})},[]),Object(r.useEffect)(function(){var e=new P.a("5a8696c2432a896eb9f4",{cluster:"ap2"}).subscribe("messages");return e.bind("inserted",function(e){o([].concat(Object(i.a)(n),[e]))}),function(){e.unbind_all(),e.unsubscribe()}},[n]),console.log(n),a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"app-body"},a.a.createElement(b,null),a.a.createElement(T,{messages:n})))},D=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,114)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(I,null))),D()}},[[59,3,2]]]);
//# sourceMappingURL=main.e66fd801.chunk.js.map