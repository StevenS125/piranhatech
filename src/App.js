import React, { Component } from 'react';

//components
import Header from './Header/Header';

//styles
import styles from './App.module.scss';
import Advert from  './Advert.js'

//modules


class App extends Component {
  render() {
    return (
        <div className={styles.container}>
          <Header />
        <Advert />
    </div>
    );
  }
}

export default App;
