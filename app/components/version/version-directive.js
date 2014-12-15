'use strict';

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  function test (scope, element, attrs) {
		element.text(version);
	}
  return {
	restrict: 'E',
	link: test
	} 
}]);
