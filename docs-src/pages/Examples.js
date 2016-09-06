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
 * Examples Page
 */
const Examples = () => (
    <div>
        <H1>Examples</H1>
        <H3>Button Component - ReactJS</H3>
        <iframe height='300' scrolling='no' src='//codepen.io/andrewdelprete/embed/VKYQqb/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameBorder='no' allowTransparency='true' allowFullscreen='true' className={ nb("w100") }>See the Pen <a href='http://codepen.io/andrewdelprete/pen/VKYQqb/'>Neckbeard Button Component Demo in ReactJS</a> by Andrew Del Prete (<a href='http://codepen.io/andrewdelprete'>@andrewdelprete</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>
    </div>
)

export default Examples
