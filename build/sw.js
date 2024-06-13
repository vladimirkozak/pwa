importScripts('workbox-sw.prod.v2.1.3.js');

const workboxSW = new self.WorkboxSW();

workboxSW.router.registerRoute(/.*(?:fonts|gstatic)\.com.*$/, workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'google-fonts',
}));

workboxSW.precache([
  {
    "url": "app.js",
    "revision": "a34f1a4bbf981f4d2a1b79db450615fe"
  },
  {
    "url": "icons/8gEFyiIJp7Y.jpg",
    "revision": "845f371d4d042314e22f0d057b9d7818"
  },
  {
    "url": "icons/icon-1024.png",
    "revision": "d5c17160dfe28383b69ba3d71864dd68"
  },
  {
    "url": "icons/icon-512.png",
    "revision": "a5db9aa914c3fe1d8d9a3cdec39a271a"
  },
  {
    "url": "index.html",
    "revision": "d22cd4d8d526b05147bd1f45dd9b1564"
  },
  {
    "url": "styles.css",
    "revision": "1fe01b02769c76ff322b363b0c7185d7"
  },
  {
    "url": "sw-base.js",
    "revision": "40bbe6db270879012044f13e28a129b7"
  },
  {
    "url": "sw-register.js",
    "revision": "38340470a099eba02e32487bd5550039"
  },
  {
    "url": "sw.js",
    "revision": "ff364c0e25340f16113b151e26213bab"
  },
  {
    "url": "workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  }
]);