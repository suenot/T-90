'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var build = gutil.env.build;

// gulp.task('watch', ['setWatch'], function() {
gulp.task('watch', function() {
	if (!build) {
		gulp.watch('assets/**/**/**/*.jade', ['jade', 'minHtml']);
		gulp.watch('assets/**/**/**/*.html', ['nunjucks', 'minHtml']);
		gulp.watch('assets/{css,blocks}/**/**/*.styl', ['styl', 'minCss']);
		gulp.watch('assets/{css,blocks}/**/**/*.{sass,scss}', ['sass', 'minCss']);
		gulp.watch(['assets/**/*.png', 'assets/**/*.jpg', 'assets/**/*.gif', 'assets/**/*.ico', 'assets/**/*.txt', 'assets/**/*.xml', 'assets/**/*.eot', 'assets/**/*.svg', 'assets/**/*.ttf', 'assets/**/*.woff', 'assets/**/*.woff2', 'assets/**/*.otf', 'assets/**/*.js', 'assets/**/*.css'], ['copy', 'minJs']);
	}
});