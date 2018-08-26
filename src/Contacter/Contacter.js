import React, { Component } from 'react';
import styles from './Contacter.module.scss';




class Contacter extends Component {


  render() {
    return (
        <div>
            <div className={styles.herocontact}>
            <div className={styles.heroleft}>
            Contact us by mail:<br></br>
            128-08 Inwood St.<br></br>
            Jamaica NY 11436

           
            </div>
            
            <div className={styles.heroright}>
            Connect with Kevin Holmes for media opportunities, general questions or comments using the form below 
              </div> 
                </div>
            </div>

    );
}
}

export default Contacter;