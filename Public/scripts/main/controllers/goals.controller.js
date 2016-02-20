(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('goalsController', goalsController);

    goalsController.$inject = ['$scope', '$rootScope'];
    function goalsController(scope, rootScope) {
        var vm = this;

        scope.createGoal = function(goalObj) {
            goalObj.createdOn = new Date();
            console.log(goalObj);
            //TODO: send to backend
        };
    }
})();