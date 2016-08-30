import { addMediaQueries } from '../'

/**
 * Spacing
 *
 * @param  {object} limit, incrementBy, useBreakpoints
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function spacing({ helpers: { spacing: { limit, incrementBy, useBreakpoints } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Margin
     */
    selectors["mh05"] = {
        "margin-left": "0.5rem",
        "margin-right": "0.5rem",
    }
    selectors["mv05"] = {
        "margin-top": "0.5rem",
        "margin-bottom": "0.5rem",
    }
    selectors["ml05"] = {
        "margin-left": "0.5rem"
    }
    selectors["mr05"] = {
        "margin-right": "0.5rem"
    }
    selectors["mb05"] = {
        "margin-bottom": "0.5rem"
    }
    selectors["mt05"] = {
        "margin-top": "0.5rem"
    }

    for (let x = incrementBy; x <= limit; x += incrementBy) {
        selectors[`mh${ x }`] = {
            "margin-left": `${ x * incrementBy }rem`,
            "margin-right": `${ x * incrementBy }rem`
        }
        selectors[`mv${ x }`] = {
            "margin-top": `${ x * incrementBy }rem`,
            "margin-bottom": `${ x * incrementBy }rem`
        }
        selectors[`ml${ x }`] = {
            "margin-left": `${ x * incrementBy }rem`
        }
        selectors[`mr${ x }`] = {
            "margin-right": `${ x * incrementBy }rem`
        }
        selectors[`mt${ x }`] = {
            "margin-top": `${ x * incrementBy }rem`
        }
        selectors[`mb${ x }`] = {
            "margin-bottom": `${ x * incrementBy }rem`
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
    selectors["ph05"] = {
        "padding-left": "0.5rem",
        "padding-right": "0.5rem",
    }
    selectors["pv05"] = {
        "padding-top": "0.5rem",
        "padding-bottom": "0.5rem",
    }
    selectors["pl05"] = {
        "padding-left": "0.5rem"
    }
    selectors["pr05"] = {
        "padding-right": "0.5rem"
    }
    selectors["pb05"] = {
        "padding-bottom": "0.5rem"
    }
    selectors["pt05"] = {
        "padding-top": "0.5rem"
    }
    for (let x = 1; x <= limit; x++) {
        selectors[`ph${ x }`] = {
            "padding-left": `${ x * incrementBy }rem`,
            "padding-right": `${ x * incrementBy }rem`
        }
        selectors[`pv${ x }`] = {
            "padding-top": `${ x * incrementBy }rem`,
            "padding-bottom": `${ x * incrementBy }rem`
        }
        selectors[`pl${ x }`] = {
            "padding-left": `${ x * incrementBy }rem`
        }
        selectors[`pr${ x }`] = {
            "padding-right": `${ x * incrementBy }rem`
        }
        selectors[`pt${ x }`] = {
            "padding-top": `${ x * incrementBy }rem`
        }
        selectors[`pb${ x }`] = {
            "padding-bottom": `${ x * incrementBy }rem`
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
    if (Object.keys(breakpoints).length !== 0 && useBreakpoints) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
