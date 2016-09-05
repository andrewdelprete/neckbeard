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
 * Overview Page
 */
const snippet =
`import React, { Component } from "react"

// ES6 Modules and CommonJS compatible
import Neckbeard from "neckbeard"

const settings = {
    ...Neckbeard.defaultSettings
    // Overwrite settings here
}

// Instantiates Neckbeard and returns a function
// that accepts a string of approved helpers.
const nb = Neckbeard.create(settings)

const Button = ({ children }) => (
    <button className={ nb("bg1 tcw br3 ft4") }>
        { children }
    </button>
)

export default Button
`

const snippet2 = `<div className={ nb("bgsuccess bcsuccess br5 pv1 tac tcw mb2 fwthin") }>
    .bgsuccess.bcsuccess.br5.pv1.tac.tcw.mb2.fwthin
</div>`

const Color = () => (
    <div>
        <H1>
            Colors
            <span className={ nb("tc1 ft3 capitalize fw3 ml1") }>Not Responsive</span>
        </H1>
        <div className={ nb("mb2") }>
            <div className={ nb("frame xmh") }>
                <div className={ nb("blk6 xph") }><div className={ nb("pv2 ph1 flex jcc bgsuccess tcw") }>.bgsuccess</div></div>
                <div className={ nb("blk6 xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcsuccess") }>.tcsuccess</div></div>
                <div className={ nb("blk6 xph") }><div className={ nb("pv2 ph1 flex jcc bgwarning tcw") }>.bgwarning</div></div>
                <div className={ nb("blk6 xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcwarning") }>.tcwarning</div></div>
                <div className={ nb("blk6 xph") }><div className={ nb("pv2 ph1 flex jcc bgdanger tcw") }>.bgdanger</div></div>
                <div className={ nb("blk6 xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcdanger") }>.tcdanger</div></div>
            </div>

            <div className={ nb("frame xmh") }>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bg1 tcw") }>.bg1</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bg2 tcw") }>.bg2</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bg3 tcw") }>.bg3</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bg4 tcw") }>.bg4</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bg5 tcw") }>.bg5</div></div>
            </div>

            <div className={ nb("frame xmh") }>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tc1") }>.tc1</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tc2") }>.tc2</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tc3") }>.tc3</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tc4") }>.tc4</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tc5") }>.tc5</div></div>
            </div>

            <div className={ nb("frame xmh") }>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg brdr1 bc1") }>.bc1</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg brdr1 bc2") }>.bc2</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg brdr1 bc3") }>.bc3</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg brdr1 bc4") }>.bc4</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg brdr1 bc5") }>.bc5</div></div>
            </div>

            <div className={ nb("frame xmh") }>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bgw tcg40") }>.bgw</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bgg40 tcw") }>.tcw</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc brdr1 bcw xbg tcg40") }>.bcw</div></div>
            </div>

            <div className={ nb("frame xmh") }>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bgg05 tcg60") }>.bgg05</div></div>
            </div>

            <div className={ nb("frame xmh") }>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bgg10 tcg60") }>.bgg10</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bgg20 tcg60") }>.bgg20</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bgg30 tcw") }>.bgg30</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bgg40 tcw") }>.bgg40</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bgg50 tcw") }>.bgg50</div></div>
            </div>

            <div className={ nb("frame xmh") }>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bgg60 tcw") }>.bgg60</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bgg70 tcw") }>.bgg70</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bgg80 tcw") }>.bgg80</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bgg90 tcw") }>.bgg90</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bgb tcw") }>.bgb</div></div>
            </div>

            <div className={ nb("frame xmh") }>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc bgg20 tcg05") }>.tcg05</div></div>
            </div>

            <div className={ nb("frame xmh") }>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg10") }>.tcg10</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg20") }>.tcg20</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg30") }>.tcg30</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg40") }>.tcg40</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg50") }>.tcg50</div></div>
            </div>

            <div className={ nb("frame xmh") }>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg60") }>.tcg60</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg70") }>.tcg70</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg80") }>.tcg80</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg90") }>.tcg90</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcb") }>.tcb</div></div>
            </div>

            <div className={ nb("frame xmh") }>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg40 brdr1 bcg05") }>.bcg05</div></div>
            </div>

            <div className={ nb("frame xmh") }>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg40 brdr1 bcg10") }>.bcg10</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg40 brdr1 bcg20") }>.bcg20</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg40 brdr1 bcg30") }>.bcg30</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg40 brdr1 bcg40") }>.bcg40</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg40 brdr1 bcg50") }>.bcg50</div></div>
            </div>

            <div className={ nb("frame xmh") }>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg40 brdr1 bcg60") }>.bcg60</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg40 brdr1 bcg70") }>.bcg70</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg40 brdr1 bcg80") }>.bcg80</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg40 brdr1 bcg90") }>.bcg90</div></div>
                <div className={ nb("blk xph") }><div className={ nb("pv2 ph1 flex jcc xbg tcg40 brdr1 bcb") }>.bcb</div></div>
            </div>
        </div>

        <H2>Example</H2>
        <Highlight className={ nb("ph2 pv2 mb2 lh5") }>
            { snippet2 }
        </Highlight>

        <div className={ nb("bgsuccess bcsuccess br5 pv1 tac tcw mb2 fwthin") }>.bgsuccess.bcsuccess.br5.pv1.tac.tcw.mb2.fwthin</div>

        <H2>Default Settings</H2>
        <div className={ nb("lh5") }>
            <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
            <Highlight className={ nb("ph2 pv2 mb2 lh5") }>
                {"// Neckbeard.defaultSettings.colors \n" }
                { JSON.stringify(Neckbeard.defaultSettings.colors, null, '    ') }
            </Highlight>
            <Highlight className={ nb("ph2 pv2 mb2 lh5") }>
                {"// Neckbeard.defaultSettings.helpers.colors \n" }
                { JSON.stringify(Neckbeard.defaultSettings.helpers.colors, null, '    ') }
            </Highlight>
        </div>
    </div>
)

export default Color
