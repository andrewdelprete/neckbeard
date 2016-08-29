import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'

/**
 * Main App 
 */
const App = React.createClass({
    render() {
        return (
            <div>
                <h1>Neckbeard</h1>
                <div className={ nb('frame') }>
                    <div className={ nb('blk3 bgg05') }>
                        <nav>
                            <ul>
                                <li><Link to="/">Overview</Link></li>
                                <li><Link to="/border">Border</Link></li>
                                <li><Link to="/border-radius">Border Radius</Link></li>
                                <li><Link to="/colors">Colors</Link></li>
                                <li><Link to="/display">Display</Link></li>
                                <li><Link to="/flexbox">Flexbox</Link></li>
                                <li><Link to="/float">Float</Link></li>
                                <li><Link to="/fonts">Font Size</Link></li>
                                <li><Link to="/grid">Grid</Link></li>
                                <li><Link to="/letter-spacing">Letter Spacing</Link></li>
                                <li><Link to="/line-height">Line Height</Link></li>
                                <li><Link to="/misc">Misc</Link></li>
                                <li><Link to="/overflow">Overflow</Link></li>
                                <li><Link to="/position">Position</Link></li>
                                <li><Link to="/spacing">Spacing</Link></li>
                                <li><Link to="/text-alignment">Text Alignment</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={ nb('blk9') }>
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
})

export default App
