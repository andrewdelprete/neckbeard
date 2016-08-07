const fs = require('fs')
// const neckbeard = require('../')

function exportCss(helperFns, settings) {
    fs.writeFile('message.txt', 'Hello Node.js', (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
    });
}

exportCss()
