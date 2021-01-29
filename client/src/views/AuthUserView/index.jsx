import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import PublicRoute from '../../components/PublicRoute';

import SignIn from './SignIn';
import SignUp from './SignUp';

import * as styles from './styles.module.scss';

export default function AuthUserView() {
  return (
    <section className={styles.sectionAuthView}>
      <div className={styles.contentWrapper}>
        <Switch>
          <PublicRoute path="/sign-in" component={SignIn} />
          <PublicRoute path="/sign-up" component={SignUp} />
          <Redirect from="/" to="/sign-in" />
        </Switch>
      </div>
    </section>
  );
}
