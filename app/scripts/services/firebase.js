'use strict';

/**
 * @ngdoc service
 * @name movieMemoryApp.Firebase
 * @description
 * # Firebase
 * Service in the movieMemoryApp.
 */
angular.module('movieMemoryApp')
  .service('Game', function Game($firebase) {
    var ref = new Firebase('https://popping-heat-9121.firebaseio.com/games');
    return $firebase(ref);
  });
