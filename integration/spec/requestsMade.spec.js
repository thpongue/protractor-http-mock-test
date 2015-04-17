var mock = require('protractor-http-mock'), 
	get = require('./get'); 

describe('requests made', function(){
	
	afterEach(function(){
		mock.teardown();
	});

	beforeEach(function(){
		mock([
			{
				request: {
					path: '/test',
					method: 'GET'
				},
				response: {
					data: [
						{
							firstName: 'carlos',
							lastName: 'npm'
						},
						{
							firstName: 'angular',
							lastName: 'js'
						}
					]
				}
			}
		]);

		get();		
	});

	it('can evaluate requests made', function(){

		expect(mock.requestsMade()).toEqual([
			{ url : '/test', method : 'GET' },
		]);
	});

	// todo: finish this spec
	// add clear functionality.
	// add this new feature to docs.
	// publish new version
	it('can clear requests', function(){
		mock.clearRequests();
		expect(mock.requestsMade()).toEqual([]);
	});
});
