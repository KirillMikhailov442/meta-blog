import { FC } from 'react';
import Hero from '@components/Hero/Hero';
import Adb from '@components/Adb/Adb';
import styles from './Home.module.scss';
import Card from '@components/Card/Card';

import card_img from '@assets/post.png';
import author_img from '@assets/author.png';
import Button from '@components/UI/Button/Button';

const HomeScreen: FC = () => {
  return (
    <div className="main__container">
      <Hero var="comment" />
      <Adb />
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
        <footer className={styles.footer}>
          <Button className={styles.buttonView} var="outline">
            View All Post
          </Button>
        </footer>
      </section>
      <Adb />
    </div>
  );
};

export default HomeScreen;
