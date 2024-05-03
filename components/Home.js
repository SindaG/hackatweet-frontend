import styles from '../styles/Home.module.css';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import React from 'react'
import { useRouter } from 'next/router'
import { Modal } from 'antd';
import Image from 'next/image';
import SignIn from './SignIn';
import SignUp from './SignUp';


function Home() {

  const token = useSelector(state => state.user.value.token)
  const router = useRouter()

  const [isModalSignInOpen, setIsModalSignInOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModalSignIn = () => {
    setIsModalSignInOpen(true);
  };
  const handleOkSignIn = () => {
    setIsModalSignInOpen(false);
  };
  const handleCancelSignIn = () => {
    setIsModalSignInOpen(false);
  };

//A mettre dans le Persistore à la fin : 
  // useEffect(() => {
  //   if (token) {
  //     router.push('/login')
  //   }
  // }, [])



  return (
    <div className={styles.container}>
      <div className= {styles.image}> 
        <Image className={styles.logo} src="/logo.png" alt="logo" width={200} height={200} />
      </div>
      <div className={styles.signContainer}>
        <Image className={styles.logo} src="/logo.png" alt="logo" width={50} height={50} />
        <h1 className={styles.title}>See what's <br></br> happening</h1>
        <p className={styles.join}>Join Hackatweet today.</p>
        <Modal className={styles.modalContainer} footer={null} open={isModalOpen} onCancel={handleCancel}>
          <SignUp/>
        </Modal>
        <button className={styles.signup} onClick={showModal}>Sign up</button>
        <p className={styles.account}>Already have an account ?</p>
        <Modal footer={null} open={isModalSignInOpen}  onCancel={handleCancelSignIn}>
          <SignIn/>
        </Modal>
        <button className={styles.signin} onClick={showModalSignIn}>Sign in</button>
      </div>
    </div>
  )
}

export default Home;


