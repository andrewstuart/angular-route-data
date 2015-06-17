var gulp = require('gulp');
var plug = require('gulp-load-plugins')();

gulp.task('build', function() {
  gulp.src(['src/module.js', 'src/**.js'])
    .pipe(plug.concat('angular-route-data.js'))
    .pipe(plug.ngAnnotate())
    .pipe(gulp.dest('build/'))
    .pipe(plug.uglify())
    .pipe(plug.rename('angular-route-data.min.js'))
    .pipe(gulp.dest('build/'));
});

gulp.task('default', ['build']);
