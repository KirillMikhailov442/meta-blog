'use client';

import Link from 'next/link';
import styles from './TitlePage.module.scss';
import { motion } from 'framer-motion';

const TitlePage = () => {
  return (
    <motion.section
      initial={{ y: '20%', opacity: 0, scale: 0.6 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      className={styles.wrapper}
    >
      <h3 className={styles.title}>Page Title</h3>
      <p className={styles.subtitle}>
        <span className={styles.home}>
          <Link href={'/'}>Home</Link>
        </span>
        <span>Link One</span>
      </p>
    </motion.section>
  );
};

export default TitlePage;
