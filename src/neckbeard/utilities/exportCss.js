import fs from 'fs'
const neckbeard = require('../').default
import postcss from 'postcss'
import postcssJs from 'postcss-js'

var argv = require('minimist')(process.argv.slice(2))

const settings = {
    ...neckbeard.defaultSettings
    // ...Overwrites here
}

// Compose Beard Style Object
neckbeard.selectorsToString(neckbeard.all(), settings).then(result => {
    result.warnings().forEach(function (warn) {
        console.warn(warn.toString())
    })

    // fs.mkdirSync('dist');

    fs.writeFile('neckbeard.css', result, (err) => {
        if (err) throw err
        console.log('It\'s saved!')
    })
})

function ensureDirectoryExistence(filePath) {
    var dirname = path.dirname(filePath);
    if (directoryExists(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

function directoryExists(path) {
    try {
        return fs.statSync(path).isDirectory();
    }
    catch (err) {
        return false;
    }
}
