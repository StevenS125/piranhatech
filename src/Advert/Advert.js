import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//components

//styles
import styles from './Advert.module.scss';





class Advert extends Component {

  render() {
    return (
<div>
        <div id="myNav" className={styles.container}>
        <img src="../../homehero.JPG" alt="piranha" className={styles.container}/>
    <div className={styles.heroSlogan}>Have Kevin Holmes motivate your audience at your next event &nbsp; &nbsp; &nbsp;
   
   <Link to="/contact">
    <button className={styles.heroButton}>Learn How</button>
    </Link>
    </div>
            </div>




        <div className={styles.advertcontainer}>
            <h3>What We Offer</h3>
            <AdPane title="Motivational Speaking" content={["embracing your handicap", "reaching your full potential", "discovering who you are",  "identifying your strengths and weaknesses"]}
            icon="fas fa-chart-line fa-7x"></AdPane>
            <AdPane title="Life Coaching 1 on 1" content={["Taking control of your finances", "becoming in tune with your abilities", "knowing your worth", "Building strong relationships", "Being compatable with who you are"]} icon="fas fa-clipboard fa-7x"></AdPane>
            <AdPane title="Services training and development" content={["Real estate investment", "planning for your future", "money management"]} icon="fas fa-shipping-fast fa-7x"></AdPane>
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
            
            <div className={styles.adContainer} onClick={this.toggleHover}>
                <div className={styles.adMain}>
                    <div className={styles.fas}>
                        <i className={this.props.icon}></i>
                    </div>
                    <div className={styles.adTitle}>
                        {this.props.title}
                    </div>
                    {this.state.hover &&
                    <div className={styles.adContent}>
                    {this.props.content.map((item, index) => (
                        <li>{item}</li>
                    ))}
                    </div>
                    }
                </div>
            </div>

    );
  }
}



export default Advert;
