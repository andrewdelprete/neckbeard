import { addMediaQueries } from '../'

/**
 * Overflow
 *
 * @param  {object} responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function overflow({ helpers: { overflow: { responsive } }, breakpoints }) {
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
    if (Object.keys(breakpoints).length !== 0 && responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
