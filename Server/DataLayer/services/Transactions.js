"use strict";

const Baseservice = require('./BaseService');
const Transaction = require('./../models/Transaction.js');

class Transactions extends Baseservice {
    constructor (config) {
        let self = this;

        self._collectionName = 'transactions';
        super(config);
    }

    _insert(transaction, cb) {
        let self = this;

        self._db.transactions.insertOne(transaction.toJson(), function (err, result) {
            cb(err, result);
        });
    }

    _update(transaction, cb) {
        let self = this;

        self._db.transactions.updateOne({id: transaction.id}, transaction.toJson(), function (err, result) {
            cb(err, result);
        });
    }

    save (transaction, cb) {
        let self = this;

        if(!transaction instanceof Transaction) {
            cb(new Error('parameter not an instance of Account class.'));
        } else {
            if(transaction.id === 0) {
                self._insert(transaction, cb);
            } else {
                self._update(transaction, cb);
            }
        }
    }
}

module.exports = Transactions;