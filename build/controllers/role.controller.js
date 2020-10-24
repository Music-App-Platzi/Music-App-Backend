"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoles = getRoles;

var _role = _interopRequireDefault(require("../models/role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getRoles(req, res) {
  try {
    const roles = await _role.default.findAll();
    res.json({
      data: roles
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: "ERROR",
        http_code: 500,
        message: 'Somethin goes wrong' + error
      }
    });
  }
}