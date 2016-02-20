"use strict";

const Baseservice = require('./BaseService');
const Goal = require('./../models/Goal.js');

class Goals extends Baseservice {
    constructor (config) {
        let self = this;

        self._collectionName = 'goals';
        super(config);
    }

    _insert(goal, cb) {
        let self = this;

        self._db.goals.insertOne(goal.toJson(), function (err, result) {
            cb(err, result);
        });
    }

    _update(goal, cb) {
        let self = this;

        self._db.goals.updateOne({id: goal.id}, goal.toJson(), function (err, result) {
            cb(err, result);
        });
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