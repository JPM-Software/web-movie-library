import { query } from '../db';
import { decodeJWTToken } from '../helpers/jwt';

async function getMovies(request, response) {
  try {
    const movies = await query(`SELECT * FROM library.movie`).then(res => res.rows);
    const user = decodeJWTToken(request);

    const moviesWithFavourite = await Promise.all(
      movies.map(async movie => {
        const isFavourite = await query(`SELECT * FROM library.favourite_movie WHERE user_id = $1 AND movie_id = $2`, [
          user.id,
          movie.id,
        ]).then(res => Boolean(res.rows[0]));
        return {
          ...movie,
          isFavourite: isFavourite,
        };
      })
    );

    response.json(moviesWithFavourite);
    response.status(200);
    return response.send();
  } catch (error) {
    return response.status(400).send('Something went wrong.');
  }
}

async function setFavouriteMovie(request, response) {
  const user = decodeJWTToken(request);
  const movieId = request.params.movieId;

  try {
    const alreadyFavourite = await query(`SELECT * FROM library.favourite_movie WHERE user_id = $1 AND movie_id = $2`, [
      user.id,
      movieId,
    ]).then(res => !!res.rows?.length);

    if (alreadyFavourite) {
      await query(`DELETE FROM library.favourite_movie WHERE user_id = $1 AND movie_id = $2`, [user.id, movieId]);
      response.json({ status: 'DELETED' });
      response.status(200);
      return response.send();
    } else {
      await query(`INSERT INTO library.favourite_movie(user_id, movie_id) VALUES ($1, $2)`, [user.id, movieId]);
      response.json({ status: 'INSERTED' });
      response.status(200);
      return response.send();
    }
  } catch (error) {
    return response.status(400).send('Something went wrong.');
  }
}

export { getMovies, setFavouriteMovie };
