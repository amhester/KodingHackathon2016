"use strict";

var SparkpostEmailService = require('./../services/sparkpost-emailService.js');
let Notification = require('./../../DataLayer/models/Notification.js');

let service = new SparkpostEmailService();
let root = '/notify/';

class NotificationService {
    constructor() {
    }

    sendNotification(notification, callback) {
        // This will be called in the callback from the datastore notification adding a notification object

        var emailSend = service.sendEmail([notification.email], "testing@sparkpostbox.com", "WinWin Notification for " + notification.email, notification.message, callback);
        //callback (emailSend.err, emailSend.response);
        return emailSend;
    }

    static NotificationFactory() {
        return new NotificationService();
    }
}

module.exports.register = function( server ) {

    server.post(root + ':id', function (req, res, next) {
        console.log(req.body);
        let notification = new Notification(req.body);
        let notifier = NotificationService.NotificationFactory();
        let notify = notifier.sendNotification(notification, function(err, notification) {
            if (err) {
                console.log(`Notification Error: $(notification)`);
                return err;
            } else {
                return notification;
            }
        });
        res.send(notification);
        next();
    });
};


