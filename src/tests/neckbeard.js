import { assert } from "chai"
import sinon from "sinon"

import * as nb from "../"

var jsdom = require("mocha-jsdom")

describe("create() method", function () {
    jsdom()

    it("Should allow a string of selectors that match helper selectors", function() {
        const css = nb.create(nb.all())
        assert.isOk(css("mb1 mb2"))
    })

    it("Doesn't allow selectors that don't exist", function() {
        const css = nb.create(nb.all())
        assert.isNotOk(css("fakeclass"))
    })

    it("Should allow single helper to be passed instead of all()", function() {
        const css = nb.create([ nb.helpers.spacing ])
        assert.isOk(css("mb1"))
        assert.isNotOk(css("ft1"))
    })

    it("Should allow custom breakpoints", function() {
        const settings = {
            ...nb.defaultSettings,
            breakpoints: {
                xlg: 1400
            }
        }

        const css = nb.create(nb.all(), settings)
        assert.isOk(css("xlg-mb1"))
        assert.isNotOk(css("lg-mb1"))
    })

    it("Should disable all media queries", function() {
        const settings = {
            ...nb.defaultSettings,
            breakpoints: {}
        }

        const css = nb.create(nb.all(), settings)
        assert.isNotOk(css("lg-mb1"))
    })

    it("Should disable spacing media queries only", function() {
        const settings = {
            ...nb.defaultSettings,
            helpers: {
                ...nb.defaultSettings.helpers,
                spacing: {
                    useBreakpoints: false
                }
            }
        }

        const css = nb.create(nb.all(), settings)
        assert.isNotOk(css("lg-mb1"))
        assert.isOk(css("lg-ft1"))
    })
})

describe("all() method", function () {
    it("Should return all helpers as an Array", function() {
        assert.isOk(Array.isArray(nb.all()))
        assert.equal(nb.all().length, Object.keys(nb.helpers).length)
    })
})

describe("addMediaQueries() method", function () {
    it("Should return helper selectors with media queries added to it", function() {
        const spacing = nb.helpers.spacing(nb.defaultSettings)
        const css = nb.addMediaQueries(spacing, nb.defaultSettings.breakpoints)
        assert.isOk(Object.keys(css[Object.keys(css)[0]])[0].includes("@media"))
    })
})

describe("prefixSelectors() method", function () {
    it("Should return an object of helper selectors prefixed with a '.''", function() {
        const css = nb.prefixSelectors([ nb.helpers.spacing ])
        assert.isOk(Object.keys(css)[0].includes("."))
    })
})
