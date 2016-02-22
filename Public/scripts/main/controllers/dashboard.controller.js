(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope', '$rootScope', 'GoalService', 'CharityService'];
    function dashboardController(scope, rootScope, GoalService, CharityService) {
        var vm = this;

        getAllGoals();
        getAllCharities();

        function getAllGoals() {
            var g = GoalService.getAll();

            g.then(function (res) {
                vm.goals =
                    res.data
                        .filter(function(item) {
                            return item.status == 1;
                        });
                console.log(res);
            }, function (err) {
                console.error(err);
            });
        }

        function getAllCharities() {
            var p = CharityService.getAll();

            p.then(function (res) {
                vm.charities = res.data;
                console.log(res);
            }, function (err) {
                console.error(err);
            });
        }

        var dashPanels = [
            {
                id: "1",
                route: "/profile",
                imageUrl: "../content/images/profile.png",
                buttonText: "Profile"
            },
            {
                id: "2",
                route: "/goals/newGoal",
                imageUrl: "../content/images/checky.png",
                buttonText: "Create Goal"
            },
            {
                id: "3",
                route: "/motivation",
                imageUrl: "../content/images/shia.jpg",
                buttonText: "Motivate Me"
            }
        ];
        console.log(dashPanels);
        vm.dashPanels = dashPanels;
    }
})();
