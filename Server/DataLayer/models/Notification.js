"use strict";

class Notification {
    constructor (notificationJson) {
        this._id = notificationJson.id || 0;
        this._type = notificationJson.type || Notification.NOTIFICATION_TYPES.NOTHING;
        this._accountId = notificationJson.accountId || 0;
        this._seen = notificationJson.seen || false;
        this._message = notificationJson.message || '';
        this._link = notificationJson.link || '';
    }

    static get NOTIFICATION_TYPES () {
        return {
            NOTHING: 0,
            COMPLETED: 1,
            EXPIRED: 2,
            REJECTED_PAYMENT: 3,
            BOUNTY_PAID: 4
        };
    }

    get id () { return this._id; }
    get type () { return this._type; }
    get accountId () { return this._accountId; }
    get seen () { return this._seen; }
    get message () { return this._message; }
    get link () { return this._link; }

    set id (val) { this._id = val; }
    set type (val) { this._type = val; }
    set accountId (val) { this._accountId = val; }
    set seen (val) { this._seen = val; }
    set message (val) { this._message = val; }
    set link (val) { this._link = val; }
}

module.exports = Notification;