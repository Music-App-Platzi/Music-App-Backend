"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  SECRET: 'f66cc1298405d935c00367d33d16fc4e377ac40112978b8efab42f0dc5c5a800',
  PORT: process.env.PORT || 3000
};
exports.default = _default;