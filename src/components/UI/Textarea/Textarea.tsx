import { FC, HTMLAttributes } from 'react';
import styles from './Textarea.module.scss';
import clsx from 'clsx';

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  var?: 'default' | 'outline';
  placeholder?: string;
}

const TextareaDefault: FC<TextareaProps> = (
  { className, placeholder },
  props,
) => {
  return (
    <textarea
      className={clsx(styles.textarea, styles.default, className)}
      placeholder={placeholder}
      {...props}
    ></textarea>
  );
};

const TextareaOutline: FC<TextareaProps> = (
  { className, placeholder },
  props,
) => {
  return (
    <textarea
      className={clsx(styles.textarea, styles.outline, className)}
      placeholder={placeholder}
      {...props}
    ></textarea>
  );
};

const Textarea: FC<TextareaProps> = props => {
  switch (props.var) {
    case 'default':
      return <TextareaDefault {...props} />;
    case 'outline':
      return <TextareaOutline {...props} />;

    default:
      return <TextareaDefault {...props} />;
  }
};

export default Textarea;
