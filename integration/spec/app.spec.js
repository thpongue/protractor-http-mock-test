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
					method: 'JSONP'
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
		element(by.css('#loadDataButton')).click();
	});

	it('can evaluate requests made', function(){

		expect(mock.requestsMade()).toEqual([
			{ url : '/test', method : 'JSONP' },
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
