(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope', '$rootScope'];
    function dashboardController(scope, rootScope) {
        var vm = this;
    }
})();