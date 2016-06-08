define(['./module'], function(ui) {
    'use strict';
    ui.directive('znNavigationItem', function() {
        return {
            scope: true,
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.addClass('navigation-item');
            }
        };
    });
});