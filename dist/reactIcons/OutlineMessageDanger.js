!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var n="object"==typeof exports?t(require("react")):t(e.react);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=42)}({0:function(t,n){t.exports=e},1:function(e,t){(function(t){e.exports=t}).call(this,{})},2:function(e,t,n){"use strict";var r=n(0),o=n(3),i=n.n(o);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){var t,n=e.iconMarkup,o=e.iconName,a=e.expand,c=i()("iq-icon",(u(t={},"iq-icon--".concat(o),!!o),u(t,"iq-icon--expand",!!a),t));return r.createElement("div",{className:c,dangerouslySetInnerHTML:{__html:n}})}},3:function(e,t,n){var r;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function u(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=o(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var a=u.apply(null,n);a&&e.push(a)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var c in n)i.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(u.default=u,e.exports=u):"object"===o(n(1))&&n(1)?void 0===(r=function(){return u}.apply(t,[]))||(e.exports=r):window.classNames=u}()},42:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(0),o=n(2);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){return r.createElement(o.a,i({iconMarkup:'<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.748 2.449l-8.485 8.485a.8.8 0 000 1.132l8.485 8.485a.8.8 0 001.131 0l8.486-8.485a.8.8 0 000-1.132L11.879 2.45a.8.8 0 00-1.131 0zm-9.334 7.637a2 2 0 000 2.828L9.9 21.4a2 2 0 002.829 0l8.485-8.486a2 2 0 000-2.828L12.728 1.6a2 2 0 00-2.829 0l-8.485 8.485z" fill="#871E1E"/><path d="M10.522 16.577c-.261-.283-.392-.706-.392-1.13 0-.423.13-.847.392-1.13.26-.282.652-.423 1.043-.423.391 0 .783.141 1.044.424.26.282.391.706.391 1.13 0 .423-.13.846-.391 1.129-.261.282-.653.423-1.044.423s-.782-.14-1.043-.423zM11.174 5h.652c.652 0 1.043.565 1.043 1.27l-.39 5.507c0 .564-.523.988-1.044.988-.522 0-1.044-.424-1.044-.989L10 6.272C10.13 5.565 10.652 5 11.174 5z" fill="#871E1E"/></svg>',iconName:"OutlineMessageDanger"},e))}}})}));