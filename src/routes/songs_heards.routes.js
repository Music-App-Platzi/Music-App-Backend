import { Router } from 'express';
const router = Router();

import {counterSong_heard, like, getSongsLikeByUser} from '../controllers/songs_heard.contoller'
// /api/songs-heards
router.post('/', counterSong_heard);
router.post('/like', like);
// /api/songs-heards/user-like/:userid
router.get('/user-like/:user_id', getSongsLikeByUser);
export default router;