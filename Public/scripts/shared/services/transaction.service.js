(function () {
    "use strict";

    angular
        .module('DP.Services')
        .factory('TransactionService', TransactionService);

    TransactionService.$inject = ['$http', '$rootScope'];
    function TransactionService(http, rootScope) {
        return {
            get: getTransaction,
            getAll: getTransactions,
            post: post,
            put: put,
            del: del
        };

        function getTransaction(id) {
            var promise = http.get('http://127.0.0.1:8082/transaction/' + id);
            return promise;
        }

        function getTransactions() {
            var promise = http.get('http://127.0.0.1:8082/transaction');
            return promise;
        }

        function post(transaction) {
            var promise = http.post('http://127.0.0.1:8082/transaction', transaction);
            return promise;
        }

        function put(transaction) {
            var promise = http.put('http://127.0.0.1:8082/transaction', transaction);
            return promise;
        }

        function del(id) {
            var promise = http.del('http://127.0.0.1:8082/transaction/' + id);
            return promise;
        }
    }
})();