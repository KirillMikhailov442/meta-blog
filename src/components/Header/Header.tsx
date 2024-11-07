'use client';

import { FC, useEffect } from 'react';

import CheckBox from '@components/UI/CheckBox/CheckBox';
import Input from '@components/UI/Input/Input';

import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import logo_dark_img from '@assets/logo-dark.png';
import logo_light_img from '@assets/logo-light.png';
import clsx from 'clsx';
import { IoClose, IoSearch } from 'react-icons/io5';
import { IoMdMenu } from 'react-icons/io';
import MobileNav from './MobileNav';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { toggleComponent } from '@store/slices/showComponents';
import { changeThemeInAttr, toggleTheme } from '@store/slices/theme';

const Header: FC = () => {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const isShowMobileNav = useAppSelector(
    state => state.showComponents.mobileNavList,
  );

  const theme = useAppSelector(state => state.theme.theme);

  useEffect(() => {
    dispatch(changeThemeInAttr());
  }, [theme]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href={'/'} className={styles.logo}>
            <Image
              className={styles.themeLight}
              src={logo_dark_img}
              alt="logo"
            />
            <Image
              className={styles.themeDark}
              src={logo_light_img}
              alt="logo"
            />
          </Link>
          <nav className={styles.nav}>
            <ul className={clsx(styles.list, styles.primaryNav)}>
              <li>
                <Link
                  className={clsx(styles.listItem, {
                    [`${styles.active}`]: pathName == '/',
                  })}
                  href={'/'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={clsx(styles.listItem, {
                    [`${styles.active}`]: pathName == '/blog',
                  })}
                  href={'/blog'}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={clsx(styles.listItem, {
                    [`${styles.active}`]: pathName == '/single-post',
                  })}
                  href={'/single-post'}
                >
                  Single Page
                </Link>
              </li>
              <li>
                <Link
                  className={clsx(styles.listItem, {
                    [`${styles.active}`]: pathName == '/author',
                  })}
                  href={'/author'}
                >
                  Pages
                </Link>
              </li>
              <li>
                <Link
                  className={clsx(styles.listItem, {
                    [`${styles.active}`]: pathName == '/contact',
                  })}
                  href={'/contact'}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <nav className={styles.rightSide}>
            <ul className={clsx(styles.list, styles.secondaryNav)}>
              <li>
                <Input
                  className={styles.searchBar}
                  placeholder="Search..."
                  icon={<IoSearch />}
                />
              </li>
              <li>
                <CheckBox onChange={() => dispatch(toggleTheme())} />
              </li>
            </ul>
            <button
              onClick={() => dispatch(toggleComponent('mobileNavList'))}
              className={styles.humburger}
            >
              {!isShowMobileNav ? (
                <IoMdMenu size={25} />
              ) : (
                <IoClose size={25} />
              )}
            </button>
          </nav>
        </div>
      </header>
      <MobileNav />
    </>
  );
};

export default Header;
