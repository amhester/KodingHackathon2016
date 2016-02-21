(function () {
    "use strict";

    angular
        .module('DP.Login')
        .controller('signInController', signInController);

    signInController.$inject = ['$scope', '$rootScope','$http', 'AuthService'];
    function signInController(scope, rootScope, http, authService) {
        var vm = this;

        scope.logIn = function(userObj) {
            var p = authService.signIn(userObj.email, userObj.password);
            p.then(function (res) {
                console.log(res);
            }, function (err) {
                console.error(err);
            });
        }

    }
})();
