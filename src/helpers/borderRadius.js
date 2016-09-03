import { addMediaQueries } from '../'

/**
 * Border Radius
 *
 * @param  {Number} limit=10
 * @param  {object} limit, incrementBy, responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function borderRadius({ helpers: { borderRadius: { limit, incrementBy, responsive } }, breakpoints }) {
    
    let selectors = {}
    let media = {}

    /**
     * Borders
     */
    for (let x = 1; x <= limit; x++) {
        selectors[`br${ x }`] = {
            borderRadius: `${ x }px`
        }

        selectors[`brr${ x }`] = {
            "border-top-right": `${ x }px`,
            "border-bottom-right": `${ x }px`
        }

        selectors[`blr${ x }`] = {
            "border-top-left": `${ x }px`,
            "border-bottom-left": `${ x }px`
        }

        selectors[`btlr${ x }`] = {
            "border-top-left": `${ x }px`
        }

        selectors[`btrr${ x }`] = {
            "border-top-right": `${ x }px`
        }

        selectors[`bblr${ x }`] = {
            "border-bottom-left": `${ x }px`
        }

        selectors[`bbrr${ x }`] = {
            "border-bottom-right": `${ x }px`
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
