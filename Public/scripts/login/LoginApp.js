(function () {
    "use strict";

    angular
        .module('DP.Login', [
            'ngRoute',
            'DP.Directives',
            'DP.Services',
            'DP.Config',
            'LocalStorageModule'
        ]);
})();
