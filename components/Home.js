import styles from '../styles/Home.module.css';
import { useState } from "react";
import React from 'react'
import Image from 'next/image';
import SignIn from './SignIn';
import SignUp from './SignUp';
import LastTweets from './LastTweets';



function Home() {

  return (
    <div className={styles.container}>
      <div className= {styles.image}> 
        <Image className={styles.logo} src="/logo.png" alt="logo" width={200} height={200} />
      </div>
      <div className={styles.signContainer}>
        <Image className={styles.logo} src="/logo.png" alt="logo" width={50} height={50} />
        <h1 className={styles.title}>See what's <br></br> happening</h1>
        <p className={styles.join}>Join Hackatweet today.</p>
        <SignUp/>
        <button className={styles.signup}>Sign up</button>
        <p className={styles.account}>Already have an account ?</p>
        <SignIn/>
        <button className={styles.signin}>Sign in</button>
      </div>
    </div>
  )
}

export default Home;


