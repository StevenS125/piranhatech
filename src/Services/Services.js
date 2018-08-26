import React, { Component } from 'react';

//components

//styles
import styles from './Services.module.scss';





class Services extends Component {

  render() {
    return (
        <div >
            <div className={styles.filler}>
            <div className={styles.title}>
            <h1>Services, Training &<br/>Development</h1>
            </div>
            </div>
            
            <div className={styles.seminars}>
              <h2>Youth Seminars</h2>
              <div className={styles.semi}>
                <h3>Beyond the Block</h3>
                <p>This workshop is designed to challenge young adults to think outside the box and learn ways to "hustle" legally.  Kevin will take youth on a journey of self discovery that will inspire youth to look toward their future with excitement and anticipation.  This workshop is interactive and enlightening.</p>
                <h5>Objectives</h5>
                <ul>
                  <li>
                  Discover youth’s talents and understanding each individual’s worth
                  </li>
                  <li>
                  Develop a plan for the immediate and not so immediate future
                  </li>
                  <li>
                  Discover ways to turn a talent or hobbie into a legal “hustle”</li>
                </ul>
              </div>
              <div className={styles.semi}>
                <h3>Discovering Talents</h3>
                <p>During this workshop, Kevin reflects upon personal experiences, showing young people how to take ownership over their lives.  From his experiences, Kevin developed the “Holmes 3 Principles of Success: Education, Common Sense and Courage”.  By explaining the 3 principles and how they relate to each other, youth participants will learn how to maximize their full potential. </p>
                <h5>Objectives</h5>
                <ul>
                  <li>
                  Engage youth in a dialog that leads to discovering their talents
                  </li>
                  <li>
                  Turn negatives in to positives
                  </li>
                  <li>
                  Teach youth how to employ the “3 Principles of Success”</li>
                </ul>
              </div>
            </div>
            <div className={styles.seminars}>
            <h2>Personal & Professional Development Seminars</h2>
            <div className={styles.semi}>
              <h3>Make Your Job Work for YOU!</h3>
              <p>The purpose of this workshop is to inspire people to make the absolute most of their job/career. Going to work each day is not supposed to be a dreaded experience. Turn your frown into a smile by finding the hidden treasures in the workplace.</p>
              <h5>Objectives</h5>
              <ul>
                <li>
                Learn how professional growth translates into personal growth
                </li>
                <li>
                Learn how to make your job work for you!
                </li>
                <li>
                Develop a great attitude towards going to work each day</li>
              </ul>
            </div>
            <div className={styles.semi}>
              <h3>More Money</h3>
              <p>Are you afraid to take a chance with your money?  Are you interested in buying a home, but not sure if you can afford it? Ever consider investing in real estate but not sure when or where to start? Let Kevin guide you. With Kevin's Mortgage and Home Improvement experience, he will help you to make an informed decision about whether the time is right for you to make some major money decisions for yourself and your family.</p>
              <h5>Objectives</h5>
              <ul>
                <li>
                Develop a financial plan for you and your family
                </li>
                <li>
                Find out what lenders want to see in a potential home buyer
                </li>
                <li>
                Learn ways to make more money out of your money!</li>
              </ul>
            </div>
          </div>
        </div>

    );
  }
}





export default Services;