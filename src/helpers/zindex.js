import { addMediaQueries } from '../'

/**
 * Z-index
 *
 * @param  {Number} limit=10
 * @param  {object} limit, incrementBy, responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function zindex({ helpers: { zIndex: { limit, incrementBy, responsive } }, breakpoints }) {
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
    if (Object.keys(breakpoints).length !== 0 && responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
