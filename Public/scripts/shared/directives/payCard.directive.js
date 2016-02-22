(function () {
    "use strict";

    angular
        .module('DP.Directives')
        .directive('payCard', payCard);

    payCard.$inject = [];
    function payCard() {
        return {
            restrict: 'E',
            replace: true,
            scope: {

            },
            bindToController: {
                card: '='
            },
            controllerAs: 'pc',
            controller: function ($scope) {
                var vm = this;
            },
            link: function (scope, element, attrs, vm) {
                var domCard = new Skeuocard($(element), {});
                domCard.bind('change', function () {
                    vm.card.cardNumber = $(domCard.el.underlyingFields.number).val();
                    vm.card.cardType = $(domCard.el.underlyingFields.type).val();
                    vm.card.expMonth = $(domCard.el.underlyingFields.expMonth).val();
                    vm.card.expYear = $(domCard.el.underlyingFields.expYear).val();
                    vm.card.cvc = $(domCard.el.underlyingFields.cvc).val();
                    vm.card.cardName = $(domCard.el.underlyingFields.name).val();
                });
            },
            templateUrl: '/templates/payCardTemplate.html'
        };
    }
})();