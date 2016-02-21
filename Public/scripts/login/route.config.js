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
                templateUrl: 'subviews/signIn.html'
            })
            .when('/register', {
                controller: 'registerController',
                controllerAs: 'vm',
                templateUrl: 'subviews/register.html'
            })
            .otherwise('/login');

        httpProvider.interceptors.push('tokenInjector');
    }
})();