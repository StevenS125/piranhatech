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
            <div className={styles.adContainer}>
                <div className={styles.adMain}>
                <div>
                        <i className="fas fa-cloud fa-7x"></i>
                    </div>
                    <div className={styles.adTitle}>
                        Web Design and Development
                    </div>
                </div>
                <div className={styles.adMain}>
                <div>
                        <i className="fas fa-puzzle-piece fa-7x"></i>
                    </div>
                    <div className={styles.adTitle}>
                    
                        Integration
                    </div>
                </div>
                <div className={styles.adMain}>
                    <div>
                        <i className="fas fa-mobile fa-7x"></i>
                    </div>
                    <div className={styles.adTitle}>
                        Mobile Solutions
                    </div>
                </div>
            </div>

        </div>

    );
  }
}

export default Advert;
