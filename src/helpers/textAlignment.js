import addMediaQueries from '../utilities/addMediaQueries'

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
    if (responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
