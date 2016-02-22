(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('goalsController', goalsController)
        .controller('goalController', goalController)
        .controller('currentGoalsController', currentGoalsController);

    goalsController.$inject = ['$scope', '$rootScope', 'GoalService'];
    function goalsController(scope, rootScope, GoalService) {
        var vm = this;

        vm.createGoal = function() {
            vm.goal.expiration = moment(vm.goal.expiration, "MMM Do YYYY, h:mm a" ).format("x");
            vm.goal.createdOn = new Date().getTime();
            GoalService.post(vm.goal);
        };

        //TODO: Make Directive
        $(document).ready(function(){
            $('#goalExpiration').bootstrapMaterialDatePicker({ weekStart : 0, time: true, format: "MMM Do YYYY, h:mm a" });
        })
    }

    goalController.$inject = ['$scope', '$rootScope', 'GoalService', '$routeParams', '$location'];
    function goalController(scope, rootScope, GoalService, routeParams, location) {
        var vm = this;
        get(routeParams.id);

        function get(id) {
            var g = GoalService.get(id);

            g.then(function (res) {
                vm.alex = res.data;
                console.log(res);
            }, function (err) {
                console.error(err);
            });
        }

        vm.markComplete = function(id) {
            var g = GoalService.get(id);

            g.then(function (res) {
                var obj = res.data;
                obj.status = "COMPLETED"; // 2
                //console.log(obj);

                GoalService.put(obj).then(function (res) {
                    console.log(res);
                    location.path('/goals');
                }, function (err) {
                    //console.log("trying to save updated goal.");
                    console.error(err);
                });
            }, function (err) {
                console.error(err);
            });
        }

        vm.removeGoal = function(id) {
            //$location.path('/goal/' + id);
            //console.log(id);
            GoalService.del(id).then(function (res) {
                    console.log(res);
                    location.path('/goals');
                }, function (err) {
                    console.error(err);
                });
        }
    }

    currentGoalsController.$inject = ['$scope', '$rootScope', 'GoalService'];
    function currentGoalsController(scope, rootScope, GoalService) {
        var vm = this;
        getAll();

        function getAll() {
           var g = GoalService.getAll();

            g.then(function (res) {
                vm.goals = res.data;
                console.log(res);
            }, function (err) {
                console.error(err);
            });
        }

        vm.markComplete = function(id) {
            var g = GoalService.get(id);

            g.then(function (res) {
                var obj = res.data;
                obj.status = "COMPLETED"; // 2
                //console.log(obj);

                GoalService.put(obj).then(function (res) {
                    console.log(res);
                    location.path('/goals');
                }, function (err) {
                    //console.log("trying to save updated goal.");
                    console.error(err);
                });
            }, function (err) {
                console.error(err);
            });
        }

        vm.removeGoal = function(id) {
            //$location.path('/goal/' + id);
            //console.log(id);
            GoalService.del(id).then(function (res) {
                console.log(res);
                location.path('/goals');
            }, function (err) {
                console.error(err);
            });
        }

        /*
        let curDate = new Date();
        let goals = [
            {
                accountId: "0e7a3313-7951-434d-8baf-a369785d8d67",
                name: "Breakfast",
                description: "Eat biscuits and gravy.",
                bounty: "7",
                charityId: 0,
                expiration: curDate.setYear(2017)
            },
            {
                accountId: "0e7a3313-7951-434d-8baf-a369785d8d67",
                name: "Dumpage",
                description: "Morning dump",
                bounty: "7",
                charityId: 0,
                expiration: curDate.setYear(2018)
            },
            {
                accountId: "0e7a3313-7951-434d-8baf-a369785d8d67",
                name: "Lunch",
                description: "Eat lunch. Maybe sandwiches.",
                status: "EXPIRED",
                bounty: "7",
                charityId: 0,
                expiration: curDate.setYear(2019)
            },
            {
                accountId: "0e7a3313-7951-434d-8baf-a369785d8d67",
                name: "Dinner",
                description: "Get pizza. Good pizza though, not that Little Caesar's stuff.",
                bounty: "7",
                charityId: 0,
                expiration: curDate.setYear(2020)
            }
        ];
        console.log(goals);
        vm.goals = goals;
        */
    }
})();
