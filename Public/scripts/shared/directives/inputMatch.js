(function() {
    'use strict';

    angular
        .module('DP.Directives')
        .directive('inputMatch', inputMatch);

    inputMatch.$inject = ['$parse'];
    function inputMatch($parse) {
        return {
            name: 'inputMatch',
            restrict: 'A',
            require: 'ngModel',
            link: function link(scope, elem, attrs, ctrl) {
                if (!ctrl || !attrs.inputMatch) {
                    return;
                }

                var watcher = scope.$watch(matchWatch, setValidity);
                scope.$on('$destroy', watcher);

                ///////////////////////////////////

                function matchWatch() {
                    var initialField = $parse(attrs.inputMatch)(scope);
                    return (ctrl.$pristine && angular.isUndefined(ctrl.$modelValue)) || initialField === ctrl.$modelValue;
                }

                function setValidity(currentValue) {
                    ctrl.$setValidity('match', currentValue);
                }
            }
        };
    }
})();





