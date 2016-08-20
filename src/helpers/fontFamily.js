import { addMediaQueries } from '../'

/**
 * Font Family
 *
 * @param  {object} useBreakpoints
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function fontFamily({ helpers: { fontFamily: { useBreakpoints } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Font Family Helpers
     */
    selectors["sans"] = { fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"}
    selectors["serif"] = { fontFamily: "Merriweather, Georgia, serif" }
    selectors["code"] = { fontFamily: "Consolas, Monaco, 'Andale Mono', monospace" }

    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0 && useBreakpoints) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
