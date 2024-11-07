import React, { FC, HTMLAttributes, useId } from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  icon?: React.JSX.Element;
  placeholder?: string;
  var?: 'default' | 'outline';
}

const InputDefault: FC<InputProps> = (
  { className, icon, placeholder },
  props,
) => {
  const id = useId();
  return (
    <label className={styles.wrapper} htmlFor={id}>
      <input
        className={clsx(styles.input, styles.inputDefault, className)}
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        {...props}
      />
      <span className={styles.button}>{icon}</span>
    </label>
  );
};

const InputOutline: FC<InputProps> = (
  { className, icon, placeholder },
  props,
) => {
  const id = useId();
  return (
    <label className={styles.wrapper} htmlFor={id}>
      <input
        className={clsx(styles.input, styles.inputOutline, className)}
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        {...props}
      />
      <span className={styles.button}>{icon}</span>
    </label>
  );
};

const Input: FC<InputProps> = props => {
  switch (props.var) {
    case 'default':
      return <InputDefault {...props} />;
    case 'outline':
      return <InputOutline {...props} />;
    default:
      return <InputDefault {...props} />;
  }
};

export default Input;
