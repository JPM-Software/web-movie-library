import { query } from '../db';

async function getMovies(request, response) {
  try {
    const movies = await query(`SELECT * FROM library.movie`).then(res => res.rows);

    response.json(movies);
    response.status(200);
    return response.send();
  } catch (error) {
    return response.status(500).send('Internal server error.');
  }
}

export { getMovies };
