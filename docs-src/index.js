import './index.html'
import './200.html' // Have to have this for surge.sh to work :/

import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './pages/App'
import Overview from './pages/Overview'
import Installation from './pages/Installation'
import Usage from './pages/Usage'
import Border from './pages/Border'
import BorderRadius from './pages/BorderRadius'

import Neckbeard from '../src'

// Neckbeard
// Overwrite settings if needed.
const settings = {
    ...Neckbeard.defaultSettings,
    colors: {
        ...Neckbeard.defaultSettings.colors,
        brandColor: "#c397d8"
    }
    //...Other overwrites here
}

// Neckbeard
// Set a global to reuse this Neckbeard instance
// throughout your application or import it
// individually within each component file.
window.nb = Neckbeard.create(settings)

ReactDOM.render((
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            <IndexRoute component={ Overview } />
            <Route path="/installation" component={ Installation } />
            <Route path="/usage" component={ Usage } />
            <Route path="/border" component={ Border } />
            <Route path="/border-radius" component={ BorderRadius } />
        </Route>
    </Router>
), document.getElementById('app'))
