import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//components

//styles
import styles from './Services.module.scss';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';





class Services extends Component {

  componentDidMount(){
    document.title = "Services | Piranha Technologies"
  }

  render() {
    return (
        <div >
                  <Animated animationIn="fadeIn" animationInDelay={0} isVisible={true}>
        <div className={styles.servicesHero}>
        <img src="../../designreal.jpg" alt="piranha" className={styles.serviceImg}/>
        <div className={styles.serviceText}>
              <div><h1>Need Help?</h1></div>
              <div>Piranha Technologies is here</div>
              <div>with our suite of Digital Services</div>
</div>
        </div>
          </Animated>

          <div>
            <div className={styles.servicesHead}>
            <h1>Some of our Services</h1>
            </div>
            <div className={styles.feature}>
              <FontAwesomeIcon icon="code" size="5x" color="green" />
              
      <h4>Web Design</h4>
        <p>
        We sketch and wireframe interfaces focusing on content structure, intuitive UI patterns and simple interactions. We are minimalistic and truly believe that less is more.
        </p>
            </div>

        <div className={styles.feature}>
          <FontAwesomeIcon icon="palette" size="5x" color="green" />
            
            <h4>Logo Design</h4>
              <p>
                We sketch and wireframe interfaces focusing on content structure, intuitive UI patterns and simple interactions. We are minimalistic and truly believe that less is more.
              </p>
        </div>

                        <div className={styles.feature}>
              <FontAwesomeIcon icon={faTwitter} size="5x" color="green" /> &nbsp;
              <FontAwesomeIcon icon={faFacebook} size="5x" color="green" /> &nbsp;
              <FontAwesomeIcon icon={faLinkedin} size="5x" color="green" />
      
      <h4>Social Media Management</h4>
        <p>
Let us help you design your Social Media Pages, marketing campaigns on social media or just plain setting up your social media to reach your desired demographic of clients. 
        </p>
            </div>
            <div className={styles.feature}>
          <FontAwesomeIcon icon="laptop" size="5x" color="green"/>
           
            <h4>Client Support</h4>
              <p>
                We sketch and wireframe interfaces focusing on content structure, intuitive UI patterns and simple interactions. We are minimalistic and truly believe that less is more.
              </p>
        </div>
          </div>


        </div>

    );
  }
}





export default Services;