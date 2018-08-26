import React, { Component } from 'react';
import styles from "./Nav.module.scss";
import { Link } from 'react-router-dom';



class Header extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        arrayList: ['Straight Talk Consulting Inc'],
                        open: false
                };
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
    <div id="myNav" className={styles.container}>

        <div className={styles.Nav}> 
        
        <div className={styles.masthead}>
        <img src="../../LOGO.jpg" alt="Straight talk today logo" className={styles.logoimg}/>
        Straight Talk Consulting Inc
                </div> 
                <Link className={styles.links} to="/Contact">Contact</Link> 
                <Link className={styles.links} to="/Services">Services</Link>  
        <Link className={styles.links}  to="/Bio">About</Link>
        <Link className={styles.links} to="/">Home</Link>  
<div className={styles.menurow}>
                                </div>
        </div>

              <div className={styles.navTitle}>
              <div onClick={ this.openDropDown } className={styles.burgContainer}>
  <div className={styles.bar1}></div>
  <div className={styles.bar2}></div>
  <div className={styles.bar3}></div>
          {
          this.state.arrayList.map((name, index) => {
            return (<div key={`${name}-${index}`}>
            <span>
            </span>
              { this.state.open ? this.openList() : false }
          </div>);
          })
        } 
  </div>
        {
          this.state.arrayList.map((name, index) => {
            return (<div key={`${name}-${index}`}>
            <span >
              { name }
            </span>
          </div>);
          })
        } 
      </div>
        </div>
);
}
}
export default Header