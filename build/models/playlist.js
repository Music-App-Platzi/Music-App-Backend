"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _postgres = require("../database/postgres");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Playlist = _postgres.sequelize.define('playlist', {
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true
  },
  user_id: {
    type: _sequelize.default.INTEGER
  },
  name: {
    type: _sequelize.default.TEXT
  },
  thumbnail: {
    type: _sequelize.default.TEXT
  }
}, {
  timestamps: false,
  tableName: 'playlist'
});

var _default = Playlist;
exports.default = _default;