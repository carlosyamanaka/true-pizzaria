import express, { Router } from 'express';
import { CreateUserControler } from './controllers/user/CreateUserControler';
import { AuthUserController } from './controllers/user/AuthUserController';
const router = Router();

router.post('/users', new CreateUserControler().handle)
router.post('/session', new AuthUserController().handle)

export { router };