import React from 'react';

import Name from '../Name/Name';

import styles from './Home.module.css';

function Home() {
  return (
    <div className={`App ${styles.wrapper}`}>
      <ul className={styles.name}>
        <li><Name name="Jamey"/></li>
        <li><Name name="Joseph"/></li>
        <li><Name name="Nakama"/></li>
      </ul>
    </div>
  );
}

export default Home;
