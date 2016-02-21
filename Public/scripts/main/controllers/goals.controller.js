(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('goalsController', goalsController);

    goalsController.$inject = ['$scope', '$rootScope', 'GoalService'];
    function goalsController(scope, rootScope, GoalService) {
        var vm = this;

        //TODO: Make Directive
        $(document).ready(function(){
            $('#date').bootstrapMaterialDatePicker({ weekStart : 0, time: false });
            $.material.init();
        })

        scope.createGoal = function(goal) {
            goal.createdOn = new Date();
            GoalService.post(goal);
        };

        scope.getCurrentGoals = function() {

        };
    }
})();
