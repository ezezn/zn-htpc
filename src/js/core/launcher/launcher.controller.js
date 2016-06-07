define(['./module'], function (launcher) {
    'use strict';

    launcher.controller('LauncherCtrl', ['$scope', function ($scope) {

      $scope.applicationsInfo = [{
        icon: 'image',
        title: 'Pictures',
        color: 'white',
        bgColor: 'orange'
      },{
        icon: 'music',
        title: 'Music',
        color: 'white',
        bgColor: 'MediumVioletRed'
      },{
        icon: 'film',
        title: 'Movies',
        color: 'white',
        bgColor: 'LimeGreen'
      },{
        icon: 'tv',
        title: 'TV Shows',
        color: 'white',
        bgColor: 'DodgerBlue'
      },{
        icon: 'folder-o',
        title: 'File manager',
        color: 'white',
        bgColor: 'DimGray'
      },{
        icon: 'search',
        title: 'Search',
        color: 'white',
        bgColor: 'Gold'
      },{
        icon: 'server',
        title: 'Shared media',
        color: 'white',
        bgColor: 'blue'
      },{
        icon: 'youtube-square',
        title: 'Youtube',
        color: 'white',
        bgColor: 'red'
      },{
        icon: 'cogs',
        title: 'Settings',
        color: 'white',
        bgColor: 'black'
      }];

      $scope.applicationsInfo.forEach(function (appInfo) {
        appInfo.icon += ' 3x';
      });

    }]);
});
