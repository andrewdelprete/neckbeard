import React, { Component } from "react"
import { Router, Route, Link } from 'react-router'
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import H3 from "../components/elements/H2"
import Copy from "../components/elements/Copy"
import Code from "../components/elements/Code"

/**
 * Overview Page
 */
const snippet = `<div className={ nb("lg-dn") }>.lg-dn</div>`

const BreakPoints = () => (
    <div>
        <H1>
            Breakpoints
        </H1>
        <Copy>
            Because Neckbeard ships with a standard set of breakpoints, many of the helpers are responsive. These helpers are generated from the breakpoints in your configuration. These are the default breakpoints:
        </Copy>
        <H2>Options</H2>
        <table className={ nb("w100 mb2 ft4 tcg60 lh2 sans") }>
            <thead>
                <tr className={ nb("brdr1--bottom bcg10 bgg05") }>
                    <th className={ nb("pa1 tal fwsemibold ph1") }>Name</th>
                    <th className={ nb("pa1 tal fwsemibold ph1") }>Prefix</th>
                    <th className={ nb("pa1 tal fwsemibold ph1") }>Target</th>
                </tr>
            </thead>
            <tbody>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Small</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.sm-</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>(min-width: 300px)</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Medium</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.md-</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>(min-width: 600px)</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Large</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.lg-</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>(min-width: 900px)</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Extra Large</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.xlg-</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>(min-width: 1440px)</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Only Small</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.only-sm-</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>(max-width: 599px)</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Only Medium</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.only-md-</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>(min-width: 600px) and (max-width: 899px)</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Only Large</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.only-lg-</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>(min-width: 900px) and (max-width: 1439px)</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }>Only Extra Large</td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.only-xlg-</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>(min-width: 1440px)</Code></td>
                </tr>
            </tbody>
        </table>
        <H2>Example</H2>
        <Copy>You can use responsive prefixes to specify when an element should be shown on a page. The following would hide the element on the 'lg' breakpoint.</Copy>

        <Highlight className={ nb("pa2 mb2 lh5 ft4") }>
            { snippet }
        </Highlight>

        <H2>Default Settings</H2>
        <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
        <Highlight className={ nb("pa2 lh5 ft4") }>
            {"// Neckbeard.defaultSettings.breakpoints \n" }
            { JSON.stringify(Neckbeard.defaultSettings.breakpoints, null, '    ') }
        </Highlight>
    </div>
)

export default BreakPoints
