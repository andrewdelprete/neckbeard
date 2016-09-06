import React, { Component } from "react"
import { Router, Route, Link } from 'react-router'
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import Copy from "../components/elements/Copy"
import Code from "../components/elements/Code"

/**
 * ZIndex Page
 */
const ZIndex = () => (
    <div>
        <H1>
            Z Index
            <span className={ nb("tc1 ft3 capitalize fw3 ml1") }>Responsive</span>
        </H1>
        <H2>Options</H2>
        <table className={ nb("w100 mb2 ft4 tcg60 lh2 sans") }>
            <thead>
                <tr className={ nb("brdr1--bottom bcg10 bgg05") }>
                    <th className={ nb("pa1 tal fwsemibold ph1") }>Name</th>
                    <th className={ nb("pa1 tal fwsemibold ph1") }>Class</th>
                </tr>
            </thead>
            <tbody>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Level 1</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><code>.zi1</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Level 2</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><code>.zi2</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Level 3</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><code>.zi3</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Level 4</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><code>.zi4</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Level 5</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><code>.zi5</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Level 6</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><code>.zi6</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Level 7</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><code>.zi7</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Level 8</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><code>.zi8</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Level 9</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><code>.zi9</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Level 10</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><code>.zi10</code></td>
                </tr>
            </tbody>
        </table>

        <H2>Default Settings</H2>
        <div className={ nb("lh5 mb2 ft3") }>
            <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
            <Highlight className={ nb("pa1") }>
                {"// Neckbeard.defaultSettings.helpers.zIndex \n" }
                { JSON.stringify(Neckbeard.defaultSettings.helpers.zIndex, null, '    ') }
            </Highlight>
        </div>
    </div>
)

export default ZIndex
