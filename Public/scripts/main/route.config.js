(function () {
    "use strict";

    angular
        .module('DP.Main')
        .config(config)
        .run(run);

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
                controller: 'todosController',
                controllerAs: 'vm',
                templateUrl: 'subviews/goals.html'
            })
            .when('/goals/newGoal', {
                controller: 'goalsController',
                controllerAs: 'vm',
                templateUrl: 'subviews/newGoal.html'
            })
            .when('/goals/pastGoals', {
                controller: 'goalsController',
                controllerAs: 'vm',
                templateUrl: 'subviews/pastGoals.html'
            })
            .when('/history', {
                controller: 'historyController',
                controllerAs: 'vm',
                templateUrl: 'subviews/history.html'
            })
            .otherwise('/dashboard');
    }

    run.$inject = ['$rootScope', '$location'];
    function run(rootScope, location) {
        var path = function () {
            return location.path();
        };
        rootScope.$watch(path, function (newVal, oldVal) {
            rootScope.activetab = newVal;
        });
    };
})();