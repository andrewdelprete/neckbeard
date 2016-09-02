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
import Colors from './pages/Colors'
import Display from './pages/Display'
import Flexbox from './pages/Flexbox'
import Float from './pages/Float'
import Fonts from './pages/Fonts'

import Neckbeard from '../src'

// Neckbeard
// Overwrite settings if needed.
const settings = {
    ...Neckbeard.defaultSettings,
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
            <Route path="/colors" component={ Colors } />
            <Route path="/display" component={ Display } />
            <Route path="/flexbox" component={ Flexbox } />
            <Route path="/float" component={ Float } />
            <Route path="/fonts" component={ Fonts } />
        </Route>
    </Router>
), document.getElementById('app'))
