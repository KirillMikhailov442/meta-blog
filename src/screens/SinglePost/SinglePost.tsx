'use client';

import { FC, useRef } from 'react';
import styles from './SinglePost.module.scss';
import Tag from '@components/UI/Tag/Tag';
import hero_img from '@assets/hero.jpg';
import author_img from '@assets/author.png';
import Image from 'next/image';
import Adb from '@components/Adb/Adb';

import { motion, useScroll, useSpring } from 'framer-motion';

const SinglePostScreen: FC = () => {
  const postRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: postRef,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <div ref={postRef} className={styles.container}>
        <header className={styles.header}>
          <Tag text="technology" />
          <h2 className={styles.headerText}>
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
        </header>
        <Image
          className={styles.image}
          src={hero_img}
          alt="post image"
          layout="responsive"
        />
        <p className={styles.text}>
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels. One of the most rewarding aspects of
          traveling is immersing yourself in the local culture and customs. This
          includes trying local cuisine, attending cultural events and
          festivals, and interacting with locals. Learning a few phrases in the
          local language can also go a long way in making connections and
          showing respect.
        </p>
        <h4 className={styles.title}>Research Your Destination</h4>
        <p className={styles.text}>
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels. One of the most rewarding aspects of
          traveling is immersing yourself in the local culture and customs. This
          includes trying local cuisine, attending cultural events and
          festivals, and interacting with locals. Learning a few phrases in the
          local language can also go a long way in making connections and
          showing respect.
        </p>
        <h4 className={styles.title}>Research Your Destination</h4>
        <p className={styles.text}>
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels. One of the most rewarding aspects of
          traveling is immersing yourself in the local culture and customs. This
          includes trying local cuisine, attending cultural events and
          festivals, and interacting with locals. Learning a few phrases in the
          local language can also go a long way in making connections and
          showing respect.
        </p>
        <div className={styles.quote}>
          “ Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy. ”
        </div>
        <Image
          className={styles.image}
          src={hero_img}
          alt="post image"
          layout="responsive"
        />
        <Adb />
        <h4 className={styles.title}>Research Your Destination</h4>
        <p className={styles.text}>
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore
        </p>
      </div>
    </>
  );
};

export default SinglePostScreen;
