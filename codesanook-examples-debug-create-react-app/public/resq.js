!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.resq=n():(t.window=t.window||{},t.window.resq=n())}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=16)}([function(t,n,e){"use strict";e.d(n,"a",(function(){return O})),e.d(n,"d",(function(){return P})),e.d(n,"b",(function(){return S})),e.d(n,"c",(function(){return _}));var r=e(1),o=e.n(r),i=e(14),u=e.n(i),c=e(2),f=e.n(c),a=e(15),s=e.n(a);function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}var p=Array.isArray,d=Object.keys;function y(t){return"function"==typeof t}function h(t){return t instanceof HTMLElement||t instanceof Text}function b(t){return"object"===f()(t)&&!p(t)}function v(t){if(!t||"string"==typeof t)return t;var n=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){u()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},t);return delete n.children,n}function m(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!(!p(t)||!p(n))&&(e?t.length===n.length&&!t.find((function(t){return!n.includes(t)})):t.some((function(t){return n.includes(t)})))}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=[];if(!d(t).length)return!0;if(null===n||!d(n).length)return!1;if(e)return s()(t,n);var o=d(t).filter((function(t){return d(n).includes(t)}));return o.forEach((function(e){b(t[e])&&b(n[e])&&(r=r.concat(g(t[e],n[e]))),(t[e]===n[e]||m(t[e],n[e]))&&r.push(n)})),r.length>0&&r.filter((function(t){return t})).length===o.length}function O(t){var n,e={children:[]};if(!t)return e;e.name=y(n=t.type)?n.name:n,e.props=v(t.memoizedProps),e.state=function(t){if(t){var n=t.baseState;return n||t}}(t.memoizedState);var r=t.child;if(r)for(e.children.push(r);r.sibling;)e.children.push(r.sibling),r=r.sibling;return e.children=e.children.map((function(t){return O(t)})),y(t.type)&&function(t){return t.children.length>1}(e)?(e.node=function(t){return t.children.map((function(t){return t.node})).filter((function(t){return!!t}))}(e),e.isFragment=!0):e.node=function(t){return h(t.stateNode)?t.stateNode:t.child&&h(t.child.stateNode)?t.child.stateNode:null}(t),e}function w(t){for(;t.length;){var n=t.shift();if(n.node)return n.node;n.children&&Array.isArray(n.children)&&t.push.apply(t,o()(n.children))}}function x(t,n){for(var e=[];t.length;){var r=t.shift().children;r&&Array.isArray(r)&&r.forEach((function(r){n(r)&&(!r.node&&Array.isArray(r.children)&&(r.node=w(r.children.concat([]))),e.push(r)),t.push(r)}))}return e}function j(t,n){var e=function(t){if(t){var n=t.split("(");return 1===n.length?t:n.find((function(t){return t.includes(")")})).replace(/\)*/g,"")}}(n);return new RegExp("^"+t.split("*").map((function(t){return t.replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1")})).join(".+")+"$").test(e)}function P(t,n){var e=arguments.length>3?arguments[3]:void 0;return t.reduce((function(t,n){return t.concat(x(t,e&&"function"==typeof e?e:function(t){return"string"==typeof t.name?j(n,t.name):null!==t.name&&"object"===f()(t.name)&&j(n,t.name.displayName)}))}),[n])}function S(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return y(e)?(console.warn("Functions are not supported as filter matchers"),[]):t.filter((function(t){return b(e)&&g(e,t[n],r)||p(e)&&m(e,t[n],r)||t[n]===e}))}function _(t){if(t.hasOwnProperty("_reactRootContainer"))return t._reactRootContainer._internalRoot.current;var n=Object.keys(t).find((function(t){return t.startsWith("__reactInternalInstance")||t.startsWith("__reactFiber")}));return n?t[n]:void 0}},function(t,n,e){var r=e(17),o=e(18),i=e(19),u=e(20);t.exports=function(t){return r(t)||o(t)||i(t)||u()}},function(t,n){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e},function(t,n){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},function(t,n){function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},e(n,r)}t.exports=e},function(t,n,e){var r=e(6);t.exports=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}},function(t,n,e){var r=e(3),o=e(6),i=e(22),u=e(23);function c(n){var e="function"==typeof Map?new Map:void 0;return t.exports=c=function(t){if(null===t||!i(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return u(t,arguments,r(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o(n,t)},c(n)}t.exports=c},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}},function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return o}));var r=e(0);function o(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5e3,e=arguments.length>1?arguments[1]:void 0;if(t.isReactLoaded)return Promise.resolve("React already loaded");var o=function(){var t=document.createTreeWalker(document);if(e)return document.querySelector(e);for(;t.nextNode();)if(t.currentNode.hasOwnProperty("_reactRootContainer"))return t.currentNode};return new Promise((function(e,i){var u=!1;!function n(){var i=o();if(i)return t.isReactLoaded=!0,t.rootReactElement=Object(r.c)(i),e();u||setTimeout(n,200)}(),setTimeout((function(){u=!0,i("Timed out")}),n)}))}}).call(this,e(9))},function(t,n,e){"use strict";e.d(n,"a",(function(){return w}));var r=e(1),o=e.n(r),i=e(4),u=e.n(i),c=e(5),f=e.n(c),a=e(7),s=e.n(a),l=e(13),p=e.n(l),d=e(3),y=e.n(d),h=e(8),b=e.n(h),v=e(0);function m(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=y()(t);if(n){var o=y()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p()(this,e)}}var g=function(t){s()(e,t);var n=m(e);function e(t){return u()(this,e),t||(t=[]),n.call.apply(n,[this].concat(o()(t)))}return f()(e,[{key:"byProps",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{exact:!1},r=n.exact,o=Object(v.b)(this,"props",t,r);return new e(o)}},{key:"byState",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{exact:!1},r=n.exact,o=Object(v.b)(this,"state",t,r);return new e(o)}}]),e}(b()(Array)),O=function(t){s()(e,t);var n=m(e);function e(t,r){var o;for(var i in u()(this,e),(o=n.call(this,t))._nodes=r,t)o[i]=t[i];return o}return f()(e,[{key:"byProps",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{exact:!1},r=n.exact,o=Object(v.b)(this._nodes,"props",t,r)[0];return new e(o,this._nodes)}},{key:"byState",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{exact:!1},r=n.exact,o=Object(v.b)(this._nodes,"state",t,r)[0];return new e(o,this._nodes)}}]),e}(b()(Object)),w=function(){function t(n,e){u()(this,t),this.selectors=n.split(" ").filter((function(t){return!!t})).map((function(t){return t.trim()})),this.rootComponent=e,this.tree=Object(v.a)(this.rootComponent)}return f()(t,[{key:"find",value:function(){return this.nodes=new g(Object(v.d)(this.selectors,this.tree,!0)),new O(this.nodes[0],this.nodes)}},{key:"findAll",value:function(){return new g(Object(v.d)(this.selectors,this.tree))}}]),t}()},function(t,n,e){var r=e(2),o=e(21);t.exports=function(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?o(t):n}},function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},function(t,n,e){"use strict";var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty;t.exports=function t(n,e){if(n===e)return!0;if(n&&e&&"object"==typeof n&&"object"==typeof e){var u,c,f,a=r(n),s=r(e);if(a&&s){if((c=n.length)!=e.length)return!1;for(u=c;0!=u--;)if(!t(n[u],e[u]))return!1;return!0}if(a!=s)return!1;var l=n instanceof Date,p=e instanceof Date;if(l!=p)return!1;if(l&&p)return n.getTime()==e.getTime();var d=n instanceof RegExp,y=e instanceof RegExp;if(d!=y)return!1;if(d&&y)return n.toString()==e.toString();var h=o(n);if((c=h.length)!==o(e).length)return!1;for(u=c;0!=u--;)if(!i.call(e,h[u]))return!1;for(u=c;0!=u--;)if(!t(n[f=h[u]],e[f]))return!1;return!0}return n!=n&&e!=e}},function(t,n,e){"use strict";e.r(n),function(t){e.d(n,"resq$",(function(){return c})),e.d(n,"resq$$",(function(){return f}));var r=e(12),o=e(11);e.d(n,"waitToLoadReact",(function(){return o.a}));var i=e(0);function u(n,e,o){if(!o&&!t.isReactLoaded)throw new Error("Could not find the root element of your application");var u=t.rootReactElement;if(o instanceof HTMLElement&&(u=Object(i.c)(o)),!u)throw new Error("Could not find instance of React in given element");return new r.a(n,u)[e]()}function c(t,n){return u(t,"find",n)}function f(t,n){return u(t,"findAll",n)}}.call(this,e(9))},function(t,n,e){var r=e(10);t.exports=function(t){if(Array.isArray(t))return r(t)}},function(t,n){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,n,e){var r=e(10);t.exports=function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}},function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,n){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,n){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},function(t,n,e){var r=e(6),o=e(24);function i(n,e,u){return o()?t.exports=i=Reflect.construct:t.exports=i=function(t,n,e){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(t,o));return e&&r(i,e.prototype),i},i.apply(null,arguments)}t.exports=i},function(t,n){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}}])}));