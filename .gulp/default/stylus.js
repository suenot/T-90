'use strict';
const gulp = require('gulp');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');
const stylus = require('gulp-stylus');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const errorHandler = require('../utils/errorHandler');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const src = {};
const browsers ={};
const changed = require('gulp-changed');
const gutil = require('gulp-util');
const gulpif = require('gulp-if');
const autoprefixerOptions = require('../utils/config').autoprefixer;

src.styl = {
	'files': [
		'assets/**/**/**/*.styl',
		'!assets/**/**/**/_*.styl'
	],
	'dest': 'public'
};

gulp.task('styl', function() {
	return gulp.src(src.styl.files)
	// .pipe(changed(src.styl.dest, {extension: '.css'}))
	.pipe(plumber({errorHandler: onError}))
	.pipe(stylus())
	.pipe(gulpif(gutil.env.prefix, postcss([autoprefixer(autoprefixerOptions)])))
	.pipe(gulp.dest(src.styl.dest))
	.pipe(browserSync.reload({stream: true}))
});