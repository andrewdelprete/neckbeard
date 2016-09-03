import React, { Component } from "react"
import { Router, Route, Link } from 'react-router'
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import H3 from "../components/elements/H3"
import Copy from "../components/elements/Copy"
import Code from "../components/elements/Code"
import BlockQuote from "../components/elements/BlockQuote"

/**
 * Grid Page
 */
const snippet = `<div className={ nb("frame mb2") }>
    <div className={ nb("blk md-blk6") }>
        <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk.md-blk6</div>
    </div>
    <div className={ nb("blk md-blk6") }>
        <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk.md-blk6</div>
    </div>
</div>
`

const Grid = () => (
    <div>
        <H1>Grid</H1>
        <div className={ nb("mb1") }>
            <H3>12-column Grid</H3>
        </div>
        <Copy>Neckbeard like Beard ships with a standard 12-column grid and provides responsive helper classes to change the layout when the viewport reaches a certain breakpoint. It also supports nested grids and non-responsive grids for increased flexibility.</Copy>
        <BlockQuote>
            Hint: To get the grid to maintain its ratios on the small breakpoint, use the <Code type="purple">.frame--stay</Code> modifier on your <Code type="purple">.frame</Code> wrapper.
        </BlockQuote>

        <div className={ nb("frame mb2") }>
            <div className={ nb("blk md-blk6") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk.md-blk6</div>
            </div>
            <div className={ nb("blk md-blk6") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk.md-blk6</div>
            </div>
        </div>
        <div className={ nb("frame mb2") }>
            <div className={ nb("blk md-blk--offset3") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk.md-blk--offset3</div>
            </div>
        </div>
        <div className={ nb("frame relative mb2") }>
            <div className={ nb("blk3 md-blk--push9") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk3.md-blk--push9</div>
            </div>
            <div className={ nb("blk9 md-blk--pull3") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk9.md-blk--pull3</div>
            </div>
        </div>

        <div className={ nb("mb1") }>
            <H3>The AutoGrid</H3>
        </div>
        <Copy>
            The AutoGrid is the easiest way to get started. Simply use a div with a <Code>.frame</Code> class and place any number of <Code>.blk</Code> elements as direct descendants. The AutoGrid will automatically figure out the width for each column and will give it a generous 30px of padding between each of them. This will create 60px wide gutter between columns.
        </Copy>
        <div className={ nb("frame relative mb2") }>
            <div className={ nb("blk") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk</div>
            </div>
            <div className={ nb("blk") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk</div>
            </div>
            <div className={ nb("blk") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk</div>
            </div>
            <div className={ nb("blk") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk</div>
            </div>
        </div>
        <div className={ nb("frame relative mb2") }>
            <div className={ nb("blk") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk</div>
            </div>
            <div className={ nb("blk") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk</div>
            </div>
            <div className={ nb("blk") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk</div>
            </div>
        </div>
        <div className={ nb("frame relative mb2") }>
            <div className={ nb("blk") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk</div>
            </div>
            <div className={ nb("blk") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk</div>
            </div>
        </div>
        <div className={ nb("mb1") }>
            <H3>Grid with no padding</H3>
        </div>
        <div className={ nb("frame relative mb2") }>
            <div className={ nb("blk xph brdr1 bcg20") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk.xph</div>
            </div>
            <div className={ nb("blk xph brdr1 bcg20") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk.xph</div>
            </div>
            <div className={ nb("blk xph brdr1 bcg20") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk.xph</div>
            </div>
            <div className={ nb("blk xph brdr1 bcg20") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk.xph</div>
            </div>
        </div>
        <div className={ nb("frame relative mb2") }>
            <div className={ nb("blk xph brdr1 bcg20") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk.xph</div>
            </div>
            <div className={ nb("blk xph brdr1 bcg20") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk.xph</div>
            </div>
            <div className={ nb("blk xph brdr1 bcg20") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk.xph</div>
            </div>
        </div>
        <div className={ nb("frame relative mb2") }>
            <div className={ nb("blk xph brdr1 bcg20") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk.xph</div>
            </div>
            <div className={ nb("blk xph brdr1 bcg20") }>
                <div className={ nb("bgg05 flex pv1 ph2 jcc aic tcg30 ft3") }>.blk.xph</div>
            </div>
        </div>

        <H2>Example</H2>
        <Highlight className={ nb("ph2 pv2 mb2 lh5") }>
            { snippet }
        </Highlight>

        <H2>Default Settings</H2>
        <div className={ nb("lh5 mb2") }>
            <Copy>See <Link to="/usage#configuration" className={ nb("tc5 xtd h-tc1") }>Configuration</Link> to learn how to overwrite helper settings.</Copy>
            <Highlight className={ nb("ph2 pv2") }>
                {"// Neckbeard.defaultSettings.helpers.grid \n" }
                { JSON.stringify(Neckbeard.defaultSettings.helpers.grid, null, '    ') }
            </Highlight>
        </div>
    </div>
)

export default Grid
