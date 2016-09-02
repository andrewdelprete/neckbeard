import React, { Component } from "react"
import Neckbeard from "../../src"
import Highlight from "react-highlight"
import H1 from "../components/elements/H1"
import H2 from "../components/elements/H2"
import H3 from "../components/elements/H3"
import Code from "../components/elements/Code"
import Copy from "../components/elements/Copy"

/**
 * Installation Page
 */

const snippet = `<script>
import Neckbeard from 'neckbeard';

const nb = Neckbeard.create();

// create() is invoked and classes are injected
// into the DOM dynamically using Aphrodite.
nb('pv1 ph1 ft2');
</script>`

const snippet2 = `<script>
import Neckbeard from 'neckbeard';

// Using ES6 Spread makes it easy
const settings = { ...NeckBeard.defaultSettings };

settings.helpers.fontSize = {
    limit: 20,
    incrementBy: .10,
    useBreakpoints: false
}

const nb = Neckbeard.create(settings);

nb('pv1 ph1 ft2');
</script>
`

const snippet3 = `<script>
import Neckbeard from 'neckbeard';

// Same settings as above but using Object.assign()
var settings = Object.assign({}, Neckbeard.defaultSettings);

settings.helpers.fontSize = {
    limit: 20,
    incrementBy: .10,
    useBreakpoints: false
}

var nb = Neckbeard.create(settings);

nb('pv1 ph1 ft2');
</script>`

const snippet4 = `<script>
import Neckbeard from 'neckbeard';

// Uses ES6 Destructuring to destructure
// settings object and retrieve what we need.
export default function unicorn({ helpers: { unicorn: { useBreakpoints } }, breakpoints }) {
    let selectors = {};
    let media = {};

    /**
     * My New Helper
     */
    selectors["unicorn-awesome"] = {
        fontSize: "2rem",
        // and so on
    }
    // more selectors here

    /**
     * Media Queries
     * Adds classes for each breakpoint .{breakpoint}-{selector} and .only-{breakpoint}-{selector}
     * Example: .only-sm-awesome-unicorn
     */
    if (Object.keys(breakpoints).length !== 0 && useBreakpoints) {
        media = Neckbeard.addMediaQueries(selectors, breakpoints);
    }

    // Merge it all together in one object and return
    return { ...selectors, ...media };
}
</script>`

const snippet5 = `<script>
import Neckbeard from 'neckbeard';
import unicorn from '/path/where/your/helpers/are/unicorn';

// Extend settings
const settings = { ...NeckBeard.defaultSettings };

settings.helpers.unicorn = {
    useBreakpoints: true
}

// Extend helpers
const helpers = { ...NeckBeard.helpers };

helpers.unicorn = unicorn;

const nb = Neckbeard.create(settings, helpers);

nb('unicorn-awesome');
</script>
`

const snippet6 = JSON.stringify(Neckbeard.defaultSettings, null, '    ')

const Usage = () => (
    <div>
        <H1>Usage</H1>
        <H2>The Basics</H2>
        <Copy>
            After installing Neckbeard via NPM or CDN you'll need to call the <Code>Neckbeard.create()</Code> function and assign it to a variable.
        </Copy>
        <Highlight className={ nb("ph2 pv2 lh3 mb2") }>
            { snippet }
        </Highlight>
        <Copy>
            Neckbeard.create([ settings, helpers ])
            <div className={ nb("ph1 pt1 tcg40 sm-mb1 md-xmb") }>- settings (optional) - An object of all available settings</div>
            <div className={ nb("ph1 tcg40 sm-mb1 md-xmb") }>- helpers (optional) - An object of all available helper functions</div>
        </Copy>
        <a name="configuration"></a>
        <H2>Configuration</H2>
        <Copy>
            The <Code>Neckbeard.create()</Code> function has an optional first parameter (object) to overwrite or extend default settings.
            You can do this by using the <a href="http://babeljs.io/docs/plugins/transform-object-rest-spread/" className={ nb("tc5 xtd h-tc1") }>Object Spread Syntax</a> <Code>...nb.defaultSettings</Code> or <Code>Object.assign()</Code>.
        </Copy>
        <Copy>
            Neckbeard has Default Settings for all helpers and can be found on the Neckbeard object as <Code>Neckbeard.defaultSettings</Code>.
        </Copy>
        <Highlight className={ nb("ph2 pv2 lh3 mb2") }>
            { snippet2 }
        </Highlight>
        <Highlight className={ nb("ph2 pv2 lh3 mb2") }>
            { snippet3 }
        </Highlight>
        <H2>Adding Custom Helpers</H2>
        <Copy>
            The <Code>Neckbeard.create()</Code> function has an optional second parameter (object) to overwrite or extend default helpers.
            You can do this by using the <a href="http://babeljs.io/docs/plugins/transform-object-rest-spread/" className={ nb("tc5 xtd h-tc1") }>Object Spread Syntax</a> <Code>...nb.helpers</Code> or <Code>Object.assign()</Code>.
        </Copy>
        <H3>Write a Helper Function</H3>
        <Copy>To create your own custom helper, write a function that has one parameter for settings and returns an object of selectors. Save your helper function file somewhere handy.</Copy>
        <Highlight className={ nb("ph2 pv2 lh3 mb2") }>
            { snippet4 }
        </Highlight>
        <H3>Make Helper Available to Neckbeard</H3>
        <Copy>Once your helper class function is created, you need to make Neckbeard aware of it. You do this when initializing Neckbeard with the create() function and passing a new settings and helpers object.</Copy>
        <Highlight className={ nb("ph2 pv2 lh3 mb2") }>
            { snippet5 }
        </Highlight>
        <H2>Default Settings</H2>
        <Copy>Neckbeard has a number of Default Settings that are declared in <Code>Neckbeard.defaultSettings</Code> and can be overwritten or extended as needed.</Copy>
        <Highlight className={ nb("ph2 pv2 lh3 mb2") }>
            { snippet6 }
        </Highlight>
        <Copy>
            <span className={ nb('fwsemibold') }>*Note</span> - The <Code>{ "<script></script>" }</Code> tags in these examples are for highlighting purposes only.
        </Copy>
    </div>
)

export default Usage
