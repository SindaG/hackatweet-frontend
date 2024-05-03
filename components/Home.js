import styles from '../styles/Home.module.css';
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import React from 'react'
import { useRouter } from 'next/router'

import Image from 'next/image';
import SignIn from './SignIn';
import SignUp from './SignUp';


function Home() {

  const token = useSelector(state => state.user.value.token)
  const router = useRouter()

  useEffect(() => {
    if (token) {
      router.push('/login')
    }
  }, [])

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


