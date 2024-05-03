import styles from '../styles/Leftside.module.css';
import User from '../components/SignUp'
import { useSelector } from 'react-redux';




function Tweet () {

const User = useSelector((state) => state.User.username && state.User.firstname) 

return (
<div className={styles.container}>
<div>
<Image className= {styles.logo} alt= "logo" src = "/logo.png"/>
</div>

<div>
<button className={styles.logout}>
    Logout
</button>
</div>{User}</div>
)

}

export default Tweet;