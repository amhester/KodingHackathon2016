(function () {
    "use strict";

    angular
        .module('DP.Services')
        .factory('tokenInjector', tokenInjector);

    tokenInjector.$inject = ['localStorageService'];
    function tokenInjector(localStorageService) {
        return {
            request: function (config) {
                var token = localStorageService.get('auth-token');

                if(token) {
                    //config.headers['Access-Control-Allow-Origin'] = '*';
                    //config.headers['X-WinWin-Token'] = token;
                }

                return config;
            }
        };
    }
})();