import { addMediaQueries } from '../'

/**
 * Text Alignment
 *
 * @param  {object} useBreakpoints
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function textAlignment({ helpers: { textAlignment: { useBreakpoints } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Text Alignment Helpers
     */
    selectors['tal'] = { textAlign: 'left' }
    selectors['tac'] = { textAlign: 'center' }
    selectors['tar'] = { textAlign: 'right' }

    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0 && useBreakpoints) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
