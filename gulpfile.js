// Vars
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');


// Less plugins
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var lessAutoprefix = new LessAutoprefix({
    browsers: ['last 2 versions']
});

// Paths
var DIST_PATH = 'public/dist';
var SCRIPTS_PATH = 'public/scripts/**/*.js';
var CSS_PATH = 'public/css/**/*.css';


// Styles
/*gulp.task('styles', function() {
    console.log("Task de estilos");
    return gulp.src(['public/css/reset.css', CSS_PATH])
        .pipe(plumber(function (err) {
            console.log('Styles Task Error');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(concat('styles.css'))
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
});*/

// Styles for SCSS
/*gulp.task('styles', function() {
    console.log("Task de estilos");
    return gulp.src('public/scss/styles.scss')
        .pipe(plumber(function (err) {
            console.log('Styles Task Error');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
});*/

// Styles for less
gulp.task('styles', function() {
    console.log("Task de estilos");
    return gulp.src('public/less/styles.less')
        .pipe(plumber(function (err) {
            console.log('Styles Task Error');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(less({
            plugins: [lessAutoprefix]
        }))
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
});

// Scripts
gulp.task('scripts', function() {
    console.log("Task de scripts");
    return gulp.src(SCRIPTS_PATH)
        .pipe(plumber(function(err) {
            console.log('Scripts Task Error');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))
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
    //gulp.watch(CSS_PATH, ['styles']);
    //gulp.watch('public/scss/**/*.scss', ['styles']);
    gulp.watch('public/less/**/*.less', ['styles']);
});