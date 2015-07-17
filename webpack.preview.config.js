var WebpackConfig = require('./lib/webpack-config');

module.exports = WebpackConfig({
  hot: false,
  hash: false,
  debug: false,
  optimize: true,
  saveStats: false
});
