'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const gutil = require('gulp-util');
const gulpif = require('gulp-if');
const autoprefixerOptions = require('../utils/config').autoprefixer;
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('sass', function () {
	gulp.src([
		'assets/**/**/*.{sass,scss}',
		'!assets/**/**/_*.{sass,scss}'
	])
	.pipe(gulpif(isDevelopment, sourcemaps.init()))
	.pipe(sass().on('error', sass.logError))
	.pipe(gulpif(gutil.env.prefix, postcss([autoprefixer(autoprefixerOptions)])))
	.pipe(gulpif(isDevelopment, sourcemaps.write()))
	.pipe(gulp.dest('public'))
	.pipe(browserSync.reload({stream: true}))
});