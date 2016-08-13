import { StyleSheet, css } from 'aphrodite'

/**
 * Neckbeard Imported Helpers
 */
import borderRadius from './helpers/borderRadius'
import borders from './helpers/borders'
import colors from './helpers/colors'
import display from './helpers/display'
import flex from './helpers/flex'
import fontSizes from './helpers/fontSizes'
import spacing from './helpers/spacing'

/**
 * Neckbeard Imported Settings
 */
import * as colorSettings from './settings/colors'

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
    colors: colorSettings,
    helpers: {
        colors: {
            useBreakpoints: false
        },
        display: {
            useBreakpoints: true
        },
        flex: {
            useBreakpoints: false
        },
        spacing: {
            limit: 10,
            incrementBy: 1,
            useBreakpoints: true
        },
        fontSizes: {
            limit: 17,
            incrementBy: .25,
            useBreakpoints: true
        },
        borders: {
            limit: 3,
            incrementBy: 1,
            useBreakpoints: true
        },
        borderRadius: {
            limit: 10,
            incrementBy: 1,
            useBreakpoints: true
        }
    }
}

/**
 * Returns an object of combined
 * helpers  ran through Aphrodite.
 * @param  {array} helperFns
 * @param  {object} settings
 * @return {object}
 */
export function create(helperFns, settings = defaultSettings) {
    const allSelectors = helperFns
        .map(fn => fn(settings))
        .reduce((previous, current) => ({ ...previous, ...current }))

    return (selectors) => {
        // Takes a string of CSS selectors and
        // checks to make sure each selector exists
        // and then returns a usable object.
        const selectorsObj = selectors
            .split(' ')
            .reduce((previous, current) => {
                if (allSelectors.hasOwnProperty(current)) {
                    return {
                        ...previous,
                        [current]: allSelectors[current]
                    }
                }

                return { ...previous }
            }, {})

        // Run our object through Aphrodite
        const stylesObj = StyleSheet.create(selectorsObj)

        const stylesArray = Object
            .keys(stylesObj)
            .map(key => stylesObj[key])

        return css(...stylesArray)
    }
}

/**
 * Adds media query classes to selectors
 * @param {object} selectors
 * @param {object} breakpoints
 */
export function addMediaQueries(selectors, breakpoints) {
    let media = {}

    Object.keys(breakpoints).forEach((breakpoint, index) => {
        Object.keys(selectors).forEach(selector => {
            // {breakpoint}-{selector}
            media[`${ breakpoint }-${ selector }`] = {
                [`@media (min-width: ${ breakpoints[breakpoint] }px)`]: selectors[selector]
            }

            // only-{breakpoint}-{selector}
            if (index === 0) {
                media[`only-${ breakpoint }-${ selector }`] = {
                    [`@media (max-width: ${ breakpoints[breakpoint] }px)`]: selectors[selector]
                }
            } else if (index === Object.keys(breakpoints).length - 1) {
                media[`only-${ breakpoint }-${ selector }`] = {
                    [`@media (min-width: ${ breakpoints[breakpoint] }px)`]: selectors[selector]
                }
            } else {
                media[`only-${ breakpoint }-${ selector }`] = {
                    [`@media (min-width: ${ breakpoints[breakpoint] }px) and (max-width: ${ breakpoints[Object.keys(breakpoints)[index + 1]] }px)`]: selectors[selector]
                }
            }
        })
    })

    return media
}

/**
 * Returns all Neckbeard helpers as an Array
 * @return { array }
 */
function all() {
    return Object.keys(this.helpers).map(key => this.helpers[key]);
}

/**
 * Neckbeard
 * @type {Object}
 */
export default {
    addMediaQueries,
    all,
    create,
    defaultSettings,
    helpers: {
        borderRadius,
        borders,
        colors,
        display,
        flex,
        fontSizes,
        spacing
    }
}
