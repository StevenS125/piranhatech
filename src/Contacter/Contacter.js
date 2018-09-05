import React, { Component } from 'react';
import styles from './Contacter.module.scss';
import {Animated} from "react-animated-css";
import Contact from '../Contact/Contact';
import ScrollAnimation from 'react-animate-on-scroll';




class Contacter extends Component {


  render() {
    return (
        <div>
                  <Animated animationIn="bounceInLeft" animationInDelay={0} isVisible={true}>
            <div className={styles.herocontact}>
            <img src="../../contactphoto1400.jpg" alt="piranha" className={styles.heroImg}/>
                </div>
                <Animated animationIn="fadeIn" animationInDelay={1000} isVisible={true}>
              <div className={styles.heroText}>
              <div>Contact Us!</div>
              <div>We're Ready to lead you into</div>
              <div>the future of your Web Presence</div>
              </div>
            </Animated>
                </Animated>
                <ScrollAnimation animateIn="bounceInRight" animateOnce={true} animatePreScroll={false}>
                <Contact></Contact>
                </ScrollAnimation>
                <br></br>
            </div>

    );
}
}

export default Contacter;