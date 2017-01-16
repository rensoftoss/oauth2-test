'use strict';

angular.module('oauth2TestApp.viewcallback', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewcallback', {
    templateUrl: 'viewcallback/viewcallback.html',
    controller: 'callbackController'
  });
}])

.controller('callbackController', function($scope) {

    $cookies.put('token', $scope.data);
    // $scope.accessToken = JSON.parse(window.localStorage.getItem("imgur")).oauth.access_token;
});