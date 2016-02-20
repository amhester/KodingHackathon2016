(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('historyController', historyController);

    historyController.$inject = ['$scope', '$rootScope'];
    function historyController(scope, rootScope) {
        var vm = this;
    }
})();