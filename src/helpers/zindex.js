import { addMediaQueries } from '../'

/**
 * Z-index
 *
 * @param  {Number} limit=10
 * @param  {object} limit, incrementBy, useBreakpoints
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function zindex({ helpers: { zindex: { limit, incrementBy, useBreakpoints } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * z-index
     */
    for (let x = 1; x <= limit; x++) {
        selectors[`zi${ x }`] = {
            "z-index": `${ x }`
        }
    }

    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0 && useBreakpoints) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
