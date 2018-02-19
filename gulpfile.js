var gulp = require('gulp'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  gulp_watch_pug = require('gulp-watch-pug'),
  gulpPugBeautify = require('gulp-pug-beautify');

// gulp.task('default', function () {
//   return gulp.src('build/*.html')
//
//     .pipe(gulp.dest('build/'));
// });

// run this task by typing in gulp pug in CLI
gulp.task('pug', function buildHTML(){
  return gulp.src('templates/*.pug')
      .pipe(pug()) // pipe to pug plugin
      .pipe(gulpPugBeautify({ omit_empty: true }))
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
    .pipe(gulpPugBeautify({ omit_empty: true }))
    .pipe(gulp.dest('build/'));


// Run them all gulp
gulp.task('default', [ 'pug', 'styles', 'watch' ]);
