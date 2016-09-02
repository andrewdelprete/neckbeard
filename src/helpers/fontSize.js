import { addMediaQueries } from '../'

/**
 * Font Size
 *
 * @param  {object} limit, incrementBy, useBreakpoints
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function fontSize({ helpers: { fontSize: { limit, incrementBy, useBreakpoints } }, breakpoints }) {
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
