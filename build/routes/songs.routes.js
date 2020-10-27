"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _song = require("../controllers/song.controller");

const router = (0, _express.Router)();

const multer = require('multer');

const upload = multer();
var cpUpload = upload.fields([{
  name: 'thumbnail',
  maxCount: 1
}, {
  name: 'song',
  maxCount: 1
}]); // /api/songs

router.get('/', _song.getSongs);
router.post('/', cpUpload, _song.createSong); //api/songs/:id

router.get('/:id', _song.getSongsById);
router.post('/:id', cpUpload, _song.updateSong);
router.delete('/:id', _song.deleteSong);
var _default = router;
exports.default = _default;