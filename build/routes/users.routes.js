"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = require("../controllers/user.controller");

const router = (0, _express.Router)();
// /api/users
router.get('/', _user.getUsers);
router.post('/', _user.createUser); //api/roles/:id

router.get('/:id', _user.getOneUser);
router.put('/:id', _user.updateUser);
router.delete('/:id', _user.deleteUser);
var _default = router;
exports.default = _default;