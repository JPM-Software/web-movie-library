import authRouter from './auth';
import moviesRouter from './movies';

import { Router } from 'express';

const mainRouter = Router();
const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/', moviesRouter);

mainRouter.use('/api', apiRouter);

export default mainRouter;
