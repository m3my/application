'use strict';

/**
 * @ngdoc function
 * @name movieMemoryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieMemoryApp
 */
angular.module('movieMemoryApp')
  .controller('GameCtrl', function ($scope, $routeParams, $firebase, $timeout, $location) {

    $scope.location = $location.absUrl();
    $scope.app.error = '';
    $scope.app.warning  = '';
    $scope.app.information = '';
    $scope.app.success = '';
    $scope.app.flippedCards = [];

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

        if (($scope.game.players = $scope.game.players || []).length < 2) {
          $scope.game.players.push(angular.extend($scope.user, { score: 0 }));
          if ($scope.game.players.length==2) {
            $scope.game.activePlayer = $scope.user.id;
          }
        } else {
          $scope.app.error = 'Sorry, all 2 seats are already taken :(';
        }
    });

    $scope.flipCard = function (card) {
      if ($scope.game.activePlayer == $scope.user.id) {
        card.status = 'flipped';
      }
    };

    $scope.$watch('app.flippedCards.length', function (length) {
      if (length == 2 && $scope.game.activePlayer == $scope.user.id) {
          if ($scope.app.flippedCards[0].IMDB_Id == $scope.app.flippedCards[1].IMDB_Id) {
            $timeout(function (argument) {
              _.each($scope.app.flippedCards, function (item) {
                item.status = 'scored';
              });
              _.where($scope.game.players, { id: $scope.user.id })[0].score++;
            }, 2000);

          } else {
            $timeout(function (argument) {
              _.each($scope.app.flippedCards, function (item) {
                item.status = 'fresh';
              });
            }, 2000);

            for (var i = 0; i < $scope.game.players.length; ++i) {
              if ($scope.game.players[i].id != $scope.user.id) {
                $scope.game.activePlayer = $scope.game.players[i].id;
              }
            }
          }

      }
    })

  });
