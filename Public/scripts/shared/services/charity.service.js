(function () {
    "use strict";

    angular
        .module('DP.Services')
        .factory('CharityService', CharityService);

    CharityService.$inject = ['$http', '$rootScope'];
    function CharityService(http, rootScope) {
        return {
            get: getCharity,
            getAll: getCharities,
            post: post,
            put: put,
            del: del
        };

        function getCharity(id) {
            var promise = http.get('http://127.0.0.1:8082/charity/' + id);
            return promise;
        }

        function getCharities() {
            var promise = http.get('http://127.0.0.1:8082/charity');
            return promise;
        }

        function post(charity) {
            var promise = http.post('http://127.0.0.1:8082/charity', charity);
            return promise;
        }

        function put(charity) {
            var promise = http.put('http://127.0.0.1:8082/charity', charity);
            return promise;
        }

        function del(id) {
            var promise = http.del('http://127.0.0.1:8082/charity/' + id);
            return promise;
        }
    }
})();