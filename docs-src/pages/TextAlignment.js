import React from "react"
import { Router, Route, Link } from 'react-router'
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import Copy from "../components/elements/Copy"
import Code from "../components/elements/Code"

/**
 * TextAlignment Page
 */
const TextAlignment = () => (
    <div>
        <H1>
            Text Alignment
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
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>Text Align Left</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.tal</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>Text Align Center</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.tac</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>Text Align Right</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.tar</Code></td>
                </tr>
            </tbody>
        </table>

        <H2>Default Settings</H2>
        <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
        <Highlight className={ nb("pa2 lh5 ft4") }>
            {"// Neckbeard.defaultSettings.helpers.textAlignment \n" }
            { JSON.stringify(Neckbeard.defaultSettings.helpers.textAlignment, null, '    ') }
        </Highlight>
    </div>
)

export default TextAlignment
