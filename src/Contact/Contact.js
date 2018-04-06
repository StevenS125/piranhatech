import React, { Component } from 'react';
import styles from './Contact.module.scss';
import Slideshow from 'react-slideshowz';



class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      fname: '',
      lname: '',
      email: '',
      msg: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state)
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const pData = this.state;
    console.log(JSON.stringify(pData))
    console.log(pData)
    fetch('https://ptemailserver.herokuapp.com/', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pData)
  }).then(function(response) {
    console.log( response.json());
  })

  this.state = {
      
    fname: '',
    lname: '',
    email: '',
    msg: ''
  }

  document.getElementById('form').reset()
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

        <form id="form" onSubmit = {
          this.onSubmit
        } >

<div>
  <input type="text" id="first_name" name="fname" required placeholder=" " onChange = {
    this.onChange
  } />
  <label htmlFor="first_name">First Name</label>
</div>

<div>
  <input type="text" id="last_name" name="lname" required placeholder=" " onChange = {
    this.onChange
  } />
  <label htmlFor="last_name">Last Name</label>
</div>

<div>
  <input type="email" id="email" name="email" required placeholder=" " onChange = {
    this.onChange
  } />
  <label htmlFor="email">Email Address</label>
  <div className={styles.requirements}>
    Must be a valid email address.
  </div>
</div>

<div>
  <textarea type="text" id="password" name="msg" required placeholder=" " onChange = {
    this.onChange
  } pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{100,}" />
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

