import { StyleSheet, css } from 'aphrodite'
import cssjson from 'cssjson'
import includes from 'lodash/includes'

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
 * Returns an object ran through Aphrodite
 * and includes media queries.
 * @param  {array} helperFns
 * @param  {object} settings
 * @return {object}
 */
export function create(helperFns, settings = defaultSettings) {
    const allSelectors = helperFns
        .map(fn => fn(settings))
        .reduce((previous, current) => {
            return {
                ...previous,
                ...current
            }
        })

    return {
        css: (selectors) => {
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

            const stylesObj = StyleSheet.create(selectorsObj)

            const stylesArray = Object.keys(stylesObj).map(key => stylesObj[key])

            return css(...stylesArray)
        }
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
            } else if (index === Object.keys(breakpoints).length-1) {
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
 * Returns a string off CSS Selectors
 * @param  {array} helperFns
 * @param  {object} settings
 * @return {string}
 */
export function selectorsToString(helperFns, settings) {
    const allSelectors = helperFns
        .map(fn => fn(settings))
        .reduce((previous, current) => {
            return {
                ...previous,
                ...current
            }
        })

    var selectors = Object.keys(allSelectors).reduce((previous, selector) => {
        // Media Selector (sm, md, lg, etc...)
        if (Object.keys(settings.breakpoints).some(breakpoint => includes(selector, `${ breakpoint }-`))) {
            return {
                ...previous,
                [`.${ selector }`]: Object.keys(allSelectors[selector]).reduce((previous, mediaProperty) => {
                    return {
                        ...previous,
                        children: {
                            [mediaProperty]: {
                                attributes: allSelectors[selector][mediaProperty]
                            }
                        }
                    }
                }, {})
            }
        }

        // Regular Selector
        return {
            ...previous,
            [`.${ selector }`]: {
                attributes: typeof allSelectors[selector] === "object"
                    ? { ...allSelectors[selector] }
                    : { [selector]: allSelectors[selector] }
            }
        }
    }, {})

    return cssjson.toCSS({ children: selectors })
}

/**
 * Neckbeard
 * @type {Object}
 */
export default {
    all() {
        return Object.keys(this.helpers).map(key => this.helpers[key]);
    },
    create,
    addMediaQueries,
    defaultSettings,
    helpers: {
        borderRadius,
        borders,
        colors,
        display,
        flex,
        fontSizes,
        spacing
    },
    selectorsToString
}
