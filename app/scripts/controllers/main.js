'use strict';

/**
 * @ngdoc function
 * @name movieMemoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieMemoryApp
 */
angular.module('movieMemoryApp')
  .controller('MainCtrl', function ($scope, Game, $location) {
    var $game = Game.$asArray();
    $scope.play = function () {
      $game.$add({cards: 'whatever', players: 'whatever'}).then(function(ref) {
        var id = ref.name();
        $location.path('games/' + id);
      });
    };

  });
