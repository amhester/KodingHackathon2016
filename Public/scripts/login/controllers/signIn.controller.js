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
                if(res.status === 200) {
                    localStorageService.set('auth-token', res.data);
                    location.href = '/KodingHackathon2016/Public/views/index.html';
                }
            }, function (err) {
                console.error(err);
            });
        }

    }
})();
