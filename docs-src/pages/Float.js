import React, { Component } from "react"
import { Router, Route, Link } from 'react-router'
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import Copy from "../components/elements/Copy"
import Code from "../components/elements/Code"

/**
 * Float Page
 */
const snippet = `<div className={ nb("md-dn mb2 brdr1 br5 tac pv1") }>
    Show content on small to medium breakpoint
</div>

<div className={ nb("dn md-db mb2 brdr1 br5 tac pv1") }>
    Show content on large breakpoint
</div>
`

const Float = () => (
    <div>
        <H1>
            Float
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
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.fl</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>float: left</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.fr</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>float: right</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.fn</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>float: none</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.finit</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>float: initial</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.finhe</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>float: inherit</Code></td>
                </tr>
            </tbody>
        </table>
        <H2>Example</H2>
        <Highlight className={ nb("pa1 mb2 lh5 ft3") }>
            { snippet }
        </Highlight>

        <div className={ nb("clearfix") }>
            <div className={ nb("md-fl lg-fr mb2 brdr1 br5 tac pv1") }>
                Float right large breakpoint, Float left medium breakpoint.
            </div>
        </div>

        <H2>Default Settings</H2>
        <div className={ nb("lh5 mb2 ft3") }>
            <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
            <Highlight className={ nb("pa1") }>
                {"// Neckbeard.defaultSettings.helpers.float \n" }
                { JSON.stringify(Neckbeard.defaultSettings.helpers.float, null, '    ') }
            </Highlight>
        </div>
    </div>
)

export default Float
