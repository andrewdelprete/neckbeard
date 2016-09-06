import addMediaQueries from '../utilities/addMediaQueries'

/**
 * Letter Spacing
 *
 * @param  {object} limit, incrementBy, responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function letterSpacing({ helpers: { letterSpacing: { limit, incrementBy, responsive } }, breakpoints }) {
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
    if (responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
