"use strict";

const Baseservice = require('./BaseService');
const Charity = require('./../models/Charity.js');

class Charities extends Baseservice {
    constructor (config) {
        let self = this;

        self._collectionName = 'charities';
        super(config);
    }

    _insert(charity, cb) {
        let self = this;

        self._db.charities.insertOne(charity.toJson(), function (err, result) {
            cb(err, result);
        });
    }

    _update(charity, cb) {
        let self = this;

        self._db.charities.updateOne({id: charity.id}, charity.toJson(), function (err, result) {
            cb(err, result);
        });
    }

    save (charity, cb) {
        let self = this;

        if(!charity instanceof Charity) {
            cb(new Error('parameter not an instance of Account class.'));
        } else {
            if(charity.id === 0) {
                self._insert(charity, cb);
            } else {
                self._update(charity, cb);
            }
        }
    }
}

module.exports = Charities;