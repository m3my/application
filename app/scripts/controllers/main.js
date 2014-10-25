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
      var cards = [];
      for (var i = 0; i < 24; ++i) {
          cards[i] = {movieid: '-J_8Ofofn7owEbjSiC4r', status: 0};
      }
      $game.$add(
          {
            cards: cards,
            players: [{name: 'poop', score: 1}]
          }).then(function(ref) {
        var id = ref.name();
        $location.path('games/' + id);
      });
    };

  });
