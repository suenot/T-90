// Error options
var const = require('gulp-util');

onError = function(err) {
	gutil.beep(),
	gutil.log(gutil.colors.red(err))
};