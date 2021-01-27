import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import axios from 'axios';

import { forceLogout } from './store/user';
import Router from './router';
import store from './store';

import './App.scss';

axios.interceptors.response.use(undefined, error => {
  const response = error.response;
  if (!response.config.url?.includes('auth') && response.status === 401) {
    store.dispatch(forceLogout());
  }
});

export const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
};

export default hot(App);
