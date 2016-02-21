"use strict";

var appConfig = require('./../app.config.json');
var schedule = require('node-schedule');
var Goals = require('./../DataLayer/services/Goals');
var Goal = require('./../DataLayer/models/Goals');
var Notifications = require('./../DataLayer/services/Notifications');
var Notification = require('./../DataLayer/models/Notification.js');
var db = require('./../DataLayer/DataRepository');
var request = require('request');

var notifications = new Notifications(appConfig.mongo);
var goals = new Goals(appConfig.mongo);

var notification = null;
(function () {
    console.log("Scheduling a job for every 2 seconds.");
    var scheduledJob = schedule.scheduleJob(appConfig.BountyCollector.cron, function () {
        console.log("Checking goals.");

        db.Goals
            .query()
            .find().toArray(function (err, results) {
            if (err) {
                console.log(err.message);
            }
            var now = new Date().getTime();
            results.forEach(function (obj) {
                if (obj.expiration < now) {
                    if (obj.status = Goal.GOAL_STATUSES.OPEN) {
                        obj.status = Goal.GOAL_STATUSES.EXPIRED;

                        // TODO: generate actual link
                        let link = "/act/" + obj.id;

                        notification = Notification.fromGoal(obj,
                            Notification.NOTIFICATION_TYPES.EXPIRED,
                            false,
                            `Hey...pay up. <a href="$(link)">See goal</a>`, link);

                        notifications.save(notification, function(err, notif) {
                            if (err) {
                                console.log(err.message);
                            }
                            console.log(notif);
                            request({
                                    method: 'POST',
                                    uri: appConfig.BountyCollector.notificationUrl,
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
                    }
                } else {
                    console.log("not expired...");
                }
            });
        });
    });
})();