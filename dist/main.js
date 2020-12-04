(()=>{"use strict";var e={83:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"html {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.navbar {\r\n    font-family: 'Sansita Swashed', cursive;\r\n    padding: 1rem;\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: calc(100% - 2rem);\r\n    background-color: black;\r\n}\r\n\r\n.navbar nav {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.nav-item {\r\n    margin: 0 1em;\r\n    font-size: 1.4em;\r\n    cursor: pointer;\r\n    color: white;\r\n}",""]);const i=o},23:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ */\r\n/* v1.0 | 20080212 */\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\toutline: 0;\r\n\tfont-size: 100%;\r\n\tvertical-align: baseline;\r\n\tbackground: transparent;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\n/* remember to define focus styles! */\r\n:focus {\r\n\toutline: 0;\r\n}\r\n\r\n/* remember to highlight inserts somehow! */\r\nins {\r\n\ttext-decoration: none;\r\n}\r\ndel {\r\n\ttext-decoration: line-through;\r\n}\r\n\r\n/* tables still need 'cellspacing=\"0\"' in the markup */\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n",""]);const i=o},524:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(645),o=t.n(r),i=t(667),a=t.n(i),c=t(513),s=t(554),l=o()((function(e){return e[1]})),d=a()(c.Z),u=a()(s.Z);l.push([e.id,"\r\n.content {\r\n    height: 100vh;\r\n    width: 100%;\r\n}\r\n\r\n.home-background {\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-image: url("+d+");\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    z-index: -2;\r\n}\r\n\r\n.menu-background {\r\n    background-image: url("+u+");\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    z-index: -2;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n.hero-title {\r\n    font-size: 3em;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 50%;\r\n    font-weight: 100;\r\n    color: white;\r\n    z-index: 1;\r\n}\r\n\r\n.active {\r\n\r\n    position: relative;\r\n}\r\n\r\n.active::before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 2px;\r\n    background-color: red;\r\n    bottom: -3px;\r\n    left: 0;\r\n    right: 0;\r\n    transform-origin: left;\r\n    transition: 200ms ease-in;\r\n    transform: scaleX(1)\r\n}\r\n",""]);const f=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},513:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"1c13c747b3b9466887b4572abdb1068f.jpg"},554:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"5de8591ad54576fbd9bc6568fe349abc.jpg"},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var u=a(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:p(f,n),references:1}),r.push(d)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function p(e,n){var t,r,o;if(n.singleton){var i=m++;t=h||(h=s(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=s(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var s=c(e,n),l=0;l<t.length;l++){var d=a(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=s}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(23);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var o=t(83);n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var i=t(524);n()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const a=document.querySelector(".content"),c=()=>{for(;a.firstChild;)a.removeChild(a.firstChild);document.querySelectorAll(".active").forEach((e=>{e.classList.remove("active")}));const e=document.createElement("div");e.classList.add("home-background"),a.appendChild(e);const n=document.createElement("h1");n.textContent="Majestic",n.classList.add("hero-title"),a.appendChild(n),document.getElementById("home").classList.add("active")};c();const s=document.getElementById("home"),l=document.getElementById("menu"),d=document.getElementById("contact");l.addEventListener("click",(()=>{for(;a.firstChild;)a.removeChild(a.firstChild);document.querySelectorAll(".active").forEach((e=>{e.classList.remove("active")})),document.getElementById("menu").classList.add("active");const e=document.createElement("div");e.classList.add("menu-background"),a.appendChild(e)})),s.addEventListener("click",c),d.addEventListener("click",(()=>{for(;a.firstChild;)a.removeChild(a.firstChild);document.querySelectorAll(".active").forEach((e=>{e.classList.remove("active")})),document.getElementById("contact").classList.add("active")}))})()})();