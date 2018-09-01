import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import {Animated} from "react-animated-css";


//components

//styles
import styles from './Advert.module.scss';





class Advert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            services: [
                {
                    title: "Social Media",
                    bgUrl: "social_med.jpg",
                    logoUrl: "",
                    h1_txt: "Social Media",
                    h6_txt: "Something else but smaller",
                    p_txt: "this is a lot of text that is designed to be a paragraph. I hope this is enough because i have typed a lot og shit",
                    detailUrl: ""

                },
                {
                    title: "Web Development",
                    bgUrl: "code.jpg",
                    logoUrl: "http://simpleicon.com/wp-content/uploads/computer-5.png",
                    h1_txt: "Web Development",
                    h6_txt: "Something else but smaller",
                    p_txt: "this is a lot of text that is designed to be a paragraph. I hope this is enough because i have typed a lot og shit",
                    detailUrl: ""

                }
            ]
        }
        
      }

    

  render() {
    return (
<div>
        <div id="myNav" className={styles.container}>
        <Animated animationIn="bounceInLeft" animationInDelay={0} isVisible={true}>
        <img src="../../home_5_30.jpg" alt="piranha" className={styles.container}/>
        <Animated animationIn="fadeIn" animationInDelay={1000} isVisible={true}>
    <div className={styles.heroSlogan}><span>Let us Help your Business<br></br> </span> 
    <span>with our IT Solutions <br></br></span> 
   <Link to="/contact">
    <button className={styles.heroButton}>Learn How</button>
    </Link>
    </div>
    </Animated>
    </Animated>
            </div>





        <div className={styles.advertcontainer}>
            
            <AdPane service= {this.state.services[0]}></AdPane>
            <AdPane service= {this.state.services[1]}></AdPane>
            <AdPane service= {this.state.services[0]}></AdPane>
           
            
           
        </div>
</div>
    );
  }
}

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
        <ScrollAnimation animateIn="bounceInRight">
            <div className={styles.adContainer} onClick={this.toggleHover} style={{backgroundImage: "url("+ this.props.service.bgUrl+ ")"}}>
                
                <img className={styles.logo} alt="services" src={this.props.service.logoUrl}></img>
                <div className={styles.shader}>
                <h1>{this.props.service.h1_txt}</h1>
                <h6>{this.props.service.h6_txt}</h6>
                <p>{this.props.service.p_txt}</p>
                <button className="btn btn-info">button</button>
                </div>
            </div>
        </ScrollAnimation>

    );
  }
}



export default Advert;
