import { Router } from 'express';
const router = Router();

import * as playlist_songsCtrl from '../controllers/playlist_song.controller'

router.post('/', playlist_songsCtrl.createPlaylistSongs);
router.get('/', playlist_songsCtrl.getPlaylistSongs);
router.delete('/:id', playlist_songsCtrl.deletePlaylistSongs);


export default router;