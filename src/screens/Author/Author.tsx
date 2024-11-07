'use client';

import { FC } from 'react';
import styles from './Author.module.scss';
import Card from '@components/Card/Card';

import card_img from '@assets/post.png';
import author_img from '@assets/author.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const listVariants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: '20%',
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
  },
};

const AuthorScreen: FC = () => {
  return (
    <div className="main__container">
      <motion.section
        initial={{ y: '20%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={styles.authorInfo}
      >
        <div className={styles.container}>
          <div className={styles.author}>
            <Image src={author_img} alt="author image" width={64} height={64} />
            <div>
              <h5>Jonathan Doe</h5>
              <p>Collaborator & Editor</p>
            </div>
          </div>
          <p className={styles.authorDescription}>
            Meet Jonathan Doe, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
          </p>
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className={styles.socialMedia}
          >
            <motion.li variants={itemVariants}>
              <Link className={styles.socialMediaItem} href={'/'}>
                <FaFacebook />
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link className={styles.socialMediaItem} href={'/'}>
                <FaTwitter />
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link className={styles.socialMediaItem} href={'/'}>
                <FaInstagram />
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link className={styles.socialMediaItem} href={'/'}>
                <FaYoutube />
              </Link>
            </motion.li>
          </motion.ul>
        </div>
      </motion.section>
      <section className={styles.listOfPosts}>
        <h5 className={styles.title}>Latest Posts</h5>
        <ul className={styles.list}>
          {[1, 2, 3, 4].map((_, index) => (
            <Card
              image={card_img.src}
              tag="technology"
              title="The Impact of Technology on the Workplace: How Technology is Changing"
              authorAvatar={author_img.src}
              authorName="Tracey Wilson"
              date="August 20, 2022"
              key={index}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AuthorScreen;
