"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _upload = require("../controllers/upload.controller");

const router = (0, _express.Router)();

const multer = require('multer');

const upload = multer();
//api/upload
router.post('/profile/:id', upload.single('thumbnail'), _upload.uploadThumbnail);
var _default = router;
exports.default = _default;