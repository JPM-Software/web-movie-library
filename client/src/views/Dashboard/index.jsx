import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchMovies } from '../../store/movies';

import MovieList from './MovieList';
import SearchBar from './SearchBar';

import * as styles from './styles.module.scss';

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getAllMovies() {
      await dispatch(fetchMovies());
    }
    getAllMovies();
  }, [dispatch]);

  return (
    <section className={styles.sectionDashboard}>
      <div className={styles.contentWrapper}>
        <SearchBar />
        <MovieList />
      </div>
    </section>
  );
}
