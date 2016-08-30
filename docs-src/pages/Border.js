import React, { Component } from "react"
import Highlight from "react-highlight"
import Heading1 from "../components/Headings/Heading1"

/**
 * Overview Page
 */
const snippet1 =
`
`
const Border = () => (
    <div>
        <Heading1>Border</Heading1>
        <div className={ nb("lh4") }>
            <Highlight className={ nb("ph2 pv2") }>
                { snippet1 }
            </Highlight>
        </div>
    </div>
)

export default Border
