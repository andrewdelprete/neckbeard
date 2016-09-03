import React, { Component } from 'react'

/**
 * BlockQuote
 */
const BlockQuote = ({ children }) => (
    <blockquote className={ nb("bg3 bc2 ph2 pv2 br3 mb2 tcw xbrdr") }>{ children }</blockquote>
)

export default BlockQuote
