(function() {
    'use strict';

    angular
        .module('DP.Directives')
        .directive('dashCard', dashCard);

    dashCard.$inject = [];
    function dashCard() {
        return {
            restrict: 'E',
            replace: true,
            $scope: {
                'actionRoute': '=',
                'image': '=',
                'buttonText': '='
            },
            templateUrl: 'templates/dashCard.html',
            link: function(scope, elem, attrs, form) {

                scope.buttonText = attrs.buttontext;

                scope.changeRoute = function() {
                    console.log(attrs.actionroute);
                }
            }
        };


    }
})();
