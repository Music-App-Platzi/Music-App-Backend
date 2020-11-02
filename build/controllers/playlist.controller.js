"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlaylists = getPlaylists;
exports.getPlaylistById = getPlaylistById;
exports.createPlaylist = createPlaylist;
exports.updatePlaylist = updatePlaylist;
exports.deletePlaylist = deletePlaylist;

var _playlist = _interopRequireDefault(require("../models/playlist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getPlaylists(req, res) {
  try {
    const playlists = await _playlist.default.findAll();
    res.json({
      data: playlists
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

async function getPlaylistById(req, res) {
  try {
    const {
      id
    } = req.params;
    const playlist = await _playlist.default.findOne({
      where: {
        id
      }
    });
    res.json({
      data: playlist
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

async function createPlaylist(req, res) {
  const {
    user_id,
    name,
    thumbnail
  } = req.body;

  try {
    let newPlaylist = await _playlist.default.create({
      user_id,
      name,
      thumbnail
    }, {
      fields: ['user_id', 'name', 'thumbnail']
    });

    if (newPlaylist) {
      return res.json({
        message: 'Playlist created successfully',
        data: newPlaylist
      });
    }
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

async function updatePlaylist(req, res) {
  try {
    const {
      id
    } = req.params;
    const {
      user_id,
      name,
      thumbnail
    } = req.body;
    const data = await _playlist.default.findAll({
      attributes: ['id', 'user_id', 'name', 'thumbnail'],
      where: {
        id
      }
    });

    if (data.length > 0) {
      data.forEach(async Playlist => {
        await Playlist.update({
          user_id,
          name,
          thumbnail
        });
      });
    }

    return res.json({
      message: 'Playlist updated successfully',
      data: data
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

async function deletePlaylist(req, res) {
  try {
    const {
      id
    } = req.params;
    const deleteRowCount = await _playlist.default.destroy({
      where: {
        id
      }
    });
    res.json({
      message: 'Playlist deleted',
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