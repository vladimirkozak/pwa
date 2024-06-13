module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.{html,css,js,jpg,png}"
  ],
  "swSrc": "build/sw-base.js",
  "swDest": "build/sw.js",
  "globIgnores": [
    "../workbox-cli-config.js"
  ]
};
