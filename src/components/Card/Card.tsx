'use client';

import { FC, HTMLAttributes } from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';
import Tag from '@components/UI/Tag/Tag';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardProps extends HTMLAttributes<HTMLLIElement> {
  image: string;
  tag: string;
  title: string;
  authorAvatar: string;
  authorName: string;
  date: string;
}

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

const Card: FC<CardProps> = (
  { image, tag, title, authorAvatar, authorName, date },
  props,
) => {
  return (
    <motion.li
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.card}
      {...props}
    >
      <Link className={styles.content} href={`/post/1`}>
        <Image
          className={styles.img}
          src={image}
          alt="card image"
          layout="responsive"
          width={100}
          height={100}
        />
        <Tag className={styles.tag} text={tag} var="transparent" />
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.shortInfo}>
          <Image
            className={styles.avatar}
            src={authorAvatar}
            alt="avatar of author"
            width={36}
            height={36}
          />
          <p className={styles.name}>{authorName}</p>
          <time className={styles.date}>{date}</time>
        </div>
      </Link>
    </motion.li>
  );
};

export default Card;
