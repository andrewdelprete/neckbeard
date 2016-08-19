import { StyleSheet, css } from 'aphrodite'

/**
 * Neckbeard Imported Helpers
 */
import * as helpers from './helpers'

/**
 * Neckbeard Imported Settings
 */
import * as colorSettings from './settings/colors'

/**
 * Neckbeard Default Settings
 * @type {object}
 */
export const defaultSettings = {
    breakpoints: {
        sm: 600,
        md: 800,
        lg: 1200
    },
    colors: colorSettings,
    helpers: {
        borders: {
            limit: 3,
            incrementBy: 1,
            useBreakpoints: true
        },
        borderRadius: {
            limit: 10,
            incrementBy: 1,
            useBreakpoints: true
        },
        colors: {
            useBreakpoints: false
        },
        display: {
            useBreakpoints: true
        },
        flex: {
            useBreakpoints: true
        },
        floats: {
            useBreakpoints: true
        },
        fontSizes: {
            limit: 17,
            incrementBy: .25,
            useBreakpoints: true
        },
        lineHeights: {
            useBreakpoints: true
        },
        misc: {
            useBreakpoints: false
        },
        overflow: {
            useBreakpoints: false
        },
        position: {
            useBreakpoints: true
        },
        spacing: {
            limit: 10,
            incrementBy: 1,
            useBreakpoints: true
        },
        textAlignment: {
            useBreakpoints: true
        }
    },
    siteWidth: "114rem"
}

/**
 * Returns an object of combined
 * helpers ran through Aphrodite.
 * @param  {array} helperFns
 * @param  {object} settings
 * @return {object}
 */
export function create(helperFns, settings = defaultSettings) {
    // Envokes each helper function passed and returns
    // an aggregrated object of all selector properties.
    const allSelectors = helperFns
        .map(fn => fn(settings))
        .reduce((previous, current) => ({ ...previous, ...current }))

    return (selectors) => {
        // Takes a string of CSS selectors and
        // checks to make sure each selector exists
        // and then returns a usable object.
        var selectorsObj = selectors
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
 * Returns a new object with
 * prefix class selectors with '.'
 * and psuedo selectors with ':'
 * @param  {array} helperFns
 * @param  {object} settings
 * @return {object}
 */
export function prefixSelectors(helperFns, settings = defaultSettings) {
    // Envokes each helper function passed and returns
    // an aggregrated object of all selector properties.
    const allSelectors = helperFns
        .map(fn => fn(settings))
        .reduce((previous, current) => ({ ...previous, ...current }))

    // Prefix each selector with .
    return Object
        .keys(allSelectors)
        .reduce((previous, current) => {
            allSelectors[`.${ current }`] = allSelectors[current]

            // Prefix psuedo selectors with :
            Object.keys(allSelectors[`.${ current }`]).forEach(selector => {
                if (selector[0] === ':') {
                    allSelectors[`.${ current }`][`&${ selector }`] = allSelectors[current][selector]
                    delete allSelectors[`.${ current }`][selector]
                }
             })

            delete allSelectors[current]

            return { ...allSelectors }
        }, {})
}

/**
 * Adds media query classes to passed selectors
 * @param {object} selectors
 * @param {object} breakpoints
 * @return {object}
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
 * @return {array}
 */
export function all() {
    return Object.keys(helpers).map(key => helpers[key]);
}

/**
 * Export helpers
 */
export {
    helpers
}
