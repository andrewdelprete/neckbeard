import { addMediaQueries } from '../'

/**
 * Floats
 *
 * @param  {object} useBreakpoints
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function float({ helpers: { float: { useBreakpoints } }, breakpoints }) {
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
    if (Object.keys(breakpoints).length !== 0 && useBreakpoints) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
