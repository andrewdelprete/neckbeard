import { addMediaQueries } from '../'

/**
 * Colors
 *
 * @param  {Number} idk
 * @param  {Object} breakpoints={} (optional)
 * @param  {Object} colors={} (optional)
 * @return {Object}
 */
export default function colors({ breakpoints, colors }) {
    let selectors = {}
    let media = {}

    /**
     * Colors
     */
    // Background colors
    selectors["bgb"] = { "background-color": colors.beardColors.b }
    selectors["bgw"] = { "background-color": colors.beardColors.w }
    selectors["bg1"] = { "background-color": colors.beardColors["1"] }
    selectors["bg2"] = { "background-color": colors.beardColors["2"] }
    selectors["bg3"] = { "background-color": colors.beardColors["3"] }
    selectors["bg4"] = { "background-color": colors.beardColors["4"] }
    selectors["bg5"] = { "background-color": colors.beardColors["5"] }

    // Text colors
    selectors["tcb"] = { "color": colors.beardColors.b }
    selectors["tcw"] = { "color": colors.beardColors.w }
    selectors["tc1"] = { "color": colors.beardColors["1"] }
    selectors["tc2"] = { "color": colors.beardColors["2"] }
    selectors["tc3"] = { "color": colors.beardColors["3"] }
    selectors["tc4"] = { "color": colors.beardColors["4"] }
    selectors["tc5"] = { "color": colors.beardColors["5"] }

    // Border colors
    selectors["bcb"] = { "border-color": colors.beardColors.b }
    selectors["bcw"] = { "border-color": colors.beardColors.w }
    selectors["bc1"] = { "border-color": colors.beardColors["1"] }
    selectors["bc2"] = { "border-color": colors.beardColors["2"] }
    selectors["bc3"] = { "border-color": colors.beardColors["3"] }
    selectors["bc4"] = { "border-color": colors.beardColors["4"] }
    selectors["bc5"] = { "border-color": colors.beardColors["5"] }

    // Background Colors
    // ------------------------------------------------------------------------------------ */
    selectors["bgg05"] = { "background-color": colors.beardColors.g05 }
    selectors["bgg10"] = { "background-color": colors.beardColors.g10 }
    selectors["bgg20"] = { "background-color": colors.beardColors.g20 }
    selectors["bgg30"] = { "background-color": colors.beardColors.g30 }
    selectors["bgg40"] = { "background-color": colors.beardColors.g40 }
    selectors["bgg50"] = { "background-color": colors.beardColors.g50 }
    selectors["bgg60"] = { "background-color": colors.beardColors.g60 }
    selectors["bgg70"] = { "background-color": colors.beardColors.g70 }
    selectors["bgg80"] = { "background-color": colors.beardColors.g80 }
    selectors["bgg90"] = { "background-color": colors.beardColors.g90 }

    // Text Colors
    // ------------------------------------------------------------------------------------ */
    selectors["tcg05"] = { "color": colors.beardColors.g05 }
    selectors["tcg10"] = { "color": colors.beardColors.g10 }
    selectors["tcg20"] = { "color": colors.beardColors.g20 }
    selectors["tcg30"] = { "color": colors.beardColors.g30 }
    selectors["tcg40"] = { "color": colors.beardColors.g40 }
    selectors["tcg50"] = { "color": colors.beardColors.g50 }
    selectors["tcg60"] = { "color": colors.beardColors.g60 }
    selectors["tcg70"] = { "color": colors.beardColors.g70 }
    selectors["tcg80"] = { "color": colors.beardColors.g80 }
    selectors["tcg90"] = { "color": colors.beardColors.g90 }

    // Border Colors
    // ------------------------------------------------------------------------------------ */
    selectors["bcg05"] = colors.beardColors.g05
    selectors["bcg10"] = colors.beardColors.g10
    selectors["bcg20"] = colors.beardColors.g20
    selectors["bcg30"] = colors.beardColors.g30
    selectors["bcg40"] = colors.beardColors.g40
    selectors["bcg50"] = colors.beardColors.g50
    selectors["bcg60"] = colors.beardColors.g60
    selectors["bcg70"] = colors.beardColors.g70
    selectors["bcg80"] = colors.beardColors.g80
    selectors["bcg90"] = colors.beardColors.g9

    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
