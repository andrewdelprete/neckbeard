import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'

/**
 * Main App
 */
const App = React.createClass({
    render() {
        return (
            <div>
                <Header />
                <div className={ nb("wrap") }>
                    <div className={ nb('frame') }>
                        <div className={ nb('blk md-blk2 bgg05 pv2') }>
                            <Nav />
                        </div>
                        <div className={ nb('blk md-blk10 pv2') }>
                            { this.props.children }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
})

export default App
