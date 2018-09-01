import React, { Component } from 'react';
import styles from './Footer.module.scss';



export default class Contact extends Component {


    render() {
        return (
          <div className={styles.footContainer}>
          <br></br>
          <div className={styles.copyright}>
          &#169; Piranha Technologies
              </div>
              <a className={styles.link} href="localhost:3000/">Home</a>
              <a className={styles.link} href="localhost:3000/Contact">Contact</a>
              </div>
        )
        }
    }

