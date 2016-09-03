import { addMediaQueries } from '../'

/**
 * Font Weight
 *
 * @param  {object} responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function fontWeight({ helpers: { fontWeight: { responsive } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Font Weight Helpers
     */
    selectors["fw1"] = { fontWeight: "100" }
    selectors["fw2"] = { fontWeight: "200" }
    selectors["fw3"] = { fontWeight: "300" }
    selectors["fw4"] = { fontWeight: "400" }
    selectors["fw5"] = { fontWeight: "500" }
    selectors["fw6"] = { fontWeight: "600" }
    selectors["fw7"] = { fontWeight: "700" }
    selectors["fw8"] = { fontWeight: "800" }
    selectors["fw9"] = { fontWeight: "900" }

    selectors["fwthin"] = { fontWeight: "100" }
    selectors["fwxlight"] = { fontWeight: "200" }
    selectors["fwlight"] = { fontWeight: "300" }
    selectors["fwnormal"] = { fontWeight: "400" }
    selectors["fwmedium"] = { fontWeight: "500" }
    selectors["fwsemibold"] = { fontWeight: "600" }
    selectors["fwbold"] = { fontWeight: "700" }
    selectors["fwxbold"] = { fontWeight: "800" }
    selectors["fwblack"] = { fontWeight: "900" }

    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0 && responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
