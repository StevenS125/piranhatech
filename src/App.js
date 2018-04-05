import React, { Component } from 'react';

//components
import Header from './Header/Header';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Burgerman from './Contact/Burgerman';

//styles
import styles from './App.module.scss';
import Advert from  './Advert/Advert'

//modules


class App extends Component {
  render() {
    return (
        <div className={styles.container}>
          <Header />
        <Advert />
        <Contact />
        <Footer />
        <Burgerman />
    </div>
    );
  }
}

export default App;
