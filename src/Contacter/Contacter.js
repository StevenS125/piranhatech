import React, { Component } from 'react';
import styles from './Contacter.module.scss';
import {Animated} from "react-animated-css";




class Contacter extends Component {


  render() {
    return (
        <div>
                  <Animated animationIn="bounceInLeft" animationInDelay={0} isVisible={true}>
            <div className={styles.herocontact}>
            <div className={styles.heroleft}>
 

           
            </div>
            
            <div className={styles.heroright}>
            <img src="../../contactphoto_750x500.jpg" alt="piranha" className={styles.container}/>
              </div> 
                </div>
                </Animated>
            </div>

    );
}
}

export default Contacter;