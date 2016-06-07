define(['./module'], function(navigator) {
    'use strict';

    navigator.factory('navigatorManager', [
        'NAV_KEY_CODES',
        'NAV_CMD',
        'NAV_CMD_ALLOW_HOLD',
        function(NAV_KEY_CODES, NAV_CMD, NAV_CMD_ALLOW_HOLD) {
            var containers = [],
                currentContainerID;

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
                if(isContainerRegisterd(name))
                    containers[name] = container;
                else {
                    containers.push(name);
                    containers[name] = container;
                }
            }

            function removeContainer(container) {
                for(var i = 0; i < containers.length; ++i) {
                    if(containers[i] == container) {
                        containers.splice(i, 1);
                        return;
                    }
                }
            }

            return {
                registerContainer: registerContainer,
                removeContainer: removeContainer
            }
        }
    ]);

});