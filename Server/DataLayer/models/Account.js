"use strict";

class Account {
    constructor (accountJson) {
        let self = this;

        this._id = accountJson.id || 0;
        this._email = accountJson.email || '';
        this._passwordHash = accountJson.passwordHash || '';
        this._displayName = accountJson.displayName || '';
        this._defaultCharity = accountJson.defaultCharity || 0;
        this._stripeCustomerId = accountJson.stripeCustomerId || 0;
        ///TODO: Should probably use UTC Dates
        this._createdOn = accountJson.createdOn || new Date().getTime();
        this._updatedOn = accountJson.updatedOn || new Date().getTime();
    }

    toJson () {
        let self = this;
        return {
            id: self._id,
            email: self._email,
            passwordHash: self._passwordHash,
            displayName: self._displayName,
            defaultCharity: self._defaultCharity,
            stripeCustomerId: self._stripeCustomerId,
            createdOn: self._createdOn,
            updatedOn: self._updatedOn
        };
    }

    get id () { return this._id; }
    get email () { return this._email; }
    get passwordHash () { return this._passwordHash; }
    get displayName () { return this._displayName; }
    get defaultCharity () { return this._defaultCharity; }
    get stripeCustomerId () { return this._stripeCustomerId; }
    get createdOn () { return this._createdOn; }
    get updatedOn () { return this._updatedOn; }

    set id (val) { this._id = val; }
    set email (val) { this._email = val; }
    set passwordHash (val) { this._passwordHash = val; }
    set displayName (val) { this._passwordHash = val; }
    set defaultCharity (val) { this._defaultCharity = val; }
    set stripeCustomerId (val) { this._stripeCustomerId = val; }
    set createdOn (val) { this._createdOn = val; }
    set updatedOn (val) { this._updatedOn = val; }
}

module.exports = Account;