'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('sass',function(){
return gulp.src('./src/**/*.scss')
	.pipe(sass())
	.pipe(prefix())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    // outputStyle : { expanded , compressed }
	.pipe(gulp.dest('./dist'))
})

gulp.task('copy',function(){
	return gulp.src('./src/*.html')
	  .pipe(gulp.dest('./dist'))
})


gulp.task('default', function() {
    // content
    gulp.watch('src/*.scss', ['sass']);
    gulp.watch('src/*.html', ['copy']);
});