'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Styles Task
gulp.task('styles', function () {
  return gulp.src('./sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%']
    }))
    .pipe(gulp.dest('./css'));
});

// Watch Task
gulp.task('watch', function() {
  gulp.watch('sass/*.scss', ['styles']);
});

// Default Task
gulp.task('default', ['styles', 'watch']);
