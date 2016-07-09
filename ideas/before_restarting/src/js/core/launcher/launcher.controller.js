define(['./module'], function(launcher) {
    'use strict';

    launcher.controller('LauncherCtrl', ['$scope', 'navigatorManager', 'applicationManager', function($scope, navigatorManager, applicationManager) {

        $scope.applicationsInfo = applicationManager.getApplicationsInfo();

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