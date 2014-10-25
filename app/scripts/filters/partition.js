'use strict';

/**
 * @ngdoc filter
 * @name movieMemoryApp.filter:partition
 * @function
 * @description
 * # partition
 * Filter in the movieMemoryApp.
 */
 angular.module('movieMemoryApp')
 .filter('partition', function () {
    var cache = {}; // holds old arrays for difference repeat scopes
    var filter = function(newArr, size, scope) {
      var i,
      oldLength = 0,
      arr = [],
      id = scope.$id,
      currentArr = cache[id];
      if (!newArr) { return; }

      if (currentArr) {
        for (i = 0; i < currentArr.length; i++) {
          oldLength += currentArr[i].length;
        }
      }
      if (newArr.length === oldLength) {
        return currentArr; // so we keep the old object and prevent rebuild (it blurs inputs)
      } else {
        for (i = 0; i < newArr.length; i += size) {
          arr.push(newArr.slice(i, i + size));
        }
        cache[id] = arr;
        return arr;
      }
    };
    return filter;
  });
