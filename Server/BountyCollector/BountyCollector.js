"use strict";

var appConfig = require('./app.config.json');
var schedule = require('node-schedule');
var Goals = require('./../DataLayer/services/Goals');
var Notifications = require('./../DataLayer/services/Notifications');
var Notification = require('./../DataLayer/models/Notification.js');
var request = require('request');

var mongoconfig = {
    "host": appConfig.mongo.host,
    "port": appConfig.mongo.port,
    "store": appConfig.mongo.store,
    "maxRetries": appConfig.mongo.maxRetries
}
var notifications = new NotificationService(mongoconfig);
var goals = new Goals(mongoconfig);


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
                            message: "this is the message body....",
                            link: "",
                            email: "nealhamilton92@gmail.com"
                        };

                        notifications.save(notification, function(err, notification) {
                            if (err) {
                                console.log(err.message);
                            }
                            request({ method: 'POST',
                                    uri: 'http://127.0.0.1:8081/notification',
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
    // create notification
    // call notification service to send notification out via email
})();