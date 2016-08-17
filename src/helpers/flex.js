import { addMediaQueries } from '../'

/**
 * Flex
 *
 * @param  {object} useBreakpoints
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function flex({ helpers: { flex: { useBreakpoints } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Flexbox Helpers
     */
    selectors["flex"] = { "display": "flex" }
    selectors["iflex"] = { "display": "inline-flex" }
    selectors["flex-grow"] = { "flex-grow": 1 }

    // Flex Basis Helpers
    selectors["fb100"] = { "flex-basis": "100%" }

    // Flex Direction Helpers
    selectors["fdr"] = { "flex-direction": "row" }
    selectors["fdrr"] = { "flex-direction": "row-reverse" }
    selectors["fdc"] = { "flex-direction": "column" }
    selectors["fdcr"] = { "flex-direction": "column-reverse" }

    // Flex Wrap Helpers
    selectors["fwn"] = { "flex-wrap": "nowrap" }
    selectors["fww"] = { "flex-wrap": "wrap" }
    selectors["fwr"] = { "flex-wrap": "wrap-reverse" }

    // Justification Helpers
    selectors["jcc"] = { "justify-content": "center" }
    selectors["jcsb"] = { "justify-content": "space-between" }
    selectors["jcsa"] = { "justify-content": "space-around" }
    selectors["jcfs"] = { "justify-content": "flex-start" }
    selectors["jcfe"] = { "justify-content": "flex-end" }

    // Align Items Helpers
    selectors["aic"] = { "align-items": "center" }
    selectors["aifs"] = { "align-items": "flex-start" }
    selectors["aife"] = { "align-items": "flex-end" }
    selectors["ais"] = { "align-items": "stretch" }
    selectors["aib"] = { "align-items": "baseline" }

    // Align Content Helpers
    selectors["acc"] = { "align-content": "center" }
    selectors["acfs"] = { "align-content": "flex-start" }
    selectors["acfe"] = { "align-content": "flex-end" }
    selectors["acs"] = { "align-content": "stretch" }
    selectors["acb"] = { "align-content": "baseline" }


    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0 && useBreakpoints) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
