import { useRef } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TestButton from '../components/testButton';

const Home: NextPage = () => {
  const buttonRef = useRef();

  const handleClick = () => {
    buttonRef.current.setFromOutside('Message from Parent');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Hook Tests</title>
        <meta name="Test Environment" content="Test Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <button onClick={handleClick} className={styles.button}>Change message</button>
        </h1>

        <TestButton ref={buttonRef} buttonLabel='Click Here!'/>

      </main>

      <footer className={styles.footer}>
        <p>Footer section.</p>
      </footer>
    </div>
  )
}

export default Home
