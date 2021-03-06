import addMediaQueries from '../utilities/addMediaQueries'

/**
 * Colors
 *
 * @param  {object} responsive
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function colors({ helpers: { colors: { responsive } }, colors, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Colors
     */
    // Background colors
    selectors["bgb"] = { "background-color": colors.b }
    selectors["bgw"] = { "background-color": colors.w }
    selectors["bg1"] = { "background-color": colors.brandColor }
    selectors["bg2"] = { "background-color": colors.brandColor2 }
    selectors["bg3"] = { "background-color": colors.brandColor3 }
    selectors["bg4"] = { "background-color": colors.brandColor4 }
    selectors["bg5"] = { "background-color": colors.brandColor5 }
    selectors["bgsuccess"] = { "background-color": colors.success }
    selectors["bgwarning"] = { "background-color": colors.warning }
    selectors["bgdanger"] = { "background-color": colors.danger }

    // Text colors
    selectors["tcb"] = { "color": colors.b }
    selectors["tcw"] = { "color": colors.w }
    selectors["tc1"] = { "color": colors.brandColor }
    selectors["tc2"] = { "color": colors.brandColor2 }
    selectors["tc3"] = { "color": colors.brandColor3 }
    selectors["tc4"] = { "color": colors.brandColor4 }
    selectors["tc5"] = { "color": colors.brandColor5 }
    selectors["tcsuccess"] = { "color": colors.success }
    selectors["tcwarning"] = { "color": colors.warning }
    selectors["tcdanger"] = { "color": colors.danger }


    // Border colors
    selectors["bcb"] = { "border-color": colors.b }
    selectors["bcw"] = { "border-color": colors.w }
    selectors["bc1"] = { "border-color": colors.brandColor }
    selectors["bc2"] = { "border-color": colors.brandColor2 }
    selectors["bc3"] = { "border-color": colors.brandColor3 }
    selectors["bc4"] = { "border-color": colors.brandColor4 }
    selectors["bc5"] = { "border-color": colors.brandColor5 }
    selectors["bcsuccess"] = { "border-color": colors.success }
    selectors["bcwarning"] = { "border-color": colors.warning }
    selectors["bcdanger"] = { "border-color": colors.danger }

    // Background Colors Gray
    // ------------------------------------------------------------------------------------ */
    selectors["bgg05"] = { "background-color": colors.g05 }
    selectors["bgg10"] = { "background-color": colors.g10 }
    selectors["bgg20"] = { "background-color": colors.g20 }
    selectors["bgg30"] = { "background-color": colors.g30 }
    selectors["bgg40"] = { "background-color": colors.g40 }
    selectors["bgg50"] = { "background-color": colors.g50 }
    selectors["bgg60"] = { "background-color": colors.g60 }
    selectors["bgg70"] = { "background-color": colors.g70 }
    selectors["bgg80"] = { "background-color": colors.g80 }
    selectors["bgg90"] = { "background-color": colors.g90 }

    // Text Colors Gray
    // ------------------------------------------------------------------------------------ */
    selectors["tcg05"] = { "color": colors.g05 }
    selectors["tcg10"] = { "color": colors.g10 }
    selectors["tcg20"] = { "color": colors.g20 }
    selectors["tcg30"] = { "color": colors.g30 }
    selectors["tcg40"] = { "color": colors.g40 }
    selectors["tcg50"] = { "color": colors.g50 }
    selectors["tcg60"] = { "color": colors.g60 }
    selectors["tcg70"] = { "color": colors.g70 }
    selectors["tcg80"] = { "color": colors.g80 }
    selectors["tcg90"] = { "color": colors.g90 }

    // Border Colors Gray
    // ------------------------------------------------------------------------------------ */
    selectors["bcg05"] = { borderColor: colors.g05 }
    selectors["bcg10"] = { borderColor: colors.g10 }
    selectors["bcg20"] = { borderColor: colors.g20 }
    selectors["bcg30"] = { borderColor: colors.g30 }
    selectors["bcg40"] = { borderColor: colors.g40 }
    selectors["bcg50"] = { borderColor: colors.g50 }
    selectors["bcg60"] = { borderColor: colors.g60 }
    selectors["bcg70"] = { borderColor: colors.g70 }
    selectors["bcg80"] = { borderColor: colors.g80 }
    selectors["bcg90"] = { borderColor: colors.g90 }

    /**
     * Hover, Focus, and Active Color Helpers
     */
    Object.keys(selectors).map(selector => {
        selectors[`h-${ selector }`] = {
            ":hover": selectors[selector]
        }
        selectors[`a-${ selector }`] = {
            ":active": selectors[selector]
        }
        selectors[`f-${ selector }`] = {
            ":focus": selectors[selector]
        }
    })

    /**
     * Media Queries
     */
    if (responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
