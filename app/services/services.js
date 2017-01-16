angular.module('oauth2TestApp.services', [])
    .factory('pingApiService', function ($http) {

    var pingApi = {};

    pingApi.getPing = function (accessToken) {
        return $http({
            method: 'GET',
            url: 'https://localhost:8080/ping',
            headers: {
                'Authorization' : 'Bearer ' + accessToken
            }
        });
    };

    return pingApi;
});