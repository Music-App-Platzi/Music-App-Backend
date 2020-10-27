"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPlaylistSongs = createPlaylistSongs;
exports.getPlaylistSongs = getPlaylistSongs;
exports.deletePlaylistSongs = deletePlaylistSongs;

var _playlist_song = _interopRequireDefault(require("../models/playlist_song"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function createPlaylistSongs(req, res) {
  const {
    playlist_id,
    song_id
  } = req.body;

  try {
    let newPlaylist_song = await _playlist_song.default.create({
      playlist_id,
      song_id
    }, {
      fields: ['playlist_id, song_id']
    });

    if (newPlaylist_song) {
      return res.json({
        message: 'Track in playlist created successfully',
        data: newPlaylist_song
      });
    }
  } catch (err) {
    res.status(500).json({
      error: {
        code: "ERROR",
        http_code: 500,
        message: 'Somenthing goes wrong' + err
      }
    });
  }
}

async function getPlaylistSongs(req, res) {
  try {
    const playlistSongs = await _playlist_song.default.findAll();
    res.json({
      data: playlistSongs
    });
  } catch (err) {
    res.status(500).json({
      error: {
        code: "ERROR",
        http_code: 500,
        message: 'Something goes wrong' + err
      }
    });
  }
}

async function deletePlaylistSongs(req, res) {
  try {
    const {
      id
    } = req.params;
    const deleteRowCount = await _playlist_song.default.destroy({
      where: {
        id
      }
    });
    res.json({
      message: 'Track in playlist deleted',
      count: deleteRowCount
    });
  } catch (err) {
    res.status(500).json({
      error: {
        code: "ERROR",
        http_code: 500,
        message: 'Something goes wrong' + err
      }
    });
  }
}