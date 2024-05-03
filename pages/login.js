import Login from '../components/Login';
import Leftside from '../components/Leftside'
import LastTweets from '../components/LastTweets';
import styles from '../styles/Login.module.css'
import Hashtags from '../components/Hashtags';




function LoginPage() {
  return (
    <div className={styles.tweetContainer}>
      <Leftside/>
      <LastTweets/>
      <Hashtags/>
     
    </div>
  );
}

export default LoginPage;
