"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _role = require("../controllers/role.controller");

const router = (0, _express.Router)();
// /api/roles
router.get('/', _role.getRoles);
var _default = router;
exports.default = _default;