(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope', '$rootScope'];
    function dashboardController(scope, rootScope) {
        var vm = this;

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
