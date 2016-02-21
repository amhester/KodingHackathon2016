(function() {
    'use strict';

    angular
        .module('DP.Main')
        .directive('charityCard', charityCard);

    charityCard.$inject = [];
    function charityCard() {
        return {
            restrict: 'E',
            replace: true,
            $scope: {},
            templateUrl: 'templates/charityCard.html'
        };
    }
})();
