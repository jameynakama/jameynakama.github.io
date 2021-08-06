import React from 'react';

import Name from '../Name/Name';

import styles from './Home.module.css';

function Home() {
  const [sentence, setSentence] = React.useState("");

  React.useEffect(() => {
    console.log(sentence);
  }, [sentence]);

  const handleClick = async () => {
    const response = await fetch("/randsense/api/v1/sentences/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    setSentence(data.sentence);
  }

  console.log(process.env.NODE_ENV);

  return (
    <div className={`App ${styles.wrapper}`}>
      <ul className={styles.name}>
        <li><Name name="Jamey"/></li>
        <li><Name name="Joseph"/></li>
        <li><Name name="Nakama" url="#" onClick={handleClick}/></li>
      </ul>
      <section className={styles.description}>
        {sentence ?
          <p>{sentence}</p>
          :
          <>
            <p>I'm a software engineer by trade.</p>
            <p>I'm a fine artist by fun.</p>
            <p>I like dogs and cats and video games and my wife a lot.</p>
          </>
        }
      </section>
    </div>
  );
}

export default Home;
