(function() {
    'use strict';

    angular
        .module('DP.Main')
        .directive('charityCard', charityCard);

    goalCard.$inject = [];
    function charityCard() {
        return {
            restrict: 'E',
            replace: true,
            $scope: {},
            templateUrl: 'templates/charityCard.html'
        };
    }
})();
