(function () {
    "use strict";

    angular
        .module('DP.Login')
        .controller('signInController', signInController);

    signInController.$inject = ['$scope', '$rootScope','$http'];
    function signInController(scope, rootScope, http) {
        var vm = this;

        scope.logIn = function(userObj) {
            console.log(userObj);
        }

    }
})();
