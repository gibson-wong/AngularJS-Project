'use strict';

angular.module ('myApp.view1.method-property.instrument-selection-directive', [])

.directive('instrumentSelection', function () {
	return {
		restrict: 'E',
		templateUrl: 'view1/components/method-property/InstrumentDimension/instrument-selection.html',
		scope: {
			methodProp: '='
		}
	}
});