import React, { Component } from "react"
import { Router, Route, Link } from 'react-router'
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import Copy from "../components/elements/Copy"
import Code from "../components/elements/Code"

/**
 * Overview Page
 */
const snippet =
`import React, { Component } from "react"

// ES6 Modules and CommonJS compatible
import Neckbeard from "neckbeard"

const settings = {
    ...Neckbeard.defaultSettings
    // Overwrite settings here
}

// Instantiates Neckbeard and returns a function
// that accepts a string of approved helpers.
const nb = Neckbeard.create(settings)

const Button = ({ children }) => (
    <button className={ nb("bg1 tcw br3 ft4") }>
        { children }
    </button>
)

export default Button
`

const snippet2 = `<div className={ nb("brdr1 bc1 pv1 tac mb2") }>.brdr1.bc1.pv1</div>`

const snippet3 = JSON.stringify(Neckbeard.defaultSettings.helpers.border, null, '    ')

const Border = () => (
    <div>
        <H1>Border</H1>
        <H2>Options</H2>
        <table className={ nb("w100 mb2 ft4 tcg60 lh2 sans") }>
            <thead>
                <tr className={ nb("brdr1--bottom bcg10 bgg05") }>
                    <th className={ nb("pv1 ph1 tal fwsemibold ph1") }>Class</th>
                    <th className={ nb("pv1 ph1 tal fwsemibold ph1") }>Purpose</th>
                </tr>
            </thead>
            <tbody>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("pv1 ph1") }><Code>.xbrdr</Code></td>
                    <td className={ nb("pv1 ph1") }>Remove the border from an element</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("pv1 ph1") }><Code>.brdr1</Code></td>
                    <td className={ nb("pv1 ph1") }>Add a border to all sides of an element</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("pv1 ph1") }><Code>.brdr1--top</Code></td>
                    <td className={ nb("pv1 ph1") }>Add a border to the top of an element</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("pv1 ph1") }><Code>.brdr1--right</Code></td>
                    <td className={ nb("pv1 ph1") }>Add a border to the right side of an element</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("pv1 ph1") }><Code>.brdr1--bottom</Code></td>
                    <td className={ nb("pv1 ph1") }>Add a border to the bottom of an element</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("pv1 ph1") }><Code>.brdr1--left</Code></td>
                    <td className={ nb("pv1 ph1") }>Add a border to the left side of an element</td>
                </tr>
            </tbody>
        </table>
        <H2>Example</H2>
        <Highlight className={ nb("ph2 pv2 mb2") }>
            { snippet2 }
        </Highlight>

        <div className={ nb("brdr1 bc1 pv1 tac mb2") }>.brdr1.bc1.pv1</div>

        <H2>Default Settings</H2>
        <div className={ nb("lh4 mb2") }>
            <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
            <Highlight className={ nb("ph2 pv2") }>
                {"// Neckbeard.defaultSettings.helpers.border \n" }
                { snippet3 }
            </Highlight>
        </div>
    </div>
)

export default Border
