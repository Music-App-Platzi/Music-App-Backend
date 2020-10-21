"use strict";

var _app = _interopRequireDefault(require("./app"));

require("regenerator-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function main() {
  await _app.default.listen(3000);
  console.log('Server on port 3000');
}

;
main();