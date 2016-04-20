'use strict';
var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var gutil = require('gulp-util');
var minHtml = gutil.env.html;
var plumber = require('gulp-plumber');

gulp.task('minHtml', function() {
	if (minHtml) {
		return gulp.src('public/**/*.html')
		.pipe(plumber({errorHandler: onError}))
		.pipe(minifyHTML())
		.pipe(gulp.dest('public'));
	}
});