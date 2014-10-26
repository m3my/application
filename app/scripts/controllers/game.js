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

    $scope.app.error = '';
    $scope.app.flippedCards = [];



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

    var ref = new Firebase('https://popping-heat-9121.firebaseio.com/games/' + $routeParams.id);
    $firebase(ref).$asObject().$bindTo($scope, 'game').then(function() {
      $scope.$watch('game.cards', function (cards) {
        if (cards) {
          $scope.app.flippedCards = _.where(cards, { status: 'flipped' });
        }
      }, true);

      $scope.$watch('game.cards', function (cards) {
        if (cards) {
          var lists = _.groupBy(cards, function(item, index){
            return Math.floor(index / 6);
          });
          $scope.app.chunkedCards = _.toArray(lists);
        }
      }, true);
    });



    $scope.flipCard = function (card) {
      if ($scope.app.flippedCards.length == 2) {
        _.each($scope.app.flippedCards, function (item) {
          item.status = 'fresh';
        });
      }
      card.status = 'flipped';
    };

  });
