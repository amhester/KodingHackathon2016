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
                imageUrl: "",
                buttonText: "Goals"
            }
        ];
        console.log(dashPanels);
        vm.dashPanels = dashPanels;
    }
})();
