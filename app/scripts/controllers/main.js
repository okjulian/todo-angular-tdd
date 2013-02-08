'use strict';

todoApp.controller('MainCtrl', function($scope) {

  $scope.items = [];

  $scope.add = function() {
    if ($scope.newText !== undefined && $scope.newText !== '') {
      $scope.items.push({text: $scope.newText, done: false});
      $scope.newText = '';
    };
  };

  $scope.complete = function(item) {
    item.done = true;
  };
});
