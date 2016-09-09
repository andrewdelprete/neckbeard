import React, { Component } from "react"
import { Router, Route, Link } from 'react-router'
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import Copy from "../components/elements/Copy"
import Code from "../components/elements/Code"

/**
 * Spacing Page
 */
const snippet = `<div className={ nb("md-pa1 lg-pa3 xlg-pa5 mb2 brdr1 br5 tac") }>
    Different Spacing Depending on Breakpoint
</div>
`

const Spacing = () => (
    <div>
        <H1>
            Spacing
            <span className={ nb("tc1 ft3 capitalize fw3 ml1") }>Responsive</span>
        </H1>
        <Copy>
            The spacing system is set up by default to have 10 increments, each representing 1rem in size. For example, to achieve a <Code>margin-top</Code> which uses the 2nd step in the spacing scale (2rems by deafult), you would use <Code>.mt2</Code>. If you wanted a <Code>padding-left</Code> with the 8th step in the scale, it's <Code>.pl8</Code>.
        </Copy>
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
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Margin All</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.ma</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Margin Vertical</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.mv</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Margin Horizontal</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.mh</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Margin Top</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.mt</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Margin Right</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.mr</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Margin Bottom</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.mb</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Margin Left</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.ml</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Padding All</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.pa</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Padding Vertical</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.pv</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Padding Horizontal</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.ph</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Padding Top</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.pt</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Padding Right</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.pr</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Padding Bottom</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.pb</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Padding Left</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.pl</Code></td>
                </tr>
            </tbody>
        </table>
        <H2>Example</H2>
        <Highlight className={ nb("pa2 mb2 lh5 ft4") }>
            { snippet }
        </Highlight>
        <div className={ nb("md-pa1 lg-pa3 xlg-pa5 mb2 brdr1 br5 tac") }>
            Different Spacing Depending on Breakpoint
        </div>

        <H2>Default Settings</H2>
        <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
        <Highlight className={ nb("pa2 lh5 ft4") }>
            {"// Neckbeard.defaultSettings.helpers.spacing \n" }
            { JSON.stringify(Neckbeard.defaultSettings.helpers.spacing, null, '    ') }
        </Highlight>
    </div>
)

export default Spacing
