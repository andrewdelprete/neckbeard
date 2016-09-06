import React, { Component } from "react"
import { Router, Route, Link } from 'react-router'
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import Copy from "../components/elements/Copy"
import Code from "../components/elements/Code"

/**
 * TextDecoration Page
 */
const TextDecoration = () => (
    <div>
        <H1>
            Text Decoration
            <span className={ nb("tc1 ft3 capitalize fw3 ml1") }>Not Responsive</span>
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
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>Overline</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.overline</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>Line Through</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.line-through</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>Underline</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.underline</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>Remove Text Decoration</Code></td>
                    <td className={ nb("tcg50 fw3 pv2 ph1") }><Code>.xtd</Code></td>
                </tr>
            </tbody>
        </table>

        <H2>Default Settings</H2>
        <div className={ nb("lh5 mb2 ft3") }>
            <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
            <Highlight className={ nb("pa1") }>
                {"// Neckbeard.defaultSettings.helpers.textDecoration \n" }
                { JSON.stringify(Neckbeard.defaultSettings.helpers.textDecoration, null, '    ') }
            </Highlight>
        </div>
    </div>
)

export default TextDecoration
