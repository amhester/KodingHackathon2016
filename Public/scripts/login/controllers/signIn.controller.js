(function () {
    "use strict";

    angular
        .module('DP.Login')
        .controller('signInController', signInController);

    signInController.$inject = ['$scope', '$rootScope','$http', 'AuthService', 'localStorageService'];
    function signInController(scope, rootScope, http, authService, localStorageService) {
        var vm = this;

        scope.logIn = function(userObj) {
            var p = authService.signIn(userObj.email, userObj.password);
            p.then(function (res) {
                console.log(res);
                localStorageService.set('auth-token', res.data);
            }, function (err) {
                console.error(err);
            });
        }

    }
})();
