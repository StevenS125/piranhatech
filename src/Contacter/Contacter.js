import React, { Component } from 'react';
import styles from './Contacter.module.scss';
import {Animated} from "react-animated-css";
import Contact from '../Contact/Contact';
import ScrollAnimation from 'react-animate-on-scroll';




class Contacter extends Component {


    componentDidMount(){
        document.title = "Contact Us | Piranha Technologies"
      }

  render() {
    return (
        <div>
                  <Animated animationIn="fadeIn" animationInDelay={0} isVisible={true}>
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
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} animatePreScroll={false}>
                <Contact></Contact>
                </ScrollAnimation>
                <br></br>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} animatePreScroll={false}>
                <div className={styles.reviewHead}>What our Clients are saying about us</div>
            <div className={styles.reviewContainer}>
            <div className={styles.reviewTitle}>Kim Plyler of Kim's Kustoms</div>
            <img src="../../kimskustomslogo.png" alt="Kim Kustom's Kim Plyler" className={styles.reviewImg}/>
            <div className={styles.reviewDescript}>
            "Piranha Technologies helped me reach customers I would have never been able to without my ecommerce platform"
            </div>
            </div>

            <div className={styles.reviewContainer}>
            <div className={styles.reviewTitle}>Kevin Holmes of Straight Talk Consulting</div>
            <img src="../../STTLogo.jpg" alt="Kim Kustom's Kim Plyler" className={styles.reviewImg}/>
            <div className={styles.reviewDescript}>
            "Piranha Technologies completely modernized my previos site and brought new relevence to my small business"
            </div>
            </div>

            </ScrollAnimation>
</div>
    );
}
}

export default Contacter;