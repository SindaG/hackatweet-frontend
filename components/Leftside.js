import styles from '../styles/Leftside.module.css';
import { useSelector } from 'react-redux';
import Image from 'next/image';


function Tweet() {

    const firstsnameUser = useSelector((state) => state.user.value.firstname)
    const usernameUser = useSelector((state) => state.user.value.username)

    return (
        <div className={styles.container}>
            <div>
                <Image className={styles.logo} width={50} height={50} alt="logo" src="/logo.png" />
            </div>

            <div>
                <div className= {styles.profil}>
                    <Image className={styles.logo} width={50} height={50} alt="logo" src="/logo.png" />
                    <div className={styles.names}>
                        <div className={styles.firstname}>{firstsnameUser}</div>
                        <div className={styles.username}>@{usernameUser}</div>
                    </div>
                </div>
                <button className={styles.logout}>
                    Logout
                </button>

            </div>

        </div>
    )

}
export default Tweet;