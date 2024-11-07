import { FC } from 'react';
import styles from './Blog.module.scss';
import TitlePage from './components/TitlePage/TitlePage';

import Card from '@components/Card/Card';

import card_img from '@assets/post.png';
import author_img from '@assets/author.png';
import Button from '@components/UI/Button/Button';
import Adb from '@components/Adb/Adb';
import Hero from '@components/Hero/Hero';

const BlogScreen: FC = () => {
  return (
    <div className="main__container">
      <TitlePage />
      <Hero />
      <section className={styles.listOfPosts}>
        <h5 className={styles.title}>Latest Posts</h5>
        <ul className={styles.list}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
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
            Load More
          </Button>
        </footer>
      </section>
      <Adb />
    </div>
  );
};

export default BlogScreen;
