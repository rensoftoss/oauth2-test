'use strict';

angular.module('oauth2TestApp.viewcallback', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewcallback', {
    templateUrl: 'viewcallback/viewcallback.html',
    controller: 'callbackController'
  });
}])

.controller('callbackController', [function() {

}]);