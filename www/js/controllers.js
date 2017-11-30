controllers = angular.module('starter.controllers', []);

controllers.controller('LoginCtrl', function($scope, $http, Auth) {
    $scope.auth = Auth;
});
