import { addMediaQueries } from '../'

/**
 * Font Sizes
 *
 * @param  {object} limit, incrementBy, useBreakpoints
 * @param  {Object} breakpoints={} (optional)
 * @return {Object}
 */
export default function fontSizes({ helpers: { fontSizes: { limit, incrementBy, useBreakpoints } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Font Sizes
     */
    for (let x = 1; x <= limit; x++) {
        selectors[`ft${ x }`] = {
            "font-size": `${ x * incrementBy }rem`
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
