'use strict';

angular.module('myApp.viewlogin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewlogin', {
    templateUrl: 'viewlogin/viewlogin.html',
    controller: 'loginController'
  });
}])

.controller('loginController', function($scope) {
    $scope.login = function() {
        window.location.href = "https://api.imgur.com/oauth2/authorize?client_id=" + "CLIENT_ID_HERE" + "&response_type=token"
    }
});