"use strict";

class TODO {
    constructor (todoJson) {
        let self = this;

        this._id = todoJson.id || 0;
        this._accountId = todoJson.accountId || 0;
        this._name = todoJson.name || '';
        this._description = todoJson.description || '';
        this._bounty = todoJson.bounty || 0;
        this._charityId = todoJson.charityId || 0;
        this._expiration = todoJson.expiration || new Date().getTime() + (30 * (24 * (60 * (60 * 1000))));
        this._status = todoJson.status || TODO.TODO_STATUSES.OPEN;
        this._createdOn = todoJson.createdOn || new Date().getTime();
        this._updatedOn = todoJson.updatedOn || new Date().getTime();
    }

    static get TODO_STATUSES () {
        return {
            OPEN: 1,
            COMPLETED: 2,
            EXPIRED: 3,
            REJECTED: 4,
            BOUNTY_PAID: 5
        };
    }

    get id () { return this._id; }
    get accountId () { return this._accountId; }
    get name () { return this._name; }
    get description () { return this._description; }
    get bounty () { return this._bounty; }
    get charityId () { return this._charityId; }
    get expiration () { return this._expiration; }
    get status () { return this._status; }
    get createdOn () { return this._createdOn; }
    get updatedOn () { return this._updatedOn; }

    set id (val) { this._id = val; }
    set accountId (val) { this._accountId = val; }
    set name (val) { this._name = val; }
    set description (val) { this._description = val; }
    set bounty (val) { this._bounty = val; }
    set charityId (val) {this._charityId = val;  }
    set expiration (val) { this._expiration = val; }
    set status (val) { this._status = val; }
    set createdOn (val) { this._status = val; }
    set updatedOn (val) { this._updatedOn = val; }
}