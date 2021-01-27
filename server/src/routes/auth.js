import { loginUser, registerUser } from '../controllers/authController';

import { Router } from 'express';

const authRouter = Router();

authRouter.post('/login', loginUser);

authRouter.post('/register', registerUser);

export default authRouter;
