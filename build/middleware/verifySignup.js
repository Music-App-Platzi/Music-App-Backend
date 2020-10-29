"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkDuplicateUsernameOrEmail = void 0;

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const username = await _user.default.findOne({
      username: req.body.username
    });
    if (username) return res.status(400).json({
      message: "The user already exists"
    });
    const mail = await _user.default.findOne({
      mail: req.body.mail
    });
    if (mail) return res.status(400).json({
      message: "The mail already exists"
    });
    next();
  } catch (error) {
    res.status(500).json({
      message: error
    });
  }
};

exports.checkDuplicateUsernameOrEmail = checkDuplicateUsernameOrEmail;