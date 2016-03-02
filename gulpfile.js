'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function(){
return gulp.src('./src/**/*.scss')
	.pipe(sass())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    // outputStyle : { expanded , compressed }
	.pipe(gulp.dest('./dist'))
})

gulp.task('sass:watch', function() {
    // content
    gulp.watch('src/*.scss', ['sass']);
});