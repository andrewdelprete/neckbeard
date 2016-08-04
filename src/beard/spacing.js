/**
 * Spacing
 *
 * @param  {Number} limit=10
 * @param  {Number} incrementBy=1
 * @param  {Object} breakpoints={} (optional)
 * @return {Object}
 */
export default function spacing({ limit = 10, incrementBy = 1, breakpoints = {} }) {
    const style = {}
    const media = {}

    /**
     * Margin
     */
    for (let x = incrementBy; x <= limit; x+=incrementBy) {
        style[`mh${ x }`] = {
            "margin-left": `${ x }rem`,
            "margin-right": `${ x }rem`
        }
        style[`mv${ x }`] = {
            "margin-top": `${ x }rem`,
            "margin-bottom": `${ x }rem`
        }
        style[`ml${ x }`] = {
            "margin-left": `${ x }rem`
        }
        style[`mr${ x }`] = {
            "margin-right": `${ x }rem`
        }
        style[`mt${ x }`] = {
            "margin-top": `${ x }rem`
        }
        style[`mb${ x }`] = {
            "margin-bottom": `${ x }rem`
        }

        // Remove Margin
        style[`xmv`] = {
            "margin-top": "0",
            "margin-bottom": "0"
        }
        style[`xmh`] = {
            "margin-left": "0",
            "margin-right": "0"
        }
        style[`xmt`] = {
            "margin-top": "0"
        }
        style[`xmb`] = {
            "margin-bottom": "0"
        }
        style[`xml`] = {
            "margin-left": "0"
        }
        style[`xmr`] = {
            "margin-right": "0"
        }
    }

    /**
     * Paddings
     */
    for (let x = incrementBy; x <= limit; x+=incrementBy) {
        style[`ph${ x }`] = {
            "padding-left": `${ x }rem`,
            "padding-right": `${ x }rem`
        }
        style[`pv${ x }`] = {
            "padding-top": `${ x }rem`,
            "padding-bottom": `${ x }rem`
        }
        style[`pl${ x }`] = {
            "padding-left": `${ x }rem`
        }
        style[`pr${ x }`] = {
            "padding-right": `${ x }rem`
        }
        style[`pt${ x }`] = {
            "padding-top": `${ x }rem`
        }
        style[`pb${ x }`] = {
            "padding-bottom": `${ x }rem`
        }

        // Remove Padding
        style[`xpv`] = {
            "padding-top": "0",
            "padding-bottom": "0"
        }
        style[`xph`] = {
            "padding-left": "0",
            "padding-right": "0"
        }
        style[`xpt`] = {
            "padding-top": "0"
        }
        style[`xpb`] = {
            "padding-bottom": "0"
        }
        style[`xpl`] = {
            "padding-left": "0"
        }
        style[`xpr`] = {
            "padding-right": "0"
        }
    }

    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0) {
        Object.keys(breakpoints).forEach((breakpoint, index) => {
            Object.keys(style).forEach(selector => {
                // {breakpoint}_{selector}
                media[`${ breakpoint }_${ selector }`] = {
                    [`@media (min-width: ${ breakpoints[breakpoint] }px)`]: style[selector]
                }

                // only_{breakpoint}_{selector}
                if (index === 0) {
                    media[`only_${ breakpoint }_${ selector }`] = {
                        [`@media (max-width: ${ breakpoints[Object.keys(breakpoints)[index ]] }px)`]: style[selector]
                    }
                } else if (index === breakpoints.length) {
                    media[`only_${ breakpoint }_${ selector }`] = {
                        [`@media (min-width: ${ breakpoints[Object.keys(breakpoints)[index ]] }px)`]: style[selector]
                    }
                } else {
                    media[`only_${ breakpoint }_${ selector }`] = {
                        [`@media (min-width: ${ breakpoints[breakpoint] }px) and (max-width: ${ breakpoints[Object.keys(breakpoints)[index + 1]] }px)`]: style[selector]
                    }
                }
            })
        })
    }

    return { ...style, ...media }
}
