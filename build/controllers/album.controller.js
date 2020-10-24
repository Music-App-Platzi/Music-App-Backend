"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbums = getAlbums;
exports.createAlbum = createAlbum;
exports.updateAlbum = updateAlbum;
exports.deleteAlbum = deleteAlbum;

var _album = _interopRequireDefault(require("../models/album"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getAlbums(req, res) {
  try {
    const users = await _album.default.findAll();
    res.json({
      data: users
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: "ERROR",
        http_code: 500,
        message: 'Somethin goes wrong' + error
      }
    });
  }
}

async function createAlbum(req, res) {
  const {
    artist_id,
    name,
    release_date
  } = req.body;

  try {
    let newAlbum = await _album.default.create({
      artist_id,
      name,
      release_date
    }, {
      fields: ['artist_id', 'name', 'release_date']
    });

    if (newAlbum) {
      return res.json({
        message: 'Album created successfully',
        data: newAlbum
      });
    }
  } catch (error) {
    res.status(500).json({
      error: {
        code: "ERROR",
        http_code: 500,
        message: 'Somethin goes wrong' + error
      }
    });
  }
}

async function updateAlbum(req, res) {
  try {
    const {
      id
    } = req.params;
    const {
      artist_id,
      name,
      release_date
    } = req.body;
    const data = await _album.default.findAll({
      attributes: ['id', 'artist_id', 'name', 'release_date'],
      where: {
        id
      }
    });

    if (data.length > 0) {
      data.forEach(async Album => {
        await Album.update({
          artist_id,
          name,
          release_date
        });
      });
    }

    return res.json({
      message: 'Album Updated Succefully',
      data: data
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: "ERROR",
        http_code: 500,
        message: 'Somethin goes wrong' + error
      }
    });
  }
}

async function deleteAlbum(req, res) {
  try {
    const {
      id
    } = req.params;
    const deleteRowCount = await _album.default.destroy({
      where: {
        id
      }
    });
    res.json({
      message: 'Album deleted',
      count: deleteRowCount
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: "ERROR",
        http_code: 500,
        message: 'Somethin goes wrong' + error
      }
    });
  }
}