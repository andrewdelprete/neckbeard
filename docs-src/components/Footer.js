import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'

/**
 * Footer
 */
const Footer = () => (
    <footer className={ nb("brdr1--top bcg10 pv3 sans") }>
        <div className={ nb("ph2") }>
            <div className={ nb("flex sm-fdc md-fdr md-jcsb") }>
                <div className={ nb("mb1") }>
                    <p className={ nb("ft4 tcg40") }><span className={ nb("tc1") }>©</span> 2016 Andrew Del Prete</p>
                </div>
                <p className={ nb("ft4 tcg40") }>
                    <a href="https://github.com/andrewdelprete/neckbeard" className={ nb("tc5 xtd h-tc1") }>View on Github.</a>
                </p>
            </div>
        </div>
    </footer>
)

export default Footer
