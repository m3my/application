'use strict';

/**
 * @ngdoc function
 * @name movieMemoryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieMemoryApp
 */
angular.module('movieMemoryApp')
  .controller('GameCtrl', function ($scope, $routeParams, $firebase) {


    var ref = new Firebase('https://popping-heat-9121.firebaseio.com/games/' + $routeParams.id);
    $firebase(ref).$asObject().$bindTo($scope,"game");

    var ref = new Firebase('https://popping-heat-9121.firebaseio.com/games/' + $routeParams.id + '/players');
    $scope.players = $firebase(ref).$asArray();

    $scope.players.$loaded()
      .then(function (x) {
        if (x.length < 2) {
          x.$add(angular.extend($scope.user, { scores: 0 }));
        } else {
          $scope.app.error = 'Sorry, all 2 seats are already taken :(';
        }
      });

    $scope.flipCard = function (card) {
      if (($scope.game.flippedCards || []).length < 2) {
        card.status = "flipped";
      }
    };

    $scope.$watch('game.cards', function (cards) {
      if (cards) {
        $scope.game.flippedCards = _.where(cards, { status: "flipped" });
      }
    }, true);

  });
