import addMediaQueries from '../utilities/addMediaQueries'

/**
 * Font Size
 *
 * @param  {object} limit, incrementBy, responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function fontSize({ helpers: { fontSize: { limit, incrementBy, responsive } }, breakpoints }) {
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
    if (Object.keys(breakpoints).length !== 0 && responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
