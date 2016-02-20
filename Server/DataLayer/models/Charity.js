"use strict";

class Charity {
    constructor (charityJson) {
        let self = this;

        this._id = charityJson.id || 0;
        this._name = charityJson.name || '';
        this._description = charityJson.description || '';
        this._link = charityJson.link || '';
        this._imageUrl = charityJson.imageUrl || '';
    }

    get id () { return this._id; }
    get name () { return this._name; }
    get description () { return this._description; }
    get link () { return this._link; }
    get imageUrl () { return this._imageUrl; }

    set id (val) { this._id = val; }
    set name (val) { this._name = val; }
    set description (val) { this._description = val; }
    set link (val) { this._link = val; }
    set imageUrl (val) { this._imageUrl = val; }
}