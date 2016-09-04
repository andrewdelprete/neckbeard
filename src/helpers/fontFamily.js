import addMediaQueries from '../utilities/addMediaQueries'

/**
 * Font Family
 *
 * @param  {object} responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function fontFamily({ helpers: { fontFamily: { responsive } }, fonts, breakpoints }) {
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
    if (Object.keys(breakpoints).length !== 0 && responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
