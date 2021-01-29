import { createSlice } from '@reduxjs/toolkit';

import { loginUser, registerUser } from '../api/auth';

const userInitialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  loggedUser: {
    email: '',
    name: '',
    systemEntryDate: '',
  },
};

function startLoading(state) {
  state.isLoading = true;
  state.error = null;
}

function loadingFailed(state, action) {
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = action.payload;
}

const user = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    loginStart: startLoading,
    loginSuccess(state) {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: loadingFailed,
    registerStart: startLoading,
    registerSuccess(state) {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
    registerFailure: loadingFailed,
    forceLogout(state) {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = user.actions;
export const { registerStart, registerSuccess, registerFailure, forceLogout } = user.actions;

export default user.reducer;

export const signInUser = (login, password) => async dispatch => {
  try {
    dispatch(loginStart());
    const response = await loginUser(login, password);
    if (response.status === 200) {
      dispatch(loginSuccess());
      localStorage.setItem('accessToken', response.data.accessToken);
      return response;
    } else {
      return response;
    }
  } catch (err) {
    dispatch(loginFailure(err.toString()));
  }
};

export const signUpUser = userData => async dispatch => {
  try {
    dispatch(registerStart());
    const response = await registerUser(userData);
    if (response.status === 200) {
      dispatch(registerSuccess());
      return response;
    } else {
      return response;
    }
  } catch (err) {
    dispatch(registerFailure(err.toString()));
  }
};
