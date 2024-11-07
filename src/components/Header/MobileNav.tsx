import { motion } from 'framer-motion';
import { FC, useEffect, useRef } from 'react';

import Input from '@components/UI/Input/Input';
import CheckBox from '@components/UI/CheckBox/CheckBox';
import styles from './Header.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoSearch } from 'react-icons/io5';
import useAppSelector from '@/hooks/useAppSelector';
import useAppDispatch from '@/hooks/useAppDispatch';
import { hideComponent } from '@store/slices/showComponents';
import { changeThemeInAttr, toggleTheme } from '@store/slices/theme';

const listVariants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.05,
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

const MobileNav: FC = () => {
  const pathName = usePathname();
  const isOpen = useAppSelector(state => state.showComponents.mobileNavList);
  const dispatch = useAppDispatch();
  const navRef = useRef<HTMLDivElement>(null);

  const closeNav = (area: any) => {
    if (!navRef.current?.contains(area)) {
      dispatch(hideComponent('mobileNavList'));
    }
  };

  const theme = useAppSelector(state => state.theme.theme);

  useEffect(() => {
    dispatch(changeThemeInAttr());
  }, [theme]);
  return (
    <div
      onClick={e => closeNav(e.target)}
      className={clsx(styles.mobileWrapper, {
        [`${styles.mobileWrapperShow}`]: isOpen,
      })}
    >
      <motion.aside
        ref={navRef}
        className={clsx(styles.aside, { [`${styles.open}`]: isOpen })}
      >
        <div className={styles.asideContent}>
          {isOpen && (
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className={styles.mobileList}
            >
              <motion.li
                onClick={() => dispatch(hideComponent('mobileNavList'))}
                variants={itemVariants}
              >
                <Link
                  className={clsx(styles.mobileListItem, {
                    [`${styles.active}`]: pathName == '/',
                  })}
                  href={'/'}
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                onClick={() => dispatch(hideComponent('mobileNavList'))}
                variants={itemVariants}
              >
                <Link
                  className={clsx(styles.mobileListItem, {
                    [`${styles.active}`]: pathName == '/blog',
                  })}
                  href={'/blog'}
                >
                  Blog
                </Link>
              </motion.li>
              <motion.li
                onClick={() => dispatch(hideComponent('mobileNavList'))}
                variants={itemVariants}
              >
                <Link
                  className={clsx(styles.mobileListItem, {
                    [`${styles.active}`]: pathName == '/single-post',
                  })}
                  href={'/single-post'}
                >
                  Single Page
                </Link>
              </motion.li>
              <motion.li
                onClick={() => dispatch(hideComponent('mobileNavList'))}
                variants={itemVariants}
              >
                <Link
                  className={clsx(styles.mobileListItem, {
                    [`${styles.active}`]: pathName == '/author',
                  })}
                  href={'/author'}
                >
                  Author
                </Link>
              </motion.li>
              <motion.li
                onClick={() => dispatch(hideComponent('mobileNavList'))}
                variants={itemVariants}
              >
                <Link
                  className={clsx(styles.mobileListItem, {
                    [`${styles.active}`]: pathName == '/contact',
                  })}
                  href={'/contact'}
                >
                  Contact
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Input
                  className={styles.mobileSearchBar}
                  placeholder="Search..."
                  icon={<IoSearch />}
                />
              </motion.li>
              <motion.li variants={itemVariants}>
                <CheckBox
                  onChange={() => dispatch(toggleTheme())}
                  className={styles.mobileCheckBox}
                />
              </motion.li>
            </motion.ul>
          )}
        </div>
      </motion.aside>
    </div>
  );
};

export default MobileNav;
