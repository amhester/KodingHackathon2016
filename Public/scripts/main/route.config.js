(function () {
    "use strict";

    angular
        .module('DP.Main')
        .config(config);

    config.$inject = ['$routeProvider'];
    function config(routeProvider) {
        routeProvider
            .when('/dashboard', {
                controller: 'dashboardController',
                controllerAs: 'vm',
                templateUrl: 'subviews/dashboard.html'
            })
            .when('/charities', {
                controller: 'charitiesController',
                controllerAs: 'vm',
                templateUrl: 'subviews/charities.html'
            })
            .when('/profile', {
                controller: 'profileController',
                controllerAs: 'vm',
                templateUrl: 'subviews/profile.html'
            })
            .when('/goals', {
                controller: 'goalsController',
                controllerAs: 'vm',
                templateUrl: 'subviews/goals.html'
            })
            .when('/history', {
                controller: 'historyController',
                controllerAs: 'vm',
                templateUrl: 'subviews/history.html'
            })
            .otherwise('/dashboard');
    }
})();