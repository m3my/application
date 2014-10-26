'use strict';

/**
 * @ngdoc overview
 * @name movieMemoryApp
 * @description
 * # movieMemoryApp
 *
 * Main module of the application.
 */
angular
  .module('movieMemoryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-lodash',
    'firebase',
    'timer'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/game.html', // skip start page and button hit
        controller: 'MainCtrl'
      })
      .when('/games/:id', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  Firebase.enableLogging(false);
