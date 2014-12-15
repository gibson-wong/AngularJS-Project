'use strict';

angular.module ('myApp.view1.method-property.scenario-dimension-directive', [])

.directive('scenarioDimension', function () {
	return {
		restrict: 'E',
		templateUrl: 'view1/components/method-property/ScenarioDimension/scenario-dimension.html'
	}
});