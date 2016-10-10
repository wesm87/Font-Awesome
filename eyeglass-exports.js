var path = require('path');

var assetsPath = path.join(__dirname, 'fonts');
var sassPath = path.join(__dirname, 'scss');

module.exports = function(eyeglass, sass) {
  return {
    sassDir: sassPath,
    assets: eyeglass.assets.export(assetsPath),
  };
};
