import { Router } from 'express';
const router = Router();

import {counterSong_heard} from '../controllers/songs_heard.contoller'
// /api/users
router.post('/', counterSong_heard);

export default router;