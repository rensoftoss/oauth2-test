'use strict';

angular.module('oauth2TestApp.viewlogin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewlogin', {
    templateUrl: 'viewlogin/viewlogin.html',
    controller: 'loginController'
  });
}])

.controller('loginController', function($scope, $timeout) {
    $scope.linkAuth = "https://localhost:8080/cas/oauth2.0/authorize"
    $scope.clientId = "testclient"
    $scope.redirectUrl = "https://localhost:8000/callback";

    $scope.counter = 3;

    $scope.onTimeout = function(){
        $scope.counter--;
        if ($scope.counter == 0) {
            $timeout.cancel(mytimeout);
            $scope.login();
        }
        else {
            mytimeout = $timeout($scope.onTimeout, 1000);
        }
    };
    var mytimeout = $timeout($scope.onTimeout,1000);

    $scope.login = function() {
        window.location.href = $scope.linkAuth + "?response_type=token&client_id=" + $scope.clientId + "&redirect_uri=" + $scope.redirectUrl;
    };

});