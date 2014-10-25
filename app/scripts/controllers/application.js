'use strict';

/**
 * @ngdoc function
 * @name movieMemoryApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the movieMemoryApp
 */
angular.module('movieMemoryApp')
  .controller('ApplicationCtrl', function ($scope, Guid) {
    $scope.user = { id: Guid() };
    $scope.app = {};
  });
