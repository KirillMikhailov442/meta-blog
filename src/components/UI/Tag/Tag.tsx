import { FC, HTMLAttributes } from 'react';
import styles from './Tag.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  var?: 'default' | 'transparent';
}

const TagDefault: FC<TagProps> = ({ text, className }, props) => {
  return (
    <Link
      className={clsx(styles.tag, styles.blue, className)}
      href={`/cat/${text}`}
      {...props}
    >
      {text}
    </Link>
  );
};

const TagSky: FC<TagProps> = ({ text, className }, props) => {
  return (
    <Link
      className={clsx(styles.tag, styles.sky, className)}
      href={`/cat/${text}`}
      {...props}
    >
      {text}
    </Link>
  );
};

const Tag: FC<TagProps> = props => {
  switch (props.var) {
    case 'default':
      return <TagDefault {...props} />;
    case 'transparent':
      return <TagSky {...props} />;
    default:
      return <TagDefault {...props} />;
  }
};

export default Tag;
