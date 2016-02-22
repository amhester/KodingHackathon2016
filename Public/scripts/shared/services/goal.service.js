(function () {
    "use strict";

    angular
        .module('DP.Services')
        .factory('GoalService', GoalService);

    GoalService.$inject = ['$http', '$rootScope', 'serverIp'];
    function GoalService(http, rootScope, serverIp) {
        return {
            get: getGoal,
            getAll: getGoals,
            post: post,
            put: put,
            del: del
        };

        function getGoal(id) {
            var promise = http.get(serverIp + '/goal/' + id);
            return promise;
        }

        function getGoals() {
            var promise = http.get(serverIp + '/goal');
            return promise;
        }

        function post(goal) {
            var promise = http.post(serverIp + '/goal', goal);
            return promise;
        }

        function put(goal) {
            var promise = http.put(serverIp + '/goal', goal);
            return promise;
        }

        function del(id) {
            var promise = http.delete(serverIp + '/goal/' + id);
            return promise;
        }
    }
})();
