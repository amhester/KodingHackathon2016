(function () {
    "use strict";

    angular
        .module('DP.Main')
        .controller('profileController', profileController);

    profileController.$inject = ['$scope', '$rootScope', 'AccountService', 'CharityService'];
    function profileController(scope, rootScope, AccountService, CharityService) {
        var vm = this;

        var _user = {};
        vm.user = {};
        vm.card = {};
        vm.charities = [];

        vm.applyChanges = applyChanges;
        vm.removeCard = removeCard;

        init();
        function init() {
            getAccount();
            getCharities();
        }

        function getAccount() {
            AccountService
                .get()
                .then(function (res) {
                    _user.email = res.data.email;
                    _user.displayName = res.data.displayName;
                    _user.defaultCharity = res.data.defaultCharity;
                    vm.user = res.data;
                }, function (err) {
                    toastr.error('Failed to get account :(');
                });
        }

        function getCharities() {
            CharityService
                .getAll()
                .then(function (res) {
                    vm.charities = res.data.map(function (c) { return { key: c.id, val: c.name } });
                }, function (err) {
                    toastr.error('Failed to retrieve charities :(');
                });
        }

        function applyChanges() {
            if(vm.card.cardNumber && vm.domCard.isValid) {
                saveCard();
            }
            if((_user.email !== vm.user.email && $('#email').hasClass('valid'))
                || (_user.displayName !== vm.user.displayName && $('#DisplayNameField').hasClass('valid'))
                || (_user.defaultCharity !== vm.user.defaultCharity)) {
                saveProfile();
            }
        }

        function saveProfile() {
            AccountService
                .put(vm.user)
                .then(function (res) {
                    toastr.success('Successfully updated profile!');
                    _user.email = vm.user.email;
                    _user.displayName = vm.user.displayName;
                    _user.defaultCharity = vm.user.defaultCharity;
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