import shadeColor from '../utilities/shadeColor'

// Global Color Variables
// ------------------------------------------------------------------------------------ */
export const white = "#fff"
export const black = "#000"
export const brandColor1 = "#3498DB"
export const brandColor2 = shadeColor(-0.05, brandColor1)
export const brandColor3 = shadeColor(-0.05, brandColor2)
export const brandColor4 = shadeColor(-0.05, brandColor3)
export const brandColor5 = shadeColor(-0.05, brandColor4)

export const beardSuccessColor = "#4AB471"
export const beardWarningColor = "#F3AE4E"
export const beardDangerColor = "#CF5C60"

export const beardColors = {
    "b": black,
    "w": white,
    "1": brandColor1,
    "2": brandColor2,
    "3": brandColor3,
    "4": brandColor4,
    "5": brandColor5,
    "success": beardSuccessColor,
    "warning": beardWarningColor,
    "danger": beardDangerColor,
    "g05": shadeColor(-0.05, white),
    "g10": shadeColor(.10, white),
    "g20": shadeColor(.20, white),
    "g30": shadeColor(.30, white),
    "g40": shadeColor(.40, white),
    "g50": shadeColor(.50, white),
    "g60": shadeColor(.60, white),
    "g70": shadeColor(.70, white),
    "g80": shadeColor(.80, white),
    "g90": shadeColor(.90, white)
}
