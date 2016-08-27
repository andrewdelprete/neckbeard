var gulp = require('gulp')
    file = require('gulp-file'),
    postcss = require('postcss'),
    postcssJs = require('postcss-js'),
    sass = require('gulp-sass'),
    stream = require('vinyl-source-stream')

var nb = require('./build')

/**
 * Example of building a static CSS
 * file from Neckbeard Helpers.
 */
gulp.task('css', function() {
    const cssObj = nb.prefixSelectors()

    return postcss()
        .process(cssObj, { parser: postcssJs })
        .then(result => {
            file('nb.css', result.css, { src: true })
                .pipe(sass())
                .pipe(gulp.dest('build'))
        })
})
