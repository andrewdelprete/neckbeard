import React, { Component } from 'react'

/**
 * Heading 1
 */
const H1 = ({ children, type = "dark" }) => {
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

export default H1
