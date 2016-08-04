import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { StyleSheet, css } from 'aphrodite';

// Beard
import spacing from './beard/spacing'
import config from './beard/config'

// Compose Beard Style Object
const b = StyleSheet.create({
    ...spacing({ breakpoints: config.breakpoints })
    // ...fonts({ breakpoints: config.breakpoints })
    // ...etc and so on
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={ css(b.pv1, b.md_pv3, b.only_sm_xmv) }>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
