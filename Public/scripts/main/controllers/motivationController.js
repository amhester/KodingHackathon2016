(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('motivationController', motivationController);

    motivationController.$inject = ['$scope', '$rootScope'];
    function motivationController(scope, rootScope) {
        var vm = this;
    }
})();
