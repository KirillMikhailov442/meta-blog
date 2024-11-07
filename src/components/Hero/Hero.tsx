'use client';

import { FC, HTMLAttributes } from 'react';
import styles from './Hero.module.scss';

import hero_img from '@assets/hero.jpg';
import author_img from '@assets/author.png';
import Image from 'next/image';
import Tag from '@components/UI/Tag/Tag';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface HeroProps extends HTMLAttributes<HTMLDivElement> {
  var?: 'default' | 'comment';
}

const HeroDefault: FC<HeroProps> = props => {
  return (
    <motion.div
      initial={{ y: '20%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <section
        className={clsx(styles.section, styles.backImg)}
        style={{ backgroundImage: `url(${hero_img.src})` }}
        {...props}
      >
        <div className={styles.content}>
          <Tag text="technology" />
          <h2 className={styles.text}>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
          <div className={styles.shortInfo}>
            <Image
              className={styles.avatar}
              width={36}
              height={36}
              src={author_img}
              alt="author image"
            />
            <p className={styles.authorName}>Jason Francisco</p>
            <time className={styles.date}>August 20, 2022</time>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const HeroComment: FC<HeroProps> = props => {
  return (
    <motion.div
      initial={{ y: '20%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <section className={styles.section} {...props}>
        <Image layout="responsive" src={hero_img} alt="hero image" />
        <motion.div
          initial={{ y: '20%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={styles.comment}
        >
          <Tag text="technology" />
          <h2 className={styles.text}>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
          <div className={styles.shortInfo}>
            <Image
              className={styles.avatar}
              width={36}
              height={36}
              src={author_img}
              alt="author image"
            />
            <p className={styles.authorName}>Jason Francisco</p>
            <time className={styles.date}>August 20, 2022</time>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

const Hero: FC<HeroProps> = props => {
  switch (props.var) {
    case 'default':
      return <HeroDefault {...props} />;
    case 'comment':
      return <HeroComment {...props} />;

    default:
      return <HeroDefault {...props} />;
  }
};

export default Hero;
