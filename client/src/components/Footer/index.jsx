import React from 'react';

import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="contentContainer">
        <div className={styles.footerContent}>2021 &copy; Created by POLSL students</div>
      </div>
    </footer>
  );
}
