import styles from '../styles/LastTweets.module.css';

function LastTweets() {
    return (
        <div className={styles.container}>
            <div className={styles.bigbox}>
                <div >
                    <h1 className={styles.home}> Home</h1>

                    <div className={styles.text}>
                        <input className={styles.textZone}
                            type="text"
                            placeholder="What's up"
                        />
                    </div>
                    <div className= {styles.divbouton}>
                        <button className={styles.tweetButton}>Tweet</button>
                    </div>
                </div>
            </div>

        </div>
    )

}



export default LastTweets;

{/* <text-area id ="zoneTexte" maxlength = "280" type="text" placeholder="What's up?" />
            </div>
            <div id="compteur" style="text-align:right">0</div>
            <div></div> */}