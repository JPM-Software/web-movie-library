import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchValue } from '../../../store/movies';

import * as styles from './styles.module.scss';

export default function SearchBar() {
  const dispatch = useDispatch();
  const { searchValue } = useSelector(state => state.movies);
  const handleChange = ({ target }) => {
    dispatch(setSearchValue(target.value));
  };

  return (
    <section className={styles.searchBarSection}>
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Type for search movies..."
      />
    </section>
  );
}
