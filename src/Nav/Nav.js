import React, { Component } from 'react';
import styles from "./Nav.module.scss";
import { Link } from 'react-router-dom';
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
                        arrayList: ['Piranha Technologies'],
                        open: false,
                        in: false,
                        isOpen: false
                };
}

toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }


toggleEnterState = () => {
        this.setState({ in: true });
      }

openList = () => {
        return (
          <ul style={{ listStyle: 'none'}}>
            <li onClick={ this.closeList }><Link className={styles.links} to="/Contact">Contact</Link></li>
            <li onClick={ this.closeList }><Link className={styles.links} to="/Services">Services</Link></li>  
       <li onClick={ this.closeList }><Link className={styles.links}  to="/Bio">About</Link></li>
       <li onClick={ this.closeList }><Link className={styles.links} to="/">Home</Link></li>  
          </ul>
        );
      }

      closeList = () => {
              this.setState({
                      open: false
              });
      }
    
      openDropDown = (event) => {
        console.log(event.target.innerText);
        if (!this.state.open) {
                this.setState({
                        open: true,
                      });
        } else {
                this.closeList()
        }
        
      }

      openBurger = (x) => {
              x.classList.toggle('change');
      }


render() {



        return (
        <div>
                <Animated animationIn="bounceInLeft" animationInDelay={0} isVisible={true}>
                <Navbar color="faded" light expand="md">
                <NavbarToggler onClick={this.toggle} />
                <NavbarBrand href="/"><strong>Piranha Technologies</strong></NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="#/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#/bio">About Us</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#/Services">Services</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#/Contact">Contact Us</NavLink>
                    </NavItem>
                    <NavItem>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
              </Animated>
            </div>









//     <div id="myNav" className={styles.container}>
//         <div className={styles.Nav}> 
//         <div className={styles.masthead}>
//         <Animated animationIn="bounceInLeft" animationInDelay={250} isVisible={true}>
//         {/* <img src="../../LOGO.jpg" alt="Straight talk today logo" className={styles.logoimg}/> */}
// <div>Piranha Technologies</div> 
//                 <Link className={styles.links} to="/Contact">Contact</Link> 
//                 <Link className={styles.links} to="/Services">Services</Link>  
//         <Link className={styles.links}  to="/Bio">About</Link>
//         <Link className={styles.links} to="/">Home</Link>  
//         </Animated>
//         </div>
// <div className={styles.menurow}>
//                                 </div>
//         </div>

//               <div className={styles.navTitle}>
//               <div onClick={ this.openDropDown } className={styles.burgContainer}>
//   <div className={styles.bar1}></div>
//   <div className={styles.bar2}></div>
//   <div className={styles.bar3}></div>
//           {
//           this.state.arrayList.map((name, index) => {
//             return (<div key={`${name}-${index}`}>
//             <span>
//             </span>
//               { this.state.open ? this.openList() : false }
//           </div>);
//           })
//         } 
//   </div>
//         {
//           this.state.arrayList.map((name, index) => {
//             return (<div key={`${name}-${index}`}>
//             <span >
//               { name }
//             </span>
//           </div>);
//           })
//         } 
//       </div>
//         </div>
);
}
}
export default Header