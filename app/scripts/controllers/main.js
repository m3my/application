'use strict';

/**
 * @ngdoc function
 * @name movieMemoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieMemoryApp
 */
angular.module('movieMemoryApp')
  .controller('MainCtrl', function ($scope, firebase) {
    $scope.data = firebase;
    $scope.play = function () {
      console.log("Hello from play()");
    }
  });
