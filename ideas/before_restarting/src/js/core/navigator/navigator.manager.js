define(['./module'], function(navigator) {
    'use strict';

    navigator.factory('navigatorManager', [
        'NAV_KEY_CODES',
        'NAV_CMD',
        'NAV_CMD_ALLOW_HOLD',
        function(NAV_KEY_CODES, NAV_CMD, NAV_CMD_ALLOW_HOLD) {
            var containers = [],
                currentContainerID = false;

            function isContainerRegisterd(obj) {
                var i = containers.length;
                while (i--) {
                    if (containers[i] === obj) {
                        return true;
                    }
                }
                return false;
            }

            function registerContainer(name, container) {
                if (isContainerRegisterd(name))
                    containers[name] = container;
                else {
                    containers.push(name);
                    containers[name] = container;
                }
                if (!currentContainerID) {
                    currentContainerID = name;
                }
            }

            function removeContainer(container) {
                for (var i = 0; i < containers.length; ++i) {
                    if (containers[i] == container) {
                        containers.splice(i, 1);
                        return;
                    }
                }
            }

            function dispatch(cmd) {
                var currentController = containers[currentContainerID];
                switch (cmd.id) {
                    case NAV_CMD.PAD_UP:
                        if (currentController.onUp && !currentController.onUp()) {
                            currentController.onTop();
                        }
                        break;
                    case NAV_CMD.PAD_DOWN:
                        if (currentController.onDown && !currentController.onDown()) {
                            currentController.onBottom();
                        }
                        break;
                    case NAV_CMD.PAD_LEFT:
                        if (currentController.onLeft) {
                            currentController.onLeft();
                        }
                        break;
                    case NAV_CMD.PAD_RIGHT:
                        if (currentController.onRight) {
                            currentController.onRight();
                        }
                        break;
                    case NAV_CMD.ENTER:
                        break;
                    case NAV_CMD.SPACE:
                        break;
                    case NAV_CMD.ESC:
                        break;
                }

            }

            return {
                dispatch: dispatch,
                registerContainer: registerContainer,
                removeContainer: removeContainer
            }
        }
    ]);

});