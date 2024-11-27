// const {InjectManifest} = require('workbox-webpack-plugin');

// module.exports = {
//   // Other webpack config...
//   plugins: [
//     // Other plugins...
//     new InjectManifest({
//       // These are some common options, and not all are required.
//       // Consult the docs for more info.
//       exclude: [/.../, '...'],
//     //   maximumFileSizeToCacheInBytes: '',
//       swSrc: './service-worker-src.js',
//       swDest: "service-worker.js"
//     }),
//   ],
// };

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // ваш основной JavaScript файл
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // директория сборки
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'node_modules/workbox-sw/build/workbox-sw.js',  // путь к файлу Workbox
          to: 'workbox/',  // папка назначения в директории сборки
        },
        {
          from: 'node_modules/workbox-core/build/workbox-core.prod.js',
          to: 'workbox/',
        },
        {
          from: 'node_modules/workbox-routing/build/workbox-routing.prod.js',
          to: 'workbox/',
        },
        {
          from: 'node_modules/workbox-strategies/build/workbox-strategies.prod.js',
          to: 'workbox/',
        },
        // Добавьте другие файлы Workbox, если они вам необходимы
      ],
    }),
  ],
};