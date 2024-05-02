import styles from "../styles/SignIn.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { Modal } from "antd";
import Link from "next/link";
import { login } from "../reducers/user";

function SignIn() {
    const [signInUsername, setSignInUsername] = useState("");
    const [signInPassword, setSignInPassword] = useState("");

    const dispatch = useDispatch();

	const handleConnection = () => {
		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({username : signInUsername, token : data.token}));
					setSignInUsername('');
					setSignInPassword('');
				}
			});
	};

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerSection}>
        <p>Sign-in</p>
        <input
          type="text"
          placeholder="Username"
          id="signInUsername"
          onChange={(e) => setSignInUsername(e.target.value)}
          value={signInUsername}
        />
        <input
          type="password"
          placeholder="Password"
          id="signInPassword"
          onChange={(e) => setSignInPassword(e.target.value)}
          value={signInPassword}
        />
        <button id="connection" onClick={() => handleConnection()} className={styles.signin}>
          Connect
        </button>
      </div>
    </div>
  );
}

export default SignIn;
