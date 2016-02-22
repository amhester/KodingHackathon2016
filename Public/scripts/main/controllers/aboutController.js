(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('aboutController', aboutController);

    aboutController.$inject = ['$scope', '$rootScope'];
    function aboutController(scope, rootScope) {
        var vm = this;
    }

})();
