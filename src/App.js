import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// Beard
import neckbeard from './neckbeard'

const settings = {
    ...neckbeard.defaultSettings
    // ...Overwrites here
}

// Compose Beard Style Object
const b = neckbeard.create(neckbeard.all(), settings)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={ b.css('pv2 md-pv4 only-sm-xpv ft3 md-ft6 lg-ft8') }>
            Controlled by Aphrodite - Padding changes based on browser width.
        </p>
      </div>
    )
  }
}

export default App
