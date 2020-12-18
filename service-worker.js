/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a7073c0e4c2476147f4167b8e2ef5ade"
  },
  {
    "url": "assets/css/0.styles.2b949031.css",
    "revision": "5eaec8c26bc57df0c8b50cdcb8f935b9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ca672766.js",
    "revision": "27c68de534d0180e9331eafa42c596ee"
  },
  {
    "url": "assets/js/11.e47e575c.js",
    "revision": "789273f386d73eef01e80c221cc42776"
  },
  {
    "url": "assets/js/12.95cab69f.js",
    "revision": "1c5a0bdf607caee730fa7ef3d908db15"
  },
  {
    "url": "assets/js/13.772c8600.js",
    "revision": "3adeb04e324cf7e0ba0784b1bd687641"
  },
  {
    "url": "assets/js/14.79bc76a0.js",
    "revision": "48a4b3f613792321bb0fd28ca6c4541e"
  },
  {
    "url": "assets/js/15.3bfbfa0a.js",
    "revision": "1268fd5c4a16bef003b04dc34bc1317c"
  },
  {
    "url": "assets/js/16.43346059.js",
    "revision": "920f89aa232153c4eb827789875e2fab"
  },
  {
    "url": "assets/js/17.f5ef6a62.js",
    "revision": "0f1e65609c87fae7cc1bfb720d82a29c"
  },
  {
    "url": "assets/js/18.be490561.js",
    "revision": "7b741225e4ef39da8b1530bf1a62f756"
  },
  {
    "url": "assets/js/19.dbcd720f.js",
    "revision": "61ed4f9e5995ecccd288d58fe6896cc4"
  },
  {
    "url": "assets/js/2.8a7d6c86.js",
    "revision": "7f1d681db3c11bf4a660293fb6830ef0"
  },
  {
    "url": "assets/js/3.3e6b6034.js",
    "revision": "2ae7d5109ccfa604ca2113dff96bf564"
  },
  {
    "url": "assets/js/4.d14efe73.js",
    "revision": "f9b8a094bae1eb94e4274d7092ca1236"
  },
  {
    "url": "assets/js/5.ddf208b5.js",
    "revision": "4ccbc0bcc3ed4501ead93c32b857fa1c"
  },
  {
    "url": "assets/js/6.86af948b.js",
    "revision": "3c1aed9559cb4bd005fe56adf1a4d781"
  },
  {
    "url": "assets/js/7.a2151a3e.js",
    "revision": "9ed3fc29089dbde4248da0b2658cd0a8"
  },
  {
    "url": "assets/js/8.fbe7f232.js",
    "revision": "b62277e777f4537f4864e1ae1cd0e428"
  },
  {
    "url": "assets/js/9.1444c297.js",
    "revision": "b2b251558a662450b0b2c160d41df578"
  },
  {
    "url": "assets/js/app.a2565c51.js",
    "revision": "30d6ab32c3c8cb8960c78f88002423f0"
  },
  {
    "url": "dart/身份证复印件一寸白底两张.html",
    "revision": "a1466c80c0e15c2e8293f6751a538cd5"
  },
  {
    "url": "dart/文章列表 使用调用 apicmsarticleselectArticleList 这个接口吗  columnId   是调用的 apicmscolumnselectColumnList 吗.html",
    "revision": "9031a552513f49ea9060d1f911ad08f6"
  },
  {
    "url": "dart/index.html",
    "revision": "177f9afecbfbb62ed85c5bc10713acc0"
  },
  {
    "url": "Flutter/使用本地图片的配置.png",
    "revision": "f9b53266b23b8dec06c37a32b2bb48e4"
  },
  {
    "url": "Flutter/字体的配置.png",
    "revision": "9ed2f59fed0cc3440e52f7e45a16b1bc"
  },
  {
    "url": "Flutter/index.html",
    "revision": "daea151517624fd373a25a54838c26c2"
  },
  {
    "url": "home.png",
    "revision": "a2f79901e5af374ad0514a6fd4ad27e5"
  },
  {
    "url": "index.html",
    "revision": "df48e080d70d2f900172d4136e056a43"
  },
  {
    "url": "interview/index.html",
    "revision": "415e5bd6e60226efd5b10ffc73475a68"
  },
  {
    "url": "interview/vue组件通信.html",
    "revision": "05806a23ce25651929ac79d3bd673382"
  },
  {
    "url": "other/1.html",
    "revision": "c8d8a65b2d1406f13f076818ff3024e5"
  },
  {
    "url": "other/index.html",
    "revision": "c04604626a6b59c3fda041cd96e0e94a"
  },
  {
    "url": "web/css/index.html",
    "revision": "71146a0314df758fa2eaa766c7f6ec8f"
  },
  {
    "url": "web/html/index.html",
    "revision": "eecd5d25b9280ccb3ba6daa2a4de53ce"
  },
  {
    "url": "web/javascript/index.html",
    "revision": "161c9077eb8a3f2a7a418364ea1b2dc6"
  },
  {
    "url": "web/typescript/index.html",
    "revision": "41c2f6b3033cb767bf38b4872a117ceb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
