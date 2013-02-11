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

    it('should switch between the class completed-true and completed-false when the user clicks the complete button', function () {
      input('newText').enter('practice tdd');
      element('.input-append button').click();
      element('.items li button:first-of-type').click();
      expect(element('.items li div').attr('class')).toBe('span6 completed-true');
      element('.items li button:first-of-type').click();
      expect(element('.items li div').attr('class')).toBe('span6 completed-false');
    });

    it('should remove an item when user clicks remove button', function () {
      input('newText').enter('practice tdd');
      element('.input-append button').click();
      expect(repeater('.items li').count()).toBe(1);
      element('.items li button').click();
      expect(repeater('.items li').count()).toBe(0);
    });

  });
});
