(function() {
    'use strict';

    angular
        .module('DP.Directives')
        .directive('charityCard', charityCard);

    charityCard.$inject = [];
    function charityCard() {
        return {
            restrict: 'E',
            replace: true,
            $scope: {},
            templateUrl: 'templates/CharityCard.html'
        };
    }
})();
