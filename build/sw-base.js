importScripts('workbox-sw.prod.v2.1.3.js');

const workboxSW = new self.WorkboxSW();

workboxSW.router.registerRoute(/.*(?:fonts|gstatic)\.com.*$/, workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'google-fonts',
}));

workboxSW.precache([]);