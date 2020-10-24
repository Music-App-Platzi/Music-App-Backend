import { Router } from 'express';
const router = Router();

import {createAlbum, getAlbums, deleteAlbum, updateAlbum} from '../controllers/album.controller'
// /api/users
router.get('/', getAlbums);
router.post('/', createAlbum);
//api/roles/:id
router.put('/:id', updateAlbum);
router.delete('/:id', deleteAlbum);

export default router;