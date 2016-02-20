"use strict";

var appConfig = require('./app.config.json');
var schedule = require('node-schedule');
var Goals = require('./../DataLayer/services/Goals');
var Notifications = require('./../DataLayer/services/Notifications');
var Notification = require('./../DataLayer/models/Notification.js');
var request = require('request');

var notifications = new NotificationService(appConfig.mongoConfig);
var goals = new Goals(appConfig.mongoConfig);


(function () {
    var scheduledJob = schedule.scheduleJob(appConfig.cronTest, function () {

        goals.onConnected = function () {
            goals
                .query()
                .find().toArray(function (err, results) {
                if (err) {
                    console.log(err);
                }

                var now = new Date().getTime();
                results.forEach(function (obj) {
                    if (obj.expiration > now) {

                        // TODO: create the notification object here.
                        let notification = {
                            id: obj.id,
                            accountId: "",
                            seen: true,
                            message: Notification.NOTIFICATION_TYPES.EXPIRED,
                            link: "",
                            email: "nealhamilton92@gmail.com"
                        };
                        var notification = new Notification(notification);

                        notifications.save(notification, function(err, notification) {
                            if (err) {
                                console.log(err.message);
                            }
                            request({ method: 'POST',
                                    uri: appConfig.notificationUrl,
                                    json: notification
                                },
                                function (error, response, body) {
                                    if (error) {
                                        console.log("Error: " + error);
                                    } else {
                                        console.log('response:', body);
                                    }
                                });
                        });
                    } else {
                        console.log("not expired...");
                    }
                });
            });
        };
    });
})();