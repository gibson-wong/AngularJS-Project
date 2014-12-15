'use strict';

angular.module('myApp.view1.general-property-directive', []) 

.directive('generalProperty', function () {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'view1/components/general-property/general-property.html',
		scope: {
			generalProp: '=',
			description: '@'
		}
	};

});