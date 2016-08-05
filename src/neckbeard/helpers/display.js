import { addMediaQueries } from '../'

/**
 * Display
 *
 * @param  {Object} breakpoints={} (optional)
 * @return {Object}
 */
export default function display({ helpers: { display }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Display
     */
    selectors["db"] = { "display": "block" }
    selectors["di"] = { "display": "inline" }
    selectors["dib"] = { "display": "inline-block" }
    selectors["dn"] = { "display": "none" }
    selectors["df"] = { "display": "flex" }
    selectors["full"] = {
        "display": "block",
        "width": "100%"
    }
    selectors["w100"] = { "width": "100%" }

    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
