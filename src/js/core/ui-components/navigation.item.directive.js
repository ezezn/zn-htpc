define(['./module'], function(ui) {
    'use strict';
    ui.directive('znNavigationItem', function() {
        return {
            restrict: 'A',
            require: ["znNavigationItem", "^znHorizontalContainer"],
            controllerAs: 'ctrl',
            controller: function($element) {
                this.isFocused = false;
                this.isHolding = false;
                this.log = function(message) {
                    console.log(message);
                };
                this.setFocus = function(focus) {
                    if (focus !== undefined) {
                        this.isFocused = focus;
                    } else {
                        this.isFocused = true;
                    }
                    if (this.isFocused) {
                        $element.addClass('focused');
                    } else {
                        $element.removeClass('focused');
                    }
                };

                this.setHoldings = function(hold) {
                    if (hold !== undefined) {
                        this.isHolding = hold;
                    } else {
                        this.isHolding = true;
                    }
                };
            },
            link: function(scope, element, attrs, controllers) {
                element.addClass('navigation-item');
                // The require field contains an array, so the fourth parameter
                // of the linking function is also an array.
                var itemController = controllers[0];
                var containerController = controllers[1];
                containerController.registerItem(itemController);
            }
        };
    });
});