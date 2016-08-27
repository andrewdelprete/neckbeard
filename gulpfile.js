var gulp = require('gulp')
    autoprefixer = require('autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    file = require('gulp-file'),
    gulpPostcss = require('gulp-postcss'),
    postcss = require('postcss'),
    postcssJs = require('postcss-js'),
    sass = require('gulp-sass')

var nb = require('./build')

/**
 * Example of building a static CSS
 * file from Neckbeard Helpers.
 */
gulp.task('css', function() {
    const cssObj = nb.prefixSelectors()

    return postcss()
        .process(cssObj, { parser: postcssJs })
        .then(function(result) {
            file('nb.css', result.css, { src: true })
                .pipe(sass())
                .pipe(gulpPostcss([ autoprefixer ]))
                .pipe(cleanCSS({ debug: true }, function(details) {
                    console.log('Original: ' + details.stats.originalSize)
                    console.log('Minified: ' + details.stats.minifiedSize)
                }))
                .pipe(gulp.dest('build'))
        })
})
