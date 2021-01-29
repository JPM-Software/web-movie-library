import React from 'react';
import { useSelector } from 'react-redux';

import Movie from './Movie';

import * as styles from './styles.module.scss';

export default function MovieList() {
  const { data, searchValue } = useSelector(state => state.movies);

  const filterMovies = movie => {
    const preparedMovie = movie.title.toLowerCase().replace(' ', '');
    const preparedDirector = movie.director.toLowerCase().replace(' ', '');
    const preparedCountry = movie.country.toLowerCase().replace(' ', '');
    const preparedYear = movie.year_of_production.toLowerCase().replace(' ', '');
    const preparedSearchValue = searchValue.toLowerCase().replace(' ', '');
    return (
      preparedMovie.indexOf(preparedSearchValue) > -1 ||
      preparedDirector.indexOf(preparedSearchValue) > -1 ||
      preparedCountry.indexOf(preparedSearchValue) > -1 ||
      preparedYear.indexOf(preparedSearchValue) > -1
    );
  };

  const renderMovies = () => {
    return data.filter(filterMovies).map((movie, idx) => {
      return <Movie key={idx} movie={movie} />;
    });
  };

  return (
    <section className={styles.sectionMoviesList}>
      <div className={styles.moviesWrapper}>{renderMovies()}</div>
    </section>
  );
}
