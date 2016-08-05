import { addMediaQueries } from '../'

/**
 * Font Sizes
 *
 * @param  {Number} limit=10
 * @param  {Number} incrementBy=1
 * @param  {Object} breakpoints={} (optional)
 * @return {Object}
 */
export default function fontSizes({ helpers: { fontSizes: { limit, incrementBy } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Font Sizes
     */
    for (let x = incrementBy; x <= limit; x += incrementBy) {
        selectors[`ft${ x }`] = {
            "font-size": `${ x }rem`
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
