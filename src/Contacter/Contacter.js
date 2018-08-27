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
            Contact us by mail:<br></br>
            128-08 Inwood St.<br></br>
            Jamaica NY 11436

           
            </div>
            
            <div className={styles.heroright}>
            Connect with Kevin Holmes for media opportunities, general questions or comments using the form below 
              </div> 
                </div>
                </Animated>
            </div>

    );
}
}

export default Contacter;