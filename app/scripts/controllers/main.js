/*jshint globalstrict: true*/
/*global todoApp:true */
'use strict';

todoApp.controller('MainCtrl', ['$scope', function($scope) {

  $scope.items = [];

  $scope.add = function() {
    if ($scope.newText !== undefined && $scope.newText !== '') {
      $scope.items.push({text: $scope.newText, done: false});
      $scope.newText = '';
    }
  };

  $scope.remove = function(item) {
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);
  };

  $scope.toggleDone = function(item) {
    item.done = !item.done;
  };

}]);
