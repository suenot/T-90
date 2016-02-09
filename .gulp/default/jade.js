'use strict';
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const src = {};
const jadeInheritance = require('gulp-jade-inheritance');
const jade = require('gulp-jade');
const changed = require('gulp-changed');
const cached = require('gulp-cached');
const gulpif = require('gulp-if');
const filter = require('gulp-filter');
const errorHandler = require('../utils/errorHandler');

gulp.task('jade', function() {
	return gulp.src(
		[
			'assets/**/**/**/*.jade'
		]
	)
	.pipe(plumber({errorHandler: onError}))
	.pipe(changed('public', {extension: '.html'}))
	.pipe(gulpif(global.isWatching, cached('jade')))
	.pipe(jadeInheritance({basedir: 'assets'}))
	.pipe(filter(function (file) {
		return !/\/_/.test(file.path) && !/^_/.test(file.relative);
	}))
	.pipe(jade({
		pretty: true,
		basedir: 'assets'
	}))
	.pipe(gulp.dest('public'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('setWatch', function() {
	global.isWatching = true;
});