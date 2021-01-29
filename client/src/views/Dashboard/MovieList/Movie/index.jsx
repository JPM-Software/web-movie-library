import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { ReactComponent as Heart } from '../../../../assets/icons/heart.svg';
import { ReactComponent as HeartFull } from '../../../../assets/icons/heart_full.svg';
import { toggleFavouriteMovie } from '../../../../store/favourites';
import { fetchMovies } from '../../../../store/movies';

import * as styles from './styles.module.scss';

export default function Movie({ movie }) {
  const dispatch = useDispatch();

  const toggleFavourite = async movieId => {
    await dispatch(toggleFavouriteMovie(movieId));
    await dispatch(fetchMovies());
  };

  return (
    <section className={styles.movieSection}>
      <div className={styles.imgWrapper}>
        <a href={movie.thumbnail} rel="noreferrer" target="_blank">
          <img src={movie.thumbnail} alt={movie.title} />
        </a>
      </div>
      <div className={styles.movieContent}>
        <p className={styles.movieTitle}>{movie.title}</p>
        <div className={styles.contentWrapper}>
          <ul>
            <li>
              <span className={styles.left}>Director:</span>
              <span className={styles.right}>{movie.director}</span>
            </li>
            <li>
              <span className={styles.left}>Country:</span>
              <span className={styles.right}>{movie.country}</span>
            </li>
            <li>
              <span className={styles.left}>Year of production:</span>
              <span className={styles.right}>{movie.year_of_production}</span>
            </li>
          </ul>
        </div>
        <div className={styles.btnWrapper}>
          <button
            className={classNames(styles.favouriteBtn, movie.isFavourite && styles.active)}
            onClick={() => toggleFavourite(movie.id)}>
            {movie.isFavourite ? <HeartFull /> : <Heart />}
          </button>
        </div>
      </div>
    </section>
  );
}
