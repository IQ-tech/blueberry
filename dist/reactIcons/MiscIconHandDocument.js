!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var n="object"==typeof exports?t(require("react")):t(e.react);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(t,n){t.exports=e},function(e,t){(function(t){e.exports=t}).call(this,{})},function(e,t,n){"use strict";var r=n(0),o=n(3),i=n.n(o);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){var t,n=e.iconMarkup,o=e.iconName,u=e.expand,a=i()("iq-icon",(l(t={},"iq-icon--".concat(o),!!o),l(t,"iq-icon--expand",!!u),t));return r.createElement("div",{className:a,dangerouslySetInnerHTML:{__html:n}})}},function(e,t,n){var r;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=o(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var u=l.apply(null,n);u&&e.push(u)}else if("object"===r)for(var a in n)i.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):"object"===o(n(1))&&n(1)?void 0===(r=function(){return l}.apply(t,[]))||(e.exports=r):window.classNames=l}()},,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n(0),o=n(2);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){return r.createElement(o.a,i({iconMarkup:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33 46"><defs><path id="a" d="M0 .564h19.33v28.709H0z"/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(0 16.521)"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path d="M16.277 29.273v-6.396s3.052-1.622 3.052-5.421v-3.052L8.646.564 2.053 5.773C.88 6.848 0 8.57 0 10.2v19.072h16.277z" fill="#BCB5FF" mask="url(#b)"/></g><path d="M11.53 32.521c.61 3.125-1.267 5.474-1.359 5.588a.43.43 0 00.664.546c.103-.125 2.16-2.69 1.566-6.134h-.87zM7.532 24.57c-2.16 2.118-4.098 4.012-4.098 4.012a.43.43 0 10.6.615s1.592-1.556 3.498-3.423v-1.203z" fill="#FFF"/><path d="M30.795 34.779l-21.119-.047a1.748 1.748 0 01-1.745-1.752l.066-31.234A1.75 1.75 0 019.749 0l21.12.047a1.748 1.748 0 011.745 1.751l-.066 31.235a1.749 1.749 0 01-1.753 1.746" fill="#352CA4"/><path fill="#7874E3" d="M15.487 29.546l-1.888-.004.006-3.182 1.888.004zm10.414.02l-1.097-.002.007-3.182 1.096.002zm2.447.005l-1.188-.003.007-3.182 1.186.003zm-10.522-.021l-1.462-.003.006-3.181 1.462.002zm3.313.007l-2.193-.005.006-3.181 2.194.004zm2.581.005l-1.461-.003.006-3.182 1.462.003z"/><path d="M3.454 29.722s7.522-7.354 9.447-9.28c1.925-1.925 4.123 2.785 2.293 5.499-.82 1.136-4.171 4.888-4.171 4.888 1.86 4.157-.94 7.553-.94 7.553" fill="#BCB5FF"/><path stroke="#BCB5FF" stroke-width="1.572" stroke-linecap="round" stroke-linejoin="round" d="M13.242 8.943h10.241m-10.241 6.145h5.888"/></g></svg>',iconName:"MiscIconHandDocument"},e))}}])}));