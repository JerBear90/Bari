var gulp = require('gulp'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  gulp_watch_pug = require('gulp-watch-pug'),
  gulpPugBeautify = require('gulp-pug-beautify'),
  connect = require('gulp-connect'),
  jshint = require('gulp-jshint');

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
        .pipe(gulp.dest('build/css/'));
});

// Gulp JS
gulp.task('jshint', function() {
  return gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest('build/js/'))
});

gulp.task('scriptwatch', function() {
  gulp.watch('js/**/*.js', ['jshint']);
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('scss/**/*.scss',['styles']);
    gulp.watch('templates/*.pug');
    // gulp.watch('js/**/*.js'), ['scripts'];
    gulp.watch(['./build/*.html'], ['html']);
});

gulp.src('templates/**/*.pug')
    .pipe(watch('templates/**/*.pug'))
    .pipe(gulp_watch_pug('templates/**/*.pug', { delay: 100 }))
    .pipe(pug())
    .pipe(gulpPugBeautify({ omit_empty: true }))
    .pipe(gulp.dest('build/'));

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./build/*.html')
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});


// Run them all gulp
gulp.task('default', [ 'pug', 'styles', 'watch', 'connect', 'scriptwatch' ]);
