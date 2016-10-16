import React, { Component } from 'react'

/**
 * Copy
 */
const Copy = ({ children }) => {
    const text = {
        ...nb.ft5,
        ...nb.sans,
        ...nb.tcg50,
        ...nb.lh9,
        ...nb.fwlight,
        ...nb.mb2
    }

    return <div className={ nb(text) }>{ children }</div>
}

export default Copy
