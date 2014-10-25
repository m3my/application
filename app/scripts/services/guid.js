'use strict';

/**
 * @ngdoc service
 * @name movieMemoryApp.uid
 * @description
 * # uid
 * Service in the movieMemoryApp.
 */
angular.module('movieMemoryApp')
  .service('Guid', function Guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
                 .toString(16)
                 .substring(1);
    }

    return function() {
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
             s4() + '-' + s4() + s4() + s4();
    };
  });
