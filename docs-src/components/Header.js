import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

/**
 * Header
 */
export default class Header extends Component {
    componentDidMount() {
        const taglines = ["Javascript all the things", "Your kids will thank us", "The Future", "Pushing it to the next level for future generations"]
        const tagline = document.getElementById('tagline')

        tagline.innerHTML = taglines[Math.floor(Math.random()*taglines.length)]
    }

    render() {
        return (
            <div className={ nb("bg1 flex aic acc wrap jcsb") }>
                <div className={ nb("iflex aic") }>
                    <Link to="/" className={ nb("fwthin uppercase pv2 mr2 ft6 sans ls3 xtd tcb dim")}>Neckbeard</Link>
                    <div className={ nb("tcb sm-dn md-db fwsemibold ft3 ls1 sans") } id="tagline">Default</div>
                </div>
                <div className={ nb("md-db lg-dn") }>
                    <a onClick={ this.props.onMenuToggle } className={ nb("sans ft3 fwthin uppercase tcb xtd ls1 code brdr1 br3 bg2 ph1 pv05 bc5 dim pointer") }>Menu</a>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    onMenuToggle: PropTypes.func.isRequired
}
