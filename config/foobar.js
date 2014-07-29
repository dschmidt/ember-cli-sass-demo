/* jshint node: true */

var developmentConfig = require('./development.js');

module.exports = function(config) {
  developmentConfig(config);

  config.set('fingerprint', true);
};
