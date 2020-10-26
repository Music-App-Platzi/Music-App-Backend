import { Router } from 'express';
const router = Router();

import * as playlist_songsCtrl from '../controllers/playlist_song.controller'

router.post('/', playlist_songsCtrl.createPlaylist);
router.put('/:id', playlist_songsCtrl.updatePlaylist);


export default router;