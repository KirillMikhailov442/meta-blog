'use client';

import { FC } from 'react';
import styles from './Contact.module.scss';
import Input from '@components/UI/Input/Input';
import Button from '@components/UI/Button/Button';
import { IoPersonCircle } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import Textarea from '@components/UI/Textarea/Textarea';
import { motion } from 'framer-motion';

const ContactScreen: FC = () => {
  return (
    <div className={styles.container}>
      <motion.h2
        initial={{ y: '20%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={styles.title}
      >
        Contact Us
      </motion.h2>
      <motion.h6
        initial={{ y: '20%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={styles.subtitle}
      >
        We try to read your messages as quickly as possible
      </motion.h6>
      <motion.form
        initial={{ y: '20%', opacity: 0, scale: 0.2 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className={styles.form}
      >
        <Input
          placeholder="Your Name"
          var="outline"
          icon={<IoPersonCircle size={22} />}
        />
        <Input
          placeholder="Your Email"
          var="outline"
          icon={<MdOutlineEmail size={22} />}
        />
        <Textarea
          className={styles.textarea}
          var="outline"
          placeholder="Your Text"
        />
        <Button>Send</Button>
      </motion.form>
    </div>
  );
};

export default ContactScreen;
