/**
 * Entry Script
 * 入口文件
 */

if (process.env.NODE_ENV === 'production') {
  process.env.webpackAssets = JSON.stringify(require('./dist/manifest.json'));
  process.env.webpackChunkAssets = JSON.stringify(require('./dist/chunk-manifest.json'));
  // In production, serve the webpacked server file.
  // 在生产环境，使用webpack打包出来的server.bundle.js文件
  require('./dist/server.bundle.js');
} else {
  // Babel polyfill to convert ES6 code in runtime
  // Babel 在运行时处理 ES6语法
  require('babel-register')({
    "plugins": [
      [
        "babel-plugin-webpack-loaders",
        {
          "config": "./webpack.config.babel.js",
          "verbose": false
        }
      ]
    ]
  });
  require('babel-polyfill');
  // 非生产环境加载server.js处理
  require('./server/server');
}
