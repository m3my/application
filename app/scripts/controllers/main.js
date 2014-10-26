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

    $scope.app.error = '';
    $scope.app.flippedCards = [];

    function createGame(movies) {
      var n = movies.length;
      var size = 3;

      var moviesample = _.sample(movies,size);
      var covercards = [];
      var tagscards = [];
      for (var i = 0; i < size;++i) {
        var movie = movies[Math.floor(Math.random() * n)];
        covercards[i] = angular.copy(movie);
        covercards[i].type = 'cover';
        covercards[i].status = 'fresh';

        tagscards[i] = angular.copy(movie);
        tagscards[i].type = 'tags';
        tagscards[i].status = 'fresh';
      }
      var moviecards = tagscards.concat(covercards);
      var positions = _.shuffle(_.range(size*2));

      var cards = [];
      for (i = 0; i < size*2;++i) {
        cards[i] = moviecards[positions[i]];
      }

      game.$add({ cards: cards })
        .then(function(ref) {
          var id = ref.name();
          $location.path('games/' + id);
        });
    }

    var game = Game.$asArray();
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
    $scope.play();
  });
