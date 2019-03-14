import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Jumbo from './component/Jumbo/Jumbo';
import Cerdas from './component/Cerdas/Cerdas';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container">
        <Jumbo />
        </div>
        <Cerdas />
      </div>
    );
  }
}

export default App;
