'use strict';

/**
 * @ngdoc function
 * @name movieMemoryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieMemoryApp
 */
angular.module('movieMemoryApp')
  .controller('GameCtrl', function ($scope) {
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
  });
