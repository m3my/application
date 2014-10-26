'use strict';

/**
 * @ngdoc directive
 * @name movieMemoryApp.directive:aspectRatio
 * @description
 * # aspectRatio
 */
angular.module('movieMemoryApp')
  .directive('setCardSize', function ($window, $timeout) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        var margin = 30;

        var setSize = function() {
          var height = (($window.innerHeight - $('.mmyGameTopBar').height())-margin*5)/4;
          var width = height * 3.0/4.0;

          return element.css({ 'height': height + 'px', 'width': width + 'px' });
        };

        $timeout(setSize);

        angular.element($window).on('resize', setSize);

        var cleanup = function() {
          return angular.element($window).off('resize', setSize);
        };

        element.on('$destroy', cleanup);
      }
    };
  });
