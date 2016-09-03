import React, { Component } from 'react'

/**
 * Code
 */
const Code = ({ children, type = "gray" }) => {
    const classes = {
        gray: "ft3 brdr1 br3 bcg10 bgg05 pv05 ph05 code",
        purple: "ft3 br3 xbrdr bg5 pv05 ph05 tcw code"
    }

    return (
        <code className={ nb(classes[type]) }>{ children }</code>
    )
}

export default Code
