import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { StyleSheet, css } from 'aphrodite'

// Beard
import beard from './beard'

const settings = {
    ...beard.settings
    // Overwrites here
}

// Compose Beard Style Object
const b = StyleSheet.create({
    ...beard.spacing({ breakpoints: settings.breakpoints })
    // ...fonts({ breakpoints: settings.breakpoints })
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
            Controlled by Aphrodite - Padding changes based on browser width.
        </p>
      </div>
    )
  }
}

export default App
