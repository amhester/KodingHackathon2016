(function () {
    "use strict";

    angular
        .module('DP.Services')
        .factory('CharityService', CharityService);

    CharityService.$inject = ['$http', '$rootScope', 'serverIp'];
    function CharityService(http, rootScope, serverIp) {
        return {
            get: getCharity,
            getAll: getCharities,
            post: post,
            put: put,
            del: del
        };

        function getCharity(id) {
            var promise = http.get(serverIp + '/charity/' + id);
            return promise;
        }

        function getCharities() {
            var promise = http.get(serverIp + '/charity');
            return promise;
        }

        function post(charity) {
            var promise = http.post(serverIp + '/charity', charity);
            return promise;
        }

        function put(charity) {
            var promise = http.put(serverIp + '/charity', charity);
            return promise;
        }

        function del(id) {
            var promise = http.del(serverIp + '/charity/' + id);
            return promise;
        }
    }
})();
