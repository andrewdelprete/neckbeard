import React, { Component } from "react"
import Highlight from "react-highlight"
import Heading1 from "../components/elements/Heading1"
import Heading2 from "../components/elements/Heading2"
import Heading3 from "../components/elements/Heading3"
import Code from "../components/elements/Code"
import Copy from "../components/elements/Copy"

/**
 * Overview Page
 */
const snippet1 =
`import React, { Component } from "react";
import Neckbeard from "neckbeard"

const settings = {
    ...Neckbeard.defaultSettings
    // Overwrite settings here
}

const nb = Neckbeard.create(settings)

class App extends Component {
    render() {
        return (
            <div className={ nb("flex jcc aic absolute h100 w100") }>
                <p className={ nb("ft5 tc1 tac fwthin") }>
                    Neckbeard
                </p>
            </div>
        )
    }
}

export default App
`
const Installation = () => (
    <div>
        <Heading1>Overview</Heading1>
        <Heading2>What is Neckbeard?</Heading2>
        <Copy className={ nb("ft4 sans tcg50 lh10 fwlight mb2") }>
            Neckbeard is an Atomic CSS in JS framework that leverages the composibility nature of helper (utility) classes and the awesome power of <a href="https://github.com/Khan/aphrodite" className={ nb("tc5 xtd h-tc1") }>Aphrodite</a> to build things rapidly.
            Neckbeard is highly inspired by <a href="https://www.buildwithbeard.com" className={ nb("tc5 xtd h-tc1") }>Beard</a>, built by <a href="https://www.twitter.com/davidhemphill" className={ nb("tc5 xtd h-tc1") }>@davidhemphill</a> and uses much of the same syntax as Beard.
            The main difference is Neckbeard is built with Javacript and Beard is built with SCSS. Using Javascript to build a CSS Framework allows us to do some
            fantastic things, one in which we are able to utilize a library like Aphrodite to only load the CSS Styles to the page that we're actually using.
        </Copy>
        <Heading3>Helper Classes</Heading3>
        <Copy className={ nb("ft4 sans tcg50 lh10 fwlight mb2") }>
            A Helper Class is a very simple method for applying aesthetic styles to HTML elements. These classes can be used in numerous contexts and are optimal for
            composing small to large components or sprinkling throughout your site or application. Neckbeard provides a Utility Class for just about everything you can think
            of and is extensible per project if custom classes are necessary. An example of a Helper Class to add spacing looks like <Code>.pv1</Code> which translates
            to <Code>padding-top: 1rem; padding-bottom: 1rem;</Code> and the classes making up these code blocks consist of <Code>.ft3.brdr1.br2.bcg10.bgg05.pv05.ph1</Code>.
            In fact this entire documentation site is made up of such helpers.
        </Copy>
        <Heading2>Why?</Heading2>

        {/* <div className={ nb("lh4") }>
            <Highlight className={ nb("ph2 pv2") }>
                { snippet1 }
            </Highlight>
        </div> */}
    </div>
)

export default Installation
