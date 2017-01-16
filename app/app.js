'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.viewlogin',
    'myApp.viewresource'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'loginview/viewlogin.html',
        controller: 'loginController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'loginview/viewlogin.html',
        controller: 'loginController'
    });

    $routeProvider.when('/resource', {
        templateUrl: 'resourceview/viewresource.html',
        controller: 'resourceController'
    });

    $routeProvider.otherwise({
        redirectTo: '/login',
        controller: 'loginController'
    });

    // $locationProvider.hashPrefix('!');
    //
    // $routeProvider.otherwise({redirectTo: '/viewlogin'});
}]);
