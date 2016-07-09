define(['./module'], function(ui) {
    'use strict';
    ui.directive('znIcon', function() {
        return {
            scope: true,
            restrict: 'E',
            template: '<span ng-class="iconClass"></span>',
            link: function(scope, element, attrs) {
                var classes;
                scope.iconClass = 'icon fa ';
                if (!!attrs.icon) {
                    classes = attrs.icon.split(' ');
                    classes.forEach(function(c) {
                        scope.iconClass += 'fa-' + c + ' ';
                    });

                } else {
                    scope.iconClass += 'fa-star';
                }
            }
        };
    });
});