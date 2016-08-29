import React, { Component } from "react"
import { Router, Route, Link } from "react-router"
import Highlight from "react-highlight"
import Heading1 from "../components/Headings/Heading1"

/**
 * Overview Page
 */
const snippet1 =
`import React, { Component } from "react";
import Neckbeard from "neckbeard"

const settings = {
    ...Neckbeard.defaultSettings
    // Overwrite settings here
}

const nb = Neckbeard.create(settings)

class App extends Component {
    render() {
        return (
            <div className={ nb("flex jcc aic absolute h100 w100") }>
                <p className={ nb("ft5 tc1 tac fwthin") }>
                    Neckbeard
                </p>
            </div>
        )
    }
}

export default App
`
const Overview = () => (
    <div>
        <Heading1>Overview</Heading1>
        <div className={ nb("lh4") }>
            <Highlight className={ nb("ph2 pv2") }>
                { snippet1 }
            </Highlight>
        </div>
    </div>
)

export default Overview
