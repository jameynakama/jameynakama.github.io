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
      <section className={styles.description}>
        <p>I'm a software engineer by trade.</p>
        <p>I'm a fine artist by fun. test</p>
        <p>I like dogs and cats and video games and my wife a lot.</p>
      </section>
    </div>
  );
}

export default Home;
