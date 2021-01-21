import authRouter from './auth';

import { Router } from 'express';

const mainRouter = Router();
const apiRouter = Router();

apiRouter.use('/auth', authRouter);

mainRouter.use('/api', apiRouter);

export default mainRouter;
