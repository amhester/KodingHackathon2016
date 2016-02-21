(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('goalsController', goalsController)
        .controller('currentGoalsController', currentGoalsController);

    goalsController.$inject = ['$scope', '$rootScope', 'GoalService'];
    function goalsController(scope, rootScope, GoalService) {
        var vm = this;

        //TODO: Make Directive
        $(document).ready(function(){
            $('#date').bootstrapMaterialDatePicker({ weekStart : 0, time: false });
            $.material.init();
        })

        vm.createGoal = function(goal) {
            goal.createdOn = new Date();
            GoalService.post(goal);
        };
    }

    currentGoalsController.$inject = ['$scope', '$rootScope', 'GoalService'];
    function currentGoalsController(scope, rootScope, GoalService) {
        var vm = this;

        getAll();

        function getAll() {
            var g = GoalService.getAll();

            g.then(function (res) {
                vm.charities = res.data;
                console.log(res);
            }, function (err) {
                console.error(err);
            });
        }
    }
})();
