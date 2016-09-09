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

const snippet2 = `<div className={ nb("brdr1 br3 bc1 pv1 tac mb2") }>.brdr1.br3.bc1.pv1.mb2</div>`

const BorderRadius = () => (
    <div>
        <H1>
            Border Radius
            <span className={ nb("tc1 ft3 capitalize fw3 ml1") }>Responsive</span>
        </H1>
        <H2>Options</H2>
        <table className={ nb("w100 mb2 ft4 tcg60 lh2 sans") }>
            <thead>
                <tr className={ nb("brdr1--bottom bcg10 bgg05") }>
                    <th className={ nb("pa1 tal fwsemibold ph1") }>Border Direction</th>
                    <th className={ nb("pa1 tal fwsemibold ph1") }>Class Prefix</th>
                    <th className={ nb("pa1 tal fwsemibold ph1") }>Default Amounts</th>
                </tr>
            </thead>
            <tbody>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Border Radius</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>.br</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>0-10</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Border Left Radius</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>.blr</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>0-10</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Border Right Radius</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>.brr</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>0-10</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Border Top Left Radius</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>.btlr</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>0-10</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Border Top Right Radius</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>.btrr</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>0-10</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Border Bottom Left Radius</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>.bblr</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>0-10</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Border Bottom Right Radius</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>.bbrr</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>0-10</td>
                </tr>
            </tbody>
        </table>
        <H2>Example</H2>
        <Highlight className={ nb("pa2 mb2 lh5 ft4") }>
            { snippet2 }
        </Highlight>

        <div className={ nb("brdr1 br5 bc1 pv1 tac mb2") }>.brdr1.br5.bc1.pv1.mb2</div>

        <H2>Default Settings</H2>
        <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
        <Highlight className={ nb("pa2 lh5 ft4") }>
            {"// Neckbeard.defaultSettings.helpers.borderRadius \n" }
            { JSON.stringify(Neckbeard.defaultSettings.helpers.borderRadius, null, '    ') }
        </Highlight>
    </div>
)

export default BorderRadius
