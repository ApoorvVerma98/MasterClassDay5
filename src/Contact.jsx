import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <div className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <h1>Contact Page</h1>
      <p>Please fill out the form below to contact us.</p>
    </div>
  );
};

export default Contact;
