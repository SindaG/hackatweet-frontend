import styles from '../styles/SignUp.module.css';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
// import { Modal } from "antd";
import Link from "next/link";
import { signUp } from "../reducers/user";

function SignUp() {
    const [signUpFirstname, setSignUpFirstname] = useState("");
    const [signUpUsername, setSignUpUsername] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");

    const dispatch = useDispatch();

    const handleRegister = () => {
      fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
      }).then(response => response.json())
        .then(data => {
          if (data.result) {
            dispatch(signUp({firstname: signUpFirstname, username : signUpUsername, token: data.token}));
            setSignUpFirstname('');
            setSignUpUsername('');
            setSignUpPassword('');
          }
        });
    };

  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpSection}>
      <Image className={styles.logo} src="/logo.png" alt="logo" width={50} height={50} />
        <p className={styles.signUpTitle}>Sign-Up</p>
        <div className={styles.signUpForm}>
        <input
          className={styles.signUpInput}
          type="text"
          placeholder="Firstname"
          id="signUpFirstname"
          onChange={(e) => setSignUpFirstname(e.target.value)}
          value={signUpFirstname}
        />
        <input
          className={styles.signUpInput}
          type="text"
          placeholder="Username"
          id="signUpUsername"
          onChange={(e) => setSignUpUsername(e.target.value)}
          value={signUpUsername}
        />
        <input
          className={styles.signUpInput}
          type="password"
          placeholder="Password"
          id="signUpPassword"
          onChange={(e) => setSignUpPassword(e.target.value)}
          value={signUpPassword}
        />
        <button id="connection" onClick={() => handleRegister()} className={styles.signup}>
          Sign up
        </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
