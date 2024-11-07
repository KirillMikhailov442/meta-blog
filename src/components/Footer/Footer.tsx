import { FC } from 'react';
import Button from '@components/UI/Button/Button';
import styles from './Footer.module.scss';
import Link from 'next/link';
import Input from '@components/UI/Input/Input';
import { MdOutlineEmail } from 'react-icons/md';
import Image from 'next/image';

import logo_dark_img from '@assets/mini-logo-dark.svg';
import logo_light_img from '@assets/mini-logo-light.svg';
import name_website_dark_img from '@assets/name-website-dark.svg';
import name_website_light_img from '@assets/name-website-light.svg';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.content}>
          <li className={styles.about}>
            <h6 className={styles.title}>About</h6>
            <p className={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              sapiente nulla maxime quas et assumenda omnis quo voluptatum sed
              ipsam tenetur minima facilis dignissimos, expedita cum! Excepturi
              dicta perspiciatis totam.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <b>Email : </b>
                info@jstemplate.net
              </li>
              <li className={styles.listItem}>
                <b>Phone : </b>
                880 123 456 789
              </li>
            </ul>
          </li>
          <li className={styles.listOfLinks}>
            <h6 className={styles.title}>Quick Link</h6>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/'}>
                  Home
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/about'}>
                  About
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/blog'}>
                  Blog
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/archived'}>
                  Archived
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/author'}>
                  Author
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/contact'}>
                  Contact
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.listOfLinks}>
            <h6 className={styles.title}>Category</h6>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/cat/lifestyle'}>
                  Lifestyle
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/cat/technology'}>
                  Technology
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/cat/travel'}>
                  Travel
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/cat/business'}>
                  Business
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/cat/economy'}>
                  Economy
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/cat/sports'}>
                  Sports
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.newsletterWrapper}>
            <form className={styles.newsletter}>
              <h6 className={styles.title}>Weekly Newsletter</h6>
              <p>Get blog articles and offers via email</p>
              <Input
                var="outline"
                placeholder="Your Email"
                className={styles.input}
                icon={<MdOutlineEmail />}
              />
              <Button className={styles.button}>Subscribe</Button>
            </form>
          </li>
        </ul>
        <div className={styles.copyright}>
          <div className={styles.copyrightInfo}>
            <Link href={'/'}>
              <Image
                className={styles.themeLight}
                src={logo_dark_img}
                alt="logo image"
                width={48}
                height={48}
              />
              <Image
                className={styles.themeDark}
                src={logo_light_img}
                alt="logo image"
                width={48}
                height={48}
              />
            </Link>
            <div style={{ marginLeft: 12 }}>
              <Image
                className={styles.themeLight}
                src={name_website_dark_img}
                alt="name image"
              />
              <Image
                className={styles.themeDark}
                src={name_website_light_img}
                alt="name image"
              />
              <p>© JS Template 2023. All Rights Reserved.</p>
            </div>
          </div>
          <nav>
            <ul className={styles.copyrightLinks}>
              <li>
                <Link className={styles.copyrightLinksItem} href={'/'}>
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link className={styles.copyrightLinksItem} href={'/'}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className={styles.copyrightLinksItem} href={'/'}>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
