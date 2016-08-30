import React, { Component } from "react"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"

/**
 * Overview Page
 */
const snippet1 = ``
const Border = () => (
    <div>
        <H1>Border</H1>
        <div className={ nb("lh4") }>
            <Highlight className={ nb("ph2 pv2") }>
                { snippet1 }
            </Highlight>
        </div>
    </div>
)

export default Border
