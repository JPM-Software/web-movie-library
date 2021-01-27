import { getMovies, setFavouriteMovie } from '../controllers/moviesController';
import { authenticateJWT } from '../helpers/jwt';

import { Router } from 'express';

const moviesRouter = Router();

moviesRouter.get('/movies', authenticateJWT, getMovies);
moviesRouter.post('/movies/:movieId*', authenticateJWT, setFavouriteMovie);

export default moviesRouter;
