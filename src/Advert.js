import React, { Component } from 'react';

//components

//styles
import styles from './Advert.module.scss';


//modules




class Advert extends Component {

  render() {
    return (
        <div>
            <h3>What We Offer</h3>
            <AdPane title="Web Development" content="From conception and strategy to design and implementation, Piranha Technologies builds and hosts premium websites for businesses, associations, government, and Fortune 500 companies" icon="fas fa-cloud fa-7x"></AdPane>
            <AdPane title="Integration" content="Piranha Technologies' integrations team has the experience and expertise to seamlessly integrate any third party software that your organization utilizes in order to give your users the best online experience possible." icon="fas fa-puzzle-piece fa-7x"></AdPane>
            <AdPane title="Mobile Solutions" content="With the influx of smartphones, tablets, and everything in between, it's quickly become mandatory that your business is accessible on the go via a mobile site or app." icon="fas fa-mobile fa-7x"></AdPane>
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
            
            <div className={styles.adContainer} onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}>
                <div className={styles.adMain}>
                    <div className={styles.fas}>
                        <i className={this.props.icon}></i>
                    </div>
                    <div className={styles.adTitle}>
                        {this.props.title}
                    </div>
                    {this.state.hover &&
                    <div className={styles.adContent}>
                        {this.props.content}
                    </div>
                    }
                </div>
            </div>

    );
  }
}



export default Advert;
