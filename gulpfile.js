//----------------------------------------------------------------
// Include gulp
//----------------------------------------------------------------
var gulp = require('gulp');


//----------------------------------------------------------------
// automatically pull in any tasks from package.json
//----------------------------------------------------------------
var plugins = require('gulp-load-plugins')();


//----------------------------------------------------------------
// integration tests (webdriver and protractor)
//----------------------------------------------------------------
var gprotractor = require('gulp-protractor');

// The protractor task
var gulpProtractorAngular = require('gulp-angular-protractor');

// Start a standalone server
var webdriver_standalone = gprotractor.webdriver_standalone;

// Download and update the selenium driver
var webdriver_update = gprotractor.webdriver_update;

// Downloads the selenium webdriver
gulp.task('webdriver_update', webdriver_update);

// Start the standalone selenium server
gulp.task('webdriver_standalone', webdriver_standalone);

// main integration task - run protractor then stop server
gulp.task('integration', ["stop_server"], function(cb) {
});

// stop server once protractor has run
gulp.task('stop_server', ["protractor"], function() {
	plugins.connect.serverClose();
});

// start server then run protractor
gulp.task('protractor', ['start_server_port_8001'], function(cb) {
	gulp
		.src(['integration_tests/**/*.js'])
		.pipe(gulpProtractorAngular({
			'configFile': 'integration/protractor.conf.js',
			'debug': false,
			'autoStartStopServer': true
		}))
		.on('error', function(e) {
			console.log(e);
		})
		.on('end', cb);
});

// start http://localhost:8001 pointing to our build folder
gulp.task('start_server_port_8001', function() {
	startServer(8001);
});

// start http://localhost:8000 pointing to our build folder
gulp.task('start_server_port_8000', function() {
	startServer(8000);
});

function startServer(port) {
	plugins.connect.server({
		root: 'build',
		port: port
	});
}
