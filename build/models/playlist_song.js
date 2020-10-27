"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _postgres = require("../database/postgres");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Playlist_song = _postgres.sequelize.define('playlist_songs', {
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true
  },
  playlist_id: {
    type: _sequelize.default.INTEGER
  },
  song_id: {
    type: _sequelize.default.INTEGER
  }
}, {
  timestamps: false,
  tableName: 'playlist_songs'
});

var _default = Playlist_song;
exports.default = _default;