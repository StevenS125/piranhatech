import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Animated} from "react-animated-css";
import Contact from "../Contact/Contact"


//components
import AdPane from './AdPane'
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
        <Animated animationIn="fadeIn" animationInDelay={1000} isVisible={true}>
        <div className={styles.container}>
            <video autoPlay muted loop className={styles.vidheight}  src="drawing.mp4" type="video/mp4" /> 
        </div>
    
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

export default Advert;
