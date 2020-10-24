import { Router } from 'express';
const router = Router();

import { getRoles } from '../controllers/role.controller'

// /api/roles
router.get('/', getRoles);

export default router;