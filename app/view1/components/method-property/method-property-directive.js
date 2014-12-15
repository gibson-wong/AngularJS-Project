'use strict';

angular.module ('myApp.view1.method-property-directive', [])

.directive('methodProperty', function () {
	return {
		restrict: 'E',
		templateUrl: 'view1/components/method-property/method-property.html',
	}
});