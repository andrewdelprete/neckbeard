import React, { Component } from 'react'

/**
 * BlockQuote
 */
const BlockQuote = ({ children }) => (
    <blockquote className={ nb("bg3 bc2 pa2 ft3 ls1 br3 mb2 tcw xbrdr") }>{ children }</blockquote>
)

export default BlockQuote
