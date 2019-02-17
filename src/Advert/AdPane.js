import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './Advert.module.scss';

class AdPane extends Component {
    
    constructor(props) {
        super(props)
        this.state = {hover: false}
        this.toggleHover = this.toggleHover.bind(this)
      }

    toggleHover(){
        this.setState({hover: !this.state.hover})
      }
       

  render() {
    return (
        <ScrollAnimation animateIn="bounceInRight" animateOnce={true} animatePreScroll={false}>
            <div className={styles.adContainer} onClick={this.toggleHover} style={{backgroundImage: "url("+ this.props.service.bgUrl+ ")"}}>
                
                
                <div className={styles.shader}>
                <h2>{this.props.service.h1_txt}</h2>
                <h6>{this.props.service.h6_txt}</h6>
                <Link to="/services">
                        <button className={styles.btn}>View</button>
                </Link>
                {/* <div className={styles.btn}><a href="#/services" >View</a></div> */}
                </div>
            </div>
        </ScrollAnimation>

    );
  }
}

export default AdPane