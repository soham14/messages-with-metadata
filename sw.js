if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(i[b])return;let d={};const a=e=>c(e,b),o={module:{uri:b},exports:d,require:a};i[b]=Promise.all(s.map((e=>o[e]||a(e)))).then((e=>(r(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"build/asset-manifest.json",revision:"f681356703781908f8ea88b8f07e67ca"},{url:"build/favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"build/index.html",revision:"df50099675cf18fb2c3422f7d1bd9d5a"},{url:"build/logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"build/logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"build/manifest.json",revision:"d9d975cebe2ec20b6c652e1e4c12ccf0"},{url:"build/robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"build/static/css/main.3ffd97bd.css",revision:"c4693af1b3230302464cab6a26ce430c"},{url:"build/static/js/787.37bb31a3.chunk.js",revision:"3a5f906e758e8be32174eaa4ff350375"},{url:"build/static/js/main.f069ff8f.js",revision:"e27b0d1502cf17bce7fa7c9c2c54e135"},{url:"build/static/js/main.f069ff8f.js.LICENSE.txt",revision:"b114cc85da504a772f040e3f40f8e46a"},{url:"package-lock.json",revision:"8da29677ea88d74d9a8e64494f8f998b"},{url:"package.json",revision:"32ef94dcb23502b773abe237bafee774"},{url:"public/favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"public/index.html",revision:"1c4e1de6dad161750ca8b1bcfc873294"},{url:"public/logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"public/logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"public/manifest.json",revision:"d9d975cebe2ec20b6c652e1e4c12ccf0"},{url:"public/robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"README.md",revision:"33822368bfb3ad3de6fceb9cd76aa0dd"},{url:"src/App.css",revision:"5622f3c8e3a8c89e842409999cfdd473"},{url:"src/App.js",revision:"6eb769cf3a64b27713d34831178ba911"},{url:"src/App.test.js",revision:"d18ac434afb00158b91831ac1e36c491"},{url:"src/index.css",revision:"6c2104b8d219ed99234ae2d6329f4357"},{url:"src/index.js",revision:"de8d7d2b70f260537bba30e87a711959"},{url:"src/reportWebVitals.js",revision:"240e2381f826a9bb84d178b29b7b9abe"},{url:"src/setupTests.js",revision:"1a77571e1a8cf36018a41bcedf60db75"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
