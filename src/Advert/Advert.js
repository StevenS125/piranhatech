import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import {Animated} from "react-animated-css";
import Contact from "../Contact/Contact"


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
                    bgUrl: "soc4.jpg",
                    logoUrl: "",
                    h1_txt: "Social Media",
                    h6_txt: "Maximizing the potential of your social media presence",
                    detailUrl: ""

                },
                {
                    title: "Web Development",
                    bgUrl: "dev3.jpg",
                    logoUrl: "http://simpleicon.com/wp-content/uploads/computer-5.png",
                    h1_txt: "Web Development",
                    h6_txt: "Designing and building modern web solutions for emerging businesses",
                    detailUrl: ""

                },
                {
                    title: "Logo and Graphic Design",
                    bgUrl: "logo2.jpg",
                    logoUrl: "http://simpleicon.com/wp-content/uploads/computer-5.png",
                    h1_txt: "Logo and Graphic Design",
                    h6_txt: "Raising the standard of your brand aesthetic",
                    detailUrl: ""

                }
            ]
        }
        
      }

      componentDidMount(){
        document.title = "Piranha Technologies"
      }
    

  render() {
    return (
<div>
        <div id="myNav">
        <Animated animationIn="fadeIn" animationInDelay={0} isVisible={true}>
        <div className={styles.mobileHero}>
        <div>
       <h1>Welcome To</h1>
       <div className={styles.polyMobile}>
       Success
       </div>

       <div className={styles.subMobile}>
           Let us help your business
       </div>
       <div className={styles.subMobile}>With its Web Presence          
       </div>
       <div className={styles.subMobile}><strong>NOW</strong></div>
       
        </div>

               <Contact />

        </div>
        <video autoPlay muted loop className={styles.container}  src="blurpeep.mp4" type="video/mp4">

    </video>
        {/* <img src="../../homepage2.jpg" alt="piranha" className={styles.container}/> */}
        <Animated animationIn="fadeIn" animationInDelay={1000} isVisible={true}>
    <div className={styles.heroSlogan}>
    <h1>Drive your Company into the</h1>
        <h1> Ecommerce World</h1>
    <span>Let Piranha Technologies Help your Business<br></br> </span> 
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
            <AdPane service= {this.state.services[2]}></AdPane>    
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
        <ScrollAnimation animateIn="bounceInRight" animateOnce={true} animatePreScroll={false}>
            <div className={styles.adContainer} onClick={this.toggleHover} style={{backgroundImage: "url("+ this.props.service.bgUrl+ ")"}}>
                
                
                <div className={styles.shader}>
                <h2>{this.props.service.h1_txt}</h2>
                <h6>{this.props.service.h6_txt}</h6>
                <div className={styles.btn}><a href="#/services" >View</a></div>
                </div>
            </div>
        </ScrollAnimation>

    );
  }
}



export default Advert;
