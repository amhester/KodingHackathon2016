(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('historyController', historyController);

    historyController.$inject = ['$scope', '$rootScope'];
    function historyController(scope, rootScope) {
        var vm = this;

        let curDate = new Date();
        let goals = [
            {
                accountId: "0e7a3313-7951-434d-8baf-a369785d8d67",
                name: "Goal 1 Name",
                description: "Eat breakfast",
                bounty: "7",
                charityId: 0,
                expiration: curDate.setYear(2021)
            },
            {
                accountId: "0e7a3313-7951-434d-8baf-a369785d8d67",
                name: "Goal 2 Name",
                description: "Morning dump",
                bounty: "7",
                charityId: 0,
                expiration: curDate.setYear(2018)
            },
            {
                accountId: "0e7a3313-7951-434d-8baf-a369785d8d67",
                name: "Goal 3 Name",
                description: "Eat lunch",
                bounty: "7",
                charityId: 0,
                expiration: curDate.setYear(2019)
            },
            {
                accountId: "0e7a3313-7951-434d-8baf-a369785d8d67",
                name: "Goal 4 Name",
                description: "Get pizza",
                bounty: "7",
                charityId: 0,
                expiration: curDate.setYear(2020)
            }
        ];
        console.log(goals);
        vm.goals = goals;
    }
})();