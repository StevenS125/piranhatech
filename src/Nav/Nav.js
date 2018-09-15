import React, { Component } from 'react';
import styles from "./Nav.module.scss";
import {Animated} from "react-animated-css";
import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink} from 'reactstrap';
      


class Header extends Component {
        constructor(props) {
                super(props);
                this.toggle = this.toggle.bind(this);
                this.state = {
                        isOpen: false
                };
}

toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }



render() {



        return (
        <div>
                <Animated animationIn="bounceInLeft" animationInDelay={0} isVisible={true}>
                
                <Navbar color="faded" className={styles.navbarcolor} light expand="md">
                <NavbarBrand href="/">
                <img src="../../logoedit.jpg" alt="Straight talk today logo" className={styles.logoimg}/>
                <div className={styles.headText}>
                Piranha Technologies
                </div>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} className={styles.navOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="#/"><div className={styles.linkStyles}>Home</div></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#/bio"><div className={styles.linkStyles}>Who We Are</div></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#/Services"><div className={styles.linkStyles}>Services</div></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#/Contact"><div className={styles.linkStyles}>Contact Us</div></NavLink>
                    </NavItem>
                    <NavItem>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
              </Animated>
            </div>

);
}
}
export default Header