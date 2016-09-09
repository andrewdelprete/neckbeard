import React, { Component } from "react"
import { Router, Route, Link } from 'react-router'
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import Copy from "../components/elements/Copy"
import Code from "../components/elements/Code"

/**
 * Display Page
 */
const snippet = `<div className={ nb("md-dn mb2 brdr1 br5 tac pv1") }>
    Show content on small to medium breakpoint
</div>

<div className={ nb("dn md-db mb2 brdr1 br5 tac pv1") }>
    Show content on large breakpoint
</div>
`

const Display = () => (
    <div>
        <H1>
            Display
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
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Display Block</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>.db</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Display Inline</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>.di</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Display Inline-block</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>.dib</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Display None</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>.dn</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Full Width<span className={ nb("tc1 ft4 fw3 ml1") }>Not Responsive</span></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>.full</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>w100<span className={ nb("tc1 ft4 fw3 ml1") }>Not Responsive</span></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>.w100</td>
                </tr>
            </tbody>
        </table>
        <H2>Example</H2>
        <Highlight className={ nb("pa2 mb2 lh5 ft4") }>
            { snippet }
        </Highlight>

        <div className={ nb("md-dn mb2 brdr1 br5 tac pv1") }>
            Show content on small to medium breakpoint
        </div>

        <div className={ nb("dn md-db mb2 brdr1 br5 tac pv1") }>
            Show content on large breakpoint
        </div>

        <H2>Default Settings</H2>
        <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
        <Highlight className={ nb("pa2 lh5 ft4") }>
            {"// Neckbeard.defaultSettings.helpers.display \n" }
            { JSON.stringify(Neckbeard.defaultSettings.helpers.display, null, '    ') }
        </Highlight>
    </div>
)

export default Display
