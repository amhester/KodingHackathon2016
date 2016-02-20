(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('profileController', profileController);

    profileController.$inject = ['$scope', '$rootScope'];
    function profileController(scope, rootScope) {
        var vm = this;
    }
})();