define(['./module'], function(ui) {
    'use strict';
    ui.directive('znHorizontalContainer', ['navigatorManager', function(navigatorManager) {
        return {
            scope: {},
            restrict: 'E',
            controller: function($scope) {
                var items = [];

                $scope.currentItem = 0;
                this.registerItem = function(itemController) {
                    items.push(itemController);
                };

                //Configure this container behaviour in the navigation manager
                $scope.onRight = function() {
                    if ($scope.currentItem + 1 < items.length) {
                        items[$scope.currentItem].setFocus(false);
                        $scope.currentItem += 1;
                        items[$scope.currentItem].setFocus(true);
                    }
                    return true;
                };
                $scope.onLeft = function() {
                    if ($scope.currentItem > 0) {
                        items[$scope.currentItem].setFocus(false);
                        $scope.currentItem -= 1;
                        items[$scope.currentItem].setFocus(true);
                    }
                    return true;
                };

                $scope.$on('$destroy', function() {
                    navigatorManager.removeContainer(attrs.znHorizontalContainer);
                });
            },
            link: function(scope, element, attrs) {
                if (!!attrs.containerId) {
                    navigatorManager.registerContainer(attrs.containerId, {
                        type: 'horizontal-container',
                        onUp: false,
                        onDown: false,
                        onBottom: false,
                        onTop: false,
                        onRight: scope.onRight,
                        onLeft: scope.onLeft
                    });
                }
            }
        }
    }]);
});