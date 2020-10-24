"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _postgres = require("../database/postgres");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Album = _postgres.sequelize.define('albums', {
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true
  },
  artist_id: {
    type: _sequelize.default.INTEGER
  },
  name: {
    type: _sequelize.default.TEXT
  },
  release_date: {
    type: _sequelize.default.DATE
  }
}, {
  timestamps: false
});

var _default = Album;
exports.default = _default;