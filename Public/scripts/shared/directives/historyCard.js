(function() {
    'use strict';

    angular
        .module('DP.Directives')
        .directive('historyCard', historyCard)

    historyCard.$inject = [];
    function historyCard() {
        return {
            name: 'historyCard',
            templateUrl: 'templates/historyCard.html'
        };
    }

})();

