import create from './create'
import settings from './settings'
import spacing from './spacing'

const beard = {
    create,
    settings,
    selectors: {
        spacing
    },
    all() {
        return Object.keys(this.selectors).map(key => this.selectors[key]);
    }
}

export default beard
