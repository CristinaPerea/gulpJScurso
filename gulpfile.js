var gulp = require('gulp');
var uglify = require('gulp-uglify');
// Styles

gulp.task('styles', function() {
    console.log("Task de estilos");
});

// Scripts

gulp.task('scripts', function() {
    console.log("Task de scripts");
    return gulp.src('public/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'));
});


// Images

gulp.task('images', function() {
    console.log("Task de imagenes");
});


// Default

gulp.task('default', function() {
    console.log("Task default");
});
