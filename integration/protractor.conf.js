exports.config = {
  	baseUrl: 'http://localhost:8000/',
  	specs: [
  		'spec/*.spec.js'
  	],
  	onPrepare: function(){
  		require('protractor-http-mock').config = {
	  		rootDirectory: __dirname,
				protractorConfig: 'protractor.conf.js' // default value: 'protractor.conf'
	  	}
  	}
};
