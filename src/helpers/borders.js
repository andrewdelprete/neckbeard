import { addMediaQueries } from '../'

/**
 * Borders
 *
 * @param  {Number} limit=10
 * @param  {object} helper settings
 * @param  {Object} breakpoints={} (optional)
 * @return {Object}
 */
export default function borders({ helpers: { borders: { limit, incrementBy, useBreakpoints } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Borders
     */
    for (let x = 1; x <= limit; x++) {
        selectors[`brdr${ x }`] = {
            "border-style": "solid",
            "border-width": `${ x }px`,
        }

        selectors[`brdr${ x }--top`] = {
            "border-top-style": "solid",
            "border-top-width": `${ x }px`,
        }

        selectors[`brdr${ x }--right`] = {
            "border-right-style": "solid",
            "border-right-width": `${ x }px`,
        }

        selectors[`brdr${ x }--bottom`] = {
            "border-bottom-style": "solid",
            "border-bottom-width": `${ x }px`,
        }

        selectors[`brdr${ x }--left`] = {
            "border-left-style": "solid",
            "border-left-width": `${ x }px`,
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
