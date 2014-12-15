'use strict';

angular.module ('myApp.view1.method-property.pricing-parameter.nest-directive', [])

.directive('nest', function () {
	return {
		restrict: 'E',
		templateUrl: 'view1/components/method-property/InstrumentDimension/nest.html',
	}
});