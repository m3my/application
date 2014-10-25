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
    $scope.cards = [
      [
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
      ],
      [
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
      ],
      [
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
      ],
      [
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
        { pic: 'http://lorempixel.com/200/200/cats/' },
      ]
    ];
    $scope.data = firebase;
  });
