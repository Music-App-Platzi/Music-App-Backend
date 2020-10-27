import { Router } from 'express';
const router = Router();
const multer = require('multer');
const upload = multer();

import { uploadThumbnail, uploadThumbnailPlaylist } from '../controllers/upload.controller'

//api/upload
router.post('/profile/:id', upload.single('thumbnail'), uploadThumbnail);
router.post('/playlists/:id', upload.single('thumbnail'), uploadThumbnailPlaylist);

export default router;