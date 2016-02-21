"use strict";

const Account = require('./../models/Account');
const Accounts = require('./Accounts');
const passHash = require('password-hash');

class AuthService {
    constructor (config) {
        let self = this;

        self._config = config;

        self._accounts = new Accounts(config.mongo);
    }

    register (account, cb) {
        let self = this;
        
        if(!account instanceof Account) {
            cb(new Error('parameter is not instance of Account class.'));
        }

        account.passwordHash = passHash.generate(account.passwordHash);

        self._accounts.save(account, function (err, result) {
            cb(err, result);
        });
    }

    signIn (email, password, cb) {
        let self = this;

        self._accounts.query().find({email: email}).limit(1).next(function (err, doc) {
            if(err) {
                cb(err);
            } else {
                if(doc !== null && passHash.verify(password, doc.passwordHash)) {
                    cb(null, new Account(doc));
                } else {
                    cb(null, false);
                }
            }
        });
    }
}

module.exports = AuthService;