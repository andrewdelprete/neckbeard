import React, { Component } from "react"
import { Router, Route, Link } from 'react-router'
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import H3 from "../components/elements/H3"
import Copy from "../components/elements/Copy"
import Code from "../components/elements/Code"

/**
 * Flexbox Page
 */
const snippet = `<div className={ nb('relative mb2') }>
    <div className={ nb("brdr1 bc1 br5 flex jcc aic absolute h100 w100") }>
        <span className={ nb("ft5 tc1 tac fwthin") }>
            Vertical and Horizontal Centering
        </span>
    </div>
</div>
`

const Flexbox = () => (
    <div>
        <H1>Flexbox</H1>
        <H2>Options</H2>
        <table className={ nb("w100 mb2 ft4 tcg60 lh2 sans") }>
            <thead>
                <tr className={ nb("brdr1--bottom bcg10 bgg05") }>
                    <th className={ nb("pv1 ph1 tal fwsemibold ph1") }>Class</th>
                    <th className={ nb("pv1 ph1 tal fwsemibold ph1") }>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.flex</Code> or <Code>.df</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>display: flex</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.iflex</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>display: inline-flex</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.flex-grow</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>flex-grow: 1</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.fb100</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>flex-basis: 100%</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.fdr</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>flex-direction: row</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.fdrr</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>flex-direction: row-reverse</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.fdc</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>flex-direction: column</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.fdcr</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>flex-direction: column-reverse</Code></td>
                </tr>
            </tbody>
        </table>

        <H3>Content Justification</H3>
        <table className={ nb("w100 mb2 ft4 tcg60 lh2 sans") }>
            <thead>
                <tr className={ nb("brdr1--bottom bcg10 bgg05") }>
                    <th className={ nb("pv1 ph1 tal fwsemibold ph1") }>Class</th>
                    <th className={ nb("pv1 ph1 tal fwsemibold ph1") }>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.jcc</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>justify-content: center</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.jcsb</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>justify-content: space-between</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.jcsa</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>justify-content: space-around</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.jcfs</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>justify-content: flex-start</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.jcfe</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>justify-content: flex-end</Code></td>
                </tr>
            </tbody>
        </table>

        <H3>Item Alignment</H3>
        <table className={ nb("w100 mb2 ft4 tcg60 lh2 sans") }>
            <thead>
                <tr className={ nb("brdr1--bottom bcg10 bgg05") }>
                    <th className={ nb("pv1 ph1 tal fwsemibold ph1") }>Class</th>
                    <th className={ nb("pv1 ph1 tal fwsemibold ph1") }>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.aic</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>align-items: center</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.aifs</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>align-items: flex-start</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.aife</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>align-items: flex-end</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.ais</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>align-items: stretch</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.aib</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>align-items: baseline</Code></td>
                </tr>
            </tbody>
        </table>

        <H3>Content Alignment</H3>
        <table className={ nb("w100 mb2 ft4 tcg60 lh2 sans") }>
            <thead>
                <tr className={ nb("brdr1--bottom bcg10 bgg05") }>
                    <th className={ nb("pv1 ph1 tal fwsemibold ph1") }>Class</th>
                    <th className={ nb("pv1 ph1 tal fwsemibold ph1") }>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.acc</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>align-content: center</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.acfs</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>align-content: flex-start</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.acfe</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>align-content: flex-end</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.acs</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>align-content: stretch</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.acb</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>align-content: baseline</Code></td>
                </tr>
            </tbody>
        </table>

        <H2>Example</H2>
        <Highlight className={ nb("ph2 pv2 mb2 lh5") }>
            { snippet }
        </Highlight>

        <div className={ nb('relative mb2') } style={{ height: "100px" }}>
            <div className={ nb("brdr1 bc1 br5 flex jcc aic absolute h100 w100") }>
                <span className={ nb("ft5 tc1 tac fwthin") }>
                    Vertical and Horizontal Centering
                </span>
            </div>
        </div>

        <H2>Default Settings</H2>
        <div className={ nb("lh4 mb2") }>
            <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
            <Highlight className={ nb("ph2 pv2") }>
                {"// Neckbeard.defaultSettings.helpers.flex \n" }
                { JSON.stringify(Neckbeard.defaultSettings.helpers.flex, null, '    ') }
            </Highlight>
        </div>
    </div>
)

export default Flexbox
