import React, { Component } from 'react';
import styles from './Contact.module.scss';



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
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state to email
    const pData = this.state;
    fetch('https://ptmailer.herokuapp.com/api/', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pData)
  }).then(function(response) {
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
        {/* beginning of form */}
      <div className={styles.forming}>
      
      <div className={styles.head}>
      <div className={styles.contactRight}>Lets Build something together</div>
      </div>

        <form id='form' onSubmit= {this.onSubmit}>

<div>
  <input onChange={this.onChange} type="text" id="first_name" name="fname" required placeholder=" " />
  <label htmlFor="first_name">First Name</label>
</div>

<div>
  <input onChange={this.onChange} type="text" id="last_name" name="lname" required placeholder=" " />
  <label htmlFor="last_name">Last Name</label>
</div>

<div>
  <input onChange={this.onChange} type="email" id="email" name="email" required placeholder=" " />
  <label htmlFor="email">Email Address</label>
  <div className={styles.requirements}>
    Must be a valid email address.
  </div>
</div>

<div>
  <textarea onChange={this.onChange} type="text" id="password" name="msg" required placeholder=" " pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{100,}" />
  <label htmlFor="text">Message</label>
  <div className={styles.requirements}>
    Your Message must be atleast 100 characters in length
  </div>
</div>

<input type="submit" value="Contact Us!" />

</form>
        </div>
        <br></br>
</div>
    );
  }
}

export default Contact;

