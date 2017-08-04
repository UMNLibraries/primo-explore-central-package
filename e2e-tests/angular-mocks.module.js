module.exports = {
  mock: getScript()
};
 
function getScript() {
  var path = require('path'),
      fs = require('fs'),
      angularMocksDir = path.dirname(require.resolve('angular-mocks')),
      angularMocksFilePath = path.join(angularMocksDir, 'angular-mocks.js'),
      script = fs.readFileSync(angularMocksFilePath).toString();
  return script;
}