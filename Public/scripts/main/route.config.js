(function () {
    "use strict";

    angular
        .module('DP.Main')
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$httpProvider'];
    function config(routeProvider, httpProvider) {
        routeProvider
            .when('/dashboard', {
                controller: 'dashboardController',
                controllerAs: 'vm',
                templateUrl: '/main/dashboard'
            })
            .when('/charities', {
                controller: 'charitiesController',
                controllerAs: 'vm',
                templateUrl: '/main/charities'
            })
            .when('/profile', {
                controller: 'profileController',
                controllerAs: 'vm',
                templateUrl: '/main/profile'
            })
            .when('/goals', {
                controller: 'currentGoalsController',
                controllerAs: 'vm',
                templateUrl: '/main/goals'
            })
            .when('/goals/newGoal', {
                controller: 'goalsController',
                controllerAs: 'vm',
                templateUrl: '/main/newGoal'
            })
            .when('/goals/pastGoals', {
                controller: 'goalsController',
                controllerAs: 'vm',
                templateUrl: '/main/pastGoals'
            })
            .when('/about', {
                controller: 'aboutController',
                controllerAs: 'vm',
                templateUrl: '/main/about'
            })
            .when('/history', {
                controller: 'historyController',
                controllerAs: 'vm',
                templateUrl: '/main/history'
            })
            .when('/goal/:id', {
                controller: 'goalController',
                controllerAs: 'vm',
                templateUrl: '/main/goalDetails'
            })
            .when('/preferences', {
                controller: 'preferencesController',
                controllerAs: 'vm',
                templateUrl: '/main/preferences'
            })
            .when('/motivation', {
                controller: 'motivationController',
                controllerAs: 'vm',
                templateUrl: '/main/motivation'
            })
            .otherwise('/dashboard');

        httpProvider.interceptors.push('tokenInjector');
    }

    run.$inject = ['$rootScope', '$location'];
    function run(rootScope, location) {
        var path = function () {
            return location.path();
        };
        rootScope.$watch(path, function (newVal, oldVal) {
            var pattern = /\/[^\/]*/;
            var found = newVal.match(pattern);
            rootScope.activetab = found;
        });
    }
})();
