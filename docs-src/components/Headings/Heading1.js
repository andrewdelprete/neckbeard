import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'

/**
 * Heading 1
 */
const Heading1 = ({ children, type = "dark" }) => {
    const classes = {
        dark: "ft5 pt1 pb2 xmv tcg90 ls1 uppercase sans fwnormal fwsemibold",
        light: "ft5 pt1 pb2 xmv pb2 tcg20 ls1 uppercase sans fwnormal fwsemibold"
    }

    return (
        <h1 className={ nb(classes[type]) }>
            { children }
        </h1>
    )
}

export default Heading1
