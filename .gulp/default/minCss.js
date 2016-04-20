'use strict';
var gulp = require('gulp');
var streamqueue = require('streamqueue');
var postcss = require('gulp-postcss');
var uncss = require('gulp-uncss');
var each = require('async-each-series');
var minifyCss = require('gulp-minify-css');
var concats = require('gulp-concat');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var minCss = gutil.env.css;
var minJs = gutil.env.js;
var min = minCss || minJs;
var critical = gutil.env.critical;
var useref = require('gulp-useref');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');

gulp.task('concat', function() {
	return gulp.src('public/**/*.html')
	.pipe(gulpif(
		min,
		useref()
	))
	.pipe(gulp.dest('public'));
});

gulp.task('minCssBase', function() {
	return gulp.src('public/css/app.min.css')
	.pipe(gulpif(
		true,
		uncss({
			html: 'public/**/*.html'
		})
	))
	.pipe(postcss([
		// DANGER
		// require('cssnano')(),
		// require('cssnext')(),
		// require('css-mqpacker')(),
		// require('postcss-merge-rules')(),
		require('postcss-csso')(),
		// NOT DANGER
		// require('postcss-zindex')(),
		// require('postcss-discard-duplicates')(),
		// require('postcss-discard-comments')({removeAll: true}),
		// require('postcss-normalize-url')(),
		// require('postcss-minify-selectors')(),
		// require('postcss-pseudoelements')(),
		// require('postcss-unique-selectors')(),
		// require('postcss-colormin')(),
		// require('postcss-discard-unused')(),
		// require('postcss-reduce-idents')(),
		// require('postcss-minify-font-weight')(),
		// require('postcss-discard-empty')(),
		// require('postcss-minify-trbl')(),
		// require('postcss-font-family')(),
		// require('postcss-single-charset')()
	]))
	// .pipe(minifyCss())
	.pipe(gulp.dest('public/css'))
});

gulp.task('critical', ['minCssBase'], function() {
	require('critical').generate({
		inline: true,
		base: 'public/',
		src: 'index.html',
		dest: 'public/index.html',
		width: 1300, //320,
		height: 900, //480,
		minify: true
	})
});

gulp.task('minCss', ['concat'], function(cb) {
	if (minCss && critical) {
		runSequence(
			'minCssBase',
			'critical',
			cb
		)
	} else if (minCss) {
		runSequence(
			'minCssBase',
			cb
		)
	} else {
		cb();
	}
});
