module.exports = function(config){
  config.set({

    basePath : './',
	
    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
	  'app/bower_components/jquery-2.1.1.min.js',
      'app/components/**/*.js',
      'app/view*/**/*.js',
	  'app/view1/components/general-property/general-property.html'
    ],
	
	preprocessors: {
		'app/view1/components/general-property/general-property.html' : ['ng-html2js']
	},
	
	ngHtml2JsPreprocessor: {
		stripPrefix: 'app/'
	//	prependPrefix: 'app/'
	},
	
    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter', 
			'karma-ng-html2js-preprocessor'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
