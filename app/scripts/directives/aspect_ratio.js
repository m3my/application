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

        var setHeight = function() {
          var height = parseInt(element.width() * 4.0 / 3.0) - diff;

          return element.css("height", height + "px");
        };

        $timeout(setHeight);

        angular.element($window).on("resize", setHeight);

        var cleanup = function() {
          return angular.element($window).off("resize", setHeight);
        };

        element.on('$destroy', cleanup);
      }
    };
  });
