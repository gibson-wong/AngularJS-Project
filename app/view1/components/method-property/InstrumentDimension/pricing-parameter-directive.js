'use strict';

angular.module ('myApp.view1.method-property.pricing-parameter-directive', [])

.directive('pricingParameter', function () {
	return {
		restrict: 'E',
		templateUrl: 'view1/components/method-property/InstrumentDimension/pricing-parameter.html',
	}
});