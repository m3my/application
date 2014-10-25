'use strict';

/**
 * @ngdoc directive
 * @name movieMemoryApp.directive:aspectRatio
 * @description
 * # aspectRatio
 */
angular.module('movieMemoryApp')
  .directive('aspectRatio', function ($window, $timeout) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        var diff = attrs.aspectRatioDiff || 0;

        var setWidth = function() {
          var width = parseInt(element.height() * 3.0 / 4.0);

          return element.css('width', width + 'px');
        };

        $timeout(setWidth);

        angular.element($window).on('resize', setWidth);

        var cleanup = function() {
          return angular.element($window).off('resize', setWidth);
        };

        element.on('$destroy', cleanup);
      }
    };
  });
