'use strict';

/**
 * @ngdoc function
 * @name movieMemoryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieMemoryApp
 */
angular.module('movieMemoryApp')
  .controller('GameCtrl', function ($scope, $routeParams, $firebase, $timeout) {

    $scope.app.error = '';
    $scope.app.flippedCards = [];



    var ref = new Firebase('https://popping-heat-9121.firebaseio.com/games/' + $routeParams.id + '/players');
    $scope.players = $firebase(ref).$asArray();

    $scope.players.$loaded()
      .then(function (x) {
        if (x.length < 2) {
          x.$add(angular.extend($scope.user, { score: 0 }));
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
      card.status = 'flipped';
    };

    $scope.$watch('app.flippedCards.length', function (length) {
      if (length == 2) {
        $timeout(function (argument) {

          if ($scope.app.flippedCards[0].IMDB_Id == $scope.app.flippedCards[1].IMDB_Id) {
            _.each($scope.app.flippedCards, function (item) {
              item.status = 'scored';
            });
            _.where($scope.players, { id: $scope.user.id })[0].score++;
          } else {
             _.each($scope.app.flippedCards, function (item) {
              item.status = 'fresh';
            });
          }
        }, 3000)
      }
    })

  });
