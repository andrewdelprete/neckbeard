import { assert } from "chai"
import sinon from "sinon"

import Neckbeard from "../"

var jsdom = require("mocha-jsdom")

describe("create() function", function () {
    jsdom()

    it("Should allow a string of helpers", function() {
        const nb = Neckbeard.create()
        assert.isOk(nb("mb1 mb2"))
    })

    it("Should allow custom styles object", function() {
        const nb = Neckbeard.create()

        const styles = {
            makeBold: {
                ...nb.ft2,
                fontWeight: "bold"
            }
        }
        assert.isOk(nb(styles))
    })

    it("Should allow selectors that don't exist aslong as some do", function() {
        const nb = Neckbeard.create()
        assert.isOk(nb("fakeclass mb1"))
    })

    it("Should allow single helper to be passed as an argument", function() {
        const nb = Neckbeard.create(Neckbeard.defaultSettings, { spacing: Neckbeard.helpers.spacing })
        assert.isOk(nb("mb1"))
        assert.isNotOk(nb("ft1"))
    })

    it("Should allow overwrite of custom breakpoints", function() {
        const settings = {
            ...Neckbeard.defaultSettings,
            breakpoints: {
                xxlg: 1600
            }
        }

        const nb = Neckbeard.create(settings, Neckbeard.helpers)
        assert.isOk(nb("xxlg-mb1"))
        assert.isNotOk(nb("sm-mb1"))
    })

    it("Should disable all media queries", function() {
        const settings = {
            ...Neckbeard.defaultSettings,
            breakpoints: {}
        }

        const nb = Neckbeard.create(settings, Neckbeard.helpers)
        assert.isNotOk(nb("lg-mb1"))
    })

    it("Should disable spacing media queries only", function() {
        const settings = {
            ...Neckbeard.defaultSettings,
            helpers: {
                ...Neckbeard.defaultSettings.helpers,
                spacing: {
                    responsive: false
                }
            }
        }

        const nb = Neckbeard.create(settings, Neckbeard.helpers)
        assert.isNotOk(nb("lg-mb1"))
        assert.isOk(nb("lg-ft1"))
    })

    it("Should allow overwrite of fonts", function() {
        const settings = {
            ...Neckbeard.defaultSettings,
            fonts: {
                sans: "'Times New Roman'"
            }
        }

        assert.isOk(settings.fonts.sans === "'Times New Roman'")
        assert.isNotOk(settings.fonts.sans === "Helvetica Neue, Helvetica, Arial, sans-serif")
    })
})

describe("addMediaQueries() function", function () {
    it("Should return helper selectors with media queries added to it", function() {
        const spacing = Neckbeard.helpers.spacing(Neckbeard.defaultSettings)
        const nb = Neckbeard.addMediaQueries(spacing, Neckbeard.defaultSettings.breakpoints)
        assert.isOk(Object.keys(nb[Object.keys(nb)[0]])[0].includes("@media"))
    })
})

describe("setBeardColors() function", function () {
    it("Should return an object of default colors", function() {
        const colors = Neckbeard.setBeardColors()
        assert.isOk(typeof colors === 'object')
        assert.isOk(colors.brandColor)
    })

    it("Should have getters", function() {
        const colors = Neckbeard.setBeardColors()
        assert.isOk(colors.brandColor2)
        assert.isOk(colors.brandColor3)
        assert.isOk(colors.brandColor4)
        assert.isOk(colors.brandColor5)
    })

    it("Should overwrite defaults", function() {
        const colors = Neckbeard.setBeardColors({ brandColor: "#00FF00" })
        assert.isOk(colors.brandColor === "#00FF00")
    })

    it("Should darken colors incrementally", function() {
        const colors = Neckbeard.setBeardColors()
        assert.isOk(colors.g05 !== colors.g10)
        assert.isOk(colors.g50 === "#808080")
    })
})

describe("prefixSelectors() function", function () {
    it("Should return an object with helper selectors prefixed with a '.'", function() {
        const nb = Neckbeard.prefixSelectors(Neckbeard.defaultSettings, { misc: Neckbeard.helpers.misc })
        assert.isOk(nb['.clearfix'])
    })
    it("Should return an object with psuedo helper selectors prefixed with a '&'", function() {
        const nb = Neckbeard.prefixSelectors(Neckbeard.defaultSettings, { misc: Neckbeard.helpers.misc })
        assert.isOk(nb['.clearfix']['&:after'])
    })
})
