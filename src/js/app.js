/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define("app", [
    'angular',
    'angular-ui-router',
    'angular-animate',
    'text!',
    './core/navigator/index',
    './core/ui-components/index',
    './core/player/index',
    './home/index',
    './core/background/index',
    './core/launcher/index',
    './states'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'app.core.navigator',
        'app.core.ui.components',
        'app.core.player',
        'app.core.background',
        'app.core.launcher',
        'app.home',
        'app.states',
        'ui.router',
        'ngAnimate'
    ]).run(function($state, $rootScope) {

        // Create the menubar
   

        $state.go('home');
    });
});
