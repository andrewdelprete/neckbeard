import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'

/**
 * Header
 */
const Header = () => (
    <div className={ nb("bg1 flex aic acc wrap") }>
        <div className={ nb("tc5 fwthin uppercase pv2 mr2 ft6 sans ls3") }>
            <Link to="/" className={ nb("xtd")}>Neckbeard</Link>
        </div>
        <div className={ nb("tc5 sm-dn md-db fwsemibold ft3 ls1 sans") }>An Atomic CSS in JS Framework for people with better things to do</div>
    </div>
)

export default Header
