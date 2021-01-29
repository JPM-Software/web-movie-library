import { createSlice } from '@reduxjs/toolkit';

import { getMovies } from '../api/movies';

const moviesInitialState = {
  data: [],
  isLoading: false,
  error: null,
  searchValue: '',
};

function startLoading(state) {
  state.isLoading = true;
  state.error = null;
}

function loadingFailed(state, action) {
  state.data = [];
  state.isLoading = false;
  state.error = action.payload;
}

const movies = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {
    fetchMoviesStart: startLoading,
    fetchMoviesSuccess(state, { payload }) {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchMoviesFailure: loadingFailed,
    setSearchValue(state, { payload }) {
      state.searchValue = payload;
    },
  },
});

export const {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  setSearchValue,
} = movies.actions;

export default movies.reducer;

export const fetchMovies = () => async dispatch => {
  try {
    dispatch(fetchMoviesStart());
    const response = await getMovies();
    dispatch(fetchMoviesSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(fetchMoviesFailure(err.toString()));
  }
};
