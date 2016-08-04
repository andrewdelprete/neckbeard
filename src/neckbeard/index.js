import { StyleSheet } from 'aphrodite'
import _ from 'lodash'
import spacing from './helpers/spacing'

/**
 * Neckbeard Default Settings
 * @type {Object}
 */
export const defaultSettings = {
    breakpoints: {
        sm: 600,
        md: 800,
        lg: 1200
    },
    helpers: {
        spacing: {
            limit: 10,
            incrementBy: 1
        }
    }
}

/**
 * Returns an object ran through Aphrodite
 * and includes media queries.
 * @param  {array} selectorFns
 * @param  {object} settings
 * @return {object}
 */
export function create(selectorFns, settings = defaultSettings) {
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

/**
 * Neckbeard
 * @type {Object}
 */
export default {
    create,
    defaultSettings,
    helpers: {
        spacing
    },
    all() {
        return Object.keys(this.helpers).map(key => this.helpers[key]);
    }
}
