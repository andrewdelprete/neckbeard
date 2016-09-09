import React, { Component } from "react"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import H3 from "../components/elements/H3"
import Code from "../components/elements/Code"
import Copy from "../components/elements/Copy"

/**
 * Installation Page
 */

const snippet =
`import React, { Component } from "react"

// ES6 Modules and CommonJS compatible
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
        <H1>Installation</H1>
        <Copy>There are several ways of installing the awesome that is Neckbeard:</Copy>
        <H2>NPM</H2>
        <Highlight className={ nb("pa2 mb2 lh5 ft4") }>
            > npm install neckbeard --save-dev
        </Highlight>
        <Highlight className={ nb("pa2 mb2 lh5 ft4") }>
            { snippet }
        </Highlight>
        <H2>CDN</H2>
        <Highlight className={ nb("pa2 mb2 lh5 ft4") }>
            { '<script src="https://unpkg.com/neckbeard"></script>' }
        </Highlight>
        <Copy>
            Using the CDN option Neckbeard is added as a global <Code>window.Neckbeard</Code>
        </Copy>
        <H2>No  Magical Unicorn?</H2>
        <Copy>If you don't want to utilize CSS in JS, have no fear, we've exported all the helpers into a CSS file for you. Keep in mind this is a static CSS file and you won't be able to adjust settings.</Copy>
        <Highlight className={ nb("pa2 mb2 lh5 ft4") }>
            { '<link href="https://unpkg.com/neckbeard/build/nb.css" rel="stylesheet" />' }
        </Highlight>
    </div>
)

export default Installation
