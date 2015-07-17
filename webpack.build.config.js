var WebpackConfig = require('./lib/webpack-config');

module.exports = WebpackConfig({
  hot: false,
  hash: true,
  debug: false,
  optimize: true,
  saveStats: true
});
