'use strict';

describe('todoApp', function () {
  describe('Main view', function() {

    beforeEach(function() {
      browser().navigateTo('/index.html');
    });

    it('should start with an empty list of items', function () {
      expect(repeater('.items li').count()).toBe(0);
    });

    it('should add a new item when user clicks the + button', function () {
      input('newText').enter('practice tdd');
      element('.input-append button').click();
      expect(repeater('.items li').count()).toBe(1);
    });

  });
});
