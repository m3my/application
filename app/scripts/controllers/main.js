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
      var ref = new Firebase('https://popping-heat-9121.firebaseio.com/movies');
      $game.$add(
          {
            cards: [],
            players: [{name: 'poop', score: 1}]
          }).then(function(ref) {
        var id = ref.name();
        $location.path('games/' + id);
      });
    };

  });
