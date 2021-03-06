import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';


//components
import Contacter from './Contacter/Contacter';
import Footer from './Footer/Footer';
import Bio from './Bio/Bio';
import Nav from './Nav/Nav';
import Services from  './Services/Services'
import Advert from  './Advert/Advert';
import Tweets from  './Tweets/Tweets';


//styles
import styles from './App.module.scss';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'

import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { faPalette, faCode, faLaptop } from '@fortawesome/free-solid-svg-icons'


library.add(faPalette, faCode, faLaptop, faFacebook, faTwitter, faLinkedin )


class AdEvents extends Component {
  render() {
    return (
    <div>
    <Advert></Advert>
    <Tweets></Tweets>

    </div>
    );}
}

//modules


class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.container}>
        <Nav />
          <Switch>
        <Route exact path="/" component={AdEvents}/>
        <Route path="/contact" component={Contacter}/>
        <Route path="/services" component={Services}/>
        <Route path="/bio" component={Bio}/>
        </Switch>

        <Footer />
    </div>
    </Router>
    );
  }
}

export default App;
