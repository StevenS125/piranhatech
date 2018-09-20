import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Nav.module.scss";
import {Animated} from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
      


class Header extends Component {
        constructor(props) {
                super(props);
                this.state = {
                  listopen: false,
                };
}




openList = () => {
  return (
    <Animated animationIn="fadeInDown" animationInDelay={0} isVisible={true}>
          <div className={styles.mobileDrop}>
                <div><Link onClick={ this.closeList } className={styles.linksMobile} to="/">Home</Link></div>
                <div><Link onClick={ this.closeList } className={styles.linksMobile} to="/Services">Services</Link></div>    
                <div><Link onClick={ this.closeList } className={styles.linksMobile} to="/Contact">Contact Us</Link></div>
    </div>
    </Animated>
  );
}

closeList = () => {
  this.setState({
    listopen: false
});
}




toggleList = () => {
if (!this.state.listopen) {
  this.setState({
    listopen: true
  });
} else {
  this.setState({
    listopen: false
  })
}
  }



render() {



        return (
          <div>
              <div className={styles.navbar}>
                    <img className={styles.navbarImg} src="../../logoedit.jpg" alt="piranhatechlogo">
                     </img>
                        <div className={styles.navbarTitle}>Piranha Technologies
                          <div className={styles.linkContainer}>
                         <Link className={styles.links} to="/">Home</Link>
                         <Link className={styles.links} to="/Services">Services</Link>   
                         <Link className={styles.links} to="/Contact">Contact Us</Link>
                            <a className={styles.icons} href="https://facebook.com/piranhatechnologies" target="blank"><FontAwesomeIcon icon={faFacebook} size="xs" /></a>
                            <a className={styles.icons} href="https://twitter.com/thepiranhatech" target="blank"><FontAwesomeIcon icon={faTwitter} size="xs" /></a>  
                            <a className={styles.icons} href="https://linkedin.com/piranha-tech/" target="blank"><FontAwesomeIcon icon={faLinkedin} size="xs" /></a>  
                          </div> 
                         </div>
                         <div className={styles.navbarMobile}>
                          Piranha Technologies
                         </div>
                         <div className={styles.burger} onClick={this.toggleList}>
                                <div className={styles.bar1}></div>
                                <div className={styles.bar2}></div>
                                <div className={styles.bar3}></div>
                              </div>  
          </div>
          <div className={styles.mobileRow}>
      { this.state.listopen ? this.openList() : false }
              </div>
        </div>
        
          

);
}
}
export default Header