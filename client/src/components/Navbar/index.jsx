import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.contentContainer}>
        <div className={styles.navbarContent}>
          <div className={styles.logoImg}>Movie library</div>
          <div className={styles.navlinks}>
            {/* <NavLink className={styles.link} to="/base-rates" activeClassName={styles.active}>
              Base rates
            </NavLink>
            <NavLink className={styles.link} to="/customers" activeClassName={styles.active}>
              Customers
            </NavLink> */}
            <button className={styles.logoutBtn}>Log out</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
