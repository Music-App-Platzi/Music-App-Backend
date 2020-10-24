"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _postgres = require("../database/postgres");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Artist = _postgres.sequelize.define('artists', {
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize.default.TEXT
  }
}, {
  timestamps: false
});

var _default = Artist;
exports.default = _default;