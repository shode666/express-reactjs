const webpackConfigServer = require('./webpack.config.server');
const webpackConfigClient = require('./webpack.config.client');
module.exports = [
  webpackConfigServer,
  webpackConfigClient
];