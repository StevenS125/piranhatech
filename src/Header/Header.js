import React from 'react';
import styles from "./Header.module.scss";
// import { Link } from 'react-router-dom';

const Header = (props) => (
    <div id="myNav" className={styles.container}>
        <div className={styles.Nav}> 
        <img src="../../logotech.jpg" alt="piranha tech logo" className={styles.logotech}/>
        <h2> 
        <div className={styles.links}><a>About</a></div>
        <div className={styles.links}><a>Contact</a></div> 
        <div className={styles.links}><a>Bio</a></div> 
        <div className={styles.links}><a>Partnerships</a></div>  
</h2>
        </div>
        </div>
);

export default Header