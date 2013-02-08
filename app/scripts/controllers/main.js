'use strict';

todoApp.controller('MainCtrl', function($scope) {
  $scope.items = [];
  $scope.add = function() {
    $scope.items.push({text: $scope.newText, done: false});
  };
});
