import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { css } from 'aphrodite'

// Beard
import beard from './beard'

const settings = {
    ...beard.settings
    // ...Overwrites here
}

// Compose Beard Style Object
const b = beard.create([ beard.selectors.spacing ], settings)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={ css(b.pv2, b.md.pv4, b.only.sm.xpv) }>
            Controlled by Aphrodite - Padding changes based on browser width.
        </p>
      </div>
    )
  }
}

export default App
