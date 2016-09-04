import addMediaQueries from '../utilities/addMediaQueries'

/**
 * Text Decoration
 *
 * @param  {object} responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function textDecoration({ helpers: { textDecoration: { responsive } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Text Decoration Helpers
     */
    selectors["overline"] = { textDecoration: "overline"}
    selectors["line-through"] = { textDecoration: "line-through" }
    selectors["underline"] = { textDecoration: "underline" }
    selectors["xtd"] = { textDecoration: "none" }

    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0 && responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
