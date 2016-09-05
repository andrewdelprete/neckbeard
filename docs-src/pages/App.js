import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'

/**
 * Main App
 */
export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { showMenu: false }

        this.handleMenuToggle = this.handleMenuToggle.bind(this)
    }

    componentWillReceiveProps() {
        this.state.showMenu = false
    }

    handleMenuToggle() {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render() {
        const mobileMenuClasses = this.state.showMenu
            ? "blk db lg-dn pv2"
            : "dn"

        return (
            <div>
                <Header onMenuToggle={ this.handleMenuToggle } />
                <div className={ nb("wrap") }>
                    <div className={ nb('frame') }>
                        <div className={ nb(mobileMenuClasses) }>
                            <Nav onMenuToggle={ this.handleMenuToggle } />
                        </div>
                        <div className={ nb('blk md-blk2 lg-db dn bgg05 pv2') }>
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
}
