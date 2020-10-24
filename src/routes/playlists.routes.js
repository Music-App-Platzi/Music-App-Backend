import { Router } from 'express';
const router = Router();

import * as playlistsCtrl from '../controllers/playlist.controller'

router.get('/', playlistsCtrl.getPlaylists);
router.get('/:id', playlistsCtrl.getPlaylistById);
router.post('/', playlistsCtrl.createPlaylist);
router.put('/:id', playlistsCtrl.updatePlaylist);
router.delete('/:id', playlistsCtrl.deletePlaylist);

export default router;