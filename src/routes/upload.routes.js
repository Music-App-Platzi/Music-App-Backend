import { Router } from 'express';
const router = Router();
const multer = require('multer');
const upload = multer();

import { uploadThumbnail } from '../controllers/upload.controller'

//api/upload
router.post('/profile/:id', upload.single('thumbnail'), uploadThumbnail);

export default router;