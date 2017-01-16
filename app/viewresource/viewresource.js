'use strict';

angular.module('oauth2TestApp.viewresource', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewresource', {
    templateUrl: 'viewresource/viewresource.html',
    controller: 'resourceController'
  });
}])

.controller('resourceController', [function() {

    // $scope.accessToken = JSON.parse(window.localStorage.getItem("imgur")).oauth.access_token;
}]);