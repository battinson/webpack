!function(e){function n(n){for(var r,i,a=n[0],c=n[1],l=n[2],p=0,s=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(n);s.length;)s.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={0:0},u=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var f=c;u.push([4,1]),t()}({10:function(e,n,t){"use strict";t.r(n);t(5);var r=t(0),o=t.n(r),u=t(2),i=t(3);var a=function(){return function(e,n){if(e!==n)throw new TypeError("Cannot instantiate an arrow function")}(this,void 0),o.a.createElement("h1",null,"Hello, React!!!")}.bind(void 0),c=Object(i.hot)(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}Object(u.render)(o.a.createElement(c,null),document.getElementById("root"));var f=new function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"x",10),l(this,"y",10)};console.log(f)},4:function(e,n,t){e.exports=t(10)},5:function(e,n,t){}});