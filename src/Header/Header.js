import React from 'react';
import styles from "./Header.module.scss";
// import { Link } from 'react-router-dom';

const Header = (props) => (
    <div id="myNav" className={styles.container}>
    <img src="../../editedcropcopy.jpg" alt="piranha" className={styles.container}/>
        <div className={styles.Nav}> 
        <img src="../../logotech.jpg" alt="piranha tech logo" className={styles.logotech}/>
        <h2>
        <div className={styles.links}>Piranha Technologies</div> 
        <div className={styles.links}><a>About</a></div>
        <div className={styles.links}><a>Contact</a></div> 
        <div className={styles.links}><a>Bio</a></div> 
        <div className={styles.links}><a>Partnerships</a></div>  
</h2>
        </div>
<div className={styles.heroSlogan}>Ease your mind with our expertise in your next project
<button className={styles.heroButton}>Learn How</button>
</div>
        </div>
);

export default Header