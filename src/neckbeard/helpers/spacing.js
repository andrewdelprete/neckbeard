import { addMediaQueries } from '../'

/**
 * Spacing
 *
 * @param  {Number} limit=10
 * @param  {Number} incrementBy=1
 * @param  {Object} breakpoints={} (optional)
 * @return {Object}
 */
export default function spacing({ helpers: { spacing: { limit, incrementBy } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Margin
     */
    for (let x = incrementBy; x <= limit; x += incrementBy) {
        selectors[`mh${ x }`] = {
            "margin-left": `${ x }rem`,
            "margin-right": `${ x }rem`
        }
        selectors[`mv${ x }`] = {
            "margin-top": `${ x }rem`,
            "margin-bottom": `${ x }rem`
        }
        selectors[`ml${ x }`] = {
            "margin-left": `${ x }rem`
        }
        selectors[`mr${ x }`] = {
            "margin-right": `${ x }rem`
        }
        selectors[`mt${ x }`] = {
            "margin-top": `${ x }rem`
        }
        selectors[`mb${ x }`] = {
            "margin-bottom": `${ x }rem`
        }

        // Remove Margin
        selectors[`xmv`] = {
            "margin-top": "0",
            "margin-bottom": "0"
        }
        selectors[`xmh`] = {
            "margin-left": "0",
            "margin-right": "0"
        }
        selectors[`xmt`] = {
            "margin-top": "0"
        }
        selectors[`xmb`] = {
            "margin-bottom": "0"
        }
        selectors[`xml`] = {
            "margin-left": "0"
        }
        selectors[`xmr`] = {
            "margin-right": "0"
        }
    }

    /**
     * Padding
     */
    for (let x = incrementBy; x <= limit; x+=incrementBy) {
        selectors[`ph${ x }`] = {
            "padding-left": `${ x }rem`,
            "padding-right": `${ x }rem`
        }
        selectors[`pv${ x }`] = {
            "padding-top": `${ x }rem`,
            "padding-bottom": `${ x }rem`
        }
        selectors[`pl${ x }`] = {
            "padding-left": `${ x }rem`
        }
        selectors[`pr${ x }`] = {
            "padding-right": `${ x }rem`
        }
        selectors[`pt${ x }`] = {
            "padding-top": `${ x }rem`
        }
        selectors[`pb${ x }`] = {
            "padding-bottom": `${ x }rem`
        }

        // Remove Padding
        selectors[`xpv`] = {
            "padding-top": "0",
            "padding-bottom": "0"
        }
        selectors[`xph`] = {
            "padding-left": "0",
            "padding-right": "0"
        }
        selectors[`xpt`] = {
            "padding-top": "0"
        }
        selectors[`xpb`] = {
            "padding-bottom": "0"
        }
        selectors[`xpl`] = {
            "padding-left": "0"
        }
        selectors[`xpr`] = {
            "padding-right": "0"
        }
    }

    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
