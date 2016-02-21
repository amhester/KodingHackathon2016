"use strict";

const SparkpostEmailService = require('./../services/sparkpost-emailService.js');
const Notification = require('./../../DataLayer/models/Notification.js');

const service = new SparkpostEmailService();
const root = '/notify';

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

module.exports = NotificationService;

module.exports.register = function( server ) {

    server.post(root, function (req, res, next) {
        console.log('notification endpoint hit.');
        let notification = new Notification(req.body);
        let notifier = NotificationService.NotificationFactory();
        let notify = notifier.sendNotification(notification, function(err, notification) {
            if (err) {
                console.log("Notification Error: " + notification);
                return err;
            } else {
                res.send(notification);
                next();
            }
        });
    });
};


