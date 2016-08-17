import React, { Component } from 'react'
import * as nb from '../src'

const settings = {
    ...nb.defaultSettings
    // ...Overwrites here
}

// Compose Beard Style Object
const css = nb.create(nb.all(), settings)

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Neckbeard</h2>
                </div>
                <p className={ css('pv2 md-pv4 only-sm-xpv') }>
                    Spacing
                </p>
                <p className={ css('ft3 md-ft6 lg-ft8') }>
                    Fonts
                </p>
                <p className={ css('brdr2 br4') }>
                    Border with Radius
                </p>
                <p className={ css('dn lg-db only-sm-db') }>
                    Display None until large
                </p>
                <p className={ css('dib') }>
                    Display Inline Block
                </p>
                <p className={ css('bgg10 tc1') }>
                    Colors Inline Block
                </p>
                <div>
                    <div className={ css('flex aic jcc only-md-jcfe') }>Flex Stuff</div>
                </div>
            </div>
        )
    }
}

export default App
