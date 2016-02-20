(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('goalsController', goalsController);

    goalsController.$inject = ['$scope', '$rootScope'];
    function goalsController(scope, rootScope) {
        var vm = this;
    }
})();