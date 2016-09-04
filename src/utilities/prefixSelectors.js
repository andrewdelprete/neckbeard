import setBeardColors from "./setBeardColors"

/**
 * Returns a new object with
 * prefix class selectors with '.'
 * and psuedo selectors with ':'
 * @param  {object} settings
 * @param  {object} helperFns
 * @return {object}
 */
export default function prefixSelectors(settings, helperFns) {
    // Set colors
    settings.colors = setBeardColors(settings.colors)

    // Envokes each helper function passed and returns
    // an aggregrated object of all selector properties.
    const allSelectors = Object
        .keys(helperFns)
        .map(fnKey => helperFns[fnKey](settings))
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
