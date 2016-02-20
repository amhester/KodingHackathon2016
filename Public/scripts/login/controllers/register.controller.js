(function () {
    "use strict";

    angular
        .module('DP.Login')
        .controller('registerController', registerController);

    registerController.$inject = ['$scope', '$rootScope'];
    function registerController(scope, rootScope) {
        var vm = this;

        scope.register = function(userObj) {
            console.log(userObj);
        }


    }
})();