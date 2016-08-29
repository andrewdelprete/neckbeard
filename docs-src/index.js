import './index.html'

import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './pages/App'
import Overview from './pages/Overview'
import Border from './pages/Border'

// Neckbeard
// Overwrite settings if needed.
const settings = {
    ...Neckbeard.defaultSettings,
    colors: {
        ...Neckbeard.defaultSettings.colors,
        brandColor: "#FF0000"
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
            <Route path="/border" component={ Border } />
        </Route>
    </Router>
), document.getElementById('app'))
