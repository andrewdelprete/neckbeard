import React, { Component } from "react"
import { Router, Route, Link } from 'react-router'
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import Copy from "../components/elements/Copy"
import Code from "../components/elements/Code"

/**
 * Position Page
 */
const Position = () => (
    <div>
        <H1>
            Position
            <span className={ nb("tc1 ft3 capitalize fw3 ml1") }>Responsive</span>
        </H1>
        <H2>Options</H2>
        <table className={ nb("w100 mb2 ft4 tcg60 lh2 sans") }>
            <thead>
                <tr className={ nb("brdr1--bottom bcg10 bgg05") }>
                    <th className={ nb("pv1 ph1 tal fwsemibold ph1") }>Class</th>
                    <th className={ nb("pv1 ph1 tal fwsemibold ph1") }>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.relative</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>position: relative</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.absolute</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>position: absolute</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.fixed</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>position: fixed</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.pin-top</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>top: 0</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.pin-right</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>right: 0</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.pin-bottom</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>bottom: 0</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.pin-left</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>left: 0</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.pin-edges</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>top: 0; right: 0; bottom: 0; left: 0;</Code></td>
                </tr>
            </tbody>
        </table>

        <H2>Default Settings</H2>
        <div className={ nb("lh5 mb2") }>
            <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
            <Highlight className={ nb("ph2 pv2") }>
                {"// Neckbeard.defaultSettings.helpers.position \n" }
                { JSON.stringify(Neckbeard.defaultSettings.helpers.position, null, '    ') }
            </Highlight>
        </div>
    </div>
)

export default Position
