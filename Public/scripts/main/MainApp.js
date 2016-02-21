(function () {
    "use strict";

    angular
        .module('DP.Main', [
            'ngRoute',
            'DP.Directives',
            'DP.Services',
            'DP.Config',
            'LocalStorageModule'
        ]);
})();
