"use strict";

var appConfig = require('./app.config.json');
var schedule = require('node-schedule');
var Goals = require('./../DataLayer/services/Goals');
var Notifications = require('./../DataLayer/services/Notifications');
var Notification = require('./../DataLayer/models/Notification.js');
var request = require('request');

var notifications = new Notifications(appConfig.mongoConfig);
var goals = new Goals(appConfig.mongoConfig);

var notification = null;
(function () {
    var scheduledJob = schedule.scheduleJob(appConfig.cron, function () {
        goals.onConnected = function () {
            goals
                .query()
                .find().toArray(function (err, results) {
                if (err) {
                    console.log(err.message);
                }
                var now = new Date().getTime();
                results.forEach(function (obj) {
                    if (obj.expiration < now) {

                        notification = new Notification({
                            id: obj.id,
                            accountId: "",
                            seen: true,
                            message: Notification.NOTIFICATION_TYPES.EXPIRED,
                            link: "",
                            email: "nealhamilton92@gmail.com"
                        });

                        notifications.save(notification, function(err, notif) {
                            if (err) {
                                console.log(err.message);
                            }
                            request({
                                    method: 'POST',
                                    uri: appConfig.notificationUrl,
                                    json: notif
                                },
                                function (err, response, body) {
                                    if (err) {
                                        console.log(err.message);
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