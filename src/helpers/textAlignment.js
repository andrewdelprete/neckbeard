import { addMediaQueries } from '../'

/**
 * Text Alignment
 *
 * @param  {object} responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function textAlignment({ helpers: { textAlignment: { responsive } }, breakpoints }) {
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
    if (Object.keys(breakpoints).length !== 0 && responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
