"use strict";

var _app = _interopRequireDefault(require("./app"));

require("@babel/polyfill");

var _config = _interopRequireDefault(require("./config"));

require("regenerator-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function main() {
  await _app.default.listen(_config.default.PORT, '0.0.0.0');
  console.log('Server on port 3000');
}

;
main();