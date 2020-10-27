"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _postgres = require("../database/postgres");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const User = _postgres.sequelize.define('songs_heard', {
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true
  },
  song_id: {
    type: _sequelize.default.INTEGER
  },
  user_id: {
    type: _sequelize.default.INTEGER
  },
  like: {
    type: _sequelize.default.BOOLEAN
  },
  playbacks: {
    type: _sequelize.default.INTEGER
  },
  heard_at: {
    type: _sequelize.default.DATE
  }
}, {
  timestamps: false,
  tableName: 'songs_heard'
});

var _default = User;
exports.default = _default;