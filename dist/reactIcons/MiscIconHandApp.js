!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(t,r){t.exports=e},function(e,t){(function(t){e.exports=t}).call(this,{})},function(e,t,r){"use strict";var n=r(0),o=r(3),i=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.a=function(e){var t,r=e.iconMarkup,o=e.iconName,f=e.expand,u=i()("iq-icon",(a(t={},"iq-icon--".concat(o),!!o),a(t,"iq-icon--expand",!!f),t));return n.createElement("div",{className:u,dangerouslySetInnerHTML:{__html:r}})}},function(e,t,r){var n;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=o(r);if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var f=a.apply(null,r);f&&e.push(f)}}else if("object"===n)if(r.toString===Object.prototype.toString)for(var u in r)i.call(r,u)&&r[u]&&e.push(u);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):"object"===o(r(1))&&r(1)?void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n):window.classNames=a}()},,function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return a}));var n=r(0),o=r(2);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e){return n.createElement(o.a,i({iconMarkup:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 46"><defs><path id="a" d="M0 .788h19.934v29.605H0z"/><path id="c" d="M.16 0h21.112v34.815H.16z"/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(0 15.607)"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path d="M16.786 30.393v-6.595s3.148-1.673 3.148-5.591V15.06L8.916.788 2.118 6.16C.908 7.27 0 9.045 0 10.726v19.667h16.786z" fill="#BCB5FF" mask="url(#b)"/></g><g transform="translate(6.571)"><mask id="d" fill="#fff"><use xlink:href="#c"/></mask><path d="M19.73 34.815H1.701A1.547 1.547 0 01.16 33.273V1.541C.16.694.854 0 1.7 0h18.03c.847 0 1.541.694 1.541 1.541v31.732c0 .848-.694 1.542-1.542 1.542" fill="#352CA4" mask="url(#d)"/></g><path d="M24.309 28.224H10.423c-.562 0-1.022-.46-1.022-1.022V3.852c0-.561.46-1.022 1.022-1.022h13.886c.563 0 1.023.46 1.023 1.023v23.349c0 .562-.46 1.022-1.023 1.022m-5.729 3.343a1.293 1.293 0 11-2.587 0 1.293 1.293 0 012.587 0" fill="#7874E3"/><path d="M2.323 30.666s8.996-8.823 10.981-10.809c1.986-1.985 4.252 2.872 2.364 5.67-.847 1.173-4.301 5.041-4.301 5.041 1.92 4.287-.97 7.788-.97 7.788" fill="#BCB5FF"/><path d="M6.713 25.146L3.54 28.251a.443.443 0 10.62.635l2.552-2.498v-1.242zm5.191 9.669c-.336 1.9-1.347 3.176-1.415 3.26a.445.445 0 00.342.725.442.442 0 00.342-.162c.08-.097 1.279-1.594 1.63-3.823h-.899z" fill="#FFF"/><path stroke="#BCB5FF" stroke-width="1.543" stroke-linecap="round" stroke-linejoin="round" d="M12.164 9.444h10.058m-10.058 4.392h5.783"/></g></svg>',iconName:"MiscIconHandApp"},e))}}])}));