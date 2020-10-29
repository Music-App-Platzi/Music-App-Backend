import { Router } from 'express';
const router = Router();

import * as authCtrl from '../controllers/auth.controller'
import {verifySignup} from '../middleware'

router.post('/signup', verifySignup.checkDuplicateUsernameOrEmail, authCtrl.signUp)

router.post('/login', authCtrl.logIn)

export default router;