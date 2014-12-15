'use strict';

angular.module('myApp.view1.method-property', ['myApp.view1.method-property-directive',
											   'myApp.view1.method-property.instrument-selection-directive',
											   'myApp.view1.method-property.pricing-parameter-directive',
											   'myApp.view1.method-property.pricing-parameter.nest-directive',
											   'myApp.view1.method-property.scenario-dimension-directive'])
											   

.controller('MethodCtrl', ['$scope', function($scope) {
}]);