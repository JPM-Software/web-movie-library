import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import styles from './styles.module.scss';

export default function Layout({ children }) {
  return (
    <section className={styles.sectionLayout}>
      <Navbar />
      <main>
        <div className={styles.contentContainer}>{children}</div>
      </main>
      <Footer />
    </section>
  );
}
