
var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function($routeProvider) {
	$routeProvider
		.when("/songs", {
			templateUrl: "partials/song-list.html",
			controller: "SongListCtrl"
		})
		.when("/fav", {
			templateUrl: "partials/fav-list.html",
			controller: "FavListCtrl"
		})
	.otherwise({
		redirectTo: "/songs"
	});
});

myApp.factory("FavoriteService", function(){
	var fav = [];

	return {
		getFav: function() {
			return fav;
		},
		addToFavorite: function(song) {
			fav.push(song);
		},
		buy: function(song) {
			alert("Thanks for buying: " + song.name);
		}
	}
});

myApp.factory("SongService", function() {
	var songs = [
		{

			imgUrl: "selen.jpg",
			name: "Kill em with Kindness",
			Artist: "Selena Gomez",
			Album: "Revival",
			Released: "2015"

		},
		{
			imgUrl: "bruno_mar.jpg",
			name: "Just the way you are",
			Artist: "Bruno Mars",
			Album: "Doo-Wops & Hooligans",
			Released: "2010"
		},
		{
			imgUrl: "taylo.jpg",
			name: "Look what you made me do",
			Artist: "Taylor Swift",
			Album: "Reputation",
			Released: "2014"

		},
		{
			imgUrl: "Calvin.jpg",
			name: "This is what you came for",
			Artist: "Calvin Harris",
			Album: "Reputation",
			Released: "2016"

		},
		{
			imgUrl: "taylo.jpg",
			name: "We dont talk anymore",
			Artist: "Charlie Puth",
			Album: "Nine TRack Mind",
			Released: "2016"
		}


	];

	return {
		getSongs: function() {
			return songs;
		},
		addToFavorite: function(song) {

		}
	}
});

myApp.controller("FavListCtrl", function($scope, FavoriteService) {
	$scope.fav = FavoriteService.getFav();

	$scope.buy = function(song) {
		//console.log("book: ", book);
		FavoriteService.buy(song);
	}
});

myApp.controller("HeaderCtrl", function($scope, $location) {
	$scope.appDetails = {};
	$scope.appDetails.title = "MusicWorld!";
	$scope.appDetails.tagline = "We have collection of 1 Million songs";

	$scope.nav = {};
	$scope.nav.isActive = function(path) {
		if (path === $location.path()) {
			return true;
		}

		return false;
	}
});

myApp.controller("SongListCtrl", function($scope, SongService, FavoriteService) {
	$scope.songs = SongService.getSongs();

	$scope.addToFavorite = function(song) {
		SongService.addToFavorite(song);
	}
});
