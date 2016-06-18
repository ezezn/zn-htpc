define(['./module'], function(launcher) {
    'use strict';

    launcher.controller('LauncherCtrl', ['$scope', 'navigatorManager', function($scope, navigatorManager) {

        $scope.applicationsInfo = [{
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
            title: 'File manager',
            color: 'white',
            bgColor: 'blue'
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

        $scope.applicationsInfo.forEach(function(appInfo) {
            appInfo.icon += ' 3x';
        });
        $scope.applicationsInfo.forEach(function(appInfo) {
            appInfo.colorClass = 'tile-' + appInfo.bgColor;
        });
        $scope.getTileColor = function(index) {
            return $scope.applicationsInfo[index].colorClass;
        };

    }]);
});