define(['./module'], function (players) {
    'use strict';
    players.directive('galleryPlayer', function() {
    return {
      restrict: 'E',
      templateUrl: "./js/core/player/gallery.player.view.html",
      scope: {
        
      },
      controller: function($scope, $interval) {
      	var gallery = this;
      	$scope.activeImage = 1;
      	$scope.srcStock = [
      		'assets/img/fanart0.jpg',
      		'assets/img/fanart1.jpg',
      		'assets/img/fanart2.jpg'
      	];

      	$interval(function (){
      		gallery.next();
      	},10000);

      	this.next = function () {
      		$scope.activeImage = $scope.activeImage == 2? 0 : $scope.activeImage + 1;
      		//console.log('Now current background is ' + $scope.srcStock[$scope.activeImage]);
      	};

      	this.previous = function () {
      		$scope.activeImage = $scope.activeImage == 0? 2 : $scope.activeImage - 1;
      		//console.log('Now current background is ' + $scope.srcStock[$scope.activeImage]);
      	};
      }

    };
  });
});
