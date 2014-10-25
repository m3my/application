'use strict';

/**
 * @ngdoc function
 * @name movieMemoryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieMemoryApp
 */
angular.module('movieMemoryApp')
  .controller('GameCtrl', function ($scope, Game, $routeParams, $firebase) {
    console.log('Hey' + $routeParams.id);
    var ref = new Firebase('https://popping-heat-9121.firebaseio.com/games/' + $routeParams.id);
    $firebase(ref).$asObject().$bindTo($scope, 'game');
    // $scope.game.flippedCards = [];

    var ref = new Firebase('https://popping-heat-9121.firebaseio.com/movies');
    var movies = $firebase(ref).$asArray();

    movies.$loaded(
        function(x) {
            console.log('Hey' + x.length);
        }, function(err) {
            console.error(err);
          });

    $scope.flipCard = function (card) {
      if ($scope.game.flippedCards.length < 2) {
        card.isFlipped = true;
      }
    };

    $scope.$watch('game.cards', function (cards) {
      $scope.game.flippedCards = _.where(cards, { isFlipped: true });
    }, true);

    $scope.data = Game;
  });
