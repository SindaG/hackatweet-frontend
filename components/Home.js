import styles from '../styles/Home.module.css';
import { useState } from "react";
import React from 'react'
import Image from 'next/image';


function Home() {

  return (
    <div className={styles.container}>
      <div className= {styles.image}> 
      bonjour
      </div>
      <Image className={styles.logo} src="/logo.png" alt="logo" width={50} height={50} />
      <h1 className={styles.title}>See what's happening</h1>
      <p className={styles.join}>Join Hackatweet today.</p>
      <button className={styles.signup}>Sign up</button>
      <p className={styles.account}>Already have an account</p>
      <button className={styles.signin}>Sign in</button>
    </div>
  )
}

export default Home;


