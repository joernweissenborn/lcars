'use strict';

var gulp = require('gulp')
, stylus = require('gulp-stylus')
, minify = require('gulp-minify-css')
, nib = require('nib')
, rupture = require('rupture')
, typographic = require('typographic')

, paths = {
  coreFiles: './app/stylus/*.styl'
}

gulp.task('compile', function() {
  gulp.src('./app/stylus/lcars.styl')
    .pipe(
      stylus({
          use: [nib(), rupture(), typographic()]
      })
    )
    .pipe( minify() )
    .pipe( gulp.dest('./app/css') );
});

gulp.task('watch', function() {
  gulp.watch(paths.coreFiles, ['compile']);
});


gulp.task('cCompile', ['compile', 'watch']);