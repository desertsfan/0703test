!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:48,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},o=function(){for(var e={},t=0,n=arguments.length;t<n;t++)!function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}(arguments[t]);return e},a=function(t){return parseInt(e.getComputedStyle(t).height,10)},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===a&&t>=48&&t<=57||1===a&&t>=48&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},i=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},u=function(){return Math.max(document.documentElement.clientHeight,e.innerHeight||0)},c=function(){return parseInt(e.getComputedStyle(document.documentElement).height,10)},s=function(e,t,n){var o=0;if(e.offsetParent)do{o+=e.offsetTop,e=e.offsetParent}while(e);return o=Math.max(o-t-n,0),Math.min(o,c()-u())},l=function(e){return e?a(e)+e.offsetTop:0},f=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},d=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)};return function(a,u){var h,m,g,p,v,b,y,I={};I.cancelScroll=function(){cancelAnimationFrame(y)},I.animateScroll=function(t,a,r){var u=o(h||n,r||{}),d="[object Number]"===Object.prototype.toString.call(t),m=d||!t.tagName?null:t;if(d||m){var g=e.pageYOffset;u.header&&!p&&(p=document.querySelector(u.header)),v||(v=l(p));var b,y,S,E=d?t:s(m,v,parseInt("function"==typeof u.offset?u.offset():u.offset,10)),O=E-g,A=c(),C=0,Q=function(n,o){var r=e.pageYOffset;if(n==o||r==o||(g<o&&e.innerHeight+r)>=A)return I.cancelScroll(),f(t,o,d),u.after(t,a),b=null,!0},q=function(t){b||(b=t),y=(C+=t-b)/parseInt(u.speed,10),S=g+O*i(u,y=y>1?1:y),e.scrollTo(0,Math.floor(S)),Q(S,E)||(e.requestAnimationFrame(q),b=t)};0===e.pageYOffset&&e.scrollTo(0,0),u.before(t,a),I.cancelScroll(),e.requestAnimationFrame(q)}};var S=function(t){try{r(decodeURIComponent(e.location.hash))}catch(t){r(e.location.hash)}m&&(m.id=m.getAttribute("data-scroll-id"),I.animateScroll(m,g),m=null,g=null)},E=function(t){if(!d()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(g=t.target.closest(a))&&"a"===g.tagName.toLowerCase()&&!t.target.closest(h.ignore)&&g.hostname===e.location.hostname&&g.pathname===e.location.pathname&&/#/.test(g.href)){var n;try{n=r(decodeURIComponent(g.hash))}catch(e){n=r(g.hash)}if("#"===n){t.preventDefault();var o=(m=document.body).id?m.id:"smooth-scroll-top";return m.setAttribute("data-scroll-id",o),m.id="",void(e.location.hash.substring(1)===o?S():e.location.hash=o)}(m=document.querySelector(n))&&(m.setAttribute("data-scroll-id",m.id),m.id="",g.hash===e.location.hash&&(t.preventDefault(),S()))}},O=function(e){b||(b=setTimeout(function(){b=null,v=l(p)},66))};return I.destroy=function(){h&&(document.removeEventListener("click",E,!1),e.removeEventListener("resize",O,!1),I.cancelScroll(),h=null,m=null,g=null,p=null,v=null,b=null,y=null)},I.init=function(a){t&&(I.destroy(),h=o(n,a||{}),p=h.header?document.querySelector(h.header):null,v=l(p),document.addEventListener("click",E,!1),e.addEventListener("hashchange",S,!1),p&&e.addEventListener("resize",O,!1))},I.init(u),I}});