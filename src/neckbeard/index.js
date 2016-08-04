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
 * @param  {array} helperFns
 * @param  {object} settings
 * @return {object}
 */
export function create(helperFns, settings = defaultSettings) {
    return _(helperFns).map(fn => {
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


export function addMediaQueries(selectors, breakpoints) {
    let media = {}

    Object.keys(breakpoints).forEach((breakpoint, index) => {
        media.only = {
            ...media.only,
            [breakpoint]: {}
        }
        media[breakpoint] = {}

        Object.keys(selectors).forEach(selector => {
            // {breakpoint}.{selector}
            media[breakpoint][selector] = {
                [`@media (min-width: ${ breakpoints[breakpoint] }px)`]: selectors[selector]
            }

            // only.{breakpoint}.{selector}
            if (index === 0) {
                media['only'][breakpoint][selector] = {
                    [`@media (max-width: ${ breakpoints[breakpoint] }px)`]: selectors[selector]
                }
            } else if (index === breakpoints.length) {
                media['only'][breakpoint][selector] = {
                    [`@media (min-width: ${ breakpoints[breakpoint] }px)`]: selectors[selector]
                }
            } else {
                media['only'][breakpoint][selector] = {
                    [`@media (min-width: ${ breakpoints[breakpoint] }px) and (max-width: ${ breakpoints[Object.keys(breakpoints)[index + 1]] }px)`]: selectors[selector]
                }
            }
        })
    })

    return media
}

/**
 * Neckbeard
 * @type {Object}
 */
export default {
    create,
    addMediaQueries,
    defaultSettings,
    helpers: {
        spacing
    },
    all() {
        return Object.keys(this.helpers).map(key => this.helpers[key]);
    }
}
