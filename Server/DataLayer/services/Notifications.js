"use strict";

const Baseservice = require('./BaseService');
const Notification = require('./../models/Notification.js');

class Notifications extends Baseservice {
    constructor (config) {
        let self = this;

        self._collectionName = 'notifications';
        super(config);
    }

    _insert(notification, cb) {
        let self = this;

        self._db.notifications.insertOne(notification.toJson(), function (err, result) {
            cb(err, result);
        });
    }

    _update(notification, cb) {
        let self = this;

        self._db.notifications.updateOne({id: notification.id}, notification.toJson(), function (err, result) {
            cb(err, result);
        });
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