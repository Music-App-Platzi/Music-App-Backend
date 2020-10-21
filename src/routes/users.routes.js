import { Router } from 'express';
const router = Router();

import {createUser, getUsers , deleteUser, updateUser, getOneUser} from '../controllers/user.controller'
// /api/users
router.get('/', getUsers);
router.post('/', createUser);
//api/roles/:id
router.get('/:id', getOneUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;