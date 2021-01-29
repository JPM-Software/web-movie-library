import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { signUpUser } from '../../../store/user';

import styles from './styles.module.scss';

const initialValues = {
  first_name: '',
  last_name: '',
  login: '',
  password: '',
  birth_date: null,
  pesel: null,
  city: '',
  street: '',
  house_number: null,
};

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  login: Yup.string().required('Login is required'),
  password: Yup.string().required('Password is required'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async values => {
    setErrorMessage('');
    const response = await dispatch(signUpUser(values));

    if (response.status === 201) {
      setErrorMessage('');
      history.replace('/sign-in');
    } else {
      setErrorMessage('User can not be created correctly.');
    }

    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <section className={styles.sectionSignUp}>
      <form className={styles.customerForm} onSubmit={formik.handleSubmit}>
        <h1 className={styles.appName}>Register new user</h1>
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

          <fieldset className={styles.fieldset}>
            <label htmlFor="first_name">First name</label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.first_name}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label htmlFor="last_name">Last name</label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.last_name}
            />
          </fieldset>

          <hr />

          <fieldset className={styles.fieldset}>
            <label htmlFor="birth_date">Birth date</label>
            <input
              id="birth_date"
              name="birth_date"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.birth_date}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label htmlFor="pesel">PESEL</label>
            <input
              id="pesel"
              name="pesel"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.pesel}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.city}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label htmlFor="street">Street</label>
            <input
              id="street"
              name="street"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.street}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label htmlFor="house_number">House number</label>
            <input
              id="house_number"
              name="house_number"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.house_number}
            />
          </fieldset>
        </div>

        {errorMessage !== '' && (
          <div className={styles.errorWrapper}>
            <span>{errorMessage}</span>
          </div>
        )}

        <button className={styles.loginBtn} type="submit" color="primary">
          <span className={styles.label}>Sign up</span>
        </button>
      </form>
    </section>
  );
}
