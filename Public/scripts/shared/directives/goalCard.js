(function() {
    'use strict';

    angular
        .module('DP.Directives')
        .directive('goalCard', goalCard)
        .directive('goalFailedCard', goalFailedCard)
        .directive('goalCompletedCard', goalCompletedCard);

    goalCard.$inject = [];
    function goalCard() {
        return {
            name: 'goalCard',
            templateUrl: 'templates/goalCard.html'
        };
    }

    goalFailedCard.$inject = [];
    function goalFailedCard() {
        return {
            name: 'goalFailedCard',
            templateUrl: 'templates/goalFailed.html'
        }
    }

    goalCompletedCard.$inject = [];
    function goalCompletedCard() {
        return {
            name: 'goalCompletedCard',
            templateUrl: 'templates/goalCompleted.html'
        }
    }

})();





