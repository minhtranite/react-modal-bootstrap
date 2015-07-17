var WebpackConfig = require('./lib/webpack-config');

module.exports = WebpackConfig({
  hot: true,
  hash: false,
  debug: true,
  optimize: false,
  saveStats: false,
  devTool: 'eval'
});
