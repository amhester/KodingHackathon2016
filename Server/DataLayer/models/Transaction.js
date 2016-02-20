"use strict";

class Transaction {
    constructor (transactionJson) {
        let self = this;

        this._id = transactionJson.id || 0;
        this._todoId = transactionJson.todoId | 0;
        this._accountId = transactionJson.accountId || 0;
        this._pointOfTransaction = transactionJson.pointOfTransaction || new Date().getTime();
        this._eventType = transactionJson.eventType || Transaction.EVENT_TYPES.NOTHING;
        this._details = transactionJson.details || '';
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
    get todoId () { return this._todoId; }
    get accountId () { return this._accountId; }
    get pointOfTransaction () { return this._pointOfTransaction; }
    get eventType () { return this._eventType; }
    get details () { return this._details; }

    set id (val) { this._id = val; }
    set todoId (val) { this._todoId = val; }
    set accountId (val) { this._accountId = val; }
    set pointOfTransaction (val) { this._pointOfTransaction = val; }
    set eventType (val) { this._eventType = val; }
    set details (val) { this._details = val; }
}