"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArtists = getArtists;
exports.getArtistById = getArtistById;
exports.createArtist = createArtist;
exports.updateArtist = updateArtist;
exports.deleteArtist = deleteArtist;

var _artist = _interopRequireDefault(require("../models/artist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getArtists(req, res) {
  try {
    const artists = await _artist.default.findAll();
    res.json({
      data: artists
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

async function getArtistById(req, res) {
  try {
    const {
      id
    } = req.params;
    const artist = await _artist.default.findOne({
      where: {
        id
      }
    });
    res.json({
      data: artist
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

async function createArtist(req, res) {
  const {
    name
  } = req.body;

  try {
    let newArtist = await _artist.default.create({
      name
    }, {
      fields: ['name']
    });

    if (newArtist) {
      return res.json({
        message: 'Artist created successfully',
        data: newArtist
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

async function updateArtist(req, res) {
  try {
    const {
      id
    } = req.params;
    const {
      name
    } = req.body;
    const data = await _artist.default.findAll({
      attributes: ['name'],
      where: {
        id
      }
    });

    if (data.length > 0) {
      data.forEach(async Artist => {
        await Artist.update({
          name
        });
      });
    }

    return res.json({
      message: 'Artist updated successfully',
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

async function deleteArtist(req, res) {
  try {
    const {
      id
    } = req.params;
    const deleteRowCount = await _artist.default.destroy({
      where: {
        id
      }
    });
    res.json({
      message: 'Artist deleted',
      count: deleteRowCount
    });
  } catch (err) {
    res, status(500).json({
      error: {
        code: "ERROR",
        http_code: 500,
        message: 'Something goes wrong' + err
      }
    });
  }
}