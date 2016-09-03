import React, { Component } from "react"
import { Router, Route, Link } from 'react-router'
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import Copy from "../components/elements/Copy"
import Code from "../components/elements/Code"

/**
 * LetterSpacing Page
 */
const snippet = `<div className={ nb("md-ls2 lg-ls5 xlg-ls8 mb2 brdr1 br5 tac pv1") }>
    Different Letter Spacing Depending on Breakpoint
</div>
`

const LetterSpacing = () => (
    <div>
        <H1>LetterSpacing</H1>
        <H2>Options</H2>
        <table className={ nb("w100 mb2 ft4 tcg60 lh2 sans") }>
            <thead>
                <tr className={ nb("brdr1--bottom bcg10 bgg05") }>
                    <th className={ nb("pv1 ph1 tal fwsemibold ph1") }>Name</th>
                    <th className={ nb("pv1 ph1 tal fwsemibold ph1") }>Class</th>
                </tr>
            </thead>
            <tbody>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Level 1</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><code>.ls1</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Level 2</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><code>.ls2</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Level 3</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><code>.ls3</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Level 4</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><code>.ls4</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Level 5</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><code>.ls5</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Level 6</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><code>.ls6</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Level 7</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><code>.ls7</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Level 8</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><code>.ls8</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Level 9</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><code>.ls9</code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Level 10</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><code>.ls10</code></td>
                </tr>
            </tbody>
        </table>
        <H2>Example</H2>
        <Highlight className={ nb("ph2 pv2 mb2 lh5") }>
            { snippet }
        </Highlight>

        <div className={ nb("md-ls2 lg-ls5 xlg-ls8 mb2 brdr1 br5 tac pv1") }>
            Different Letter Spacing Depending on Breakpoint
        </div>

        <H2>Default Settings</H2>
        <div className={ nb("lh5 mb2") }>
            <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
            <Highlight className={ nb("ph2 pv2") }>
                {"// Neckbeard.defaultSettings.helpers.letterSpacing \n" }
                { JSON.stringify(Neckbeard.defaultSettings.helpers.letterSpacing, null, '    ') }
            </Highlight>
        </div>
    </div>
)

export default LetterSpacing
