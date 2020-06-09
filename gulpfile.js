'use strict';

// change this variable to show / hide errors
var ENVIRONMENT = 'development' // 'production'

, gulp = require('gulp')
, stylus = require('gulp-stylus')
, minify = require('gulp-minify-css')
, rename = require('gulp-rename')

, nib = require('nib')
, rupture = require('rupture')

, paths = {
  coreFiles: './lcars/stylus/*.styl'
};

gulp.task('compile-dev', function(done) {
  gulp.src('./lcars/stylus/lcars_devel.styl')
    .pipe(
      stylus({
          errors: (ENVIRONMENT==='development'),
          use: [
            nib(),
            rupture()
          ]
      })
    )
    .pipe( rename('lcars.devel.css') )
    .pipe( gulp.dest('./lcars/css') );
  done();
});

gulp.task('compile', function(done) {
  gulp.src('./lcars/stylus/lcars.styl')
    .pipe(
      stylus({
          errors: (ENVIRONMENT==='development'),
          use: [
            nib(),
            rupture()
          ]
      })
    )
    .pipe( gulp.dest('./lcars/css') );
  done();
});

gulp.task('compile-build', function(done) {
  gulp.src('./lcars/stylus/lcars.styl')
    .pipe(
      stylus({
          errors: (ENVIRONMENT==='development'),
          use: [
            nib(),
            rupture()
          ]
      })
    )
    .pipe( minify() )
    .pipe( rename('lcars.min.css') )
    .pipe( gulp.dest('./lcars/css') );
  done();
});

gulp.task('watch', function() {
  gulp.watch(paths.coreFiles, gulp.parallel(['compile-dev']));
});

gulp.task('default', gulp.parallel(['compile-dev', 'compile','compile-build']));
