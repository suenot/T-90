'use strict';

const runSequence = require('run-sequence');
const gulp = require('gulp');

gulp.task('default', function(cb) {
	require('require-dir')('./.gulp/default', {recurse: true});
	runSequence(
		[
			'sass',
			'styl',
			'jade'
		],
		[
			'server',
			'watch'
		],
		cb
	);
});