(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('charitiesController', charitiesController);

    charitiesController.$inject = ['$scope', '$rootScope', 'CharityService'];
    function charitiesController(scope, rootScope, charityService) {
        var vm = this;

        getAll();

        function getAll() {
            var p = charityService.getAll();

            p.then(function (res) {
                    vm.charities = res.data;
                    console.log(res);
                }, function (err) {
                    console.error(err);
                });
        }
    }
})();