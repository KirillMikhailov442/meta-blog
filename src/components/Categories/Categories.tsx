'use client';

import { FC } from 'react';
import styles from './Categories.module.scss';
import 'react-multi-carousel/lib/styles.css';
import Carousel, { DotProps } from 'react-multi-carousel';
import clsx from 'clsx';
import Link from 'next/link';
import {
  MdCardTravel,
  MdOutlineScience,
  MdSportsBasketball,
} from 'react-icons/md';
import { FaEarthAfrica, FaSackDollar } from 'react-icons/fa6';
import { GiPartyPopper } from 'react-icons/gi';
import { motion } from 'framer-motion';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1200, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface CategoryProps {
  type:
    | 'travel'
    | 'business'
    | 'technology'
    | 'lifestyle'
    | 'economy'
    | 'sports';
}

const Category: FC<CategoryProps> = ({ type }) => {
  switch (type) {
    case 'travel':
      return (
        <Link href={'/'} className={clsx(styles.category, styles.green)}>
          <h1>Travel</h1>
          <FaEarthAfrica className={styles.icon} size={170} />
        </Link>
      );
    case 'business':
      return (
        <Link href={'/'} className={clsx(styles.category, styles.orange)}>
          <h1>Business</h1>
          <MdCardTravel className={styles.icon} size={170} />
        </Link>
      );

    case 'technology':
      return (
        <Link href={'/'} className={clsx(styles.category, styles.blue)}>
          <h1>Technology</h1>
          <MdOutlineScience className={styles.icon} size={170} />
        </Link>
      );
    case 'economy':
      return (
        <Link href={'/'} className={clsx(styles.category, styles.yellow)}>
          <h1>Economy</h1>
          <FaSackDollar className={styles.icon} size={170} />
        </Link>
      );
    case 'lifestyle':
      return (
        <Link href={'/'} className={clsx(styles.category, styles.violet)}>
          <h1>Lifestyle</h1>
          <GiPartyPopper className={styles.icon} size={170} />
        </Link>
      );
    case 'sports':
      return (
        <Link href={'/'} className={clsx(styles.category, styles.red)}>
          <h1>Sports</h1>
          <MdSportsBasketball className={styles.icon} size={170} />
        </Link>
      );

    default:
      break;
  }
};

const CustomDot: FC<DotProps> = ({ onClick, active, ...props }) => {
  return (
    <li
      className={clsx(styles.dot, { [`${styles.dotActive}`]: active })}
      onClick={onClick}
      {...props}
    ></li>
  );
};

const Categories: FC = () => {
  return (
    <motion.section
      initial={{ y: '20%', opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
    >
      <Carousel
        swipeable
        draggable={false}
        showDots
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={6000}
        keyBoardControl
        customDot={<CustomDot />}
        dotListClass={styles.dotList}
        className={styles.carousel}
      >
        <Category type="business" />
        <Category type="technology" />
        <Category type="travel" />
        <Category type="economy" />
        <Category type="lifestyle" />
        <Category type="sports" />
      </Carousel>
    </motion.section>
  );
};

export default Categories;
