define(['./module'], function (ui) {
    'use strict';
    ui.directive('znBackgroundImage', function () {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          element.css({
              'background-image': 'url(' + attrs.znBackgroundImage + ')',
              'background-size': 'cover',
              'background-repeat': 'no-repeat',
              'background-position': 'center center'
          });
        }
      };
    }); 
});