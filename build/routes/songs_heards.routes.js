"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _songs_heard = require("../controllers/songs_heard.contoller");

const router = (0, _express.Router)();
// /api/songs-heards
router.post('/', _songs_heard.counterSong_heard);
router.post('/like', _songs_heard.like);
var _default = router;
exports.default = _default;