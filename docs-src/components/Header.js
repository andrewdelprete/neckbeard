import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'

/**
 * Header
 */
export default class Header extends React.Component {
    componentDidMount() {
        const taglines = ["Javascript all the things", "Your kids will thank us", "The Future", "Pushing it to the next level for future generations"]
        const tagline = document.getElementById('tagline')

        tagline.innerHTML = taglines[Math.floor(Math.random()*taglines.length)]
    }

    render() {
        return (
            <div className={ nb("bg1 flex aic acc wrap") }>
                <Link to="/" className={ nb("fwthin uppercase pv2 mr2 ft6 sans ls3 xtd tcb dim")}>Neckbeard</Link>
                <div className={ nb("tcb sm-dn md-db fwsemibold ft3 ls1 sans") } id="tagline">Default</div>
            </div>
        )
    }
}
