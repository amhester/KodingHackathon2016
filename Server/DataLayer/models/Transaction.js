"use strict";

class Transaction {
    constructor (transactionJson) {
        let self = this;

        this._id = transactionJson.id || 0;
        this._goalId = transactionJson.goalId | 0;
        this._accountId = transactionJson.accountId || 0;
        this._pointOfTransaction = transactionJson.pointOfTransaction || new Date().getTime();
        this._eventType = transactionJson.eventType || Transaction.EVENT_TYPES.NOTHING;
        this._details = transactionJson.details || '';
    }

    toJson () {
        let self = this;

        return {
            id: self._id,
            goalId: self._goalId,
            accountId: self._accountId,
            pointOfTransaction: self._pointOfTransaction,
            eventType: self._eventType,
            details: self._details
        };
    }

    static get EVENT_TYPES () {
        return {
            NOTHING: 0,
            COMPLETED: 1,
            EXPIRED: 2,
            REJECTED_PAYMENT: 3,
            BOUNTY_PAID: 4
        };
    }

    get id () { return this._id; }
    get goalId () { return this._goalId; }
    get accountId () { return this._accountId; }
    get pointOfTransaction () { return this._pointOfTransaction; }
    get eventType () { return this._eventType; }
    get details () { return this._details; }

    set id (val) { this._id = val; }
    set goalId (val) { this._goalId = val; }
    set accountId (val) { this._accountId = val; }
    set pointOfTransaction (val) { this._pointOfTransaction = val; }
    set eventType (val) { this._eventType = val; }
    set details (val) { this._details = val; }
}

module.exports = Transaction;