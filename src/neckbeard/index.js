import { StyleSheet, css } from 'aphrodite'

/**
 * Neckbeard Helpers
 */
import borders from './helpers/borders'
import borderRadius from './helpers/borderRadius'
import spacing from './helpers/spacing'
import fontSizes from './helpers/fontSizes'

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
        },
        fontSizes: {
            limit: 17,
            incrementBy: .25
        },
        borders: {
            limit: 3,
            incrementBy: 1
        },
        borderRadius: {
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
            } else if (index === breakpoints.length) {
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
 * Neckbeard
 * @type {Object}
 */
export default {
    create,
    addMediaQueries,
    defaultSettings,
    helpers: {
        borders,
        borderRadius,
        fontSizes,
        spacing
    },
    all() {
        return Object.keys(this.helpers).map(key => this.helpers[key]);
    }
}
