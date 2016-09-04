import addMediaQueries from '../utilities/addMediaQueries'

/**
 * Line Height
 *
 * @param  {object} responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function lineHeight({ helpers: { lineHeight: { responsive, limit, incrementBy } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Line Height Helpers
     */
    selectors["lh1"] = {
        "line-height": "1rem"
    }

    for (let x = 1; x <= limit; x++) {
        selectors[`lh${ x }`] = {
            "line-height": `${ 1 + x * incrementBy }rem`
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
