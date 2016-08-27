import shadeColor from '../utilities/shadeColor'

// Default Beard Colors
// ------------------------------------------------------------------------------------ */
export const beardColors = {
    white: "#ffffff",
    black: "#000000",
    brandColor: "#3498DB",
    success: "#4AB471",
    warning: "#F3AE4E",
    danger: "#CF5C60"
}

/**
 * Sets Beard Colors
 * @param {object} beardColors
 * @return {object}
 */
export default function setBeardColors(colors = beardColors) {
    colors = {
        ...beardColors,
        ...colors
    }

    return {
        brandColor: colors.brandColor,
        "b": colors.black,
        "w": colors.white,
        "success": colors.success,
        "warning": colors.warning,
        "danger": colors.danger,

        get g05() {
            return shadeColor(-0.05, colors.white)
        },
        get g10() {
            return shadeColor(-0.10, colors.white)
        },
        get g20() {
            return shadeColor(-0.20, colors.white)
        },
        get g30() {
            return shadeColor(-0.30, colors.white)
        },
        get g40() {
            return shadeColor(-0.40, colors.white)
        },
        get g50() {
            return shadeColor(-0.50, colors.white)
        },
        get g60() {
            return shadeColor(-0.60, colors.white)
        },
        get g70() {
            return shadeColor(-0.70, colors.white)
        },
        get g80() {
            return shadeColor(-0.80, colors.white)
        },
        get g90() {
            return shadeColor(-0.90, colors.white)
        },
        get brandColor2() {
            return shadeColor(-0.05, this.brandColor)
        },
        get brandColor3() {
            return shadeColor(-0.05, this.brandColor2)
        },
        get brandColor4() {
            return shadeColor(-0.05, this.brandColor3)
        },
        get brandColor5() {
            return shadeColor(-0.05, this.brandColor4)
        },

    }
}
