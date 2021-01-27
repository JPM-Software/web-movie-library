import { getMovies } from '../controllers/moviesController';
import { authenticateJWT } from '../helpers/jwt';

import { Router } from 'express';

const moviesRouter = Router();

moviesRouter.get('/movies', authenticateJWT, getMovies);

export default moviesRouter;
