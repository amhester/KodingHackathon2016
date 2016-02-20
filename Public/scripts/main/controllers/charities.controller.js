(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('charitiesController', charitiesController);

    charitiesController.$inject = ['$scope', '$rootScope'];
    function charitiesController(scope, rootScope) {
        var vm = this;
    }
})();