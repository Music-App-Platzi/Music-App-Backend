"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _album = require("../controllers/album.controller");

const router = (0, _express.Router)();
// /api/users
router.get('/', _album.getAlbums);
router.post('/', _album.createAlbum); //api/roles/:id

router.put('/:id', _album.updateAlbum);
router.delete('/:id', _album.deleteAlbum);
var _default = router;
exports.default = _default;