"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _postgres = require("../database/postgres");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Song = _postgres.sequelize.define('songs', {
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true
  },
  album_id: {
    type: _sequelize.default.INTEGER
  },
  name: {
    type: _sequelize.default.TEXT
  },
  duration: {
    type: _sequelize.default.TIME
  },
  song_link: {
    type: _sequelize.default.TEXT
  },
  thumbnail: {
    type: _sequelize.default.TEXT
  },
  playbacks: {
    type: _sequelize.default.INTEGER
  },
  genre: {
    type: _sequelize.default.TEXT
  }
}, {
  timestamps: false
});

var _default = Song;
exports.default = _default;