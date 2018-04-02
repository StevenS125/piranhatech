import React, { Component } from 'react';

//components
import Header from './Header/Header';

//styles
import './App.scss';
import Advert from  './Advert.js'

//modules


class App extends Component {
  render() {
    return (
        <div>
          <Header />
        <Advert>
        </Advert>

        </div>
    );
  }
}

export default App;
