// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var Auth0Cordova = require('@auth0/cordova');

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

    .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {

        function handleUrl(url) {
            Auth0Cordova.onRedirectUri(url);
        }

        window.handleOpenURL = handleUrl;

        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

        .state('tab.exhaust', {
        url: '/exhaust',
        cache: false,
        views: {
            'exhaust': {
                templateUrl: 'templates/exhaust.html',
                controller: 'ExhaustCtrl'
            }
        }
    })

        .state('tab.rectification', {
        url: '/rectification',
        cache: false,
        views: {
            'rectification': {
                templateUrl: 'templates/rectification.html',
                controller: 'RectificationCtrl'
            }
        }
    })

        .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
            'tab-chats': {
                templateUrl: 'templates/chat-detail.html',
                controller: 'ChatDetailCtrl'
            }
        }
    })

        .state('tab.winelist', {
        url: '/winelist',
        cache: false,
        views: {
            'winelist': {
                templateUrl: 'templates/winelist.html',
                controller: 'WinelistCtrl'
            }
        }
    })

        .state('tab.catalog', {
        url: '/catalog',
        cache: false,
        views: {
            'catalog': {
                templateUrl: 'templates/catalog.html',
                controller: 'CatalogCtrl'
            }
        }
    })

        .state('tab.wharehouse', {
        url: '/wharehouse',
        cache: false,
        views: {
            'wharehouse': {
                templateUrl: 'templates/wharehouse.html',
                controller: 'WharehouseCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/exhaust');

});
