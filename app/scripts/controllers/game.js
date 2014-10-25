'use strict';

/**
 * @ngdoc function
 * @name movieMemoryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieMemoryApp
 */
angular.module('movieMemoryApp')
  .controller('GameCtrl', function ($scope, firebase) {

    $scope.game = {};
    $scope.game.flippedCards = [];

    $scope.game.cards = [
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' },
      { pic: 'http://lorempixel.com/400/400/cats/' }
    ];

    $scope.flipCard = function (card) {
      if ($scope.game.flippedCards.length < 2) {
        card.isFlipped = true;
      }
    };

    $scope.$watch('game.cards', function (cards) {
      $scope.game.flippedCards = _.where(cards, { isFlipped: true });
    }, true);

    $scope.data = firebase;
  });
