(function () {
    "use strict";

    angular
        .module('DP.Login')
        .config(config);

    config.$inject = ['$routeProvider', '$httpProvider'];
    function config(routeProvider, httpProvider) {
        routeProvider
            .when('/login', {
                controller: 'signInController',
                controllerAs: 'vm',
                templateUrl: '/login/signIn'
            })
            .when('/register', {
                controller: 'registerController',
                controllerAs: 'vm',
                templateUrl: '/login/register'
            })
            .otherwise('/login');

        httpProvider.interceptors.push('tokenInjector');
    }
})();