(function () {
    "use strict";

    angular
        .module('DP.Services')
        .factory('TransactionService', TransactionService);

    TransactionService.$inject = ['$http', '$rootScope', 'serverIp'];
    function TransactionService(http, rootScope, serverIp) {
        return {
            get: getTransaction,
            getAll: getTransactions,
            post: post,
            put: put,
            del: del
        };

        function getTransaction(id) {
            var promise = http.get(serverIp + '/transaction/' + id);
            return promise;
        }

        function getTransactions() {
            var promise = http.get(serverIp + '/transaction');
            return promise;
        }

        function post(transaction) {
            var promise = http.post(serverIp + '/transaction', transaction);
            return promise;
        }

        function put(transaction) {
            var promise = http.put(serverIp + '/transaction', transaction);
            return promise;
        }

        function del(id) {
            var promise = http.del(serverIp + '/transaction/' + id);
            return promise;
        }
    }
})();
