import styles from '../styles/Tweets.module.css';

function LastTweets() {
    return (
        <div className={styles.container}>
            <div>
            <h1 className={styles.home}> Home</h1>
            </div>
            <div>
            <text-area id ="zoneTexte" maxlength = "280" type="text" placeholder="What's up?" />
            </div>
            <div id="compteur" style="text-align:right">0</div>
            <div>
            <button classname={styles.tweetbutton}>Tweet</button>
            </div>           
        </div>
    )

}

<script>
document.getElementById('zoneTexte').addEventListener('keyup', function() {
    document.getElementById('compteur').innerHTML = zoneTexte.value.length
});
</script>

export default LastTweets;