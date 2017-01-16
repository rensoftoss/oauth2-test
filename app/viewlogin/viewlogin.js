'use strict';

angular.module('oauth2TestApp.viewlogin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewlogin', {
    templateUrl: 'viewlogin/viewlogin.html',
    controller: 'loginController'
  });
}])

.controller('loginController', function($scope, $timeout) {
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
        window.location.href = "https://api.imgur.com/oauth2/authorize?client_id=" + "CLIENT_ID_HERE" + "&response_type=token"
    };

});