import { StyleSheet, css } from 'aphrodite'

/**
 * Neckbeard Imported Helpers
 */
import * as helpers from './helpers'

/**
 * Neckbeard Utilities
 */
import addMediaQueries from './utilities/addMediaQueries'
import prefixSelectors from './utilities/prefixSelectors'
import setBeardColors from './utilities/setBeardColors'

/**
 * Neckbeard Default Settings
 * @type {object}
 */
const defaultSettings = {
    breakpoints: {
        sm: 300,
        md: 600,
        lg: 900,
        xlg: 1440
    },
    colors: setBeardColors(),
    fonts: {
        sans: "Helvetica Neue, Helvetica, Arial, sans-serif",
        serif: "Merriweather, Georgia, serif",
        code: "Consolas, Monaco, 'Andale Mono', monospace"
    },
    helpers: {
        border: {
            limit: 3,
            incrementBy: 1,
            responsive: true
        },
        borderRadius: {
            limit: 10,
            incrementBy: 1,
            responsive: true
        },
        colors: {
            responsive: false
        },
        display: {
            responsive: true
        },
        flex: {
            responsive: true
        },
        float: {
            responsive: true
        },
        fontFamily: {
            responsive: false,
        },
        fontSize: {
            limit: 17,
            incrementBy: .1,
            responsive: true
        },
        fontWeight: {
            responsive: false
        },
        grid: {
            gridBlockCount: 12,
            gridGutter: 30,
            stackAtBreakpoint: 'md',
            responsive: true
        },
        letterSpacing: {
            limit: 10,
            incrementBy: .1,
            responsive: true
        },
        lineHeight: {
            limit: 10,
            incrementBy: .1,
            responsive: true
        },
        misc: {
            responsive: false,
            siteWidth: "114rem"
        },
        overflow: {
            responsive: false
        },
        position: {
            responsive: true
        },
        spacing: {
            limit: 10,
            incrementBy: 1,
            responsive: true
        },
        textAlignment: {
            responsive: true
        },
        textDecoration: {
            responsive: false
        },
        zIndex: {
            limit: 10,
            incrementBy: 1,
            responsive: true
        }
    }
}

/**
 * Returns an object of combined
 * helpers ran through Aphrodite.
 * @param  {object} settings
 * @param  {object} helperFns
 * @return {object}
 */
function create(settings = defaultSettings, helperFns = helpers) {
    // Set colors
    settings.colors = setBeardColors(settings.colors)

    // Invokes each helper function passed and returns
    // an aggregrated object of all selector properties.
    const allSelectors = Object
        .keys(helperFns)
        .map(fnKey => helperFns[fnKey](settings))
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
 * Export the things we need
 */
export default {
    addMediaQueries,
    create,
    defaultSettings,
    helpers,
    prefixSelectors,
    setBeardColors
}
