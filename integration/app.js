// set the module
angular.module('app', []);

// get the module and add the controller
angular.module('app')
	.controller('controller', controller);

function controller($http) {
	this.loadData = function() {
		console.log('loadData called');
		$http.jsonp('/test');
	}
}
