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

    it('should mark an item as completed-true when the user clicks its complete button', function () {
      input('newText').enter('practice tdd');
      element('.input-append button').click();
      element('.items li input').click();
      expect(element('.items li div').attr('class')).toBe('span6 completed-true');
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
