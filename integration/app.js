// set the module
angular.module('app', []);

// get the module and add the controller
angular.module('app')
	.controller('controller', controller);

function controller($http) {
	$http.jsonp('/test');
}
