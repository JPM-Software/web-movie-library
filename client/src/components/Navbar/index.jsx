import React from 'react';
import { useDispatch } from 'react-redux';

import { forceLogout } from '../../store/user';

import styles from './styles.module.scss';

export default function Navbar() {
  const dispatch = useDispatch();
  const logout = () => dispatch(forceLogout());
  return (
    <nav className={styles.navbar}>
      <div className={styles.contentContainer}>
        <div className={styles.navbarContent}>
          <div className={styles.logoImg}>Movie library</div>
          <div className={styles.navlinks}>
            <button className={styles.logoutBtn} onClick={logout}>
              Log out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
