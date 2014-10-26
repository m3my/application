'use strict';

/**
 * @ngdoc directive
 * @name movieMemoryApp.directive:adjustHeight
 * @description
 * # adjustHeight
 */
angular.module('movieMemoryApp')
  .directive('adjustHeight', function ($window, $timeout) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        
        var setHeight = function() {
        	var height = $window.innerHeight - $('.mmyGameTopBar').height();

        	return element.css('height', height + 'px');
        }

  		$timeout(setHeight);

        angular.element($window).on('resize', setHeight);

        var cleanup = function() {
          return angular.element($window).off('resize', setHeight);
        };

        element.on('$destroy', cleanup);
      }
    };
  });
