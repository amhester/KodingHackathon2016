(function () {
    "use strict";

    angular
        .module('DP.Services')
        .factory('AccountService', AccountService);

    AccountService.$inject = ['$http', '$rootScope', 'serverIp'];
    function AccountService(http, rootScope, serverIp) {
        return {
            get: getAccount,
            put: put,
            del: del
        };

        function getAccount(id) {
            var promise = http.get(serverIp + '/account/' + id);
            return promise;
        }

        function put(account) {
            var promise = http.put(serverIp + '/account', account);
            return promise;
        }

        function del(id) {
            var promise = http.del(serverIp + '/account/' + id);
            return promise;
        }
    }
})();
