"use strict";var precacheConfig=[["/index.html","77db05071b8cc8b1e125c7da07781669"],["/static/css/main.34908ec2.css","197580eccbd7ea2cd705e5e1d462ee4d"],["/static/js/main.124b51c6.js","215cd0103b9247256a8ba0310a484c67"],["/static/media/1.285bbcaa.jpg","285bbcaa4e002d24234c39b0f72c53ec"],["/static/media/1.86069920.jpg","86069920c480884ca5400fe06ded08de"],["/static/media/1.cb00bec9.png","cb00bec95620d53b9b2e23aa9ed48229"],["/static/media/1.dea1bf7d.jpeg","dea1bf7db2364766feba33f1cacfb5e4"],["/static/media/2.f780666a.jpg","f780666a43740abd7ffafc3d0acc592a"],["/static/media/22643017_1674662525937347_1962785291_o.a0b593b9.png","a0b593b9099378e9f8c069d345e824f3"],["/static/media/3.c51aa119.jpg","c51aa1192652900c7d54317b2fd771e4"],["/static/media/browserconfig.cf65e1bc.xml","cf65e1bc9dee25d0e6cd1552bff9056b"],["/static/media/devicon.0f964a72.woff","0f964a72f8fbdf9c8d4e0122b8effb40"],["/static/media/devicon.29f80b00.ttf","29f80b00a7b4641183f96f08be374697"],["/static/media/devicon.681fa39a.eot","681fa39a79c22f0035a0720e2b2bda3b"],["/static/media/devicon.74e6e6c3.svg","74e6e6c3dcfca56767adabe83a510f2e"],["/static/media/favicon.18d42ce9.ico","18d42ce9f7d5ffe6848502d866d20393"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/header-blur.fa593651.png","fa593651ff9037b7b3a19ea4010c1145"],["/static/media/lianudom.4c420652.jpg","4c420652ccaa82c815d8ff7fdad21686"],["/static/media/portrait.08581089.png","08581089307c7dd77e0f45ebc84c3fb8"],["/static/media/reversi.e2cef217.png","e2cef217b38bbb4612b7c192b8212d5d"],["/static/media/safari-pinned-tab.9af0e94f.svg","9af0e94f9a14323b1c05a7f34451caf7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));0,e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});