(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('todosController', todosController);

    todosController.$inject = ['$scope', '$rootScope'];
    function todosController(scope, rootScope) {
        var vm = this;
    }
})();