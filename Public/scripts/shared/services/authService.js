(function () {
    "use strict";

    angular
        .module('DP.Services')
        .service('authService', authService);

    authService.$inject = ['$scope', '$rootScope', '$http', 'serverIp'];
    function authService(scope, rootScope, $http, serverIp) {
        var vm = this;

        var service = {};
        service.logIn = logIn;

        function logIn(email, password) {
            var args = {
                method: 'POST',
                url: serverIp + '/token',
                data: {
                    email: email,
                    password: password
                }};
            };

            return $http(args);
        }
    }
})();
