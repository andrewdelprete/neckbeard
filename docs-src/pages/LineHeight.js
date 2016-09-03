import React, { Component } from "react"
import { Router, Route, Link } from 'react-router'
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import Copy from "../components/elements/Copy"
import Code from "../components/elements/Code"

/**
 * LineHeight Page
 */
const snippet = `<div className={ nb("md-ls2 lg-ls5 xlg-ls8 mb2 brdr1 br5 tac pv1") }>
    Different Letter Spacing Depending on Breakpoint
</div>
`

const LineHeight = () => (
    <div>
        <H1>
            Line Height
            <span className={ nb("tc1 ft3 capitalize fw3 ml1") }>Responsive</span>
        </H1>
        <H2>Options</H2>
        <table className={ nb("w100 mb2 ft4 tcg60 lh2 sans") }>
            <thead>
                <tr className={ nb("brdr1--bottom bcg10 bgg05") }>
                    <th className={ nb("pv1 ph1 tal fwsemibold ph1") }>Class</th>
                    <th className={ nb("pv1 ph1 tal fwsemibold ph1") }>Generated Value</th>
                </tr>
            </thead>
            <tbody>
                    <tr className={ nb("brdr1--bottom bcg10") }>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.lh1</Code></td>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>line-height: 1</Code></td>
                    </tr>
                    <tr className={ nb("brdr1--bottom bcg10") }>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.lh2</Code></td>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>line-height: 1.1</Code></td>
                    </tr>
                    <tr className={ nb("brdr1--bottom bcg10") }>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.lh3</Code></td>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>line-height: 1.3</Code></td>
                    </tr>
                    <tr className={ nb("brdr1--bottom bcg10") }>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.lh4</Code></td>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>line-height: 1.4</Code></td>
                    </tr>
                    <tr className={ nb("brdr1--bottom bcg10") }>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.lh5</Code></td>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>line-height: 1.4</Code></td>
                    </tr>
                    <tr className={ nb("brdr1--bottom bcg10") }>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.lh6</Code></td>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>line-height: 1.6</Code></td>
                    </tr>
                    <tr className={ nb("brdr1--bottom bcg10") }>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.lh7</Code></td>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>line-height: 1.7</Code></td>
                    </tr>
                    <tr className={ nb("brdr1--bottom bcg10") }>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.lh8</Code></td>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>line-height: 1.8</Code></td>
                    </tr>
                    <tr className={ nb("brdr1--bottom bcg10") }>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.lh9</Code></td>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>line-height: 1.9</Code></td>
                    </tr>
                    <tr className={ nb("brdr1--bottom bcg10") }>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.lh10</Code></td>
                        <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>line-height: 2</Code></td>
                    </tr>
                </tbody>
        </table>

        <H2>Default Settings</H2>
        <div className={ nb("lh5 mb2") }>
            <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
            <Highlight className={ nb("ph2 pv2") }>
                {"// Neckbeard.defaultSettings.helpers.lineHeight \n" }
                { JSON.stringify(Neckbeard.defaultSettings.helpers.lineHeight, null, '    ') }
            </Highlight>
        </div>
    </div>
)

export default LineHeight
