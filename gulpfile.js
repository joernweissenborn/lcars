'use strict';

var gulp = require('gulp')
, nib = require('nib')
, rupture = require('rupture')
, typographic = require('typographic')
, $ = require('gulp-load-plugins');

gulp.task('compile', function() {
  gulp.src('./app/lcars/core.styl')
    .pipe( $.stylus(
        {
          use: [nib(), rupture(), typographic()]
        }
      ) )
    .pipe( gulp.dest('./dist') );
});