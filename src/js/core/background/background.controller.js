define(['./module'], function (background) {
    'use strict';

    background.controller('BackgroundCtrl', ['$scope', '$window', function ($scope, $window, $state) {

      $scope.images = [{
        src: 'assets/img/fanart0.jpg'
      },{
        src: 'assets/img/fanart1.jpg'
      },{
        src: 'assets/img/fanart2.jpg'
      },{
        src: 'assets/img/fanart3.jpg'
      }];

    }]);
});
