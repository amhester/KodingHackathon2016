"use strict";

const mongo = require('mongodb').MongoClient;
const Baseservice = require('./BaseService');
const Account = require('./../Account.js');

class Accounts extends Baseservice {
    constructor (config) {
        let self = this;

        self._collectionName = 'accounts';
        super(config);
    }

    _insert(account, cb) {
        let self = this;

        self._db.accounts.insertOne(account.toJson(), function (err, result) {
            cb(err, result);
        });
    }

    _update(account, cb) {
        let self = this;

        self._db.accounts.updateOne({id: account.id}, account.toJson(), function (err, result) {
            cb(err, result);
        });
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