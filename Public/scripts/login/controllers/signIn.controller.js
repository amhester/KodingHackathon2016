(function () {
    "use strict";

    angular
        .module('DP.Login')
        .controller('signInController', signInController);

    signInController.$inject = ['$scope', '$rootScope'];
    function signInController(scope, rootScope) {
        var vm = this;
    }
})();