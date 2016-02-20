"use strict";

var appConfig = require('./app.config.json');
var schedule = require('node-schedule');
var Goals = require('./../DataLayer/services/Goals');
var request = require('request');

(function () {
    var scheduledJob;
    scheduledJob = schedule.scheduleJob(appConfig.cronTest, function () {

        var goals = new Goals({
            "host": appConfig.mongo.host,
            "port": appConfig.mongo.port,
            "store": appConfig.mongo.store,
            "maxRetries": appConfig.mongo.maxRetries
        });

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
                        console.log("expired...");

                        let notification = {
                            id: obj.id,
                            accountId: "",
                            seen: true,
                            message: "this is the message body....",
                            link: "",
                            email: "nealhamilton92@gmail.com"
                        };

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