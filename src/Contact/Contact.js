import React, { Component } from 'react';
import styles from './Contact.module.scss';
import Slideshow from 'react-slideshowz';



class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
<div className={styles.contactContainer}>
      <Slideshow
        autoplay
        slideInterval={4000}
        defaultIndex={1}
        slides={['../../sample.jpg', '../../sample2.jpg', '../../sample3.jpg']}
        effect={'fade'}
        height={'100%'}
        width={'100%'}
      />
      </div>
      <div className={styles.forming}>
      
      <div className={styles.head}>
      <h2>Want to work with us?</h2>
      </div>

        <form action="#0">

<div>
  <input type="text" id="first_name" name="first_name" required placeholder=" " />
  <label htmlFor="first_name">First Name</label>
</div>

<div>
  <input type="text" id="last_name" name="last_name" required placeholder=" " />
  <label htmlFor="last_name">Last Name</label>
</div>

<div>
  <input type="email" id="email" name="email" required placeholder=" " />
  <label htmlFor="email">Email Address</label>
  <div className={styles.requirements}>
    Must be a valid email address.
  </div>
</div>

<div>
  <textarea type="text" id="password" name="password" required placeholder=" " pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{100,}" />
  <label htmlFor="text">Message</label>
  <div className={styles.requirements}>
    Your Message must be atleast 100 characters in length
  </div>
</div>

<input type="submit" value="Contact Us!" />

</form>
        </div>
</div>
    );
  }
}

export default Contact;

