# Neckbeard
Neckbeard is an Atomic CSS in JS Framework highly inspired by [Beard](http://www.buildwithbeard.com) and powered by [Aphrodite](https://github.com/Khan/aphrodite). Neckbeard provides common CSS utility classes to help you scaffold components quickly.

## Benefits
1. Works great with component based frameworks / libraries like React or standalone.
2. No longer worry about naming CSS selectors.
3. No more CSS selector specificity collisions.
4. Injects only the exact styles needed to render into the DOM. (Aphrodite).
5. Easily extensible by adding your own helpers or overwrite existing ones.
6. Installable via NPM (import or require) or just drop it in via CDN (umd).
7. 11.5kb gzipped

## Helpers
* borderRadius
* border
* colors
* display
* flex
* float
* fontFamily
* fontSize
* fontWeight
* grid
* lineHeight
* misc
* overflow
* position
* spacing
* textAlignment
* zIndex

## Installation
1. > npm install neckbeard --save-dev

### CDN (umd version)
1. https://npmcdn.com/neckbeard

### Development
1. Clone
2. > npm install
3. > npm start (Starts Neckbeard Docs Site - http://localhost:8080)
4. > npm run build - (Builds umd version of Neckbeard and CSS file)
5. > npm run build:docs - (Builds docs / demo site)

## Example
``` jsx
import React, { Component } from 'react';
import nb from 'neckbeard'

const settings = {
    ...nb.defaultSettings
    // new settings here
}

const css = nb.create(settings)

class App extends Component {
    render() {
        return (
            <div className={ css("flex jcc aic absolute h100 w100") }>
                <p className={ css("ft5 tc1 tac fwthin") }>
                    Neckbeard
                </p>
            </div>
        )
    }
}

export default App
```
## Documentation
Coming Soon!
