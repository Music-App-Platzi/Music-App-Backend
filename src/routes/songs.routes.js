import { Router } from 'express';
const router = Router();
const multer = require('multer');
const upload = multer();

import {createSong, getSongs , deleteSong, updateSong, getSongsById} from '../controllers/song.controller'

var cpUpload = upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'song', maxCount: 1 }])

// /api/songs
router.get('/', getSongs);
router.post('/', cpUpload, createSong);
//api/songs/:id
router.get('/:id', getSongsById);
router.post('/:id', cpUpload, updateSong);
router.delete('/:id', deleteSong);

export default router;