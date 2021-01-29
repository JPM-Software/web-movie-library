import { createSlice } from '@reduxjs/toolkit';

import { postFavouriteMovie } from '../api/movies';

const favouritesInitialState = {
  data: [],
  isLoading: false,
  error: null,
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

const favourites = createSlice({
  name: 'favourites',
  initialState: favouritesInitialState,
  reducers: {
    toggleFavouritesStart: startLoading,
    toggleFavouritesSuccess(state, { payload }) {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    },
    toggleFavouritesFailure: loadingFailed,
  },
});

export const {
  toggleFavouritesStart,
  toggleFavouritesSuccess,
  toggleFavouritesFailure,
} = favourites.actions;

export default favourites.reducer;

export const toggleFavouriteMovie = movieId => async dispatch => {
  try {
    dispatch(toggleFavouritesStart());
    const response = await postFavouriteMovie(movieId);
    dispatch(toggleFavouritesSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(toggleFavouritesFailure(err.toString()));
  }
};
