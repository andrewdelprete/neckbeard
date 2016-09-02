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
 * Fonts Page
 */
const snippet = `<div className={ nb("md-dn mb2 brdr1 br5 tac pv1") }>
    Show content on small to medium breakpoint
</div>

<div className={ nb("dn md-db mb2 brdr1 br5 tac pv1") }>
    Show content on large breakpoint
</div>
`

const Fonts = () => (
    <div>
        <H1>Fonts</H1>
        {/* <H2>Options</H2> */}
        <div className={ nb("mb1") }>
            <H3>Font Family Helpers<span className={ nb("tc1 ft3 capitalize fw3 ml1") }>Not Responsive</span></H3>
        </div>
        <table className={ nb("w100 mb2 ft4 tcg60 lh2 sans") }>
            <thead>
                <tr className={ nb("brdr1--bottom bcg10 bgg05") }>
                    <th className={ nb("pv1 ph1 tal fwsemibold") }>Style</th>
                    <th className={ nb("pv1 ph1 tal fwsemibold") }>Class</th>
                    <th className={ nb("pv1 ph1 tal fwsemibold") }>Default Stack</th>
                </tr>
            </thead>
            <tbody>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Sans Serif</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.sans</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>'Helvetica Neue', Helvetica, Arial, sans-serif</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Serif</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.serif</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>Merriweather, Georgia, serif</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Code</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.Code</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>Consolas, Monaco, 'Andale Mono', monospace</Code></td>
                </tr>
            </tbody>
        </table>

        <div className={ nb("mb1") }>
            <H3>Font Weight Helpers<span className={ nb("tc1 ft3 capitalize fw3 ml1") }>Not Responsive</span></H3>
        </div>
        <table className={ nb("w100 mb2 ft4 tcg60 lh2 sans") }>
            <thead>
                <tr className={ nb("brdr1--bottom bcg10 bgg05") }>
                    <th className={ nb("pv1 ph1 tal fwsemibold") }>Style</th>
                    <th className={ nb("pv1 ph1 tal fwsemibold") }>Class</th>
                    <th className={ nb("pv1 ph1 tal fwsemibold") }>Default Stack</th>
                </tr>
            </thead>
            <tbody>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Thin</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>100</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.fw1</Code> or <Code>.fwthin</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Extra Light</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>200</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.fw2</Code> or <Code>.fwxlight</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Light</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>300</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.fw3</Code> or <Code>.fwlight</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Normal</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>400</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.fw4</Code> or <Code>.fwnormal</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Medium</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>500</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.fw5</Code> or <Code>.fwmedium</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Semibold</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>600</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.fw6</Code> or <Code>.fwsemibold</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Bold</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>700</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.fw7</Code> or <Code>.fwbold</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Extra Bold</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>800</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.fw8</Code> or <Code>.fwxbold</Code></td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }>Black</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>900</Code></td>
                    <td className={ nb("tcg50 fw3 pv1 ph1") }><Code>.fw9</Code> or <Code>.fwblack</Code></td>
                </tr>
            </tbody>
        </table>

        <div className={ nb("mb1") }>
            <H3>Font Size Helpers</H3>
        </div>
        <table className={ nb("w100 mb2 ft4 tcg60 lh2 sans") }>
            <thead>
                <tr className={ nb("brdr1--bottom bcg10 bgg05") }>
                    <th className={ nb("pv1 ph1 tal fwsemibold") }>Style</th>
                    <th className={ nb("pv1 ph1 tal fwsemibold") }>Class</th>
                    <th className={ nb("pv1 tal fwsemibold") }>Default Stack</th>
                </tr>
            </thead>
            <tbody>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 1</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft1</Code></td>
                    <td className={ nb("vam pv1 ft1") }>Hi</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 2</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft2</Code></td>
                    <td className={ nb("vam pv1 ft2") }>Hi</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 3</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft3</Code></td>
                    <td className={ nb("vam pv1 ft3") }>Hi</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 4</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft4</Code></td>
                    <td className={ nb("vam pv1 ft4") }>Hi</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 5</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft4</Code></td>
                    <td className={ nb("vam pv1 ft5") }>Hi</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 6</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft4</Code></td>
                    <td className={ nb("vam pv1 ft6") }>Hi</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 7</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft7</Code></td>
                    <td className={ nb("vam pv1 ft7") }>Hi</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 8</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft8</Code></td>
                    <td className={ nb("vam pv1 ft8") }>Hi</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 9</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft9</Code></td>
                    <td className={ nb("vam pv1 ft9") }>Hi</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 10</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft10</Code></td>
                    <td className={ nb("vam pv1 ft10") }>Hi</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 11</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft11</Code></td>
                    <td className={ nb("vam pv1 ft10") }>Hi</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 12</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft12</Code></td>
                    <td className={ nb("vam pv1 ft12") }>Hi</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 13</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft13</Code></td>
                    <td className={ nb("vam pv1 ft13") }>Hi</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 14</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft14</Code></td>
                    <td className={ nb("vam pv1 ft14") }>Hi</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 15</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft15</Code></td>
                    <td className={ nb("vam pv1 ft15") }>Hi</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 16</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft16</Code></td>
                    <td className={ nb("vam pv1 ft16") }>Hi</td>
                </tr>
                <tr className={ nb("brdr1--bottom bcg10") }>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }>Font Level 17</td>
                    <td className={ nb("tcg50 fw3 pv1 ph1 vam") }><Code>.ft17</Code></td>
                    <td className={ nb("vam pv1 ft17") }>Hi</td>
                </tr>
            </tbody>
        </table>

        <H2>Default Settings</H2>
        <div className={ nb("lh5 mb2") }>
            <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
            <Highlight className={ nb("ph2 pv2 mb2") }>
                {"// Neckbeard.defaultSettings.helpers.fontFamily \n" }
                { JSON.stringify(Neckbeard.defaultSettings.helpers.fontFamily, null, '    ') }
            </Highlight>
            <Highlight className={ nb("ph2 pv2 mb2") }>
                {"// Neckbeard.defaultSettings.helpers.fontWeight \n" }
                { JSON.stringify(Neckbeard.defaultSettings.helpers.fontWeight, null, '    ') }
            </Highlight>
            <Highlight className={ nb("ph2 pv2") }>
                {"// Neckbeard.defaultSettings.helpers.fontSize \n" }
                { JSON.stringify(Neckbeard.defaultSettings.helpers.fontSize, null, '    ') }
            </Highlight>
        </div>
    </div>
)

export default Fonts
