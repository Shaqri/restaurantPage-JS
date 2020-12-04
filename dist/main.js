(()=>{"use strict";var n={83:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,"html {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.navbar {\r\n    font-family: 'Sansita Swashed', cursive;\r\n    padding: 1rem;\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: calc(100% - 2rem);\r\n    background-color: black;\r\n}\r\n\r\n.navbar nav {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.nav-item {\r\n    margin: 0 1em;\r\n    font-size: 1.4em;\r\n    cursor: pointer;\r\n    color: white;\r\n}",""]);const i=o},23:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ */\r\n/* v1.0 | 20080212 */\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\toutline: 0;\r\n\tfont-size: 100%;\r\n\tvertical-align: baseline;\r\n\tbackground: transparent;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\n/* remember to define focus styles! */\r\n:focus {\r\n\toutline: 0;\r\n}\r\n\r\n/* remember to highlight inserts somehow! */\r\nins {\r\n\ttext-decoration: none;\r\n}\r\ndel {\r\n\ttext-decoration: line-through;\r\n}\r\n\r\n/* tables still need 'cellspacing=\"0\"' in the markup */\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n",""]);const i=o},524:(n,e,r)=>{r.d(e,{Z:()=>m});var t=r(645),o=r.n(t),i=r(667),a=r.n(i),c=r(513),s=r(162),l=r(308),d=o()((function(n){return n[1]})),u=a()(c.Z),h=a()(s.Z),f=a()(l.Z);d.push([n.id,"\r\n.content {\r\n    height: 100vh;\r\n    width: 100%;\r\n}\r\n\r\n.home-background {\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-image: url("+u+");\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    z-index: -2;\r\n}\r\n\r\n.menu-background {\r\n    background-image: url("+h+");\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    z-index: -2;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n.contact-background {\r\n    background-image: url("+f+");\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    z-index: -2;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n.hero-title {\r\n    font-size: 3em;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 50%;\r\n    font-weight: 100;\r\n    color: yellow;\r\n    z-index: 1;\r\n}\r\n\r\n.active {\r\n\r\n    position: relative;\r\n}\r\n\r\n.active::before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 2px;\r\n    background-color: red;\r\n    bottom: -3px;\r\n    left: 0;\r\n    right: 0;\r\n    transform-origin: left;\r\n    transition: 200ms ease-in;\r\n    transform: scaleX(1)\r\n}\r\n\r\n.menu-table {\r\n    color: black;\r\n    width: calc(80%/3);\r\n    border-radius: 5px;\r\n    height: 500px;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 1em;\r\n    font-size: 1.4em;\r\n    background-color: rgba(235, 235, 225, .3);\r\n    transition: 120ms ease-in;\r\n \r\n}\r\n\r\n.menu-table:hover {\r\n    background-color: rgba(235, 235, 205, .5);\r\n}\r\n\r\n\r\n.menu-flex {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height: 100%;\r\n}",""]);const m=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},308:(n,e,r)=>{r.d(e,{Z:()=>t});const t=r.p+"4ef5668c8b1800aac5c156144aa1864b.jpg"},162:(n,e,r)=>{r.d(e,{Z:()=>t});const t=r.p+"6f34df802bb33e9200f7d1c1b8a7658c.jpg"},513:(n,e,r)=>{r.d(e,{Z:()=>t});const t=r.p+"1c13c747b3b9466887b4572abdb1068f.jpg"},379:(n,e,r)=>{var t,o=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),i=[];function a(n){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===n){e=r;break}return e}function c(n,e){for(var r={},t=[],o=0;o<n.length;o++){var c=n[o],s=e.base?c[0]+e.base:c[0],l=r[s]||0,d="".concat(s," ").concat(l);r[s]=l+1;var u=a(d),h={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(h)):i.push({identifier:d,updater:p(h,e),references:1}),t.push(d)}return t}function s(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function u(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function h(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,m=0;function p(n,e){var r,t,o;if(e.singleton){var i=m++;r=f||(f=s(e)),t=u.bind(null,r,i,!1),o=u.bind(null,r,i,!0)}else r=s(e),t=h.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=a(r[t]);i[o].references--}for(var s=c(n,e),l=0;l<r.length;l++){var d=a(r[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}r=s}}}}},e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,r),o.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{var n=r(379),e=r.n(n),t=r(23);e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;var o=r(83);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var i=r(524);e()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const a=document.querySelector(".content"),c=()=>{for(;a.firstChild;)a.removeChild(a.firstChild);document.querySelectorAll(".active").forEach((n=>{n.classList.remove("active")}));const n=document.createElement("div");n.classList.add("home-background"),a.appendChild(n);const e=document.createElement("h1");e.textContent="Majestic",e.classList.add("hero-title"),a.appendChild(e),document.getElementById("home").classList.add("active")};c();const s=document.getElementById("home"),l=document.getElementById("menu"),d=document.getElementById("contact");l.addEventListener("click",(()=>{for(;a.firstChild;)a.removeChild(a.firstChild);document.querySelectorAll(".active").forEach((n=>{n.classList.remove("active")})),document.getElementById("menu").classList.add("active");const n=document.createElement("div");n.classList.add("menu-background"),a.appendChild(n);const e=document.createElement("div");a.appendChild(e),["Dishes","Desserts","Drinks"].forEach((n=>{const r=document.createElement("div");r.innerHTML=`<h2>${n}</h2>`,r.classList.add("menu-table"),e.appendChild(r)})),e.classList.add("menu-flex")})),s.addEventListener("click",c),d.addEventListener("click",(()=>{for(;a.firstChild;)a.removeChild(a.firstChild);document.querySelectorAll(".active").forEach((n=>{n.classList.remove("active")})),document.getElementById("contact").classList.add("active");const n=document.createElement("div");n.classList.add("contact-background"),a.appendChild(n)}))})()})();