(function () {
    "use strict";

    angular
        .module('DP.Login')
        .controller('signInController', signInController);

    signInController.$inject = ['$scope', '$rootScope','$http', 'auth', 'store', '$location'];
    function signInController(scope, rootScope, http, auth, store, location) {
        var vm = this;

        scope.login = function () {
            auth.signin({}, function (profile, token) {
              // Success callback
              store.set('profile', profile);
              store.set('token', token);
              $location.path('/');
            }, function () {
              // Error callback
            });
          }
    }
})();
