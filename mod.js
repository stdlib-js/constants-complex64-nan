// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,d=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=u.call(i,v,"$1e"),i=u.call(i,b,"e"),i=u.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=u.call(i,f,"e+0$1"),i=u.call(i,g,"e-0$1"),e.alternate&&(i=u.call(i,h,"$1."),i=u.call(i,d,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===p.call(e.specifier)?p.call(i):s.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var E=String.fromCharCode,_=Array.isArray;function S(e){return e!=e}function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,i,a,o,l,s,p,u,f,g,h,d;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,p=0;p<e.length;p++)if(i=e[p],"string"==typeof i)l+=i;else{if(r=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(a=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,S(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,g=i.width,h=i.padRight,d=void 0,(d=g-f.length)<0?f:f=h?f+m(d):m(d)+f)),l+=i.arg||"",s+=1}return l}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function j(e){var r,t,i,n;for(t=[],n=0,i=T.exec(e);i;)(r=e.slice(n,T.lastIndex-i[0].length)).length&&t.push(r),t.push(F(i)),n=T.lastIndex,i=T.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function A(e){var r,t;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[j(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var I=Object.prototype,V=I.toString,N=I.__defineGetter__,O=I.__defineSetter__,P=I.__lookupGetter__,$=I.__lookupSetter__;var C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(e,r)||$.call(e,r)?(i=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(e,r,t.get),o&&O&&O.call(e,r,t.set),e};function R(e,r,t){C(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e){return"number"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,B="function"==typeof Y?Y.toStringTag:"";var U=Z()?function(e){var r,t,i,n,a;if(null==e)return G.call(e);t=e[B],a=B,r=null!=(n=e)&&W.call(n,a);try{e[B]=void 0}catch(r){return G.call(e)}return i=G.call(e),r?e[B]=t:delete e[B],i}:function(e){return G.call(e)},X=Number,z=X.prototype.toString;var J=Z();function q(e){return"object"==typeof e&&(e instanceof X||(J?function(e){try{return z.call(e),!0}catch(e){return!1}}(e):"[object Number]"===U(e)))}function D(e){return L(e)||q(e)}R(D,"isPrimitive",L),R(D,"isObject",q);var H="function"==typeof Math.fround?Math.fround:null,K="function"==typeof Float32Array;var Q=Number.POSITIVE_INFINITY,ee="function"==typeof Float32Array?Float32Array:null;var re="function"==typeof Float32Array?Float32Array:void 0;var te=new(function(){var e,r,t;if("function"!=typeof ee)return!1;try{r=new ee([1,3.14,-3.14,5e40]),t=r,e=(K&&t instanceof Float32Array||"[object Float32Array]"===U(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Q}catch(r){e=!1}return e}()?re:function(){throw new Error("not implemented")})(1);var ie="function"==typeof H?H:function(e){return te[0]=e,te[0]};function ne(e,r){if(!(this instanceof ne))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!L(e))throw new TypeError(A("invalid argument. Real component must be a number. Value: `%s`.",e));if(!L(r))throw new TypeError(A("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ie(e)}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ie(r)}),this}R(ne,"BYTES_PER_ELEMENT",4),R(ne.prototype,"BYTES_PER_ELEMENT",4),R(ne.prototype,"byteLength",8),R(ne.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),R(ne.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var ae=new ne(NaN,NaN);export{ae as default};
//# sourceMappingURL=mod.js.map
