if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const t=e=>a(e,r),n={module:{uri:r},exports:o,require:t};i[r]=Promise.all(s.map((e=>n[e]||t(e)))).then((e=>(c(...e),o)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"c8c44fafda0cccdf7a5bdfca7c28a6a7"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"static/css/main.e4db82aa.css",revision:"5503082e945e52c49216045a6a778443"},{url:"static/js/787.37bb31a3.chunk.js",revision:"3a5f906e758e8be32174eaa4ff350375"},{url:"static/js/main.398fa5a5.js",revision:"a8c2a31b3978c6a6d8df142bfadc781a"},{url:"static/js/main.398fa5a5.js.LICENSE.txt",revision:"b114cc85da504a772f040e3f40f8e46a"},{url:"sw.js",revision:"9721cb529d61d5953a4a2b878c3b56d3"},{url:"workbox-d249b2c8.js",revision:"a2207807f7bb5e593e7abede626f75a5"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
