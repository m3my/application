'use strict';

/**
 * @ngdoc function
 * @name movieMemoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieMemoryApp
 */
angular.module('movieMemoryApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    $scope.data = $firebase;
    $scope.play = function () {
      var ref = new Firebase('https://popping-heat-9121.firebaseio.com/');
      var obj = $firebase(ref).$asObject();
      obj.foo = 'bar';
      obj.$save().then(function(ref) {
         ref.name() === obj.$id; // true
      }/*, optional error callback */);
    };
  });
