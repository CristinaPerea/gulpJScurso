// Vars

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var SCRIPTS_PATH = 'public/scripts/**/*.js';
var livereload = require('gulp-livereload');

// Styles

gulp.task('styles', function() {
    console.log("Task de estilos");
});

// Scripts

gulp.task('scripts', function() {
    console.log("Task de scripts");
    return gulp.src('public/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'))
        .pipe(livereload());
});


// Images

gulp.task('images', function() {
    console.log("Task de imagenes");
});


// Default

gulp.task('default', function() {
    console.log("Task default");
});

// Watch

gulp.task('watch', function() {
    console.log("Task watch");
    require('./server.js');
    livereload.listen();
    gulp.watch(SCRIPTS_PATH, ['scripts']);
});