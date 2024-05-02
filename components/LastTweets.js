import styles from '../styles/Tweets.module.css';

function LastTweets() {
    return (
        <div className={styles.container}>
            <h1 className={styles.home}> Home</h1>
            <input type="text" placeholder="What's up?" />
            <button classname={styles.tweetbutton}>Tweet</button>
        </div>
    )

}

export default LastTweets;