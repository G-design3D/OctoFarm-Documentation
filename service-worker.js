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
    "revision": "ddc8592873e7b0eba9aa6780d20ab149"
  },
  {
    "url": "api/index.html",
    "revision": "74996c9d029f2a4f12458fd1edb61889"
  },
  {
    "url": "assets/css/0.styles.48e8e2bb.css",
    "revision": "ef823d7451e7e646b0185fa4f940f3f2"
  },
  {
    "url": "assets/img/clone-of.74241f73.png",
    "revision": "74241f73d4aefb9524fb3392e4230348"
  },
  {
    "url": "assets/img/gotify-example.60f15769.png",
    "revision": "60f15769f81ec8cd3236591f6dc84529"
  },
  {
    "url": "assets/img/open-c.296bfbfd.png",
    "revision": "296bfbfdb95d3c5ceb2514310e42a7a8"
  },
  {
    "url": "assets/img/pm2-install.3e05ff0a.png",
    "revision": "3e05ff0a415accd76ca300186e32b2db"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start-octofarm.07ee2557.png",
    "revision": "07ee2557d21f00f16ed1ef736752bc79"
  },
  {
    "url": "assets/js/10.1e710ca1.js",
    "revision": "6fb34fa4352ed0b10837bb0c172e1401"
  },
  {
    "url": "assets/js/11.3aeb6364.js",
    "revision": "e0fcee77c4bab818df176d61401e5ba0"
  },
  {
    "url": "assets/js/12.6a316914.js",
    "revision": "1169151fb3cf9a569a465f9ef8c7dd4b"
  },
  {
    "url": "assets/js/13.14518694.js",
    "revision": "fd696d0df1d457eee0c1d2bcd36617d7"
  },
  {
    "url": "assets/js/14.10858028.js",
    "revision": "2171ec6194002ae02b354e0a10167244"
  },
  {
    "url": "assets/js/15.68dfc91f.js",
    "revision": "857140ed999d600b7fec32a976d335ca"
  },
  {
    "url": "assets/js/16.01eefaea.js",
    "revision": "95236f11677121c0477812e5991d6e9d"
  },
  {
    "url": "assets/js/17.3619fa02.js",
    "revision": "b9532a7042ec82f63a30b34451a07747"
  },
  {
    "url": "assets/js/18.d7602323.js",
    "revision": "89e6d17d9bf34c4c57d10b9e49c56e89"
  },
  {
    "url": "assets/js/19.243d90ed.js",
    "revision": "1ba7ca1a84427ddff9f8ec1567da249e"
  },
  {
    "url": "assets/js/2.965b894a.js",
    "revision": "f504031d64ab18c8c83edb62aaa17c32"
  },
  {
    "url": "assets/js/20.be41b541.js",
    "revision": "ae67da58485a0bda43a62ab2a8b14748"
  },
  {
    "url": "assets/js/21.dcc69a65.js",
    "revision": "d973d2bc10310d2b2a725f015b4804e1"
  },
  {
    "url": "assets/js/22.a5b45674.js",
    "revision": "446a7f438923ec23afea93a588774c5f"
  },
  {
    "url": "assets/js/23.d42c3b54.js",
    "revision": "4b3ab44336271fc2fc18acae6146a347"
  },
  {
    "url": "assets/js/24.8cc0df8c.js",
    "revision": "40f739e88d3b67fac7c18873b048e06e"
  },
  {
    "url": "assets/js/25.4318df64.js",
    "revision": "0e21608be2722ce34d50714d066676ed"
  },
  {
    "url": "assets/js/26.4397ebca.js",
    "revision": "0fec93abc3a0841f0167a9e099191d5c"
  },
  {
    "url": "assets/js/27.71c55e50.js",
    "revision": "b24fd2d3d26a0f58a30f23f19a1aabc1"
  },
  {
    "url": "assets/js/28.6039974d.js",
    "revision": "4bd5ab82ad7cd72748ee799ac624d34d"
  },
  {
    "url": "assets/js/29.cd7e2b34.js",
    "revision": "0ba0e73274f514d6d92cf541a6d94ea2"
  },
  {
    "url": "assets/js/3.293bf975.js",
    "revision": "86df27a2b6f05a30c5906d9542241dac"
  },
  {
    "url": "assets/js/30.5d719740.js",
    "revision": "e18612e7455e4a6c3e801d03959d0752"
  },
  {
    "url": "assets/js/31.8002ee73.js",
    "revision": "3fc940566b59120c86bb1ccd9b41182b"
  },
  {
    "url": "assets/js/32.3f0f6196.js",
    "revision": "0368f59606ddc622caa9e954103c659c"
  },
  {
    "url": "assets/js/33.3933490d.js",
    "revision": "c3ec69c91eea94bfc343394f734ec3de"
  },
  {
    "url": "assets/js/34.89425a09.js",
    "revision": "26e788c38c593a4b7d85490f6fe9e545"
  },
  {
    "url": "assets/js/35.c28071e6.js",
    "revision": "daa02626f2f74773a134196e222c9ff8"
  },
  {
    "url": "assets/js/36.75012aba.js",
    "revision": "fd653fb2bfd6dbd5391c127752131317"
  },
  {
    "url": "assets/js/37.6ee75b18.js",
    "revision": "6ed8992ed1650b3b853fc8e39bcbe2b9"
  },
  {
    "url": "assets/js/4.c8c44e52.js",
    "revision": "a5aaf9a70dc6b94b790182c68edefeb0"
  },
  {
    "url": "assets/js/5.b307729f.js",
    "revision": "3f0c8a4a67c84961957bb80188151e0c"
  },
  {
    "url": "assets/js/6.e55b13fa.js",
    "revision": "7c7e1147a50e6820eb1964608aee6c85"
  },
  {
    "url": "assets/js/7.4abc5fac.js",
    "revision": "71326cb021fb1b4923b18adf4fc27720"
  },
  {
    "url": "assets/js/8.1a4b60f9.js",
    "revision": "86928c0574561693fb2b60912a798850"
  },
  {
    "url": "assets/js/9.75a81c4f.js",
    "revision": "821719f6a05598ed1604a99c8988f6ac"
  },
  {
    "url": "assets/js/app.67514df2.js",
    "revision": "390312c157d43f66065d0ef5d8c77613"
  },
  {
    "url": "contributing/index.html",
    "revision": "cd316336b9ecc35b33333db78b04bd36"
  },
  {
    "url": "getting-started/index.html",
    "revision": "55b5a80e874a11952a38a76924a6883c"
  },
  {
    "url": "getting-started/octofarm-cli.html",
    "revision": "de807ddf6859e57210fd0ab17b39c637"
  },
  {
    "url": "getting-started/octofarm-faq.html",
    "revision": "67ac412d1a1675dfaa35cc92f7946c1d"
  },
  {
    "url": "getting-started/octofarm-remote-access.html",
    "revision": "087828e213398d7d6de7714ebc3b5b2c"
  },
  {
    "url": "getting-started/octofarm-requirements.html",
    "revision": "9968ef188c2e5728faebbe17e38235a7"
  },
  {
    "url": "getting-started/octoprint-setup.html",
    "revision": "71cd602f7951a028cc0cad644a8de478"
  },
  {
    "url": "getting-started/octoprint-supported-plugins.html",
    "revision": "5a9587bab2d6269f68bca7037688e429"
  },
  {
    "url": "guides/index.html",
    "revision": "493aeb71d2ae2909a029866443d863ec"
  },
  {
    "url": "guides/octofarm-scripts-gotify.html",
    "revision": "bfb53d9a738fa89a6c1abd6325cfbfd4"
  },
  {
    "url": "guides/octofarm-updating.html",
    "revision": "a5eeb0fb47934585b83c936fb6519260"
  },
  {
    "url": "guides/upgrade-mongodb-database.html",
    "revision": "97881a35fdf3dcb80bc498ed8e61d23a"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "5017e7e33ca7c617bf40f4c449803354"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0fc1d956b26dfd6d81b992882ed8cfec"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "dd34c21efa1fd560c76c84bd1f8c0e85"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "175295be99cd023090875a8fe8de9cff"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "39939dc9e24b73c478026c5850ac8a4d"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "510c6b26f256ec09d2d8ab82fe713283"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "1f6c689ebef2033c87b211b9f6971826"
  },
  {
    "url": "index.html",
    "revision": "60fcb19f3ab98a3ea2169725e6c7dbfb"
  },
  {
    "url": "installation/index.html",
    "revision": "1791f572f72c85a9e76ab085b035c6f1"
  },
  {
    "url": "installation/install-docker.html",
    "revision": "3ee46bc56c433eb9d39e77770f43a328"
  },
  {
    "url": "installation/install-linux-arch.html",
    "revision": "53c31a77879a6b55ed8d756bfb71c9c0"
  },
  {
    "url": "installation/install-linux-debian.html",
    "revision": "2d88ca58a5ce7cdc3b5092c21bdf4a85"
  },
  {
    "url": "installation/install-linux-opensuse.html",
    "revision": "aab89635ba03ef81e8b79a0f6c8a79c6"
  },
  {
    "url": "installation/install-linux-redhat.html",
    "revision": "700752d7a77ab7d458b4dd5b451b6da3"
  },
  {
    "url": "installation/install-linux-ubuntu.html",
    "revision": "a12c2cad77532b7b0d1bb1348f4c359a"
  },
  {
    "url": "installation/install-raspberry-pi.html",
    "revision": "9237b68ff3815fc6c54a077e4615bf26"
  },
  {
    "url": "installation/install-windows.html",
    "revision": "878510b4170b6481dc04b17fc867a6bc"
  },
  {
    "url": "installation/setup-environment.html",
    "revision": "b26c938da30e31db5264b51e25343fa9"
  },
  {
    "url": "installation/setup-service.html",
    "revision": "e776f57b86c9845c7cf1c33d98b07f6f"
  },
  {
    "url": "logo.png",
    "revision": "cafa45e7ede7e3888e08e8640cb7d92d"
  },
  {
    "url": "usage-instructions/index.html",
    "revision": "cab99b68dd603f0a4e4b3c9fc68c1a5f"
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
