"use strict";

const Baseservice = require('./BaseService');
const Goal = require('./../models/Goal.js');

class Goals extends Baseservice {
    constructor (config) {
        let self = this;

        super(config, 'goals');
    }

    save (goal, cb) {
        let self = this;

        if(!goal instanceof Goal) {
            cb(new Error('parameter not an instance of Account class.'));
        } else {
            if(goal.id === 0) {
                self._insert(goal, cb);
            } else {
                self._update(goal, cb);
            }
        }
    }
}

module.exports = Goals;