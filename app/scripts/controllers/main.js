'use strict';

/**
 * @ngdoc function
 * @name movieMemoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieMemoryApp
 */
angular.module('movieMemoryApp')
  .controller('MainCtrl', function ($scope, Game, $location, $firebase) {

    function createGame(movies) {
      var n = movies.length;
      var cards = [];
      for (var i = 0; i < 24;++i) {
        cards[i] = movies[Math.floor(Math.random() * n)];
        cards[i].status = 'fresh';
      }

      $game.$add(
          {
            cards: cards
          }).then(function(ref) {
        var id = ref.name();
        $location.path('games/' + id);
      });
    }

    var $game = Game.$asArray();
    $scope.play = function () {
      var ref = new Firebase('https://popping-heat-9121.firebaseio.com/movies');
      var movies = $firebase(ref).$asArray();
      movies.$loaded(
          function(x) {
              createGame(x);
          }, function(err) {
              console.error(err);
      });
    };

  });
