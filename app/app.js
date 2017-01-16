'use strict';

angular.module('oauth2TestApp', [
    'ngRoute',
    'oauth2TestApp.viewlogin',
    'oauth2TestApp.viewresource',
    'oauth2TestApp.viewcallback'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'viewlogin/viewlogin.html',
        controller: 'loginController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'viewlogin/viewlogin.html',
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
