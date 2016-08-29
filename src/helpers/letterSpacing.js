import { addMediaQueries } from '../'

/**
 * Letter Spacing
 *
 * @param  {object} limit, incrementBy, useBreakpoints
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function letterSpacing({ helpers: { letterSpacing: { limit, incrementBy, useBreakpoints } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Letter Spacing
     */
    for (let x = 1; x <= limit; x++) {
        selectors[`ls${ x }`] = {
            "letter-spacing": `${ x * incrementBy }rem`
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
