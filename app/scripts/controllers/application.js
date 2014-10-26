'use strict';

/**
 * @ngdoc function
 * @name movieMemoryApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the movieMemoryApp
 */
angular.module('movieMemoryApp')
  .controller('ApplicationCtrl', function ($scope, Guid, $cookies) {
    var moviememoryCookie = $cookies.moviememoryCookie;
    if (moviememoryCookie === undefined) {
        $cookies.moviememoryCookie = Guid();
    }
    $scope.user = { id: $cookies.moviememoryCookie };
    $scope.app  = { error: '' };
  });
