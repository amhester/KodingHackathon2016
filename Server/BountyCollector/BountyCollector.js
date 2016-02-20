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
                    //if (obj.expiration < now) {
                    if (obj.expiration > now) {
                        console.log("expired...");

                        request.post({
                            url: "http://127.0.0.1:8088/notify/",
                            form: {
                                id: obj.id,
                                type: "",
                                accountId: "",
                                seen: "",
                                message: "",
                                link: "",
                                email: ""
                            }
                        }, function(err, res, body) {
                            if (err) {
                                console.log(err.message);
                            }
                            console.log(res);
                            console.log(body);
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