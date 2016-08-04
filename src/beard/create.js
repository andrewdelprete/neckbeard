import { StyleSheet } from 'aphrodite'
import _ from 'lodash'

import defaultSettings from './settings'

/**
 * Returns an object ran through Aphrodite
 * and includes media queries.
 * @param  {array} selectorFns
 * @param  {object} settings
 * @return {object}
 */
export default function create(selectorFns, settings = defaultSettings) {
    return _(selectorFns).map(fn => {
        const selectors = fn(settings)
        let only = null
        let media = null

        if (Object.keys(settings.breakpoints).length !== 0) {
            media = Object
                .keys(settings.breakpoints).reduce((previous, key) => ({
                    ...previous,
                    [key]: StyleSheet.create({ ...selectors[key] })
                }), {})

            only = Object
                .keys(selectors.only).reduce((previous, key) => ({
                    ...previous,
                    [key]: StyleSheet.create({ ...selectors.only[key] })
                }), {})
        }

        return {
            ...StyleSheet.create(selectors),
            ...media,
            only: { ...only }
        }
    })
    .flatMap()
    .value()[0]
}
