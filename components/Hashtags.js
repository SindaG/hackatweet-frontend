import styles from '../styles/Trends.module.css';

function Hashtags() {
    return (
        <div className={styles.container}>
            <div className={styles.trends}>
                <h1>Trends</h1>
            </div>
            <div className={styles.hashtags}>
                <div>
                    <h2 className={styles.h2}>#Yanis</h2>
                    <h3 className={styles.h3}>2 tweets</h3>
                </div>
            </div>
        </div>
    )

}

export default Hashtags;