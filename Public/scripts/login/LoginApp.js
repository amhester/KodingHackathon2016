(function () {
    "use strict";

    angular
        .module('DP.Login', [
            'ngRoute',
            'auth0',
            'angular-storage',
            'angular-jwt'
        ])
        .config(function (authProvider) {
          authProvider.init({
            domain: 'koding2015.auth0.com',
            clientID: 'XyTbnR40o7JGSWPzXwyFSiRlAst3MCT0'
          });
        })
        .run(function(auth) {
          // This hooks al auth events to check everything as soon as the app starts
          auth.hookEvents();
        });
})();
