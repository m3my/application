'use strict';

/**
 * @ngdoc function
 * @name movieMemoryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieMemoryApp
 */
angular.module('movieMemoryApp')
    .controller('GameCtrl', function ($scope, $routeParams, $firebase, $timeout, $location) {

	$scope.location = $location.absUrl();
	$scope.app.error = '';
	$scope.app.warning  = '';
	$scope.app.information = '';
	$scope.app.success = '';
	$scope.app.flippedCards = [];

	var ref = new Firebase('https://popping-heat-9121.firebaseio.com/games/' + $routeParams.id);
	$firebase(ref).$asObject().$bindTo($scope, 'game').then(function() {
	    $scope.$watch('game.cards', function (cards) {
		if (cards) {
		    $scope.app.flippedCards = _.sortBy(_.where(cards, { status: 'flipped' }), 'updatedAt');
		}
	    }, true);

	    $scope.$watch('game.cards', function (cards) {
		if (cards) {
		    var lists = _.groupBy(cards, function(item, index){
			return Math.floor(index / 6);
		    });
		    $scope.app.chunkedCards = _.toArray(lists);
		}
	    }, true);

	    if((_.where($scope.game.players, { id: $scope.user.id }) || []).length === 0) {
		if (($scope.game.players = $scope.game.players || []).length < 2) {
		    $scope.game.players.push(angular.extend($scope.user, { score: 0 }));
		    if ($scope.game.players.length === 2) {
			$scope.game.activePlayer = $scope.user.id;
		    }
		} else {
		    $scope.app.error = 'Sorry, all 2 seats are already taken :(';
		}
	    }

	});

	$scope.flipCard = function (card) {
	    if ($scope.game.activePlayer === $scope.user.id) {
		if ($scope.app.flippedCards.length<2) {
		    card.status = 'flipped';
		    card.updatedAt = new Date().getTime();
		    $scope.$broadcast('timer-stop');
		}
	    }
	};

	$scope.$watch('app.flippedCards.length', function (length) {
	    if (length === 2) {
		var i_am_active = $scope.game.activePlayer === $scope.user.id 
		console.log("Active player: " + $scope.game.activePlayer);
		console.log("I am " + (i_am_active ? "" : "not ") + "active");
		var match = $scope.app.flippedCards[0].IMDB_Id === $scope.app.flippedCards[1].IMDB_Id;
		$timeout(function () {
		    if (i_am_active) {
			var p = ($scope.game.players[0].id === $scope.game.activePlayer) ? 0 : 1;
			if (match) {
			    _.each($scope.app.flippedCards, function (item) {
				item.status = 'scored';
			    });
			    $scope.game.players[p].score++;
			} else {
			    _.each($scope.app.flippedCards, function (item) {
				item.status = 'fresh';
			    });
			    
			    $scope.game.activePlayer = $scope.game.players[1-p].id;
			    console.log("Giving control to player " + $scope.game.activePlayer);
			}
		    }
		}, 2000);
	    }
	});
    
    });
