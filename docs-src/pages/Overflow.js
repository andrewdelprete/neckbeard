import React, { Component } from "react"
import { Router, Route, Link } from 'react-router'
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import Copy from "../components/elements/Copy"
import Code from "../components/elements/Code"

/**
 * Overflow Page
 */
const Overflow = () => (
    <div>
        <H1>
            Overflow
            <span className={ nb("tc1 ft3 capitalize fw3 ml1") }>Not Responsive</span>
        </H1>
        <H2>Options</H2>
        <table className={ nb("w100 mb2 ft4 tcg60 lh2 sans") }>
            <thead>
                <tr className={ nb("brdr1--bottom bcg10 bgg05") }>
                    <th className={ nb("pa1 tal fwsemibold ph1") }>Class</th>
                    <th className={ nb("pa1 tal fwsemibold ph1") }>Value</th>
                </tr>
            </thead>
            <tbody>
                    <tr className={ nb("brdr1--bottom bcg10") }>
                        <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.ofh</Code></td>
                        <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>overflow: hidden</Code></td>
                    </tr>
                    <tr className={ nb("brdr1--bottom bcg10") }>
                        <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.ofx</Code></td>
                        <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>overflow-x: scroll</Code></td>
                    </tr>
                    <tr className={ nb("brdr1--bottom bcg10") }>
                        <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.ofy</Code></td>
                        <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>overflow-y: scroll</Code></td>
                    </tr>
                </tbody>
        </table>

        <H2>Default Settings</H2>
        <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
        <Highlight className={ nb("pa2 lh5 ft4") }>
            {"// Neckbeard.defaultSettings.helpers.overflow \n" }
            { JSON.stringify(Neckbeard.defaultSettings.helpers.overflow, null, '    ') }
        </Highlight>
    </div>
)

export default Overflow
