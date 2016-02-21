(function() {
    'use strict';

    angular
        .module('DP.Directives')
        .directive('dashCard', dashCard);

    dashCard.$inject = [];
    function dashCard() {
        return {
            restrict: 'E',
            replace: true,
            $scope: {},
            templateUrl: 'templates/dashCard.html'
        };
    }
})();
