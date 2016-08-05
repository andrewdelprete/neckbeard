import { addMediaQueries } from '../'

import { colors } from '../settings/colors'

/**
 * Colors
 *
 * @param  {Number} idk
 * @param  {object} helper settings
 * @param  {Object} breakpoints={} (optional)
 * @return {Object}
 */
export default function colors({ helpers: { colors: { limit, incrementBy } }, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Colors
     */
     Object.keys(colors.beardColors).forEach((beardColor, index) => {
         Object.keys(selectors).forEach(selector => {
             //Stuff
         })
     })

    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
