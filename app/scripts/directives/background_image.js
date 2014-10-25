'use strict';

/**
 * @ngdoc directive
 * @name movieMemoryApp.directive:backgroundImage
 * @description
 * # backgroundImage
 */
angular.module('movieMemoryApp')
  .directive('backgroundImage', function ($document) {
    return {
      restrict: 'A',
      scope: {
        backgroundImage: '='
      },
      link: function(scope, iElement) {
        var src = scope.backgroundImage;
        var img = $document[0].createElement('img');
        img.onload = function() {
          iElement.css({
            backgroundImage: 'url(' + this.src + ')'
          });
          iElement.addClass('loaded');
        };
        img.src = src;
      }
    };
  });
