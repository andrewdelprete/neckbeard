import { addMediaQueries } from '../'

/**
 * Font Sizes
 *
 * @param  {Number} limit=10
 * @param  {object} helper settings
 * @param  {Object} breakpoints={} (optional)
 * @return {Object}
 */
export default function fontSizes({ helpers: { fontSizes: { limit, incrementBy } }, breakpoints }) {
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
    if (Object.keys(breakpoints).length !== 0) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
