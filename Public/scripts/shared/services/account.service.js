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
            del: del,
            saveCard: saveCard,
            removeCard: removeCard
        };

        function getAccount() {
            var promise = http.get(serverIp + '/account');
            return promise;
        }

        function put(account) {
            var promise = http.put(serverIp + '/account', { account: account });
            return promise;
        }

        function del(id) {
            var promise = http.del(serverIp + '/account/' + id);
            return promise;
        }

        function saveCard(card) {
            var promise = http.post(serverIp + '/stripe', { card: card });
            return promise;
        }

        function removeCard(accountId) {
            var promise = http.del(serverIp + '/stripe/' + accountId);
            return promise;
        }
    }
})();
