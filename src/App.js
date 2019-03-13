import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Jumbo from './component/Jumbo';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbo />
      </div>
    );
  }
}

export default App;
