import { addMediaQueries } from '../'

/**
 * Display
 *
 * @param  {object} responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function display({ helpers: { display: { responsive } }, breakpoints }) {
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

    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0 && responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    selectors["full"] = {
        "display": "block",
        "width": "100%"
    }
    selectors["w100"] = { "width": "100%" }
    selectors["h100"] = { "height": "100%" }

    return { ...selectors, ...media }
}
