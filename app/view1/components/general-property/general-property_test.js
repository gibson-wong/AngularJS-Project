'use strict';

describe('myApp.view1.general-property-directive', function() {

	beforeEach(module('myApp.view1'));
	beforeEach(module('view1/components/general-property/general-property.html'));

	var controller; 
	var scope;
	var element;

	beforeEach(inject(function(_$controller_, _$rootScope_, _$compile_){ 	
		scope = _$rootScope_.$new();
		
		controller = _$controller_('View1Ctrl', {$scope: scope});
		
		element = angular.element("<general-property></general-property>");
		
		_$compile_(element)(scope);
		
		_$rootScope_.$digest();
	}));
	
	it ("should load input boxes", function () {
		expect(element.find('input').length).toBe(2);
		expect(element.find('textarea').length).toBe(1);
	});	
	
	it ("should have default values", function () {
		var allInput = element.find('input');
		var allTextarea = element.find('textarea');
		expect($(allInput[0]).val()).toBe(scope.generalProperty.name);		
	});
});