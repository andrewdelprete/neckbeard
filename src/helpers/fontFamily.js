import { addMediaQueries } from '../'

/**
 * Font Family
 *
 * @param  {object} useBreakpoints
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function fontFamily({ helpers: { fontFamily: { useBreakpoints } }, fonts, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Font Family Helpers
     */
    selectors["sans"] = { fontFamily: fonts.sans }
    selectors["serif"] = { fontFamily: fonts.serif }
    selectors["code"] = { fontFamily: fonts.code }

    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0 && useBreakpoints) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
