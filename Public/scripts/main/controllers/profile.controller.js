(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('profileController', profileController);

    profileController.$inject = ['$scope', '$rootScope', 'AccountService'];
    function profileController(scope, rootScope, AccountService) {
        var vm = this;

        var _user = {};
        vm.user = {};
        vm.card = {};

        vm.applyChanges = applyChanges;
        vm.removeCard = removeCard;

        init();
        function init() {
            getAccount();
            setTimeout(function () {
                vm.domCard = new Skeuocard($('#skeuocard'), {

                });
            }, 500);
        }

        function getAccount() {
            AccountService
                .get()
                .then(function (res) {
                    _user = res.data;
                    vm.user = res.data;
                }, function (err) {
                    toastr.error('Failed to get account :(');
                });
        }

        function applyChanges() {
            if(vm.card.cardNumber && vm.domCard.isValid) {
                saveCard();
            }
            if((_user.email !== vm.user.email && $('#email').hasClass('valid')) || (_user.displayName !== vm.user.displayName && $('#DisplayNameField').hasClass('valid'))) {
                saveProfile();
            }
        }

        function saveProfile() {
            AccountService
                .put(vm.user)
                .then(function (res) {
                    toastr.success('Successfully updated profile!');
                    _user = vm.user;
                }, function (err) {
                    toastr.error('Failed to update profile :(');
                });
        }

        function saveCard() {
            AccountService
                .saveCard(vm.card)
                .then(function (res) {
                    toastr.success('Successfully updated card!');
                    vm.card = {};
                }, function (err) {
                    toastr.error('Failed to save card :(')
                });
        }

        function removeCard() {
            AccountService
                .removeCard(vm.user.id)
                .then(function (res) {
                    toastr.success('Successfully removed card!');
                    vm.card = {};
                }, function (err) {
                    toastr.error('Failed to remove card :(')
                });
        }
    }
})();