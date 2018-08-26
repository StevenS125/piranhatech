import React, { Component } from 'react';
import styles from "./Header.module.scss";


class Header extends Component {

render() {
        return (
    <div id="myNav" className={styles.container}>

    <img src="../../homehero.JPG" alt="piranha" className={styles.container}/>
<div className={styles.heroSlogan}>Have Kevin Holmes motivate your audience at your next event &nbsp; &nbsp; &nbsp;
<button className={styles.heroButton}>Learn How</button>
</div>
        </div>
);
}
}
export default Header