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
                imageUrl: "",
                buttonText: "Profile"
            },
            {
                id: "2",
                route: "/goals",
                imageUrl: "../content/images/checky.png",
                buttonText: "Goals"
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
