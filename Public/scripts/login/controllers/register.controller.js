(function () {
    "use strict";

    angular
        .module('DP.Login')
        .controller('registerController', registerController);

    registerController.$inject = ['$scope', '$rootScope', 'AuthService'];
    function registerController(scope, rootScope, authService) {
        var vm = this;

        vm.user = {};
        vm.register = register;

        function register() {
            authService
                .register(vm.user)
                .then(function (res) {
                    console.log(res);
                }, function (err) {
                    console.error(err);
                });
        }
    }
})();