"use strict";

var appConfig = require('./app.config.json');
var schedule = require('node-schedule');
var Goal = require('./../DataLayer/models/Goal');
var Goals = require('./../DataLayer/services/Goals');

(function () {

    var scheduledJob = schedule.scheduleJob(appConfig.cronTest, function() {

        var goals = new Goals({
            "host": appConfig.mongo.host,
            "port": appConfig.mongo.port,
            "store": appConfig.mongo.store,
            "maxRetries": appConfig.mongo.maxRetries
        });

        goals.onConnected = function() {
            goals
                .query()
                .find().toArray()
                .then(function(err, results) {
                if (err) {
                    console.log(err);
                }
                console.log(results);
            });
        };


    });

    // select from goals table
        // if expiration date < new Date().now().getTime();


    // create notification

    // call notification service to send notification out via email


})();