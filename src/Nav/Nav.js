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
                      <NavLink href="#/"><strong>Home</strong></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#/bio"><strong>About us</strong></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#/Services"><strong>Services</strong></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#/Contact"><strong>Contact Us</strong></NavLink>
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