(function () {
    "use strict";

    angular
        .module('DP.Services')
        .factory('GoalService', GoalService);

    GoalService.$inject = ['$http', '$rootScope'];
    function GoalService(http, rootScope) {
        return {
            get: getGoal,
            getAll: getGoals,
            post: post,
            put: put,
            del: del
        };

        function getGoal(id) {
            var promise = http.get('http://127.0.0.1:8082/goal/' + id);
            return promise;
        }

        function getGoals() {
            var promise = http.get('http://127.0.0.1:8082/goal');
            return promise;
        }

        function post(goal) {
            var promise = http.post('http://127.0.0.1:8082/goal', goal);
            return promise;
        }

        function put(goal) {
            var promise = http.put('http://127.0.0.1:8082/goal', goal);
            return promise;
        }

        function del(id) {
            var promise = http.del('http://127.0.0.1:8082/goal/' + id);
            return promise;
        }
    }
})();