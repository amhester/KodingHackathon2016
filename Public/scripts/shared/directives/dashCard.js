(function() {
    'use strict';

    angular
        .module('DP.Directives')
        .directive('dashCard', dashCard);

    dashCard.$inject = ['$location'];
    function dashCard($location) {
        return {
            restrict: 'E',
            templateUrl: 'templates/dashCard.html',
            link: function(scope, elem, attrs, form) {

                //scope.buttonText = attrs.buttontext;

                scope.changeRoute = function(route) {
                    $location.path( route );
                }
            }
        };


    }
})();
