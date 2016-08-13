var gulp = require('gulp'),
    file = require('gulp-file')
    // nb = require('./src/neckbeard').default

gulp.task('js', function() {
  var str = "Hey David Hemphill"

  return file('nb.js', str, { src: true })
    .pipe(gulp.dest('dist'));
});
