"use strict";

const Baseservice = require('./BaseService');
const Charity = require('./../models/Charity.js');

class Charities extends Baseservice {
    constructor (config) {
        super(config, 'charities');
    }

    save (charity, cb) {
        let self = this;

        if(!charity instanceof Charity) {
            cb(new Error('parameter not an instance of Charity class.'));
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