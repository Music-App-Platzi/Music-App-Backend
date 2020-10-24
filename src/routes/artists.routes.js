import { Router } from 'express';
const router = Router();

import * as artistsCtrl from '../controllers/artist.controller'

router.get('/', artistsCtrl.getArtists);
router.get('/:id', artistsCtrl.getArtistById);
router.post('/', artistsCtrl.createArtist);
router.put('/:id', artistsCtrl.updateArtist);
router.delete('/:id', artistsCtrl.deleteArtist);

export default router;