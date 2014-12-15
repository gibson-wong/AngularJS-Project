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

.controller('View1Ctrl', ['$scope', function($scope) {
	$scope.generalProperty = {name: "name", method: "method", description: "description"};
	$scope.methodProperty = {instrument: {portfolio: "portfolio"}};
	$scope.thirdLvl = "value";
	$scope.test = {t1: '1',
				   t2: 't2'};
	$scope.myVar = "myVar";
	
	$scope.setDeleteToFalse = function () {
		$scope.isDeleteSimDialogOpen  = false;
	}	
	
	$scope.isDeleteSimDialogOpen = false;
	$scope.deleteSimDialogMessage = "Are you sure you wish to delete this simulation?";
	
	$scope.isClearSimDialogOpen = false;
	$scope.clearSimDialogMessage = "Are you sure you wish to clear all fields from this simulation?";
	
	$scope.openDialog = function (isDialogOpenControl) {		
		$scope[isDialogOpenControl] = true;
	}
	$scope.onOkCallback = function () {
		alert ("ok callback");
		$scope.isDeleteSimDialogOpen = false;
	}
	$scope.onCloseCallback = function () {
		alert ("Close callback");
		$scope.isDeleteSimDialogOpen  = false;
	}
	$scope.onOkClearCallback = function () {
		angular.forEach($scope.generalProperty,function (value, key) {
			$scope.generalProperty[key] = "";
		});
		$scope.isClearSimDialogOpen = false;
	}
	$scope.onCancelClearCallback = function () {
		$scope.isClearSimDialogOpen = false;
	}
	
	$scope.enableClose = true;
}]);