'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('todoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have an items list', function() {
    expect(scope.items).toBeDefined();
  });

  // Add function
  describe('add', function() {

    it('should be defined', function() {
      expect(scope.add).toBeDefined();
    });

    it('should be a function', function() {
      expect(typeof scope.add === 'function').toBe(true);
    });

    it('should add an item to the items list', function() {
      scope.newText = 'Fake item';
      scope.items = [];
      scope.add();
      expect(scope.items[0].text).toEqual('Fake item');
    });

    it('should add an item and mark it as not done', function() {
      scope.newText = 'Fake item';
      scope.items = [];
      scope.add();
      expect(scope.items[0].done).toBe(false);
    });

    it('should not add an item that has an empty text', function() {
      scope.newText = '';
      scope.items = [];
      scope.add();
      expect(scope.items.length).toBe(0);
    });

    it('should have an empty newText field after a call to add', function () {
      scope.newText = 'a task';
      scope.items = [];
      scope.add();
      expect(scope.newText).toEqual('');;
    });

  });

});
