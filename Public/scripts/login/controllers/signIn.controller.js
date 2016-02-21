(function () {
    "use strict";

    angular
        .module('DP.Login')
        .controller('signInController', signInController);

    signInController.$inject = ['$scope', '$rootScope','$http', 'authService'];
    function signInController(scope, rootScope, http, authService) {
        var vm = this;

        scope.logIn = function(userObj) {
            authService.logIn(userObj.email, userObj.password);
        }

    }
})();
