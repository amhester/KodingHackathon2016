"use strict";

const Baseservice = require('./BaseService');
const Account = require('./../Account.js');

class Accounts extends Baseservice {
    constructor (config) {
        let self = this;

        super(config, 'accounts');
    }

    save (account, cb) {
        let self = this;

        if(!account instanceof Account) {
            cb(new Error('parameter not an instance of Account class.'));
        } else {
            if(account.id === 0) {
                self._insert(account, cb);
            } else {
                self._update(account, cb);
            }
        }
    }
}

module.exports = Accounts;