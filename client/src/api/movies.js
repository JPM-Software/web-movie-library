import HttpClient from './httpClient';

export const getMovies = () => {
  return HttpClient.get(`/movies`);
};

export const postFavouriteMovie = async movieId => {
  return HttpClient.post(`/movies/${movieId}`);
};
