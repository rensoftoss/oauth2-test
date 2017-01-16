'use strict';

angular.module('oauth2TestApp.viewresource', ['ngRoute', 'ngCookies'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewresource', {
    templateUrl: 'viewresource/viewresource.html',
    controller: 'resourceController'
  });
}])

.controller('resourceController', function($scope, $location, $cookies, pingApiService) {
    $scope.response = "";
    $scope.accessToken = $cookies.get('token');

    pingApiService.getPing($scope.accessToken)
    .success(function (response) {
        $scope.response = response;
    }).error(function () {
        $location.path("/login");
    });
});