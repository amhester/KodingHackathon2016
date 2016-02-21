(function () {
    "use strict";

    angular
        .module('DP.Services')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$http', '$rootScope', 'serverIp'];
    function AuthService(http, rootScope, serverIp) {
        return {
            signIn: signIn,
            register: register
        };

        function signIn(email, password) {
            var promise = http.post(serverIp + '/token', { email: email, password: password });
            return promise;
        }

        function register(account) {
            var promise = http.post(serverIp + '/account', { account: account });
            return promise;
        }
    }
})();
