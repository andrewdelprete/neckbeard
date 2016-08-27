import React, { Component } from 'react'
import * as nb from '../../src'

const settings = {
    ...nb.defaultSettings
    // ...Overwrites here
}

// Compose Neckbeard Selector Object
const css = nb.create(settings)

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
                <p className={ css('ft3 md-ft6 lg-ft8 sans fwthin') }>
                    Fonts
                </p>
                <p className={ css('brdr2 br4') }>
                    Border with Radius
                </p>
                <p className={ css('dn lg-db') }>
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
                <div>
                    <div className={ css('fl') }>Float Left</div>
                    <div className={ css('fr') }>Float Right</div>
                </div>
                <p className={ css('bgg10 tc1 lh2') }>
                    Line Height 2
                </p>
                <p className={ css('tac') }>
                    Text Alignment
                </p>
                <p className={ css('absolute pin-right') }>
                    Position
                </p>
                <p className={ css('ofx') }>
                    Overflow
                </p>
                <p className={ css('clearfix dim') }>
                    Misc
                </p>
                <p className={ css('zi1') }>
                    Z Index
                </p>
                <div className={ css('frame example-frame mb3') }>
                    <div className={ css('blk md-blk6 example-blk') }>
                        <div className={ css('pv2 ph2 bgg10 pos-rel') }>.blk.md-blk6</div>
                    </div>
                    <div className={ css('blk md-blk6 example-blk') }>
                        <div className={ css('pv2 ph2 bgg10 pos-rel') }>.blk.md-blk6</div>
                    </div>
                </div>
                <div className={ css('frame example-frame mb3') }>
                    <div className={ css('blk md-blk--offset3 example-blk') }>
                        <div className={ css('pv2 ph2 bgg10 pos-rel') }>.blk.md-blk--offset3</div>
                    </div>
                </div>
                <div className={ css('frame frame--stay example-frame mb6') }>
                    <div className={ css('blk3 md-blk--push9 example-blk') }>
                        <div className={ css('pv2 ph2 bgg10 pos-rel') }>.blk3.md-blk--push9</div>
                    </div>
                    <div className={ css('blk9 md-blk--pull3 example-blk') }>
                        <div className={ css('pv2 ph2 bgg10 pos-rel') }>blk9.md-blk--pull3</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
