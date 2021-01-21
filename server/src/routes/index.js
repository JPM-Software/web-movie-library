import { Router } from 'express';

const MainRouter = Router();

MainRouter.use(() => {
  console.log('Simply router');
});

export default MainRouter;
