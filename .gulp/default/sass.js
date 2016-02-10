'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const gutil = require('gulp-util');
const gulpif = require('gulp-if');
const autoprefixerOptions = require('../utils/config').autoprefixer;
const browserSync = require('browser-sync');

gulp.task('sass', function () {
	gulp.src([
		'assets/**/**/*.{sass,scss}',
		'!assets/**/**/_*.{sass,scss}'
	])
	.pipe(sass().on('error', sass.logError))
	.pipe(gulpif(gutil.env.prefix, postcss([autoprefixer(autoprefixerOptions)])))
	.pipe(gulp.dest('public'))
	.pipe(browserSync.reload({stream: true}))
});