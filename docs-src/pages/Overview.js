import React, { Component } from "react"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import H3 from "../components/elements/H3"
import Code from "../components/elements/Code"
import Copy from "../components/elements/Copy"

/**
 * Overview Page
 */
const snippet1 =
`import React, { Component } from "react"
import Neckbeard from "neckbeard"

// Instantiates Neckbeard and returns a function
// that accepts a string of approved helpers.
const nb = Neckbeard.create()

const Button = ({ children }) => (
    // Pass a string of helper classes
    // to be injected into the page.
    <button className={ nb("bg1 tcw br3 ft4") }>
        { children }
    </button>
)

export default Button
`
const Installation = () => (
    <div>
        <H1>Overview</H1>
        <H2>Why Neckbeard?</H2>
        <Copy className={ nb("ft4 sans tcg50 lh10 fwlight mb2") }>
            Neckbeard is an Atomic CSS in JS framework that leverages the composibility nature of helper (utility) classes and the awesome power of <a href="https://github.com/Khan/aphrodite" className={ nb("tc5 xtd h-tc1") }>Aphrodite</a> to build components rapidly.
            Neckbeard is highly inspired by <a href="https://www.buildwithbeard.com" className={ nb("tc5 xtd h-tc1") }>Beard</a>, built by <a href="https://www.twitter.com/davidhemphill" className={ nb("tc5 xtd h-tc1") }>@davidhemphill</a> and uses much of the same syntax as Beard.
            The main difference is Neckbeard is built with Javacript and Beard is built with SCSS. Using Javascript to build a CSS framework allows us to do some
            fantastic things.
        </Copy>
        <H3>Helper Classes</H3>
        <Copy className={ nb("ft4 sans tcg50 lh10 fwlight mb2") }>
            A Helper Class is a very flat and simple method for applying aesthetic styles to HTML elements. These classes can be used in numerous contexts and are optimal for
            composing small to large components or sprinkling throughout your site or application. Neckbeard provides a Helper Class for just about everything you can think
            of and is extensible per project if custom classes are necessary. An example of a Helper Class to add spacing looks like <Code>.pv1</Code> which translates
            to <Code>padding-top: 1rem; padding-bottom: 1rem;</Code> and the classes making up these code blocks consist of <Code>.ft3.brdr1.br2.bcg10.bgg05.pv05.ph1</Code>.
            In fact this entire site is made up of such helpers.
        </Copy>
        <H3>CSS in Javascript</H3>
        <Copy className={ nb("ft4 sans tcg50 lh10 fwlight mb2") }>
            CSS in Javascript is a fairly new practice in which we write our CSS in Javascript as an object and load styles on the page dynamically. Because the CSS syntax is fairly JSONish to begin with, using Javascript
            just makes sense. Javascript gives us the power of a real programming language to generate, extend, and compose CSS classes. Whereas something like SCSS or LESS can feel consiberably more limiting. Neckbeard is
            framework agnostic and can be used anywhere you use Javascript to add CSS classes.
        </Copy>
        <Copy>
            Neckbeard wraps the library <a href="https://github.com/Khan/aphrodite" className={ nb("tc5 xtd h-tc1") }>Aphrodite</a> under the hood which is used to apply only the styles that you're actually using to the page.
        </Copy>
        <H3>The Magical Unicorn 🦄</H3>
        <Copy>
            When we combine both the Helper Classes and CSS in Javascript concepts together something magical happens.
            <div className={ nb("ph1 pt1 tcg40 sm-mb1 md-xmb") }>- It works great with component based libraries / frameworks like React because you can couple style + component in the same file together forever in harmony.</div>
            <div className={ nb("ph1 tcg40 sm-mb1 md-xmb") }>- In the case with something like React, your component name IS all you are concerned with.</div>
            <div className={ nb("ph1 tcg40 sm-mb1 md-xmb") }>- No more global CSS scope.</div>
            <div className={ nb("ph1 tcg40 sm-mb1 md-xmb") }>- No longer worry about naming CSS selectors.</div>
            <div className={ nb("ph1 tcg40 sm-mb1 md-xmb") }>- No namespacing to try and establish block level elements.</div>
            <div className={ nb("ph1 tcg40 sm-mb1 md-xmb") }>- No cascading styles and CSS specificity issues.</div>
        </Copy>

        <H3>Example Usage in React</H3>
        <div className={ nb("lh4") }>
            <Highlight className={ nb("ph2 pv2") }>
                { snippet1 }
            </Highlight>
        </div>
        <Copy></Copy>
    </div>
)

export default Installation
