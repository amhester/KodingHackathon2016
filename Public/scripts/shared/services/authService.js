(function () {
    "use strict";

    angular
        .module('DP.Services')
        .service('authService', authService);

    authService.$inject = ['$scope', '$rootScope', '$http'];
    function authService(scope, rootScope, $http) {
        var vm = this;

        var service = {};
        service.logIn = logIn;

        function logIn(email, password) {
            var args = {
                method: 'POST',
                url: 'http://127.0.0.1:8082/token',
                data: {
                    email: email,
                    password: password
                }};


            return $http(args)


        }
    }
})();
