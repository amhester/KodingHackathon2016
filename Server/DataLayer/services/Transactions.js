"use strict";

const Baseservice = require('./BaseService');
const Transaction = require('./../models/Transaction.js');

class Transactions extends Baseservice {
    constructor (config) {
        super(config, 'transactions');
    }

    save (transaction, cb) {
        let self = this;

        if(!transaction instanceof Transaction) {
            cb(new Error('parameter not an instance of Transaction class.'));
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