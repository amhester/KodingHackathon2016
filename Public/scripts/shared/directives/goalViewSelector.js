(function() {
    'use strict';

    angular
        .module('DP.Directives')
        .directive('goalViewSelector', goalViewSelector);

    goalViewSelector.$inject = [];
    function goalViewSelector() {
        return {
            name: 'goalViewSelector',
            templateUrl: 'templates/goalViewSelector.html'
        };
    }
})();





