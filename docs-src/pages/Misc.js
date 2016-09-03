import React, { Component } from "react"
import { Router, Route, Link } from 'react-router'
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import Copy from "../components/elements/Copy"
import Code from "../components/elements/Code"

/**
 * Misc Page
 */
const snippet = `<div className={ nb("md-ls2 lg-ls5 xlg-ls8 mb2 brdr1 br5 tac pv1") }>
    Different Letter Spacing Depending on Breakpoint
</div>
`

const Misc = () => (
    <div>
        <H1>
            Misc
            <span className={ nb("tc1 ft3 capitalize fw3 ml1") }>Not Responsive</span>
        </H1>
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
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.center</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Center an element using auto margin.</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.default-hover</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Lower the opacity for an element on its hover state</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.default-active</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Lower the opacity for an element on its active state</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.dim</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Apply a combination of .default-hover and .default-active</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.site-width</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Set the element's <Code>max-width</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.lowercase</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Transform the text to lowercase</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.uppercase</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Transform the text to uppercase</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.ell</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Add an ellipsis when text gets longer than its container</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.imax</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Allow an image to scale to 100% of its containing element's size</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.i100</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Set an image's width to 100%</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.bgcover</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Set an element's background-size to fill up its container proportionally</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.bgcenter</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Center an element's background</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.vam</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Vertically align a <Code>td</Code> element's content to the middle</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.clearfix</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Apply a classic clearfix to a containing element.</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.hidetext</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Hide text from the viewer, but leave it for search engines and screen readers.</td>
                </tr>
            </tbody>
        </table>

        <H2>Default Settings</H2>
        <div className={ nb("lh5 mb2") }>
            <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
            <Highlight className={ nb("ph2 pv2 mb2") }>
                {"// Neckbeard.defaultSettings.helpers.misc \n" }
                { JSON.stringify(Neckbeard.defaultSettings.helpers.misc, null, '    ') }
            </Highlight>
        </div>
    </div>
)

export default Misc
