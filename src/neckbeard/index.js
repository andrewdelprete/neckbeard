import create from './create'
import settings from './settings'
import spacing from './spacing'

/**
 * Neckbeard
 * @type {Object}
 */
export default {
    create,
    settings,
    selectors: {
        spacing
    },
    all() {
        return Object.keys(this.selectors).map(key => this.selectors[key]);
    }
}
