const webpackConfigServer = require('webpack.config.server');
const webpackConfigClient = require('webpack.config.client');
console.log(webpackConfigClient)
module.exports = [webpackConfigServer,webpackConfigClient];