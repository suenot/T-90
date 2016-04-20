'use strict';

var runSequence = require('run-sequence');
var gulp = require('gulp');

gulp.task('default', function(cb) {
	require('require-dir')('./.gulp/default', {recurse: true});
	runSequence(
		'del',
		'copy',
		[
			'sass',
			'styl',
			'jade',
			'nunjucks'
		],
		[
			'minImg',
			'minCss',
			'minJs',
			'minHtml'
		],
		[
			'server',
			'watch'
		],
		cb
	);
});

gulp.task('minImgAssets', ['minImgA'], function() {});

var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
	return gulp.src('./public/**/*')
	.pipe(ghPages({
		origih: 'origin',
		branch: 'gh-pages',
		force: true
	}));
});