(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('menuController', menuController);

    menuController.$inject = ['$scope', '$rootScope'];
    function menuController(scope, rootScope) {
        var vm = this;
    }
})();