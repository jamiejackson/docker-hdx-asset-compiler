var gulp = require('gulp');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');
var rename = require("gulp-rename");

themeRoot = '/code/cfml/deployment_root/wwwroot/onecpd/includes/themes/hudexchange'
 
gulp.task('default', function () {
	gulp.start('minifyJs');
	gulp.start('compileLess')
});

gulp.task('compileLess', function (hi) {
	var fileToWatch = themeRoot + '/less/bootstrap.less';
	var compileTo = themeRoot + '/css';
	
	return gulp.src(fileToWatch)
		.pipe(watchLess(fileToWatch, {
			// https://github.com/paulmillr/chokidar#performance
			interval: 200,
			usePolling: true,
		}))
		.pipe(less())
		.pipe(gulp.dest(compileTo));
});

gulp.task('minifyJs', function (hi) {
	var baseName = 'hudexchange.functions';
	var sourceFileName = baseName + '.js';
	var destFileBaseName = baseName + '.min';
	var pathNameToWatch = themeRoot + '/js/' + sourceFileName;
	var destDir = themeRoot + '/js/min';
	// console.log(pathNameToWatch);
	// console.log(destDir);
	return gulp.src(pathNameToWatch)
		.pipe(watch(pathNameToWatch, {
			// https://github.com/paulmillr/chokidar#performance
			interval: 200,
			usePolling: true,
			verbose: true
		}))
		.pipe(uglify(sourceFileName, {
			outSourceMap: true
		}))
		.pipe(rename({
			basename: destFileBaseName
		}))
		.pipe(gulp.dest(destDir));
});
