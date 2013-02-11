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

  describe('remove', function () {

    it('should be defined', function() {
      expect(scope.remove).toBeDefined();
    });

    it('should be a function', function() {
      expect(typeof scope.remove === 'function').toBe(true);
    });

    it('should remove a specific item from the items list', function() {
      scope.item = {text: 'An item', done: true};
      scope.items = [];
      scope.items.push(scope.item);
      expect(scope.items.length).toBe(1);
      scope.remove(scope.item);
      expect(scope.items.length).toBe(0);
    });

  });

  describe('toggleDone', function () {
 
    it('should be defined', function() {
      expect(scope.toggleDone).toBeDefined();
    });

    it('should be a function', function() {
      expect(typeof scope.toggleDone === 'function').toBe(true);
    });

    it('should make a done item be not done', function() {
      scope.item = {text: 'A task', done: true};
      scope.toggleDone(scope.item);
      expect(scope.item.done).toBeFalsy();
    });

    it('should make a not done item be done', function() {
      scope.item = {text: 'A task', done: false};
      scope.toggleDone(scope.item); 
      expect(scope.item.done).toBeTruthy();
    });

  });

});
