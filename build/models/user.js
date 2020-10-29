"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _postgres = require("../database/postgres");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const User = _postgres.sequelize.define('users', {
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true
  },
  rol_id: {
    type: _sequelize.default.INTEGER
  },
  username: {
    type: _sequelize.default.TEXT
  },
  name: {
    type: _sequelize.default.TEXT
  },
  mail: {
    type: _sequelize.default.TEXT
  },
  password: {
    type: _sequelize.default.TEXT
  },
  thumbnail: {
    type: _sequelize.default.TEXT
  }
}, {
  timestamps: false
});

var _default = User;
exports.default = _default;