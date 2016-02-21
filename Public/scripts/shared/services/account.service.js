(function () {
    "use strict";

    angular
        .module('DP.Services')
        .factory('AccountService', AccountService);

    AccountService.$inject = ['$http', '$rootScope'];
    function AccountService(http, rootScope) {
        return {
            get: getAccount,
            put: put,
            del: del
        };

        function getAccount(id) {
            var promise = http.get('http://127.0.0.1:8082/account/' + id);
            return promise;
        }

        function put(account) {
            var promise = http.put('http://127.0.0.1:8082/account', account);
            return promise;
        }

        function del(id) {
            var promise = http.del('http://127.0.0.1:8082/account/' + id);
            return promise;
        }
    }
})();