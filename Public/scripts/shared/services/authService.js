(function () {
    "use strict";

    angular
        .module('DP.Services')
        .service('authService', authService);

    authService.$inject = ['$scope', '$rootScope'];
    function authService(scope, rootScope) {
        var vm = this;
    }
})();
