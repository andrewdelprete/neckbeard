import addMediaQueries from '../utilities/addMediaQueries'

/**
 * Grid
 *
 * @param  {object} breakpoints
 * @param  {object} gridBlockCount - number of columns
 * @param  {object} gridGutter - size of gutter
 * @param  {string} stackAtBreakpoint
 * @param  {object} responsive
 * @return {object}
 */
export default function grid({ helpers: { grid: { gridGutter, gridBlockCount, stackAtBreakpoint, responsive } }, breakpoints }) {
    let selectors = {}
    let media = {}

    // The default column width is 100% divided by the column count
    let blockWidth = 100 / gridBlockCount

    // Adds the ability to add grids without padding in their blocks
    // @TODO - Can't do decendant selectors like this in Aphrodite.
    // selectors['frame--xpad [class^="blk"]'] = {
    //     paddingLeft: 0,
    //     paddingRight: 0
    // }

    // Blocks
    //-------------------------------------------------------------------------- */
    selectors['blk'] = {
        position: 'relative',
        paddingLeft: `${ gridGutter }px`,
        paddingRight: `${ gridGutter }px`,
        flexGrow: 1,
        flexBasis: 0
    }

    // Generate standard sizing helpers
    for (let x = 1; x <= gridBlockCount; x++) {
        selectors[`blk${ x }`] = {
            position: 'relative',
            paddingLeft: `${ gridGutter }px`,
            paddingRight: `${ gridGutter }px`,
            flexBasis: `${ x * blockWidth }%`
        }
    }

    // Offsets, Pushers, and Pullers
    //-------------------------------------------------------------------------- */
    // Offsets
    for (let x = 1; x <= gridBlockCount; x++) {
        selectors[`blk--offset${ x }`] = {
            marginLeft: `${ x * blockWidth }%`
        }
    }

    // Pushers
    for (let x = 1; x <= gridBlockCount; x++) {
        selectors[`blk--push${ x }`] = {
            left: `${ x * blockWidth }%`
        }
    }

    // Pullers
    for (let x = 1; x <= gridBlockCount; x++) {
        selectors[`blk--pull${ x }`] = {
            right: `${ x * blockWidth }%`
        }
    }

    // Reordering Helpers
    //-------------------------------------------------------------------------- */
    // Basic first and Last helpers
    selectors['blk--first'] = {
        order: 0
    }
    selectors['blk--last'] = {
        order: 1
    }

    /**
     * Media Queries
     */
    if (responsive) {
        media = addMediaQueries(selectors, breakpoints)
    }

    /**
     * Response Flexbox Grid
     */
    selectors['wrap'] = {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: `${ gridGutter }px`,
        paddingRight: `${ gridGutter }px`
    }

    selectors['wrap--xpad'] = {
        paddingLeft: 0,
        paddingRight: 0
    }

    selectors['frame'] = {
        marginLeft: -gridGutter,
        marginRight: -gridGutter,
        [`@media (min-width: ${ breakpoints[stackAtBreakpoint] }px)`]: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }
    }

    selectors['frame--stay'] = {
        display: 'flex'
    }

    return { ...selectors, ...media }
}
