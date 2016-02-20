"use strict";

class Account {
    constructor (accountJson) {
        let self = this;

        this._accountId = accountJson.accountId || 0;
        this._email = accountJson.email || '';
        this._passwordHash = null;
        this._displayName = accountJson.displayName || '';
        this._defaultCharity = accountJson.defaultCharity || 0;
        this._paymentToken = accountJson.paymentToken || '';
        ///TODO: Should probably use UTC Dates
        this._createdOn = accountJson.createdOn || new Date().getTime();
        this._updatedOn = accountJson.updatedOn || new Date().getTime();
    }

    get accountId () { return this._accountId; }
    get email () { return this._email; }
    get passwordHash () { return this._passwordHash; }
    get displayName () { return this._displayName; }
    get defaultCharity () { return this._defaultCharity; }
    get paymentToken () { return this._paymentToken; }
    get createdOn () { return this._createdOn; }
    get updatedOn () { return this._updatedOn; }

    set accountId (val) { this._accountId = val; }
    set email (val) { this._email = val; }
    set passwordHash (val) { this._passwordHash = val; }
    set displayName (val) { this._passwordHash = val; }
    set defaultCharity (val) { this._defaultCharity = val; }
    set paymentToken (val) { this._paymentToken = val; }
    set createdOn (val) { this._createdOn = val; }
    set updatedOn (val) { this._updatedOn = val; }
}