import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Tweets.module.css';
import Image from 'next/image';
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

function Tweets() {

    return (
        <div className={styles.tweetContainer}>
            <div classname={styles.tweetContent}>
                <div className={styles.pfp}>
                    <Image height={50} width={50} alt="pfp" src="/logo.png" />
                </div>
                <div>
                    <p>Username</p>
                </div>
                <div>
                    <p>Arobase</p>
                </div>
            </div>
            <div className={styles.textTweet}>
                <p>EXEMPLE TEXTE</p>
            </div>
            <FontAwesomeIcon onClick = {() => handleLikeClick()} icon = {faHeart} className = {styles.likeIcon}/>
            <FontAwesomeIcon onClick = {() => handleDeleteClick()} icon = {faTrash} className = {styles.trashIcon}/>
        </div>
    )

}

export default Tweets;