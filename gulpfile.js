var gulp = require('gulp'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  gulp_watch_pug = require('gulp-watch-pug');

// run this task by typing in gulp pug in CLI
gulp.task('pug', function() {
  return gulp.src('templates/*.pug')
      .pipe(pug()) // pipe to pug plugin
      .pipe(gulp.dest('build')); // tell gulp our output folder
});


// Gulp Sass
gulp.task('styles', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('scss/**/*.scss',['styles']);
    gulp.watch('templates/*.pug');
});

gulp.src('templates/**/*.pug')
    .pipe(watch('templates/**/*.pug'))
    .pipe(gulp_watch_pug('templates/**/*.pug', { delay: 100 }))
    .pipe(pug())
    .pipe(gulp.dest('build/'));


// Run them all gulp
gulp.task('default', [ 'pug', 'styles', 'watch' ]);
