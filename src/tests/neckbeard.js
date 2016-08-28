import { assert } from "chai"
import sinon from "sinon"

import nb from "../"

var jsdom = require("mocha-jsdom")

describe("create() function", function () {
    jsdom()

    it("Should allow a string of selectors that match helper selectors", function() {
        const css = nb.create()
        assert.isOk(css("mb1 mb2"))
    })

    it("Doesn't allow selectors that don't exist", function() {
        const css = nb.create()
        assert.isNotOk(css("fakeclass"))
    })

    it("Should allow single helper to be passed as an argument", function() {
        const css = nb.create(nb.defaultSettings, { spacing: nb.helpers.spacing })
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

        const css = nb.create(settings, nb.helpers)
        assert.isOk(css("xlg-mb1"))
        assert.isNotOk(css("lg-mb1"))
    })

    it("Should disable all media queries", function() {
        const settings = {
            ...nb.defaultSettings,
            breakpoints: {}
        }

        const css = nb.create(settings, nb.helpers)
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

        const css = nb.create(settings, nb.helpers)
        assert.isNotOk(css("lg-mb1"))
        assert.isOk(css("lg-ft1"))
    })
})

describe("addMediaQueries() function", function () {
    it("Should return helper selectors with media queries added to it", function() {
        const spacing = nb.helpers.spacing(nb.defaultSettings)
        const css = nb.addMediaQueries(spacing, nb.defaultSettings.breakpoints)
        assert.isOk(Object.keys(css[Object.keys(css)[0]])[0].includes("@media"))
    })
})

describe("setBeardColors() function", function () {
    it("Should return object an object of default colors", function() {
        const colors = nb.setBeardColors()
        assert.isOk(typeof colors === 'object')
        assert.isOk(colors.brandColor)
    })

    it("Should have getters", function() {
        const colors = nb.setBeardColors()
        assert.isOk(colors.brandColor2)
        assert.isOk(colors.brandColor3)
        assert.isOk(colors.brandColor4)
        assert.isOk(colors.brandColor5)
    })

    it("Should overwrite defaults", function() {
        const colors = nb.setBeardColors({ brandColor: "#00FF00" })
        assert.isOk(colors.brandColor === "#00FF00")
    })

    it("Should darken colors incrementally", function() {
        const colors = nb.setBeardColors()
        assert.isOk(colors.g05 !== colors.g10)
        assert.isOk(colors.g50 === "#808080")
    })
})

describe("prefixSelectors() function", function () {
    it("Should return an object with helper selectors prefixed with a '.'", function() {
        const css = nb.prefixSelectors(nb.defaultSettings, { misc: nb.helpers.misc })
        assert.isOk(css['.clearfix'])
    })
    it("Should return an object with psuedo helper selectors prefixed with a '&'", function() {
        const css = nb.prefixSelectors(nb.defaultSettings, { misc: nb.helpers.misc })
        assert.isOk(css['.clearfix']['&:after'])
    })
})

// describe("Helpers", function () {
//     jsdom()
//
//     describe("borderRadius Helper", function () {
//         it("Should create selectors 1 to 9", function() {
//             const css = nb.create([ nb.helpers.borderRadius ], nb.defaultSettings)
//             assert.isOk(css("br1 br10"))
//             assert.isNotOk(css("br11"))
//         })
//
//         it("Should incrementBy by 2", function() {
//             const settings = {
//                 ...nb.defaultSettings,
//                 helpers: {
//                     ...nb.defaultSettings.helpers,
//                     borderRadius: {
//                         limit: 10,
//                         incrementBy: 2,
//                         useBreakpoints: true
//                     }
//                 }
//             }
//
//             const css = nb.helpers.borderRadius(settings, nb.defaultSettings.breakpoints)
//             assert.isNotOk()
//         })
//     })
// })
