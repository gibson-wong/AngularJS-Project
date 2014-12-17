'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));
  
  var controller; 
  var scope;
  
  beforeEach(inject(function(_$controller_, _$rootScope_){ 	
	scope = _$rootScope_.$new();
	controller = _$controller_('View1Ctrl', {$scope: scope});
  }));

  describe('view1 controller', function(){
    it('should should be defined', function(){
      //spec body
      expect(controller).toBeDefined();
    });	
  });
  describe ('openDialog function', function (){
	it ('it should set the open state for Delete Dialog to true', (function () {
		scope.openDialog('deleteButton');
		expect(scope.deleteButton.isOpen).toBe(true);
	}));
	it ('it should set the open state for Delete Dialog to true', (function () {
		scope.openDialog('clearAllButton');
		expect(scope.clearAllButton.isOpen).toBe(true);
	}));	
  });  
});