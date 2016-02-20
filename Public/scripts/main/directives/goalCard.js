(function() {
    'use strict';

    angular
        .module('DP.Main')
        .directive('goalCard', goalCard);

    goalCard.$inject = [];
    function goalCard() {
        return {
            name: 'goalCard',
            templateUrl: 'templates/goalCard.html',
        };
    }
})();





