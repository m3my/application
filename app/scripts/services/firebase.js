'use strict';

/**
 * @ngdoc service
 * @name movieMemoryApp.Firebase
 * @description
 * # Firebase
 * Service in the movieMemoryApp.
 */
angular.module('movieMemoryApp')
  .service('firebase', function firebase($firebase) {
    var ref = new Firebase('https://popping-heat-9121.firebaseio.com/');
    var sync = $firebase(ref);
    return sync.$asObject();
  });
