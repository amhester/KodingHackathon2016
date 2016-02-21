"use strict";

const Baseservice = require('./BaseService');
const Goal = require('./../models/Goal.js');

class Goals extends Baseservice {
    constructor (config) {
        super(config, 'goals');
    }

    save (goal, cb) {

        let self = this;
        console.log(goal instanceof Goal);
        console.log(goal);

        if(!goal instanceof Goal) {
            console.log('erroring out...');
            cb(new Error('parameter not an instance of Goal class.'));
        } else {
            console.log('not in error');
            if(goal.id === 0) {
                self._insert(goal, cb);
            } else {
                self._update(goal, cb);
            }
        }
    }
}

module.exports = Goals;