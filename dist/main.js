!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(t,r){t.exports=e},function(e){e.exports=JSON.parse('{"blueberry":{"0":"#F5F2FF","10":"#E4E2FF","20":"#BDB8FF","30":"#776DFF","40":"#9896FC","50":"#5E52F9","60":"#453AD3","70":"#453AD3","80":"#1C1277"},"cyan":{"0":"#EBFDFE","10":"#CDFBFE","20":"#7FF2F8","30":"#20E9F3","40":"#00D3E8","50":"#00BFD9","60":"#0086A6","70":"#006887","80":"#023949"},"gray":{"0":"#FFFFFF","10":"#F9F9F9","20":"#EFEFEF","30":"#D5D5D5","40":"#666666","50":"#444444","100":"#1A1A1A"},"red":{"0":"#FFF2F2","10":"#FFB7B7","20":"#FE7F7F","30":"#F95151","40":"#E33D3D","50":"#A92525","60":"#871E1E","100":"#3E0303"},"yellow":{"0":"#FDFAF2","10":"#FFF5CC","20":"#FFEEA6","30":"#FFDE60","40":"#EDC322","50":"#DBAF03","60":"#B99200","100":"#6A5603"},"green":{"0":"#EFFDE6","10":"#BBF7B1","20":"#84F593","30":"#31E981","40":"#04DD4C","50":"#00AA2D","60":"#008722","100":"#00421D"},"pink":{"0":"#FFF2F6","10":"#FFC6DD","20":"#FF99C6","30":"#FF499E","40":"#ED1275","50":"#D3005F","60":"#AF004F","70":"#87003D"},"purple":{"0":"#F9E1FF","10":"#EDBEF9","20":"#E39CF2","30":"#D266E5","40":"#C844DA","50":"#BC2EC6","60":"#A91FA9","70":"#871780"}}')},function(e){e.exports=JSON.parse('{"breakpoints":{"xsmall":"0px","small":"600px","medium":"720px","large":"1024px","xlarge":"1920px"},"grid":{"fixed-max-width":"1270px","columns":{"xsmall":"4","small":"8","medium":"12"},"gutter":{"xsmall":"24px","medium":"32px"}}}')},function(e){e.exports=JSON.parse('{"headerSize":"42px"}')},function(e,t){(function(t){e.exports=t}).call(this,{})},function(e,t,r){var n;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var u={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=o(r);if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)&&r.length){var i=c.apply(null,r);i&&e.push(i)}else if("object"===n)for(var a in r)u.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):"object"===o(r(4))&&r(4)?void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n):window.classNames=c}()},function(e,t,r){"use strict";r.r(t),r.d(t,"colors",(function(){return n})),r.d(t,"layout",(function(){return o})),r.d(t,"typography",(function(){return u})),r.d(t,"H1",(function(){return j})),r.d(t,"H2",(function(){return v})),r.d(t,"H3",(function(){return E})),r.d(t,"H4",(function(){return D})),r.d(t,"H5",(function(){return x})),r.d(t,"H6",(function(){return h})),r.d(t,"TagComponent",(function(){return y})),r.d(t,"If",(function(){return P}));var n=r(1),o=r(2),u=r(3),c=r(0),i=r.n(c),a=r(5),f=r.n(a);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var y=function(e){var t=e.children,r=void 0===t?"Dynamic tag component":t,n=e.tag,o=void 0===n?"button":n,u=s(e,["children","tag"]);return i.a.createElement(o,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},u),r)};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var g=function(e){var t=e.tag,r=e.type,n=void 0===r?"primary":r,o=e.customColor,u=m(e,["tag","type","customColor"]),c=f()(t,d({},"".concat(t,"--").concat(n),!!n)),a={style:{color:o}},l=o?O(O({},u),a):O({},u);return i.a.createElement(y,b({tag:t,className:c},l))},j=function(e){return i.a.createElement(g,b({tag:"h1"},e))},v=function(e){return i.a.createElement(g,b({tag:"h2"},e))},E=function(e){return i.a.createElement(g,b({tag:"h3"},e))},D=function(e){return i.a.createElement(g,b({tag:"h4"},e))},x=function(e){return i.a.createElement(g,b({tag:"h5"},e))},h=function(e){return i.a.createElement(g,b({tag:"h6"},e))},P=function(e){var t=e.condition,r=e.renderIf,n=e.renderElse;return t?r:void 0===n?null:n}}])}));