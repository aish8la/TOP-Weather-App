(()=>{var t,e,n,r,o={365:(t,e,n)=>{"use strict";n.d(e,{A:()=>h});var r=n(601),o=n.n(r),a=n(314),i=n.n(a),s=n(417),c=n.n(s),u=new URL(n(774),n.b),d=i()(o()),l=c()(u);d.push([t.id,`@font-face {\n  font-family: "Roboto";\n  src: url(${l});\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: "Roboto", serif;\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  flex-direction: column;\n  background-color: #e9e9e9;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  color: #696969;\n}\n\n.search-container {\n  display: flex;\n  gap: 20px;\n}\n\n.search-container > input {\n  width: 50vw;\n  height: 5vh;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  font-weight: 600;\n  font-size: 1.3rem;\n  padding: 3px 8px;\n}\n\n.search-container > button {\n  padding: 5px 15px;\n  border-radius: 10px;\n  border: 2px solid #b1b1b1;\n  font-weight: 600;\n  background-color: #e9e9e9;\n}\n\n.search-container > button:hover {\n  cursor: pointer;\n  border: 2px solid #696969;\n  background-color: #b1b1b1;\n}\n\n.card-top {\n  color: #010101;\n}\n\n.card {\n  width: auto;\n  min-height: 80vh;\n  aspect-ratio: 5 / 2;\n  border-radius: 30px;\n  display: flex;\n  padding: 0px;\n  overflow: hidden;\n}\n\n.main-section,\n.card-side-section {\n  padding: 20px 30px;\n}\n\n.main-section {\n  background-color: #fafafa;\n  flex-grow: 3;\n  display: flex;\n  flex-direction: column;\n}\n\n.card-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 15%;\n  font-weight: 500;\n}\n\n.card-middle {\n  display: flex;\n  height: 55%;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n}\n\n.weather-icon {\n  width: auto;\n  aspect-ratio: 1 / 1;\n}\n\n.current-details-ctn,\n.weather-icon {\n  height: 80%;\n}\n\ndiv.current-details-ctn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.current-details-ctn .temperature {\n  font-size: 8rem;\n  font-weight: 400;\n  color: #33cccc;\n  position: relative;\n}\n\n.current-details-ctn .temperature:not(:empty)::after {\n  content: "\\00B0";\n  position: absolute;\n}\n\n.current-details-ctn > div:nth-child(1) {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.current-details-ctn .weather-description {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.current-parameters > div {\n  display: flex;\n  height: 2.5rem;\n  align-items: center;\n  margin-left: 2rem;\n  font-size: 1rem;\n}\n\n.current-parameters img {\n  width: 3rem;\n  height: auto;\n  aspect-ratio: 1;\n}\n\n.card-bottom {\n  height: 30%;\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}\n\n.upcoming-days-ctn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-weight: 500;\n  flex-grow: 1;\n}\n\n.upcoming-days-ctn.current {\n  border: 2px solid #e1e1e1;\n  border-radius: 20px;\n}\n\n.upcoming-days-ctn > div:nth-child(2)::after {\n  content: "\\00B0";\n}\n\n.upcoming-days-ctn > div:nth-child(2) {\n  font-size: 2rem;\n}\n\n.upcoming-days-ctn > div:nth-child(3) {\n  font-weight: 400;\n  color: #b1b1b1;\n  padding: 0px 10px;\n}\n\n.card-side-section {\n  background-color: #f6f6f6;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 30px;\n}\n\n.top-side {\n  font-weight: 500;\n  font-size: 1.5rem;\n  color: #010101;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  flex-grow: 1;\n}\n\n.side-current-ctn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-grow: 1;\n  gap: 5px;\n}\n\n.side-current-ctn > div:nth-child(1) {\n  font-size: 2rem;\n  font-weight: 700;\n}\n\n.side-current-ctn > div:nth-child(1)::after,\n.feels-like:not(:empty):after {\n  content: "\\00B0";\n}\n\n.side-current-ctn > div:nth-child(3) {\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n\n.side-hourly-ctn {\n  flex-grow: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n}\n\n.side-hourly-ctn > div:nth-child(1) {\n  font-weight: 600;\n  font-size: 1.5rem;\n  color: #010101;\n}\n\n.hourly-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 2fr);\n  gap: 10px;\n  align-self: stretch;\n}\n\n.hourly-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  font-weight: 500;\n  border: 2px solid #e1e1e1;\n  border-radius: 10px;\n  padding: 8px;\n}\n\n.hourly-card > div:nth-child(2) {\n  font-size: 1.5rem;\n}\n\n.hourly-card > div:nth-child(2):not(:empty):after {\n  content: "\\00B0";\n}\n\n.hourly-card > div:nth-child(3) {\n  color: #b1b1b1;\n}\n\nbody .card .to-be-loaded.loading {\n  animation: skeleton-loading 1s linear infinite alternate;\n  color: transparent;\n}\n\nbody .card .to-be-loaded.loading > img,\nbody .card .to-be-loaded.loading div {\n  visibility: hidden;\n}\n\n@keyframes skeleton-loading {\n  0% {\n    background-color: #f5f5f5;\n  }\n  100% {\n    background-color: #e2e2e2;\n  }\n}\n\n.to-be-loaded.digit:empty::after {\n  content: "00.0";\n}\n\n.to-be-loaded.text:empty::after {\n  content: "Loading...";\n}\n\n#unit-select {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background: #e9e9e9;\n  border: 2px solid #b1b1b1;\n  text-align: center;\n  border-radius: 10px;\n}\n`,""]);const h=d},314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{"use strict";t.exports=function(t){return t[1]}},72:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var h=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=r(t,o),u=0;u<a.length;u++){var d=n(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},913:(t,e,n)=>{var r={"./clear-day.svg":[227,227],"./clear-night.svg":[959,959],"./cloudy.svg":[923,923],"./drizzle.svg":[755,755],"./fog.svg":[257,257],"./hail.svg":[313,313],"./humidity.svg":[388,388],"./partly-cloudy-day-rain.svg":[430,430],"./partly-cloudy-day.svg":[979,979],"./partly-cloudy-night-rain.svg":[682,682],"./partly-cloudy-night.svg":[711,711],"./rain.svg":[269,269],"./sleet.svg":[336,336],"./snow.svg":[402,402],"./thunderstorm.svg":[138,138],"./tornado.svg":[818,818],"./wind.svg":[449,449],"./windsock.svg":[593,593]};function o(t){if(!n.o(r,t))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return n.e(e[1]).then((()=>n.t(o,17)))}o.keys=()=>Object.keys(r),o.id=913,t.exports=o},774:(t,e,n)=>{"use strict";t.exports=n.p+"3c9d0f6513f7cfe91016.ttf"}},a={};function i(t){var e=a[t];if(void 0!==e)return e.exports;var n=a[t]={id:t,exports:{}};return o[t](n,n.exports,i),n.exports}i.m=o,i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,i.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);i.r(o);var a={};t=t||[null,e({}),e([]),e(e)];for(var s=2&r&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((t=>a[t]=()=>n[t]));return a.default=()=>n,i.d(o,a),o},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.f={},i.e=t=>Promise.all(Object.keys(i.f).reduce(((e,n)=>(i.f[n](t,e),e)),[])),i.u=t=>t+".bundle.js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n={},r="website-template:",i.l=(t,e,o,a)=>{if(n[t])n[t].push(e);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==r+o){s=l;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",r+o),s.src=t),n[t]=[e];var h=(e,r)=>{s.onerror=s.onload=null,clearTimeout(f);var o=n[t];if(delete n[t],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((t=>t(r))),e)return e(r)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=n[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),(()=>{i.b=document.baseURI||self.location.href;var t={792:0};i.f.j=(e,n)=>{var r=i.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>r=t[e]=[n,o]));n.push(r[2]=o);var a=i.p+i.u(e),s=new Error;i.l(a,(n=>{if(i.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,r[1](s)}}),"chunk-"+e,e)}};var e=(e,n)=>{var r,o,[a,s,c]=n,u=0;if(a.some((e=>0!==t[e]))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);c&&c(i)}for(e&&e(n);u<a.length;u++)o=a[u],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0},n=self.webpackChunkwebsite_template=self.webpackChunkwebsite_template||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),i.nc=void 0,(()=>{"use strict";var t=i(72),e=i.n(t),n=i(825),r=i.n(n),o=i(659),a=i.n(o),s=i(56),c=i.n(s),u=i(540),d=i.n(u),l=i(113),h=i.n(l),f=i(365),m={};m.styleTagTransform=h(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;const g={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function p(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const y={date:p({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:p({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:p({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},w={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function b(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,o=n?.width?String(n.width):e;r=t.formattingValues[o]||t.formattingValues[e]}else{const e=t.defaultWidth,o=n?.width?String(n.width):t.defaultWidth;r=t.values[o]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const v={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:b({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:b({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:b({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:b({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:b({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function x(t){return(e,n={})=>{const r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;const i=a[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const M={ordinalNumber:(T={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(T.matchPattern);if(!n)return null;const r=n[0],o=t.match(T.parsePattern);if(!o)return null;let a=T.valueCallback?T.valueCallback(o[0]):o[0];return a=e.valueCallback?e.valueCallback(a):a,{value:a,rest:t.slice(r.length)}}),era:x({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:x({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:x({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:x({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var T;const S={code:"en-US",formatDistance:(t,e,n)=>{let r;const o=g[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:y,formatRelative:(t,e,n,r)=>w[t],localize:v,match:M,options:{weekStartsOn:0,firstWeekContainsDate:1}};let k={};function C(){return k}Math.pow(10,8);const D=6048e5,P=Symbol.for("constructDateFrom");function O(t,e){return"function"==typeof t?t(e):t&&"object"==typeof t&&P in t?t[P](e):t instanceof Date?new t.constructor(e):new Date(e)}function E(t,e){return O(e||t,t)}function W(t){const e=E(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function z(t,e){const n=E(t,e?.in);return n.setHours(0,0,0,0),n}function N(t,e){const n=E(t,e?.in);return function(t,e,n){const[r,o]=function(t,...e){const n=O.bind(null,t||e.find((t=>"object"==typeof t)));return e.map(n)}(n?.in,t,e),a=z(r),i=z(o),s=+a-W(a),c=+i-W(i);return Math.round((s-c)/864e5)}(n,function(t,e){const n=E(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}(n))+1}function j(t,e){const n=C(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=E(t,e?.in),a=o.getDay(),i=(a<r?7:0)+a-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function H(t,e){return j(t,{...e,weekStartsOn:1})}function q(t,e){const n=E(t,e?.in),r=n.getFullYear(),o=O(n,0);o.setFullYear(r+1,0,4),o.setHours(0,0,0,0);const a=H(o),i=O(n,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const s=H(i);return n.getTime()>=a.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function A(t,e){const n=E(t,e?.in),r=+H(n)-+function(t,e){const n=q(t,e),r=O(e?.in||t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),H(r)}(n);return Math.round(r/D)+1}function F(t,e){const n=E(t,e?.in),r=n.getFullYear(),o=C(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=O(e?.in||t,0);i.setFullYear(r+1,0,a),i.setHours(0,0,0,0);const s=j(i,e),c=O(e?.in||t,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);const u=j(c,e);return+n>=+s?r+1:+n>=+u?r:r-1}function Y(t,e){const n=E(t,e?.in),r=+j(n,e)-+function(t,e){const n=C(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=F(t,e),a=O(e?.in||t,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),j(a,e)}(n,e);return Math.round(r/D)+1}function U(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const L={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return U("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):U(n+1,2)},d:(t,e)=>U(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>U(t.getHours()%12||12,e.length),H:(t,e)=>U(t.getHours(),e.length),m:(t,e)=>U(t.getMinutes(),e.length),s:(t,e)=>U(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return U(Math.trunc(r*Math.pow(10,n-3)),e.length)}},$={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return L.y(t,e)},Y:function(t,e,n,r){const o=F(t,r),a=o>0?o:1-o;return"YY"===e?U(a%100,2):"Yo"===e?n.ordinalNumber(a,{unit:"year"}):U(a,e.length)},R:function(t,e){return U(q(t),e.length)},u:function(t,e){return U(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return U(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return U(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return L.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return U(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const o=Y(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):U(o,e.length)},I:function(t,e,n){const r=A(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):U(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):L.d(t,e)},D:function(t,e,n){const r=N(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):U(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return U(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return U(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return U(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let o;switch(o=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let o;switch(o=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return L.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):L.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):U(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):U(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):L.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):L.s(t,e)},S:function(t,e){return L.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return Z(r);case"XXXX":case"XX":return B(r);default:return B(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return Z(r);case"xxxx":case"xx":return B(r);default:return B(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+G(r,":");default:return"GMT"+B(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+G(r,":");default:return"GMT"+B(r,":")}},t:function(t,e,n){return U(Math.trunc(+t/1e3),e.length)},T:function(t,e,n){return U(+t,e.length)}};function G(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),o=Math.trunc(r/60),a=r%60;return 0===a?n+String(o):n+String(o)+e+U(a,2)}function Z(t,e){return t%60==0?(t>0?"-":"+")+U(Math.abs(t)/60,2):B(t,e)}function B(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+U(Math.trunc(r/60),2)+e+U(r%60,2)}const Q=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},I=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},X={p:I,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return Q(t,e);let a;switch(r){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;default:a=e.dateTime({width:"full"})}return a.replace("{{date}}",Q(r,e)).replace("{{time}}",I(o,e))}},_=/^D+$/,R=/^Y+$/,J=["D","DD","YY","YYYY"];function V(t){return!(!((e=t)instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))&&"number"!=typeof t||isNaN(+E(t)));var e}const K=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,et=/^'([^]*?)'?$/,nt=/''/g,rt=/[a-zA-Z]/;function ot(t,e,n){const r=C(),o=n?.locale??r.locale??S,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=E(t,n?.in);if(!V(s))throw new RangeError("Invalid time value");let c=e.match(tt).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,X[e])(t,o.formatLong):t})).join("").match(K).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:at(t)};if($[e])return{isToken:!0,value:t};if(e.match(rt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));o.localize.preprocessor&&(c=o.localize.preprocessor(s,c));const u={firstWeekContainsDate:a,weekStartsOn:i,locale:o};return c.map((r=>{if(!r.isToken)return r.value;const a=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return R.test(t)}(a)||!n?.useAdditionalDayOfYearTokens&&function(t){return _.test(t)}(a))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),J.includes(t))throw new RangeError(r)}(a,e,String(t)),(0,$[a[0]])(s,a,o.localize,u)})).join("")}function at(t){const e=t.match(et);return e?e[1].replace(nt,"'"):t}function it(t,e){return E(1e3*t,e?.in)}Symbol.for("constructDateFrom");const st={},ct={};function ut(t,e){try{const n=(st[t]||=new Intl.DateTimeFormat("en-GB",{timeZone:t,hour:"numeric",timeZoneName:"longOffset"}).format)(e).split("GMT")[1]||"";return n in ct?ct[n]:lt(n,n.split(":"))}catch{if(t in ct)return ct[t];const e=t?.match(dt);return e?lt(t,e.slice(1)):NaN}}const dt=/([+-]\d\d):?(\d\d)?/;function lt(t,e){const n=+e[0],r=+(e[1]||0);return ct[t]=n>0?60*n+r:60*n-r}class ht extends Date{constructor(...t){super(),t.length>1&&"string"==typeof t[t.length-1]&&(this.timeZone=t.pop()),this.internal=new Date,isNaN(ut(this.timeZone,this))?this.setTime(NaN):t.length?"number"==typeof t[0]&&(1===t.length||2===t.length&&"number"!=typeof t[1])?this.setTime(t[0]):"string"==typeof t[0]?this.setTime(+new Date(t[0])):t[0]instanceof Date?this.setTime(+t[0]):(this.setTime(+new Date(...t)),gt(this),mt(this)):this.setTime(Date.now())}static tz(t,...e){return e.length?new ht(...e,t):new ht(Date.now(),t)}withTimeZone(t){return new ht(+this,t)}getTimezoneOffset(){return-ut(this.timeZone,this)}setTime(t){return Date.prototype.setTime.apply(this,arguments),mt(this),+this}[Symbol.for("constructDateFrom")](t){return new ht(+new Date(t),this.timeZone)}}const ft=/^(get|set)(?!UTC)/;function mt(t){t.internal.setTime(+t),t.internal.setUTCMinutes(t.internal.getUTCMinutes()-t.getTimezoneOffset())}function gt(t){const e=ut(t.timeZone,t),n=new Date(+t);n.setUTCHours(n.getUTCHours()-1);const r=-new Date(+t).getTimezoneOffset(),o=r- -new Date(+n).getTimezoneOffset(),a=Date.prototype.getHours.apply(t)!==t.internal.getUTCHours();o&&a&&t.internal.setUTCMinutes(t.internal.getUTCMinutes()+o);const i=r-e;i&&Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+i);const s=ut(t.timeZone,t),c=-new Date(+t).getTimezoneOffset()-s-i;if(s!==e&&c){Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+c);const e=s-ut(t.timeZone,t);e&&(t.internal.setUTCMinutes(t.internal.getUTCMinutes()+e),Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+e))}}Object.getOwnPropertyNames(Date.prototype).forEach((t=>{if(!ft.test(t))return;const e=t.replace(ft,"$1UTC");ht.prototype[e]&&(t.startsWith("get")?ht.prototype[t]=function(){return this.internal[e]()}:(ht.prototype[t]=function(){var t;return Date.prototype[e].apply(this.internal,arguments),t=this,Date.prototype.setFullYear.call(t,t.internal.getUTCFullYear(),t.internal.getUTCMonth(),t.internal.getUTCDate()),Date.prototype.setHours.call(t,t.internal.getUTCHours(),t.internal.getUTCMinutes(),t.internal.getUTCSeconds(),t.internal.getUTCMilliseconds()),gt(t),+this},ht.prototype[e]=function(){return Date.prototype[e].apply(this,arguments),mt(this),+this}))}));class pt extends ht{static tz(t,...e){return e.length?new pt(...e,t):new pt(Date.now(),t)}toISOString(){const[t,e,n]=this.tzComponents(),r=`${t}${e}:${n}`;return this.internal.toISOString().slice(0,-1)+r}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[t,e,n,r]=this.internal.toUTCString().split(" ");return`${t?.slice(0,-1)} ${n} ${e} ${r}`}toTimeString(){const t=this.internal.toUTCString().split(" ")[4],[e,n,r]=this.tzComponents();return`${t} GMT${e}${n}${r} (${o=this.timeZone,a=this,new Intl.DateTimeFormat("en-GB",{timeZone:o,timeZoneName:"long"}).format(a).slice(12)})`;var o,a}toLocaleString(t,e){return Date.prototype.toLocaleString.call(this,t,{...e,timeZone:e?.timeZone||this.timeZone})}toLocaleDateString(t,e){return Date.prototype.toLocaleDateString.call(this,t,{...e,timeZone:e?.timeZone||this.timeZone})}toLocaleTimeString(t,e){return Date.prototype.toLocaleTimeString.call(this,t,{...e,timeZone:e?.timeZone||this.timeZone})}tzComponents(){const t=this.getTimezoneOffset();return[t>0?"-":"+",String(Math.floor(Math.abs(t)/60)).padStart(2,"0"),String(Math.abs(t)%60).padStart(2,"0")]}withTimeZone(t){return new pt(+this,t)}[Symbol.for("constructDateFrom")](t){return new pt(+new Date(t),this.timeZone)}}const yt={url:"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",apiKey:"AQDDMAMVYVMQ3HDRU8QNG3XF3",unitGroup:"metric",locationString:"Male",apiString(){const t="unitGroup="+(this.unitGroup||"metric"),e=this.locationString||"Male";return`${this.url}${e}?${t}&key=${this.apiKey}`}};const wt=document.querySelector("#get-weather-btn"),bt=document.querySelector("#location-input"),vt=document.querySelector("#unit-select"),xt={general:document.querySelectorAll('[data-type="general"]'),current:document.querySelectorAll('[data-type="current"]'),periodic:document.querySelectorAll('[data-type="periodic"]'),"weather-icon":document.querySelector('[data-definition="weather-icon"][data-type="current"]'),skeletonElements:document.querySelectorAll(".to-be-loaded")};function Mt(){xt.skeletonElements.forEach((t=>{t.classList.toggle("loading")}))}async function Tt(){var t;t=vt.value,yt.unitGroup=t,xt["weather-icon"].src="",Mt();const e=await async function(){try{const t=await fetch(yt.apiString()),e=await t.json(),n=function(t){const e=t,n={general:{address:e.resolvedAddress,get currentTime(){return new pt(new Date,"Europe/London")},get time(){return ot(this.currentTime,"HH:mm:ss")},get date(){return ot(this.currentTime,"do MMMM yyyy")},get greeting(){const t=this.currentTime.getHours();let e="Good ";return e+=t<12?"Morning":t<17?"Afternoon":"Evening",e}},timezone:e.timezone,current:{condition:e.currentConditions.conditions,time:e.currentConditions.datetime,datetime:new pt(it(e.currentConditions.datetimeEpoch),e.timezone),"feels-like":e.currentConditions.feelslike,humidity:e.currentConditions.humidity,"weather-icon":e.currentConditions.icon,temperature:e.currentConditions.temp,"wind-speed":e.currentConditions.windspeed},daily:[],hourly:[]};for(let t=0;t<7;t++){const r={day:ot(e.days[t].datetime,"iii"),temperature:e.days[t].temp,condition:e.days[t].conditions};n.daily.push(r)}const r=new pt(it(e.currentConditions.datetimeEpoch),e.timezone);let o=0,a=Number(ot(r,"HH"));for(let t=0;t<7;t++){const t={dateTime:e.days[o].hours[a].datetime,hour:ot(new pt(it(e.days[o].hours[a].datetimeEpoch),e.timezone),"HH:mm"),temperature:e.days[o].hours[a].temp,condition:e.days[o].hours[a].conditions};n.hourly.push(t),23!==a?a++:(o++,a=0)}return n}(e);return console.log(e),n}catch(t){console.log(t)}}(),n=await async function(t){const e=await i(913)(`./${t}.svg`);return await e.default}(e.current["weather-icon"]);var r,o;r=e,o=n,xt["weather-icon"].src=o,xt.general.forEach((t=>{t.textContent=r.general[t.dataset.definition]})),xt.current.forEach((t=>{"IMG"!==t.tagName&&(t.textContent=r.current[t.dataset.definition])})),xt.periodic.forEach((t=>{const e=t.dataset.periodType,n=t.dataset.periodIndex,o=t.dataset.definition;t.textContent=r[e][n][o]})),Mt()}Tt(),vt.addEventListener("change",Tt),wt.addEventListener("click",(function(){const t=bt.value;var e;bt.value="",e=t,yt.locationString=e,Tt()}))})()})();