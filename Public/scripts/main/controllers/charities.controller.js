(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('charitiesController', charitiesController);

    charitiesController.$inject = ['$scope', '$rootScope', 'CharityService'];
    function charitiesController(scope, rootScope, charityService) {
        var vm = this;

        //vm.charities = charityService.getAll();

        vm.charities = [
            {
                id: 0,
                name: "Red Cross",
                description: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.",
                link: "http://www.redcross.org/",
                imageUrl: "../content/images/redcross.png"
            },

            {
                id: 1,
                name: "Humane Society",
                description: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.",
                link: "http://www.humanesociety.org/",
                imageUrl: "../content/images/humaneSociety.png"
            },

            {
                id: 2,
                name: "Anderson University",
                description: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.",
                link: "http://www.anderson.edu/",
                imageUrl: "../content/images/anderson.png"
            }
        ];
    }
})();