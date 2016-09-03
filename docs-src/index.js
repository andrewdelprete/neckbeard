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
import Grid from './pages/Grid'
import LetterSpacing from './pages/LetterSpacing'
import LineHeight from './pages/LineHeight'
import Misc from './pages/Misc'
import Overflow from './pages/Overflow'
import Position from './pages/Position'
import Spacing from './pages/Spacing'
import TextAlignment from './pages/TextAlignment'
import TextDecoration from './pages/TextDecoration'
import ZIndex from './pages/ZIndex'

import Neckbeard from '../src'

// Neckbeard
// Overwrite settings if needed.
const settings = {
    ...Neckbeard.defaultSettings,
    fonts: {
        sans: "Poppins, Helvetica Neue, Helvetica, Arial, sans-serif",
        serif: "Merriweather, Georgia, serif",
        code: "'Source Code Pro', Consolas, Monaco, 'Andale Mono', monospace"
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
            <Route path="/colors" component={ Colors } />
            <Route path="/display" component={ Display } />
            <Route path="/flexbox" component={ Flexbox } />
            <Route path="/float" component={ Float } />
            <Route path="/fonts" component={ Fonts } />
            <Route path="/grid" component={ Grid } />
            <Route path="/letter-spacing" component={ LetterSpacing } />
            <Route path="/line-height" component={ LineHeight } />
            <Route path="/misc" component={ Misc } />
            <Route path="/overflow" component={ Overflow } />
            <Route path="/position" component={ Position } />
            <Route path="/spacing" component={ Spacing } />
            <Route path="/text-alignment" component={ TextAlignment } />
            <Route path="/text-decoration" component={ TextDecoration } />
            <Route path="/z-index" component={ ZIndex } />
        </Route>
    </Router>
), document.getElementById('app'))
