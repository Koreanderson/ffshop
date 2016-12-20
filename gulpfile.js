var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', function() {
	gulp.watch('./assets/sass/**/*.scss', ['sass']);
});
gulp.task('sass', function () {
	return gulp.src('./assets/sass/**/*.scss')
		.pipe(sourcemaps.init() )
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./assets/css'))
		.pipe(reload({ stream: true }));
});
