(function() {
    'use strict';

    angular
        .module('DP.Main')
        .directive('goalViewSelector', goalViewSelector);

    goalViewSelector.$inject = [];
    function goalViewSelector() {
        return {
            name: 'goalViewSelector',
            templateUrl: 'templates/goalViewSelector.html',
        };
    }
})();





