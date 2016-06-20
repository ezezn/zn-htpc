define(['./module'], function(navigator) {
    'use strict';

    navigator.factory('applicationManager', [
        'NAV_KEY_CODES',
        'NAV_CMD',
        'NAV_CMD_ALLOW_HOLD',
        function(NAV_KEY_CODES, NAV_CMD, NAV_CMD_ALLOW_HOLD) {
            var containers = [],
                currentContainerID = false;

            function getApplicationsInfo() {
                return [{
                    icon: 'image',
                    title: 'Pictures',
                    color: 'white',
                    bgColor: 'orange'
                }, {
                    icon: 'music',
                    title: 'Music',
                    color: 'white',
                    bgColor: 'red'
                }, {
                    icon: 'film',
                    title: 'Movies',
                    color: 'white',
                    bgColor: 'white'
                }, {
                    icon: 'tv',
                    title: 'TV Shows',
                    color: 'white',
                    bgColor: 'black'
                }, {
                    icon: 'folder-o',
                    title: 'Playground',
                    color: 'white',
                    bgColor: 'blue',
                    launch: 'ui-playground'
                }, {
                    icon: 'search',
                    title: 'Search',
                    color: 'white',
                    bgColor: 'light-red'
                }, {
                    icon: 'server',
                    title: 'Shared media',
                    color: 'white',
                    bgColor: 'white'
                }, {
                    icon: 'youtube-square',
                    title: 'Youtube',
                    color: 'white',
                    bgColor: 'green'
                }, {
                    icon: 'cogs',
                    title: 'Settings',
                    color: 'white',
                    bgColor: 'black'
                }];
            }

            function runApplication(idApp) {

            }


            return {
                getApplicationsInfo: getApplicationsInfo,
                runApplication: runApplication

            }
        }
    ]);
});