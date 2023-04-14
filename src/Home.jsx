import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';


const Home = () => {
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
      <h1>Home Page</h1>
      <p>Welcome to my website!</p>
    </div>
  );
};

export default Home;
