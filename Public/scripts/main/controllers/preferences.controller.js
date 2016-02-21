(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('preferencesController', preferencesController);

    preferencesController.$inject = ['$scope', '$rootScope'];
    function preferencesController(scope, rootScope) {
        var vm = this;
    }
})();