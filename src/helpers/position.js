import addMediaQueries from '../utilities/addMediaQueries'

/**
 * Position
 *
 * @param  {object} responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function position({ helpers: { position: { responsive } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Text Alignment Helpers
     */
    selectors['relative'] = { position: 'relative' }
    selectors['absolute'] = { position: 'absolute' }
    selectors['fixed'] = { position: 'fixed' }
    selectors['pin-top'] = { top: 0 }
    selectors['pin-bottom'] = { bottom: 0 }
    selectors['pin-right'] = { right: 0 }
    selectors['pin-left'] = { left: 0 }
    selectors['pin-edges'] = { top: 0, right: 0, bottom: 0, left: 0 }

    /**
     * Media Queries
     */
    if (responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
