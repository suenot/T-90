'use strict';
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var gutil = require('gulp-util');
var minImg = gutil.env.img;
var imageminSvgo = require('imagemin-svgo');
var imageminJpegoptim = require('imagemin-jpegoptim');
var plumber = require('gulp-plumber');

gulp.task('minImg', function () {
	if (minImg) {
		return gulp.src('public/**/**/*.{png,jpg,svg}')
		.pipe(plumber({errorHandler: onError}))
		.pipe(imagemin({
			use: [pngquant(), imageminSvgo(), imageminJpegoptim({progressive: true})],
			progressive: true,
			optimizationLevel: 3,
			multipass: true,
			svgoPlugins: [
				{ removeViewBox: false }
				// { cleanupAttrs: false },
				// { removeDoctype: false },
				// { removeXMLProcInst: false },
				// { removeComments: false },
				// { removeMetadata: false },
				// { removeTitle: false },
				// { removeDesc: false },
				// { removeUselessDefs: false },
				// { removeEditorsNSData: false },
				// { removeEmptyAttrs: false },
				// { removeHiddenElems: false },
				// { removeEmptyText: false },
				// { removeEmptyContainers: false },
				// { cleanUpEnableBackground: false },
				// { convertStyleToAttrs: false },
				// { convertColors: false },
				// { convertPathData: false },
				// { convertTransform: false },
				// { removeUnknownsAndDefaults: false },
				// { removeNonInheritableGroupAttrs: false },
				// { removeUselessStrokeAndFill: false },
				// { removeUnusedNS: false },
				// { cleanupIDs: false },
				// { cleanupNumericValues: false },
				// { moveElemsAttrsToGroup: false },
				// { moveGroupAttrsToElems: false },
				// { collapseGroups: false },
				// { removeRasterImages: false },
				// { mergePaths: false },
				// { convertShapeToPath: false },
				// { sortAttrs: false },
				// { transformsWithOnePath: false },
				// { removeDimensions: false },
				// { removeAttrs: false },
				// { addClassesToSVGElemen: false }
			]
		}))
		.pipe(gulp.dest('public'));
	}
});

gulp.task('minImgA', function () {
	return gulp.src('assets/**/**/*.{png,jpg,svg}')
	.pipe(imagemin({
		use: [pngquant(), imageminSvgo(), imageminJpegoptim({progressive: true})],
		progressive: true,
		optimizationLevel: 3,
		multipass: true,
		svgoPlugins: [
			{ removeViewBox: false }
			// { cleanupAttrs: false },
			// { removeDoctype: false },
			// { removeXMLProcInst: false },
			// { removeComments: false },
			// { removeMetadata: false },
			// { removeTitle: false },
			// { removeDesc: false },
			// { removeUselessDefs: false },
			// { removeEditorsNSData: false },
			// { removeEmptyAttrs: false },
			// { removeHiddenElems: false },
			// { removeEmptyText: false },
			// { removeEmptyContainers: false },
			// { cleanUpEnableBackground: false },
			// { convertStyleToAttrs: false },
			// { convertColors: false },
			// { convertPathData: false },
			// { convertTransform: false },
			// { removeUnknownsAndDefaults: false },
			// { removeNonInheritableGroupAttrs: false },
			// { removeUselessStrokeAndFill: false },
			// { removeUnusedNS: false },
			// { cleanupIDs: false },
			// { cleanupNumericValues: false },
			// { moveElemsAttrsToGroup: false },
			// { moveGroupAttrsToElems: false },
			// { collapseGroups: false },
			// { removeRasterImages: false },
			// { mergePaths: false },
			// { convertShapeToPath: false },
			// { sortAttrs: false },
			// { transformsWithOnePath: false },
			// { removeDimensions: false },
			// { removeAttrs: false },
			// { addClassesToSVGElemen: false }
		]
	}))
	.pipe(gulp.dest('assets'));
});