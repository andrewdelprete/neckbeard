import { addMediaQueries } from '../'

/**
 * Line Height
 *
 * @param  {object} useBreakpoints
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function lineHeight({ helpers: { lineHeights: { useBreakpoints } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Line Height Helpers
     */
    selectors["lh1"] = { "line-height": "1rem" }
    selectors["lh1-1"] = { "line-height": "1.1rem" }
    selectors["lh1-2"] = { "line-height": "1.2rem" }
    selectors["lh1-3"] = { "line-height": "1.3rem" }
    selectors["lh1-4"] = { "line-height": "1.4rem" }
    selectors["lh1-5"] = { "line-height": "1.5rem" }
    selectors["lh1-6"] = { "line-height": "1.6rem" }
    selectors["lh1-7"] = { "line-height": "1.7rem" }
    selectors["lh1-8"] = { "line-height": "1.8rem" }
    selectors["lh1-9"] = { "line-height": "1.9rem" }
    selectors["lh2"] = { "line-height": "2rem" }

    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0 && useBreakpoints) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
