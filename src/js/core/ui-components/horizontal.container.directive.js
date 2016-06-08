define(['./module'], function(ui) {
    'use strict';
    ui.directive('znHorizontalContainer', ['navigatorManager', function(navigatorManager) {
        return {
            scope: true,
            restrict: 'A',
            link: function(scope, element, attrs) {
                if (!!attrs.znHorizontalContainer) {
                    navigatorManager.registerContainer(attrs.znHorizontalContainer, {
                        type: 'horizontal-container',
                        onUp: false,
                        onDown: false,
                        onBottom: false,
                        onTop: false,
                        onRight: function() {
                            return true;
                        },
                        onLeft: function() {
                            return true;
                        }
                    });
                }

                scope.$on('$destroy', function() {
                    navigatorManager.removeContainer(attrs.znHorizontalContainer);
                });
            }
        };
    }]);
});