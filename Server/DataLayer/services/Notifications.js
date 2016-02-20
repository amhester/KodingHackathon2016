"use strict";

const Baseservice = require('./BaseService');
const Notification = require('./../models/Notification.js');

class Notifications extends Baseservice {
    constructor (config) {
        let self = this;

        super(config, 'notifications');
    }

    save (notification, cb) {
        let self = this;

        if(!notification instanceof Notification) {
            cb(new Error('parameter not an instance of Account class.'));
        } else {
            if(notification.id === 0) {
                self._insert(notification, cb);
            } else {
                self._update(notification, cb);
            }
        }
    }
}

module.exports = Notifications;