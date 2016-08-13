import postcss from 'postcss'
import postcssJs from 'postcss-js'

/**
 * Returns a string of CSS Selectors
 * @param  {array} helperFns
 * @param  {object} settings
 * @return {string}
 */
export function helpersToString(helperFns, settings) {
    const allSelectors = helperFns
        .map(fn => fn(settings))
        .reduce((previous, current) => ({ ...previous, ...current }, {}))

    // Prefix each class with .
    const prefixedSelectors = Object
        .keys(prefixedSelectors)
        .reduce((previous, current) => {
            prefixedSelectors[`.${ current }`] = prefixedSelectors[current]
            delete prefixedSelectors[current]

            return { ...prefixedSelectors }
        }, {})

    return postcss().process(prefixedSelectors, { parser: postcssJs })
}
