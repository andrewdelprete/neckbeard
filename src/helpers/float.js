import addMediaQueries from '../utilities/addMediaQueries'

/**
 * Floats
 *
 * @param  {object} responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function float({ helpers: { float: { responsive } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Float Helpers
     */
    selectors["fl"] = { "float": "left" }
    selectors["fr"] = { "float": "right" }
    selectors["fn"] = { "float": "none" }
    selectors["finit"] = { "float": "initial" }
    selectors["finhe"] = { "float": "inherit" }

    /**
     * Media Queries
     */
    if (responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
