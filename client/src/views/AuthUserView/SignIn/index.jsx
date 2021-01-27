import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { signInUser } from '../../../store/user';

import styles from './styles.module.scss';

const initialValues = {
  login: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  login: Yup.string().required('Login is required'),
  password: Yup.string().required('Password is required'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async values => {
    setErrorMessage('');
    const response = await dispatch(signInUser(values.login, values.password));

    if (response.status === 200) {
      setErrorMessage('');
    } else {
      setErrorMessage('User login or password is incorect.');
    }

    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <section className={styles.sectionSignIn}>
      <form className={styles.customerForm} onSubmit={formik.handleSubmit}>
        <h1 className={styles.appName}>Movie library</h1>
        <div className={styles.fieldsWrapper}>
          <fieldset className={styles.fieldset}>
            <label htmlFor="login">Login</label>
            <input
              id="login"
              name="login"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.login}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </fieldset>
        </div>

        <div className={styles.actions}>
          <Link className={styles.registerLink} to="/sign-up">
            Register account
          </Link>
        </div>

        {errorMessage !== '' && (
          <div className={styles.errorWrapper}>
            <span>{errorMessage}</span>
          </div>
        )}

        <button className={styles.loginBtn} type="submit" color="primary">
          <span className={styles.label}>Sign in</span>
        </button>
      </form>
    </section>
  );
}
