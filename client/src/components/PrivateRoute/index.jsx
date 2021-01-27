import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const { isLoggedIn } = useSelector(state => state.user);
  return isLoggedIn ? <Route {...rest}>{children}</Route> : <Redirect from="" to="/sign-in" />;
};

export default PrivateRoute;
