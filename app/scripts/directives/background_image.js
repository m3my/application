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
      link: function(scope, element) {
        scope.$watch('backgroundImage', function () {
          var src = scope.backgroundImage;
          if (src) {
            var img = $document[0].createElement('img');
            img.onload = function() {
              element.css({
                backgroundImage: 'url(' + this.src + ')',
                backgroundSize: 'cover'
              });
              element.addClass('loaded');
            };
            img.src = src;
          }
        });
      }
    };
  });
