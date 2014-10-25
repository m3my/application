'use strict';

/**
 * @ngdoc directive
 * @name movieMemoryApp.directive:adjustHeight
 * @description
 * # adjustHeight
 */
angular.module('movieMemoryApp')
  .directive('adjustHeight', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the adjustHeight directive');
      }
    };
  });
