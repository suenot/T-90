'use strict';
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concats = require('gulp-concat');
var streamqueue = require('streamqueue');
var each = require('async-each-series');
var gutil = require('gulp-util');
var minJs = gutil.env.js;
var runSequence = require('run-sequence');

gulp.task('minJsBase', ['concat'], function(done) {
	return gulp.src('public/js/app.min.js')
	.pipe(uglify())
	.pipe(gulp.dest('public/js'))
});

gulp.task('minJs', function(cb) {
	if (minJs) {
		runSequence(
			'minJsBase',
			cb
		)
	} else {
		cb();
	}
});