import { addMediaQueries } from '../'

/**
 * Overflow
 *
 * @param  {object} useBreakpoints
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function overflow({ helpers: { overflow: { useBreakpoints } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Text Alignment Helpers
     */
    selectors['ofh'] = { overflow: 'hidden' }
    selectors['ofx'] = { overflowX: 'scroll' }
    selectors['ofy'] = { overflowY: 'scroll' }

    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0 && useBreakpoints) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
