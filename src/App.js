import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Contacter from './Contacter/Contacter';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Bio from './Bio/Bio';
import Nav from './Nav/Nav';
import Events from './Events/Events';
import Services from  './Services/Services'
import Advert from  './Advert/Advert';


//styles
import styles from './App.module.scss';

class AdEvents extends Component {
  render() {
    return (
    <div>
    <Advert></Advert>
    <Events></Events>
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
        <Contact />
        <Footer />
    </div>
    </Router>
    );
  }
}

export default App;
