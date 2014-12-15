'use strict';

angular.module('myApp.view1', ['ngRoute','myApp.view1.general-property-directive',
										 'myApp.view1.method-property',
										 'myApp.r2ciq-dialog-directive'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
	$scope.generalProperty = {name: "name", method: "method", description: "description"};
	$scope.methodProperty = {instrument: {portfolio: "portfolio",
										  asOfDate: "12/15/2014"},
							 pricing: 	 {IM: "IM1",
										  priceDate: "12/15/2014",
										  reportCurrency: "USD"},
							 scenario: 	 {scenSet: "My Scenario",
										  baseline: "Baseline" }};
	$scope.thirdLvl = "value";
	
	$scope.deleteButton = { isOpen : false,
						   deleteSimDialogMessage : "Are you sure you wish to delete this simulation?",
						   onOkCallback: function () {
								alert ("ok callback");
								$scope.deleteButton.isOpen = false;					   
						   },
						   onCloseCallback: function() {
								alert ("Close callback");
								$scope.deleteButton.isOpen  = false;					   
						   }}				   
						   
	$scope.clearAllButton = { isOpen : false,
							  clearSimDialogMessage : "Are you sure you wish to clear all fields from this simulation?",
							  onOkCallback: function () {
									angular.forEach($scope.generalProperty,function (value, key) {
										$scope.generalProperty[key] = "";
									});
									angular.forEach($scope.methodProperty,function (value, key) {
										$scope.methodProperty[key] = "";
									});
									$scope.thirdLvl = "";
									$scope.clearAllButton.isOpen = false;				   
							   },
							  onCloseCallback: function() {
									alert ("Close callback");
									$scope.clearAllButton.isOpen  = false;					   
							}}							
	
	$scope.openDialog = function (isDialogOpenControl) {		
		$scope[isDialogOpenControl].isOpen = true;
	}
	
	$scope.enableClose = true;
}]);