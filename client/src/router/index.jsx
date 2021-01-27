import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';
import Layout from '../layout';
import AuthUserView from '../views/AuthUserView';
import Dashboard from '../views/Dashboard';

export default function Router() {
  const { isLoggedIn } = useSelector(state => state.user);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Layout>
          <Switch>
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Redirect to="/dashboard" />
          </Switch>
        </Layout>
      ) : (
        <Switch>
          <PublicRoute path="/" component={AuthUserView} />
        </Switch>
      )}
    </BrowserRouter>
  );
}
