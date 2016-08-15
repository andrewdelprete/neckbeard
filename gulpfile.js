var gulp = require('gulp'),
    file = require('gulp-file'),
    postcss = require('postcss'),
    postcssJs = require('postcss-js'),
    stream = require('vinyl-source-stream')

// Neckbeard
var nb = require('./build')

gulp.task('css', function() {
    const cssObj = nb.prefixSelectors(nb.all(), nb.defaultSettings)

    return postcss()
        .process(cssObj, { parser: postcssJs })
        .then(result => {
            file('nb.css', result.css, { src: true })
                .pipe(gulp.dest('dist'))
        })
})
