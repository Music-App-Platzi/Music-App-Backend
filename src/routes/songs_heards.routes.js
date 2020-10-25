import { Router } from 'express';
const router = Router();

import {counterSong_heard, like} from '../controllers/songs_heard.contoller'
// /api/songs-heards
router.post('/', counterSong_heard);
router.post('/like', like);

export default router;