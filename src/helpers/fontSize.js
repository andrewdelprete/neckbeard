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
    selectors["ft1"] = {
        "font-size": "1rem"
    }

    for (let x = 2; x <= limit; x++) {
        selectors[`ft${ x }`] = {
            "font-size": `${ 1 + (x - 1) * incrementBy }rem`
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
