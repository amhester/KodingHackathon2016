(function () {
    "use strict";

    angular
        .module('DP.Services')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$http', '$rootScope'];
    function AuthService(http, rootScope) {
        return {
            signIn: signIn,
            register: register
        };

        function signIn(email, password) {
            var promise = http.post('http://127.0.0.1:8082/token', { email: email, password: password });
            return promise;
        }

        function register(account) {
            var promise = http.post('http://127.0.0.1:8082/account', { account: account });
            return promise;
        }
    }
})();